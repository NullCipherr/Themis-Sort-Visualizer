# Changelog

All notable changes to this project will be documented in this file.

This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added
- CI/CD pipeline with GitHub Actions at `.github/workflows/ci-cd-pages.yml`.
- CI stage for build validation on `push` and `pull_request` targeting `main`.
- Automatic GitHub Pages deployment on `push` to `main`.
- Dynamic Vite `base` configuration for GitHub Pages compatibility via `GITHUB_REPOSITORY`.

## [0.1.0] - 2026-05-09

### Added
- React + TypeScript + Vite application for educational sorting algorithm visualization.
- Visual simulation for **25 algorithms** with step-by-step execution.
- Generator-based execution model (`Generator<SortStep>`) for deterministic animation flow.
- Interactive runtime controls: `Play`, `Pause`, `Step`, and `Reset`.
- Real-time speed and array-size controls.
- Runtime metrics with comparison, swap, and step counters.
- Visual state highlighting during execution (`compare`, `swap`, `sorted`).
- Optional audio feedback for compare, swap, and completion events.
- Algorithm hub with search and selection.
- Learning mode with contextual explanations and pseudocode.
- Responsive navigation with sidebar and dedicated sections.
- Modular front-end structure:
  - `src/components` for visual interface;
  - `src/services` for algorithms and execution logic;
  - `src/data` for metadata and content;
  - `src/types` for shared contracts.
- Initial technical documentation under `docs/`:
  - architecture (`docs/en/ARCHITECTURE.md`);
  - algorithms (`docs/en/ALGORITHMS.md`);
  - development (`docs/en/DEVELOPMENT.md`);
  - deployment (`docs/en/DEPLOYMENT.md`);
  - testing (`docs/en/TESTING.md`);
  - roadmap (`docs/en/ROADMAP.md`).
- Preview image assets in `docs/assets/`.
- Project policies and guides:
  - contribution (`CONTRIBUTING.md`);
  - code of conduct (`CODE_OF_CONDUCT.md`);
  - security (`SECURITY.md`);
  - MIT license (`LICENSE`).

### Notes
- Current known limitation: part of the algorithms are not yet mapped in `getGenerator` within `src/components/Visualizer.tsx`, with fallback to Bubble Sort when needed.
