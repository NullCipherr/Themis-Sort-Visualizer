# Architecture

## High-Level Flow

1. `src/main.tsx` bootstraps the React application.
2. `src/App.tsx` controls navigation state (`Home`, `Studio`, `Insight`, `Guide`).
3. `src/components/Sidebar.tsx` manages section navigation and algorithm selection.
4. `src/components/Visualizer.tsx` executes sorting generators and renders bars.
5. `src/services/sortingAlgorithms.ts` exposes generator-based algorithm implementations.
6. `src/data/algorithms.ts` provides static metadata and educational content.

## Core Design Decisions

- **Generator-driven execution**: each algorithm yields `SortStep` objects for deterministic frame updates.
- **Separation of concerns**:
  - visual/UI components in `src/components`;
  - algorithm execution in `src/services`;
  - data/content in `src/data`;
  - shared contracts in `src/types`.
- **Client-only educational app**: no backend, no persistence, no secrets.

## State Model (Visualizer)

`Visualizer` tracks:

- current array values;
- highlighted indices (`compareIndices`, `swapIndices`, `sortedIndices`);
- runtime stats (`comparisons`, `swaps`, `steps`);
- runtime controls (`isSorting`, `isPaused`, `speed`, `arraySize`, `audioEnabled`).

## Scalability Notes

- For larger algorithm sets, consider moving `getGenerator` mapping to a dedicated registry module.
- For stronger maintainability, convert static content in `src/data/algorithms.ts` into modular files per algorithm.
