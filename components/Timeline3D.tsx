
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, RefreshCw } from 'lucide-react';

interface TimelineProps {
  unitId: string;
}

export const Timeline3D: React.FC<TimelineProps> = ({ unitId }) => {
  const [page, setPage] = useState(0);

  // Reset page when unit changes
  useEffect(() => {
    setPage(0);
  }, [unitId]);

  // Configuration Logic
  const getConfig = () => {
    switch (unitId) {
      case 'Nav-B1-01': return 'present_vs_continuous';
      case 'Nav-B1-02': return 'past_interrupted';
      case 'Nav-B1-03': return 'future_plans';
      case 'Nav-B1-06': return 'comparison_scale';
      case 'Nav-B1-07': return 'perfect_vs_simple';
      case 'Nav-B1-09': return 'chain_reaction';
      case 'Nav-B1-10': return 'past_habit';
      case 'Nav-B1Plus-02': return 'narrative_timeline';
      case 'Nav-B1Plus-05': return 'parallel_reality';
      case 'Nav-B1Plus-08': return 'reported_speech'; // Multi-page
      default: return 'generic';
    }
  };

  const mode = getConfig();

  // --- REPORTED SPEECH PAGES CONFIG ---
  const reportedSpeechPages = [
    { 
      title: "1. Present -> Past", 
      direct: '"I am happy"', 
      reported: '"He said he WAS happy"',
      visual: "clock_back"
    },
    { 
      title: "2. Past -> Past Perfect", 
      direct: '"I arrived"', 
      reported: '"He said he HAD arrived"',
      visual: "double_back"
    },
    { 
      title: "3. Modals (Will -> Would)", 
      direct: '"I will go"', 
      reported: '"He said he WOULD go"',
      visual: "future_shift"
    }
  ];

  return (
    <div className="w-full h-[600px] mb-12 relative rounded-3xl overflow-hidden bg-gradient-to-b from-gray-900 via-[#050b14] to-black border-2 border-brand-500/20 shadow-[0_0_50px_rgba(14,165,233,0.1)] flex items-center justify-center perspective-container group">
      
      {/* --- GLOBAL ENVIRONMENT --- */}
      {/* Moving Floor Grid */}
      <div className="absolute inset-0 opacity-40" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
             backgroundSize: '80px 80px',
             transform: 'perspective(800px) rotateX(60deg) translateY(-150px) scale(3)',
             animation: 'gridMove 20s linear infinite'
           }} 
      />
      <style>{`@keyframes gridMove { from { background-position: 0 0; } to { background-position: 0 80px; } }`}</style>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {[...Array(8)].map((_, i) => (
            <motion.div
               key={i}
               className="absolute w-1 h-1 bg-brand-400 rounded-full box-shadow-glow"
               initial={{ x: Math.random() * 100 + "%", y: "110%", opacity: 0 }}
               animate={{ y: "-10%", opacity: [0, 1, 0] }}
               transition={{ duration: 8 + Math.random() * 10, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
            />
         ))}
      </div>

      {/* --- SCENE CONTAINER --- */}
      <div className="relative w-full max-w-4xl h-full preserve-3d flex items-center justify-center">

        {/* ========================================================= */}
        {/* MODE: PRESENT VS CONTINUOUS */}
        {/* ========================================================= */}
        {mode === 'present_vs_continuous' && (
           <div className="flex gap-20 items-center justify-center">
              {/* SIMPLE: Solid Block */}
              <div className="text-center">
                <motion.div
                   initial={{ rotateY: 0 }}
                   animate={{ rotateY: 360 }}
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="w-40 h-40 bg-blue-600/20 border-4 border-blue-500 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.4)] backdrop-blur-md preserve-3d relative"
                >
                   {/* Inner Solid Core */}
                   <div className="absolute w-20 h-20 bg-blue-500 rounded-lg shadow-inner" />
                   <span className="text-white font-black text-xl z-10 relative">FACT</span>
                </motion.div>
                <div className="mt-6 text-blue-300 font-bold tracking-widest text-sm">PERMANENT</div>
              </div>

              {/* CONTINUOUS: Chaotic Orbit */}
              <div className="text-center relative">
                 <div className="w-40 h-40 relative flex items-center justify-center">
                    {[0, 1, 2].map(i => (
                       <motion.div
                          key={i}
                          className="absolute w-full h-full border-2 border-green-400/50 rounded-full"
                          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                          transition={{ duration: 3 + i, repeat: Infinity, ease: "linear", delay: i }}
                          style={{ borderStyle: i === 1 ? 'dashed' : 'solid' }}
                       />
                    ))}
                    <motion.div 
                       animate={{ scale: [1, 1.2, 1] }} 
                       transition={{ repeat: Infinity, duration: 2 }}
                       className="w-4 h-4 bg-green-400 rounded-full shadow-[0_0_20px_#4ade80]"
                    />
                    {/* Orbiting particles */}
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute w-full h-full">
                       <div className="w-3 h-3 bg-white rounded-full absolute top-0 left-1/2 -translate-x-1/2 shadow-glow" />
                    </motion.div>
                 </div>
                 <div className="mt-6 text-green-400 font-bold tracking-widest text-sm">TEMPORARY</div>
                 <div className="text-xs text-green-500/70 uppercase font-mono mt-1">Happening Now</div>
              </div>
           </div>
        )}

        {/* ========================================================= */}
        {/* MODE: PAST INTERRUPTED */}
        {/* ========================================================= */}
        {mode === 'past_interrupted' && (
            <div className="w-full relative h-40">
               {/* Timeline Track */}
               <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10" />
               
               {/* Long Action (Wavy Line) */}
               <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <motion.path 
                     d="M 50 80 Q 150 40 250 80 T 450 80 T 650 80"
                     fill="none"
                     stroke="#3b82f6"
                     strokeWidth="4"
                     strokeDasharray="10 5"
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
               </svg>
               <motion.div 
                 className="absolute top-[30%] left-[20%] text-blue-400 font-mono text-xs bg-black/50 px-2 rounded"
                 animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }}
               >
                 I was sleeping...
               </motion.div>

               {/* Interruption Event */}
               <motion.div 
                  initial={{ scale: 0, opacity: 0 }} 
                  animate={{ scale: [0, 1.5, 1], opacity: 1 }} 
                  transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatDelay: 2.5 }}
                  className="absolute top-1/2 left-[50%] -translate-x-1/2 -translate-y-1/2 z-10"
               >
                  <div className="relative">
                     <div className="absolute inset-0 bg-red-500 blur-xl opacity-50 animate-pulse" />
                     <div className="w-16 h-16 bg-red-600 rotate-45 border-4 border-white shadow-2xl flex items-center justify-center">
                        <span className="text-2xl -rotate-45">💥</span>
                     </div>
                  </div>
                  <div className="text-red-400 font-bold text-center mt-8 text-lg w-48 -ml-16">PHONE RANG</div>
               </motion.div>
            </div>
        )}

        {/* ========================================================= */}
        {/* MODE: REPORTED SPEECH (MULTI-PAGE) */}
        {/* ========================================================= */}
        {mode === 'reported_speech' && (
           <div className="w-full px-12">
              <div className="flex justify-between items-center mb-8">
                 <button onClick={() => setPage(p => Math.max(0, p - 1))} disabled={page === 0} className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-20 transition-all"><ArrowLeft /></button>
                 <div className="text-center">
                    <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-purple-300 uppercase tracking-widest">
                       {reportedSpeechPages[page].title}
                    </h3>
                    <div className="flex gap-2 justify-center mt-2">
                       {reportedSpeechPages.map((_, i) => (
                          <div key={i} className={`h-1 rounded-full transition-all ${i === page ? 'w-8 bg-brand-500' : 'w-2 bg-white/20'}`} />
                       ))}
                    </div>
                 </div>
                 <button onClick={() => setPage(p => Math.min(reportedSpeechPages.length - 1, p + 1))} disabled={page === reportedSpeechPages.length - 1} className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-20 transition-all"><ArrowRight /></button>
              </div>

              <div className="relative h-64 flex items-center justify-between gap-8">
                 {/* Direct Speech Bubble */}
                 <motion.div 
                    key={`d-${page}`}
                    initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -50, opacity: 0 }}
                    className="flex-1 relative"
                 >
                    <div className="bg-white text-black p-6 rounded-3xl rounded-bl-none shadow-[0_0_30px_rgba(255,255,255,0.3)] relative z-10">
                       <div className="text-xs font-bold text-gray-500 uppercase mb-1">Direct Speech</div>
                       <div className="text-2xl font-black">{reportedSpeechPages[page].direct}</div>
                    </div>
                    <div className="absolute -bottom-4 left-0 w-6 h-6 bg-white clip-path-triangle" />
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity }} className="absolute -top-4 -right-4 text-4xl">🗣️</motion.div>
                 </motion.div>

                 {/* The Transformation Portal */}
                 <div className="w-24 h-40 relative flex items-center justify-center">
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-4 border-dashed border-purple-500/50 rounded-full" />
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute inset-4 border-4 border-dotted border-brand-500/50 rounded-full" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <ArrowRight className="text-white w-10 h-10 animate-pulse" />
                    </div>
                    <div className="absolute -bottom-10 w-full text-center text-[10px] text-purple-300 font-mono uppercase">Backshift</div>
                 </div>

                 {/* Reported Speech Bubble */}
                 <motion.div 
                    key={`r-${page}`}
                    initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                    className="flex-1 relative"
                 >
                    <div className="bg-purple-900/80 text-white border border-purple-500 p-6 rounded-3xl rounded-br-none shadow-[0_0_30px_rgba(168,85,247,0.4)] relative z-10 backdrop-blur-xl">
                       <div className="text-xs font-bold text-purple-300 uppercase mb-1">Reported Speech</div>
                       <div className="text-2xl font-black">{reportedSpeechPages[page].reported}</div>
                    </div>
                    <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -top-6 -right-2 text-sm text-gray-400 bg-black/50 px-2 rounded">Past Tense</motion.div>
                 </motion.div>
              </div>
           </div>
        )}

        {/* ========================================================= */}
        {/* MODE: FIRST CONDITIONAL (CHAIN REACTION) */}
        {/* ========================================================= */}
        {mode === 'chain_reaction' && (
           <div className="relative w-full h-full flex items-center justify-center">
              {/* Domino 1 */}
              <motion.div
                 initial={{ rotateZ: 0 }}
                 whileInView={{ rotateZ: 45 }}
                 transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, repeatType: "reverse" }}
                 className="w-32 h-56 bg-gradient-to-t from-orange-600 to-orange-400 rounded-lg shadow-2xl border-2 border-white/20 flex flex-col items-center justify-center origin-bottom-right z-10 relative"
              >
                  <span className="text-4xl font-black text-white">IF</span>
                  <span className="text-xs text-white/80 mt-2 font-mono bg-black/20 px-2 rounded">Present Simple</span>
              </motion.div>

              {/* Energy Transfer */}
              <motion.div 
                 animate={{ width: [0, 60, 0], opacity: [0, 1, 0] }}
                 transition={{ duration: 1, repeat: Infinity, repeatDelay: 2, delay: 0.5 }}
                 className="h-2 bg-white blur-sm mx-2"
              />

              {/* Domino 2 */}
              <motion.div
                 initial={{ rotateZ: 0, x: 50 }}
                 whileInView={{ rotateZ: 45, x: 50 }}
                 transition={{ duration: 1, delay: 0.8, repeat: Infinity, repeatDelay: 2, repeatType: "reverse" }}
                 className="w-32 h-56 bg-gradient-to-t from-cyan-600 to-cyan-400 rounded-lg shadow-2xl border-2 border-white/20 flex flex-col items-center justify-center origin-bottom-right z-0"
              >
                  <span className="text-4xl font-black text-white">WILL</span>
                  <span className="text-xs text-white/80 mt-2 font-mono bg-black/20 px-2 rounded">Future Result</span>
              </motion.div>
           </div>
        )}

        {/* ========================================================= */}
        {/* MODE: SECOND CONDITIONAL (PARALLEL REALITY) */}
        {/* ========================================================= */}
        {mode === 'parallel_reality' && (
           <div className="relative w-full h-full flex items-center justify-center gap-12">
              
              {/* Reality Plane (Lower) */}
              <div className="absolute bottom-10 left-0 right-0 h-[1px] bg-gray-600 border-t border-dashed border-gray-400" />
              <div className="absolute bottom-4 left-10 text-gray-500 font-mono text-sm">REALITY: I am not rich.</div>

              {/* Dream Plane (Upper) */}
              <motion.div 
                 initial={{ y: 0 }} animate={{ y: -20 }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
                 className="w-full max-w-lg h-48 bg-gradient-to-r from-purple-900/80 to-pink-900/80 rounded-full blur-xl absolute top-[20%]"
              />
              
              <div className="relative z-10 text-center">
                 <motion.div 
                    initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 }}
                    className="bg-white/10 backdrop-blur-xl border-2 border-pink-500/50 p-8 rounded-[3rem] shadow-[0_0_50px_rgba(236,72,153,0.3)]"
                 >
                    <div className="text-4xl mb-4">💭</div>
                    <div className="text-2xl font-black text-white mb-2">"If I WERE rich..."</div>
                    <div className="text-pink-300 font-bold">I WOULD travel the world.</div>
                 </motion.div>
                 
                 {/* Connection Lines */}
                 <div className="absolute left-1/2 -bottom-20 w-1 h-20 bg-gradient-to-t from-transparent to-pink-500/50 -translate-x-1/2" />
              </div>
           </div>
        )}

        {/* ========================================================= */}
        {/* GENERIC / FALLBACK */}
        {/* ========================================================= */}
        {mode === 'generic' && (
             <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-80 h-80 rounded-full border border-white/5 flex items-center justify-center"
                >
                    <div className="w-60 h-60 rounded-full border border-white/10 flex items-center justify-center" >
                       <div className="w-40 h-40 bg-brand-500/10 rounded-full blur-2xl" />
                    </div>
                </motion.div>
                <div className="absolute text-center z-10">
                    <h3 className="text-4xl font-black text-white/10 tracking-[0.5em] animate-pulse">TIMELINE</h3>
                </div>
             </div>
         )}
         
         {/* --- FUTURE PLANS (Nav-B1-03) --- */}
         {mode === 'future_plans' && (
           <div className="flex w-full justify-around items-center">
              <motion.div 
                 className="w-64 bg-white/5 border border-white/20 p-6 rounded-xl text-center relative overflow-hidden group"
                 whileHover={{ scale: 1.05 }}
              >
                 <div className="absolute top-0 left-0 w-full h-1 bg-green-500" />
                 <h4 className="text-green-400 font-bold mb-4 tracking-widest">ARRANGEMENT</h4>
                 <div className="text-4xl mb-2">📅</div>
                 <div className="text-white font-bold text-lg">Meeting 2PM</div>
                 <div className="text-xs text-gray-400 mt-2">Present Continuous</div>
                 <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-green-500/10 rounded-full blur-xl group-hover:bg-green-500/20 transition-all" />
              </motion.div>

              <div className="text-3xl font-black text-white/20">VS</div>

              <motion.div 
                 className="w-64 bg-white/5 border border-white/20 p-6 rounded-[3rem] text-center relative overflow-hidden group"
                 whileHover={{ scale: 1.05 }}
              >
                 <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
                 <h4 className="text-blue-400 font-bold mb-4 tracking-widest">INTENTION</h4>
                 <div className="text-4xl mb-2">🤔</div>
                 <div className="text-white font-bold text-lg">Buy a car</div>
                 <div className="text-xs text-gray-400 mt-2">Going To</div>
                 <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all" />
              </motion.div>
           </div>
         )}
         
         {/* --- PERFECT VS SIMPLE (Nav-B1-07) --- */}
         {mode === 'perfect_vs_simple' && (
           <div className="relative w-full h-full">
              {/* Past Simple Box */}
              <motion.div 
                initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}
                className="absolute top-1/2 left-[15%] w-40 h-40 border-4 border-red-500 bg-red-500/10 flex flex-col items-center justify-center rounded-2xl transform -translate-y-1/2"
              >
                 <div className="text-5xl mb-2">🔒</div>
                 <div className="text-red-400 font-bold">CLOSED</div>
                 <div className="text-[10px] text-red-300 uppercase mt-1">Specific Time</div>
              </motion.div>

              {/* Present Perfect Arrow */}
              <svg className="absolute top-1/2 left-[30%] w-[50%] h-20 -translate-y-1/2 overflow-visible">
                 <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor:'rgb(255,255,255)', stopOpacity:0}} />
                      <stop offset="100%" style={{stopColor:'#4ade80', stopOpacity:1}} />
                    </linearGradient>
                 </defs>
                 <motion.path 
                    d="M 0 40 L 100% 40" 
                    stroke="url(#grad1)" 
                    strokeWidth="8" 
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                 />
                 <motion.circle cx="100%" cy="40" r="8" fill="#4ade80" animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} />
              </svg>

              {/* NOW / Experience */}
              <motion.div 
                 initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5, type: "spring" }}
                 className="absolute top-1/2 right-[10%] w-48 h-48 bg-green-500/20 rounded-full flex flex-col items-center justify-center border-2 border-green-400/50 backdrop-blur-md -translate-y-1/2 shadow-[0_0_50px_rgba(74,222,128,0.3)]"
              >
                  <div className="text-5xl mb-2">🔓</div>
                  <div className="text-green-400 font-bold text-xl">OPEN</div>
                  <div className="text-xs text-green-200 uppercase mt-1 text-center px-4">Life Experience (Until Now)</div>
              </motion.div>
           </div>
         )}

      </div>
      
      {/* 3D Floor Reflection */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </div>
  );
};
