import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import { Mic, Zap, Shield, Brain, Globe, Sliders, Sparkles } from 'lucide-react';
import { Feature } from '../types';
import { useRef } from 'react';

export const Features = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const features: Feature[] = [
    {
      id: '1',
      icon: 'Mic',
      title: 'Natural Voice',
      description: 'Advanced AI understands context, accents, and nuance. Speak naturally—no robotic commands required.'
    },
    {
      id: '2',
      icon: 'Zap',
      title: 'Lightning Fast',
      description: 'Optimized local processing engine executes complex workflows in milliseconds. Zero latency.'
    },
    {
      id: '3',
      icon: 'Shield',
      title: 'Privacy First',
      description: 'Your voice data never leaves your device. All processing happens locally for complete security.'
    },
    {
      id: '4',
      icon: 'Brain',
      title: 'Context Aware',
      description: 'Aura learns from your habits and adapts to your workflow, offering proactive suggestions.'
    },
    {
      id: '5',
      icon: 'Globe',
      title: 'Global Speak',
      description: 'Real-time translation and support for over 50 languages. Switch instantly mid-conversation.'
    },
    {
      id: '6',
      icon: 'Sliders',
      title: 'Custom Actions',
      description: 'Build powerful macros and automations. Connect Aura to your favorite apps and tools.'
    }
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: JSX.Element } = {
      Mic: <Mic size={24} />,
      Zap: <Zap size={24} />,
      Shield: <Shield size={24} />,
      Brain: <Brain size={24} />,
      Globe: <Globe size={24} />,
      Sliders: <Sliders size={24} />
    };
    return icons[iconName];
  };

  return (
    <section id="features" ref={sectionRef} className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />
      
      <motion.div 
        style={{ y }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ opacity }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 backdrop-blur-md rounded-full mb-8 border border-slate-800 shadow-lg"
          >
            <Sparkles size={14} className="text-cyan-400" />
            <span className="text-sm font-medium text-slate-300">Intelligence Redefined</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Capabilities that
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Empower You
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Designed for power users who demand speed, privacy, and precision. Aura is the assistant you've always wanted.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} getIcon={getIcon} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ feature, index, getIcon }: { feature: Feature; index: number; getIcon: (name: string) => JSX.Element }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      className="group relative border border-slate-800 bg-slate-900/40 backdrop-blur-sm overflow-hidden rounded-3xl hover:bg-slate-900/60 transition-colors duration-500"
    >
      {/* Hover Glow Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20" />
      </motion.div>

      <div className="relative p-8 h-full flex flex-col">
        <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/50 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-all duration-300 shadow-lg shadow-cyan-500/10 group-hover:shadow-cyan-500/30">
          {getIcon(feature.icon)}
        </div>
        
        <h3 className="mb-3 text-xl font-semibold text-slate-100 group-hover:text-cyan-100 transition-colors">
          {feature.title}
        </h3>
        
        <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
          {feature.description}
        </p>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Sparkles className="text-cyan-500/30 w-12 h-12" />
      </div>
    </motion.div>
  );
};
