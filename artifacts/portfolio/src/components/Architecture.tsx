import { motion } from 'framer-motion';
import { useState } from 'react';
import { Globe, ShieldCheck, Users, Bell, CreditCard, Database, Zap, Archive, HardDrive, Server } from 'lucide-react';

const nodes = [
  { id: 'client', label: 'Client', icon: Globe, col: 1, row: 3, desc: 'Web & Mobile clients initiating secure HTTPS requests.' },
  { id: 'gateway', label: 'API Gateway', icon: Server, col: 2, row: 3, desc: 'Rust-based edge gateway handling rate limiting, SSL termination, and routing.' },
  
  { id: 'auth', label: 'Auth Service', icon: ShieldCheck, col: 3, row: 1, desc: 'Go microservice for JWT validation and RBAC checks.' },
  { id: 'user', label: 'User Service', icon: Users, col: 3, row: 3, desc: 'Core domain service managing user profiles and preferences.' },
  { id: 'payment', label: 'Payment API', icon: CreditCard, col: 3, row: 5, desc: 'High-security PCI-compliant service for transaction processing.' },
  
  { id: 'cache', label: 'Redis Cache', icon: Zap, col: 4, row: 2, desc: 'Distributed caching layer for sub-millisecond read access.' },
  { id: 'queue', label: 'Kafka Queue', icon: Archive, col: 4, row: 4, desc: 'Distributed event log for asynchronous inter-service communication.' },
  
  { id: 'db_main', label: 'Primary DB', icon: Database, col: 5, row: 2, desc: 'PostgreSQL cluster with read-replicas for core relational data.' },
  { id: 'db_events', label: 'Event Store', icon: HardDrive, col: 5, row: 4, desc: 'Append-only event store for audit logs and historical playback.' },
  { id: 'notification', label: 'Workers', icon: Bell, col: 6, row: 4, desc: 'Background consumers processing emails, webhooks, and heavy jobs.' },
];

export function Architecture() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="architecture" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center md:justify-start gap-4">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">04.</span>
            System Architecture
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            A high-level view of a typical distributed request flow. Hover over any node to inspect its responsibility in the microservices pipeline.
          </p>
        </motion.div>

        <div className="relative w-full overflow-x-auto pb-12">
          <div className="min-w-[900px] h-[500px] relative glass-panel rounded-3xl p-8 border-white/5">
            {/* Grid background for the diagram */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none rounded-3xl" />
            
            {/* Draw connecting lines - simplified visually via CSS */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0, 240, 255, 0)" />
                  <stop offset="50%" stopColor="rgba(0, 240, 255, 0.5)" />
                  <stop offset="100%" stopColor="rgba(0, 240, 255, 0)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Client to Gateway */}
              <path d="M 120 250 L 250 250" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
              <circle cx="0" cy="0" r="3" fill="#00F0FF" filter="url(#glow)">
                <animateMotion dur="2s" repeatCount="indefinite" path="M 120 250 L 250 250" />
              </circle>

              {/* Gateway to Microservices */}
              <path d="M 330 250 L 400 250 L 400 83 L 450 83" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
              <circle cx="0" cy="0" r="3" fill="#00F0FF" filter="url(#glow)">
                <animateMotion dur="2s" begin="0.5s" repeatCount="indefinite" path="M 330 250 L 400 250 L 400 83 L 450 83" />
              </circle>

              <path d="M 330 250 L 450 250" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
              <circle cx="0" cy="0" r="3" fill="#00F0FF" filter="url(#glow)">
                <animateMotion dur="2s" begin="0.7s" repeatCount="indefinite" path="M 330 250 L 450 250" />
              </circle>

              <path d="M 330 250 L 400 250 L 400 416 L 450 416" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
              <circle cx="0" cy="0" r="3" fill="#00F0FF" filter="url(#glow)">
                <animateMotion dur="2s" begin="0.9s" repeatCount="indefinite" path="M 330 250 L 400 250 L 400 416 L 450 416" />
              </circle>

              {/* User to DB/Cache */}
              <path d="M 530 250 L 580 250 L 580 166 L 630 166" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
              <circle cx="0" cy="0" r="2" fill="#8B5CF6" filter="url(#glow)">
                <animateMotion dur="2s" begin="1.2s" repeatCount="indefinite" path="M 530 250 L 580 250 L 580 166 L 630 166" />
              </circle>

              {/* User to Queue */}
              <path d="M 530 250 L 580 250 L 580 333 L 630 333" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
              
              {/* Payment to DB/Queue */}
              <path d="M 530 416 L 580 416 L 580 333 L 630 333" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />

              {/* Queue to Workers to Event Store */}
              <path d="M 710 333 L 810 333" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              <circle cx="0" cy="0" r="2" fill="#10B981" filter="url(#glow)">
                <animateMotion dur="3s" begin="1.5s" repeatCount="indefinite" path="M 710 333 L 810 333" />
              </circle>
            </svg>

            {/* Nodes */}
            <div className="absolute inset-0 p-8">
              {nodes.map((node) => {
                const isHovered = activeNode === node.id;
                const isDimmed = activeNode !== null && !isHovered;
                
                return (
                  <div
                    key={node.id}
                    className={`absolute flex flex-col items-center justify-center transition-all duration-300 ${
                      isDimmed ? 'opacity-30 blur-[1px]' : 'opacity-100'
                    }`}
                    style={{
                      left: `calc(${(node.col - 1) * 18}% + 40px)`,
                      top: `calc(${(node.row - 1) * 16.6}% + 40px)`,
                      transform: 'translate(-50%, -50%)',
                      zIndex: isHovered ? 50 : 10
                    }}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    <div className={`
                      w-20 h-20 rounded-2xl flex items-center justify-center relative cursor-pointer
                      bg-card border transition-all duration-300 shadow-xl
                      ${isHovered ? 'border-primary shadow-[0_0_30px_rgba(0,240,255,0.3)] scale-110' : 'border-white/10 hover:border-white/30'}
                    `}>
                      <node.icon className={`w-8 h-8 ${isHovered ? 'text-primary' : 'text-muted-foreground'}`} />
                      
                      {/* Active Pulse Ring */}
                      {isHovered && (
                        <motion.div 
                          layoutId="activeRing"
                          className="absolute inset-0 rounded-2xl border-2 border-primary"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: [0.5, 0], scale: 1.3 }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                        />
                      )}
                    </div>
                    
                    <div className="mt-3 text-center w-32">
                      <p className={`font-mono text-xs font-bold ${isHovered ? 'text-primary' : 'text-foreground'}`}>
                        {node.label}
                      </p>
                    </div>

                    {/* Tooltip */}
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ 
                        opacity: isHovered ? 1 : 0, 
                        y: isHovered ? -20 : 10,
                        scale: isHovered ? 1 : 0.9,
                        pointerEvents: isHovered ? 'auto' : 'none'
                      }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 glass-panel p-4 rounded-xl shadow-2xl border-primary/30 z-[100]"
                    >
                      <h4 className="font-bold text-sm text-primary mb-1">{node.label}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{node.desc}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
