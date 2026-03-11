import React from 'react';
import { 
  Book, 
  MousePointer, 
  Settings, 
  Zap,
  BarChart2,
  Cpu,
  Layers
} from 'lucide-react';

const Documentation: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto bg-transparent text-slate-300 relative custom-scrollbar scroll-smooth">
      {/* Header Background */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-900/10 to-transparent z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        
        {/* Page Header */}
        <div className="mb-24 text-center">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-white/60 text-[10px] font-bold tracking-[0.2em] mb-8 border border-white/10 uppercase">
              Thémis Manual
           </div>
           <h1 className="text-5xl md:text-7xl font-semibold text-white mb-6 tracking-tighter">
             The Guide.
           </h1>
           <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
             Everything you need to know. <br/> Nothing you don't.
           </p>
        </div>

        {/* Section 1: Essentials */}
        <section className="mb-32">
            <h2 className="text-3xl font-semibold text-white mb-10 tracking-tight flex items-center gap-3">
                <Layers className="text-blue-500" /> Essentials
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#1c1c1e] rounded-3xl p-10 border border-white/5">
                     <h3 className="text-xl font-bold text-white mb-4">Context Switching</h3>
                     <p className="text-gray-400 mb-6 leading-relaxed font-medium">
                        The interface adapts to you. Click an algorithm in <strong>Insight</strong> mode to learn. Click it in <strong>Studio</strong> mode to create. Simple.
                     </p>
                </div>

                <div className="bg-[#1c1c1e] rounded-3xl p-10 border border-white/5">
                     <h3 className="text-xl font-bold text-white mb-4">Visual Language</h3>
                     <ul className="space-y-4">
                         <li className="flex items-center gap-4">
                             <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                             <span className="text-gray-400"><strong>Blue</strong> is idle.</span>
                         </li>
                         <li className="flex items-center gap-4">
                             <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                             <span className="text-gray-400"><strong>Yellow</strong> is comparing.</span>
                         </li>
                         <li className="flex items-center gap-4">
                             <div className="w-2 h-2 rounded-full bg-red-500"></div>
                             <span className="text-gray-400"><strong>Red</strong> is swapping.</span>
                         </li>
                         <li className="flex items-center gap-4">
                             <div className="w-2 h-2 rounded-full bg-green-500"></div>
                             <span className="text-gray-400"><strong>Green</strong> is order.</span>
                         </li>
                     </ul>
                </div>
            </div>
        </section>

        {/* Section 2: Control */}
        <section className="mb-32">
            <h2 className="text-3xl font-semibold text-white mb-10 tracking-tight flex items-center gap-3">
                <Settings className="text-purple-500" /> Control
            </h2>

            <div className="bg-[#1c1c1e] rounded-3xl p-12 border border-white/5">
                <div className="grid md:grid-cols-3 gap-12">
                    
                    {/* Time */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold">Time</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            <strong>Play/Pause</strong> to freeze logic in motion. 
                            <strong>Step</strong> to dissect the algorithm frame by frame.
                        </p>
                    </div>

                    {/* Parameters */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold">Parameters</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                             Adjust <strong>Speed</strong> for clarity. Adjust <strong>Size</strong> for complexity. All in real-time.
                        </p>
                    </div>

                    {/* Sound */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold">Sound</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Listen to the data. Sine waves represent completion. Square waves represent change.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        {/* Section 3: Architecture */}
        <section className="mb-20">
            <h2 className="text-3xl font-semibold text-white mb-10 tracking-tight flex items-center gap-3">
                <Cpu className="text-cyan-500" /> Architecture
            </h2>

            <div className="grid md:grid-cols-1 gap-6">
                 <div className="bg-[#1c1c1e] p-10 rounded-3xl border border-white/5">
                     <p className="text-lg text-gray-400 leading-relaxed font-light">
                         Thémis is built on a custom generator engine. This allows the interface to maintain a silky 60fps while handling complex recursive operations. It doesn't just look fast. It is fast.
                     </p>
                 </div>
            </div>
        </section>

        <div className="mt-24 pt-10 border-t border-white/5 text-center">
            <p className="text-gray-600 text-xs tracking-widest uppercase">Thémis • Designed in California</p>
        </div>

      </div>
    </div>
  );
};

export default Documentation;