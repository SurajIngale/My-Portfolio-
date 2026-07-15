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
    { value: 25, suffix: '+', label: 'REST APIs Developed', color: 'text-primary', glow: 'glow-shadow-cyan' },
    { value: 10, suffix: '+', label: 'Production Features Delivered', color: 'text-secondary', glow: 'glow-shadow-violet' },
    { value: 99, suffix: '%', label: 'API Reliability', color: 'text-emerald-400', glow: '' },
    { value: 100, suffix: '+', label: 'Bugs & Issues Resolved', color: 'text-amber-400', glow: '' }
  ];

  return (
    <section className="py-24 relative border-y border-white/5 bg-black/20">
      <div className="absolute inset-0 ambient-glow opacity-50 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-2">System Metrics</h2>
          <p className="text-muted-foreground text-sm">Real-time engineering dashboard</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`hud-panel glass-panel-strong p-6 rounded-2xl border-white/5 hover:border-white/10 transition-all duration-300 hover:scale-105 ${m.glow}`}
            >
              <Counter end={m.value} suffix={m.suffix} />
              <p className={`text-sm font-mono mt-2 uppercase tracking-wider ${m.color}`}>{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
