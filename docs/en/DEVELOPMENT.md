# Development

## Prerequisites

- Node.js 20+
- npm 10+

## Setup

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Vite default local URL: `http://localhost:5173`

## Build

```bash
npm run build
```

## Preview build

```bash
npm run preview
```

## Code Organization

- `src/components`: UI and screen-level components.
- `src/services`: algorithm execution logic.
- `src/data`: static educational metadata/content.
- `src/types`: shared TypeScript contracts and enums.
- `src/styles`: global visual styles.

## Suggested Next Improvements

1. Add linting (`eslint`) and formatting (`prettier`).
2. Add unit tests for `sortingAlgorithms.ts`.
3. Add component tests for critical UI interactions.
4. Add CI workflow for build + tests.
