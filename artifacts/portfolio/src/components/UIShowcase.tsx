import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Layout, MonitorSmartphone, Lock, LineChart, Moon, ChevronRight, ChevronLeft } from 'lucide-react';

const showcases = [
  { id: 'dashboard', label: 'Admin Dashboard', icon: Layout, color: 'text-primary', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3' },
  { id: 'landing', label: 'Landing Pages', icon: MonitorSmartphone, color: 'text-secondary', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&ixlib=rb-4.0.3' },
  { id: 'auth', label: 'Authentication', icon: Lock, color: 'text-amber-400', img: 'https://images.unsplash.com/photo-1614064641913-a530a50117a4?auto=format&fit=crop&q=80&w=2300&ixlib=rb-4.0.3' },
  { id: 'analytics', label: 'Analytics UI', icon: LineChart, color: 'text-emerald-400', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3' },
];

export function UIShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % showcases.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + showcases.length) % showcases.length);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frontend Craftsmanship</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Translating complex data and backend capabilities into intuitive, polished, and highly responsive user interfaces.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {showcases.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-full text-left flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'glass-panel border-primary/30 shadow-[0_0_20px_rgba(0,240,255,0.1)] scale-[1.02]' 
                      : 'bg-black/20 border border-white/5 hover:border-white/10 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className={`p-3 rounded-lg bg-black/40 border border-white/10 ${isActive ? item.color : 'text-muted-foreground'}`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className={`font-bold ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>{item.label}</h4>
                    <p className="text-xs font-mono text-muted-foreground mt-1 tracking-wider">View Component</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="w-full lg:w-2/3">
            <div className="glass-panel p-2 rounded-2xl border-white/10 relative">
              {/* Browser Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-black/40 border-b border-white/5 rounded-t-xl">
                <div className="w-3 h-3 rounded-full bg-destructive/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-success/80" />
                <div className="mx-auto bg-black/40 px-32 py-1.5 rounded text-xs font-mono text-muted-foreground border border-white/5 flex items-center justify-center">
                  localhost:3000
                </div>
              </div>

              {/* Browser Content */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-b-xl bg-black/50">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIdx}
                    src={showcases[activeIdx].img}
                    alt={showcases[activeIdx].label}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-lighten"
                  />
                </AnimatePresence>
                
                {/* Overlay gradient for premium feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Navigation arrows */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-10">
                <button onClick={prev} className="pointer-events-auto p-2 rounded-full glass-panel hover:bg-white/10 transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={next} className="pointer-events-auto p-2 rounded-full glass-panel hover:bg-white/10 transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
