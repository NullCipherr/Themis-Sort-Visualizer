import { AlgorithmInfo, AlgorithmType } from "../types";

export const DEFAULT_ARRAY_SIZE = 30;
export const MIN_ARRAY_SIZE = 5;
export const MAX_ARRAY_SIZE = 1000;
export const ANIMATION_SPEED_MIN = 10; // ms
export const ANIMATION_SPEED_MAX = 500; // ms

export const ALGORITHM_DETAILS: Record<AlgorithmType, AlgorithmInfo> = {
  [AlgorithmType.BUBBLE]: {
    type: AlgorithmType.BUBBLE,
    description: "Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)"
  },
  [AlgorithmType.INSERTION]: {
    type: AlgorithmType.INSERTION,
    description: "Builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)"
  },
  [AlgorithmType.SELECTION]: {
    type: AlgorithmType.SELECTION,
    description: "Divides the input list into two parts: a sorted sublist of items which is built up from left to right and the remaining unsorted items.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)"
  },
  [AlgorithmType.MERGE]: {
    type: AlgorithmType.MERGE,
    description: "A divide and conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)"
  },
  [AlgorithmType.QUICK]: {
    type: AlgorithmType.QUICK,
    description: "Picks an element as pivot and partitions the given array around the picked pivot.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(log n)"
  },
  [AlgorithmType.HEAP]: {
    type: AlgorithmType.HEAP,
    description: "Converts the array into a binary heap structure, then repeatedly extracts the maximum element and places it at the end.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)"
  },
  [AlgorithmType.SHELL]: {
    type: AlgorithmType.SHELL,
    description: "An optimization of insertion sort that allows the exchange of items that are far apart.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)"
  },
  [AlgorithmType.COCKTAIL]: {
    type: AlgorithmType.COCKTAIL,
    description: "A variation of Bubble Sort that traverses the list in both directions alternately.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)"
  },
  [AlgorithmType.GNOME]: {
    type: AlgorithmType.GNOME,
    description: "Works by finding the first place where two adjacent elements are in the wrong order and swaps them. It acts like a garden gnome sorting flower pots.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)"
  },
  [AlgorithmType.RADIX]: {
    type: AlgorithmType.RADIX,
    description: "A non-comparative sorting algorithm that sorts integers by processing individual digits.",
    timeComplexity: "O(nk)",
    spaceComplexity: "O(n + k)"
  },
  [AlgorithmType.COMB]: {
    type: AlgorithmType.COMB,
    description: "Improves on Bubble Sort by using a gap larger than 1. The gap starts large and shrinks by a factor of 1.3.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(1)"
  },
  [AlgorithmType.PANCAKE]: {
    type: AlgorithmType.PANCAKE,
    description: "Sorts the array by repeatedly flipping sub-arrays (like flipping a stack of pancakes with a spatula).",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)"
  },
  [AlgorithmType.CYCLE]: {
    type: AlgorithmType.CYCLE,
    description: "A comparison sort that is theoretically optimal in terms of the total number of writes to the original array.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)"
  },
  [AlgorithmType.BOGO]: {
    type: AlgorithmType.BOGO,
    description: "A highly ineffective sorting algorithm based on generating random permutations of its input until it is sorted.",
    timeComplexity: "O((n+1)!)",
    spaceComplexity: "O(1)"
  },
  [AlgorithmType.STOOGE]: {
    type: AlgorithmType.STOOGE,
    description: "A recursive sorting algorithm that swaps the first and last elements if out of order, then sorts the first 2/3, last 2/3, then first 2/3 again.",
    timeComplexity: "O(n^2.7)",
    spaceComplexity: "O(n)"
  },
  [AlgorithmType.ODD_EVEN]: {
    type: AlgorithmType.ODD_EVEN,
    description: "A variation of bubble sort that proceeds in two phases: odd-even exchanges and even-odd exchanges.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)"
  },
  [AlgorithmType.DOUBLE_SELECTION]: {
    type: AlgorithmType.DOUBLE_SELECTION,
    description: "An optimization of Selection Sort that finds both the minimum and maximum elements in each pass.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)"
  },
  [AlgorithmType.BITONIC]: {
    type: AlgorithmType.BITONIC,
    description: "A parallel algorithm that builds a bitonic sequence (increases then decreases) and merges them.",
    timeComplexity: "O(n log² n)",
    spaceComplexity: "O(n log² n)"
  },
  [AlgorithmType.TREE]: {
    type: AlgorithmType.TREE,
    description: "Builds a Binary Search Tree from the elements and then performs an in-order traversal to get the sorted elements.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)"
  },
  [AlgorithmType.TIM]: {
    type: AlgorithmType.TIM,
    description: "A hybrid stable sorting algorithm, derived from merge sort and insertion sort. (Simplified version).",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(n)"
  },
  // New Algorithms
  [AlgorithmType.BUCKET]: {
    type: AlgorithmType.BUCKET,
    description: "Distributes elements of an array into a number of buckets. Each bucket is then sorted individually.",
    timeComplexity: "O(n + k)",
    spaceComplexity: "O(n)"
  },
  [AlgorithmType.COUNTING]: {
    type: AlgorithmType.COUNTING,
    description: "An integer sorting algorithm that operates by counting the number of objects that have each distinct key value.",
    timeComplexity: "O(n + k)",
    spaceComplexity: "O(k)"
  },
  [AlgorithmType.BINARY_INSERTION]: {
    type: AlgorithmType.BINARY_INSERTION,
    description: "A variant of Insertion Sort that uses binary search to find the correct position to insert the current element.",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)"
  },
  [AlgorithmType.SLOW]: {
    type: AlgorithmType.SLOW,
    description: "A recursive sorting algorithm based on the principle of multiply and surrender. Extremely inefficient.",
    timeComplexity: "O(n^(log n))",
    spaceComplexity: "O(n)"
  },
  [AlgorithmType.DUAL_PIVOT_QUICK]: {
    type: AlgorithmType.DUAL_PIVOT_QUICK,
    description: "A variation of Quick Sort that uses two pivots to partition the array into three parts.",
    timeComplexity: "O(n log n)",
    spaceComplexity: "O(log n)"
  }
};

export const LEARNING_DATA: Record<AlgorithmType, {
    analogy: string;
    howItWorks: string[];
    complexity: { time: string; space: string; stability: string; best: string; worst: string };
    code: string;
    usage: string;
    pros: string[];
    cons: string[];
}> = {
    [AlgorithmType.BUBBLE]: {
        analogy: "Imagine air bubbles in a water tank. The lighter bubbles (smaller numbers) slowly float to the top, while the heavier bubbles (larger numbers) sink to the bottom.",
        howItWorks: ["Start at the beginning of the array.", "Compare the current element with the next one.", "If the current element is larger, swap them.", "Repeat this process for every element until the end.", "Do this for n iterations until sorted."],
        complexity: { time: "O(n²)", space: "O(1)", stability: "Stable", best: "O(n)", worst: "O(n²)" },
        code: `function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}`,
        usage: "Primarily used for educational purposes to introduce the concept of sorting algorithms.",
        pros: ["Easy to understand and implement.", "In-place sorting (requires minimal extra memory).", "Stable sort."],
        cons: ["Very inefficient for large datasets.", "High time complexity."]
    },
    [AlgorithmType.INSERTION]: {
        analogy: "Sorting a hand of playing cards. You pick one card at a time from the deck and insert it into its correct position among the cards already in your hand.",
        howItWorks: ["Assume the first element is already sorted.", "Pick the next element.", "Compare it with elements in the sorted sub-list.", "Shift all elements larger than the key to the right.", "Insert the key into the correct position."],
        complexity: { time: "O(n²)", space: "O(1)", stability: "Stable", best: "O(n)", worst: "O(n²)" },
        code: `function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}`,
        usage: "Efficient for small data sets or arrays that are already substantially sorted.",
        pros: ["Simple implementation.", "Adaptive (efficient for pre-sorted data).", "Stable.", "In-place."],
        cons: ["Inefficient for large lists.", "Quadratic time complexity."]
    },
     [AlgorithmType.SELECTION]: {
        analogy: "Scanning a lineup of people to find the shortest person, moving them to the front, then finding the next shortest from the remaining group, and so on.",
        howItWorks: ["Set the first element as the minimum.", "Scan the rest of the array to find the true minimum.", "Swap the minimum found with the first element.", "Move the boundary of the sorted array one step to the right.", "Repeat."],
        complexity: { time: "O(n²)", space: "O(1)", stability: "Unstable", best: "O(n²)", worst: "O(n²)" },
        code: `function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }
  return arr;
}`,
        usage: "Useful when memory writes are extremely expensive compared to reads/comparisons.",
        pros: ["Simple.", "Performs the minimum number of swaps (O(n))."],
        cons: ["Unstable.", "Slow O(n²) time complexity even in best case."]
    },
    [AlgorithmType.MERGE]: {
        analogy: "Divide and Conquer. Imagine splitting a stack of papers into two equal piles, then splitting those, until you have single sheets. Then you merge pairs of piles back together in order.",
        howItWorks: ["Divide the array into two halves.", "Recursively sort the two halves.", "Merge the two sorted halves into a single sorted array."],
        complexity: { time: "O(n log n)", space: "O(n)", stability: "Stable", best: "O(n log n)", worst: "O(n log n)" },
        code: `function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}`,
        usage: "General purpose sorting, linked list sorting, and external sorting.",
        pros: ["Consistent O(n log n) performance.", "Stable sort.", "Parallelizable."],
        cons: ["Requires O(n) extra space.", "Recursion overhead."]
    },
    [AlgorithmType.QUICK]: {
        analogy: "The Partitioning Strategy. Pick a 'pivot' person in a room. Ask everyone shorter to go left, and everyone taller to go right. Then repeat for the left and right groups.",
        howItWorks: ["Pick a pivot element.", "Partition the array: elements < pivot go left, > pivot go right.", "Recursively apply to sub-arrays."],
        complexity: { time: "O(n log n)", space: "O(log n)", stability: "Unstable", best: "O(n log n)", worst: "O(n²)" },
        code: `function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = arr.slice(1).filter(x => x < pivot);
  let right = arr.slice(1).filter(x => x >= pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}`,
        usage: "Default sorting algorithm in many standard libraries (e.g., C++ std::sort).",
        pros: ["Very fast in practice.", "In-place (mostly).", "Cache efficient."],
        cons: ["Unstable.", "Worst case O(n²) if pivot is bad (rare with good implementation)."]
    },
    [AlgorithmType.HEAP]: {
        analogy: "Tournament Bracket / Corporate Ladder. The 'winner' (max value) rises to the top. You remove them, and re-organize the remaining candidates to find the next winner.",
        howItWorks: ["Build a Max-Heap from the array.", "Swap the root (max) with the last element.", "Reduce heap size by 1.", "Heapify the root to restore heap property.", "Repeat."],
        complexity: { time: "O(n log n)", space: "O(1)", stability: "Unstable", best: "O(n log n)", worst: "O(n log n)" },
        code: `function heapSort(arr) {
  const n = arr.length;
  const heapify = (size, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    if (left < size && arr[left] > arr[largest]) largest = left;
    if (right < size && arr[right] > arr[largest]) largest = right;
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(size, largest);
    }
  };
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(n, i);
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(i, 0);
  }
  return arr;
}`,
        usage: "Systems where constant space is critical and worst-case O(n log n) is required.",
        pros: ["No recursion stack overflow risk.", "Consistent O(n log n).", "In-place."],
        cons: ["Unstable.", "Poor cache locality compared to QuickSort."]
    },
    [AlgorithmType.SHELL]: {
        analogy: "Insertion sort with big strides. You loosely sort items that are far apart first, then refine with smaller steps.",
        howItWorks: ["Choose a gap sequence.", "Perform insertion sort on elements separated by the gap.", "Reduce the gap.", "Repeat until gap is 1 (standard insertion sort)."],
        complexity: { time: "O(n log n)", space: "O(1)", stability: "Unstable", best: "O(n log n)", worst: "O(n²)" },
        code: `function shellSort(arr) {
  const n = arr.length;
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      const temp = arr[i];
      let j = i;
      while (j >= gap && arr[j - gap] > temp) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = temp;
    }
  }
  return arr;
}`,
        usage: "Embedded applications, or as a sub-routine where memory is limited.",
        pros: ["Faster than O(n²) algorithms.", "Simple code.", "In-place."],
        cons: ["Unstable.", "Complexity depends heavily on gap sequence."]
    },
    [AlgorithmType.COCKTAIL]: {
        analogy: "The Paint Shaker. It's Bubble Sort that bounces back and forth like a shaker.",
        howItWorks: ["Bubble sort from left to right.", "Bubble sort from right to left.", "Shrink the window from both ends.", "Repeat."],
        complexity: { time: "O(n²)", space: "O(1)", stability: "Stable", best: "O(n)", worst: "O(n²)" },
        code: `function cocktailSort(arr) {
  let start = 0;
  let end = arr.length - 1;
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    if (!swapped) break;
    swapped = false;
    end--;
    for (let i = end; i > start; i--) {
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
    start++;
  }
  return arr;
}`,
        usage: "Visualizations and education.",
        pros: ["Slightly faster than Bubble Sort.", "Simple."],
        cons: ["Still O(n²).", "Not practical for large data."]
    },
    [AlgorithmType.GNOME]: {
        analogy: "A Garden Gnome sorting flower pots. He looks at two pots. If they are wrong, he swaps them and steps back. If they are right, he steps forward.",
        howItWorks: ["If at start or current >= previous, step forward.", "Else, swap current and previous, and step backward."],
        complexity: { time: "O(n²)", space: "O(1)", stability: "Stable", best: "O(n)", worst: "O(n²)" },
        code: `function gnomeSort(arr) {
  let i = 0;
  while (i < arr.length) {
    if (i === 0 || arr[i] >= arr[i - 1]) i++;
    else {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      i--;
    }
  }
  return arr;
}`,
        usage: "Code golf (shortest sorting code).",
        pros: ["Extremely simple logic.", "One loop."],
        cons: ["Very slow.", "Quadratic time."]
    },
    [AlgorithmType.RADIX]: {
        analogy: "The Post Office. Letters are sorted into bins by zip code: first by state, then city, then street. Or rather, by last digit, then second to last, etc.",
        howItWorks: ["Find the max number to determine digits.", "Sort elements into buckets based on the least significant digit.", "Gather elements back.", "Repeat for next digit."],
        complexity: { time: "O(nk)", space: "O(n+k)", stability: "Stable", best: "O(nk)", worst: "O(nk)" },
        code: `function radixSort(arr) {
  const getDigit = (num, place) => Math.floor(Math.abs(num) / 10 ** place) % 10;
  const digitCount = (num) => (num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1);
  const maxDigits = Math.max(...arr.map(digitCount));
  for (let k = 0; k < maxDigits; k++) {
    const buckets = Array.from({ length: 10 }, () => [] as number[]);
    for (const num of arr) buckets[getDigit(num, k)].push(num);
    arr = ([] as number[]).concat(...buckets);
  }
  return arr;
}`,
        usage: "Integer sorting, string sorting.",
        pros: ["Linear time O(n) possible.", "Faster than comparisons for specific data."],
        cons: ["Space heavy.", "Only works on integers/fixed keys."]
    },
    [AlgorithmType.COMB]: {
        analogy: "Bubble sort trying to comb out tangles with a wide-tooth comb first, then a fine-tooth comb.",
        howItWorks: ["Initialize gap size (usually n/1.3).", "Compare and swap elements with gap distance.", "Shrink gap.", "Repeat until gap=1."],
        complexity: { time: "O(n log n)", space: "O(1)", stability: "Unstable", best: "O(n log n)", worst: "O(n²)" },
        code: `function combSort(arr) {
  const shrink = 1.3;
  let gap = arr.length;
  let sorted = false;
  while (!sorted) {
    gap = Math.floor(gap / shrink);
    if (gap <= 1) {
      gap = 1;
      sorted = true;
    }
    for (let i = 0; i + gap < arr.length; i++) {
      if (arr[i] > arr[i + gap]) {
        [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
        sorted = false;
      }
    }
  }
  return arr;
}`,
        usage: "Improvement over bubble sort.",
        pros: ["Faster than bubble sort."],
        cons: ["Unstable."]
    },
    [AlgorithmType.PANCAKE]: {
        analogy: "You have a stack of pancakes. You can only flip the top k pancakes with a spatula. Your goal is to sort them by size.",
        howItWorks: ["Find the largest pancake.", "Flip it to the top.", "Flip the whole stack to move it to the bottom.", "Repeat for remaining stack."],
        complexity: { time: "O(n²)", space: "O(1)", stability: "Unstable", best: "O(n)", worst: "O(n²)" },
        code: `function pancakeSort(arr) {
  const flip = (k) => {
    let i = 0, j = k;
    while (i < j) [arr[i], arr[j]] = [arr[j], arr[i]], i++, j--;
  };
  for (let curr = arr.length - 1; curr > 0; curr--) {
    let maxIdx = 0;
    for (let i = 1; i <= curr; i++) if (arr[i] > arr[maxIdx]) maxIdx = i;
    if (maxIdx !== curr) {
      flip(maxIdx);
      flip(curr);
    }
  }
  return arr;
}`,
        usage: "Hardware or biological systems where only reversal is possible.",
        pros: ["Only requires reversal operation."],
        cons: ["Slow execution."]
    },
    [AlgorithmType.CYCLE]: {
        analogy: "Putting items directly in their home. You pick up an item, go to where it belongs, displace that item, and repeat until the cycle closes.",
        howItWorks: ["Find the correct position for an item.", "Write it there.", "Pick up the displaced item.", "Repeat until cycle completes.", "Move to next cycle."],
        complexity: { time: "O(n²)", space: "O(1)", stability: "Unstable", best: "O(n²)", worst: "O(n²)" },
        code: `function cycleSort(arr) {
  for (let start = 0; start < arr.length - 1; start++) {
    let item = arr[start];
    let pos = start;
    for (let i = start + 1; i < arr.length; i++) if (arr[i] < item) pos++;
    if (pos === start) continue;
    while (item === arr[pos]) pos++;
    [arr[pos], item] = [item, arr[pos]];
    while (pos !== start) {
      pos = start;
      for (let i = start + 1; i < arr.length; i++) if (arr[i] < item) pos++;
      while (item === arr[pos]) pos++;
      [arr[pos], item] = [item, arr[pos]];
    }
  }
  return arr;
}`,
        usage: "EEPROM or Flash memory where writes are expensive.",
        pros: ["Minimizes memory writes (maximum n-1 writes)."],
        cons: ["Slow comparisons.", "Complex logic."]
    },
    [AlgorithmType.BOGO]: {
        analogy: "52 Card Pickup. Throw the deck in the air. Pick them up. Check if sorted. If not, throw again.",
        howItWorks: ["Check if sorted.", "If not, shuffle randomly.", "Repeat."],
        complexity: { time: "O((n+1)!)", space: "O(1)", stability: "Unstable", best: "O(n)", worst: "Infinity" },
        code: `function bogoSort(arr) {
  const isSorted = (a) => a.every((v, i) => i === 0 || a[i - 1] <= v);
  const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
  };
  while (!isSorted(arr)) shuffle(arr);
  return arr;
}`,
        usage: "Jokes and educational warnings.",
        pros: ["Eventually works (probability 1)."],
        cons: ["Unbounded time complexity."]
    },
    [AlgorithmType.STOOGE]: {
        analogy: "Bureaucratic shuffling. Swap ends. Sort the first 2/3. Sort the last 2/3. Sort the first 2/3 again.",
        howItWorks: ["Swap if start > end.", "Recursively sort first 2/3.", "Recursively sort last 2/3.", "Recursively sort first 2/3."],
        complexity: { time: "O(n^2.7)", space: "O(n)", stability: "Unstable", best: "O(n^2.7)", worst: "O(n^2.7)" },
        code: `function stoogeSort(arr, i = 0, j = arr.length - 1) {
  if (arr[i] > arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
  if (j - i + 1 > 2) {
    const t = Math.floor((j - i + 1) / 3);
    stoogeSort(arr, i, j - t);
    stoogeSort(arr, i + t, j);
    stoogeSort(arr, i, j - t);
  }
  return arr;
}`,
        usage: "Example of terrible recursive algorithms.",
        pros: ["None."],
        cons: ["Slower than Bubble Sort."]
    },
    [AlgorithmType.ODD_EVEN]: {
        analogy: "Parallel Brick Sorting. Odd indices compare with right neighbors. Then Even indices compare. Like laying bricks.",
        howItWorks: ["Phase 1: Odd-indexed elements compare/swap with next.", "Phase 2: Even-indexed elements compare/swap with next.", "Repeat."],
        complexity: { time: "O(n²)", space: "O(1)", stability: "Stable", best: "O(n)", worst: "O(n²)" },
        code: `function oddEvenSort(arr) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 1; i < arr.length - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
    for (let i = 0; i < arr.length - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        sorted = false;
      }
    }
  }
  return arr;
}`,
        usage: "Parallel computing systems.",
        pros: ["Highly parallelizable."],
        cons: ["Slow on single core."]
    },
    [AlgorithmType.DOUBLE_SELECTION]: {
        analogy: "Selection sort with two hands. One hand finds the smallest, the other finds the largest.",
        howItWorks: ["Scan array.", "Find min and max.", "Swap min to start.", "Swap max to end.", "Shrink window."],
        complexity: { time: "O(n²)", space: "O(1)", stability: "Unstable", best: "O(n²)", worst: "O(n²)" },
        code: `function doubleSelectionSort(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let min = left;
    let max = right;
    for (let i = left; i <= right; i++) {
      if (arr[i] < arr[min]) min = i;
      if (arr[i] > arr[max]) max = i;
    }
    [arr[left], arr[min]] = [arr[min], arr[left]];
    if (max === left) max = min;
    [arr[right], arr[max]] = [arr[max], arr[right]];
    left++;
    right--;
  }
  return arr;
}`,
        usage: "Optimization of selection sort.",
        pros: ["Fewer iterations than standard selection sort."],
        cons: ["Still O(n²)."]
    },
    [AlgorithmType.BITONIC]: {
        analogy: "Building mountains and valleys. Create a sequence that goes up then down, then merge.",
        howItWorks: ["Recursively produce bitonic sequences.", "Merge them using bitonic merge."],
        complexity: { time: "O(n log² n)", space: "O(n log² n)", stability: "Unstable", best: "O(n log² n)", worst: "O(n log² n)" },
        code: `function bitonicSort(arr) {
  const compareAndSwap = (a, i, j, dir) => {
    if ((dir && a[i] > a[j]) || (!dir && a[i] < a[j])) [a[i], a[j]] = [a[j], a[i]];
  };
  const bitonicMerge = (a, low, cnt, dir) => {
    if (cnt <= 1) return;
    const k = Math.floor(cnt / 2);
    for (let i = low; i < low + k; i++) compareAndSwap(a, i, i + k, dir);
    bitonicMerge(a, low, k, dir);
    bitonicMerge(a, low + k, k, dir);
  };
  const sort = (a, low, cnt, dir) => {
    if (cnt <= 1) return;
    const k = Math.floor(cnt / 2);
    sort(a, low, k, true);
    sort(a, low + k, k, false);
    bitonicMerge(a, low, cnt, dir);
  };
  sort(arr, 0, arr.length, true);
  return arr;
}`,
        usage: "Parallel hardware, GPUs, sorting networks.",
        pros: ["Excellent for parallel processing."],
        cons: ["Complex implementation.", "Requires comparison network."]
    },
    [AlgorithmType.TREE]: {
        analogy: "Building a family tree. You insert everyone into a lineage chart, then read the names from left to right.",
        howItWorks: ["Insert all elements into a Binary Search Tree (BST).", "Perform in-order traversal to retrieve sorted elements."],
        complexity: { time: "O(n log n)", space: "O(n)", stability: "Stable", best: "O(n log n)", worst: "O(n²)" },
        code: `function treeSort(arr) {
  class Node {
    constructor(value) { this.value = value; this.left = null; this.right = null; }
  }
  const insert = (root, value) => {
    if (!root) return new Node(value);
    if (value < root.value) root.left = insert(root.left, value);
    else root.right = insert(root.right, value);
    return root;
  };
  const inorder = (root, out) => {
    if (!root) return;
    inorder(root.left, out);
    out.push(root.value);
    inorder(root.right, out);
  };
  let root = null;
  for (const value of arr) root = insert(root, value);
  const out = [];
  inorder(root, out);
  return out;
}`,
        usage: "Data streams where sorted order is needed incrementally.",
        pros: ["Can be incremental."],
        cons: ["Worst case O(n²) if tree is unbalanced.", "High space overhead."]
    },
    [AlgorithmType.TIM]: {
        analogy: "The Professional's Choice. It identifies runs of already sorted cards and merges them intelligently.",
        howItWorks: ["Split array into 'runs'.", "Sort small runs with Insertion Sort.", "Merge runs using a smart merge strategy."],
        complexity: { time: "O(n log n)", space: "O(n)", stability: "Stable", best: "O(n)", worst: "O(n log n)" },
        code: `function timSort(arr) {
  const RUN = 32;
  const insertion = (a, left, right) => {
    for (let i = left + 1; i <= right; i++) {
      const key = a[i];
      let j = i - 1;
      while (j >= left && a[j] > key) a[j + 1] = a[j], j--;
      a[j + 1] = key;
    }
  };
  const merge = (a, l, m, r) => {
    const left = a.slice(l, m + 1);
    const right = a.slice(m + 1, r + 1);
    let i = 0, j = 0, k = l;
    while (i < left.length && j < right.length) a[k++] = left[i] <= right[j] ? left[i++] : right[j++];
    while (i < left.length) a[k++] = left[i++];
    while (j < right.length) a[k++] = right[j++];
  };
  for (let i = 0; i < arr.length; i += RUN) insertion(arr, i, Math.min(i + RUN - 1, arr.length - 1));
  for (let size = RUN; size < arr.length; size *= 2) {
    for (let left = 0; left < arr.length; left += 2 * size) {
      const mid = Math.min(left + size - 1, arr.length - 1);
      const right = Math.min(left + 2 * size - 1, arr.length - 1);
      if (mid < right) merge(arr, left, mid, right);
    }
  }
  return arr;
}`,
        usage: "Python, Java, V8 (JS) standard sorts.",
        pros: ["Extremely fast on real-world data.", "Stable."],
        cons: ["Complex implementation.", "O(n) space."]
    },
    [AlgorithmType.BUCKET]: {
        analogy: "Organizando cartas em caixas por faixa de valor e depois ordenando cada caixa.",
        howItWorks: ["Crie buckets por intervalo de valores.", "Distribua os elementos nos buckets.", "Ordene cada bucket individualmente.", "Concatene os buckets em ordem."],
        complexity: { time: "O(n+k)", space: "O(n)", stability: "Stable", best: "O(n+k)", worst: "O(n²)" },
        code: `function bucketSort(arr) {
  const n = arr.length;
  if (n <= 1) return arr;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const bucketCount = Math.floor(Math.sqrt(n));
  const buckets = Array.from({ length: bucketCount }, () => [] as number[]);
  for (const value of arr) {
    const idx = Math.min(bucketCount - 1, Math.floor(((value - min) / (max - min || 1)) * bucketCount));
    buckets[idx].push(value);
  }
  return buckets.flatMap(bucket => bucket.sort((a, b) => a - b));
}`,
        usage: "Excelente para dados com distribuicao aproximadamente uniforme.",
        pros: ["Pode atingir desempenho quase linear.", "Paralelizavel por bucket.", "Bom para floats e valores em faixa conhecida."],
        cons: ["Depende fortemente da distribuicao dos dados.", "Pode degradar para O(n²).", "Usa memoria extra para buckets."]
    },
    [AlgorithmType.COUNTING]: {
        analogy: "Contar quantas vezes cada numero aparece e reconstruir a lista.",
        howItWorks: ["Descubra menor e maior valor.", "Crie vetor de frequencias.", "Conte ocorrencias.", "Reconstrua o array em ordem."],
        complexity: { time: "O(n+k)", space: "O(k)", stability: "Stable", best: "O(n+k)", worst: "O(n+k)" },
        code: `function countingSort(arr) {
  if (arr.length <= 1) return arr;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const count = new Array(max - min + 1).fill(0);
  for (const x of arr) count[x - min]++;
  let idx = 0;
  for (let i = 0; i < count.length; i++) {
    while (count[i]-- > 0) arr[idx++] = i + min;
  }
  return arr;
}`,
        usage: "Ideal para inteiros com intervalo pequeno (ex.: notas, ids curtos).",
        pros: ["Tempo linear para faixa pequena.", "Estavel na versao com prefix sums.", "Sem comparacoes entre elementos."],
        cons: ["Consome memoria proporcional ao range.", "Nao indicado para valores muito dispersos."]
    },
    [AlgorithmType.BINARY_INSERTION]: {
        analogy: "Como Insertion Sort, mas usando busca binaria para achar onde inserir.",
        howItWorks: ["Mantenha prefixo ordenado.", "Use busca binaria para achar posicao.", "Desloque elementos a direita.", "Insira o item na posicao correta."],
        complexity: { time: "O(n²)", space: "O(1)", stability: "Stable", best: "O(n log n)", worst: "O(n²)" },
        code: `function binaryInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const key = arr[i];
    let left = 0, right = i;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] <= key) left = mid + 1;
      else right = mid;
    }
    for (let j = i; j > left; j--) arr[j] = arr[j - 1];
    arr[left] = key;
  }
  return arr;
}`,
        usage: "Bom para listas pequenas/quase ordenadas quando comparacao e cara.",
        pros: ["Menos comparacoes que Insertion Sort comum.", "In-place.", "Estavel."],
        cons: ["Continua com deslocamentos O(n²).", "Nao escala bem para grandes volumes."]
    },
    [AlgorithmType.SLOW]: {
        analogy: "Uma versao propositalmente pessimista do divide-and-conquer.",
        howItWorks: ["Ordena recursivamente as duas metades.", "Garante maior elemento no fim.", "Repete no prefixo restante."],
        complexity: { time: "O(n^(log n))", space: "O(n)", stability: "Unstable", best: "O(n^(log n))", worst: "O(n^(log n))" },
        code: `function slowSort(arr, i = 0, j = arr.length - 1) {
  if (i >= j) return arr;
  const m = Math.floor((i + j) / 2);
  slowSort(arr, i, m);
  slowSort(arr, m + 1, j);
  if (arr[j] < arr[m]) [arr[j], arr[m]] = [arr[m], arr[j]];
  slowSort(arr, i, j - 1);
  return arr;
}`,
        usage: "Uso didatico/humor para mostrar escolhas de projeto ruins.",
        pros: ["Didatico para analise assintotica.", "Mostra limites de recursao ingenua."],
        cons: ["Extremamente lento.", "Sem uso pratico em producao."]
    },
    [AlgorithmType.DUAL_PIVOT_QUICK]: {
        analogy: "Quick Sort com duas referencias para criar tres particoes de uma vez.",
        howItWorks: ["Escolha pivo esquerdo e direito.", "Particione em < pivo1, entre pivôs, > pivo2.", "Aplique recursao nas tres particoes."],
        complexity: { time: "O(n log n)", space: "O(log n)", stability: "Unstable", best: "O(n log n)", worst: "O(n²)" },
        code: `function dualPivotQuickSort(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return arr;
  if (arr[left] > arr[right]) [arr[left], arr[right]] = [arr[right], arr[left]];
  const p = arr[left], q = arr[right];
  let l = left + 1, g = right - 1, k = l;
  while (k <= g) {
    if (arr[k] < p) [arr[k], arr[l++]] = [arr[l], arr[k]];
    else if (arr[k] >= q) {
      while (arr[g] > q && k < g) g--;
      [arr[k], arr[g--]] = [arr[g + 1], arr[k]];
      if (arr[k] < p) [arr[k], arr[l++]] = [arr[l], arr[k]];
    }
    k++;
  }
  [arr[left], arr[--l]] = [arr[l], arr[left]];
  [arr[right], arr[++g]] = [arr[g], arr[right]];
  dualPivotQuickSort(arr, left, l - 1);
  dualPivotQuickSort(arr, l + 1, g - 1);
  dualPivotQuickSort(arr, g + 1, right);
  return arr;
}`,
        usage: "Usado em libs de alto desempenho para tipos primitivos.",
        pros: ["Muito eficiente na pratica.", "Boa localidade de cache.", "Particionamento mais balanceado em varios cenarios."],
        cons: ["Implementacao mais complexa.", "Pode cair para O(n²) em casos adversos."]
    },
};

export interface RichAlgoData {
  year: string;
  creator: string;
  origin: string;
  history: string;
  timeline: { year: string; event: string }[];
  mechanism: {
    simple: string[];
    technical: string[];
  };
  complexity: {
    best: string;
    average: string;
    worst: string;
    space: string;
    stability: string;
  };
  realWorldUses: string[];
  variants: string[];
  code: string;
  pros: string[];
  cons: string[];
}

const defaultTimeline: { year: string; event: string }[] = [
  { year: "Uso moderno", event: "Adotado em cursos, benchmarks e implementacoes didaticas" }
];

const ALGORITHM_ORIGINS: Record<AlgorithmType, { year: string; creator: string; origin: string }> = {
  [AlgorithmType.BUBBLE]: { year: "1956", creator: "Kenneth E. Iverson (formal analysis)", origin: "United States" },
  [AlgorithmType.INSERTION]: { year: "1940s", creator: "John von Neumann (early computer-era use)", origin: "United States" },
  [AlgorithmType.SELECTION]: { year: "1940s", creator: "John von Neumann (early computer-era use)", origin: "United States" },
  [AlgorithmType.MERGE]: { year: "1945", creator: "John von Neumann", origin: "United States" },
  [AlgorithmType.QUICK]: { year: "1959", creator: "Tony Hoare", origin: "Soviet Union (Moscow, work context) / United Kingdom" },
  [AlgorithmType.HEAP]: { year: "1964", creator: "J. W. J. Williams", origin: "United Kingdom" },
  [AlgorithmType.SHELL]: { year: "1959", creator: "Donald L. Shell", origin: "United States" },
  [AlgorithmType.COCKTAIL]: { year: "1960s", creator: "No single formal author (academic literature)", origin: "United States (popularized in literature)" },
  [AlgorithmType.GNOME]: { year: "2000", creator: "Hamid Sarbazi-Azad", origin: "Iran" },
  [AlgorithmType.RADIX]: { year: "1887", creator: "Herman Hollerith (mechanical precursor)", origin: "United States" },
  [AlgorithmType.COMB]: { year: "1991", creator: "Wlodzimierz Dobosiewicz", origin: "Poland" },
  [AlgorithmType.PANCAKE]: { year: "1979", creator: "Bill Gates & Christos Papadimitriou (analysis)", origin: "United States" },
  [AlgorithmType.CYCLE]: { year: "1960s", creator: "B. K. Haddon (attributed)", origin: "United Kingdom" },
  [AlgorithmType.BOGO]: { year: "1962", creator: "Attributed to pedagogical folklore in CS", origin: "United States (academic humor)" },
  [AlgorithmType.STOOGE]: { year: "1973", creator: "Attributed to pedagogical folklore in CS", origin: "United States (academic humor)" },
  [AlgorithmType.ODD_EVEN]: { year: "1960", creator: "N. Habermann", origin: "United States" },
  [AlgorithmType.DOUBLE_SELECTION]: { year: "1960s", creator: "No single formal author (selection-sort variant)", origin: "General CS literature" },
  [AlgorithmType.BITONIC]: { year: "1968", creator: "Ken Batcher", origin: "United States" },
  [AlgorithmType.TREE]: { year: "1960", creator: "Edward H. Friend", origin: "United States" },
  [AlgorithmType.TIM]: { year: "2002", creator: "Tim Peters", origin: "United States (Python project)" },
  [AlgorithmType.BUCKET]: { year: "1956", creator: "Harold H. Seward (bucket/counting formalization)", origin: "United States" },
  [AlgorithmType.COUNTING]: { year: "1954", creator: "Harold H. Seward", origin: "United States" },
  [AlgorithmType.BINARY_INSERTION]: { year: "1962", creator: "Donald Knuth (documented form)", origin: "United States" },
  [AlgorithmType.SLOW]: { year: "1986", creator: "Andrei Broder & Jorge Stolfi", origin: "United States / Brazil" },
  [AlgorithmType.DUAL_PIVOT_QUICK]: { year: "2009", creator: "Vladimir Yaroslavskiy", origin: "Russia / Java community" },
};

const buildRichFromLearning = (algo: AlgorithmType): RichAlgoData => {
  const learning = LEARNING_DATA[algo];
  const meta = ALGORITHM_ORIGINS[algo];
  return {
    year: meta.year,
    creator: meta.creator,
    origin: meta.origin,
    history: learning.analogy,
    timeline: defaultTimeline,
    mechanism: {
      simple: learning.howItWorks.length > 0 ? learning.howItWorks : ["Analise passo a passo do algoritmo"],
      technical: [
        `Complexidade media: ${learning.complexity.time}`,
        `Complexidade espacial: ${learning.complexity.space}`,
        `Estabilidade: ${learning.complexity.stability}`,
      ],
    },
    complexity: {
      best: learning.complexity.best,
      average: learning.complexity.time,
      worst: learning.complexity.worst,
      space: learning.complexity.space,
      stability: learning.complexity.stability,
    },
    realWorldUses: [learning.usage],
    variants: ["Implementacao visual no Themis Sort Visualizer"],
    code: learning.code,
    pros: learning.pros.length > 0 ? learning.pros : ["Abordagem valida para estudo do paradigma de ordenacao"],
    cons: learning.cons.length > 0 ? learning.cons : ["Trade-offs dependem do tamanho e da distribuicao dos dados"],
  };
};

export const RICH_ALGORITHM_DATA: Record<AlgorithmType, RichAlgoData> = Object.values(AlgorithmType).reduce(
  (acc, algo) => {
    acc[algo] = buildRichFromLearning(algo);
    return acc;
  },
  {} as Record<AlgorithmType, RichAlgoData>
);
