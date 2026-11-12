import { CLIENTS } from "@/lib/site";

const SHAPES = [
  <circle key="c" cx="13" cy="13" r="11" />,
  <rect key="r" x="2" y="2" width="22" height="22" rx="6" />,
  <path key="t" d="M13 2 24 23H2Z" />,
  <path key="b" d="M2 12h6v12H2zM10 6h6v18h-6zM18 2h6v22h-6z" />,
];

/** Client logo ticker. Names are placeholders: swap CLIENTS for real logos. */
export function LogoTicker() {
  const items = [...CLIENTS, ...CLIENTS];
  return (
    <section aria-label="Our clients" className="border-b border-line">
      <div className="mx-auto flex max-w-[1440px] items-center gap-6 px-4 py-6 md:gap-10 md:px-10">
        <span className="label flex-none text-muted">Our clients</span>
        <div
          className="ticker min-w-0 flex-1 overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <ul className="ticker-track flex w-max items-center">
            {items.map((name, i) => (
              <li
                key={i}
                aria-hidden={i >= CLIENTS.length}
                className="display flex h-11 items-center gap-2.5 px-8 text-2xl whitespace-nowrap text-muted"
              >
                <svg viewBox="0 0 26 26" className="size-6" fill="currentColor" aria-hidden="true">
                  {SHAPES[i % SHAPES.length]}
                </svg>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
