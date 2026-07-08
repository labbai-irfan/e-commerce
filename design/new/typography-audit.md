# Typography Audit — Mobile Homepage (design/new)

**Source of truth:** `Mobile Homepage.svg` (428×3061 vector). All text in the SVG is
**outlined to paths** — no `<text>` elements or `font-family` metadata survived export.
Identification was therefore done by rendering the SVG at 3× with resvg and matching the
vector letterforms against candidate Google Fonts (Inter, Urbanist, Poppins, DM Sans,
Manrope, Plus Jakarta Sans, Outfit, Quicksand, Nunito, Anton), using width-ratio
measurement + side-by-side glyph comparison, cross-checked against `Mobile Homepage.png`.

## 1. Font Inventory

| Family | Role | Weights used | Confidence |
|---|---|---|---|
| **Urbanist** | Display — headings, product titles, prices, buttons, badges, chips, tile labels | 500, 600, 700, 800 | Confirmed (0.0–0.5% width delta on "Trending Products", "Santoor With", "Celebrate Yoga Day!"; all other candidates 6–15% off) |
| **Inter** | Body — greeting, subtitles, descriptions, captions, metadata, search placeholder | 400, 500, 600, 800 | High (best visual x-height/letterform match; DM Sans was statistical runner-up) |

**Not present:** Anton, Poppins, Manrope, Outfit, Plus Jakarta Sans, DM Sans, SF Pro.
("100 Years" is a wide grotesque ExtraBold — definitively not condensed Anton.)

## 2. Typography Map (measured @ 428px design width)

| Style | Font | Weight | Size | Line height | Color | Notes |
|---|---|---|---|---|---|---|
| Greeting "Good Evening," | Inter | 500 | 22px | 28px | #2B2B2B | |
| Greeting name "Ameen" | Inter | 800 | 34px | 40px | #2B2B2B | |
| Tagline "Everything for School" | Inter | 400 | 16px | 22px | #2B2B2B | |
| Logo caption | Inter | 500 | 11px | 13px | #2B2B2B | centered |
| Hero title "Smart School Shopping" | Urbanist | 800 | 28px | ~30px (1.07) | #FFFFFF / #7A4A0E | 3 lines |
| Hero subtitle "Find Everything…" | Inter | 500 | 10px | 14px | #5B3A10 | 2 lines |
| Hero CTA "Explore Now" | Urbanist | 700 | 14px | — | #FDA004 | white pill |
| Category chip "Books" / "Bags" | Urbanist | 600 | 13px | — | #2B2B2B | |
| Section title "Trending Products" | Urbanist | 700 | 20px | 24px | #2B2B2B | |
| Section subtitle "Top Picks This Week" | Inter | 500 | 13px | 17px | #2B2B2B/80% | |
| "View All →" | Urbanist | 600 | 14px | — | #2B2B2B | white pill |
| Social proof "1.5K+ bought" | Inter | 500 | 13px | — | #2B2B2B | |
| Product title (trending) | Urbanist | 600 | 16px | 22px | #2B2B2B | 2 lines |
| Product title (recommended) | Urbanist | 600 | 15px | 20px | #2B2B2B | |
| Rating "4.8 (49)" | Urbanist | 600 | 14px | — | #2B2B2B / #898585 | count in gray |
| Price "₹299" | Urbanist | 800 | 20px | — | #111111 | |
| Old price "₹400" | Inter | 500 | 12px | — | #898585 | line-through |
| Badge "PPD Original" / "Save 22%" | Urbanist | 700 | 13px | — | #FFFFFF | red/green pill |
| "100 Years" | Urbanist | 800 | 29px | — | #E31E24 | |
| "of Educational Excellence" | Urbanist | 600 | 14px | — | #E31E24 | |
| "From the House of PPD" | Urbanist | 700 | 20px | — | #FFFFFF | |
| "Discover PPD →" | Urbanist | 600 | 14px | — | #2B2B2B | white pill |
| Tile label "School Books" | Urbanist | 700 | 16px | 17px | #2B2B2B | 2 lines |
| Tile CTA "Explore →" | Urbanist | 700 | 15px | — | #FFFFFF | orange pill |
| Seasonal card label "Umbrella" | Urbanist | 600 | 13px | — | #2B2B2B | |
| Feature card title "Yoga Mat" | Urbanist | 700 | 15px | — | #2B2B2B | |
| Feature card body | Inter | 400 | 11px | 15px | #525252 | 4 lines |
| "Starting From" | Inter | 500 | 11px | — | #898585 | |
| Feature price "₹99" | Urbanist | 800 | 18px | — | #111111 | |
| "Add to Cart" | Urbanist | 600 | 14px | — | #FFFFFF | orange pill |
| Bundle title "Build Your Bundle &…" | Urbanist | 700 | 13px | 16px | #2B2B2B | |
| Bundle body | Inter | 400 | 11px | 15px | #3A3A3A | |
| "30% OFF" tag | Urbanist | 800 | 19px | — | #FDA004 | "UP TO" 10px/600 |
| Search placeholder | Inter | 400 | 15px | — | #9E9E9E | |

Sizes were measured from cap-height/descender extents of the 3× vector render and
rounded to the nearest integer; treat ±1px as within export tolerance.

## 3. Font Usage Map

**Urbanist** — hero title & CTA, all section titles, View All pills, category chips,
product titles, ratings, prices, badges, tile labels & CTAs, buttons, "100 Years",
"From the House of PPD", bundle title, 30% OFF tag.

**Inter** — greeting block (incl. "Ameen"), logo caption, hero subtitle, section
subtitles, social proof, old prices, "Starting From", card descriptions, bundle body,
search placeholder.

## 4. Google Fonts

Both families are on Google Fonts (Urbanist 100–900, Inter 100–900, both variable).

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Urbanist:wght@500;600;700;800&display=swap');
```

## 5. CSS Variables (implemented in src/styles/globals.css)

```css
:root {
  --font-heading: "Urbanist", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-product: "Urbanist", sans-serif;
  --font-price: "Urbanist", sans-serif;
  --font-button: "Urbanist", sans-serif;
  --font-label: "Urbanist", sans-serif;
  --font-caption: "Inter", sans-serif;
}
```

## 6. Tailwind (v4 CSS-first, as used in this repo)

```css
@theme inline {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif; /* body default */
  --font-display: "Urbanist", "Inter", sans-serif;
  --font-urbanist: "Urbanist", sans-serif;
  --font-inter: "Inter", sans-serif;
}
```

Tailwind v3 equivalent (for reference):

```js
fontFamily: {
  sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
  display: ['Urbanist', 'Inter', 'sans-serif'],
  urbanist: ['Urbanist', 'sans-serif'],
  inter: ['Inter', 'sans-serif'],
}
```

## 7. Next.js setup (if ever migrated)

```ts
import { Inter, Urbanist } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700','800'], variable: '--font-body' })
const urbanist = Urbanist({ subsets: ['latin'], weight: ['500','600','700','800'], variable: '--font-heading' })
```

## 8. Optimization

- Only the weights above are loaded (Inter 5, Urbanist 4); Anton/Poppins removed.
- `display=swap` avoids FOIT; consider self-hosting the two variable WOFF2 files
  (`Inter[wght].woff2`, `Urbanist[wght].woff2`) to cut requests to 2 and enable
  intermediate weights.
- `₹` (U+20B9) is covered by both families' latin-ext subsets — no extra subset needed.

## 9. Verification

- 3× vector render of the SVG compared per-style against rendered candidate specimens;
  Urbanist matched heading/title/price/button styles within 0.0–0.5% width; every other
  candidate family was 6–15% off.
- Body styles matched Inter on x-height ratio and glyph shapes (G, g, e, comma);
  DM Sans was the closest alternative and can be re-tested if any style looks off.
- PNG cross-check confirmed no additional families (no condensed/display faces present).
