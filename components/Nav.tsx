import { BOOK_URL } from "@/lib/site";
import { LogoIcon, LogoWordmark } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-3 px-4 md:px-10">
        <a href="#top" aria-label="Bixy, back to top" className="flex items-center gap-2.5 text-brand">
          <LogoIcon className="size-8" />
          <LogoWordmark className="h-4 w-auto text-ink" />
        </a>
        <div className="flex items-center gap-2 md:gap-3">
          <ThemeToggle />
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-signal px-5 text-sm font-semibold text-on-signal transition-colors duration-200 hover:bg-signal-deep"
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
      </div>
    </header>
  );
}
