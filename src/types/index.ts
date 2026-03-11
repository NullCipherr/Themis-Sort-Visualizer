export enum AlgorithmType {
  BUBBLE = 'Bubble Sort',
  INSERTION = 'Insertion Sort',
  SELECTION = 'Selection Sort',
  MERGE = 'Merge Sort',
  QUICK = 'Quick Sort',
  HEAP = 'Heap Sort',
  SHELL = 'Shell Sort',
  COCKTAIL = 'Cocktail Shaker',
  GNOME = 'Gnome Sort',
  RADIX = 'Radix Sort (LSD)',
  // Previous additions
  COMB = 'Comb Sort',
  PANCAKE = 'Pancake Sort',
  CYCLE = 'Cycle Sort',
  BOGO = 'Bogo Sort',
  STOOGE = 'Stooge Sort',
  ODD_EVEN = 'Odd-Even Sort',
  DOUBLE_SELECTION = 'Double Selection',
  BITONIC = 'Bitonic Sort',
  TREE = 'Tree Sort',
  TIM = 'Tim Sort (Simple)',
  // New Additions
  BUCKET = 'Bucket Sort',
  COUNTING = 'Counting Sort',
  BINARY_INSERTION = 'Binary Insertion',
  SLOW = 'Slow Sort',
  DUAL_PIVOT_QUICK = 'Dual-Pivot Quick'
}

export enum Page {
  HOME = 'home',
  VISUALIZER = 'visualizer',
  DOCS = 'docs',
  LEARNING = 'learning'
}

export interface SortStep {
  array: number[];
  compareIndices: number[]; // Indices currently being compared
  swapIndices: number[];    // Indices currently being swapped/modified
  sortedIndices: number[];  // Indices known to be sorted
  description?: string;     // Textual description of the step
}

export type SortGenerator = (array: number[]) => Generator<SortStep, void, unknown>;

export interface AlgorithmInfo {
  type: AlgorithmType;
  description: string;
  timeComplexity: string;
  spaceComplexity: string;
}