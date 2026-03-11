# Themis Sort Visualizer

An interactive sorting algorithm visualizer built with React, TypeScript, and Vite.

## Overview

Themis Sort Visualizer helps users understand how sorting algorithms work through:

- Real-time visual animations
- Step-by-step algorithm execution
- Learning/Insight pages with history, creator, origin, complexity, and code
- Performance counters (comparisons, swaps, steps)

All educational content is static and local. The project does not rely on any AI API at runtime.

## Tech Stack

- React 19
- TypeScript
- Vite
- Framer Motion
- Lucide React
- Tailwind CSS (via CDN)

## Project Structure

```text
.
├── public/
│   └── _redirects
├── src/
│   ├── components/
│   ├── data/
│   ├── services/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── wrangler.toml
```

## Requirements

- Node.js 20+
- npm 10+

## Local Development

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## Production Build

```bash
npm run build
npm run preview
```

Build output is generated in the `dist/` folder.

### SPA Routing

This project includes `public/_redirects`:

```text
/* /index.html 200
```

This ensures client-side routes work correctly on Cloudflare Pages.

## Notes

- Educational data is centralized in `src/data/algorithms.ts`.
- Sorting generators used by the visualizer are in `src/services/sortingAlgorithms.ts`.
