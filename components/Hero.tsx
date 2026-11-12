import { HeroTitle } from "./HeroTitle";
import { BrowserDemo } from "./BrowserDemo";

export function Hero() {
  return (
    <section className="border-b border-line">
      <div className="hero mx-auto max-w-[1440px] px-4 pt-16 pb-10 md:px-10 md:pt-24 md:pb-14">
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

        {/* Full content width: a narrower mock than the text above it looked
            like a mistake rather than a frame. */}
        <div id="examples" className="mt-6 md:mt-8">
          <BrowserDemo />
        </div>
      </div>
    </section>
  );
}
