# Acres — Real Estate Template

A React real-estate template: 33 pages, five homepage variants, listings/agents/agency
sections, and a Leaflet map. All content is static — see [Data](#data) below.

## Stack

| | |
|---|---|
| React | 19 |
| Build tool | Vite 7 |
| Routing | react-router-dom 7 |
| UI | Bootstrap 5 + react-bootstrap 2 |
| Map | Leaflet 1.9 + react-leaflet 5 |

## Scripts

```bash
npm install
npm start      # dev server on http://localhost:3000
npm run build  # production build -> dist/
npm run preview # serve the production build locally
```

Requires Node 20+.

## Structure

Pages compose sections; sections hold the markup.

```
index.html              Vite entry (page title/description come from React, not here)
vite.config.js
src/
  index.js              createRoot + global CSS imports
  App.js                all 33 routes, each lazy-loaded
  components/
    pages/              one file per route: <title> + Header + Content + Footer
    sections/<page>/    Content.js lists that page's sections; siblings hold markup
    layouts/            Header/Footer/Menu/sidebars + shared widgets
  data/                 JSON content (see below)
  helper/               Navigationhelper.js — base class the Header variants extend
  assets/css/style.css  the template's own 6.5k-line stylesheet
```

Note: `components/layouts/App.js` is **not** the app — it is a "Download Our App"
footer widget. The real entry is `src/App.js`.

## Data

There is no backend. Every listing, agent, and blog post is hardcoded in
`src/data/*.json`, and body copy is Lorem Ipsum. Forms (login, register, contact,
submit-listing) render but do not submit anywhere; the sidebar filters and the
"loading" spinner on paginated lists are presentational only.

Swapping `src/data/*.json` for API calls is the natural first step to making this
a real application.

## Local conventions

A few things deviate from stock React and are load-bearing:

- **JSX lives in `.js` files.** `vite.config.js` widens the esbuild loader to match;
  do not remove that config without renaming the files to `.jsx`.
- **`process.env.PUBLIC_URL`** is used in ~150 asset paths (a Create React App
  habit). `vite.config.js` defines it as `''` so those paths resolve against
  `public/`. New code should just use `/assets/...`.
- **Page metadata** uses React 19's native hoisting: pages render `<title>` and
  `<meta>` directly and React moves them into `<head>`. `index.html` deliberately
  declares neither, so nothing is duplicated.
- **Desktop nav is hardcoded** in `layouts/Menu.js` while the mobile menu is driven
  by `data/navigation.json` — nav changes must be made in both.

## Migrated from Create React App

This project previously ran React 17 on `react-scripts` 4. During the upgrade the
following abandoned packages were replaced; the shims keep the original call
signatures so the surrounding markup and CSS were left untouched:

| Removed | Replaced with |
|---|---|
| `react-meta-tags` | React 19 native `<title>`/`<meta>` hoisting |
| `react-select2-wrapper` | `layouts/Select2.js` (native `<select>`, `.acr-select2`) |
| `react-masonry-component` | plain Bootstrap grid (`.masonry` had no CSS rules) |
| `Accordion.Toggle` (react-bootstrap v1) | `layouts/Accordiontoggle.js` (`useAccordionButton`) |
| `react-scripts`, `web-vitals`, `@testing-library/*` | Vite (no test suite existed) |

jQuery and `magnific-popup` are **still required** — they power the lightbox
galleries in `about/Video.js`, `blogsingle/Content.js`, `services/Gallery.js`, and
the listing-details wrappers.
