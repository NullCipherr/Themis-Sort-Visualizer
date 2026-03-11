import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Visualizer from './components/Visualizer';
import Home from './components/Home';
import Documentation from './components/Documentation';
import Learning from './components/Learning';
import AlgorithmHub from './components/AlgorithmHub';
import { Page, AlgorithmType } from './types';
import { Menu } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState<AlgorithmType | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = (page: Page, algo?: AlgorithmType) => {
    setCurrentPage(page);
    if (algo) {
      setSelectedAlgorithm(algo);
    } else {
      setSelectedAlgorithm(null);
    }
    setSidebarOpen(false);
  };

  const renderContent = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home onNavigate={handleNavigate} />;
      case Page.VISUALIZER:
        return selectedAlgorithm ? (
          <Visualizer algorithm={selectedAlgorithm} />
        ) : (
          <AlgorithmHub onSelect={(algo) => handleNavigate(Page.VISUALIZER, algo)} />
        );
      case Page.LEARNING:
        return <Learning algorithm={selectedAlgorithm} onNavigate={handleNavigate} />;
      case Page.DOCS:
        return <Documentation />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex h-screen bg-black overflow-hidden font-sans text-slate-100">
      <Sidebar 
        activePage={currentPage}
        selectedAlgorithm={selectedAlgorithm}
        onNavigate={handleNavigate}
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className="flex-1 flex flex-col relative w-full h-full overflow-hidden bg-black">
        {/* Mobile Header */}
        <div className="md:hidden p-4 glass-panel border-b-0 flex items-center justify-between z-30 sticky top-0">
           <span className="font-semibold text-white tracking-tight">TSortVisualizer</span>
           <button onClick={() => setSidebarOpen(true)} className="text-white p-2 active:bg-white/10 rounded-full transition-colors">
             <Menu size={20} />
           </button>
        </div>
        
        <div className="flex-1 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentPage + (selectedAlgorithm || '')}
              initial={{ opacity: 0, scale: 0.98, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.02, filter: 'blur(10px)' }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="h-full w-full"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default App;
