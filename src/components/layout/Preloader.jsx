import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] bg-ink flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Animated Background Shapes for 3D vibes */}
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute w-[150vw] h-[150vw] border-[0.5px] border-chalk/10 rounded-full"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1.2, 1, 1.2],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-[120vw] h-[120vw] border-[0.5px] border-chalk/5 rounded-full"
          />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text- chalk text-7xl md:text-9xl tracking-tighter mb-2">SHOP.CO</h1>
              <div className="flex items-center justify-center gap-4 text-[10px] font-bold tracking-[0.5em] text-smoke uppercase">
                <span>The Collection</span>
                <span className="w-8 h-px bg-smoke/20" />
                <span>2026</span>
              </div>
            </motion.div>

            <div className="w-64 h-[1px] bg-chalk/10 mx-auto relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-sale-neon"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            
            <motion.div 
              className="mt-4 font-mono text-[10px] text-smoke"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {Math.round(progress)}% — CALIBRATING AESTHETICS
            </motion.div>
          </div>

          {/* 3D Storytelling Subtext */}
          <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
             <div className="max-w-xs">
                <p className="text-[10px] text-smoke leading-relaxed uppercase tracking-widest font-bold">
                   Refining the digital fabric of modern elegance. Every stitch matters.
                </p>
             </div>
             <div className="text-right">
                <p className="text-[10px] text-chalk font-display tracking-widest">EST. 2026 / GLOBAL</p>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
