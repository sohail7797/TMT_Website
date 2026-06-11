# The Mahir Tech — Website

Premium marketing & lead-generation website for **The Mahir Tech** — a Rawalpindi-based
technology partner (AI, automation, GIS, software, IT infrastructure).

**Tagline:** _Technology That Delivers_

---

## Tech stack

| Layer        | Choice                                              |
| ------------ | --------------------------------------------------- |
| Framework    | Next.js 16 (App Router) + React 19                  |
| Language     | TypeScript                                          |
| Styling      | Tailwind CSS v4 (custom black/gold design system)   |
| Animation    | Framer Motion                                       |
| CMS          | Sanity (optional — falls back to local seed content)|
| Forms / Leads| API route + Resend email + WhatsApp deep-link       |
| Deployment   | Docker (standalone) → Coolify, GitHub private repo  |

---

## Local development

```bash
npm install
cp .env.example .env.local   # fill in values (all optional for first run)
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run build       # production build
npm run start       # run the production build
npm run lint        # eslint
npm run typecheck   # tsc --noEmit
```

The site runs fully **without any env vars** — the contact form logs leads to the
server console and content comes from built-in seed data. Add env vars to enable
email delivery and the CMS.

---

## Project structure

```
src/
  app/                     # routes (App Router)
    api/lead/route.ts      # lead form handler (Resend email)
    services/[slug]/       # dynamic service pages
    projects/[slug]/       # dynamic project case studies
    studio/[[...tool]]/    # embedded Sanity Studio (/studio)
    icon.tsx               # generated favicon
    opengraph-image.tsx    # generated social share image
    robots.ts, sitemap.ts, manifest.ts
  components/
    layout/                # navbar, footer, floating WhatsApp button, site frame
    sections/              # home + reusable page sections
    cards/, forms/, shared/, motion/, brand/
  lib/
    site.ts                # <- single source of truth: contact, nav, SEO
    seo.tsx                # metadata + JSON-LD helpers
    content-source.ts      # Sanity-or-seed content layer
    data/                  # seed content (services, projects, testimonials...)
  sanity/                  # client, schemas, queries, env
sanity.config.ts           # Studio config
Dockerfile                 # standalone production image
```

## Editing content

- **Quick edits** (contact info, nav, services copy): edit `src/lib/site.ts` and
  `src/lib/data/*`, commit, push — Coolify redeploys.
- **CMS edits** (projects, testimonials, blog): once Sanity is configured, manage
  content at `/studio`. See [DEPLOYMENT.md](./DEPLOYMENT.md).

## Key brand facts

- WhatsApp: **923320006282** (floating button + CTAs)
- Phone: 051-7066702 · Email: info@themahirtech.com
- Office: 3rd Floor, Abbas Plaza Computer Market, Street #1, Saddar, Rawalpindi

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for Coolify + GitHub setup.
