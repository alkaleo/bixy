"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ADS, type AdIcon } from "@/ads.config";

const ICONS: Record<AdIcon, React.ReactNode> = {
  car: (
    <>
      <path d="M3 13l2-5a2 2 0 0 1 1.9-1.4h10.2A2 2 0 0 1 19 8l2 5" />
      <rect x="3" y="13" width="18" height="5" rx="1.5" />
      <circle cx="7.5" cy="18.5" r="1.5" />
      <circle cx="16.5" cy="18.5" r="1.5" />
    </>
  ),
  cart: (
    <>
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2 3h3l2.7 12.4a1.5 1.5 0 0 0 1.5 1.1h8.6a1.5 1.5 0 0 0 1.5-1.1L21 7H6" />
    </>
  ),
  home: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </>
  ),
  fork: (
    <>
      <path d="M6 3v7a3 3 0 0 0 6 0V3" />
      <path d="M9 3v18" />
      <path d="M18 21V3c-2.5 1.5-3.5 4.5-3.5 7.5S15.5 15 18 15" />
    </>
  ),
  bag: (
    <>
      <path d="M5 8h14l-1 12H6L5 8z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </>
  ),
  signal: (
    <>
      <path d="M4 20v-3M9 20v-7M14 20v-11M19 20v-15" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9-4.1-1.1-7-4.8-7-9V6l7-3z" />
      <path d="M9.4 12.1l1.9 1.9 3.3-3.6" />
    </>
  ),
};

/**
 * Where a category's ad actually answers, which is not the same path twice.
 *
 * `next dev` serves public/ literally, so it only answers the full filename.
 * On Vercel the Next router owns .html paths and 404s this one, while the very
 * same file answers at the extensionless path. Hard-coding either spelling
 * ships a hero full of empty frames in the other environment, which is exactly
 * how this shipped broken once.
 */
const demoSrc = (id: string) =>
  process.env.NODE_ENV === "production" ? `/demos/${id}` : `/demos/${id}/index.html`;

function Bar({ w, h = 8, strong = false }: { w: string; h?: number; strong?: boolean }) {
  return (
    <div
      className={strong ? "rounded bg-ink/20" : "rounded bg-ink/10"}
      style={{ width: w, height: h }}
    />
  );
}

/**
 * The hero browser: one tab per category, a publisher page mock on the left
 * and the live 300x600 ad (an iframe from /public/demos/<id>/) on the right.
 *
 * Nothing user-visible here is named "ad": blockers commonly drop URLs with
 * /ads/ in the path and scripts named ad.js, and this demo is the whole pitch.
 * If one hides the frame anyway, we show a fallback rather than a white box.
 */
export function BrowserDemo() {
  const [sel, setSel] = useState(ADS[0].id);
  const current = ADS.find((a) => a.id === sel) ?? ADS[0];

  // The id whose demo a blocker refused to serve.
  //
  // We ask for the demo ourselves rather than trusting the iframe's load event:
  // a blocked frame still fires `load`, just with an empty document, so that
  // event cannot tell "shown" from "swallowed". A blocker filtering the URL
  // fails this request the same way it fails the frame.
  const [failedId, setFailedId] = useState<string | null>(null);
  const blocked = failedId === sel;

  useEffect(() => {
    let cancelled = false;
    fetch(demoSrc(sel))
      .then((res) => {
        if (!cancelled) setFailedId((prev) => (res.ok ? (prev === sel ? null : prev) : sel));
      })
      .catch(() => {
        if (!cancelled) setFailedId(sel);
      });
    return () => {
      cancelled = true;
    };
  }, [sel]);

  return (
    // 675px = the 52px tab strip + the 600px ad + padding. At the wrapper's
    // max width of 1200px that is exactly 16:9; an `aspect-video` here would
    // instead force the width to 1200px and scroll the page sideways below it.
    <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-[0_40px_80px_-40px_rgba(17,11,59,0.45)] md:min-h-[675px]">
      {/* Tab strip */}
      <div className="flex h-[52px] flex-none items-end gap-3 border-b border-line bg-chrome px-3.5">
        <div aria-hidden="true" className="hidden h-11 flex-none items-center gap-[7px] sm:flex">
          <span className="size-[11px] rounded-full bg-ink/20" />
          <span className="size-[11px] rounded-full bg-ink/20" />
          <span className="size-[11px] rounded-full bg-ink/20" />
        </div>
        <div
          role="tablist"
          aria-label="Example industries"
          className="tabstrip -mb-px flex min-w-0 flex-1 items-end gap-0.5 self-stretch overflow-x-auto"
        >
          {ADS.map((ad) => {
            const on = ad.id === sel;
            return (
              <button
                key={ad.id}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls="demo-panel"
                onClick={() => setSel(ad.id)}
                className={
                  "relative inline-flex h-[45px] max-w-[196px] flex-[1_0_auto] cursor-pointer items-center gap-2 rounded-t-[10px] px-3.5 text-[13px] font-semibold whitespace-nowrap transition-colors " +
                  (on ? "text-ink" : "text-muted hover:text-ink")
                }
              >
                {on && (
                  <motion.span
                    layoutId="active-tab"
                    className="absolute inset-0 rounded-t-[10px] border border-b-0 border-line bg-card"
                    transition={{ type: "spring", stiffness: 420, damping: 36 }}
                  />
                )}
                <svg
                  viewBox="0 0 24 24"
                  className="relative size-4 flex-none"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[ad.icon]}
                </svg>
                <span className="relative">{ad.label}</span>
              </button>
            );
          })}
        </div>
        <span className="label hidden h-11 flex-none items-center text-[11px] text-muted lg:flex">
          300 × 600
        </span>
      </div>

      {/* Page */}
      <div
        id="demo-panel"
        role="tabpanel"
        className="flex flex-1 items-start justify-center gap-12 p-2.5 md:justify-between md:pr-6 md:pl-[4%]"
      >
        {/* Publisher page mock */}
        <div aria-hidden="true" className="hidden max-w-[660px] min-w-0 flex-1 flex-col gap-2.5 pt-3 md:flex">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={current.id}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              className="label text-brand"
            >
              {current.publisher}
            </motion.span>
          </AnimatePresence>
          <Bar w="96%" h={22} strong />
          <Bar w="72%" h={22} strong />
          <Bar w="44%" h={9} />
          <div className="my-2 h-[180px] rounded-xl bg-ink/[0.07]" />
          <Bar w="100%" />
          <Bar w="94%" />
          <Bar w="98%" />
          <Bar w="86%" />
          <Bar w="100%" />
          <Bar w="58%" />
          <div className="mt-3.5">
            <Bar w="62%" h={13} strong />
          </div>
          <Bar w="100%" />
          <Bar w="92%" />
          <Bar w="97%" />
          <Bar w="74%" />
          <Bar w="100%" />
          <Bar w="88%" />
          <Bar w="46%" />
        </div>

        {/* The ad slot: always exactly 300x600 */}
        {/* No border or background here: every ad bundle draws its own, and
            two stacked frames read as a mistake. */}
        <div className="relative h-[600px] w-[300px] flex-none overflow-hidden rounded-md">
          <AnimatePresence mode="wait" initial={false}>
            <motion.iframe
              key={current.id}
              src={demoSrc(current.id)}
              title={`${current.label} interactive ad example, 300 by 600`}
              width={300}
              height={600}
              // No loading="lazy": this is above the fold, so deferring it only
              // delays the one thing visitors came to see.
              sandbox="allow-scripts"
              className="absolute inset-0 block h-[600px] w-[300px] border-0"
              initial={{ opacity: 0, scale: 0.985 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>

          {/* Shown only if the frame never loads, so a blocked visitor still
              gets the pitch and a way to see the real thing. */}
          {blocked && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-paper px-6 text-center">
              <span className="label text-muted">Blocked</span>
              <p className="display text-xl leading-tight text-ink">
                Your ad blocker hid this ad.
              </p>
              <p className="text-sm text-muted">
                Which is rather the point — {current.label.toLowerCase()} banners get
                ignored or filtered. Ours is a real, playable one.
              </p>
              <a
                href={demoSrc(current.id)}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-signal px-5 py-2.5 text-sm font-semibold text-on-signal"
              >
                Open the demo →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
