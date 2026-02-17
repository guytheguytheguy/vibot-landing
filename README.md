# Vibot Landing - Status & Strategy

> Last updated: 2026-02-18

## Overview

Vibot Landing is the marketing landing page for **Vibe Coding Academy** (https://vibe-coding.academy), built with Next.js 16, React 19, TypeScript 5 (strict mode), and Tailwind CSS 3. It is a single-page application deployed on Vercel that showcases the platform's value proposition through a hero section, interactive demo comparison, feature grid, testimonials, waitlist email capture form, FAQ accordion, learning path visualization, and tech stack showcase.

The page is **95% production-ready**. The waitlist email capture form is fully functional with a file-based JSON backend (`app/api/waitlist/route.ts`). SEO fundamentals are in place with programmatic `robots.ts` and `sitemap.ts`. The primary remaining gaps are: replacing fictional testimonials with real ones, adding analytics tracking, and migrating the waitlist backend from local JSON to a persistent database for production durability on serverless.

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router) | 16.1.6 |
| UI Library | React | 19 |
| Language | TypeScript | 5 (strict mode) |
| Styling | Tailwind CSS | 3.4.17 |
| CSS Processing | PostCSS + Autoprefixer | 8.4.49 / 10.4.20 |
| Bundler (dev) | Turbopack | built-in |
| Deployment | Vercel | production |
| Architecture | App Router | single-page client component |

**Dependencies (runtime):** next, react, react-dom
**Dependencies (dev):** @types/node, @types/react, @types/react-dom, autoprefixer, postcss, tailwindcss, typescript

No external service SDKs are currently installed (no Supabase, no email service, no analytics).

## Current Status

**Overall: 95% Production-Ready (Live on Vercel)**

### Working

- Full single-page marketing layout in `app/page.tsx` (464 lines, client component using `'use client'`)
- Hero section with gradient background (`from-purple-900/20 via-slate-950 to-slate-950`), animated pulse badge, dual CTA buttons (Join Waitlist + See It In Action)
- Interactive demo comparison: Traditional Coding (hours of syntax wrestling) vs. Vibe Coding (2 minutes to working feature) with code snippets and prompt example
- Feature grid with 6 core feature cards, hover border effects, benefit-driven copy
- Testimonials section with 4 persona stories (fictional -- see Known Issues)
- **Waitlist email capture form** -- fully functional with:
  - Client-side email validation via HTML `required` + `type="email"`
  - POST to `/api/waitlist` with loading state (`submitting`) and error handling
  - Server-side email validation (regex format check, duplicate prevention via case-insensitive comparison)
  - JSON file-based storage (`data/waitlist.json`, gitignored, auto-created)
  - GET endpoint returning current waitlist count as `{ count: number }`
  - Success message auto-clears after 5 seconds, error messages display inline
- FAQ accordion with 5 questions, expand/collapse via `expandedFaq` state, chevron rotation animation
- Learning path visualization (4-step numbered progression with gradient circle indicators)
- Tech stack showcase (12 tools/technologies with hover border effects)
- Responsive design (mobile-first with `sm:`, `md:`, and `lg:` breakpoints)
- SEO metadata, Open Graph tags, and Twitter Cards configured in `layout.tsx` with `metadataBase` set to `https://vibe-coding.academy`
- Programmatic `robots.ts` allowing all crawlers with sitemap reference
- Programmatic `sitemap.ts` with weekly change frequency and priority 1
- Dark theme throughout (`bg-slate-950 text-white` on body, purple/slate gradient color scheme)
- Deployed and live on Vercel with automatic deploys from `main` branch
- Hot reload development via Turbopack (`next dev --turbopack`)

### Limitations

- **Waitlist storage is file-based** -- The `data/waitlist.json` file works on a single server instance but will not persist across Vercel serverless function cold starts in production. Emails submitted in production may be lost between deploys or across function instances. This needs migration to a database (Supabase recommended).
- **No confirmation email** -- Signing up does not send an email to the user. No email service is integrated.
- **Entire page is a client component** -- The `'use client'` directive on `page.tsx` means the entire page is client-rendered, missing out on React Server Component benefits for static content sections.

### Missing

- Persistent database for waitlist (current file-based approach is not durable on serverless)
- Email service integration (no confirmation emails sent)
- Analytics tracking (no Vercel Analytics, Google Analytics, or Plausible)
- Real testimonials (current 4 are fictional personas with emoji avatars)
- A/B testing infrastructure
- Automated tests (no unit, integration, or E2E tests)
- No lint configuration (no ESLint or Prettier config files)

## Architecture

### Directory Structure

```
C:\dev\vibot-landing\
  app/
    api/
      waitlist/
        route.ts              # POST: add email to waitlist, GET: return count
    globals.css               # Global styles (Tailwind imports + base reset)
    layout.tsx                # Root layout with metadata, OG tags, HTML structure
    page.tsx                  # Main landing page (464 lines, all sections, client component)
    robots.ts                 # Programmatic robots.txt generation
    sitemap.ts                # Programmatic sitemap.xml generation
  data/
    waitlist.json             # Waitlist email storage (gitignored, auto-created at runtime)
  .vercel/
    project.json              # Vercel project config (prj_tr79UBDJVgTipzCEZGmqfXKB4G7y)
  next.config.ts              # Next.js configuration (minimal, no custom settings)
  tailwind.config.ts          # Tailwind CSS configuration (default theme, content paths for app/)
  tsconfig.json               # TypeScript strict mode, bundler module resolution, path alias @/*
  postcss.config.mjs          # PostCSS with Tailwind + Autoprefixer plugins
  package.json                # Dependencies and scripts (dev, build, start)
  .gitignore                  # Ignores node_modules, .next, .env*, data/, .vercel
```

### Page Sections (in app/page.tsx)

1. **Hero** -- Gradient background, animated pulse badge ("The Future of Software Development"), headline ("Code at the Speed of Thought"), subheadline, dual CTA (Join Waitlist + See It In Action)
2. **Demo Comparison** (`#demo`) -- Side-by-side traditional coding (hours of syntax wrestling, code snippet) vs. vibe coding (natural language prompt, 2 minutes to working feature), "90+ hours saved per project" badge
3. **Feature Grid** -- 6 feature cards: AI-Assisted Development, Prompt Engineering, Rapid Prototyping, Modern Tech Stacks, Debugging with AI, Deployment & Scaling
4. **Testimonials** -- 4 fictional persona stories (Sarah Chen, Marcus Johnson, Priya Patel, Alex Rodriguez) with emoji avatars and disclaimer ("results may vary")
5. **Waitlist Form** (`#waitlist`) -- Email input + submit button, validation, loading/submitting state, success animation, error display, social proof counter ("2,000+ vibe coders already creating")
6. **FAQ Accordion** -- 5 expandable Q&A items covering what vibe coding is, experience requirements, supported tools, pricing, and bootcamp differentiation
7. **Learning Path** -- 4-step numbered progression (Fundamentals, Build Projects, Advanced Patterns, Ship & Scale)
8. **Tech Stack Showcase** -- 12 technology pills (Claude AI, ChatGPT, GitHub Copilot, Cursor, Next.js, React, TypeScript, Tailwind CSS, Supabase, Vercel, v0, Bolt.new)
9. **CTA Footer** -- Final call-to-action ("Ready to Code at the Speed of Thought?") linking back to `#waitlist`
10. **Footer** -- Copyright 2026 Vibe Coding Academy

### Data Flow

```
User enters email -> handleSubmit() -> fetch('/api/waitlist', { method: 'POST', body: { email } })
                                    -> Server validates email format (regex)
                                    -> Server checks duplicate in data/waitlist.json (case-insensitive)
                                    -> Server appends entry { email, timestamp } to JSON array
                                    -> Returns 201 (success) / 200 (duplicate) / 400 (invalid) / 500 (error)
                                    -> Client shows success animation or error message
                                    -> Success message auto-clears after 5 seconds via setTimeout
```

### State Management

All state is local to `page.tsx` using React `useState` hooks:

| State | Type | Purpose |
|-------|------|---------|
| `email` | `string` | Current email input value |
| `submitted` | `boolean` | Controls success message display |
| `submitting` | `boolean` | Controls loading state on submit button |
| `error` | `string` | Error message display |
| `expandedFaq` | `number \| null` | Which FAQ item is expanded (-1/null = none) |

No global state management is needed for this single-page design.

### Deployment

- **Production:** Pushes to `main` branch auto-deploy to Vercel
- **Preview:** Pull requests get preview deployment URLs
- **Manual:** `vercel --prod`
- **Vercel Project:** `prj_tr79UBDJVgTipzCEZGmqfXKB4G7y` (team `team_O4R56JsPNOa1IJYUZ5FlHQ42`)
- **Project Name:** `vibot-landing`
- **Domain:** `vibe-coding.academy`

## Features

- Hero section with animated pulse badge and purple-to-slate gradient background
- Interactive side-by-side demo comparison (traditional coding vs. vibe coding)
- Feature grid with 6 benefit-driven cards and hover border effects
- Testimonials section with 4 diverse persona stories and transparency disclaimer
- Waitlist email signup form with full backend (validation, duplicate prevention, JSON storage)
- FAQ accordion with 5 common objections addressed
- Learning path visualization with 4-step numbered journey
- Tech stack showcase highlighting 12 modern tools
- Social proof counter (displayed as "2,000+ vibe coders already creating")
- Programmatic robots.txt and sitemap.xml for SEO
- Responsive design (mobile, tablet, desktop)
- SEO optimization (metadata, Open Graph, Twitter Cards)
- Smooth animations and transitions throughout (hover scale, border transitions, pulse animations)
- Dark-mode-only design with purple/slate gradient color scheme
- Clean typography with antialiased rendering

## Known Issues

| Issue | Severity | Detail |
|-------|----------|--------|
| File-based waitlist storage | Critical | `data/waitlist.json` does not persist on Vercel serverless; emails may be lost between deploys or across function instances |
| No confirmation email | High | Users who sign up receive no email confirmation; no email service integrated |
| Fictional testimonials | High | All 4 testimonials are fictional personas with emoji avatars; needs replacement with real user feedback |
| Entire page is client component | Medium | `'use client'` on `page.tsx` means all static content (hero, features, FAQ) is client-rendered; should be split into server + client components |
| No analytics | Medium | No page view, conversion, or behavior tracking installed |
| No automated tests | Medium | No unit, integration, or E2E tests exist |
| No lint configuration | Medium | No ESLint or Prettier config; relies solely on TypeScript strict mode |
| Static social proof counter | Low | "2,000+ vibe coders" is hardcoded; not connected to actual waitlist count despite GET endpoint existing |
| No A/B testing | Low | Landing page copy and CTA placement not optimized through experimentation |
| Contact links missing | Low | Footer has no contact email, Twitter, or Discord links |
| No OG image | Low | Open Graph tags configured but no `og:image` URL provided for social sharing previews |
| No custom Tailwind theme | Low | Using default Tailwind theme; purple brand colors are inline rather than in `tailwind.config.ts` |

## Strategy & Next Steps

### Portfolio Assessment

This project is the **marketing landing page for Vibe Coding Academy** (a Tier 1 product). It should be **registered in `projects.json`** in the apps portfolio with the following metadata:

```json
{
  "slug": "vibot-landing",
  "name": "Vibot Landing",
  "status": "live",
  "tier": 1,
  "repoPath": "C:\\dev\\vibot-landing",
  "techStack": ["nextjs", "react", "typescript", "tailwind"],
  "deployUrl": "https://vibe-coding.academy",
  "description": "Marketing landing page for Vibe Coding Academy with waitlist signup"
}
```

### Immediate (P0 -- Fix Waitlist Durability)

1. **Migrate waitlist storage to Supabase** -- Replace `data/waitlist.json` file storage with a Supabase table. The current file-based approach does not survive Vercel serverless function restarts or redeployments. Create a `waitlist` table with columns: `id` (uuid), `email` (unique), `created_at` (timestamptz).
2. **Add Resend email confirmation** -- After successful waitlist signup, send a branded confirmation email using Resend. This validates the email address and improves user experience.
3. **Connect social proof counter to real data** -- The GET `/api/waitlist` endpoint already returns the count. Wire the "2,000+ vibe coders" text to dynamically fetch and display the actual waitlist count on page load using `useEffect`.

### Short-Term (P1 -- Credibility & Quality)

4. Replace fictional testimonials with real user quotes or beta tester feedback
5. Add contact links in footer (email, Twitter/X, Discord)
6. Install Vercel Analytics (zero-config) for page views and waitlist conversion tracking
7. Add structured data (JSON-LD schema) for rich search results
8. Split `page.tsx` into server and client components -- Extract static sections (hero, features, FAQ data, learning path, tech stack) as server components and keep only the interactive waitlist form and FAQ accordion as client components
9. Add ESLint and Prettier configuration for code quality enforcement
10. Define brand colors in `tailwind.config.ts` instead of using inline purple values

### Medium-Term (P2 -- Conversion Optimization)

11. Add email double opt-in flow
12. A/B test hero headline and CTA button copy
13. Add exit-intent popup or scroll-triggered signup prompt
14. Run Lighthouse audit and optimize Core Web Vitals
15. Add OG image for social sharing (`/public/og-image.png`)
16. Add automated tests (at minimum: E2E test for waitlist signup flow using Playwright)

### Long-Term (P3 -- Growth)

17. Add blog or content section for organic SEO traffic
18. Build referral system for waitlist position
19. Create dedicated feature pages and pricing page
20. Add video demo embed showing vibe coding in action
21. Integrate with CRM for lead nurturing pipeline

## Setup and Installation

### Prerequisites

- Node.js 18+ (recommended: Node 20 LTS)
- npm, yarn, or pnpm

### Quick Start

```bash
git clone https://github.com/guytheguytheguy/vibot-landing.git
cd vibot-landing
npm install
npm run dev
# Open http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack on http://localhost:3000 |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server (requires build first) |

### Environment Variables

Currently none required. When backend is upgraded:

```env
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=xxx...
RESEND_API_KEY=re_xxx...
```

Add to `.env.local` (gitignored) and Vercel environment variables dashboard.

## Git History

```
1050f79 [vibot-landing] docs: update README with current project status and architecture
020d894 [vibot-landing] daily: sync 7 files
4d17644 [vibot-landing] docs: add project status and strategy documentation
87e041c [vibot-landing] Update gitignore, layout, and homepage
7cb82e0 fix: Update Next.js to latest version
108b62f feat: Vibot landing page for vibot.app
```
