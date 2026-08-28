# Digital Dream Web

The official website for **Digital Dream Web**, a software studio crafting websites, web apps, mobile apps, SaaS platforms, and AI-powered solutions that are fast, secure, and built to scale.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Brand

- Primary: `#2684FC`
- Slate: `#3B4D66`
- Accent: White

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the dev server         |
| `npm run build`   | Production build + typecheck |
| `npm run start`   | Serve the production build   |
| `npm run lint`    | Run ESLint                   |

## Project structure

```
src/
  app/            # Pages (Home, Services, Work, About, Contact, Privacy) + SEO files
  components/     # Header, Footer, UI + section components
  lib/            # Site config & content data
```

## SEO

The site ships with per-page metadata, OpenGraph/Twitter images, JSON-LD structured data
(Organization, WebSite, WebPage, BreadcrumbList, OfferCatalog, FAQPage), `sitemap.xml`,
`robots.txt`, a web manifest, and pre-rendered static HTML for fast indexing.

## Deployment

Recommended: [Vercel](https://vercel.com). Set `NEXT_PUBLIC_SITE_URL` to your production
domain so canonical URLs, sitemaps, and structured data point at the right address.