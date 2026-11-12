import { HeroTitle } from "./HeroTitle";
import { BrowserDemo } from "./BrowserDemo";

export function Hero() {
  return (
    <section className="border-b border-line">
      <div className="hero mx-auto max-w-[1440px] px-4 pt-6 pb-10 md:px-10 md:pt-8 md:pb-14">
        <div className="flex items-center justify-between gap-4 pb-4">
          <span className="label text-muted">01 / Interactive display ads</span>
          <span className="label hidden text-muted sm:inline">300 × 600 and beyond</span>
        </div>

        <HeroTitle />

        <div className="mt-5 flex flex-wrap items-end justify-between gap-x-10 gap-y-3 md:mt-6">
          <p className="text-2xl font-medium tracking-tight text-ink md:text-[32px]">
            Ads people see and use.
          </p>
          <p className="flex items-center gap-2 text-sm text-muted">
            <svg
              viewBox="0 0 24 24"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
            Switch tabs, then play with the ad. It&rsquo;s live.
          </p>
        </div>

        <div id="examples" className="mx-auto mt-6 max-w-[1200px] md:mt-8">
          <BrowserDemo />
        </div>
      </div>
    </section>
  );
}
