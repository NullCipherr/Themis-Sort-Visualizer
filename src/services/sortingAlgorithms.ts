import { SortStep } from "../types";

// Helper to yield a step
const createStep = (
  array: number[], 
  compare: number[] = [], 
  swap: number[] = [], 
  sorted: number[] = []
): SortStep => ({
  array: [...array],
  compareIndices: compare,
  swapIndices: swap,
  sortedIndices: sorted
});

export function* bubbleSort(array: number[]): Generator<SortStep> {
  let arr = [...array];
  let n = arr.length;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      yield createStep(arr, [j, j + 1], [], []);
      
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        yield createStep(arr, [j, j + 1], [j, j + 1], []);
      }
    }
    // Optimization: After i iterations, the last i elements are sorted
  }
  yield createStep(arr, [], [], Array.from({length: n}, (_, i) => i));
}

export function* insertionSort(array: number[]): Generator<SortStep> {
  let arr = [...array];
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    
    yield createStep(arr, [i], [i], []); 

    while (j >= 0 && arr[j] > key) {
      yield createStep(arr, [j, j+1], [], []);
      arr[j + 1] = arr[j];
      yield createStep(arr, [], [j + 1], []); 
      j = j - 1;
    }
    arr[j + 1] = key;
    yield createStep(arr, [], [j + 1], []); 
  }
  yield createStep(arr, [], [], Array.from({length: n}, (_, i) => i));
}

export function* selectionSort(array: number[]): Generator<SortStep> {
  let arr = [...array];
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      yield createStep(arr, [minIdx, j], [], []);
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
        yield createStep(arr, [minIdx], [], []);
      }
    }
    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
      yield createStep(arr, [], [i, minIdx], []);
    }
  }
  yield createStep(arr, [], [], Array.from({length: n}, (_, i) => i));
}

export function* mergeSort(array: number[]): Generator<SortStep> {
  let arr = [...array];
  yield* mergeSortRecursive(arr, 0, arr.length - 1);
  yield createStep(arr, [], [], Array.from({length: arr.length}, (_, i) => i));
}

function* mergeSortRecursive(arr: number[], left: number, right: number): Generator<SortStep> {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);
  yield* mergeSortRecursive(arr, left, mid);
  yield* mergeSortRecursive(arr, mid + 1, right);
  yield* merge(arr, left, mid, right);
}

function* merge(arr: number[], left: number, mid: number, right: number): Generator<SortStep> {
  let i = left;
  let j = mid + 1;
  const temp: number[] = [];

  while (i <= mid && j <= right) {
    yield createStep(arr, [i, j], [], []);
    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) temp.push(arr[i++]);
  while (j <= right) temp.push(arr[j++]);

  for (let k = 0; k < temp.length; k++) {
    arr[left + k] = temp[k];
    yield createStep(arr, [], [left + k], []); // Show overwrite
  }
}

export function* quickSort(array: number[]): Generator<SortStep> {
  let arr = [...array];
  yield* quickSortRecursive(arr, 0, arr.length - 1);
  yield createStep(arr, [], [], Array.from({length: arr.length}, (_, i) => i));
}

function* quickSortRecursive(arr: number[], low: number, high: number): Generator<SortStep, void, unknown> {
  if (low < high) {
    const pivotIdx = yield* partition(arr, low, high);
    yield* quickSortRecursive(arr, low, pivotIdx - 1);
    yield* quickSortRecursive(arr, pivotIdx + 1, high);
  }
}

function* partition(arr: number[], low: number, high: number): Generator<SortStep, number, unknown> {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    yield createStep(arr, [j, high], [], []); // Compare with pivot
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      yield createStep(arr, [], [i, j], []);
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  yield createStep(arr, [], [i + 1, high], []);
  return i + 1;
}

// --- EXISTING ALGORITHMS ---

export function* heapSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    let n = arr.length;
    let sortedIndices: number[] = [];

    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        yield* heapify(arr, n, i, sortedIndices);
    }

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
        yield createStep(arr, [0, i], [0, i], sortedIndices);

        sortedIndices.push(i);
        // call max heapify on the reduced heap
        yield* heapify(arr, i, 0, sortedIndices);
    }
    
    // Last element is also sorted
    sortedIndices.push(0);
    yield createStep(arr, [], [], Array.from({length: n}, (_, i) => i));
}

function* heapify(arr: number[], n: number, i: number, sortedIndices: number[]): Generator<SortStep> {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n) {
        yield createStep(arr, [l, largest], [], sortedIndices);
        if (arr[l] > arr[largest]) largest = l;
    }

    if (r < n) {
        yield createStep(arr, [r, largest], [], sortedIndices);
        if (arr[r] > arr[largest]) largest = r;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        yield createStep(arr, [i, largest], [i, largest], sortedIndices);
        yield* heapify(arr, n, largest, sortedIndices);
    }
}

export function* shellSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    let n = arr.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            let temp = arr[i];
            let j;
            for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
                yield createStep(arr, [j, j - gap], [], []);
                arr[j] = arr[j - gap];
                yield createStep(arr, [], [j], []);
            }
            arr[j] = temp;
            yield createStep(arr, [], [j], []);
        }
    }
    yield createStep(arr, [], [], Array.from({length: n}, (_, i) => i));
}

export function* cocktailShakerSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    let swapped = true;
    let start = 0;
    let end = arr.length;

    while (swapped) {
        swapped = false;

        // Forward pass
        for (let i = start; i < end - 1; ++i) {
            yield createStep(arr, [i, i + 1], [], []);
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                yield createStep(arr, [], [i, i + 1], []);
                swapped = true;
            }
        }

        if (!swapped) break;

        swapped = false;
        end = end - 1;

        // Backward pass
        for (let i = end - 1; i >= start; i--) {
            yield createStep(arr, [i, i + 1], [], []);
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                yield createStep(arr, [], [i, i + 1], []);
                swapped = true;
            }
        }
        start = start + 1;
    }
    yield createStep(arr, [], [], Array.from({length: arr.length}, (_, i) => i));
}

export function* gnomeSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    let index = 0;

    while (index < arr.length) {
        if (index === 0) index++;
        
        yield createStep(arr, [index, index - 1], [], []);
        if (arr[index] >= arr[index - 1]) {
            index++;
        } else {
            [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]];
            yield createStep(arr, [], [index, index - 1], []);
            index--;
        }
    }
    yield createStep(arr, [], [], Array.from({length: arr.length}, (_, i) => i));
}

export function* radixSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    let maxNum = Math.max(...arr);

    for (let exp = 1; Math.floor(maxNum / exp) > 0; exp *= 10) {
        let output = new Array(arr.length).fill(0);
        let count = new Array(10).fill(0);

        for (let i = 0; i < arr.length; i++) {
            yield createStep(arr, [i], [], []); 
            count[Math.floor(arr[i] / exp) % 10]++;
        }

        for (let i = 1; i < 10; i++) {
            count[i] += count[i - 1];
        }

        for (let i = arr.length - 1; i >= 0; i--) {
            const digit = Math.floor(arr[i] / exp) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }

        for (let i = 0; i < arr.length; i++) {
            arr[i] = output[i];
            yield createStep(arr, [], [i], []); 
        }
    }
    yield createStep(arr, [], [], Array.from({length: arr.length}, (_, i) => i));
}

// 1. Comb Sort
export function* combSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    let n = arr.length;
    let gap = n;
    let shrink = 1.3;
    let sorted = false;

    while (!sorted) {
        gap = Math.floor(gap / shrink);
        if (gap <= 1) {
            gap = 1;
            sorted = true;
        }

        for (let i = 0; i < n - gap; i++) {
            yield createStep(arr, [i, i + gap], [], []);
            if (arr[i] > arr[i + gap]) {
                [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
                yield createStep(arr, [], [i, i + gap], []);
                sorted = false;
            }
        }
    }
    yield createStep(arr, [], [], Array.from({length: n}, (_, i) => i));
}

// 2. Pancake Sort
export function* pancakeSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    let n = arr.length;

    for (let curr_size = n; curr_size > 1; curr_size--) {
        let mi = 0;
        for (let i = 0; i < curr_size; i++) {
            yield createStep(arr, [i, mi], [], []);
            if (arr[i] > arr[mi]) mi = i;
        }

        if (mi !== curr_size - 1) {
            yield* flip(arr, mi);
            yield* flip(arr, curr_size - 1);
        }
        
        yield createStep(arr, [], [], Array.from({length: n - curr_size + 1}, (_, i) => n - 1 - i));
    }
    yield createStep(arr, [], [], Array.from({length: n}, (_, i) => i));
}

function* flip(arr: number[], i: number): Generator<SortStep> {
    let start = 0;
    while (start < i) {
        [arr[start], arr[i]] = [arr[i], arr[start]];
        yield createStep(arr, [], [start, i], []);
        start++;
        i--;
    }
}

// 3. Cycle Sort
export function* cycleSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    let n = arr.length;

    for (let cycleStart = 0; cycleStart <= n - 2; cycleStart++) {
        let item = arr[cycleStart];
        let pos = cycleStart;

        for (let i = cycleStart + 1; i < n; i++) {
            yield createStep(arr, [cycleStart, i], [], []);
            if (arr[i] < item) pos++;
        }

        if (pos === cycleStart) continue;

        while (item === arr[pos]) pos += 1;

        if (pos !== cycleStart) {
            let temp = arr[pos];
            arr[pos] = item;
            item = temp;
            yield createStep(arr, [], [pos], []);
        }

        while (pos !== cycleStart) {
            pos = cycleStart;
            for (let i = cycleStart + 1; i < n; i++) {
                yield createStep(arr, [cycleStart, i], [], []);
                if (arr[i] < item) pos++;
            }
            while (item === arr[pos]) pos += 1;
            
            if (item !== arr[pos]) {
                let temp = arr[pos];
                arr[pos] = item;
                item = temp;
                yield createStep(arr, [], [pos], []);
            }
        }
    }
    yield createStep(arr, [], [], Array.from({length: n}, (_, i) => i));
}

// 4. Bogo Sort
export function* bogoSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    const isSorted = (a: number[]) => {
        for(let i=0; i< a.length-1; i++){
            if(a[i] > a[i+1]) return false;
        }
        return true;
    };

    while (!isSorted(arr)) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
            yield createStep(arr, [], [i, j], []);
        }
    }
    yield createStep(arr, [], [], Array.from({length: arr.length}, (_, i) => i));
}

// 5. Stooge Sort
export function* stoogeSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    yield* stoogeSortRecursive(arr, 0, arr.length - 1);
    yield createStep(arr, [], [], Array.from({length: arr.length}, (_, i) => i));
}

function* stoogeSortRecursive(arr: number[], l: number, h: number): Generator<SortStep> {
    if (l >= h) return;

    yield createStep(arr, [l, h], [], []);
    if (arr[l] > arr[h]) {
        [arr[l], arr[h]] = [arr[h], arr[l]];
        yield createStep(arr, [], [l, h], []);
    }

    if (h - l + 1 > 2) {
        let t = Math.floor((h - l + 1) / 3);
        yield* stoogeSortRecursive(arr, l, h - t);
        yield* stoogeSortRecursive(arr, l + t, h);
        yield* stoogeSortRecursive(arr, l, h - t);
    }
}

// 6. Odd-Even Sort
export function* oddEvenSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    let n = arr.length;
    let isSorted = false;

    while (!isSorted) {
        isSorted = true;
        for (let i = 1; i <= n - 2; i += 2) {
            yield createStep(arr, [i, i+1], [], []);
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                yield createStep(arr, [], [i, i+1], []);
                isSorted = false;
            }
        }
        for (let i = 0; i <= n - 2; i += 2) {
            yield createStep(arr, [i, i+1], [], []);
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                yield createStep(arr, [], [i, i+1], []);
                isSorted = false;
            }
        }
    }
    yield createStep(arr, [], [], Array.from({length: n}, (_, i) => i));
}

// 7. Double Selection Sort
export function* doubleSelectionSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    let n = arr.length;
    let i = 0;
    let j = n - 1;

    while (i < j) {
        let min = arr[i];
        let max = arr[i];
        let min_i = i;
        let max_i = i;

        for (let k = i; k <= j; k++) {
            yield createStep(arr, [k, min_i, max_i], [], []);
            if (arr[k] > max) {
                max = arr[k];
                max_i = k;
            } else if (arr[k] < min) {
                min = arr[k];
                min_i = k;
            }
        }

        [arr[i], arr[min_i]] = [arr[min_i], arr[i]];
        yield createStep(arr, [], [i, min_i], []);
        if (arr[min_i] === max) max_i = min_i;
        [arr[j], arr[max_i]] = [arr[max_i], arr[j]];
        yield createStep(arr, [], [j, max_i], []);

        i++;
        j--;
    }
    yield createStep(arr, [], [], Array.from({length: n}, (_, i) => i));
}

// 8. Bitonic Sort
export function* bitonicSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    let n = arr.length;
    yield* bitonicSortRec(arr, 0, n, 1);
    yield createStep(arr, [], [], Array.from({length: n}, (_, i) => i));
}

function* bitonicSortRec(arr: number[], low: number, cnt: number, dir: number): Generator<SortStep> {
    if (cnt > 1) {
        let k = Math.floor(cnt / 2);
        yield* bitonicSortRec(arr, low, k, 1);
        yield* bitonicSortRec(arr, low + k, cnt - k, 0);
        yield* bitonicMerge(arr, low, cnt, dir);
    }
}

function* bitonicMerge(arr: number[], low: number, cnt: number, dir: number): Generator<SortStep> {
    if (cnt > 1) {
        let k = greatestPowerOfTwoLessThan(cnt);
        for (let i = low; i < low + cnt - k; i++) {
             yield createStep(arr, [i, i+k], [], []);
             if (dir === 1 && arr[i] > arr[i + k]) {
                 [arr[i], arr[i + k]] = [arr[i + k], arr[i]];
                 yield createStep(arr, [], [i, i+k], []);
             }
             if (dir === 0 && arr[i] < arr[i + k]) {
                 [arr[i], arr[i + k]] = [arr[i + k], arr[i]];
                 yield createStep(arr, [], [i, i+k], []);
             }
        }
        yield* bitonicMerge(arr, low, k, dir);
        yield* bitonicMerge(arr, low + k, cnt - k, dir);
    }
}
function greatestPowerOfTwoLessThan(n: number) {
    let k = 1;
    while (k > 0 && k < n) k = k << 1;
    return k >>> 1;
}

// 9. Tree Sort
export function* treeSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    class Node {
        key: number;
        left: Node | null = null;
        right: Node | null = null;
        constructor(item: number) { this.key = item; }
    }

    let root: Node | null = null;
    for(let i=0; i<arr.length; i++) {
        yield createStep(arr, [i], [], []); 
        if(!root) root = new Node(arr[i]);
        else {
            let current = root;
            while(true) {
                if(arr[i] < current.key) {
                    if(!current.left) { current.left = new Node(arr[i]); break; }
                    current = current.left;
                } else {
                    if(!current.right) { current.right = new Node(arr[i]); break; }
                    current = current.right;
                }
            }
        }
    }

    let idx = 0;
    function* inorder(node: Node | null): Generator<SortStep> {
        if(node) {
            yield* inorder(node.left);
            arr[idx++] = node.key;
            yield createStep(arr, [], [idx-1], []); 
            yield* inorder(node.right);
        }
    }
    yield* inorder(root);
    yield createStep(arr, [], [], Array.from({length: arr.length}, (_, i) => i));
}

// 10. Tim Sort
export function* timSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    let n = arr.length;
    let RUN = 4;

    for (let i = 0; i < n; i += RUN) {
        yield* insertionSortRange(arr, i, Math.min(i + RUN - 1, n - 1));
    }

    for (let size = RUN; size < n; size = 2 * size) {
        for (let left = 0; left < n; left += 2 * size) {
            let mid = left + size - 1;
            let right = Math.min(left + 2 * size - 1, n - 1);
            if (mid < right) {
                yield* merge(arr, left, mid, right);
            }
        }
    }
    yield createStep(arr, [], [], Array.from({length: n}, (_, i) => i));
}

function* insertionSortRange(arr: number[], left: number, right: number): Generator<SortStep> {
    for (let i = left + 1; i <= right; i++) {
        let temp = arr[i];
        let j = i - 1;
        yield createStep(arr, [i], [], []);
        while (j >= left && arr[j] > temp) {
            arr[j + 1] = arr[j];
            yield createStep(arr, [], [j+1], []);
            j--;
        }
        arr[j + 1] = temp;
        yield createStep(arr, [], [j+1], []);
    }
}

// 11. Bucket Sort
export function* bucketSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    let n = arr.length;
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let bucketCount = Math.floor(Math.sqrt(n));
    let range = (max - min) / bucketCount;

    let buckets: number[][] = Array.from({ length: bucketCount + 1 }, () => []);

    for (let i = 0; i < n; i++) {
        yield createStep(arr, [i], [], []);
        let idx = Math.floor((arr[i] - min) / (range || 1));
        buckets[idx].push(arr[i]);
    }

    let currentIndex = 0;
    for (let i = 0; i < buckets.length; i++) {
        buckets[i].sort((a, b) => a - b);
        for (let val of buckets[i]) {
            arr[currentIndex] = val;
            yield createStep(arr, [], [currentIndex], []);
            currentIndex++;
        }
    }
    yield createStep(arr, [], [], Array.from({length: n}, (_, i) => i));
}

// 12. Counting Sort
export function* countingSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    if(min < 0) min = 0;

    let count = new Array(max + 1).fill(0);

    for(let i=0; i<arr.length; i++) {
        yield createStep(arr, [i], [], []);
        count[arr[i]]++;
    }

    let z = 0;
    for(let i=0; i<=max; i++) {
        while(count[i] > 0) {
            arr[z] = i;
            yield createStep(arr, [], [z], []);
            z++;
            count[i]--;
        }
    }
    yield createStep(arr, [], [], Array.from({length: arr.length}, (_, i) => i));
}

// 13. Binary Insertion Sort
export function* binaryInsertionSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    for(let i=1; i<arr.length; i++) {
        let x = arr[i];
        let left = 0;
        let right = i - 1;
        
        while(left <= right) {
            let mid = Math.floor((left+right)/2);
            yield createStep(arr, [i, mid], [], []);
            if(arr[mid] > x) right = mid - 1;
            else left = mid + 1;
        }
        
        for(let j=i-1; j>=left; j--) {
            arr[j+1] = arr[j];
            yield createStep(arr, [], [j+1], []);
        }
        arr[left] = x;
        yield createStep(arr, [], [left], []);
    }
    yield createStep(arr, [], [], Array.from({length: arr.length}, (_, i) => i));
}

// 14. Slow Sort
export function* slowSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    yield* slowSortRec(arr, 0, arr.length - 1);
    yield createStep(arr, [], [], Array.from({length: arr.length}, (_, i) => i));
}
function* slowSortRec(arr: number[], i: number, j: number): Generator<SortStep> {
    if (i >= j) return;
    let m = Math.floor((i + j) / 2);
    yield* slowSortRec(arr, i, m);
    yield* slowSortRec(arr, m + 1, j);
    
    yield createStep(arr, [j, m], [], []);
    if (arr[j] < arr[m]) {
        [arr[j], arr[m]] = [arr[m], arr[j]];
        yield createStep(arr, [], [j, m], []);
    }
    yield* slowSortRec(arr, i, j - 1);
}

// 15. Dual Pivot Quick Sort
export function* dualPivotQuickSort(array: number[]): Generator<SortStep> {
    let arr = [...array];
    yield* dpQuickSort(arr, 0, arr.length - 1);
    yield createStep(arr, [], [], Array.from({length: arr.length}, (_, i) => i));
}

function* dpQuickSort(arr: number[], low: number, high: number): Generator<SortStep> {
    if (low < high) {
        yield createStep(arr, [low, high], [], []);
        if (arr[low] > arr[high]) {
            [arr[low], arr[high]] = [arr[high], arr[low]];
            yield createStep(arr, [], [low, high], []);
        }

        let p1 = arr[low];
        let p2 = arr[high];
        let i = low + 1;
        let k = low + 1;
        let j = high - 1;

        while (k <= j) {
            yield createStep(arr, [k], [], []);
            if (arr[k] < p1) {
                [arr[k], arr[i]] = [arr[i], arr[k]];
                yield createStep(arr, [], [k, i], []);
                i++;
                k++;
            } else if (arr[k] >= p2) {
                while (arr[j] > p2 && k < j) {
                    j--;
                    yield createStep(arr, [j], [], []);
                }
                [arr[k], arr[j]] = [arr[j], arr[k]];
                yield createStep(arr, [], [k, j], []);
                j--;
                if (arr[k] < p1) {
                    [arr[k], arr[i]] = [arr[i], arr[k]];
                    yield createStep(arr, [], [k, i], []);
                    i++;
                }
                k++;
            } else {
                k++;
            }
        }
        i--;
        j++;
        
        [arr[low], arr[i]] = [arr[i], arr[low]];
        [arr[high], arr[j]] = [arr[j], arr[high]];
        yield createStep(arr, [], [low, i, high, j], []);

        yield* dpQuickSort(arr, low, i - 1);
        yield* dpQuickSort(arr, i + 1, j - 1);
        yield* dpQuickSort(arr, j + 1, high);
    }
}