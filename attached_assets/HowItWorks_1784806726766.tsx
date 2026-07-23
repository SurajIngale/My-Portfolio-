import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import { Download, Settings, Mic, ArrowRight, Sparkles } from 'lucide-react';
import { Step } from '../types';
import { useRef } from 'react';

export const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const steps: Step[] = [
    {
      id: '1',
      number: 1,
      title: 'Download & Install',
      description: 'Get Aura for your OS. Our streamlined installer sets up the local AI engine in minutes.'
    },
    {
      id: '2',
      number: 2,
      title: 'Personalize',
      description: 'Choose your wake word, voice, and connect your favorite apps for a tailored experience.'
    },
    {
      id: '3',
      number: 3,
      title: 'Just Speak',
      description: 'Start controlling your digital world naturally. No complex commands, just conversation.'
    }
  ];

  const getIcon = (number: number) => {
    const icons = [
      <Download size={28} key="download" />,
      <Settings size={28} key="settings" />,
      <Mic size={28} key="mic" />
    ];
    return icons[number - 1];
  };

  return (
    <section id="how-it-works" ref={sectionRef} className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950 pointer-events-none" />
      
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
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
            <Settings size={14} className="text-indigo-400" />
            <span className="text-sm font-medium text-slate-300">Seamless Integration</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Up and Running in
            <br />
            <span className="bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent">
              Minutes
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            We've made the complex simple. Aura installs locally and configures itself to your hardware automatically.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-800 z-0">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary-dark via-primary to-primary-dark"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
          </div>

          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} getIcon={getIcon} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transition-all duration-300"
            onClick={() => document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">Start Your Journey</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-dark via-primary to-primary-dark opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const StepCard = ({ step, index, getIcon }: { step: Step; index: number; getIcon: (n: number) => JSX.Element }) => {
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseMove={onMouseMove}
      className="group relative z-10"
    >
      <div className="h-full bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:bg-slate-900/60 transition-colors duration-500 flex flex-col items-center text-center">
        {/* Hover Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={style}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20" />
        </motion.div>

        {/* Icon Container */}
        <div className="relative mb-8">
          <div className="w-24 h-24 rounded-2xl bg-slate-800/50 flex items-center justify-center text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition-all duration-500 shadow-lg shadow-indigo-500/10 group-hover:shadow-indigo-500/40 group-hover:scale-110">
            {getIcon(step.number)}
          </div>
          <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-sm font-bold text-slate-400 group-hover:border-indigo-500 group-hover:text-indigo-400 transition-colors duration-300">
            {step.number}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-200 transition-colors">
          {step.title}
        </h3>
        <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors">
          {step.description}
        </p>

        {/* Decorative Sparkle */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Sparkles size={16} className="text-indigo-400/50" />
        </div>
      </div>
    </motion.div>
  );
};
