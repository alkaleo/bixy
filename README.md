# Bixy website

Next.js (App Router) + TypeScript + Tailwind CSS + Motion. Static export.

## Run
```
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Where things are
- `app/` page, layout, theme tokens (`globals.css`)
- `components/` Nav, Hero, BrowserDemo, BannerPile, Why, Pricing, Footer
- `public/demos/<id>/` one self-contained HTML5 ad (300x600) per category; see `public/demos/README.md` (the folder is not called `ads/` on purpose — ad blockers)
- `ads.config.ts` the tabs in the hero browser
- `lib/site.ts` booking link, headline words, client names for the ticker
