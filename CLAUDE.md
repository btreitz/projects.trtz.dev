# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13+ portfolio website (projects.trtz.dev) showcasing personal software projects. Built with TypeScript, Tailwind CSS, and deployed on Vercel. Dark mode only design with glass-morphism UI elements.

## Commands

```bash
# Install dependencies
pnpm install

# Development server (localhost:3000)
pnpm dev

# Production build
pnpm build

# Linting
pnpm lint
```

**Node version:** v22 (specified in `.node-version`)

## Architecture

### App Structure (Next.js App Router)

- `app/` - Next.js app directory with layout.tsx (root layout + metadata) and page.tsx (home page)
- `components/` - React components
  - `header.tsx` - Fixed glass-morphism header with logo and navigation
  - `footer.tsx` - Fixed glass-morphism footer with status indicator
  - `projectCard.tsx` - Project display cards with glass-morphism styling
  - `interactiveGridBackground.tsx` - Canvas-based animated dot grid background
  - `framerMotionDivWrapper.tsx` - Reusable animation wrapper
- `projectData/` - JSON files containing project information
  - `projects.json` - Array of project names to display
  - `{project-name}.json` - Individual project data files

### Server vs Client Components

- **Server components** (default): Layout, page.tsx - handle data fetching and metadata
- **Client components** (marked with `"use client"`): header.tsx, footer.tsx, interactiveGridBackground.tsx, framerMotionDivWrapper.tsx - handle interactivity and animations

### Data Flow

Projects are loaded by:
1. Reading `projects.json` to get project names
2. Dynamically importing each `{project-name}.json` via `require()`
3. Fetching GitHub descriptions in production (falls back to lorem ipsum in dev)

### Styling

- Dark mode only design using zinc color palette
- Tailwind CSS with custom breakpoints: `phone:`, `tablet:`, `laptop:`, `desktop:`
- Glass-morphism effects: `bg-zinc-900/70 backdrop-blur-md`
- Framer Motion for entrance animations
