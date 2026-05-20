  Code Review — nikolaosgavras-sivut

  [CRITICAL]

  - ContactForm.tsx:7-19 — contact form fails silently. No try/catch around fetch; a network
  error throws an unhandled rejection and the user sees nothing. No loading/disabled state, so
  the submit button allows double-submits. The form is the site's main conversion point — a
  silent failure loses real contact opportunities. Fix: wrap in try/catch, set an error message
   in catch, disable the button while submitting, and reset() the form on success.
  - public/img/portfolio/* — unoptimized images on the Portfolio page. thebigfatgreekgyros.png
  is 1.1 MB, others 400-580 KB, ~2.9 MB total — all rendered as ~200px-tall thumbnails
  (PortfolioPage.tsx:91, h-48 md:h-54). All load eagerly with no width/height, causing slow
  load + layout shift (CLS). Ironic on the page meant to showcase web-dev skill. Fix: resize to
   ~2x display size, convert to WebP (your github-logo.webp at 8 KB is the model), add
  loading="lazy" + explicit dimensions.

  [WARNING]

  - index.html:2 — lang="en" but all content is Finnish. Hurts screen-reader pronunciation and
  SEO. Change to lang="fi".
  - index.html:5 — favicon.ico referenced but missing. public/favicon.ico does not exist → 404
  on every page load. Add the file or remove the <link>.
  - index.html:3-7 — no SEO metadata. Missing <meta name="description"> and Open Graph tags (no
   link preview when shared on LinkedIn). <title> is static across all 3 routes. Add a
  description, OG tags, and per-route titles.
  - Commented-out code in App.tsx:9, App.tsx:24, SiteHeader.tsx:24 (/services route). Your own
  convention is "never leave commented-out code — delete it."
  - package.json — 4 unused dependencies. @react-router/node, @react-router/serve,
  @react-router/dev, isbot are for React Router framework/SSR mode; this app uses library mode
  (BrowserRouter). No root.tsx/routes.ts/entry.* exist. Remove them.
  - ContactForm.tsx:10 — no spam protection. The Web3Forms access key is public by design (fine
   client-side), but there is no honeypot or captcha, so the endpoint can be flooded. Add
  Web3Forms' hidden botcheck honeypot field; move the key to import.meta.env.VITE_WEB3FORMS_KEY
   so it can be rotated without a code change.
  - PortfolioPage.tsx:132-171 — modal accessibility gaps. No Escape-to-close, no focus trap,
  focus is not returned to the trigger on close, role="dialog" has no accessible name, and
  background scroll is not locked.
  - Animations ignore prefers-reduced-motion. AOS effects, the animate-blob keyframes
  (App.css:39-48), scroll-behavior: smooth (index.css), and .button/.card scale transforms all
  run regardless. Wrap them in @media (prefers-reduced-motion: reduce).
  - No .dockerignore. Dockerfile's COPY . . pulls node_modules, dist, and .git into the build
  context. Add a .dockerignore.

  [INFO]

  - frontend/README.md is the unmodified Vite template — write a project-specific README
  (recruiters may read the repo).
  - Mixed UI language: "Zoom In/Out/Reset" (ZoomControls.tsx), "Close" (PortfolioPage.tsx:165),
   "Success!"/"Error" (ContactForm.tsx:18) are English amid a Finnish UI.
  - Code comments are in Finnish (MeshBackground.tsx, SiteHeader.tsx:52) — your convention is
  English comments.
  - index.css holds one rule while App.css does the Tailwind import + all utilities —
  consolidate into one entry stylesheet.
  - ContactPage.tsx:8 — xl:overflow-y-hidden xl:overflow-x-hidden on an auto-height div is a
  no-op; remove it.
  - HomePage.tsx:6-7 — introAnimation and skillsAnimation are identical useResponsiveAOS calls
  (two resize listeners); dedupe. The typeof window SSR guard in the hook is unneeded for a
  pure SPA.
  - Unnecessary fragments wrapping a single child in App.tsx, ZoomControls.tsx,
  ContactPage.tsx.
  - Dockerfile uses npm install (use npm ci for reproducibility); the image is dev-only and
  largely redundant with the compose volume mount + command.
  - No engines field / .nvmrc to pin Node; ESLint uses recommended not recommendedTypeChecked
  (your README suggests the latter for production).
  - PortfolioPage.tsx:94 — heading order jumps h1 → h3 (no h2).
  - ScrollToTop.tsx:8 — with global smooth scroll, navigation visibly animates upward; pass
  behavior: 'instant' for a clean jump.
  - Inline LinkedIn/GitHub SVGs are duplicated between SiteHeader.tsx and HomePage.tsx —
  extract a component and add aria-hidden="true" to the SVGs (links are already labeled).
  - No tests or CI — a single smoke/render test would catch route regressions.

  Summary

  The site is small, clean, and builds without errors — TypeScript and ESLint both pass.
  Nothing is broken, but two issues should be fixed before showing it to recruiters: the
  contact form can fail silently (the site's main call-to-action), and the Portfolio images are
   20-30x heavier than needed, which is conspicuous on the very page meant to demonstrate
  web-dev skill. The WARNING items are mostly quick wins — wrong lang, missing favicon, no SEO
  meta, dead code, and 4 unused dependencies. INFO items are polish.