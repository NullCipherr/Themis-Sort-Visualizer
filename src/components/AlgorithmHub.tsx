import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlgorithmType } from '../types';
import { ALGORITHM_DETAILS } from '../data/algorithms';
import { Search, ArrowRight, Zap, Layers } from 'lucide-react';

interface AlgorithmHubProps {
  onSelect: (algo: AlgorithmType) => void;
}

const AlgorithmHub: React.FC<AlgorithmHubProps> = ({ onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredAlgorithms = Object.values(AlgorithmType).filter(algo => 
    algo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full overflow-y-auto no-scrollbar p-8 pt-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
                <h1 className="text-5xl font-semibold text-white mb-3 tracking-tighter">The Collection.</h1>
                <p className="text-gray-500 text-xl font-light">Twenty-five ways to bring order to chaos. <br/> Pick your lens.</p>
            </div>
            
            {/* Search */}
            <div className="relative group w-full md:w-96">
                <Search className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-white transition-colors" size={20} />
                <input 
                    type="text" 
                    placeholder="Search the library" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#1c1c1e] text-white pl-12 pr-4 py-3 rounded-2xl border-none focus:ring-2 focus:ring-blue-500 transition-all outline-none placeholder:text-gray-600 font-medium text-sm"
                />
            </div>
        </div>

        {/* Grid */}
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
        >
            <AnimatePresence>
                {filteredAlgorithms.map((algo, index) => (
                    <AlgorithmCard 
                        key={algo} 
                        algo={algo} 
                        index={index} 
                        onClick={() => onSelect(algo)} 
                    />
                ))}
            </AnimatePresence>
        </motion.div>

        {filteredAlgorithms.length === 0 && (
             <div className="text-center py-20 text-gray-500 font-light text-lg">No matches found.</div>
        )}

      </div>
    </div>
  );
};

interface AlgorithmCardProps {
    algo: AlgorithmType;
    index: number;
    onClick: () => void;
}

const AlgorithmCard: React.FC<AlgorithmCardProps> = ({ algo, index, onClick }) => {
    const details = ALGORITHM_DETAILS[algo];
    const isComplex = details.timeComplexity.includes('n²') || details.timeComplexity.includes('!');

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className="group relative bg-[#1c1c1e] rounded-[24px] p-8 cursor-pointer overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
        >
            {/* Subtle Gradient on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isComplex ? 'bg-orange-500/10 text-orange-500' : 'bg-blue-500/10 text-blue-500'}`}>
                        {isComplex ? <Layers size={24} /> : <Zap size={24} />}
                    </div>
                    <div className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold tracking-widest text-gray-400">
                        {details.timeComplexity}
                    </div>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-2 tracking-tight group-hover:text-blue-400 transition-colors">{algo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-8 font-medium">{details.description}</p>

                <div className="mt-auto flex items-center text-sm font-bold text-blue-500 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Open <ArrowRight size={16} className="ml-2" />
                </div>
            </div>
        </motion.div>
    );
};

export default AlgorithmHub;
