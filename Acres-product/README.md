# Expert Homes — Nairobi homes for expats

A map-first rental search for families posted to Nairobi: UN, embassies, NGOs and
international schools. Furnished homes in the Gigiri belt, Karen, Westlands and
Kilimani, filtered by the things that actually decide a posting — budget, school
run, lease length and whether the generator works.

Built on the Acres template (React 19 / Vite 7), cut down to one product.

## Scripts

```bash
npm install
npm start        # dev server on http://localhost:3000
npm run build    # production build -> dist/
npm run preview  # serve the production build
```

Requires Node 20+.

## The journey

```
/                land on a Nairobi map, pick area + budget + bedrooms
/search          map + results, filters live in the URL
/listing/:id     one home: lease terms, what's included, what's nearby
/shortlist       saved homes, ready to send to a consultant
```

Supporting: `/relocation`, `/consultants`, `/about`, `/faq`, `/contact`,
`/login`, `/register`, and a catch-all 404.

## Structure

Pages compose sections; sections hold the markup. One page ↔ one section folder.

```
index.html                 Vite entry (title/description come from React)
vite.config.js
src/
  App.js                   12 routes, each lazy-loaded
  components/
    pages/                 one file per route: <title> + Header + Content + Footer
    sections/<page>/       that page's markup
    layouts/               Header/Footer/Menu + shared widgets
  data/                    all content (see below)
  helper/
    listings.js            search: filtering, sorting, formatting
    shortlist.js           localStorage shortlist + useShortlist hook
  assets/css/
    style.css              the template's 6.5k-line stylesheet (untouched)
    brand.css              everything of ours, layered on top
public/assets/img/
  homes/ hoods/ avatars/ scenes/   generated SVG placeholders (see below)
```

## Data

There is no backend. Everything lives in `src/data/*.json`:

| file | what |
|---|---|
| `listings.json` | the 12 homes — price (USD + KSh), lat/lng, furnishing, lease, amenities, `nearby[]` |
| `neighbourhoods.json` | the six areas on the homepage |
| `select.json` | every filter's option list |
| `agents.json` | consultants |
| `faq.json`, `services.json`, `testimonial.json`, `contactinfo.json` | page copy |
| `navigation.json` | nav — read by **both** the desktop and mobile menus |

**Search works.** Filtering, sorting and the result count all run through
`searchListings()` in `helper/listings.js`, so the map, the list and the count
cannot disagree. Filters are held in the query string, which makes a result set
shareable: `/search?neighbourhood=Gigiri&budget=$3,000 - $4,500/mo`.

**Forms don't.** Login, register, the enquiry brief and "book a viewing" render
but submit nowhere. Swapping `src/data/*.json` for API calls is the natural first
step to making this real.

## Content status

Everything visible is a stand-in. That's fine for a demo and **not fine for
launch** — see `public/assets/img/CREDITS.md`.

- **The photos are stock, not the properties.** Free-licensed Pexels photography
  (one exterior per home; the `rooms/` shots are shared by all twelve). Showing a
  stock house as the home being advertised misrepresents it to a tenant, so these
  must be replaced with real photography of each home before this goes live.
  Consultant avatars are generated initials SVGs; scene backdrops likewise.
- **The copy is plausible fiction.** Prices, consultants, testimonials and the
  "400+ families" stat were written to make the UI legible. Realistic for Nairobi,
  not real.

## Local conventions

- **JSX lives in `.js` files.** `vite.config.js` widens the esbuild loader; don't
  remove that without renaming to `.jsx`.
- **`process.env.PUBLIC_URL`** is defined as `''` in `vite.config.js` so the
  template's CRA-style asset paths keep resolving. New code should use `/assets/...`.
- **Page metadata** uses React 19's native hoisting: pages render `<title>`/`<meta>`
  and React moves them into `<head>`. `index.html` declares neither, on purpose.
- **`brand.css` undoes two select2-era rules** in `style.css` — `font-size: 0` on
  native selects, and the absolutely-positioned `.acr-custom-select > label`. Both
  break real `<select>` elements, which is what `layouts/Select2.js` renders.
- jQuery + `magnific-popup` are still required by the lightbox in `about/Video.js`.

## Shims kept from the CRA → Vite upgrade

`layouts/Select2.js` (native select replacing the abandoned `react-select2-wrapper`)
and `layouts/Accordiontoggle.js` (`useAccordionButton`, replacing react-bootstrap
v1's removed `Accordion.Toggle`). Both keep the original call signatures so the
template's markup and CSS were left alone.
