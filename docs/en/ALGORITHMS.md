# Algorithms

## Supported Catalog (25)

- Bubble Sort
- Insertion Sort
- Selection Sort
- Merge Sort
- Quick Sort
- Heap Sort
- Shell Sort
- Cocktail Shaker
- Gnome Sort
- Radix Sort (LSD)
- Comb Sort
- Pancake Sort
- Cycle Sort
- Bogo Sort
- Stooge Sort
- Odd-Even Sort
- Double Selection
- Bitonic Sort
- Tree Sort
- Tim Sort (Simple)
- Bucket Sort
- Counting Sort
- Binary Insertion
- Slow Sort
- Dual-Pivot Quick

## Execution Contract

All algorithms implement the same output contract:

```ts
interface SortStep {
  array: number[];
  compareIndices: number[];
  swapIndices: number[];
  sortedIndices: number[];
  description?: string;
}
```

The visualizer consumes each step and updates rendering/stat counters.

## Important Note

`Visualizer.tsx` currently maps only a subset of algorithms in `getGenerator`. Unmapped options default to `bubbleSort`.

To complete coverage, map every `AlgorithmType` to its corresponding generator from `src/services/sortingAlgorithms.ts`.
