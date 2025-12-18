
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Unit } from './types';
import { Brain, Edit3, Move, Grid, Gamepad2, CheckCircle2, Mic, BookOpen, ArrowRight, Zap } from 'lucide-react';
import { SnakeGame } from './components/SnakeGame';
import { Crossword } from './components/Crossword';
import { DragDrop } from './components/DragDrop';
import { Timeline3D } from './components/Timeline3D';
import { SpeakingRecorder } from './components/SpeakingRecorder';
import { ReadingSection } from './components/ReadingSection';

interface UnitViewProps {
  unit: Unit;
}

export const UnitView: React.FC<UnitViewProps> = ({ unit }) => {
  // 11-Step Tabs
  const steps = [
    { id: 'leadin', label: 'Intro', icon: Zap },
    { id: 'theory', label: 'Meaning', icon: Brain },
    { id: 'check', label: 'Checks', icon: CheckCircle2 },
    { id: 'practice', label: 'Practice', icon: Edit3 },
    { id: 'gamified', label: 'Games', icon: Gamepad2 },
    { id: 'reading', label: 'Reading', icon: BookOpen },
    { id: 'speaking', label: 'Speaking', icon: Mic },
  ];

  const [activeTab, setActiveTab] = useState('leadin');
  const [checkStep, setCheckStep] = useState(0); // For separate page quizzes
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [gapAnswers, setGapAnswers] = useState<Record<number, string>>({});

  // Reset internal states when unit changes
  useEffect(() => {
    setActiveTab('leadin');
    setCheckStep(0);
    setQuizAnswers({});
    setGapAnswers({});
  }, [unit.id]);

  const handleQuizSelect = (qId: number, optionId: string) => {
    setQuizAnswers(prev => ({ ...prev, [qId]: optionId }));
  };

  return (
    <div className="pb-20">
      
      {/* 3D Header */}
      <motion.div 
        className="mb-8 p-8 rounded-3xl glass-panel relative overflow-hidden group"
        whileHover={{ scale: 1.01 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all group-hover:bg-brand-500/20" />
        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-200 to-brand-400 mb-2">
          {unit.title.split(': ')[1]}
        </h1>
        <p className="text-gray-400 text-sm font-mono uppercase tracking-widest">{unit.description}</p>
      </motion.div>

      {/* Navigation Stepper */}
      <div className="flex overflow-x-auto gap-2 pb-6 px-1 no-scrollbar perspective-container">
        {steps.map((step, idx) => {
          const isActive = activeTab === step.id;
          return (
            <button
              key={step.id}
              onClick={() => setActiveTab(step.id)}
              className={`
                relative flex items-center gap-2 px-5 py-3 rounded-xl font-bold whitespace-nowrap transition-all duration-300
                ${isActive ? 'bg-brand-500 text-white shadow-[0_0_20px_rgba(14,165,233,0.4)]' : 'bg-white/5 text-gray-500 hover:bg-white/10 hover:text-gray-300'}
              `}
            >
              <step.icon size={18} />
              <span>{idx + 1}. {step.label}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="min-h-[500px]"
        >
          {/* 1. LEAD IN */}
          {activeTab === 'leadin' && (
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center max-w-2xl mx-auto">
               <motion.div 
                 initial={{ scale: 0 }} animate={{ scale: 1 }}
                 className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(250,204,21,0.5)]"
               >
                 <Zap size={48} className="text-white" />
               </motion.div>
               <h2 className="text-3xl font-black text-white mb-4">{unit.leadIn.title}</h2>
               <div className="glass-panel p-6 rounded-2xl border border-white/10 mb-8 text-xl text-gray-200 italic">
                 "{unit.leadIn.imageOrText}"
               </div>
               <p className="text-brand-300 font-bold text-lg mb-8">{unit.leadIn.question}</p>
               <button onClick={() => setActiveTab('theory')} className="px-8 py-3 bg-brand-500 text-white rounded-full font-black flex items-center gap-2 hover:scale-105 transition-transform">
                 START LESSON <ArrowRight />
               </button>
            </div>
          )}

          {/* 2. MEANING (THEORY) & VISUALS */}
          {activeTab === 'theory' && (
            <div className="space-y-12">
              {/* Timeline/Cline */}
              <Timeline3D unitId={unit.id} />
              
              {/* Concepts */}
              <div className="grid md:grid-cols-3 gap-6">
                 {unit.meaning.concepts.map((c, i) => (
                   <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass-panel p-6 rounded-3xl border-t-4 border-t-brand-500">
                      <div className="text-xs font-mono text-brand-400 mb-2 uppercase tracking-wider">Concept {i+1}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{c.title}</h3>
                      <div className="text-xs bg-white/10 p-2 rounded mb-4 text-cyan-300">👁️ {c.visualDescription}</div>
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-300">🇬🇧 {c.textEng}</p>
                        <p className="text-blue-300">🇷🇺 {c.textRus}</p>
                        <p className="text-purple-300">🇺🇿 {c.textUzb}</p>
                      </div>
                   </motion.div>
                 ))}
              </div>

              {/* Formulas */}
              <div className="grid md:grid-cols-2 gap-4">
                 {unit.meaning.formulas.map((f, i) => (
                   <div key={i} className="bg-black/40 p-4 rounded-xl border border-white/10 flex justify-between items-center">
                      <span className="text-gray-400 font-bold text-sm">{f.label}</span>
                      <code className="text-green-400 font-mono bg-green-900/20 px-2 py-1 rounded">{f.formula}</code>
                   </div>
                 ))}
              </div>

              {/* Examples */}
              <div className="grid md:grid-cols-3 gap-4">
                  {unit.examples.map((ex, idx) => (
                    <motion.div 
                      key={idx}
                      className="p-5 rounded-2xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-white/10"
                    >
                      <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-2">{ex.type}</div>
                      <div className="font-medium text-white/90 text-lg">"{ex.text.replace(/"/g, '')}"</div>
                    </motion.div>
                  ))}
               </div>
            </div>
          )}

          {/* 3. CONCEPT CHECKS (Separate Pages) */}
          {activeTab === 'check' && (
            <div className="max-w-xl mx-auto min-h-[400px] flex flex-col justify-center">
               <div className="text-center mb-8">
                 <span className="bg-brand-500/20 text-brand-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                   Concept Check {checkStep + 1} / {unit.conceptChecks.length}
                 </span>
               </div>
               
               <AnimatePresence mode="wait">
                 <motion.div 
                   key={checkStep}
                   initial={{ x: 50, opacity: 0 }}
                   animate={{ x: 0, opacity: 1 }}
                   exit={{ x: -50, opacity: 0 }}
                   className="glass-panel p-8 rounded-3xl"
                 >
                    <h3 className="text-xl font-bold text-white mb-6">{unit.conceptChecks[checkStep].question}</h3>
                    <div className="space-y-3">
                       {unit.conceptChecks[checkStep].options.map(opt => {
                         const qId = unit.conceptChecks[checkStep].id;
                         const isSelected = quizAnswers[qId] === opt.id;
                         return (
                           <button
                             key={opt.id}
                             onClick={() => handleQuizSelect(qId, opt.id)}
                             className={`w-full p-4 rounded-xl text-left font-bold transition-all border-2 
                                ${isSelected 
                                  ? (opt.isCorrect ? 'border-green-500 bg-green-500/20 text-green-300' : 'border-red-500 bg-red-500/20 text-red-300') 
                                  : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                           >
                              {opt.text}
                           </button>
                         )
                       })}
                    </div>
                 </motion.div>
               </AnimatePresence>

               <div className="flex justify-between mt-8">
                  <button 
                    disabled={checkStep === 0}
                    onClick={() => setCheckStep(prev => prev - 1)}
                    className="text-gray-500 disabled:opacity-30 hover:text-white font-bold"
                  >
                    Previous
                  </button>
                  <button 
                    onClick={() => {
                        if (checkStep < unit.conceptChecks.length - 1) setCheckStep(prev => prev + 1);
                        else setActiveTab('practice');
                    }}
                    className="bg-white text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform"
                  >
                    {checkStep < unit.conceptChecks.length - 1 ? 'Next Question' : 'Go to Practice'}
                  </button>
               </div>
            </div>
          )}

          {/* 4. EXERCISES & PRACTICE */}
          {activeTab === 'practice' && (
             <div className="space-y-12">
                
                {/* 3 Standard Tests */}
                <section>
                   <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2"><Edit3 className="text-blue-400" /> STANDARD TESTS</h3>
                   <div className="grid md:grid-cols-3 gap-6">
                      {unit.exercises.tests.map(q => (
                         <div key={q.id} className="glass-panel p-6 rounded-2xl">
                            <p className="font-bold mb-4 h-12">{q.question}</p>
                            <div className="space-y-2">
                               {q.options.map(opt => (
                                  <button key={opt.id} onClick={() => handleQuizSelect(q.id + 100, opt.id)} className={`w-full text-left text-sm p-2 rounded-lg border ${quizAnswers[q.id + 100] === opt.id ? (opt.isCorrect ? 'border-green-500 bg-green-500/10' : 'border-red-500 bg-red-500/10') : 'border-white/10 hover:bg-white/5'}`}>
                                     {opt.text}
                                  </button>
                               ))}
                            </div>
                         </div>
                      ))}
                   </div>
                </section>

                {/* 3 Quizzes */}
                <section>
                   <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2"><CheckCircle2 className="text-purple-400" /> SKILL QUIZZES</h3>
                   <div className="space-y-4">
                      {unit.exercises.quizzes.map(q => (
                         <div key={q.id} className="bg-white/5 p-4 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <span className="font-medium text-gray-200">{q.question}</span>
                            <div className="flex gap-2">
                               {q.options.map(opt => (
                                  <button key={opt.id} onClick={() => handleQuizSelect(q.id + 200, opt.id)} className={`px-4 py-2 rounded-lg text-sm font-bold border transition-colors ${quizAnswers[q.id + 200] === opt.id ? (opt.isCorrect ? 'bg-green-500 text-black border-green-500' : 'bg-red-500 text-white border-red-500') : 'border-white/20 hover:bg-white/10'}`}>
                                     {opt.text}
                                  </button>
                               ))}
                            </div>
                         </div>
                      ))}
                   </div>
                </section>

                {/* 3 Gap Fills */}
                <section>
                   <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2"><Move className="text-orange-400" /> GAP FILL</h3>
                   <div className="space-y-3">
                      {unit.exercises.gapFill.map(g => (
                         <div key={g.id} className="glass-panel p-4 rounded-xl flex flex-wrap items-center gap-2 text-lg">
                            <span>{g.sentenceBefore}</span>
                            <input 
                              placeholder={g.hint} 
                              className={`bg-black/30 border-b-2 outline-none px-2 py-1 text-center w-40 font-bold transition-colors ${gapAnswers[g.id]?.toLowerCase() === g.correctAnswer.toLowerCase() ? 'border-green-500 text-green-400' : 'border-gray-500 text-white'}`}
                              onChange={(e) => setGapAnswers(prev => ({...prev, [g.id]: e.target.value}))}
                            />
                            <span>{g.sentenceAfter}</span>
                         </div>
                      ))}
                   </div>
                </section>
             </div>
          )}

          {/* 5. GAMIFIED (Kahoot + Extras) */}
          {activeTab === 'gamified' && (
             <div className="space-y-12">
                {/* Kahoot Style */}
                <section>
                    <div className="bg-purple-900/40 p-8 rounded-3xl border border-purple-500/30">
                       <h3 className="text-2xl font-black text-white mb-6 italic tracking-widest flex items-center gap-2">
                          <Zap className="text-yellow-400 fill-current animate-pulse" /> SPEED ROUND
                       </h3>
                       <div className="grid gap-4">
                          {unit.exercises.kahoot.map(q => (
                             <div key={q.id} className="flex flex-col md:flex-row gap-4 items-center bg-black/40 p-4 rounded-xl">
                                <div className="flex-1 font-black text-xl text-center md:text-left">{q.question}</div>
                                <div className="grid grid-cols-2 gap-2 w-full md:w-auto">
                                   {q.options.map((opt, i) => (
                                      <button 
                                        key={opt.id} 
                                        onClick={() => handleQuizSelect(q.id + 300, opt.id)}
                                        className={`
                                           px-8 py-4 rounded-lg font-black text-white shadow-lg transform transition-transform active:scale-95
                                           ${i === 0 ? 'bg-red-500' : 'bg-blue-500'}
                                           ${quizAnswers[q.id + 300] === opt.id ? (opt.isCorrect ? 'ring-4 ring-white' : 'opacity-50') : ''}
                                        `}
                                      >
                                         {opt.text}
                                      </button>
                                   ))}
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                </section>

                {/* Snake */}
                {unit.exercises.snake && <SnakeGame levels={unit.exercises.snake} />}

                {/* Crossword */}
                {unit.exercises.crossword && <Crossword data={unit.exercises.crossword} />}
                
                {/* Drag Drop */}
                {unit.exercises.dragDrop && (
                   <DragDrop 
                     bucketALabel={unit.exercises.dragDrop.bucketA}
                     bucketBLabel={unit.exercises.dragDrop.bucketB}
                     items={unit.exercises.dragDrop.items}
                   />
                )}
             </div>
          )}

          {/* 6. READING */}
          {activeTab === 'reading' && (
             <ReadingSection data={unit.reading} />
          )}

          {/* 7. SPEAKING */}
          {activeTab === 'speaking' && (
             <div className="grid md:grid-cols-3 gap-6">
                {unit.speaking.map((prompt, i) => (
                   <div key={prompt.id} className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col">
                      <div className="bg-white/10 w-8 h-8 rounded-full flex items-center justify-center font-bold mb-4">{i + 1}</div>
                      <h3 className="text-xl font-bold text-brand-300 mb-2">{prompt.topic}</h3>
                      <p className="text-white text-lg mb-6 flex-1">{prompt.question}</p>
                      <div className="mt-auto">
                        <SpeakingRecorder questionId={prompt.id} />
                      </div>
                   </div>
                ))}
             </div>
          )}

        </motion.div>
      </AnimatePresence>
    </div>
  );
};
