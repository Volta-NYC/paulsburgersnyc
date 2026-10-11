# Paul's Da Burger Joint

The official website for Paul's Da Burger Joint, the family-run burger counter at 131 2nd Avenue and St. Mark's Place in the East Village, open since 1989.

It replaces the old paulsburgersnyc.com, where the menu was a PDF and ordering, catering and gift cards were scattered across separate sites. Everything now lives in one place: a real HTML menu, clear paths to online ordering, catering requests and visit details.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, hours and location, signature burgers, story teaser, soda fountain, press, catering and gift cards |
| `/menu` | Full menu with a sticky category bar. Replaces the old PDF. |
| `/about` | Our Story: timeline since 1989, the counter, famous faces, press and reviews |
| `/gallery` | Filterable photo wall with a keyboard-friendly lightbox |
| `/catering` | How catering works, ezCater details and a quote request form |
| `/visit` | Hours (today highlighted), map, directions and contact |

Old `.html` URLs (`/about.html`, `/press.html`, `/contactus.html`, the menu PDF and so on) permanently redirect to the new routes. See `next.config.ts`.

## Where to edit things

- **Business details** (address, phone, email, hours, ordering, catering, gift card and social links, press): `src/lib/site.ts`
- **Menu items and prices**: `src/lib/menu.ts`. Prices were transcribed from the live online ordering menu on October 11, 2026.
- **Photos and alt text**: `src/lib/photos.ts`, files in `public/photos`
- **Famous faces**: `src/lib/famous-faces.ts`, files in `public/photos/faces`
- **Colors, fonts, type scale**: `tailwind.config.ts` and the variables at the top of `src/app/globals.css`

## Design notes

Art direction is "East Village counter signage": 1950s diner cues (ketchup red, mustard, the checkerboard floor, a felt letterboard for prices) set against the density of St. Mark's Place.

- **Type**: Bungee (signage display), Bungee Inline for the one "since 1989" moment, Barlow and Barlow Condensed for text and prices. All self-hosted through Fontsource.
- **Palette**: ketchup `#C1272D` and ink `#1B1714` as primaries, mustard `#F3B530` and mint `#A8D9C8` (the soda fountain) as supplementals, cream and paper neutrals.
- **Photos**: all from the restaurant's original site. Most are 640 x 480, so they're framed as pinned "prints" at honest sizes instead of being stretched full-bleed. Higher-resolution photos would be the single biggest upgrade.
- **Motion**: scroll reveals via one IntersectionObserver (`src/lib/components/reveal-observer.tsx`), CSS-only hero entrance, all disabled under `prefers-reduced-motion`. Content stays visible without JavaScript.

## Tech stack

Next.js 16 (App Router), TypeScript, Tailwind CSS 3, hosted on Vercel.

```bash
npm install
npm run dev     # local development
npm run build   # production build
npm run lint    # ESLint (flat config)
```
