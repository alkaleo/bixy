import { BannerPile } from "./BannerPile";
import { Rise, Rule } from "./Reveal";

/**
 * Titles and bodies are kept to matching lengths on purpose: the three cards
 * sit side by side, so uneven copy makes one wrap a line deeper than the rest
 * and the row looks ragged. Keep titles at two words and bodies near 51
 * characters when editing.
 */
type PointIcon = "attention" | "act" | "boost";

/**
 * Duotone marks: one soft plate plus a solid figure, both in currentColor, so
 * they sit on the blue without needing a second palette. The motion lives in
 * globals.css and runs once on card hover.
 */
const ICONS: Record<PointIcon, React.ReactNode> = {
  attention: (
    <>
      <rect className="duo-plate" x="4" y="4" width="40" height="40" rx="11" />
      <ellipse className="duo-eye" cx="24" cy="25" rx="14" ry="9" />
      <circle className="duo-pupil" cx="24" cy="25" r="5" />
      <g className="duo-rays" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <path d="M24 11.5v-4" />
        <path d="M35.5 15.5l2.6-2.9" />
        <path d="M12.5 15.5l-2.6-2.9" />
      </g>
    </>
  ),
  act: (
    <>
      <rect className="duo-plate" x="4" y="4" width="40" height="40" rx="11" />
      <circle
        className="duo-ripple"
        cx="21"
        cy="21"
        r="8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
      />
      <path className="duo-cursor" d="M18 17.5l13.5 12.4-6 .6 2.6 6.2-3.4 1.5-2.7-6.2-4 4.3z" />
    </>
  ),
  boost: (
    <>
      <rect className="duo-plate" x="4" y="4" width="40" height="40" rx="11" />
      <g className="duo-bars">
        <rect x="12" y="27" width="6.5" height="10" rx="2.4" />
        <rect x="20.75" y="22" width="6.5" height="15" rx="2.4" />
        <rect x="29.5" y="15" width="6.5" height="22" rx="2.4" />
      </g>
    </>
  ),
};

const POINTS: Array<{ icon: PointIcon; title: string; body: string }> = [
  {
    icon: "attention",
    title: "Get attention",
    body: "Animations and interesting experiences get noticed.",
  },
  {
    icon: "act",
    title: "Act instantly",
    body: "People engage with your brand without ever leaving.",
  },
  {
    icon: "boost",
    title: "Boost results",
    body: "Less friction means better advertising performance.",
  },
];

export function Why() {
  return (
    <section id="why" className="border-b border-line">
      <div className="mx-auto max-w-[1440px] px-4 pt-16 md:px-10 md:pt-28">
        <div className="flex items-center justify-between pb-4">
          <span className="label text-muted">Why?</span>
        </div>
        <Rule />
        <Rise>
          <h2 className="display pt-6 text-[clamp(3.2rem,11.5vw,11rem)] text-ink md:pt-8">
            Most people are <span className="text-brand">banner blind.</span>
          </h2>
        </Rise>
      </div>

      {/* One blue block for the pile and the three points, with a divider
          between them so the pile does not bleed straight into the cards. */}
      <div className="mt-10 bg-brand-surface text-on-brand-surface md:mt-14">
        <BannerPile />

        <div className="mx-auto max-w-[1440px] px-4 md:px-10">
          <div className="h-px w-full bg-on-brand-surface/20" />
        </div>

        <div className="mx-auto max-w-[1440px] px-4 md:px-10">
          <ul className="grid md:grid-cols-3">
            {POINTS.map((p, i) => (
              <li
                key={p.title}
                className="group border-on-brand-surface/20 not-last:border-b md:not-last:border-r md:not-last:border-b-0"
              >
                <Rise delay={i * 0.08} className="h-full">
                  <div className="flex h-full flex-col gap-10 px-1 py-12 transition-colors duration-300 group-hover:bg-on-brand-surface/10 md:gap-28 md:px-7 md:py-16">
                    <svg
                      viewBox="0 0 48 48"
                      className="pt-icon size-12 flex-none md:size-14"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {ICONS[p.icon]}
                    </svg>
                    <div>
                      <h3 className="display text-5xl md:text-6xl">{p.title}</h3>
                      <p className="mt-4 max-w-[34ch] text-lg leading-snug text-on-brand-surface/70">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Rise>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
