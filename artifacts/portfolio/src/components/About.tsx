import { motion, useSpring, useMotionTemplate } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const capabilities = [
  {
    title: 'Frontend Development',
    desc: 'Building responsive, interactive, and accessible web applications using React, Next.js, TypeScript, Tailwind CSS, and modern frontend best practices.',
  },
  {
    title: 'Backend Development',
    desc: 'Designing secure REST APIs, implementing authentication, business logic, caching, validation, logging, and scalable backend architectures using Node.js and TypeScript.',
  },
  {
    title: 'Database Engineering',
    desc: 'Designing relational databases, writing optimized queries, handling transactions, and ensuring data consistency using PostgreSQL, Prisma ORM, Redis, and MongoDB.',
  },
  {
    title: 'Performance Optimization',
    desc: 'Improving API response times, reducing bottlenecks, optimizing financial calculations, implementing caching strategies, and resolving production issues.',
  },
  {
    title: 'System Design',
    desc: 'Creating modular architectures, multi-tenant systems, reusable services, scalable backend modules, and clean API designs.',
  },
];

function CapabilityCard({ item, index }: { item: typeof capabilities[0]; index: number }) {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(200px at ${mouseX}px ${mouseY}px, white, transparent)`;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      onMouseMove={onMouseMove}
      className="group relative glass-panel-strong p-6 rounded-xl border-white/5 hover:border-primary/30 hover:translate-x-1 transition-all duration-300 overflow-hidden"
    >
      {/* Spotlight */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl" />
      </motion.div>

      <h4 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors relative z-10">
        {item.title}
      </h4>
      <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{item.desc}</p>
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-aura-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Label pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-md rounded-full mb-6 border border-white/5">
              <Sparkles size={12} className="text-primary" />
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Developer Profile</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
              <span className="text-primary font-mono text-sm tracking-widest uppercase">01.</span>
              Developer Profile
            </h2>

            <div className="hud-panel glass-panel-strong p-8 rounded-2xl relative overflow-hidden border-white/10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 blur-[60px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 blur-[50px] pointer-events-none" />

              <div className="prose prose-invert max-w-none text-muted-foreground space-y-4 relative z-10">
                <p>
                  <strong className="text-foreground">Professional Summary:</strong> Associate Software Developer with experience in Full Stack and Backend Development, specializing in REST API development, authentication systems, financial modules, PostgreSQL database design, Redis caching, and scalable Node.js applications.
                </p>
                <p>
                  I am passionate about creating scalable applications that combine intuitive user experiences with robust backend systems. My journey began with frontend development using React, later expanding toward backend engineering, API design, authentication, financial workflows, and distributed architecture.
                </p>
                <p>
                  Currently contributing to enterprise-scale applications at Shaurya Technosoft Pvt. Ltd., working on authentication, loan management, financial processing, multi-tenant architecture, and production support.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-black/40 border border-white/5 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(0,240,255,0.1)] transition-all duration-300 group">
                  <div className="text-2xl font-bold text-primary group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]">1+</div>
                  <div className="text-sm text-muted-foreground font-mono mt-1">Years Experience</div>
                </div>
                <div className="p-4 rounded-lg bg-black/40 border border-white/5 hover:border-secondary/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.1)] transition-all duration-300 group">
                  <div className="text-2xl font-bold text-secondary group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">10+</div>
                  <div className="text-sm text-muted-foreground font-mono mt-1">Production Features</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-md rounded-full mb-6 border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Capabilities</span>
            </div>

            <h3 className="text-xl font-bold mb-8 font-mono">What I Do</h3>
            <div className="space-y-4">
              {capabilities.map((item, i) => (
                <CapabilityCard key={i} item={item} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
