
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ReadingSection as ReadingType } from '../types';
import { CheckCircle2, XCircle } from 'lucide-react';

export const ReadingSection: React.FC<{ data: ReadingType }> = ({ data }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleSelect = (qId: number, optId: string) => {
    setAnswers(prev => ({ ...prev, [qId]: optId }));
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 h-full">
      {/* Passage Side */}
      <div className="glass-panel p-8 rounded-3xl overflow-y-auto max-h-[600px] border-l-4 border-l-yellow-500">
        <h3 className="text-2xl font-black text-yellow-400 mb-6 flex items-center gap-3">
          📖 {data.title}
        </h3>
        <p className="text-lg leading-loose text-gray-200 whitespace-pre-line font-serif">
          {data.passage}
        </p>
      </div>

      {/* Questions Side */}
      <div className="space-y-6 overflow-y-auto max-h-[600px] pr-2">
        {data.questions.map((q, idx) => (
          <motion.div 
            key={q.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white/5 p-6 rounded-2xl border border-white/10"
          >
            <h4 className="font-bold text-white mb-4 text-lg">{idx + 1}. {q.question}</h4>
            <div className="space-y-2">
              {q.options.map(opt => {
                const isSelected = answers[q.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelect(q.id, opt.id)}
                    className={`
                      w-full p-3 rounded-xl text-left font-medium transition-all flex justify-between items-center
                      ${isSelected 
                        ? (opt.isCorrect ? 'bg-green-500/20 border-2 border-green-500 text-green-300' : 'bg-red-500/20 border-2 border-red-500 text-red-300') 
                        : 'bg-black/20 hover:bg-white/10 text-gray-400 hover:text-white'}
                    `}
                  >
                    <span>{opt.text}</span>
                    {isSelected && (
                       opt.isCorrect ? <CheckCircle2 size={18} /> : <XCircle size={18} />
                    )}
                  </button>
                )
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
