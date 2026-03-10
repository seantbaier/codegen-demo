# CLAUDE.md

## Project Overview

**DevBot** — a Next.js 15 web application bootstrapped with `create-next-app`. Uses the App Router, React 19, Tailwind CSS v4, and TypeScript.

## Tech Stack

- **Framework:** Next.js 15.5 (App Router)
- **Language:** TypeScript (strict mode)
- **UI:** React 19, Tailwind CSS v4 (via `@tailwindcss/postcss`)
- **Fonts:** Geist Sans & Geist Mono (loaded via `next/font/google`)
- **Linting/Formatting:** Biome 2.2
- **Bundler:** Turbopack (used in dev and build)

## Project Structure

```
app/
  layout.tsx      # Root layout with font setup and metadata
  page.tsx        # Home page component
  globals.css     # Global styles, Tailwind import, CSS custom properties
public/           # Static assets (SVGs)
biome.json        # Biome linter/formatter config
next.config.ts    # Next.js configuration
postcss.config.mjs # PostCSS config (Tailwind plugin)
tsconfig.json     # TypeScript config with @/* path alias
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack |
| `npm run build` | Production build with Turbopack |
| `npm run start` | Start production server |
| `npm run lint` | Run Biome linter (`biome check`) |
| `npm run format` | Auto-format with Biome (`biome format --write`) |

## Code Style & Conventions

### Biome Configuration

- **Indent:** 2 spaces
- **Linter rules:** Recommended + React and Next.js domain rules
- **Import organization:** Auto-organized via Biome assist
- **`noUnknownAtRules`:** Disabled (required for Tailwind CSS v4 `@theme` directives)
- **Ignored dirs:** `node_modules`, `.next`, `dist`, `build`

### TypeScript

- Strict mode enabled
- Path alias: `@/*` maps to project root (e.g., `import Foo from "@/app/component"`)
- Target: ES2017, module resolution: bundler

### Styling

- Use Tailwind CSS utility classes for styling
- CSS custom properties defined in `app/globals.css` for theme colors (`--background`, `--foreground`)
- Dark mode via `prefers-color-scheme: dark` media query and Tailwind `dark:` variants
- Custom theme tokens registered via `@theme inline` block in globals.css

### Components

- Use the Next.js App Router pattern (server components by default)
- Add `"use client"` directive only when client interactivity is needed
- Use `next/image` for all images (provides optimization)
- Use `next/font` for font loading (already configured with Geist)

## Development Workflow

1. Install dependencies: `npm install`
2. Run dev server: `npm run dev`
3. Before committing, lint and format: `npm run lint && npm run format`
4. Build to verify: `npm run build`

## Environment

- No `.env` files are committed (all `.env*` patterns are gitignored)
- Node.js package manager: npm (uses `package-lock.json`)
