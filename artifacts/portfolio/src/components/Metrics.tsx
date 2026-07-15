import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
      if (inView) {
        let startTime: number;
        let animationFrame: number;

        const update = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
          
          const easeProgress = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeProgress * end));

          if (progress < 1) {
            animationFrame = requestAnimationFrame(update);
          }
        };

        animationFrame = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationFrame);
      }
      return () => {};
  }, [inView, end, duration]);

  return (
    <div ref={nodeRef} className="text-4xl md:text-5xl font-bold font-mono text-foreground tracking-tight">
      {count}{suffix}
    </div>
  );
}

export function Metrics() {
  const metrics = [
    { value: 25, suffix: '+', label: 'REST APIs Developed', color: 'text-primary' },
    { value: 10, suffix: '+', label: 'Production Features Delivered', color: 'text-secondary' },
    { value: 99, suffix: '%', label: 'API Reliability', color: 'text-emerald-400' },
    { value: 100, suffix: '+', label: 'Bugs & Issues Resolved', color: 'text-amber-400' }
  ];

  return (
    <section className="py-24 relative border-y border-white/5 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          
          {metrics.map((m, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl border-white/5 hover:border-white/10 transition-colors">
              <Counter end={m.value} suffix={m.suffix} />
              <p className={`text-sm font-mono mt-2 uppercase tracking-wider ${m.color}`}>{m.label}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
