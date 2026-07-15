import { motion } from 'framer-motion';
import { useState } from 'react';
import { Globe, ShieldCheck, Users, Bell, CreditCard, Database, Zap, Archive, HardDrive, Server, Layout, Settings, Activity, Cloud } from 'lucide-react';

const nodes = [
  { id: 'browser', label: 'Client / SPA', icon: Globe, col: 1, row: 3, desc: 'React/Next.js frontend rendering dynamic user interfaces.' },
  { id: 'frontend', label: 'Frontend Edge', icon: Layout, col: 2, row: 3, desc: 'Optimized static asset delivery via Vercel/CDN.' },
  
  { id: 'gateway', label: 'API Gateway', icon: Server, col: 3, row: 3, desc: 'Central routing, rate limiting, and SSL termination.' },
  
  { id: 'auth', label: 'Auth Service', icon: ShieldCheck, col: 4, row: 1, desc: 'JWT validation and OAuth2 integration.' },
  { id: 'services', label: 'Business Logic', icon: Settings, col: 4, row: 3, desc: 'Core Node.js/Go microservices handling application rules.' },
  
  { id: 'cache', label: 'Redis Cache', icon: Zap, col: 5, row: 2, desc: 'Sub-millisecond read access for session & frequent data.' },
  { id: 'queue', label: 'Message Queue', icon: Archive, col: 5, row: 4, desc: 'Kafka/RabbitMQ handling asynchronous background jobs.' },
  
  { id: 'db', label: 'Primary DB', icon: Database, col: 6, row: 2, desc: 'PostgreSQL relational core with read-replicas.' },
  { id: 'storage', label: 'Cloud Storage', icon: Cloud, col: 6, row: 4, desc: 'AWS S3 bucket for media and static uploads.' },
  
  { id: 'monitor', label: 'Observability', icon: Activity, col: 7, row: 3, desc: 'Prometheus & Datadog tracking metrics and logs.' },
];

export function Architecture() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section id="architecture" className="py-24 relative overflow-hidden bg-black/20 border-y border-white/5">
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
            Full Stack Pipeline
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Tracing a request from the user's browser, through the frontend edge, deep into the microservices architecture and data persistence layers. Hover to inspect.
          </p>
        </motion.div>

        <div className="relative w-full overflow-x-auto pb-12">
          <div className="min-w-[1000px] h-[550px] relative glass-panel rounded-3xl p-8 border-white/5">
            {/* Grid background */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none rounded-3xl" />
            
            {/* SVG Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Browser -> Frontend -> Gateway */}
              <path d="M 120 275 L 250 275" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
              <circle cx="0" cy="0" r="3" fill="#00F0FF" filter="url(#glow)">
                <animateMotion dur="2.5s" repeatCount="indefinite" path="M 120 275 L 250 275" />
              </circle>

              <path d="M 330 275 L 430 275" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
              <circle cx="0" cy="0" r="3" fill="#00F0FF" filter="url(#glow)">
                <animateMotion dur="2.5s" begin="0.5s" repeatCount="indefinite" path="M 330 275 L 430 275" />
              </circle>

              {/* Gateway to Auth/Services */}
              <path d="M 510 275 L 560 275 L 560 91 L 610 91" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
              <circle cx="0" cy="0" r="3" fill="#8B5CF6" filter="url(#glow)">
                <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M 510 275 L 560 275 L 560 91 L 610 91" />
              </circle>

              <path d="M 510 275 L 610 275" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
              <circle cx="0" cy="0" r="3" fill="#8B5CF6" filter="url(#glow)">
                <animateMotion dur="2s" begin="1.2s" repeatCount="indefinite" path="M 510 275 L 610 275" />
              </circle>

              {/* Services to Cache/DB/Queue */}
              <path d="M 690 275 L 740 275 L 740 183 L 790 183" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
              <circle cx="0" cy="0" r="2" fill="#10B981" filter="url(#glow)">
                <animateMotion dur="2s" begin="1.5s" repeatCount="indefinite" path="M 690 275 L 740 275 L 740 183 L 790 183" />
              </circle>

              <path d="M 690 275 L 740 275 L 740 366 L 790 366" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
              <circle cx="0" cy="0" r="2" fill="#F59E0B" filter="url(#glow)">
                <animateMotion dur="2.5s" begin="1.6s" repeatCount="indefinite" path="M 690 275 L 740 275 L 740 366 L 790 366" />
              </circle>

              {/* Queue to Storage */}
              <path d="M 870 366 L 910 366 L 910 458 L 960 458" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
              
              {/* System to Monitor */}
              <path d="M 970 183 L 1020 183 L 1020 275 L 1100 275" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 2" fill="none" />
              <circle cx="0" cy="0" r="1.5" fill="#EF4444" filter="url(#glow)">
                <animateMotion dur="3s" begin="0s" repeatCount="indefinite" path="M 970 183 L 1020 183 L 1020 275 L 1100 275" />
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
                      left: `calc(${(node.col - 1) * 14.5}% + 80px)`,
                      top: `calc(${(node.row - 1) * 16.6}% + 45px)`,
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
                          layoutId="activeRingFull"
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
