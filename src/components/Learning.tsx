import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { AlgorithmType, Page } from '../types';
import { RICH_ALGORITHM_DATA, ALGORITHM_DETAILS } from '../data/algorithms';
import { ArrowLeft, Play, ArrowRight, BookOpen } from 'lucide-react';

interface LearningProps {
  algorithm: AlgorithmType | null;
  onNavigate: (page: Page, algo?: AlgorithmType) => void;
}

const Learning: React.FC<LearningProps> = ({ algorithm, onNavigate }) => {
  if (!algorithm) return <LibraryView onNavigate={onNavigate} />;
  return <ArticleView algo={algorithm} onBack={() => onNavigate(Page.LEARNING)} onSimulate={() => onNavigate(Page.VISUALIZER, algorithm)} />;
};

const LibraryView = ({ onNavigate }: { onNavigate: any }) => {
    const algos = Object.keys(ALGORITHM_DETAILS) as AlgorithmType[];
    
    return (
        <div className="h-full overflow-y-auto no-scrollbar p-8 pt-20">
            <div className="max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-semibold text-white mb-4 tracking-tighter">
                        Knowledge.
                    </h1>
                    <p className="text-xl text-gray-500 font-light">The math behind the magic.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {algos.map((algo, i) => (
                        <motion.div
                            key={algo}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.03 }}
                            onClick={() => onNavigate(Page.LEARNING, algo)}
                            className="group flex items-center justify-between p-6 bg-[#1c1c1e] rounded-2xl cursor-pointer border border-white/5 hover:border-white/20 transition-all"
                        >
                            <div className="flex items-center gap-6">
                                <span className="text-gray-600 font-mono text-sm">{(i + 1).toString().padStart(2, '0')}</span>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{algo}</h3>
                                </div>
                            </div>
                            <ArrowRight className="text-gray-700 group-hover:text-white transition-colors" size={18} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ArticleView = ({ algo, onBack, onSimulate }: { algo: AlgorithmType, onBack: () => void, onSimulate: () => void }) => {
    const data = RICH_ALGORITHM_DATA[algo];
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ container: ref });
    const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <div className="h-full overflow-y-auto no-scrollbar bg-[#000000]" ref={ref}>
            {/* Progress Bar */}
            <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50" />

            <div className="max-w-3xl mx-auto px-6 py-16">
                <button onClick={onBack} className="flex items-center text-gray-500 hover:text-white transition-colors mb-12 text-sm font-medium tracking-wide uppercase">
                    <ArrowLeft size={16} className="mr-2" /> Library
                </button>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-5xl md:text-8xl font-semibold text-white mb-12 tracking-tighter">{algo}</h1>
                    
                    <div className="flex items-center gap-8 mb-16 border-t border-white/10 pt-8">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1">Created</span>
                            <span className="text-white font-medium">{data.year}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1">Creator</span>
                            <span className="text-white font-medium">{data.creator}</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-1">Origin</span>
                            <span className="text-white font-medium">{data.origin}</span>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-xl max-w-none">
                        <p className="text-2xl text-gray-300 leading-relaxed font-light mb-16">
                            {data.history}
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 my-16">
                             <div className="bg-[#1c1c1e] p-8 rounded-[32px] border border-white/5">
                                 <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2"><BookOpen size={18} className="text-blue-500"/> Logic</h3>
                                 <ul className="space-y-4">
                                     {data.mechanism.simple.map((m, i) => (
                                         <li key={i} className="flex gap-4 text-gray-400 text-base font-medium">
                                             <span className="text-blue-500">•</span> {m}
                                         </li>
                                     ))}
                                 </ul>
                             </div>
                             <div className="bg-[#1c1c1e] p-8 rounded-[32px] border border-white/5 flex flex-col justify-center items-center text-center">
                                 <h3 className="text-lg font-bold text-white mb-2">Efficiency</h3>
                                 <div className="text-5xl font-mono text-white tracking-tighter font-semibold mb-2">{data.complexity.average}</div>
                                 <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Average Time</p>
                             </div>
                        </div>

                        <div className="bg-[#111] rounded-2xl p-8 overflow-x-auto border border-white/10 my-16">
                            <pre className="font-mono text-xs text-blue-300 leading-relaxed">
                                <code>{data.code}</code>
                            </pre>
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={onSimulate}
                        className="w-full py-6 bg-white text-black rounded-2xl font-bold text-xl flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-shadow mt-12"
                    >
                        <Play fill="black" size={20} /> Visualize
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Learning;
