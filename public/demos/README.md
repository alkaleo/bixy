# Demos

Each folder here is one self-contained HTML5 ad, 300x600:

```
demos/<id>/index.html     markup
demos/<id>/style.css      styles
demos/<id>/creative.js    behaviour
```

The site loads `index.html` in an iframe inside the hero browser. An ad has no
dependency on the site, so the same folder can be zipped and uploaded to a DSP.

## Why "demos" and not "ads"
Ad blockers drop any request whose URL contains `/ads/` or ends in `ad.js`, so
under the old names the hero demo rendered as an empty white box for anyone
running uBlock Origin or Brave. Keep these names free of "ad", "ads", "banner"
and "sponsor" — on this site the demo *is* the sales pitch.

## Replace a demo ad with a real one
Overwrite the files in its folder. Keep the entry file named `index.html`.

## Add a new category
1. Create `demos/<id>/` with an `index.html`.
2. Add a line to `ads.config.ts` in the project root (id, tab label, icon, publisher name).
