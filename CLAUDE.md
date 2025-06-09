# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure
- **Main app**: Located in `ice-website/` directory (Next.js 15 application)
- **Root package.json**: Proxy commands that run inside `ice-website/`
- **API Routes**: Next.js App Router API routes in `app/api/` (contact, order, chatbot)
- **Components**: Reusable React components in `components/`
- **HubSpot Integration**: CRM integration via `lib/hubspot.ts` with graceful fallback

## Build/Test/Lint Commands
All commands run from project root and automatically execute in `ice-website/`:
- **Dev**: `npm run dev` (starts Next.js dev server)
- **Build**: `npm run build` (production build)
- **Start**: `npm run start` (production server)
- **Lint**: `npm run lint` (ESLint)
- **Test**: `npm test` (Jest)

## Architecture
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom fonts (Inter, Montserrat)
- **Layout**: Global layout with Header, Footer, and Chatbot components
- **CRM**: Optional HubSpot integration with mock fallback for contacts, deals, tickets
- **API Design**: RESTful endpoints for contact forms, orders, and chatbot

## Code Style Guidelines
- **TypeScript**: Strict mode enabled
- **Components**: Functional components with React 19 RC
- **Imports**: Group React, third-party, local imports with blank lines
- **Error Handling**: Graceful degradation (HubSpot integration example)
- **Naming**: camelCase for variables/functions, PascalCase for components