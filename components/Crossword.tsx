import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CrosswordClue } from '../types';

interface CrosswordProps {
  data: CrosswordClue[];
}

export const Crossword: React.FC<CrosswordProps> = ({ data }) => {
  const gridSize = 10;
  const grid = Array(gridSize).fill(null).map(() => Array(gridSize).fill(''));
  
  data.forEach(item => {
    for (let i = 0; i < item.answer.length; i++) {
      if (item.direction === 'across') {
        grid[item.row][item.col + i] = item.answer[i];
      } else {
        grid[item.row + i][item.col] = item.answer[i];
      }
    }
  });

  const [inputs, setInputs] = useState<Record<string, string>>({});

  const handleInputChange = (r: number, c: number, val: string) => {
    setInputs(prev => ({ ...prev, [`${r}-${c}`]: val.toUpperCase() }));
  };

  const isCorrect = (r: number, c: number) => {
    const key = `${r}-${c}`;
    return inputs[key] === grid[r][c];
  };

  return (
    <div className="flex flex-col xl:flex-row gap-12 items-start">
      {/* Grid Container */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="flex-1 w-full flex justify-center"
      >
        <div className="bg-black/40 p-6 rounded-3xl border border-white/10 shadow-2xl relative">
          <div className="absolute inset-0 bg-brand-500/5 blur-3xl rounded-full" />
          
          <div className="relative grid gap-1" style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}>
            {grid.map((row, rIndex) => (
              row.map((cell: string, cIndex: number) => {
                const isActive = cell !== '';
                const key = `${rIndex}-${cIndex}`;
                const clueStart = data.find(d => d.row === rIndex && d.col === cIndex);
                const correct = inputs[key] && isCorrect(rIndex, cIndex);

                if (!isActive) return <div key={`${rIndex}-${cIndex}`} className="w-8 h-8 sm:w-10 sm:h-10" />;

                return (
                  <motion.div 
                    key={`${rIndex}-${cIndex}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: (rIndex + cIndex) * 0.02 }}
                    className={`
                      relative w-8 h-8 sm:w-10 sm:h-10 border rounded-md overflow-hidden transition-all duration-300
                      ${correct 
                        ? 'bg-green-500/20 border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]' 
                        : 'bg-white/10 border-white/20 focus-within:bg-brand-500/20 focus-within:border-brand-400'}
                    `}
                  >
                    {clueStart && (
                      <span className="absolute top-0.5 left-0.5 text-[8px] font-bold text-gray-400 select-none">
                        {clueStart.number}
                      </span>
                    )}
                    <input
                      maxLength={1}
                      className={`
                        w-full h-full text-center font-black uppercase bg-transparent outline-none
                        ${correct ? 'text-green-400' : 'text-white'}
                      `}
                      onChange={(e) => handleInputChange(rIndex, cIndex, e.target.value)}
                      value={inputs[key] || ''}
                    />
                  </motion.div>
                );
              })
            ))}
          </div>
        </div>
      </motion.div>

      {/* Clues Container */}
      <div className="w-full xl:w-80 space-y-6">
        <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
           <span className="text-brand-400">#</span> CLUES
        </h3>
        
        <div className="space-y-6">
          <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-brand-500">
            <h4 className="font-bold text-brand-300 mb-3 tracking-widest text-xs uppercase">Across</h4>
            <ul className="space-y-3">
              {data.filter(d => d.direction === 'across').map(d => (
                <li key={d.id} className="text-sm text-gray-300 flex gap-2">
                  <span className="font-bold text-white bg-white/10 w-5 h-5 flex items-center justify-center rounded text-xs">{d.number}</span>
                  <span>{d.clue}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-purple-500">
            <h4 className="font-bold text-purple-300 mb-3 tracking-widest text-xs uppercase">Down</h4>
            <ul className="space-y-3">
              {data.filter(d => d.direction === 'down').map(d => (
                <li key={d.id} className="text-sm text-gray-300 flex gap-2">
                  <span className="font-bold text-white bg-white/10 w-5 h-5 flex items-center justify-center rounded text-xs">{d.number}</span>
                  <span>{d.clue}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};