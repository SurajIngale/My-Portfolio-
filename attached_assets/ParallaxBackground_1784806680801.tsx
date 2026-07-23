import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

export const ParallaxBackground = () => {
  const { scrollY } = useScroll();
  const [stars, setStars] = useState<Star[]>([]);

  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-slate-950 -z-20">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: star.size,
              height: star.size,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: star.duration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Nebulas */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
           <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary-dark/40 rounded-full blur-[100px]" />
           <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-900/40 rounded-full blur-[120px]" />
        </div>
      </motion.div>
    </div>
  );
};
