# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure
- **Main app**: Located in `ice-website/` directory (Next.js 15 application)
- **No root package.json**: All npm commands must be run from within `ice-website/` directory
- **Dual-purpose site**: Ice delivery business + Search fund investment platform (`/fund` routes)
- **API Routes**: Next.js App Router API routes in `app/api/` (contact, order, chatbot, fund-contact)
- **Components**: Reusable React components in `components/`
- **HubSpot Integration**: CRM integration via `lib/hubspot.ts` with graceful fallback

## Build/Test/Lint Commands
All commands must be run from `ice-website/` directory:
```bash
cd ice-website
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
npm test         # Run Jest tests (no tests exist yet)
```

## Architecture
- **Framework**: Next.js 15.0.0 with App Router
- **React**: Version 19 RC (release candidate)
- **Styling**: Tailwind CSS 3.4.3 with custom design system
- **Fonts**: Inter (default) and Montserrat (headings)
- **Client-side**: Root layout uses 'use client' directive
- **Conditional Layout**: Different navigation for `/fund` routes via FundNavigation component
- **Form Validation**: Zod schemas for API request validation
- **CRM**: Optional HubSpot integration with mock fallback for contacts, deals, tickets
- **API Design**: RESTful endpoints returning JSON responses with success/error states
- **Chatbot**: Simple keyword matching system with predefined FAQ responses

## Key Files
- `app/layout.tsx`: Root layout with conditional navigation logic
- `components/FundNavigation.tsx`: Alternative navigation for fund section
- `lib/hubspot.ts`: CRM integration with environment-based toggling
- `app/api/*/route.ts`: API endpoints for forms and chatbot

## Code Style Guidelines
- **TypeScript**: Strict mode enabled
- **Components**: Functional components with TypeScript interfaces
- **API Routes**: POST handlers with Zod validation and try-catch error handling
- **Imports**: Prefer named imports, group by type (React, third-party, local)
- **Error Handling**: Graceful degradation (see HubSpot integration example)
- **Image Paths**: Use `/images/` prefix for public assets