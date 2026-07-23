import { motion, useSpring, useMotionTemplate } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const skills = [
  { category: 'Frontend',    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Framer Motion'] },
  { category: 'Backend',     items: ['Node.js', 'Express.js', 'Go (Learning)', 'REST APIs', 'JWT Auth', 'OTP Auth', 'RBAC', 'Session Mgmt'] },
  { category: 'Database',    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM', 'MySQL'] },
  { category: 'DevOps',      items: ['Docker', 'Git', 'GitHub', 'Linux', 'Swagger', 'Postman'] },
  { category: 'Learning',    items: ['Golang', 'Kafka', 'Kubernetes', 'Distributed Systems', 'Cloud Infra', 'Microservices'] },
];

function SkillCard({ group, index }: { group: typeof skills[0]; index: number }) {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(220px at ${mouseX}px ${mouseY}px, white, transparent)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      className="group relative hud-panel glass-panel-strong p-6 rounded-2xl border-white/5 hover:border-primary/30 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
    >
      {/* Spotlight hover glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-secondary/15 rounded-2xl" />
      </motion.div>

      {/* Decorative sparkle */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Sparkles className="text-primary/40 w-5 h-5" />
      </div>

      <h3 className="font-mono text-lg mb-4 text-foreground/80 group-hover:text-primary transition-colors relative z-10">
        {group.category}
      </h3>
      <div className="flex flex-wrap gap-2 relative z-10">
        {group.items.map(skill => (
          <span
            key={skill}
            className="px-3 py-1 text-sm bg-black/40 border border-white/5 rounded-full text-muted-foreground group-hover:text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/20 border-y border-white/5">
      <div className="absolute top-1/2 -right-1/4 w-[800px] h-[800px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-aura-grid opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          {/* Section label pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-md rounded-full mb-6 border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Technology Stack</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">03.</span>
            Technology Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((group, i) => (
            <SkillCard key={group.category} group={group} index={i} />
          ))}
        </div>

        {/* Visual cluster representation */}
        <div className="mt-16 h-64 glass-panel-strong rounded-2xl flex items-center justify-center relative overflow-hidden border-white/5">
          <div className="absolute inset-0 scanlines opacity-50 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 relative z-10 w-full max-w-4xl px-8">
            {/* Frontend */}
            <div className="flex-1 flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-card border border-primary/40 shadow-[0_0_20px_rgba(0,240,255,0.2)] flex items-center justify-center relative group">
                <span className="font-mono text-xs font-bold text-primary">UI / Client</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-4px] rounded-full border border-dashed border-primary/30"
                />
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Frontend</span>
            </div>

            {/* Flow line */}
            <div className="hidden md:flex h-1 flex-1 bg-white/5 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
                animate={{ x: ["-100%", "300%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
            </div>

            {/* Backend */}
            <div className="flex-1 flex flex-col items-center gap-3">
              <div className="w-24 h-24 rounded-xl bg-card border border-secondary/40 shadow-[0_0_20px_rgba(139,92,246,0.2)] flex items-center justify-center relative group">
                <span className="font-mono text-xs font-bold text-secondary">API / Logic</span>
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Backend Core</span>
            </div>

            {/* Flow line */}
            <div className="hidden md:flex h-1 flex-1 bg-white/5 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                animate={{ x: ["-100%", "300%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.5 }}
              />
            </div>

            {/* Database */}
            <div className="flex-1 flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full bg-card border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.2)] flex items-center justify-center relative group">
                <span className="font-mono text-xs font-bold text-emerald-400">Data</span>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-6px] rounded-full border border-dashed border-emerald-500/30"
                />
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Persistence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
