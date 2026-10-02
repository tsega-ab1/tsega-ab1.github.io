# tsega-ab1.github.io

This is the whole site for the clean root URL — merges the two builds
from before into one repo:

```
tsega-ab1.github.io/
├── index.html, about.html, projects.html, resume.html, contact.html
├── css/, js/, assets/        ← the main dev portfolio (was "dev-portfolio")
└── design/
    ├── index.html, works.html, project.html
    └── css/, js/, assets/    ← the graphic design gallery (was "design-portfolio")
```

Nothing else changed from the two builds you already reviewed — this
commit is just: merge them into one repo, and fix every link that used to
point at a sibling folder in `frontend-projects` (`../06-portfolio-site`,
`../07-design-portfolio`) so they point at the right place inside this
repo instead:

- Root pages' nav now links to `design/index.html` for "Design work"
  (the old "Main site" link is gone — this repo *is* the main site now).
- `design/`'s pages now link back to `../index.html`, `../about.html`,
  `../projects.html`, `../contact.html`, and (newly added) `../resume.html`
  instead of a `06-portfolio-site` that no longer exists in this repo.

Everything else from the previous READMEs still applies — see the
placeholders you still need to fill in (email, LinkedIn, your photo,
`assets/resume.pdf`, education) and how `js/data.js` / `design/js/data.js`
drive the content.

## Push it

You already cloned and pushed an initial copy of the old site into this
repo. This replaces that with the merged, cleaned-up version:

```bash
cd ~/tsega-ab1.github.io
# delete everything except .git, then copy this folder's contents in
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -r /path/to/this/extracted/folder/* .
git add .
git commit -m "Clean UI rebuild: merge dev + design portfolios into one site"
git push origin main
```

Live at `https://tsega-ab1.github.io/` and `https://tsega-ab1.github.io/design/`
within a minute or two of the push.
