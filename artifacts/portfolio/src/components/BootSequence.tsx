import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  const logs = [
    "[SYSTEM] Initiating boot sequence...",
    "[NETWORK] Connecting to distributed grid...",
    "[DATABASE] Mounting primary datastores (PostgreSQL, Redis)...",
    "[CACHE] Warming up edge caches...",
    "[SERVICES] 14/14 Microservices healthy.",
    "[AUTH] Validating root access...",
    "Access Granted. Welcome, Engineer."
  ];

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const advanceStep = () => {
      setStep((prev) => {
        if (prev < logs.length - 1) {
          timeout = setTimeout(advanceStep, Math.random() * 400 + 200);
          return prev + 1;
        } else {
          timeout = setTimeout(() => {
            onComplete();
          }, 800);
          return prev;
        }
      });
    };
    
    timeout = setTimeout(advanceStep, 500);
    
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-[200] bg-background flex flex-col items-start justify-end p-8 md:p-16 font-mono text-sm md:text-base text-primary/80 overflow-hidden"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-screen pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="max-w-3xl w-full z-10 space-y-2">
        <AnimatePresence>
          {logs.slice(0, step + 1).map((log, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${index === logs.length - 1 ? 'text-success font-bold mt-8' : ''}`}
            >
              <span className="opacity-50 mr-2">{new Date().toISOString().split('T')[1].slice(0, 8)}</span>
              {log}
            </motion.div>
          ))}
        </AnimatePresence>
        <motion.div 
          animate={{ opacity: [1, 0] }} 
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="w-2 h-4 bg-primary inline-block mt-2"
        />
      </div>
    </motion.div>
  );
}
