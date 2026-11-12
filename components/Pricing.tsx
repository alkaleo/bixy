import { BOOK_URL } from "@/lib/site";
import { Rise, Rule } from "./Reveal";

/**
 * The two plans sit side by side, so their bullets are written to matching
 * lengths (~34 characters) and to a "We ... / You ..." parallel. Lopsided
 * bullets made one card's list run two lines deep while the other ran one.
 */
const PLANS = [
  {
    name: "Full Service",
    bullets: ["We build the ads for your campaign.", "We run and optimise the media buy."],
    extra: "+ 10% of media",
  },
  {
    name: "Self Service",
    bullets: ["You build your own ads in minutes.", "You run them on your current DSP."],
    extra: "+ $2 CPM",
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-line">
      <div className="mx-auto max-w-[1440px] px-4 pt-16 md:px-10 md:pt-28">
        <div className="flex items-center justify-between pb-4">
          <span className="label text-muted">Pricing</span>
        </div>
        <Rule />
        <Rise>
          <h2 className="display pt-6 text-[clamp(3.2rem,11.5vw,11rem)] text-ink md:pt-8">
            Transparent <span className="text-brand">pricing.</span>
          </h2>
        </Rise>

        <div className="mt-10 grid border-t border-line md:mt-16 md:grid-cols-2">
          {PLANS.map((plan, i) => (
            <Rise
              key={plan.name}
              delay={i * 0.1}
              className="border-line not-last:border-b md:not-last:border-r md:not-last:border-b-0"
            >
              <article className="group flex h-full flex-col gap-10 px-1 py-9 transition-colors duration-300 hover:bg-brand-surface hover:text-on-brand-surface md:px-8 md:py-10">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="display text-5xl md:text-7xl">{plan.name}</h3>
                  <span className="label text-muted transition-colors duration-300 group-hover:text-on-brand-surface">
                    0{i + 1}
                  </span>
                </div>

                <ul className="flex flex-col gap-3">
                  {plan.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-lg leading-snug">
                      <svg
                        viewBox="0 0 24 24"
                        className="mt-1 size-5 flex-none"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-end justify-between gap-6 pt-6">
                  <div>
                    <p className="flex items-baseline gap-2">
                      <span className="display text-[clamp(5rem,12vw,9.5rem)]">$500</span>
                      <span className="text-lg text-muted transition-colors duration-300 group-hover:text-on-brand-surface">
                        / month
                      </span>
                    </p>
                    <p className="label mt-3 inline-block rounded-full border border-current px-3.5 py-1.5 text-[13px]">
                      {plan.extra}
                    </p>
                  </div>
                  <a
                    href={BOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-14 items-center gap-2 rounded-full bg-signal px-7 text-base font-semibold text-on-signal transition-colors duration-200 hover:bg-signal-deep"
                  >
                    Book an Intro
                    <svg
                      viewBox="0 0 24 24"
                      className="cta-arrow size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </a>
                </div>
              </article>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}
