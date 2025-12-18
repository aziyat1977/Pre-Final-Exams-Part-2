import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DragItem } from '../types';
import { Check, ArrowDown } from 'lucide-react';

interface DragDropProps {
  bucketALabel: string;
  bucketBLabel: string;
  items: DragItem[];
}

export const DragDrop: React.FC<DragDropProps> = ({ bucketALabel, bucketBLabel, items }) => {
  const [unassigned, setUnassigned] = useState(items);
  const [bucketA, setBucketA] = useState<DragItem[]>([]);
  const [bucketB, setBucketB] = useState<DragItem[]>([]);
  const [feedback, setFeedback] = useState<{id: string, correct: boolean} | null>(null);

  const handleMove = (item: DragItem, targetBucket: 'A' | 'B') => {
    const isCorrect = item.category === targetBucket;
    
    setFeedback({ id: item.id, correct: isCorrect });
    
    // Vibrate feedback
    if (!isCorrect && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(200);
    }

    setTimeout(() => {
      setFeedback(null);
      if (isCorrect) {
        setUnassigned(prev => prev.filter(i => i.id !== item.id));
        if (targetBucket === 'A') setBucketA(prev => [...prev, item]);
        else setBucketB(prev => [...prev, item]);
      }
    }, isCorrect ? 300 : 800); // Faster transition if correct, hold error longer
  };

  return (
    <div className="space-y-12">
      {/* Source Area */}
      <div className="min-h-[120px] p-6 bg-white/5 rounded-3xl border border-white/10 flex flex-wrap gap-4 justify-center items-center shadow-inner">
        <AnimatePresence mode="popLayout">
          {unassigned.length === 0 ? (
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} className="text-green-400 font-black text-2xl flex items-center gap-2">
              <Check className="w-8 h-8" />
              All Sorted!
            </motion.div>
          ) : (
            unassigned.map(item => {
              let borderColor = 'border-white/20';
              let bgColor = 'bg-gray-800';
              if (feedback?.id === item.id) {
                 if (feedback.correct) {
                     borderColor = 'border-green-500';
                     bgColor = 'bg-green-500/20';
                 } else {
                     borderColor = 'border-red-500';
                     bgColor = 'bg-red-500/20';
                 }
              }

              return (
                <motion.div
                  key={item.id}
                  layoutId={item.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                      scale: feedback?.id === item.id && !feedback.correct ? [1, 1.1, 1] : 1,
                      x: feedback?.id === item.id && !feedback.correct ? [0, -10, 10, -10, 10, 0] : 0, 
                      opacity: 1 
                  }}
                  exit={{ scale: 0, opacity: 0 }}
                  className={`
                    relative px-6 py-3 rounded-xl shadow-lg cursor-pointer border-2 transition-colors duration-300
                    ${borderColor} ${bgColor} group
                  `}
                >
                  <span className="text-white font-bold">{item.text}</span>
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all z-10">
                     <button onClick={() => handleMove(item, 'A')} className="w-8 h-8 rounded-full bg-brand-500 text-white font-bold text-xs flex items-center justify-center shadow-lg hover:scale-110 transition-transform">A</button>
                     <button onClick={() => handleMove(item, 'B')} className="w-8 h-8 rounded-full bg-purple-500 text-white font-bold text-xs flex items-center justify-center shadow-lg hover:scale-110 transition-transform">B</button>
                  </div>
                </motion.div>
              )
            })
          )}
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        {/* Bucket A */}
        <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-xs font-black tracking-widest z-10 border-4 border-gray-900">
                BUCKET A
            </div>
            <div className="bg-gradient-to-b from-brand-900/40 to-brand-900/10 p-8 rounded-3xl border-2 border-brand-500/30 min-h-[300px] flex flex-col items-center gap-3 shadow-[0_0_30px_rgba(14,165,233,0.1)]">
              <h3 className="text-center font-bold text-brand-300 mb-4 text-xl">{bucketALabel}</h3>
              <AnimatePresence>
                {bucketA.map(item => (
                  <motion.div 
                    layoutId={item.id} 
                    key={item.id} 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full p-3 bg-brand-500/20 rounded-xl border border-brand-500/30 text-center text-brand-100 font-medium flex items-center justify-center gap-2"
                  >
                    {item.text} <Check size={14} />
                  </motion.div>
                ))}
              </AnimatePresence>
              {bucketA.length === 0 && <div className="text-brand-500/30 mt-10"><ArrowDown size={40} className="animate-bounce" /></div>}
            </div>
        </div>

        {/* Bucket B */}
        <div className="relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-xs font-black tracking-widest z-10 border-4 border-gray-900">
                BUCKET B
            </div>
            <div className="bg-gradient-to-b from-purple-900/40 to-purple-900/10 p-8 rounded-3xl border-2 border-purple-500/30 min-h-[300px] flex flex-col items-center gap-3 shadow-[0_0_30px_rgba(168,85,247,0.1)]">
              <h3 className="text-center font-bold text-purple-300 mb-4 text-xl">{bucketBLabel}</h3>
              <AnimatePresence>
                {bucketB.map(item => (
                  <motion.div 
                    layoutId={item.id} 
                    key={item.id} 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full p-3 bg-purple-500/20 rounded-xl border border-purple-500/30 text-center text-purple-100 font-medium flex items-center justify-center gap-2"
                  >
                    {item.text} <Check size={14} />
                  </motion.div>
                ))}
              </AnimatePresence>
               {bucketB.length === 0 && <div className="text-purple-500/30 mt-10"><ArrowDown size={40} className="animate-bounce" /></div>}
            </div>
        </div>
      </div>
    </div>
  );
};