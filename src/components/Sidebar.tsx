import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlgorithmType, Page } from '../types';
import { 
  BookOpen, Home, PlaySquare, Layers, GitMerge, 
  Zap, Pyramid, GraduationCap, Scale
} from 'lucide-react';

interface SidebarProps {
  activePage: Page;
  selectedAlgorithm: AlgorithmType | null;
  onNavigate: (page: Page, algo?: AlgorithmType) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, selectedAlgorithm, onNavigate, isOpen, toggleSidebar }) => {
  
  // Apple Style: Simple One-Word Navigation
  const menuItems = [
    { page: Page.HOME, icon: Home, label: 'Home' },
    { page: Page.VISUALIZER, icon: PlaySquare, label: 'Studio' },
    { page: Page.LEARNING, icon: GraduationCap, label: 'Insight' },
    { page: Page.DOCS, icon: BookOpen, label: 'Guide' },
  ];

  const algorithms = Object.values(AlgorithmType);
  const showAlgoList = activePage === Page.VISUALIZER || activePage === Page.LEARNING;
  const algoTargetPage = activePage === Page.LEARNING ? Page.LEARNING : Page.VISUALIZER;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>

      <motion.aside 
        className={`
          fixed md:relative z-50 h-full w-[280px]
          bg-[#1c1c1e]/80 backdrop-blur-2xl border-r border-white/10
          flex flex-col
        `}
        initial={false}
        animate={{ x: isOpen ? 0 : (window.innerWidth >= 768 ? 0 : -280) }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Project Branding: Thémis */}
        <div className="h-24 w-full flex items-center px-6 border-b border-white/5 gap-3">
           <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center text-blue-400">
             <Scale size={20} />
           </div>
           <div className="flex flex-col">
             <h1 className="text-xl font-bold tracking-tight text-white">Thémis.</h1>
             <span className="text-[10px] text-gray-500 uppercase tracking-widest font-semibold">Academic Suite</span>
           </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8 overflow-y-auto no-scrollbar space-y-8">
          
          {/* Main Sections */}
          <div className="space-y-1">
            <h3 className="px-3 text-[10px] font-bold text-gray-500 mb-3 uppercase tracking-widest opacity-60">Menu</h3>
            {menuItems.map((item) => {
              const isActive = activePage === item.page;
              return (
                <motion.div
                  key={item.page}
                  onClick={() => { onNavigate(item.page); if(window.innerWidth < 768) toggleSidebar(); }}
                  className={`
                    group flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors relative
                    ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute inset-0 bg-[#007aff] rounded-lg -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <item.icon size={18} className={isActive ? "text-white" : "text-gray-500 group-hover:text-white transition-colors"} />
                  <span className="text-sm font-medium tracking-tight">{item.label}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Dynamic Algorithms List */}
          <AnimatePresence>
            {showAlgoList && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-1"
              >
                <h3 className="px-3 text-[10px] font-bold text-gray-500 mb-3 uppercase tracking-widest opacity-60 mt-8">Collection</h3>
                {algorithms.map((algo) => {
                   const isSelected = selectedAlgorithm === algo;
                   return (
                    <motion.div
                      key={algo}
                      onClick={() => { onNavigate(algoTargetPage, algo); if(window.innerWidth < 768) toggleSidebar(); }}
                      className={`
                        group flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors relative
                        ${isSelected ? 'text-white' : 'text-gray-400 hover:text-white'}
                      `}
                      whileHover={{ scale: 1.02, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSelected && (
                        <motion.div 
                          layoutId="activeAlgo"
                          className="absolute inset-0 bg-[#3a3a3c] rounded-lg -z-10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="text-sm font-medium truncate tracking-tight">{algo}</span>
                    </motion.div>
                   )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Footer info */}
        <div className="p-8 border-t border-white/5 text-center">
            <p className="text-[10px] text-gray-600 font-medium tracking-widest">DESIGNED BY NULLCIPHERR</p>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;