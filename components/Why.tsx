import { BannerPile } from "./BannerPile";
import { Rise, Rule } from "./Reveal";

/**
 * Titles and bodies are kept to matching lengths on purpose: the three cards
 * sit side by side, so uneven copy makes one wrap a line deeper than the rest
 * and the row looks ragged. Keep titles at two words and bodies near 51
 * characters when editing.
 */
const POINTS = [
  {
    n: "A",
    title: "Get attention",
    body: "Animations and interesting experiences get noticed.",
  },
  {
    n: "B",
    title: "Act instantly",
    body: "People engage with your brand without ever leaving.",
  },
  {
    n: "C",
    title: "Boost results",
    body: "Less friction means better advertising performance.",
  },
];

export function Why() {
  return (
    <section id="why" className="border-b border-line">
      <div className="mx-auto max-w-[1440px] px-4 pt-16 md:px-10 md:pt-28">
        <div className="flex items-center justify-between pb-4">
          <span className="label text-muted">02 / Why?</span>
        </div>
        <Rule />
        <Rise>
          <h2 className="display pt-6 text-[clamp(3.2rem,11.5vw,11rem)] text-ink md:pt-8">
            Most people are <span className="text-brand">banner blind.</span>
          </h2>
        </Rise>
      </div>

      <div className="mt-10 md:mt-14">
        <BannerPile />
      </div>

      <div className="mx-auto max-w-[1440px] px-4 md:px-10">
        <ul className="grid md:grid-cols-3">
          {POINTS.map((p, i) => (
            <li
              key={p.title}
              className="group border-line not-last:border-b md:not-last:border-r md:not-last:border-b-0"
            >
              <Rise delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col gap-10 px-1 py-8 transition-colors duration-300 group-hover:bg-brand group-hover:text-on-brand md:gap-24 md:px-7 md:py-9">
                  <span className="label text-muted transition-colors duration-300 group-hover:text-on-brand">
                    {p.n}
                  </span>
                  <div>
                    <h3 className="display text-5xl md:text-6xl">{p.title}</h3>
                    <p className="mt-4 max-w-[34ch] text-lg leading-snug text-muted transition-colors duration-300 group-hover:text-on-brand">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Rise>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
