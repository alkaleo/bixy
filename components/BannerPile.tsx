"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Item = { w: number; h: number; label: string; hero?: boolean };

// Stable identity, so the physics effect below doesn't re-run before we measure.
const NO_ITEMS: Item[] = [];

// Standard display sizes. Grey ones are static banners; the hero is ours.
const SIZES: Array<[number, number]> = [
  [728, 90],
  [300, 250],
  [160, 600],
  [320, 50],
  [336, 280],
  [970, 90],
  [300, 600],
  [250, 250],
  [468, 60],
  [300, 250],
  [728, 90],
  [320, 100],
  [160, 600],
  [300, 250],
  [970, 90],
  [336, 280],
];

function buildItems(width: number): Item[] {
  const scale = Math.max(0.2, Math.min(0.36, width / 3400));
  const count = width < 640 ? 9 : SIZES.length;
  const items: Item[] = SIZES.slice(0, count).map(([w, h]) => ({
    w: Math.round(w * scale),
    h: Math.round(h * scale),
    label: `${w}×${h}`,
  }));
  const heroScale = Math.max(0.34, Math.min(0.5, width / 2400));
  items.push({ w: Math.round(300 * heroScale), h: Math.round(250 * heroScale), label: "Tap me", hero: true });
  return items;
}

/**
 * "Banner blind", shown literally: grey static banners fall into a pile and
 * sit there. One interactive ad keeps hopping. Drag them around with a mouse;
 * tap the orange one on any device.
 */
export function BannerPile() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<Array<HTMLDivElement | null>>([]);
  const hopRef = useRef<() => void>(() => {});
  const [taps, setTaps] = useState(0);
  const [width, setWidth] = useState(0);
  const [active, setActive] = useState(false);

  // Derived from the measured width, so it belongs in render, not an effect.
  const items = useMemo(() => (width > 0 ? buildItems(width) : NO_ITEMS), [width]);

  // Measure, and start only once the pile scrolls into view.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    let t: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => {
      clearTimeout(t);
      t = setTimeout(() => setWidth(Math.round(el.clientWidth)), 150);
    });
    ro.observe(el);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => {
      clearTimeout(t);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !active || items.length === 0) return;
    let cancelled = false;
    let cleanup = () => {};

    import("matter-js").then((mod) => {
      if (cancelled) return;
      const Matter = mod.default ?? mod;
      const { Engine, Bodies, Body, Composite, Mouse, MouseConstraint } = Matter;
      const W = el.clientWidth;
      const H = el.clientHeight;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const finePointer = window.matchMedia("(pointer: fine)").matches;

      const engine = Engine.create({ gravity: { x: 0, y: 1.1, scale: 0.001 } });
      const wall = { isStatic: true, restitution: 0.2, friction: 0.6 };
      Composite.add(engine.world, [
        Bodies.rectangle(W / 2, H + 40, W + 400, 80, wall),
        Bodies.rectangle(-40, H / 2 - 400, 80, H + 1600, wall),
        Bodies.rectangle(W + 40, H / 2 - 400, 80, H + 1600, wall),
      ]);

      const bodies = items.map((it, i) => {
        const x = 40 + ((i * 197) % Math.max(60, W - 80));
        const y = it.hero ? -H * 1.5 : -80 - i * 70;
        const b = Bodies.rectangle(x, y, it.w, it.h, {
          restitution: it.hero ? 0.55 : 0.12,
          friction: 0.55,
          frictionAir: 0.012,
          density: it.hero ? 0.0022 : 0.001,
          chamfer: { radius: 3 },
          angle: ((i % 5) - 2) * 0.22,
        });
        return b;
      });
      Composite.add(engine.world, bodies);
      const heroBody = bodies[bodies.length - 1];

      hopRef.current = () => {
        Body.setVelocity(heroBody, { x: (Math.random() - 0.5) * 7, y: -12 });
        Body.setAngularVelocity(heroBody, (Math.random() - 0.5) * 0.3);
      };

      let mouse: ReturnType<typeof Mouse.create> | null = null;
      if (finePointer && !reduce) {
        mouse = Mouse.create(el);
        // Let the page scroll normally over the pile.
        const m = mouse as unknown as { mousewheel: EventListener };
        el.removeEventListener("wheel", m.mousewheel);
        el.removeEventListener("mousewheel", m.mousewheel);
        el.removeEventListener("DOMMouseScroll", m.mousewheel);
        Composite.add(
          engine.world,
          MouseConstraint.create(engine, { mouse, constraint: { stiffness: 0.18, damping: 0.2 } }),
        );
      }

      const paint = () => {
        bodies.forEach((b, i) => {
          const node = nodesRef.current[i];
          const it = items[i];
          if (!node || !it) return;
          node.style.transform = `translate3d(${b.position.x - it.w / 2}px, ${b.position.y - it.h / 2}px, 0) rotate(${b.angle}rad)`;
          node.style.opacity = "1";
        });
      };

      let raf = 0;
      let hop: ReturnType<typeof setInterval> | undefined;
      if (reduce) {
        for (let i = 0; i < 420; i++) Engine.update(engine, 1000 / 60);
        paint();
      } else {
        let last = performance.now();
        const loop = (now: number) => {
          const dt = Math.min(32, now - last);
          last = now;
          Engine.update(engine, dt);
          paint();
          raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        hop = setInterval(() => {
          if (!document.hidden) hopRef.current();
        }, 2600);
      }

      cleanup = () => {
        cancelAnimationFrame(raf);
        if (hop) clearInterval(hop);
        if (mouse) Mouse.clearSourceEvents(mouse);
        Composite.clear(engine.world, false);
        Engine.clear(engine);
      };
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [active, items]);

  return (
    <div
      ref={wrapRef}
      className="relative h-[340px] overflow-hidden bg-brand-surface text-on-brand-surface select-none md:h-[440px]"
    >
      {/* The pile runs full-bleed, but these labels line up with the site's
          content column like every other label on the page. */}
      <div className="pointer-events-none absolute inset-x-0 top-10 md:top-14">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 md:px-10">
          <span className="label text-on-brand-surface/70">Static banners: ignored</span>
          <span className="label hidden text-on-brand-surface/70 sm:block">Drag them around</span>
        </div>
      </div>
      {items.map((it, i) =>
        it.hero ? (
          <div
            key={`${width}-${i}`}
            ref={(n) => {
              nodesRef.current[i] = n;
            }}
            className="absolute top-0 left-0 opacity-0 will-change-transform"
            style={{ width: it.w, height: it.h }}
          >
            <button
              type="button"
              onClick={() => {
                setTaps((v) => v + 1);
                hopRef.current();
              }}
              className="flex size-full cursor-pointer flex-col items-center justify-center gap-1 rounded-[4px] bg-signal text-on-signal shadow-[0_10px_30px_-8px_var(--signal)]"
            >
              <span className="display text-xl md:text-3xl">{taps === 0 ? "Tap me" : `Tapped ×${taps}`}</span>
              <span className="label text-[10px]">Interactive ad</span>
            </button>
          </div>
        ) : (
          <div
            key={`${width}-${i}`}
            ref={(n) => {
              nodesRef.current[i] = n;
            }}
            aria-hidden="true"
            className="absolute top-0 left-0 flex items-center justify-center rounded-[3px] border border-on-brand-surface/15 bg-on-brand-surface/10 opacity-0 will-change-transform"
            style={{ width: it.w, height: it.h }}
          >
            <span className="font-mono text-[9px] tracking-wider text-on-brand-surface/45">{it.label}</span>
          </div>
        ),
      )}
    </div>
  );
}
