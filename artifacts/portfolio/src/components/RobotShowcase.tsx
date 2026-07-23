import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Server, Globe, Database, Zap, GitBranch, Shield,
} from 'lucide-react';

// ─── Capability cards mapped to the six floating card positions ───────────────
const capabilities = [
  {
    id: 1,
    icon: Server,
    title: 'API & Microservices',
    description: 'Designing high-throughput REST and GraphQL APIs with Node.js, Go, and Express — built to scale horizontally.',
    side: 'left',
    top: '20%',
    left: '4%',
    delay: 0,
  },
  {
    id: 2,
    icon: Globe,
    title: 'Frontend Engineering',
    description: 'Crafting pixel-perfect, accessible UIs in React and Next.js — from design systems to 60 fps animations.',
    side: 'right',
    top: '20%',
    right: '4%',
    delay: 0.2,
  },
  {
    id: 3,
    icon: Database,
    title: 'Database Architecture',
    description: 'Modelling relational schemas in PostgreSQL and Redis caching layers for sub-millisecond read latency.',
    side: 'left',
    top: '50%',
    left: '6%',
    delay: 0.4,
  },
  {
    id: 4,
    icon: Zap,
    title: 'Real-time Systems',
    description: 'Building WebSocket event pipelines and Kafka-backed message queues for live data at massive scale.',
    side: 'right',
    top: '50%',
    right: '6%',
    delay: 0.6,
  },
  {
    id: 5,
    icon: GitBranch,
    title: 'DevOps & CI/CD',
    description: 'Automating infrastructure with Terraform, Docker, and GitHub Actions across multi-region cloud deployments.',
    side: 'left',
    top: '78%',
    left: '4%',
    delay: 0.8,
  },
  {
    id: 6,
    icon: Shield,
    title: 'Security & Reliability',
    description: 'Embedding auth (OAuth2/JWT), rate-limiting, and observability (Prometheus, Datadog) from day one.',
    side: 'right',
    top: '78%',
    right: '4%',
    delay: 1.0,
  },
];

// ─── Single floating card ─────────────────────────────────────────────────────
function FloatingCapabilityCard({ cap }: { cap: typeof capabilities[0] }) {
  const Icon = cap.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="absolute z-30"
      style={{
        top: cap.top,
        left: cap.side === 'left' ? cap.left : undefined,
        right: cap.side === 'right' ? cap.right : undefined,
      }}
      initial={{ opacity: 0, x: cap.side === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: cap.delay * 0.2 }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5 + (cap.id % 3), repeat: Infinity, ease: 'easeInOut', delay: cap.delay }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="group cursor-default relative"
      >
        <motion.div
          animate={{
            width: hovered ? 300 : 250,
            backgroundColor: hovered ? 'rgba(0,10,20,0.95)' : 'rgba(0,10,20,0.6)',
          }}
          className="relative p-5 rounded-2xl backdrop-blur-xl border border-white/10
            shadow-[0_8px_32px_rgba(0,0,0,0.3)]
            group-hover:shadow-[0_8px_32px_rgba(0,240,255,0.12)]
            transition-all duration-500 overflow-hidden"
        >
          {/* Border glow */}
          <div className="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-500" />
          {/* Ambient fill */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="flex items-start gap-4 relative z-10">
            {/* Icon box */}
            <div className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center
              bg-white/5 border border-white/10
              group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:text-primary
              transition-colors duration-500 text-slate-400">
              <Icon className="w-5 h-5" />
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors duration-300 leading-tight">
                {cap.title}
              </h3>
              <AnimatePresence>
                {hovered && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="text-xs text-slate-300 leading-relaxed font-medium overflow-hidden"
                  >
                    {cap.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// ─── SVG lines connecting cards to the robot centre ──────────────────────────
function ConnectingLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="capLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="rgba(0,240,255,0)" />
          <stop offset="50%"  stopColor="rgba(0,240,255,0.45)" />
          <stop offset="100%" stopColor="rgba(0,240,255,0)" />
        </linearGradient>
      </defs>
      {capabilities.map((cap, i) => {
        const isLeft = cap.side === 'left';
        const startY = parseFloat(cap.top);
        const startX = isLeft ? 22 : 78;
        const endX   = isLeft ? 46 : 54;
        const cpX    = isLeft ? 36 : 64;
        return (
          <motion.path
            key={i}
            d={`M ${startX} ${startY} Q ${cpX} 50 ${endX} 50`}
            fill="none"
            stroke="url(#capLineGrad)"
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
          />
        );
      })}
    </svg>
  );
}

// ─── Animated corner-bracket borders (from Aura) ─────────────────────────────
function TechBorders() {
  return (
    <svg
      className="absolute inset-0 w-full h-full overflow-visible pointer-events-none z-20"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="borderGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%"   stopColor="transparent" />
          <stop offset="20%"  stopColor="rgba(0,240,255,0.15)" />
          <stop offset="50%"  stopColor="rgba(0,240,255,0.7)" />
          <stop offset="80%"  stopColor="rgba(0,240,255,0.15)" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      {/* Left bracket */}
      <path d="M 50 100 L 5 100 Q 0 100 0 95 L 0 5 Q 0 0 5 0 L 30 0"
        fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <motion.path
        d="M 50 100 L 5 100 Q 0 100 0 95 L 0 5 Q 0 0 5 0 L 30 0"
        fill="none" stroke="url(#borderGrad)" strokeWidth="2" vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />
      {/* Right bracket */}
      <path d="M 50 100 L 95 100 Q 100 100 100 95 L 100 5 Q 100 0 95 0 L 70 0"
        fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <motion.path
        d="M 50 100 L 95 100 Q 100 100 100 95 L 100 5 Q 100 0 95 0 L 70 0"
        fill="none" stroke="url(#borderGrad)" strokeWidth="2" vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />
    </svg>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────
export function RobotShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start end', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [0, 1, 1, 0]);
  const scale   = useTransform(scrollYProgress, [0, 0.1, 0.85, 1], [0.95, 1, 1, 0.95]);

  return (
    <section
      id="robot"
      ref={targetRef}
      className="relative min-h-screen bg-black py-10 md:py-20 overflow-hidden flex items-center justify-center"
    >
      <motion.div
        style={{ opacity, scale }}
        className="relative w-[95%] h-[90vh] max-w-[1700px] max-h-[2000px] mx-auto"
      >
        {/* Animated corner brackets */}
        <TechBorders />

        {/* Inner card */}
        <div className="relative w-full h-full bg-black rounded-[40px] overflow-hidden shadow-2xl border border-white/5">
          {/* Radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.07)_0%,transparent_60%)]" />

          {/* Title */}
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
                filter: 'drop-shadow(0px 0px 30px rgba(0,240,255,0.35))',
              }}
            >
              FULL STACK
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-2 text-xs font-mono tracking-[0.4em] uppercase text-primary/70"
            >
              hover the cards · interact with the robot
            </motion.p>
          </div>

          {/* Spline Robot — iframe embed, fully interactive */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <iframe
              src="https://my.spline.design/nexbotrobotcharacterconcept-dnFogdApoL9C6M2nMe8in78Z/"
              frameBorder="0"
              width="100%"
              height="100%"
              className="w-full h-full scale-[1.1] translate-y-20"
              title="Full Stack Robot"
              style={{ pointerEvents: 'auto' }}
            />
          </div>

          {/* SVG connecting lines */}
          <ConnectingLines />

          {/* Floating capability cards */}
          <div className="absolute inset-0 pointer-events-none">
            {capabilities.map((cap) => (
              <div key={cap.id} className="pointer-events-auto">
                <FloatingCapabilityCard cap={cap} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
