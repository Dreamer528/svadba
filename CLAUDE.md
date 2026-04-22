# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite development server
npm run build     # Build production bundle
npm run lint      # Run ESLint
npm run preview   # Preview production build
```

## Architecture

This is a single-page React wedding invitation site (Russian language, for Владислав & Любовь, wedding date July 17, 2026).

**Stack:** React 19, Vite 7, Framer Motion, vanilla CSS (no TypeScript, no component library, no router)

**Entry points:** `index.html` → `src/main.jsx` → `src/App.jsx`

**Structure:**
- `src/components/` — 20 functional components, each representing a section of the page
- `src/styles.css` — single global CSS file (~1000 lines) with CSS custom properties for colors/fonts
- `public/` — static assets (photos, fonts, CDN files)

**Scroll animations:** `AnimatedSection` is a reusable wrapper that triggers Framer Motion fade-in animations on scroll. Most page sections are wrapped in it.

**RSVP/Telegram integration:** The `RSVP` component posts form data to `VITE_RSVP_ENDPOINT`. Do not put Telegram bot tokens in frontend code. Use a backend/serverless endpoint; a Cloudflare Worker example lives in `serverless/telegram-rsvp-worker.js`.

**Styling conventions:**
- CSS variables defined at `:root` in `styles.css` for the color palette (dusty rose, burgundy, cream) and fonts (Great Vibes, Cormorant Garamond, Montserrat via Google Fonts)
- Responsive breakpoints at 768px and 480px
- Component-specific styles are in `styles.css`, not co-located with components

**ESLint note:** Variables starting with an uppercase letter are exempt from the `no-unused-vars` rule (used for constants pattern).
