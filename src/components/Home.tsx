import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Zap, Aperture, Layers } from 'lucide-react';
import { Page, AlgorithmType } from '../types';

interface HomeProps {
  onNavigate: (page: Page, algo?: AlgorithmType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* Abstract Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-semibold tracking-widest text-white mb-8 backdrop-blur-md uppercase">
            Thémis Series 3
          </span>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Order from <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Chaos.
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Algorithms shouldn't be complex. They should be beautiful. <br />
          Watch logic unfold in real-time.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
           <motion.button 
             onClick={() => onNavigate(Page.VISUALIZER, AlgorithmType.MERGE)}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="px-8 py-4 bg-white text-black rounded-full text-lg font-semibold flex items-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-shadow hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] justify-center"
           >
             <BarChart2 size={20} />
             Enter Studio
           </motion.button>

           <motion.button 
             onClick={() => onNavigate(Page.LEARNING)}
             whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
             whileTap={{ scale: 0.95 }}
             className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full text-lg font-semibold flex items-center gap-3 border border-white/10 justify-center"
           >
             Discover <ArrowRight size={20} />
           </motion.button>
        </motion.div>

        {/* The Rule of Three - Feature Grid */}
        <motion.div 
           className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.5, duration: 1 }}
        >
            {[
                { label: 'Fluidity', value: 'ProMotion Physics', icon: Zap },
                { label: 'Clarity', value: 'Glass Interface', icon: Aperture },
                { label: 'Depth', value: '25+ Algorithms', icon: Layers },
            ].map((item, i) => (
                <div key={i} className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center gap-3 border border-white/5">
                    <item.icon className="text-gray-500 mb-2" size={24} />
                    <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">{item.label}</span>
                    <span className="text-xl font-semibold text-white tracking-tight">{item.value}</span>
                </div>
            ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Home;