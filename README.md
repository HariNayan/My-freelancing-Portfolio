# Hari Nayan — Portfolio

Product demo videos, launch films and paid-social ad creative for **startups and brands**, built on retention craft proven on creator channels.

**Live:** [harinayan.me](https://harinayan.me)

## Built With

- [Vite](https://vitejs.dev/) 6 + [React](https://react.dev/) 19 + [TypeScript](https://www.typescriptlang.org/) 5.8
- [Tailwind CSS](https://tailwindcss.com/) v4, configured entirely through `@theme` tokens in `src/style.css`
- [Lucide](https://lucide.dev/) icons
- Deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/) static assets via Wrangler

No router library and no animation library — see [Two things built by hand](#two-things-built-by-hand).

## Routes

| Path          | Page                | Notes                                              |
| ------------- | ------------------- | -------------------------------------------------- |
| `/`           | `pages/Home.tsx`    | Promise → proof → work → what it costs to start    |
| `/work`       | `pages/Work.tsx`    | The full archive: 12 pieces across three kinds     |
| `/work/:slug` | `pages/CaseStudyPage.tsx` | One per entry in `CASE_STUDIES`              |
| anything else | `pages/NotFound.tsx`| Served as a real 404, not a soft one               |

Every route is prerendered to static HTML at build time. `lib/routeMeta.ts` is the single source of truth for titles, descriptions, canonicals and OG tags — the client and the prerender script both read from it, so the head can't drift between them.

## Home sections

- **Hero** — positioning, two CTAs, and a looping 1:1 process animation
- **ProofBar** — client logos
- **Portfolio** — a summary with derived counts and two shorts as evidence; the archive lives at `/work`
- **Services** — six offerings, from product demos to brand systems
- **RetentionBridge** — the creator work, framed as why the craft is credible
- **Process** — Brief → Concept → Edit → Deliver
- **About** — bio
- **Contact** — Formspree form (inline, no redirect) plus a direct booking link

## Project Structure

```
├── App.tsx                 # Shell: Router + Header/Routes/Footer, drives the head
├── index.tsx               # Client entry — hydrates prerendered markup
├── entry-server.tsx        # SSR entry used only by the prerender build
├── index.html              # Template: fonts, JSON-LD, no-JS fallback
├── types.ts                # Client, CaseStudy, Service, Project, WorkKind…
├── constants.tsx           # All content + derived selectors
├── lib/
│   ├── router.tsx          # ~100-line History API router
│   ├── routeMeta.ts        # Per-route head tags + PRERENDER_PATHS
│   ├── seo.ts              # useHead — applies meta on the client
│   └── youtube.ts          # Thumbnail URLs and their fallback chain
├── pages/                  # Home, Work, CaseStudyPage, NotFound
├── components/             # Header, Hero, ProofBar, Portfolio, Services,
│                           # RetentionBridge, Process, About, Contact,
│                           # Footer, Reveal
├── scripts/prerender.mjs   # Writes one HTML file per route into dist/
├── src/style.css           # Tailwind v4 @theme tokens + .panel/.btn/.media
├── public/                 # Thumbnails, avatars, process film, og-image
└── videos/nayan-process/   # HyperFrames source for the hero animation
```

## Two things built by hand

**Routing.** `lib/router.tsx` is about a hundred lines over the History API. It matches four route shapes, strips trailing slashes, and its `<Link>` passes through middle-clicks, modifier-clicks and `target` so links behave like links. This exists instead of `react-router-dom` because the site has four routes and no nested layouts, route loaders or guards — the dependency would be larger than the problem.

**Scroll reveals.** `components/Reveal.tsx` uses `IntersectionObserver` plus a CSS transition. The site previously ran `motion` and `lenis`; removing both took the bundle from 403.66 kB to 246.04 kB (gzip 125 → 74.5). Lenis was also why the page kept gliding for 2–3 seconds after you stopped scrolling — that easing is the library's entire purpose, so no configuration removes it. Scrolling is now native; only anchor links animate, via `scroll-behavior: smooth`.

One detail worth knowing before editing `Reveal`: the resting state of `.reveal` is **visible**. Elements are hidden only once `js-reveal` is set on `<html>`. Inverting that would mean a JS failure leaves a blank page, and the prerendered HTML would render empty for anything that doesn't run scripts.

## Design tokens

`src/style.css` defines semantic tokens rather than palette values, so a colour's name says what it is for:

| Token                             | Value     | Used for                       |
| --------------------------------- | --------- | ------------------------------ |
| `ground`                          | `#F4F4F4` | Page background                |
| `surface`                         | `#FFFFFF` | Cards, the scrolled header     |
| `sunken`                          | `#EBEBEB` | Media wells, pills             |
| `well` / `well-soft` / `well-ink` | dark      | Primary buttons only           |
| `ink` / `muted` / `faint`         | text      | Descending emphasis            |
| `hairline` / `hairline-strong`    | borders   | Dividers, secondary buttons    |
| `accent`                          | `#E5A94E` | One accent, used sparingly     |

Fonts: Plus Jakarta Sans (display), Inter (body), IBM Plex Mono (eyebrows and labels).

The design deliberately has **no large dark areas**. `.panel` is borderless with a tight two-layer shadow; `.btn-primary` holds grey for its top 85% and falls to black over the last 15%, so the ramp reads as a shadow under a lit face rather than a wash across the label.

## Content

All content lives in `constants.tsx`. Alongside the data it exports selectors — `worksByKind`, `clientsByType`, `creatorClients`, `combinedCreatorReach`, `getCaseStudy`, `getClient`, `getProject`, `getService` — so counts and orderings are derived rather than retyped. Adding a project updates the totals on the home page without anyone remembering to.

Adding a case study also adds a route: `PRERENDER_PATHS` in `lib/routeMeta.ts` is built from `CASE_STUDIES`, so the next build prerenders it automatically.

## Run Locally

```bash
npm install
npm run dev
```

Build (client bundle, SSR bundle, then prerender):

```bash
npm run build
```

Preview the built output on the real Workers runtime, then deploy:

```bash
npm run preview
npm run deploy
```

`npm run build:client` skips prerendering — useful when iterating on styles, but it leaves `dist/` with only `/`.

## Known gaps

- `public/og-image.png` still shows the previous dark design.
- `TURNAROUND` in `constants.tsx` is intentionally blank until there is a real number to state.
- `CASE_STUDIES` has no metrics or testimonials yet.
- The Formspree form (`f/mlgvbyjk`) delivers to whichever address is configured in the Formspree dashboard — changing the email in the source does not reroute it.
