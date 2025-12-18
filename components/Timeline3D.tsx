import React from 'react';
import { motion } from 'framer-motion';

interface TimelineProps {
  unitId: string;
}

export const Timeline3D: React.FC<TimelineProps> = ({ unitId }) => {
  // Determine configuration based on Unit ID
  const getConfig = () => {
    switch (unitId) {
      // PRE-INTERMEDIATE (B1)
      case 'Nav-B1-07': // Past vs Present Perfect
        return 'perfect_vs_simple';
      case 'Nav-B1-09': // First Conditional
        return 'chain_reaction'; // Domino effect
      case 'Nav-B1-10': // Used To
        return 'past_habit'; // Broken link

      // INTERMEDIATE (B1+)
      case 'Nav-B1Plus-03': // Future Forms
        return 'future';
      case 'Nav-B1Plus-05': // Second Conditional
        return 'parallel_reality'; // Dream bubble
        
      default:
        return 'generic';
    }
  };

  const mode = getConfig();

  return (
    <div className="w-full h-[500px] mb-12 relative rounded-3xl overflow-hidden bg-gradient-to-b from-gray-900 via-[#0a0f1c] to-black border-2 border-brand-500/20 shadow-[0_0_50px_rgba(14,165,233,0.1)] flex items-center justify-center perspective-container group">
      
      {/* Background Grid - Moving Floor */}
      <div className="absolute inset-0 opacity-30" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)',
             backgroundSize: '60px 60px',
             transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(3)',
           }} 
      />

      {/* Floating Particles for Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {[...Array(5)].map((_, i) => (
            <motion.div
               key={i}
               className="absolute w-1 h-1 bg-blue-500 rounded-full"
               initial={{ x: Math.random() * 100 + "%", y: "110%", opacity: 0 }}
               animate={{ y: "-10%", opacity: [0, 1, 0] }}
               transition={{ duration: 10 + Math.random() * 10, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
            />
         ))}
      </div>

      {/* 3D Stage Container */}
      <div className="relative w-full max-w-5xl h-80 preserve-3d scale-110" style={{ transform: 'rotateX(5deg) rotateY(0deg)' }}>
        
        {/* THE TIMELINE RAIL (Infinite Line) */}
        <div className="absolute top-1/2 left-0 right-0 h-3 bg-gray-800/80 rounded-full transform -translate-y-1/2 overflow-visible border border-white/5 backdrop-blur-sm">
           <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-brand-500/50 blur-md transform -translate-y-1/2" />
        </div>

        {/* 'NOW' WALL (The Glass Pane) */}
        <motion.div 
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-white/5 to-white/20 backdrop-blur-xl border-l border-r border-white/30 shadow-[0_0_50px_rgba(255,255,255,0.15)] z-10"
          style={{ transform: 'translateX(-50%)' }}
        >
           <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-white font-black tracking-[0.3em] text-sm py-2 px-6 bg-white/5 rounded-full border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
             NOW
           </div>
        </motion.div>

        {/* --- SCENARIO: PERFECT VS SIMPLE (Nav-B1-07) --- */}
        {mode === 'perfect_vs_simple' && (
          <>
            {/* Past Simple: Isolated Event (Red Box) */}
            <motion.div
              initial={{ opacity: 0, z: -400, x: -100 }}
              animate={{ opacity: 1, z: 0, x: 0 }}
              transition={{ delay: 0.5, duration: 2, type: "spring" }}
              className="absolute top-1/2 left-[20%] w-16 h-16 -mt-8 preserve-3d"
            >
               <div className="w-full h-full bg-red-600/90 rounded-xl transform rotate-45 shadow-[0_0_30px_rgba(220,38,38,0.8)] border border-red-400 flex items-center justify-center backdrop-blur-md">
                 <span className="text-white font-black text-xs transform -rotate-45">FINISHED</span>
               </div>
               <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-red-400 font-bold text-lg tracking-wider">
                 PAST SIMPLE
               </div>
               {/* Closed Door Icon */}
               <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-4xl">🔒</div>
            </motion.div>

            {/* Present Perfect: Connection (Green Energy Beam) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20">
               <motion.path
                 d="M 35% 50% Q 42% 40%, 50% 50%" // Arced path to center
                 fill="transparent"
                 stroke="#4ade80"
                 strokeWidth="8"
                 strokeLinecap="round"
                 strokeDasharray="10 20"
                 initial={{ pathLength: 0, opacity: 0 }}
                 animate={{ pathLength: 1, opacity: 1, strokeDashoffset: -100 }}
                 transition={{ 
                    pathLength: { delay: 1.5, duration: 2, ease: "easeOut" },
                    strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" }
                 }}
                 style={{ filter: 'drop-shadow(0 0 15px rgba(74,222,128,0.8))' }}
               />
            </svg>
            
            {/* Event Dot */}
            <motion.div
               initial={{ scale: 0 }}
               animate={{ scale: [0, 1.2, 1] }}
               transition={{ delay: 1.5, duration: 0.8 }}
               className="absolute top-1/2 left-[35%] w-6 h-6 bg-green-500 rounded-full -mt-3 -ml-3 shadow-[0_0_20px_rgba(74,222,128,1)]"
            />
            
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 3 }}
               className="absolute top-[30%] left-[38%] text-green-400 font-bold text-lg tracking-wider bg-black/50 px-4 py-1 rounded-full border border-green-500/30"
            >
               EXPERIENCE (Door Open 🔓)
            </motion.div>
          </>
        )}

        {/* --- SCENARIO: FUTURE (Nav-B1Plus-03) --- */}
        {mode === 'future' && (
           <>
             {/* Will: Rocket Launch */}
             <motion.div 
               className="absolute top-[40%] left-1/2 h-4 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-r-full shadow-[0_0_30px_rgba(6,182,212,0.8)]"
               initial={{ width: 0 }}
               animate={{ width: '40%' }}
               transition={{ delay: 0.5, duration: 1.5, type: "spring", stiffness: 40 }}
             >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-300 rounded-full blur-sm" />
                <span className="absolute -top-10 right-0 text-cyan-300 font-black text-xl tracking-wider">WILL (100%)</span>
             </motion.div>

             {/* Might: Floating Cloud */}
             <motion.div 
               className="absolute top-[65%] left-1/2 h-3 rounded-r-full flex items-center"
               initial={{ width: 0, opacity: 0 }}
               animate={{ width: '30%', opacity: 1 }}
               transition={{ delay: 2, duration: 3, ease: "easeOut" }}
               style={{
                 background: 'linear-gradient(90deg, rgba(236,72,153,1) 0%, rgba(236,72,153,0) 100%)',
               }}
             >
                <motion.div 
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute right-0 -top-8 text-pink-400 font-bold text-lg"
                >
                    MIGHT (50%)?
                </motion.div>
             </motion.div>
           </>
        )}

        {/* --- SCENARIO: CHAIN REACTION (Nav-B1-09) --- */}
        {mode === 'chain_reaction' && (
           <div className="absolute inset-0 flex items-center justify-center">
              {/* Domino 1 (Condition) */}
              <motion.div
                 initial={{ rotateZ: 0, x: -150, opacity: 0 }}
                 animate={{ rotateZ: 25, x: -130, opacity: 1 }}
                 transition={{ delay: 0.5, duration: 1.5, type: "spring", bounce: 0.2 }}
                 className="w-24 h-40 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-[0_0_40px_rgba(249,115,22,0.5)] border-2 border-white/20 flex flex-col items-center justify-center z-10 origin-bottom-right"
              >
                 <span className="text-white font-black text-3xl">IF</span>
                 <span className="text-white/70 text-xs mt-2 font-mono">PRESENT</span>
              </motion.div>

              {/* Energy Transfer */}
              <motion.div
                 initial={{ width: 0, opacity: 0 }}
                 animate={{ width: 100, opacity: 1 }}
                 transition={{ delay: 1.5, duration: 0.5 }}
                 className="h-2 bg-white/50 mx-4 blur-sm"
              />

              {/* Domino 2 (Result) */}
              <motion.div
                 initial={{ scale: 0.8, opacity: 0.3, x: 50 }}
                 animate={{ scale: 1.1, opacity: 1, x: 0 }}
                 transition={{ delay: 2.0, type: "spring", stiffness: 200 }}
                 className="w-28 h-48 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-[0_0_50px_rgba(6,182,212,0.8)] border-2 border-white/20 flex flex-col items-center justify-center z-20"
              >
                 <span className="text-white font-black text-3xl">WILL</span>
                 <span className="text-white/70 text-xs mt-2 font-mono">FUTURE</span>
              </motion.div>
              
              <div className="absolute bottom-4 text-center w-full text-white/50 text-sm tracking-[0.5em] font-black">
                 REAL POSSIBILITY
              </div>
           </div>
        )}

        {/* --- SCENARIO: PARALLEL REALITY (Nav-B1Plus-05) --- */}
        {mode === 'parallel_reality' && (
           <>
              {/* Reality Line (Dark & Gritty) */}
              <div className="absolute top-[80%] left-0 right-0 h-[2px] bg-gray-700 border-t border-dashed border-gray-500 opacity-50" />
              <div className="absolute top-[82%] left-[20%] text-gray-400 font-mono text-xs">REALITY: I don't have money (Present)</div>

              {/* Dream World Line (Glowing & Floating) */}
              <motion.div 
                 className="absolute top-[30%] left-[10%] right-[10%] h-4 bg-gradient-to-r from-purple-600 via-pink-500 to-transparent rounded-full shadow-[0_0_30px_rgba(168,85,247,0.6)]"
                 initial={{ scaleX: 0, opacity: 0 }}
                 animate={{ scaleX: 1, opacity: 1 }}
                 transition={{ duration: 3, ease: "easeInOut" }}
                 style={{ originX: 0 }}
              />
              
              {/* Dream Bubble */}
              <motion.div
                 initial={{ scale: 0, y: 100 }}
                 animate={{ scale: 1, y: 0 }}
                 transition={{ delay: 1.5, type: "spring", bounce: 0.6 }}
                 className="absolute top-[10%] left-[45%] w-40 h-28 bg-white/10 backdrop-blur-md border-2 border-pink-400/50 rounded-[40%] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(236,72,153,0.3)]"
              >
                 <span className="text-4xl filter drop-shadow-lg">💭</span>
                 <span className="text-pink-200 font-bold text-sm mt-2">If I were rich...</span>
              </motion.div>

              <div className="absolute top-[45%] left-[15%] text-pink-400 text-sm font-bold -mt-5 tracking-widest uppercase">
                  Imaginary Timeline
              </div>
           </>
        )}

        {/* --- SCENARIO: PAST HABIT (Nav-B1-10) --- */}
        {mode === 'past_habit' && (
           <>
              {/* The Habit Block (Repeated Action) */}
              <motion.div
                 className="absolute top-1/2 left-[10%] w-[30%] h-16 bg-gradient-to-r from-gray-700 to-gray-600 border-2 border-gray-500 rounded-xl flex items-center justify-center -translate-y-1/2 grayscale"
                 initial={{ opacity: 0, x: -100 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1.5 }}
              >
                 <span className="text-gray-300 font-black tracking-widest text-lg">USED TO</span>
              </motion.div>

              {/* The Gap / Break */}
              <div className="absolute top-1/2 left-[40%] right-[50%] h-[4px] border-b-4 border-dotted border-red-500/80 -translate-y-1/2" />
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1.5 }} transition={{ delay: 2, type: "spring" }}
                className="absolute top-1/2 left-[45%] -translate-y-1/2 text-4xl"
              >
                ❌
              </motion.div>

              {/* Now (Empty) */}
              <div className="absolute top-1/2 left-[55%] text-gray-500 font-bold text-xl opacity-50">
                 NOT NOW
              </div>
           </>
        )}

         {/* --- SCENARIO: GENERIC --- */}
         {mode === 'generic' && (
             <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 rounded-full border border-white/5 flex items-center justify-center"
                >
                    <div className="w-48 h-48 rounded-full border border-white/10" />
                </motion.div>
                <div className="absolute text-center">
                    <h3 className="text-3xl font-black text-white/20 tracking-[0.5em]">TIMELINE</h3>
                    <p className="text-white/10 text-sm mt-2">Universal Time</p>
                </div>
             </div>
         )}

      </div>
    </div>
  );
};