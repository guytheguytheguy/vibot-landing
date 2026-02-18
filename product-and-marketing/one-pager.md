# Vibot Landing - One-Pager
**Project:** Vibot Landing
**Document Type:** One-Pager
**Date:** 2026-02-18

---

## Elevator Pitch

Vibot Landing is the marketing landing page for Vibe Coding Academy, the platform that teaches people to build software using AI-assisted "vibe coding" methods. Built with Next.js 16, React 19, and TypeScript in strict mode, it is a production-deployed single-page site on Vercel at vibe-coding.academy. It features a hero section, interactive demo comparison (traditional vs. vibe coding), feature grid, testimonials, waitlist email capture with server-side validation, FAQ accordion, learning path visualization, and tech stack showcase.

## Target Market

- Aspiring developers who want to build software without years of traditional coding education
- Career switchers looking to enter tech through AI-assisted development
- Non-technical founders who want to prototype their own product ideas
- Existing developers curious about prompt-driven development workflows
- Bootcamp graduates and self-taught developers seeking modern AI-augmented approaches

## Key Differentiation

- **Working waitlist system**: Fully functional email capture with server-side validation, duplicate prevention, and file-based storage (with path to Supabase migration)
- **Interactive demo**: Side-by-side comparison showing traditional coding (hours of syntax wrestling) vs. vibe coding (2-minute natural language prompt to working feature)
- **Conversion-optimized**: Multiple CTA placements, social proof counter, FAQ addressing objections, learning path visualization
- **SEO-ready**: Programmatic robots.ts, sitemap.ts, Open Graph tags, Twitter Cards, metadata base set to vibe-coding.academy
- **Production-deployed**: Live on Vercel with automatic deploys from main branch, custom domain configured

## Current Status

- 95% production-ready, live at vibe-coding.academy
- Waitlist email capture fully functional (POST/GET /api/waitlist)
- All 10 page sections implemented (hero, demo, features, testimonials, waitlist, FAQ, learning path, tech stack, CTA footer, footer)
- SEO metadata, Open Graph, Twitter Cards configured
- Responsive design (mobile, tablet, desktop) with dark theme
- Known gaps: file-based waitlist storage (needs Supabase), fictional testimonials, no analytics, no confirmation emails

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, TypeScript 5 (strict) |
| Styling | Tailwind CSS 3, PostCSS, Autoprefixer |
| Dev Server | Turbopack |
| Deployment | Vercel (auto-deploy from main) |
| Domain | vibe-coding.academy |
| Waitlist Backend | Next.js API Route (file-based JSON storage) |
