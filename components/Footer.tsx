import { BOOK_URL, LINKEDIN_URL } from "@/lib/site";
import { LogoWordmark } from "./Logo";

export function Footer() {
  return (
    <footer className="overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-4 pt-12 md:px-10 md:pt-16">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-10">
          <p className="text-sm text-muted">© 2026 Bixy. All rights reserved.</p>
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
            <a href="#top" className="inline-flex h-11 items-center underline-offset-4 hover:underline">
              Back to top
            </a>
            <a href="#pricing" className="inline-flex h-11 items-center underline-offset-4 hover:underline">
              Pricing
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center font-semibold text-brand underline-offset-4 hover:underline"
            >
              Book an Intro
            </a>
          </nav>
        </div>
        <LogoWordmark className="-mb-[1.5%] block h-auto w-full text-brand" />
      </div>
    </footer>
  );
}
