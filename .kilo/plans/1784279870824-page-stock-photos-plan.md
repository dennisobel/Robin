# Add free stock photos to FAQ / About / Contact / Relocation / Consultants / Shortlist / Login / Signup pages

## Context

An earlier session sourced **Pexels** stock photos for the home listings and referenced them through
`process.env.PUBLIC_URL + '/assets/img/...'`, with provenance recorded in
`public/assets/img/CREDITS.md`. Homes, rooms and neighbourhood cards are now real photos under
`public/assets/img/{homes,rooms,hoods}/`.

The other pages still use either **generated SVG backdrops** (`scenes/*.svg`) or **no photo at all**:
- `about/Story.js`, `relocation/Content.js` → `scenes/office.svg` (decorative brand SVG, not a photo)
- `login/Content.js`, `register/Content.js` → `scenes/auth-1/2/3.svg` (decorative brand SVGs used as auth slider backgrounds)
- `faq/Content.js`, `shortlist/Content.js`, `consultants/Content.js` → **no images** in their content

Goal: give each of these pages appropriate, free, Pexels stock **photos**, added the same way the
homes photos were (download to `public/assets/img/`, reference via `process.env.PUBLIC_URL`, record in `CREDITS.md`).

## Conventions to follow (from the existing work)

- Source URL pattern: `https://images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg?w=1280&h=850&fit=crop`
  (neighbourhood/card crops used `800x620`; here all are content/section images → `1280x850`).
- Reference in JSX with `process.env.PUBLIC_URL + '/assets/img/<category>/<file>.jpg'`.
- Append a table to `public/assets/img/CREDITS.md` with File → Pexels id.
- Licence: Pexels License (free commercial use, no attribution required) — already noted in CREDITS.md.

## Image slots & intended subjects

New folder: `public/assets/img/pages/` (content photos for the non-listing pages).

| Page section | File | Subject | Notes |
|---|---|---|---|
| `about/Story.js` | `about-story.jpg` | A real estate / relocation team at a desk, or a Nairobi home office | Replaces `scenes/office.svg` |
| `relocation/Content.js` | `relocation-family.jpg` | Family with luggage / moving / arriving in a new city | Replaces `scenes/office.svg` |
| `faq/Content.js` | `faq-side.jpg` | Warm, reassuring scene (family in new home / consultant with clients) | New `<img>` in the empty `col-lg-4` sidebar (currently only text widgets) |
| `shortlist/Content.js` | `shortlist-empty.jpg` | Cozy living room / "your future home" mood shot | New image inside the empty-state block (`.cxp-empty`) |
| `consultants/Content.js` | `consultants-team.jpg` | Team / people collaborating in an office | New hero/intro image above the agent grid |
| `contact/Contactform.js` | keep `contact.svg` but add `contact-office.jpg` | Exterior of a Nairobi office / storefront | Optional supporting photo in the contact form column |
| `login/Content.js` | `auth-1.jpg`, `auth-2.jpg`, `auth-3.jpg` | Real homes / Nairobi street scenes (one per slide) | Replace the 3 `scenes/auth-*.svg` slider backgrounds |
| `register/Content.js` | reuse `auth-1.jpg`, `auth-2.jpg`, `auth-3.jpg` | same as login | Point at the same three downloaded photos |

The auth page currently references `scenes/auth-N.svg` in BOTH `login/Content.js` and `register/Content.js`
(identical `images` array). Replace those 6 references to point at `pages/auth-N.jpg`.

## Implementation steps

1. **Download photos** into `public/assets/img/pages/`. For each chosen Pexels id, run:
   `Invoke-WebRequest -Uri "https://images.pexels.com/photos/<id>/pexels-photo-<id>.jpeg?w=1280&h=850&fit=crop" -OutFile "public/assets/img/pages/<file>.jpg" -UseBasicParsing`
   Suggested Pexels ids (verify each returns 200 before use; swap if a 404):
   - about-story: a realty/desk team photo (e.g. 7688336, 7707387, or 5669609)
   - relocation-family: a family with suitcases (e.g. 3993449, 1643406)
   - faq-side: consultant with client / happy family (e.g. 3184292, 7554876)
   - shortlist-empty: cozy living room (e.g. 106399, 3914851)
   - consultants-team: team collaborating (e.g. 3184360, 3866371)
   - auth-1/2/3: Nairobi / home exteriors (e.g. 7031581 reuse, 1438832 reuse, 11114194 reuse) — or fresh ids
   (Confirm each id with a HEAD request; record the final ids actually used.)

2. **Edit `about/Story.js`** line 13: change `scenes/office.svg` → `pages/about-story.jpg`, alt stays relevant.

3. **Edit `relocation/Content.js`** line 62: change `scenes/office.svg` → `pages/relocation-family.jpg`.

4. **Edit `faq/Content.js`**: add an `<img className="img-fluid rounded mb-4" src={process.env.PUBLIC_URL + '/assets/img/pages/faq-side.jpg'} alt="..." />` at the top of the `col-lg-4` sidebar (before the first `.sidebar-widget`).

5. **Edit `shortlist/Content.js`**: inside the empty-state block (`.cxp-empty`), add an `<img>` above the `<h5>` using `pages/shortlist-empty.jpg`.

6. **Edit `consultants/Content.js`**: add an intro image (e.g. `pages/consultants-team.jpg`) above the agent grid, inside the `.section` after the title-wrap or before the `.row`.

7. **Edit `login/Content.js`** and **`register/Content.js`**: replace the three `scenes/auth-N.svg`
   entries in the `images` array with `assets/img/pages/auth-1.jpg`, `auth-2.jpg`, `auth-3.jpg`.

8. **(Optional) `contact/Contactform.js`**: add `pages/contact-office.jpg` as a supporting photo in the form column if layout allows.

9. **Update `public/assets/img/CREDITS.md`**: add a `### Page content — pages/` section with a File → Pexels id table, mirroring the existing format (note these are stock placeholders, same caveat as homes).

## Verification

- `cd Acres-product; npm run build` (or `npm run dev`) and load each page:
  FAQ, About, Contact, Relocation, Consultants, Shortlist (empty + populated), Login, Register.
- Confirm no 404s in the network tab for `/assets/img/pages/*`.
- Confirm `CREDITS.md` lists every downloaded file with its Pexels id.
- Keep the SVGs in `scenes/` (still used by Breadcrumb `counter.svg` and Contactform `contact.svg`); do not delete them.

## Risks / notes

- Pexels ids can be retired; always verify the chosen id returns 200 before downloading, and pick alternates.
- Auth slider images are `bg-cover` backgrounds — photos work the same as the SVGs did (full-bleed).
- These photos are illustrative stock, not real Expert Homes clients/property — same "replace before launch" caveat already in CREDITS.md applies.
