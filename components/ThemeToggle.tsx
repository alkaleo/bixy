"use client";

import { useSyncExternalStore } from "react";

type Theme = "light" | "dark";
const KEY = "bixy-theme";

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * The theme is not React state: it lives on <html data-theme> and in the OS
 * setting. Subscribe to both rather than copying them into state.
 */
function subscribe(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", onStoreChange);
  const mo = new MutationObserver(onStoreChange);
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => {
    mq.removeEventListener("change", onStoreChange);
    mo.disconnect();
  };
}

function readTheme(): Theme {
  const forced = document.documentElement.getAttribute("data-theme");
  return forced === "light" || forced === "dark" ? forced : systemTheme();
}

// No theme on the server: the icon settles on the first client render.
const noTheme = () => null;

/**
 * Follows the OS theme by default. Clicking picks a theme and remembers it.
 * Picking the same theme the OS uses clears the override, so the site goes
 * back to following the OS.
 */
export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme | null>(subscribe, readTheme, noTheme);

  const toggle = () => {
    const root = document.documentElement;
    const next: Theme = theme === "dark" ? "light" : "dark";
    try {
      if (next === systemTheme()) {
        root.removeAttribute("data-theme");
        localStorage.removeItem(KEY);
      } else {
        root.setAttribute("data-theme", next);
        localStorage.setItem(KEY, next);
      }
    } catch {
      root.setAttribute("data-theme", next);
    }
    // No setState: changing the attribute is what the subscription watches.
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="group relative grid size-11 cursor-pointer place-items-center rounded-full border border-line text-ink transition-colors hover:border-ink"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-5 transition-transform duration-500 ease-out group-hover:rotate-45"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {isDark ? (
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </>
        )}
      </svg>
    </button>
  );
}
