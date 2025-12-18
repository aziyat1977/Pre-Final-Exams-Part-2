import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SnakeLevel } from '../types';
import { Play, RefreshCw, Trophy } from 'lucide-react';

interface SnakeGameProps {
  levels: SnakeLevel[];
}

const GRID_SIZE = 20;
const CELL_SIZE = 20;

export const SnakeGame: React.FC<SnakeGameProps> = ({ levels }) => {
  const [levelIdx, setLevelIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [direction, setDirection] = useState({ x: 0, y: -1 });
  const [items, setItems] = useState<{ x: number; y: number; text: string; type: 'target' | 'decoy' }[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const currentLevel = levels[levelIdx];

  const spawnItems = () => {
    if (!currentLevel) return;
    const newItems = [];
    newItems.push({
      x: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1,
      y: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1,
      text: currentLevel.target,
      type: 'target' as const
    });
    currentLevel.decoys.forEach(decoy => {
      newItems.push({
        x: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1,
        y: Math.floor(Math.random() * (GRID_SIZE - 2)) + 1,
        text: decoy,
        type: 'decoy' as const
      });
    });
    setItems(newItems);
  };

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection({ x: 0, y: -1 });
    setGameOver(false);
    setWin(false);
    setIsPlaying(true);
    spawnItems();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp': if (direction.y === 0) setDirection({ x: 0, y: -1 }); break;
      case 'ArrowDown': if (direction.y === 0) setDirection({ x: 0, y: 1 }); break;
      case 'ArrowLeft': if (direction.x === 0) setDirection({ x: -1, y: 0 }); break;
      case 'ArrowRight': if (direction.x === 0) setDirection({ x: 1, y: 0 }); break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (!isPlaying || gameOver || win) return;
    const moveSnake = (time: number) => {
      if (time - lastTimeRef.current > 150) { // Slightly faster
        setSnake(prev => {
          const head = { x: prev[0].x + direction.x, y: prev[0].y + direction.y };
          
          if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
            setGameOver(true);
            return prev;
          }
          if (prev.some(seg => seg.x === head.x && seg.y === head.y)) {
            setGameOver(true);
            return prev;
          }

          const hitItem = items.find(i => Math.abs(i.x - head.x) < 1 && Math.abs(i.y - head.y) < 1);
          if (hitItem) {
            if (hitItem.type === 'target') {
              if (levelIdx < levels.length - 1) {
                setLevelIdx(l => l + 1);
                resetGame();
                return [{ x: 10, y: 10 }];
              } else {
                setWin(true);
                return prev;
              }
            } else {
              setGameOver(true);
              return prev;
            }
          }
          return [head, ...prev.slice(0, prev.length - 1)];
        });
        lastTimeRef.current = time;
      }
      requestRef.current = requestAnimationFrame(moveSnake);
    };
    requestRef.current = requestAnimationFrame(moveSnake);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [isPlaying, gameOver, win, direction, items, levelIdx]);

  // Render Canvas
  useEffect(() => {
    const ctx = canvasRef.current?.getContext('2d');
    if (!ctx) return;
    
    // Cyberpunk Grid
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE);
    
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 1;
    for(let i=0; i<=GRID_SIZE; i++) {
        ctx.beginPath(); ctx.moveTo(i*CELL_SIZE, 0); ctx.lineTo(i*CELL_SIZE, GRID_SIZE*CELL_SIZE); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, i*CELL_SIZE); ctx.lineTo(GRID_SIZE*CELL_SIZE, i*CELL_SIZE); ctx.stroke();
    }

    // Items
    items.forEach(item => {
      ctx.fillStyle = item.type === 'target' ? '#4ade80' : '#f43f5e';
      ctx.shadowBlur = 10;
      ctx.shadowColor = item.type === 'target' ? '#4ade80' : '#f43f5e';
      ctx.beginPath();
      ctx.arc(item.x * CELL_SIZE + CELL_SIZE/2, item.y * CELL_SIZE + CELL_SIZE/2, CELL_SIZE/2 - 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
      
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(item.text, item.x * CELL_SIZE + CELL_SIZE/2, item.y * CELL_SIZE - 6);
    });

    // Snake
    ctx.fillStyle = '#38bdf8';
    ctx.shadowBlur = 15;
    ctx.shadowColor = '#0ea5e9';
    snake.forEach((seg, idx) => {
      ctx.fillStyle = idx === 0 ? '#ffffff' : '#38bdf8';
      ctx.fillRect(seg.x * CELL_SIZE + 2, seg.y * CELL_SIZE + 2, CELL_SIZE - 4, CELL_SIZE - 4);
    });
    ctx.shadowBlur = 0;

  }, [snake, items]);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-black/50 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
        {/* CRT Scanline effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none z-10" style={{ backgroundSize: '100% 4px' }} />
        
        <div className="mb-6 text-center z-20">
          <h3 className="text-brand-400 font-black text-2xl tracking-widest uppercase mb-1 drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]">
             GRAMMAR SNAKE
          </h3>
          <p className="text-gray-400 text-sm font-mono">{currentLevel ? currentLevel.prompt : 'MISSION COMPLETE'}</p>
        </div>
        
        <div className="relative z-20">
            <canvas 
                ref={canvasRef} 
                width={GRID_SIZE * CELL_SIZE} 
                height={GRID_SIZE * CELL_SIZE}
                className="bg-gray-900 rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.5)] border-2 border-brand-500/30"
            />
            
            <AnimatePresence>
                {(!isPlaying || gameOver || win) && (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }} 
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center backdrop-blur-sm rounded-lg"
                    >
                        {win ? (
                            <div className="text-center">
                                <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-bounce" />
                                <h2 className="text-3xl text-white font-black mb-6">YOU WON!</h2>
                                <button onClick={() => { setLevelIdx(0); resetGame(); }} className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
                                    <RefreshCw size={20} /> REPLAY
                                </button>
                            </div>
                        ) : gameOver ? (
                            <div className="text-center">
                                <h2 className="text-4xl text-red-500 font-black mb-2 glitch-text">GAME OVER</h2>
                                <button onClick={resetGame} className="mt-6 flex items-center gap-2 bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                                    <RefreshCw size={20} /> TRY AGAIN
                                </button>
                            </div>
                        ) : (
                            <button onClick={resetGame} className="flex items-center gap-3 bg-brand-500 hover:bg-brand-400 text-white px-10 py-4 rounded-full font-black text-xl shadow-[0_0_20px_rgba(14,165,233,0.5)] hover:scale-110 transition-transform">
                                <Play size={28} fill="currentColor" /> START
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
        <div className="mt-6 text-gray-500 text-xs font-mono border border-white/10 px-4 py-2 rounded-full">
           CONTROLS: ARROW KEYS
        </div>
    </div>
  );
};