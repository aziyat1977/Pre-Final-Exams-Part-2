import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Unit } from './types';
import { Brain, Edit3, Move, Grid, Gamepad2, CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { SnakeGame } from './components/SnakeGame';
import { Crossword } from './components/Crossword';
import { DragDrop } from './components/DragDrop';

interface UnitViewProps {
  unit: Unit;
}

export const UnitView: React.FC<UnitViewProps> = ({ unit }) => {
  const [activeTab, setActiveTab] = useState<'theory' | 'quiz' | 'gap' | 'drag' | 'crossword' | 'game'>('theory');
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [gapAnswers, setGapAnswers] = useState<Record<number, string>>({});

  const handleQuizSelect = (qId: number, optionId: string) => {
    setQuizAnswers(prev => ({ ...prev, [qId]: optionId }));
  };

  const tabs = [
    { id: 'theory', label: 'Theory', icon: Brain, color: 'from-blue-500 to-cyan-500' },
    { id: 'quiz', label: 'Quiz', icon: CheckCircle2, color: 'from-green-500 to-emerald-500' },
    { id: 'gap', label: 'Gap Fill', icon: Edit3, color: 'from-orange-500 to-amber-500' },
    { id: 'drag', label: 'Sort', icon: Move, color: 'from-pink-500 to-rose-500' },
    { id: 'crossword', label: 'Crossword', icon: Grid, color: 'from-purple-500 to-violet-500' },
    { id: 'game', label: 'Snake', icon: Gamepad2, color: 'from-indigo-500 to-blue-600' },
  ];

  return (
    <div className="pb-20">
      {/* 3D Header */}
      <motion.div 
        className="mb-8 p-8 rounded-3xl glass-panel relative overflow-hidden group"
        whileHover={{ scale: 1.01 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-brand-500/20" />
        
        <motion.h1 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-200 to-brand-400 mb-4 drop-shadow-sm"
        >
          {unit.title.split(': ')[0]} <br/>
          <span className="text-2xl md:text-4xl text-brand-300 font-bold">{unit.title.split(': ')[1]}</span>
        </motion.h1>
        <p className="text-lg text-gray-300 max-w-2xl leading-relaxed border-l-4 border-brand-500 pl-4">
          {unit.description}
        </p>
      </motion.div>

      {/* 3D Tabs Navigation */}
      <div className="flex overflow-x-auto gap-3 pb-6 px-1 no-scrollbar perspective-container">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ y: 0, scale: 0.95 }}
              className={`
                relative flex items-center gap-2 px-6 py-3 rounded-2xl font-bold whitespace-nowrap transition-all duration-300
                ${isActive ? 'text-white shadow-[0_10px_20px_rgba(0,0,0,0.3)] ring-2 ring-white/20' : 'bg-white/5 text-gray-400 hover:bg-white/10'}
              `}
              style={{
                background: isActive ? `linear-gradient(135deg, var(--tw-gradient-from), var(--tw-gradient-to))` : undefined,
                ['--tw-gradient-from' as any]: isActive ? '' : undefined // Tailwind handles class extraction, style ensures gradient application
              }}
            >
              {/* Manual gradient application via style because tailwind classes in map usually need safelist or full strings */}
              {isActive && <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tab.color} opacity-100 -z-10`} />}
              
              <tab.icon size={20} className={isActive ? 'animate-bounce' : ''} />
              <span>{tab.label}</span>
              {isActive && <motion.div layoutId="tab-underline" className="absolute bottom-1 left-1/2 w-1 h-1 bg-white rounded-full -translate-x-1/2" />}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 50, rotateX: -5 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -50, rotateX: 5 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="min-h-[500px]"
        >
          {/* THEORY SECTION */}
          {activeTab === 'theory' && (
            <div className="space-y-8">
              {/* Concepts */}
              <div className="grid md:grid-cols-3 gap-6">
                {unit.theory.concepts.map((concept, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                    className="glass-panel p-6 rounded-3xl border-t border-white/10 shadow-xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                    <div className="w-12 h-12 mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl shadow-lg shadow-blue-500/30">
                      🎨 
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-white">{concept.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{concept.text}</p>
                    <div className="text-xs font-bold text-cyan-300 bg-cyan-500/10 px-3 py-2 rounded-lg border border-cyan-500/20 flex items-center gap-2">
                       <span>👁️</span> {concept.visualDescription}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Formulas */}
              <div className="grid gap-4">
                 {unit.theory.formulas.map((formula, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className="glass-panel p-6 rounded-2xl border-l-8 border-l-brand-500 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:bg-white/5 transition-colors"
                    >
                       <div className="md:w-1/4">
                          <h3 className="font-black text-brand-400 text-lg">{formula.type}</h3>
                       </div>
                       <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-sm">
                          <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                            <span className="text-gray-500 block text-xs mb-1">ENGLISH</span>
                            <span className="text-green-400 font-bold">{formula.eng}</span>
                          </div>
                          <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                            <span className="text-gray-500 block text-xs mb-1">RUSSIAN</span>
                            <span className="text-blue-300">{formula.rus}</span>
                          </div>
                          <div className="bg-black/30 p-3 rounded-lg border border-white/5">
                            <span className="text-gray-500 block text-xs mb-1">UZBEK</span>
                            <span className="text-purple-300">{formula.uzb}</span>
                          </div>
                       </div>
                    </motion.div>
                 ))}
              </div>

               {/* Examples */}
               <div className="grid md:grid-cols-3 gap-4">
                  {unit.theory.examples.map((ex, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + (idx * 0.1) }}
                      className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-white/10"
                    >
                      <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">{ex.type}</div>
                      <div className="font-medium text-white/90 text-lg">"{ex.text.replace(/"/g, '')}"</div>
                    </motion.div>
                  ))}
               </div>
            </div>
          )}

          {/* QUIZ SECTION */}
          {activeTab === 'quiz' && (
            <div className="max-w-3xl mx-auto space-y-6">
              {unit.exercises.quiz.map((q, idx) => (
                <motion.div 
                  key={q.id}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-panel p-8 rounded-3xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-white">#{q.id}</div>
                  <h3 className="font-bold text-xl mb-6 text-white pr-8">{q.question}</h3>
                  <div className="space-y-3">
                    {q.options.map(opt => {
                       const isSelected = quizAnswers[q.id] === opt.id;
                       
                       return (
                         <motion.button 
                          key={opt.id} 
                          onClick={() => handleQuizSelect(q.id, opt.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`
                            w-full p-4 rounded-xl text-left font-bold transition-all flex items-center justify-between border-2
                            ${isSelected 
                              ? (opt.isCorrect 
                                ? 'bg-green-500/20 border-green-500 text-green-300 shadow-[0_0_15px_rgba(34,197,94,0.3)]' 
                                : 'bg-red-500/20 border-red-500 text-red-300')
                              : 'bg-black/20 border-transparent hover:bg-white/10 text-gray-300 hover:text-white'}
                          `}
                         >
                           <div className="flex items-center gap-3">
                             <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${isSelected ? 'border-current' : 'border-gray-500'}`}>
                               {opt.id.toUpperCase()}
                             </div>
                             {opt.text}
                           </div>
                           {isSelected && (
                             <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                               {opt.isCorrect ? <CheckCircle2 className="text-green-500" /> : <XCircle className="text-red-500" />}
                             </motion.div>
                           )}
                         </motion.button>
                       )
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* GAP FILL */}
          {activeTab === 'gap' && (
             <div className="max-w-3xl mx-auto space-y-6">
               {unit.exercises.gapFill.map((item, idx) => (
                 <motion.div 
                    key={item.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center md:text-left md:flex-row md:justify-center gap-4 text-xl"
                 >
                    <div className="leading-relaxed text-gray-200">
                      <span>{item.sentenceBefore}</span>
                      <span className="relative inline-block mx-2">
                        <input 
                          type="text" 
                          placeholder={item.hint}
                          className={`
                            px-4 py-2 rounded-lg border-2 outline-none font-bold w-48 text-center bg-black/30 transition-all
                            ${gapAnswers[item.id]?.toLowerCase().trim() === item.correctAnswer.toLowerCase() 
                              ? 'border-green-500 text-green-400 shadow-[0_0_10px_rgba(74,222,128,0.3)]' 
                              : 'border-white/20 focus:border-brand-500 text-white focus:bg-black/50'}
                          `}
                          onChange={(e) => setGapAnswers(prev => ({ ...prev, [item.id]: e.target.value }))}
                        />
                        {gapAnswers[item.id]?.toLowerCase().trim() === item.correctAnswer.toLowerCase() && (
                          <motion.div 
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            className="absolute -top-3 -right-3 bg-green-500 text-black rounded-full p-1"
                          >
                            <CheckCircle2 size={12} />
                          </motion.div>
                        )}
                      </span>
                      <span>{item.sentenceAfter}</span>
                    </div>
                 </motion.div>
               ))}
             </div>
          )}

          {/* DRAG DROP */}
          {activeTab === 'drag' && (
            <DragDrop 
              bucketALabel={unit.exercises.dragDrop.bucketA}
              bucketBLabel={unit.exercises.dragDrop.bucketB}
              items={unit.exercises.dragDrop.items}
            />
          )}

          {/* CROSSWORD */}
          {activeTab === 'crossword' && (
             <Crossword data={unit.exercises.crossword} />
          )}

          {/* SNAKE GAME */}
          {activeTab === 'game' && (
            <SnakeGame levels={unit.exercises.snake} />
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  );
};