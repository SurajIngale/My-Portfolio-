import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Monitor, Mic, Layers, Eye, Server, Zap
} from 'lucide-react';
import { Logo } from '../components/Logo';

// Problem data mapping with centered distribution
const problemData = [
  { 
    id: 1, 
    icon: Monitor, 
    title: 'Interfaces Limit Human Interaction', 
    description: 'Computers still rely on keyboards, mice, and visual navigation, making interaction slow, exclusive, and not human-first.', 
    side: 'left', 
    top: '25%', 
    left: '5%', 
    delay: 0 
  },
  { 
    id: 2, 
    icon: Mic, 
    title: 'Voice Assistants Lack System Depth', 
    description: 'Most voice assistants can talk, but cannot see the screen, control the OS, or act inside real applications.', 
    side: 'right', 
    top: '25%', 
    right: '5%', 
    delay: 0.2 
  },
  { 
    id: 3, 
    icon: Layers, 
    title: 'Context Switching Impacts Productivity', 
    description: 'Constant context switching, manual searching, and delayed help break focus and productivity.', 
    side: 'left', 
    top: '50%', 
    left: '8%', 
    delay: 0.4 
  },
  { 
    id: 4, 
    icon: Eye, 
    title: 'Assistance Without Vision Is Blind', 
    description: 'Without screen awareness and context, help systems fail to provide meaningful, real-time guidance.', 
    side: 'right', 
    top: '50%', 
    right: '8%', 
    delay: 0.6 
  },
  { 
    id: 5, 
    icon: Server, 
    title: 'No Local AI Control Layer', 
    description: 'Cloud copilots remain app-specific and disconnected from system-level control and execution.', 
    side: 'left', 
    top: '75%', 
    left: '5%', 
    delay: 0.8 
  },
  { 
    id: 6, 
    icon: Zap, 
    title: 'Thought-to-Action Is Too Slow', 
    description: 'Human intent still passes through navigation, clicks, and searches before execution.', 
    side: 'right', 
    top: '75%', 
    right: '5%', 
    delay: 1.0 
  }
];

const FloatingProblemCard: React.FC<{
  problem: typeof problemData[0];
}> = ({ problem }) => {
  const Icon = problem.icon;
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="absolute z-30"
      style={{ 
        top: problem.top, 
        left: problem.side === 'left' ? problem.left : undefined,
        right: problem.side === 'right' ? problem.right : undefined,
      }}
      initial={{ opacity: 0, x: problem.side === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: problem.delay * 0.2 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          duration: 5 + (problem.id % 3), 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: problem.delay 
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group cursor-default relative"
      >
        <motion.div 
            animate={{ 
                width: isHovered ? 340 : 280,
                backgroundColor: isHovered ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.6)'
            }}
            className={`
              relative p-5 rounded-2xl
              backdrop-blur-xl
              border border-white/10
              shadow-[0_8px_32px_rgba(0,0,0,0.3)]
              group-hover:shadow-[0_8px_32px_rgba(0,212,200,0.1)]
              transition-all duration-500
              overflow-hidden
            `}
        >
          {/* Active Border Glow */}
          <div className={`absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500`} />
          
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="flex items-start gap-4 relative z-10">
            {/* Icon Box */}
            <div className={`
              shrink-0 w-12 h-12 rounded-xl flex items-center justify-center
              bg-white/5 border border-white/10
              group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:text-primary
              transition-colors duration-500
              text-slate-400
            `}>
              <Icon className="w-6 h-6" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col justify-center min-h-[48px]">
              <h3 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors duration-300 leading-tight">
                {problem.title}
              </h3>
              
              <AnimatePresence>
                  {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="text-xs text-slate-300 leading-relaxed font-medium">
                            {problem.description}
                        </p>
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Connecting Lines Component
const ConnectingLines: React.FC = () => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0, 212, 200, 0)" />
          <stop offset="50%" stopColor="rgba(0, 212, 200, 0.4)" />
          <stop offset="100%" stopColor="rgba(0, 212, 200, 0)" />
        </linearGradient>
      </defs>
      {problemData.map((problem, i) => {
        const isLeft = problem.side === 'left';
        // Parse percentages to numbers for SVG coordinates
        const parse = (val: string) => parseFloat(val);
        
        // Adjusted start/end points for smoother curves
        const startX = isLeft ? 20 : 80; 
        const startY = parse(problem.top);
        const endX = isLeft ? 45 : 55; 
        const endY = 50;
        const cpX = isLeft ? 35 : 65;
        
        return (
          <g key={i}>
            <motion.path
              d={`M ${startX} ${startY} Q ${cpX} ${endY} ${endX} ${endY}`}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
            />
            {/* Moving Pulse Packet */}
            {/* <motion.circle
              r="2"
              fill="#00D4C8"
              style={{ 
                offsetDistance: "0%",
                offsetPath: `path("M ${startX} ${startY} Q ${cpX} ${endY} ${endX} ${endY}")` 
              }}
              animate={{ offsetDistance: "100%" }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear",
                delay: i * 0.5,
                repeatDelay: 1
              }}
            /> */}
          </g>
        );
      })}
    </svg>
  );
};

export const RobotShowcase: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <section id="robot-showcase" ref={targetRef} className="relative min-h-screen bg-black py-10 md:py-20 overflow-hidden flex items-center justify-center">
      
        <motion.div 
          style={{ opacity, scale }}
          className="relative w-[95%] h-[90vh]  max-w-[1700px] max-h-[2000px] mx-auto"
        >
          {/* Technological Borders */}
          <svg 
            className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-20"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
             <defs>
              <linearGradient id="borderGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="20%" stopColor="rgba(0, 212, 200, 0.2)" />
                <stop offset="50%" stopColor="rgba(0, 212, 200, 0.8)" />
                <stop offset="80%" stopColor="rgba(0, 212, 200, 0.2)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            {/* Left Tech Border */}
            <path d="M 50 100 L 5 100 Q 0 100 0 95 L 0 5 Q 0 0 5 0 L 30 0" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <motion.path 
                d="M 50 100 L 5 100 Q 0 100 0 95 L 0 5 Q 0 0 5 0 L 30 0" 
                fill="none" 
                stroke="url(#borderGradient)" 
                strokeWidth="2" 
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            {/* Right Tech Border */}
            <path d="M 50 100 L 95 100 Q 100 100 100 95 L 100 5 Q 100 0 95 0 L 70 0" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
             <motion.path 
                d="M 50 100 L 95 100 Q 100 100 100 95 L 100 5 Q 100 0 95 0 L 70 0" 
                fill="none" 
                stroke="url(#borderGradient)" 
                strokeWidth="2" 
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 1] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* Inner Content Container */}
          <div className="relative w-full h-full bg-black rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,200,0.08)_0%,transparent_60%)]" />

             {/* Title Overlay - TOP */}
             <div className="absolute top-4 left-0 right-0 text-center z-30 pointer-events-none">
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-black tracking-wider leading-none"
                    style={{
                        background: 'linear-gradient(to bottom, #FFFFFF, #94A3B8)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        filter: 'drop-shadow(0px 0px 30px rgba(0,212,200,0.3))'
                    }}
                >
                    WHY AURA?
                </motion.h2>
             </div>
            
            {/* Spline Robot 3D Scene */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
               <div className="relative w-full h-full flex items-center justify-center">
                  <iframe 
                    src='https://my.spline.design/nexbotrobotcharacterconcept-dnFogdApoL9C6M2nMe8in78Z/' 
                    frameBorder='0' 
                    width='100%' 
                    height='100%'
                    className="w-full h-full scale-[1.1] translate-y-20" 
                    title="AURA Robot"
                    style={{ pointerEvents: 'auto' }} 
                  />
               </div>
            </div>

            {/* Connecting Data Lines */}
            <ConnectingLines />

            {/* Floating Problem Cards */}
            <div className="absolute inset-0 pointer-events-none">
                {problemData.map((problem) => (
                    <div key={problem.id} className="pointer-events-auto">
                        <FloatingProblemCard problem={problem} />
                    </div>
                ))}
            </div>

          </div>
            <div className="sticky bottom-4 right-5 z-[9999] group cursor-pointer ml-auto w-fit">
                  <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 shadow-[0_0_15px_rgba(0,138,127,0.1)] transition-all duration-500 ease-out group-hover:scale-105 group-hover:bg-slate-900/80 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,138,127,0.4)]">
                    <div className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                      <Logo className="w-9 h-9 drop-shadow-[0_0_8px_rgba(0,138,127,0.5)]" />
                    </div>
                    <span className="text-lg font-bold tracking-[0.2em] bg-gradient-to-r from-white via-primary-light to-slate-300 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(0,138,127,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(0,138,127,0.8)] group-hover:tracking-[0.25em]">
                      Desirability
                    </span>
                  </div>
                </div>
        </motion.div>
        
    </section>
  );
};