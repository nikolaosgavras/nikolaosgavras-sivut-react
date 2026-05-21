# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Nikolaos Gavras — a Finnish-language SPA built with React 19, TypeScript, Vite, and Tailwind CSS v4. Deployed to Vercel. Source lives entirely under `frontend/`.

## Commands

All commands run from `frontend/`:

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Type-check (tsc -b) then Vite build
npm run lint     # ESLint on all TS/TSX files
npm run preview  # Serve the production build locally
```

Docker alternative (from repo root):
```bash
docker-compose up  # Mounts frontend/ into container, runs npm install + dev
```

There are no tests.

## Architecture

### Routing & Layout

The app uses React Router v7 in **library mode** (BrowserRouter, not framework mode — there is no `root.tsx`, `routes.ts`, or `entry.*`). All routes share a single layout defined in `AppLayout.tsx`:

```
BrowserRouter
  └── ScrollToTop       (resets scroll on route change)
  └── App
        └── Routes
              └── Route element={<AppLayout>}   ← MeshBackground + SiteHeader + <main>
                    ├── /           → HomePage
                    ├── /portfolio  → PortfolioPage
                    └── /contact    → ContactPage
```

`vercel.json` rewrites all paths to `/` so client-side routing works on Vercel.

### Styling

Tailwind v4 is loaded via `@tailwindcss/vite` plugin — there is no `tailwind.config.*` file; configuration is implicit. The Tailwind import lives in `App.css`, which also defines a custom **fluid type scale** using CSS custom properties and utility classes:

- `.type-hero`, `.type-section`, `.type-lead`, `.type-body`, `.type-caption` — use these for all text sizing, never raw Tailwind text-* classes for headings and body copy
- `.button`, `.card` — shared interactive scale transitions
- `.animate-blob` — keyframe animation used by `MeshBackground`

`index.css` only holds `scroll-behavior: smooth`.

### AOS Animations

AOS is initialized once globally in `App.tsx` via `useEffect`. Animations are applied directly with `data-aos` attributes in JSX. The `useResponsiveAOS` hook returns different AOS effect names based on viewport width (default breakpoint: 768px / Tailwind `md`) so mobile and desktop can have distinct entrance animations.

### Per-Route SEO

`usePageMeta(title, description)` imperatively updates `document.title` and the `<meta name="description">` tag. Call it at the top of every page component. Base SEO metadata (OG tags, Twitter cards, JSON-LD) lives in `index.html` and serves as the fallback.

### Contact Form

`ContactForm.tsx` posts to the [Web3Forms](https://web3forms.com) API. The access key is currently hardcoded — it is designed to be public-facing but should be moved to `import.meta.env.VITE_WEB3FORMS_KEY`.

### Portfolio Projects

Projects are defined as a static typed array (`Project[]`) at the top of `PortfolioPage.tsx`. Image clicks open a modal with `react-zoom-pan-pinch` for pan/zoom. Portfolio images live in `public/img/portfolio/` and should be WebP format.

## Conventions

- **Language**: UI content and copy is in Finnish. Code comments must be in English.
- **Unused dependencies**: `@react-router/node`, `@react-router/serve`, `@react-router/dev`, and `isbot` are framework-mode packages that are not used — do not add code that depends on them.
- **No commented-out code**: delete unused code rather than commenting it out.
- **SVG icons**: LinkedIn and GitHub SVGs are currently duplicated between `SiteHeader.tsx` and `HomePage.tsx` — if adding more instances, extract a shared component.
