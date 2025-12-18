import React, { useState } from 'react';
import { Menu, Moon, Sun, X, GraduationCap, ChevronRight, Sparkles } from 'lucide-react';
import { UNITS } from './data';
import { UnitView } from './UnitView';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [activeUnitId, setActiveUnitId] = useState<string>(UNITS[0].id);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
  // Theme state - defaulting to dark for the "Ultra" look, but toggleable
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f0f9ff';
      document.body.style.color = '#0f172a';
    } else {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0f172a';
      document.body.style.color = '#ffffff';
    }
  };

  const activeUnit = UNITS.find(u => u.id === activeUnitId) || UNITS[0];

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-700 ${isDark ? 'dark' : ''}`}>
      
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-[500px] h-[500px] bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Top Bar - Floating Glass */}
      <motion.div 
        initial={{ y: -100 }} animate={{ y: 0 }}
        className="fixed top-4 left-4 right-4 h-16 glass-panel rounded-2xl z-50 flex items-center justify-between px-6 shadow-lg shadow-black/10"
      >
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            <Menu className="w-6 h-6 text-brand-500" />
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-tr from-brand-400 to-purple-500 p-2 rounded-lg shadow-lg shadow-brand-500/20">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="font-black text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-brand-400 via-purple-400 to-pink-400">
              WRIELTS
            </span>
            <span className="hidden sm:inline-block text-xs font-bold px-2 py-1 rounded-full bg-white/10 border border-white/10 text-brand-300">
              B1 MASTER
            </span>
          </div>
        </div>
        
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all border border-white/5"
        >
          {isDark ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-brand-600" />}
        </button>
      </motion.div>

      <div className="pt-24 px-4 pb-4 max-w-[1600px] mx-auto h-[calc(100vh-1rem)] flex gap-6 relative z-10">
        
        {/* Desktop 3D Sidebar */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex flex-col w-80 shrink-0 h-full pb-4"
        >
          <div className="glass-panel rounded-3xl h-full overflow-hidden flex flex-col border border-white/10 shadow-2xl">
            <div className="p-6 pb-2">
              <h2 className="text-xl font-black text-white/90 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                COURSE UNITS
              </h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3 perspective-container">
              {UNITS.map((unit, idx) => (
                <motion.button
                  key={unit.id}
                  onClick={() => setActiveUnitId(unit.id)}
                  whileHover={{ scale: 1.02, x: 5, rotateY: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    w-full text-left p-4 rounded-xl transition-all relative overflow-hidden group
                    ${activeUnitId === unit.id 
                      ? 'bg-gradient-to-r from-brand-600 to-purple-600 text-white shadow-lg shadow-brand-500/25' 
                      : 'hover:bg-white/5 text-gray-400 hover:text-white'}
                  `}
                >
                   {/* Active Glow */}
                   {activeUnitId === unit.id && (
                     <div className="absolute inset-0 bg-white/20 blur-lg" />
                   )}
                   
                   <div className="relative z-10">
                     <div className="flex justify-between items-center mb-1">
                        <span className={`text-[10px] font-black tracking-widest uppercase ${activeUnitId === unit.id ? 'text-white/80' : 'text-gray-500'}`}>
                          Unit {unit.id}
                        </span>
                        {activeUnitId === unit.id && <motion.div layoutId="activeDot" className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />}
                     </div>
                     <div className="font-bold leading-tight">{unit.title.split(': ')[1]}</div>
                   </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
                className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm md:hidden"
              />
              <motion.div
                initial={{ x: '-100%', rotateY: 90 }}
                animate={{ x: 0, rotateY: 0 }}
                exit={{ x: '-100%', rotateY: 90 }}
                transition={{ type: "spring", damping: 20 }}
                className="fixed top-0 left-0 bottom-0 w-[85vw] bg-gray-900 z-50 shadow-2xl p-6 flex flex-col border-r border-white/10 md:hidden origin-left stage-perspective"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-purple-400">UNITS</h2>
                  <button onClick={() => setSidebarOpen(false)} className="p-2 bg-white/10 rounded-full"><X /></button>
                </div>
                <div className="flex-1 overflow-y-auto space-y-3">
                  {UNITS.map(unit => (
                    <button
                      key={unit.id}
                      onClick={() => { setActiveUnitId(unit.id); setSidebarOpen(false); }}
                      className={`w-full p-4 rounded-xl border-l-4 text-left transition-all ${
                        activeUnitId === unit.id ? 'bg-brand-500/20 border-brand-500 text-white' : 'border-transparent text-gray-400'
                      }`}
                    >
                      <div className="text-xs font-bold opacity-60">Unit {unit.id}</div>
                      <div className="font-bold">{unit.title.split(': ')[1]}</div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Content Stage */}
        <div className="flex-1 h-full relative stage-perspective">
          <AnimatePresence mode="wait">
             <motion.div
                key={activeUnitId}
                initial={{ opacity: 0, rotateX: -10, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                exit={{ opacity: 0, rotateX: 10, y: -50, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="h-full w-full overflow-y-auto overflow-x-hidden pr-2"
             >
                <UnitView unit={activeUnit} />
             </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}