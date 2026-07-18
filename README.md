# Hari Nayan — Portfolio

Portfolio showcasing work in **video editing**, **graphic design**, and **motion graphics** for creators, startups, and brands.

**Live:** [harinayan.me](https://harinayan.me)

## Built With

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (v4 via Vite plugin)
- [Recharts](https://recharts.org/) for stats visualization
- [Lucide](https://lucide.dev/) icons
- Deployed on [Cloudflare Pages](https://pages.cloudflare.com/)

## Sections

- **Hero** — Introduction and CTA
- **Tools Carousel** — Scrolling showcase of industry tools (Premiere, After Effects, Figma, etc.)
- **Portfolio** — Short Videos (6 projects), Startup Work (2 projects), Graphic Designs (4 projects) with click-to-play video thumbnails and detail modals
- **Services** — 6 offerings from short-form editing to brand identity
- **Process** — 4-step workflow: Brief → Concept → Edit → Deliver
- **About** — Bio, stats (3+ years, 50+ projects, 10+ clients), and project distribution chart
- **Clients** — Trusted By Creators (4 creators) and Trusted By Startups & Brands (2 startups)
- **Contact** — Formspree contact form (inline, no redirect)

## Project Structure

```
├── App.tsx              # Root layout with lazy-loaded About
├── index.tsx            # Entry point
├── index.html           # Meta tags, fonts, SEO
├── types.ts             # TypeScript interfaces
├── constants.tsx        # All data (projects, services, clients, stats)
├── src/
│   └── style.css        # Tailwind + custom theme
├── public/              # Static assets (thumbnails, avatars, og-image)
└── components/
    ├── Header.tsx       # Nav with anchor links + mobile menu
    ├── Hero.tsx
    ├── ToolsCarousel.tsx
    ├── Portfolio.tsx    # Video/startup/graphic grid + VideoPreview
    ├── ProjectModal.tsx # Detail popup for projects
    ├── Services.tsx
    ├── Process.tsx
    ├── About.tsx        # Recharts bar chart
    ├── Clients.tsx
    ├── Contact.tsx      # Formspree integration
    └── Footer.tsx
```

## Customization

All content lives in `constants.tsx` — edit project data, services, client info, and stats in one place.

**Theme** (`src/style.css`): Uses Inter (body) and Sora (headings) with a neutral-950/900 dark palette.

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build   # outputs to dist/
```
