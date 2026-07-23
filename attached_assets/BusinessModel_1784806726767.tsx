import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import {
  Users, Building2, Zap, Eye, Shield, Layers,
  CheckCircle2, Sparkles, TrendingUp, DollarSign,
  Cpu, Globe, Workflow, Mic
} from 'lucide-react';
import { useMotionTemplate } from 'framer-motion';

export const BusinessModel: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  // Track if section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="business-model"
      ref={containerRef}
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-black to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 backdrop-blur-md rounded-full mb-8 border border-slate-800"
          >
            <TrendingUp size={14} className="text-primary-light" />
            <span className="text-sm font-medium text-slate-300">Sustainable Growth</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Built for Real Work.
            <br />
            <span className="bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
              Priced for Real Value.
            </span>
          </motion.h2>
        </div>

        {/* Part 1: Target Audience */}
        <TargetAudience />

        {/* Part 2: Business Model & Revenue */}
        <BusinessModelCards />



        {/* Part 4: Affordability & Market Readiness */}
        <AffordabilityMarket />

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-32"
        >
          <p className="text-3xl md:text-4xl font-light text-slate-300 max-w-3xl mx-auto">
            A business model built on{' '}
            <span className="font-bold text-white">real value</span>, not speculation.
          </p>
        </motion.div>
      </motion.div>

      {/* Fixed Criterion Label - Only visible when section is in view */}
      <AnimatePresence>
        {isInView && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-5 z-[9999] group cursor-pointer"
          >
            <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-[0_0_15px_rgba(0,138,127,0.1)] transition-all duration-500 ease-out group-hover:scale-105 group-hover:bg-slate-900/90 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,138,127,0.4)]">
              <div className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                <TrendingUp className="w-6 h-6 text-primary-light drop-shadow-[0_0_8px_rgba(0,138,127,0.5)]" />
              </div>
              <span className="text-lg font-bold tracking-[0.2em] bg-gradient-to-r from-white via-primary-light to-slate-300 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(0,138,127,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(0,138,127,0.8)] group-hover:tracking-[0.25em]">
                Viability
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// Part 1: Target Audience with Expanding Rings
const TargetAudience: React.FC = () => {
  const [hoveredRing, setHoveredRing] = useState<'primary' | 'secondary' | null>(null);

  // Position offsets for the central text - Adjust these to move it
  const centerTextX = "50%"; // horizontal offset
  const centerTextY = "50%"; // vertical offset

  return (
    <div className="mb-40 -mt-24 relative">


      <div className="relative h-[600px] flex items-center justify-center">
        {/* Central Aura Core Text */}
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          whileInView={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            translateX: `calc(-50% + ${centerTextX})`,
            translateY: `calc(-50% + ${centerTextY})`
          }}
          className="absolute z-20 top-1/2 left-1/2"
        >
          <div className="relative group">
            <motion.h3
              className="text-white flex flex-col items-center leading-none uppercase"
              initial={{ filter: 'blur(10px)', opacity: 0 }}
              whileInView={{ filter: 'blur(0px)', opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs md:text-sm font-bold tracking-[0.4em] text-slate-500 mb-2">Who</span>
              <span className="text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent italic leading-[0.8]">Aura</span>
              <span className="text-xs md:text-sm font-bold tracking-[0.4em] text-slate-500 mt-2">Serves</span>
            </motion.h3>
            <div className="absolute inset-x-0 -bottom-2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl -z-10 animate-pulse" />
          </div>
        </motion.div>

        {/* Primary Ring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, x: "-50%", y: "-50%" }}
          whileInView={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          onMouseEnter={() => setHoveredRing('primary')}
          onMouseLeave={() => setHoveredRing(null)}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] z-20 flex items-center justify-center rounded-full"
        >
          <div className={`absolute inset-0 rounded-full border-2 transition-all duration-500 ${
            hoveredRing === 'primary'
              ? 'border-primary shadow-[0_0_60px_rgba(0,212,200,0.3)] scale-105'
              : 'border-primary/30'
          }`}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/5 to-transparent" />
          </div>

          {/* Primary User Cards */}
          <PrimaryUserCard
            icon={<Cpu className="w-6 h-6" />}
            title="Developers"
            angle={270}
            isActive={hoveredRing === 'primary'}
          />
          <PrimaryUserCard
            icon={<Workflow className="w-6 h-6" />}
            title="Analysts"
            angle={0}
            isActive={hoveredRing === 'primary'}
          />
          <PrimaryUserCard
            icon={<Sparkles className="w-6 h-6" />}
            title="Creators"
            angle={90}
            isActive={hoveredRing === 'primary'}
          />
          <PrimaryUserCard
            icon={<Zap className="w-6 h-6" />}
            title="Power Users"
            angle={180}
            isActive={hoveredRing === 'primary'}
          />
        </motion.div>

        {/* Secondary Ring */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0, x: "-50%", y: "-50%" }}
          whileInView={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          onMouseEnter={() => setHoveredRing('secondary')}
          onMouseLeave={() => setHoveredRing(null)}
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] z-10 flex items-center justify-center rounded-full"
        >
          <div className={`absolute inset-0 rounded-full border-2 border-dashed transition-all duration-500 ${
            hoveredRing === 'secondary'
              ? 'border-blue-400 shadow-[0_0_60px_rgba(59,130,246,0.2)] scale-105'
              : 'border-slate-700'
          }`}>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/5 to-transparent" />
          </div>

          {/* Secondary User Cards */}
          <SecondaryUserCard
            icon={<Building2 className="w-6 h-6" />}
            title="Enterprises"
            angle={320}
            isActive={hoveredRing === 'secondary'}
          />
          <SecondaryUserCard
            icon={<Shield className="w-6 h-6" />}
            title="IT Teams"
            angle={50}
            isActive={hoveredRing === 'secondary'}
          />
          <SecondaryUserCard
            icon={<Users className="w-6 h-6" />}
            title="Accessibility Users"
            angle={130}
            isActive={hoveredRing === 'secondary'}
          />
        </motion.div>
      </div>

      {/* Description Overlays - Anchored safely to avoid hover flickers */}
      <AnimatePresence>
        {hoveredRing === 'primary' && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="absolute top-1/2 -translate-y-1/2 left-4 md:-left-20 lg:-left-40 xl:-left-20 z-40 max-w-[260px] md:max-w-xs p-6 bg-slate-900/90 backdrop-blur-2xl border border-primary/30 rounded-2xl shadow-2xl pointer-events-none"
          >
            <p className="text-primary-light font-bold text-xl mb-2">Primary Users</p>
            <p className="text-slate-300">Developers, Analysts, and Creators who spend 6–10 hours daily on computers.</p>
            <p className="text-primary-light/60 mt-2 text-sm">Focus: Speed and flow.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hoveredRing === 'secondary' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-1/2 -translate-y-1/2 right-4 md:-right-20 lg:-right-20 xl:-right-20 z-40 text-right max-w-[260px] md:max-w-xs p-6 bg-slate-900/90 backdrop-blur-2xl border border-blue-500/30 rounded-2xl shadow-2xl pointer-events-none"
          >
            <p className="text-blue-400 font-bold text-xl mb-2">Empowering Users</p>
            <p className="text-slate-300">Enterprises and individuals requiring inclusive, voice-first AI for accessible system-level control.</p>
            <p className="text-blue-400/60 mt-2 text-sm">Focus: Inclusion & Accessibility.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PrimaryUserCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  angle: number;
  isActive: boolean;
}> = ({ icon, title, angle, isActive }) => {
  const radius = 50; // percentage
  const rad = (angle * Math.PI) / 180;
  const x = 50 + radius * Math.cos(rad);
  const y = 50 + radius * Math.sin(rad);

  return (
    <motion.div
      initial={{ x: "-50%", y: "-50%" }}
      animate={{
        scale: isActive ? 1.1 : 1,
        x: "-50%",
        y: isActive ? "calc(-50% - 10px)" : "-50%"
      }}
      style={{
        left: `${x}%`,
        top: `${y}%`
      }}
      className="absolute z-30"
    >
      <div className={`flex flex-col items-center gap-2 p-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
        isActive
          ? 'bg-primary/20 border-primary shadow-[0_0_30px_rgba(0,212,200,0.3)]'
          : 'bg-slate-900/60 border-slate-800'
      }`}>
        <div className={`p-3 rounded-xl transition-colors ${
          isActive ? 'bg-primary text-white' : 'bg-slate-800 text-primary-light'
        }`}>
          {icon}
        </div>
        <span className="text-sm font-medium text-white whitespace-nowrap">{title}</span>
      </div>
    </motion.div>
  );
};

const SecondaryUserCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  angle: number;
  isActive: boolean;
}> = ({ icon, title, angle, isActive }) => {
  const radius = 50; // percentage
  const rad = (angle * Math.PI) / 180;
  const x = 50 + radius * Math.cos(rad);
  const y = 50 + radius * Math.sin(rad);

  return (
    <motion.div
      initial={{ x: "-50%", y: "-50%" }}
      animate={{
        scale: isActive ? 1.1 : 1,
        x: "-50%",
        y: isActive ? "calc(-50% - 10px)" : "-50%"
      }}
      style={{
        left: `${x}%`,
        top: `${y}%`
      }}
      className="absolute z-30"
    >
      <div className={`flex flex-col items-center gap-2 p-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
        isActive
          ? 'bg-blue-500/20 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.3)]'
          : 'bg-slate-900/60 border-slate-800'
      }`}>
        <div className={`p-3 rounded-xl transition-colors ${
          isActive ? 'bg-blue-500 text-white' : 'bg-slate-800 text-blue-400'
        }`}>
          {icon}
        </div>
        <span className="text-sm font-medium text-white whitespace-nowrap">{title}</span>
      </div>
    </motion.div>
  );
};

// Part 2: Business Model Cards
const BusinessModelCards: React.FC = () => {
  const cards = [
    {
      id: 'free',
      icon: <Eye className="w-8 h-8" />,
      title: 'Free',
      subtitle: 'Experience Aura',
      description: 'Limited access to explore core capabilities',
      features: ['Basic voice commands', 'Screen awareness', 'Limited daily usage', 'Community support'],
      gradient: 'from-slate-700 to-slate-800',
      iconBg: 'bg-slate-700'
    },
    {
      id: 'pro',
      icon: <Zap className="w-8 h-8" />,
      title: 'Pro',
      subtitle: 'Own Your Workflow',
      description: 'Full voice + vision + actions',
      features: ['Unlimited commands', 'Advanced context memory', 'Multi-app automation', 'Priority support', 'Early access features'],
      gradient: 'from-primary to-primary-dark',
      iconBg: 'bg-primary',
      featured: true
    },
    {
      id: 'enterprise',
      icon: <Building2 className="w-8 h-8" />,
      title: 'Enterprise',
      subtitle: 'Govern Intelligence at Scale',
      description: 'Per-seat licensing, policies, audit',
      features: ['Custom AI training', 'SSO & admin controls', 'Audit logs', 'SLA guarantees', 'Dedicated support'],
      gradient: 'from-blue-700 to-indigo-800',
      iconBg: 'bg-blue-600'
    }
  ];

  return (
    <div className="mb-40">
      <div className="text-center mb-16">
         <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-6xl font-bold text-white text-center mb-8"
      >Invest in Your
            <br />
            <span className="bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
              Productivity
            </span>
          </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-400 max-w-4xl mx-auto"
        >
          Flexible plans designed to grow with your needs, from individual developers to global enterprises.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {cards.map((card, index) => (
          <PricingCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </div>
  );
};

const PricingCard: React.FC<{ card: any; index: number }> = ({ card, index }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const spotlightImage = useMotionTemplate`radial-gradient(400px at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.08), transparent)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={onMouseMove}
      className={`group relative flex flex-col h-full ${card.featured ? 'md:-mt-8 md:mb-8 z-10' : ''}`}
    >
      <div className={`h-full bg-slate-900/40 backdrop-blur-md border rounded-[2.5rem] p-8 hover:bg-slate-900/60 transition-all duration-500 flex flex-col relative overflow-hidden ${
        card.featured 
          ? 'border-primary/50 shadow-[0_0_50px_-12px_rgba(0,212,200,0.3)]' 
          : 'border-slate-800'
      }`}>
        
        {/* Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
          style={{ backgroundImage: spotlightImage }}
        />

        {card.featured && (
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary-light to-primary-dark" />
        )}

        {card.featured && (
          <div className="absolute top-8 right-8">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary/10 text-primary-light text-xs font-black uppercase tracking-widest rounded-full border border-primary/20 shadow-lg">
              <Sparkles size={12} className="animate-pulse" /> Popular
            </span>
          </div>
        )}

        <div className="mb-10 relative z-10">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-slate-800/80 border border-white/5 group-hover:border-primary/30 transition-all duration-500 shadow-2xl`}>
            <div className="text-primary-light group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
              {card.icon}
            </div>
          </div>

          <h3 className="text-3xl font-black text-white mb-2 tracking-tighter">{card.title}</h3>
          <p className="text-primary-light/90 font-bold text-sm mb-4 uppercase tracking-widest">{card.subtitle}</p>
          <p className="text-slate-400 text-sm leading-relaxed min-h-[48px]">
            {card.description}
          </p>
        </div>

        <div className="relative z-10 flex-1 space-y-4 mb-10">
          {card.features.map((feature: string, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                card.featured ? 'bg-primary/20 text-primary-light' : 'bg-slate-800 text-slate-500'
              }`}>
                <CheckCircle2 className="w-3 h-3" />
              </div>
              <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{feature}</span>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`relative z-10 w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all duration-300 ${
            card.featured 
              ? 'bg-primary text-slate-950 hover:bg-primary-light shadow-[0_20px_40px_-10px_rgba(0,212,200,0.4)]' 
              : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
          }`}
        >
          {card.id === 'enterprise' ? 'Contact Sales' : 'Get Started Now'}
        </motion.button>
      </div>
    </motion.div>
  );
};



// Part 4: Affordability & Market Readiness
const AffordabilityMarket: React.FC = () => {
  const affordability = [
    { icon: <Cpu className="w-6 h-6" />, title: 'Runs on Existing Hardware', desc: 'No expensive upgrades required. Aura is optimized for standard modern laptops and desktops.' },
    { icon: <Zap className="w-6 h-6" />, title: 'Optimized Resource Allocation', desc: 'Intelligent AI routing balances local computing with cloud power to keep costs predictable.' },
    { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Immediate ROI', desc: 'Automating repetitive workflows saves an average of 12 hours per week for power users.' }
  ];

  const marketReadiness = [
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Validated Market Demand', desc: "With over 100M+ weekly active AI users globally, the preference for AI-driven workflows is clear." },
    { icon: <Globe className="w-6 h-6" />, title: 'Remote-First Paradigm', desc: 'Distributed teams require toolsets that bridge the gap between communication and execution.' },
    { icon: <Shield className="w-6 h-6" />, title: 'Proven Vision Models', desc: 'Multimodal AI has reached institutional maturity, reliably handling screen analysis in real-time.' }
  ];

  return (
    <div className="py-2 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <DollarSign className="w-4 h-4 text-primary-light" />
            <span className="text-sm font-bold text-primary-light uppercase tracking-wider">Affordability</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Scale Without <span className="text-primary-light">Barriers.</span></h3>
          <div className="grid gap-4">
            {affordability.map((item, index) => (
              <GlassCard key={index} item={item} color="primary" delay={index * 0.1} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
            <TrendingUp className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-bold text-blue-400 uppercase tracking-wider">Market Readiness</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">The Future is <span className="text-blue-400">Arrived.</span></h3>
          <div className="grid gap-4">
            {marketReadiness.map((item, index) => (
              <GlassCard key={index} item={item} color="blue" delay={index * 0.1 + 0.3} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const GlassCard = ({ item, color, delay }: { item: any, color: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: color === 'primary' ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="group relative p-6 rounded-3xl bg-slate-900/30 border border-slate-800 hover:bg-slate-900/50 hover:border-white/10 transition-all duration-300 overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700`} />
    <div className="relative z-10 flex gap-6 items-start">
      <div className={`p-4 rounded-2xl bg-slate-800 border border-white/5 text-${color === 'primary' ? 'primary-light' : 'blue-400'} group-hover:scale-110 group-hover:bg-${color}-500 group-hover:text-white transition-all duration-500 shadow-xl`}>
        {item.icon}
      </div>
      <div>
        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors">{item.title}</h4>
        <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
      </div>
    </div>
  </motion.div>
);
