# Vibot Landing - Status & Strategy

> Last updated: 2026-02-10

## Overview

Vibot Landing is a marketing landing page for "Vibe Coding Academy," built with Next.js 16.1.6, React 19, TypeScript, and Tailwind CSS. It is a single-page application deployed on Vercel that showcases the platform's value proposition through a hero section, demo comparison, feature grid, testimonials, waitlist form, FAQ accordion, learning path visualization, and tech stack showcase. The page is 90% production-ready but has a non-functional email capture form -- submitted emails are lost.

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

**Overall: 90% Production-Ready -- Email Capture is Non-Functional**

### Working

- Full single-page marketing layout in `app/page.tsx` (434 lines)
- Hero section with gradient background, animated pulse badge, dual CTA buttons (waitlist + demo)
- Interactive demo comparison (Traditional Coding vs. Vibe Coding with code highlighting, time savings highlight)
- Feature grid with 6 core features, hover effects, benefit-driven copy
- Testimonials section with 4 persona stories (fictional -- see Known Issues)
- Waitlist signup form with email validation and success state animation (UI only -- backend NOT connected)
- FAQ accordion with 5 questions, smooth expand/collapse animations
- Learning path visualization (4-step numbered progression)
- Tech stack showcase (12 tools/technologies with hover effects)
- Responsive design (mobile-first with md: and lg: breakpoints)
- SEO metadata, Open Graph tags, and Twitter Cards configured in layout.tsx
- Deployed and live on Vercel with automatic deploys from main branch
- Hot reload development via Turbopack

### Non-Functional

- **Waitlist email capture** -- The form renders, validates email, and shows a success message, but `handleSubmit()` only sets local state (`setSubmitted(true)`). No API route, database, or email service receives the submission. Every email entered is lost.

### Missing

- Backend email integration (no `app/api/waitlist/route.ts`, no database, no email service)
- Analytics tracking (no Vercel Analytics, Google Analytics, or Plausible)
- Real testimonials (current 4 are fictional personas with disclaimer)
- A/B testing infrastructure
- Automated tests (no unit, integration, or E2E tests)

## Architecture

### Directory Structure

```
C:\dev\vibot-landing\
  app/
    globals.css             # Global styles (Tailwind imports + base styles)
    layout.tsx              # Root layout with metadata, OG tags, HTML structure
    page.tsx                # Main landing page (434 lines, all sections, client component)
  public/                   # Static assets (currently empty)
  .vercel/                  # Vercel deployment configuration
  next.config.ts            # Next.js configuration
  tailwind.config.ts        # Tailwind CSS configuration (purple/slate scheme)
  tsconfig.json             # TypeScript configuration
  postcss.config.mjs        # PostCSS configuration
  package.json              # Dependencies and scripts
  .gitignore                # Git ignore rules
```

### Page Sections (in app/page.tsx)

1. **Hero** -- Gradient background, animated badge, headline, subheadline, dual CTA
2. **Demo Comparison** -- Side-by-side traditional vs. vibe coding with syntax examples
3. **Feature Grid** -- 6 feature cards with icons, hover effects
4. **Testimonials** -- 4 fictional persona stories with emoji avatars, disclaimer
5. **Waitlist Form** -- Email input + submit, validation, success animation, social proof counter
6. **FAQ Accordion** -- 5 expandable Q&A items
7. **Learning Path** -- 4-step numbered progression visualization
8. **Tech Stack Showcase** -- 12 technology cards with hover effects

### Data Flow

```
User enters email -> handleSubmit() -> setSubmitted(true) -> Success UI shown
                                    -> MISSING: POST to /api/waitlist
                                    -> MISSING: Store in database
                                    -> MISSING: Send confirmation email
```

### State Management

All state is local to `page.tsx` using React `useState` hooks. No global state management needed for this single-page design.

### Deployment

- **Production:** Pushes to `main` branch auto-deploy to Vercel
- **Preview:** Pull requests get preview URLs
- **Manual:** `vercel --prod`

## Features

- Hero section with animated pulse badge and gradient background
- Interactive side-by-side demo comparison (traditional coding vs. vibe coding)
- Feature grid with 6 benefit-driven cards and hover effects
- Testimonials section with 4 diverse persona stories and transparency disclaimer
- Waitlist email signup form with validation and success animation (UI only)
- FAQ accordion with 5 common objections addressed
- Learning path visualization with 4-step numbered journey
- Tech stack showcase highlighting 12 modern tools
- Social proof counter (displayed as "2,000+ members")
- Responsive design (mobile, tablet, desktop)
- SEO optimization (metadata, Open Graph, Twitter Cards)
- Smooth animations and transitions throughout
- Purple/slate gradient color scheme

## Known Issues

| Issue | Severity | Detail |
|-------|----------|--------|
| Waitlist form not connected | Critical | `handleSubmit()` only sets local state; no API route, database, or email service receives submissions; all emails are lost |
| Fictional testimonials | High | All 4 testimonials are fictional personas with emoji avatars; needs replacement with real user feedback |
| No analytics | Medium | No page view, conversion, or behavior tracking installed |
| No automated tests | Medium | No unit, integration, or E2E tests |
| No A/B testing | Low | Landing page copy and CTA placement not optimized |
| Contact links are placeholders | Low | Email, Twitter, and Discord links in footer are placeholder text |

## Strategy & Next Steps

### Immediate (P0 -- Fix the Funnel)

1. **Connect waitlist email capture** -- Create `app/api/waitlist/route.ts` to receive form submissions. Recommended approach:
   - Supabase table for email storage (reusable across projects)
   - Resend or SendGrid for confirmation emails
   - Add duplicate prevention and rate limiting
2. **Wire `handleSubmit()` to the API route** -- Replace the client-only state change with a `fetch()` POST call, loading state, and error handling
3. **Add analytics** -- Install Vercel Analytics (zero-config) for page views and waitlist conversion tracking

### Short-Term (P1 -- Credibility)

4. Replace fictional testimonials with real user quotes or beta tester feedback
5. Update contact links (email, Twitter, Discord) with real URLs
6. Add `robots.txt` and `sitemap.xml` for SEO
7. Add structured data (JSON-LD schema) for rich search results

### Medium-Term (P2 -- Conversion Optimization)

8. Add email confirmation flow (double opt-in)
9. Replace static social proof counter with live waitlist count
10. A/B test hero headline and CTA button copy
11. Add exit-intent popup or scroll-triggered signup prompt
12. Run Lighthouse audit and optimize performance

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
git clone <repository-url>
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

### Environment Variables

Currently none required. When backend integration is added:

```env
RESEND_API_KEY=re_xxx...
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=xxx...
```

Add to `.env.local` (gitignored) and Vercel environment variables dashboard.
