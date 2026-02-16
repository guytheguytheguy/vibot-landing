# Vibot Landing - Status & Strategy

> Last updated: 2026-02-16

## Overview

Vibot Landing is the marketing landing page for **Vibe Coding Academy** (https://vibe-coding.academy), built with Next.js 16, React 19, TypeScript, and Tailwind CSS. It is a single-page application deployed on Vercel that showcases the platform's value proposition through a hero section, interactive demo comparison, feature grid, testimonials, waitlist email capture form, FAQ accordion, learning path visualization, and tech stack showcase.

The page is **95% production-ready**. The waitlist email capture form is now fully functional with a file-based JSON backend (`app/api/waitlist/route.ts`). SEO fundamentals are in place with `robots.ts` and `sitemap.ts`. The primary remaining gaps are: replacing fictional testimonials with real ones, adding analytics tracking, and migrating the waitlist backend from local JSON to a proper database for production durability.

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 16.1.6 |
| UI Library | React | 19 |
| Language | TypeScript | 5 (strict mode) |
| Styling | Tailwind CSS | 3.4.17 |
| CSS Processing | PostCSS + Autoprefixer | 8.4.49 / 10.4.20 |
| Bundler (dev) | Turbopack | built-in |
| Deployment | Vercel | production (prj_tr79UBDJVgTipzCEZGmqfXKB4G7y) |
| Architecture | App Router | single page |

## Current Status

**Overall: 95% Production-Ready**

### Working

- Full single-page marketing layout in `app/page.tsx` (464 lines, client component)
- Hero section with gradient background, animated pulse badge, dual CTA buttons (waitlist + demo)
- Interactive demo comparison (Traditional Coding vs. Vibe Coding with code highlighting, time savings highlight)
- Feature grid with 6 core features, hover effects, benefit-driven copy
- Testimonials section with 4 persona stories (fictional -- see Known Issues)
- **Waitlist email capture form** -- fully functional with:
  - Client-side email validation
  - POST to `/api/waitlist` with loading state and error handling
  - Server-side email validation (format check, duplicate prevention)
  - JSON file-based storage (`data/waitlist.json`, gitignored)
  - GET endpoint returning current waitlist count
  - Success and error state UI animations
- FAQ accordion with 5 questions, smooth expand/collapse animations
- Learning path visualization (4-step numbered progression)
- Tech stack showcase (12 tools/technologies with hover effects)
- Responsive design (mobile-first with md: and lg: breakpoints)
- SEO metadata, Open Graph tags, and Twitter Cards configured in `layout.tsx`
- `robots.ts` -- programmatic robots.txt generation allowing all crawlers
- `sitemap.ts` -- programmatic sitemap.xml generation with weekly change frequency
- Deployed and live on Vercel with automatic deploys from `main` branch
- Hot reload development via Turbopack

### Limitations

- **Waitlist storage is file-based** -- The `data/waitlist.json` file works on a single server instance but will not persist across Vercel serverless function cold starts in production. Emails submitted in production may be lost between deploys. This needs migration to a database (Supabase recommended).
- **No confirmation email** -- Signing up does not send an email to the user. No email service is integrated.

### Missing

- Persistent database for waitlist (current file-based approach is not durable on serverless)
- Email service integration (no confirmation emails sent)
- Analytics tracking (no Vercel Analytics, Google Analytics, or Plausible)
- Real testimonials (current 4 are fictional personas)
- A/B testing infrastructure
- Automated tests (no unit, integration, or E2E tests)

## Architecture

### Directory Structure

```
C:\dev\vibot-landing\
  app/
    api/
      waitlist/
        route.ts              # POST: add email to waitlist, GET: return count
    globals.css               # Global styles (Tailwind imports + base styles)
    layout.tsx                # Root layout with metadata, OG tags, HTML structure
    page.tsx                  # Main landing page (464 lines, all sections, client component)
    robots.ts                 # Programmatic robots.txt generation
    sitemap.ts                # Programmatic sitemap.xml generation
  data/
    waitlist.json             # Waitlist email storage (gitignored, auto-created)
  .vercel/                    # Vercel deployment configuration
  next.config.ts              # Next.js configuration (minimal, no custom settings)
  tailwind.config.ts          # Tailwind CSS configuration (default, no custom theme)
  tsconfig.json               # TypeScript strict mode configuration
  postcss.config.mjs          # PostCSS with Tailwind + Autoprefixer
  package.json                # Dependencies and scripts
  .gitignore                  # Ignores node_modules, .next, .env*, data/, .vercel
```

### Page Sections (in app/page.tsx)

1. **Hero** -- Gradient background, animated badge, headline ("Code at the Speed of Thought"), subheadline, dual CTA (Join Waitlist + See It In Action)
2. **Demo Comparison** -- Side-by-side traditional coding (hours of syntax wrestling) vs. vibe coding (2 minutes to working feature), with code snippets and prompt example
3. **Feature Grid** -- 6 feature cards: AI-Assisted Development, Prompt Engineering, Rapid Prototyping, Modern Tech Stacks, Debugging with AI, Deployment & Scaling
4. **Testimonials** -- 4 fictional persona stories (Sarah Chen, Marcus Johnson, Priya Patel, Alex Rodriguez) with emoji avatars and disclaimer text
5. **Waitlist Form** -- Email input + submit button, validation, loading/submitting state, success animation, error display, social proof counter ("2,000+ vibe coders")
6. **FAQ Accordion** -- 5 expandable Q&A items covering what vibe coding is, experience requirements, supported tools, pricing, and bootcamp differentiation
7. **Learning Path** -- 4-step numbered progression (Fundamentals, Build Projects, Advanced Patterns, Ship & Scale)
8. **Tech Stack Showcase** -- 12 technology cards (Claude AI, ChatGPT, GitHub Copilot, Cursor, Next.js, React, TypeScript, Tailwind CSS, Supabase, Vercel, v0, Bolt.new)
9. **CTA Footer** -- Final call-to-action linking back to waitlist
10. **Footer** -- Copyright 2026 Vibe Coding Academy

### Data Flow

```
User enters email -> handleSubmit() -> fetch('/api/waitlist', { method: 'POST', body: { email } })
                                    -> Server validates email format
                                    -> Server checks duplicate in data/waitlist.json
                                    -> Server appends entry with timestamp
                                    -> Returns 201 (success) / 200 (duplicate) / 400 (invalid) / 500 (error)
                                    -> Client shows success animation or error message
                                    -> Success message auto-clears after 5 seconds
```

### State Management

All state is local to `page.tsx` using React `useState` hooks:
- `email` (string) -- current input value
- `submitted` (boolean) -- controls success message display
- `submitting` (boolean) -- controls loading state on submit button
- `error` (string) -- error message display
- `expandedFaq` (number | null) -- which FAQ item is expanded

No global state management needed for this single-page design.

### Deployment

- **Production:** Pushes to `main` branch auto-deploy to Vercel
- **Preview:** Pull requests get preview URLs
- **Manual:** `vercel --prod`
- **Vercel Project:** `prj_tr79UBDJVgTipzCEZGmqfXKB4G7y` (team `team_O4R56JsPNOa1IJYUZ5FlHQ42`)

## Features

- Hero section with animated pulse badge and gradient background
- Interactive side-by-side demo comparison (traditional coding vs. vibe coding)
- Feature grid with 6 benefit-driven cards and hover effects
- Testimonials section with 4 diverse persona stories and transparency disclaimer
- Waitlist email signup form with full backend (validation, duplicate prevention, JSON storage)
- FAQ accordion with 5 common objections addressed
- Learning path visualization with 4-step numbered journey
- Tech stack showcase highlighting 12 modern tools
- Social proof counter (displayed as "2,000+ vibe coders already creating")
- Programmatic robots.txt and sitemap.xml for SEO
- Responsive design (mobile, tablet, desktop)
- SEO optimization (metadata, Open Graph, Twitter Cards)
- Smooth animations and transitions throughout
- Purple/slate gradient color scheme

## Known Issues

| Issue | Severity | Detail |
|-------|----------|--------|
| File-based waitlist storage | Critical | `data/waitlist.json` does not persist on Vercel serverless; emails may be lost between deploys or across function instances |
| No confirmation email | High | Users who sign up receive no email confirmation; no email service integrated |
| Fictional testimonials | High | All 4 testimonials are fictional personas with emoji avatars; needs replacement with real user feedback |
| No analytics | Medium | No page view, conversion, or behavior tracking installed |
| No automated tests | Medium | No unit, integration, or E2E tests |
| Static social proof counter | Low | "2,000+ vibe coders" is hardcoded; not connected to actual waitlist count despite GET endpoint existing |
| No A/B testing | Low | Landing page copy and CTA placement not optimized through experimentation |
| Contact links missing | Low | Footer has no contact email, Twitter, or Discord links |

## Strategy & Next Steps

### Portfolio Assessment

This project is the **marketing landing page for Vibe Coding Academy** (a Tier 1 product). It should be **registered in projects.json** with the following metadata:

```json
{
  "slug": "vibot-landing",
  "name": "Vibot Landing",
  "status": "live",
  "tier": 1,
  "repoPath": "C:\\dev\\vibot-landing",
  "techStack": ["nextjs", "react", "typescript", "tailwind"],
  "deployUrl": "https://vibe-coding.academy",
  "description": "Marketing landing page for Vibe Coding Academy"
}
```

### Immediate (P0 -- Fix Waitlist Durability)

1. **Migrate waitlist storage to Supabase** -- Replace `data/waitlist.json` file storage with a Supabase table. The current file-based approach does not survive Vercel serverless function restarts or redeployments. Create a `waitlist` table with columns: `id`, `email` (unique), `created_at`.
2. **Add Resend email confirmation** -- After successful waitlist signup, send a branded confirmation email using Resend. This validates the email address and improves user experience.
3. **Connect social proof counter to real data** -- The GET `/api/waitlist` endpoint already returns the count. Wire the "2,000+ vibe coders" text to dynamically fetch and display the actual waitlist count on page load.

### Short-Term (P1 -- Credibility & Analytics)

4. Replace fictional testimonials with real user quotes or beta tester feedback
5. Add contact links in footer (email, Twitter/X, Discord)
6. Install Vercel Analytics (zero-config) for page views and waitlist conversion tracking
7. Add structured data (JSON-LD schema) for rich search results

### Medium-Term (P2 -- Conversion Optimization)

8. Add email double opt-in flow
9. A/B test hero headline and CTA button copy
10. Add exit-intent popup or scroll-triggered signup prompt
11. Run Lighthouse audit and optimize Core Web Vitals
12. Add OG image for social sharing

### Long-Term (P3 -- Growth)

13. Add blog or content section for organic SEO traffic
14. Build referral system for waitlist position
15. Create dedicated feature pages and pricing page
16. Add video demo embed showing vibe coding in action
17. Integrate with CRM for lead nurturing pipeline

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
| `npm run start` | Start production server |

### Environment Variables

Currently none required. When backend is upgraded:

```env
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=xxx...
RESEND_API_KEY=re_xxx...
```

Add to `.env.local` (gitignored) and Vercel environment variables dashboard.
