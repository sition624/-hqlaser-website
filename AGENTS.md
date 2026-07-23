# AGENTS.md - Heqing Laser Website

## Project Overview
Heqing Laser (HQ Laser) official B2B website for overseas customers. Dark industrial tech style. Built with Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS 4, and shadcn/ui.

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI**: shadcn/ui (Radix UI)
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm

## Directory Structure
```
src/
├── app/
│   ├── layout.tsx              # Root layout with Navbar + Footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles, custom utilities, dark theme
│   ├── products/
│   │   ├── page.tsx            # Products overview
│   │   ├── hq26a/page.tsx      # HQ26-A Welder detail
│   │   └── hq1530/page.tsx     # HQ-1530 Cutter detail
│   ├── about/page.tsx          # About us
│   └── contact/page.tsx        # Contact form
├── components/
│   ├── Navbar.tsx              # Fixed nav with dropdown, mobile menu
│   ├── Footer.tsx              # Site footer
│   └── ui/                     # shadcn/ui components
└── lib/utils.ts                # cn() utility
```

## Design System
- **Background**: #0a0a0a (primary), #111111 (cards), #1a1a1a (elevated)
- **Accent Yellow**: #FFD60A (CTA, highlights)
- **Accent Cyan**: #00D4FF (tech accents)
- **Text**: #FFFFFF (primary), #A0A0A0 (secondary), #666666 (muted)
- **Font**: Inter (headings/body), JetBrains Mono (specs/data)
- **Border Radius**: 2-4px (sharp, industrial)
- **Custom classes**: .btn-primary, .btn-outline, .card-hover, .gradient-text, .bg-grid, .spec-table

## Build & Dev Commands
- `pnpm dev` - Start dev server
- `pnpm build` - Production build
- `pnpm ts-check` - TypeScript check
- `pnpm lint` - ESLint
- `pnpm lint:style` - Stylelint

## Key Notes
- All pages are server components except Contact (client for form state) and Navbar (client for scroll/mobile)
- No external API routes - static site
- Images are placeholder SVGs to be replaced with real product photos
- WhatsApp and email links use placeholder numbers/addresses
