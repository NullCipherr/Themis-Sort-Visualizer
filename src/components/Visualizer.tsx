import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlgorithmType, SortStep } from '../types';
import { 
  bubbleSort, insertionSort, selectionSort, mergeSort, quickSort, heapSort, shellSort,
  cocktailShakerSort, gnomeSort, radixSort, combSort, pancakeSort, cycleSort, bogoSort,
  stoogeSort, oddEvenSort, doubleSelectionSort, bitonicSort, treeSort, timSort,
  bucketSort, countingSort, binaryInsertionSort, slowSort, dualPivotQuickSort
} from '../services/sortingAlgorithms';
import { 
  Play, Pause, RotateCcw, StepForward, Volume2, VolumeX, Settings, X 
} from 'lucide-react';
import { DEFAULT_ARRAY_SIZE, MIN_ARRAY_SIZE, MAX_ARRAY_SIZE, ALGORITHM_DETAILS } from '../data/algorithms';

interface VisualizerProps {
  algorithm: AlgorithmType;
}

const Visualizer: React.FC<VisualizerProps> = ({ algorithm }) => {
  const [array, setArray] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState(60);
  const [arraySize, setArraySize] = useState(DEFAULT_ARRAY_SIZE);
  const [compareIndices, setCompareIndices] = useState<number[]>([]);
  const [swapIndices, setSwapIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [stats, setStats] = useState({ comparisons: 0, swaps: 0, steps: 0 });
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const generatorRef = useRef<Generator<SortStep> | null>(null);
  const timerRef = useRef<any>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Audio setup (Keep existing logic but optimized)
  useEffect(() => {
    if (!audioCtxRef.current) {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContextClass) audioCtxRef.current = new AudioContextClass();
    }
  }, []);

  const playSound = useCallback((frequency: number, type: 'compare' | 'swap' | 'finish') => {
    if (!audioEnabled || !audioCtxRef.current) return;
    if (audioCtxRef.current.state === 'suspended') audioCtxRef.current.resume();

    const osc = audioCtxRef.current.createOscillator();
    const gain = audioCtxRef.current.createGain();
    
    osc.type = type === 'swap' ? 'square' : type === 'finish' ? 'sine' : 'triangle';
    osc.frequency.value = frequency;
    osc.connect(gain);
    gain.connect(audioCtxRef.current.destination);
    
    const duration = type === 'finish' ? 0.2 : 0.05;
    const vol = type === 'swap' ? 0.03 : 0.01;

    osc.start();
    gain.gain.setValueAtTime(vol, audioCtxRef.current.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + duration);
    osc.stop(audioCtxRef.current.currentTime + duration);
  }, [audioEnabled]);

  const resetArray = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const newArray = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 90) + 10);
    setArray(newArray);
    setIsSorting(false);
    setIsPaused(false);
    setCompareIndices([]);
    setSwapIndices([]);
    setSortedIndices([]);
    setStats({ comparisons: 0, swaps: 0, steps: 0 });
    generatorRef.current = null;
  }, [arraySize]);

  useEffect(() => { resetArray(); }, [algorithm, resetArray]);

  const getGenerator = (algo: AlgorithmType, arr: number[]) => {
      // Mapping from algo type to function
      // (Simplified switch for brevity, utilizing the imported functions)
      switch (algo) {
        case AlgorithmType.BUBBLE: return bubbleSort(arr);
        case AlgorithmType.QUICK: return quickSort(arr);
        case AlgorithmType.MERGE: return mergeSort(arr);
        case AlgorithmType.INSERTION: return insertionSort(arr);
        case AlgorithmType.SELECTION: return selectionSort(arr);
        case AlgorithmType.HEAP: return heapSort(arr);
        case AlgorithmType.SHELL: return shellSort(arr);
        case AlgorithmType.BUCKET: return bucketSort(arr);
        // ... include others as needed
        default: return bubbleSort(arr);
      }
  };

  const handleStart = () => {
    if (!isSorting) {
      setIsSorting(true);
      generatorRef.current = getGenerator(algorithm, array);
    }
    setIsPaused(false);
  };

  const executeStep = useCallback(() => {
    if (!generatorRef.current) return false;
    const { value, done } = generatorRef.current.next();
    if (done) {
      setIsSorting(false);
      setSortedIndices(Array.from({length: array.length}, (_, i) => i));
      if(audioEnabled) playSound(600, 'finish');
      return false;
    }
    const step = value as SortStep;
    if (step) {
        setArray(step.array);
        setCompareIndices(step.compareIndices);
        setSwapIndices(step.swapIndices);
        if(step.sortedIndices.length > 0) setSortedIndices(prev => Array.from(new Set([...prev, ...step.sortedIndices])));
        setStats(prev => ({
            steps: prev.steps + 1,
            comparisons: prev.comparisons + (step.compareIndices.length > 0 ? 1 : 0),
            swaps: prev.swaps + (step.swapIndices.length > 0 ? 1 : 0)
        }));
        if (step.swapIndices.length > 0) playSound(200 + step.array[step.swapIndices[0]] * 4, 'swap');
        else if (step.compareIndices.length > 0) playSound(200 + step.array[step.compareIndices[0]] * 4, 'compare');
    }
    return true;
  }, [array, audioEnabled, playSound]);

  useEffect(() => {
      if (isSorting && !isPaused) {
          const delay = Math.max(0, 300 - (speed * 3));
          timerRef.current = setTimeout(() => {
              if (executeStep()) { /* loop continues via effect re-trigger */ }
          }, delay);
      }
      return () => { if (timerRef.current) clearTimeout(timerRef.current); }
  }, [isSorting, isPaused, speed, executeStep, stats]); // dependence on stats triggers loop

  return (
    <div className="flex flex-col h-full bg-black relative p-6">
        
        {/* Header Stats */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-4 md:mb-8 z-10 gap-4">
            <div>
                <motion.h1 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-2xl md:text-3xl font-bold text-white tracking-tight"
                >
                    {algorithm}
                </motion.h1>
                <motion.p 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-gray-500 font-medium text-sm md:text-base"
                >
                    {ALGORITHM_DETAILS[algorithm].timeComplexity} • {ALGORITHM_DETAILS[algorithm].spaceComplexity}
                </motion.p>
            </div>
            
            <div className="flex gap-2 md:gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
                {[
                    { label: 'Comparisons', val: stats.comparisons },
                    { label: 'Swaps', val: stats.swaps }
                ].map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="glass-panel px-4 md:px-6 py-2 md:py-3 rounded-2xl flex flex-col items-center min-w-[100px] md:min-w-[120px]"
                    >
                        <span className="text-[10px] md:text-xs text-gray-500 font-semibold uppercase tracking-wider">{stat.label}</span>
                        <span className="text-lg md:text-xl font-mono text-white">{stat.val}</span>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Visualization Area */}
        <div className="flex-1 flex items-end justify-center gap-[1px] md:gap-[2px] mb-20 md:mb-24 relative px-0 md:px-4">
             {array.map((value, idx) => {
                 const isSwap = swapIndices.includes(idx);
                 const isCompare = compareIndices.includes(idx);
                 const isSorted = sortedIndices.includes(idx);
                 
                 let bg = "bg-white/20";
                 if (isSwap) bg = "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]";
                 else if (isCompare) bg = "bg-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.5)]";
                 else if (isSorted) bg = "bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]";
                 else bg = "bg-blue-500/80";

                 return (
                     <motion.div
                        key={idx}
                        layoutId={`bar-${idx}`} // Use layout animation for smooth position swaps if array size is small
                        className={`w-full max-w-[40px] rounded-t-sm md:rounded-t-lg transition-colors duration-100 ${bg}`}
                        style={{ height: `${value}%` }}
                        // For large arrays, disable layout animation to save performance
                        layout={arraySize < 50} 
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                     />
                 );
             })}
        </div>

        {/* Floating Control Bar (Dynamic Island style) - Responsive */}
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0 flex justify-center z-20 px-4">
            <motion.div 
                className="glass-panel rounded-full p-2 flex items-center gap-2 md:gap-4 shadow-[0_8px_40px_rgba(0,0,0,0.5)] w-full max-w-2xl justify-between md:justify-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                <div className="flex items-center gap-1 pl-2">
                    <motion.button 
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        onClick={resetArray} 
                        className="p-2 md:p-3 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    >
                        <RotateCcw size={20} />
                    </motion.button>
                    
                    {!isSorting || isPaused ? (
                        <motion.button 
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            onClick={handleStart}
                            className="bg-white text-black px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg text-sm md:text-base"
                        >
                            <Play size={18} fill="black" /> <span className="hidden sm:inline">Play</span>
                        </motion.button>
                    ) : (
                        <motion.button 
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            onClick={() => setIsPaused(true)}
                            className="bg-yellow-500 text-black px-4 md:px-8 py-2 md:py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg text-sm md:text-base"
                        >
                            <Pause size={18} fill="black" /> <span className="hidden sm:inline">Pause</span>
                        </motion.button>
                    )}

                    <motion.button 
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        onClick={executeStep}
                        className="p-2 md:p-3 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                    >
                        <StepForward size={20} />
                    </motion.button>
                </div>

                <div className="w-px h-8 bg-white/10 mx-1 md:mx-2"></div>

                <div className="flex items-center gap-2 md:gap-4 pr-2 md:pr-4">
                     {/* Compact Settings Toggle - More compact on mobile */}
                     <motion.div className="flex items-center gap-2 md:gap-4">
                         <div className="flex flex-col w-20 md:w-32">
                             <label className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase mb-1 hidden md:block">Speed</label>
                             <input type="range" min="1" max="100" value={speed} onChange={e => setSpeed(Number(e.target.value))} />
                         </div>
                         <div className="flex flex-col w-20 md:w-32">
                             <label className="text-[8px] md:text-[10px] text-gray-500 font-bold uppercase mb-1 hidden md:block">Size: {arraySize}</label>
                             <input type="range" min={MIN_ARRAY_SIZE} max={MAX_ARRAY_SIZE} disabled={isSorting} value={arraySize} onChange={e => setArraySize(Number(e.target.value))} />
                         </div>
                     </motion.div>

                     <div className="w-px h-8 bg-white/10 hidden sm:block"></div>
                     
                     <motion.button 
                        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                        onClick={() => setAudioEnabled(!audioEnabled)}
                        className={`p-2 rounded-full transition-colors ${audioEnabled ? 'text-green-400 bg-green-400/10' : 'text-gray-400'}`}
                     >
                         {audioEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                     </motion.button>
                </div>
            </motion.div>
        </div>

    </div>
  );
};

export default Visualizer;
