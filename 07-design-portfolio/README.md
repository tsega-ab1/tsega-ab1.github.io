# Design Portfolio — matching your reference comps

Rebuilt to match the three reference screens you shared: a scrolling
landing page with a numbered section per category (big featured image +
thumbnail column, alternating dark/light backgrounds, lime accent), a
filterable "all work" grid, and a case-study template for deeper projects
(concept, color palette, typography, mockups, details) — themed dark or
light per project, like your TSEGA card (dark) vs. Zena (light) examples.

No build step — static HTML/CSS/JS, three pages:

```
design-portfolio/
├── index.html     # hero + Posters/Book Covers/Illustrations/Branding sections
├── works.html     # every piece, filterable — every "View all →" lands here
├── project.html   # case-study template, driven by ?id=
├── css/style.css
├── js/data.js     # <- everything lives here, see below
├── js/util.js     # shared image-fallback + lightbox
├── js/home.js
├── js/works.js
└── js/project.js
```

## Everything is driven by `js/data.js`

- **Add a piece of work:** add an entry to `WORKS` (or rather
  `PORTFOLIO_DATA.works`) with `title`, `category`, `year`, `image`, and
  `hasCaseStudy: false`. It shows up in `works.html` automatically, and in
  a section's thumbnail column if you reference its id there.
- **Give a piece its own case-study page:** set `hasCaseStudy: true` and add
  `theme` (`"dark"` or `"light"`), `client`, `projectType`, `concept`
  (`eyebrow`, `headline`, `description`, `traits`), `palette` (array of
  `{hex, label}`), `typography` (array of `{name, role}`), and optionally
  `mockups` / `details` (arrays of `{image, caption}`). `project.html?id=...`
  renders all of it; leave `mockups`/`details` empty to skip those sections
  entirely rather than showing an empty grid.
- **Add a whole new landing-page section:** add an entry to `categories`
  (number, label, kicker, description, `bg` color, `theme`, a
  `featuredWork` id, and a few `thumbWorks` ids). Nothing else needs to
  change — `index.html` loops over this array.
- **A category with no dedicated section yet** (Social Media, Art are set
  up this way) still appears correctly in `works.html`'s filters — it just
  doesn't get its own big landing-page block until you add one.

## Images

Every `image` path is a placeholder (`assets/works/...`) — none of the
actual artwork exists yet. Drop real files in at those paths (any name/
path is fine, just update `data.js` to match) and they'll appear
automatically. Until then, every tile gracefully falls back to a
colour-tinted panel with the title, so nothing looks broken while you're
filling it in gradually.

**This needs a local server to preview** (`npx serve .` or VS Code's Live
Server) — opening `index.html` directly from disk works for the layout,
but the lightbox and fallback images behave better served over http.

## One thing to check before you push

Every nav link back to your main site assumes this folder sits *inside*
`06-portfolio-site` (i.e. as `06-portfolio-site/07-design-portfolio/`), so the
links are `../index.html`. If you move it somewhere else, find/replace that
path across the three HTML files.

## What I couldn't do

I don't have access to your actual `06-portfolio-site` source, so this is a
close visual match to the comps you shared (same palette, type roles,
section rhythm) rather than a literal shared-codebase integration. The two
things most worth double-checking once it's live: the "Work Projects" /
"About" / "Contact" anchor links (I guessed `#work` / `#about` / `#contact`
— adjust if your main site uses different section ids), and the
`--font-display` / `--font-body` choices in `css/style.css` if your main
site already commits to specific typefaces.
