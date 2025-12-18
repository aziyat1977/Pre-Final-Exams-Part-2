import React from 'react';
import { motion } from 'framer-motion';

interface TimelineProps {
  unitId: string;
}

export const Timeline3D: React.FC<TimelineProps> = ({ unitId }) => {
  // Determine configuration based on Unit ID
  const getConfig = () => {
    switch (unitId) {
      case '6.2': // Present Perfect vs Past Simple
        return 'perfect_vs_simple';
      case '7.1': // Future Prediction
        return 'future';
      case '9.1': // First Conditional
        return 'chain_reaction'; // Domino effect
      case '9.2': // Future Time Clauses
        return 'sequence';
      case '11.1': // Second Conditional
        return 'parallel_reality'; // Dream bubble
      case '11.2': // Used To
        return 'past_habit'; // Broken link
      case '12.1': // Present Perfect Duration
        return 'duration'; // Filling bar
      default:
        return 'generic';
    }
  };

  const mode = getConfig();

  return (
    <div className="w-full h-[400px] mb-8 relative rounded-3xl overflow-hidden bg-gradient-to-b from-gray-900 to-black border border-white/10 shadow-2xl flex items-center justify-center perspective-container">
      
      {/* Background Grid - Moving Floor */}
      <div className="absolute inset-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)',
             backgroundSize: '40px 40px',
             transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
           }} 
      />

      {/* 3D Stage Container */}
      <div className="relative w-full max-w-4xl h-64 preserve-3d" style={{ transform: 'rotateX(10deg) rotateY(0deg)' }}>
        
        {/* THE TIMELINE RAIL (Infinite Line) */}
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-800 rounded-full transform -translate-y-1/2 overflow-visible">
           <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-blue-500/30 blur-sm transform -translate-y-1/2" />
        </div>

        {/* 'NOW' WALL (The Glass Pane) */}
        <motion.div 
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-1/2 top-10 bottom-10 w-1 bg-white/20 backdrop-blur-md border-l border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.2)] z-10"
          style={{ transform: 'translateX(-50%)' }}
        >
           <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-white/80 font-black tracking-widest text-xs py-1 px-3 bg-white/10 rounded-full border border-white/10">
             NOW
           </div>
        </motion.div>

        {/* --- SCENARIO: PERFECT VS SIMPLE (Unit 6.2) --- */}
        {mode === 'perfect_vs_simple' && (
          <>
            {/* Past Simple: Isolated Event (Red) */}
            <motion.div
              initial={{ opacity: 0, z: -200, scale: 0 }}
              animate={{ opacity: 1, z: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="absolute top-1/2 left-[20%] w-12 h-12 -mt-6 preserve-3d"
            >
               <div className="w-full h-full bg-red-500 rounded-lg transform rotate-45 shadow-[0_0_20px_rgba(239,68,68,0.6)] flex items-center justify-center">
                 <span className="text-black font-black transform -rotate-45">1999</span>
               </div>
               {/* Label */}
               <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-red-400 font-bold text-sm">
                 Past Simple (Finished)
               </div>
            </motion.div>

            {/* Present Perfect: Connection (Green) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20">
               <motion.path
                 d="M 35% 50% L 50% 50%" // From past to center
                 fill="transparent"
                 stroke="#4ade80"
                 strokeWidth="6"
                 strokeLinecap="round"
                 initial={{ pathLength: 0, opacity: 0 }}
                 animate={{ pathLength: 1, opacity: 1 }}
                 transition={{ delay: 1.5, duration: 2, ease: "easeInOut" }}
                 style={{ filter: 'drop-shadow(0 0 8px rgba(74,222,128,0.5))' }}
               />
            </svg>
            <motion.div
               initial={{ scale: 0 }}
               animate={{ scale: 1 }}
               transition={{ delay: 1.5, duration: 0.5 }}
               className="absolute top-1/2 left-[35%] w-4 h-4 bg-green-400 rounded-full -mt-2 -ml-2"
            />
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 3.5 }}
               className="absolute top-[40%] left-[42%] text-green-400 font-bold text-sm"
            >
               Connection to Now (Experience)
            </motion.div>
          </>
        )}

        {/* --- SCENARIO: FUTURE (Unit 7.1) --- */}
        {mode === 'future' && (
           <>
             {/* Will: Solid Arrow */}
             <motion.div 
               className="absolute top-[40%] left-1/2 w-0 h-2 bg-blue-500 rounded-r-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
               initial={{ width: 0 }}
               animate={{ width: '30%' }}
               transition={{ delay: 0.5, duration: 1.5, type: "spring", stiffness: 50 }}
             >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rotate-45 transform translate-x-2" />
                <span className="absolute -top-8 right-0 text-blue-400 font-bold">WILL (100%)</span>
             </motion.div>

             {/* Might: Dashed/Faded Arrow */}
             <motion.div 
               className="absolute top-[60%] left-1/2 h-2 rounded-r-full"
               initial={{ width: 0 }}
               animate={{ width: '25%' }}
               transition={{ delay: 1.5, duration: 2, ease: "easeOut" }}
               style={{
                 background: 'linear-gradient(90deg, rgba(236,72,153,1) 0%, rgba(236,72,153,0) 100%)',
                 borderBottom: '2px dashed #ec4899'
               }}
             >
                <span className="absolute -bottom-8 right-0 text-pink-400 font-bold">MIGHT (50%)</span>
             </motion.div>
           </>
        )}

        {/* --- SCENARIO: CHAIN REACTION (Unit 9.1 - 1st Conditional) --- */}
        {mode === 'chain_reaction' && (
           <div className="absolute inset-0 flex items-center justify-center">
              {/* Domino 1 */}
              <motion.div
                 initial={{ rotateZ: 0, x: -100 }}
                 animate={{ rotateZ: 45, x: -90 }}
                 transition={{ delay: 0.5, duration: 1.5, ease: "easeIn" }}
                 className="w-16 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg shadow-xl border border-white/20 flex items-center justify-center z-10 origin-bottom-right"
              >
                 <span className="text-white font-black text-2xl">IF</span>
              </motion.div>

              {/* Arrow */}
              <motion.div
                 initial={{ width: 0, opacity: 0 }}
                 animate={{ width: 60, opacity: 1 }}
                 transition={{ delay: 1.8, duration: 0.5 }}
                 className="h-1 bg-white mx-4"
              />

              {/* Domino 2 */}
              <motion.div
                 initial={{ scale: 0.8, opacity: 0.5 }}
                 animate={{ scale: 1.1, opacity: 1, x: 20 }}
                 transition={{ delay: 2.1, type: "spring" }}
                 className="w-20 h-28 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg shadow-[0_0_30px_rgba(6,182,212,0.6)] border border-white/20 flex items-center justify-center z-20"
              >
                 <span className="text-white font-black text-xl">THEN</span>
              </motion.div>
              
              <div className="absolute bottom-10 text-center w-full text-gray-400 text-sm">
                 REAL POSSIBILITY
              </div>
           </div>
        )}

        {/* --- SCENARIO: PARALLEL REALITY (Unit 11.1 - 2nd Conditional) --- */}
        {mode === 'parallel_reality' && (
           <>
              {/* Real World Line (Bottom) */}
              <div className="absolute top-[70%] left-0 right-0 h-[1px] bg-gray-600 border-t border-dashed border-gray-400 opacity-30" />
              <div className="absolute top-[70%] left-[20%] text-gray-500 text-xs">Reality (No Money)</div>

              {/* Dream World Line (Top) */}
              <motion.div 
                 className="absolute top-[30%] left-[20%] right-[10%] h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent rounded-full shadow-[0_0_20px_rgba(168,85,247,0.5)]"
                 initial={{ scaleX: 0, opacity: 0 }}
                 animate={{ scaleX: 1, opacity: 1 }}
                 transition={{ duration: 3 }}
                 style={{ originX: 0 }}
              />
              
              {/* Dream Bubble */}
              <motion.div
                 initial={{ scale: 0, y: 50 }}
                 animate={{ scale: 1, y: 0 }}
                 transition={{ delay: 1, type: "spring", bounce: 0.5 }}
                 className="absolute top-[15%] left-[50%] w-24 h-16 bg-white/10 backdrop-blur-md border border-pink-400/50 rounded-[50%] flex items-center justify-center"
              >
                 <span className="text-2xl">💭 💰</span>
              </motion.div>

              <div className="absolute top-[30%] left-[20%] text-pink-400 text-xs font-bold -mt-5">Imaginary (If I had money...)</div>
           </>
        )}

        {/* --- SCENARIO: DURATION (Unit 12.1 - Pres Perfect Duration) --- */}
        {mode === 'duration' && (
           <>
              <motion.div
                 className="absolute top-1/2 h-4 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-l-full shadow-[0_0_20px_rgba(250,204,21,0.6)] -translate-y-1/2"
                 style={{ left: '20%', right: '50%' }} // Ends at center (Now)
                 initial={{ width: 0 }}
                 animate={{ width: '30%' }} // 50% - 20% = 30% width
                 transition={{ duration: 4, ease: "linear" }}
              >
                 <span className="absolute left-2 top-1/2 -translate-y-1/2 text-black font-bold text-xs">FOR 10 YEARS</span>
              </motion.div>
              
              {/* Start Point */}
              <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 className="absolute top-1/2 left-[20%] w-3 h-3 bg-white rounded-full -translate-y-1/2"
              />
              <div className="absolute top-[60%] left-[20%] text-xs text-orange-300">SINCE 2014</div>
           </>
        )}

        {/* --- SCENARIO: PAST HABIT (Unit 11.2 - Used To) --- */}
        {mode === 'past_habit' && (
           <>
              {/* The Habit Block */}
              <motion.div
                 className="absolute top-1/2 left-[15%] w-[25%] h-12 bg-gray-700/80 border-2 border-gray-500 rounded-lg flex items-center justify-center -translate-y-1/2 grayscale"
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 1 }}
              >
                 <span className="text-gray-300 font-mono text-xs">OLD ROUTINE</span>
              </motion.div>

              {/* The Gap */}
              <div className="absolute top-1/2 left-[40%] right-[50%] h-[1px] border-b-2 border-dashed border-red-500/50 -translate-y-1/2" />
              <div className="absolute top-[60%] left-[45%] text-red-500/80 text-xs">STOPPED</div>

              {/* Now (Empty) */}
              <div className="absolute top-1/2 left-[55%] text-gray-500 text-sm">
                 Not doing it now
              </div>
           </>
        )}

         {/* --- SCENARIO: GENERIC (Comparisons, etc) --- */}
         {mode === 'generic' && (
             <div className="absolute inset-0 flex items-center justify-around">
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 rounded-full bg-brand-500/20 blur-xl"
                />
                <motion.div 
                   className="text-white/50 font-black text-4xl tracking-[1em]"
                   animate={{ opacity: [0.3, 0.6, 0.3] }}
                   transition={{ duration: 3, repeat: Infinity }}
                >
                   TIMELINE
                </motion.div>
             </div>
         )}

      </div>
      
      {/* Overlay Text Instructions */}
      <div className="absolute bottom-4 left-4 text-[10px] text-white/30 uppercase tracking-widest font-mono">
         Visualization Mode: {mode.toUpperCase().replace('_', ' ')}
      </div>
    </div>
  );
};