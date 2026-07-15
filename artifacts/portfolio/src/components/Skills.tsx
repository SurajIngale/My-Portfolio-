import { motion } from 'framer-motion';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Framer Motion', 'React Query'] },
  { category: 'Backend', items: ['Node.js', 'Go', 'Express', 'Fiber', 'REST API', 'GraphQL', 'Socket.IO'] },
  { category: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'GORM'] },
  { category: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'AWS', 'Vercel', 'Nginx'] },
  { category: 'Tools', items: ['Git', 'Figma', 'Postman', 'VS Code', 'Jest', 'Cypress'] }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-black/20 border-y border-white/5">
      <div className="absolute top-1/2 -right-1/4 w-[800px] h-[800px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">03.</span>
            Technology Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 rounded-2xl group hover:border-primary/40 transition-colors border-white/5"
            >
              <h3 className="font-mono text-lg mb-4 text-foreground/80 group-hover:text-primary transition-colors">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map(skill => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-sm bg-black/40 border border-white/5 rounded-full text-muted-foreground group-hover:text-foreground transition-colors hover:border-primary/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual cluster representation */}
        <div className="mt-16 h-64 glass-panel rounded-2xl flex items-center justify-center relative overflow-hidden border-white/5">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 relative z-10 w-full max-w-4xl px-8">
            
            {/* Frontend Sphere */}
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

            {/* Connecting Flow */}
            <div className="hidden md:flex h-1 flex-1 bg-white/5 relative overflow-hidden rounded-full">
               <motion.div 
                 className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent"
                 animate={{ x: ["-100%", "300%"] }}
                 transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
               />
            </div>

            {/* Backend Sphere */}
            <div className="flex-1 flex flex-col items-center gap-3">
              <div className="w-24 h-24 rounded-xl bg-card border border-secondary/40 shadow-[0_0_20px_rgba(139,92,246,0.2)] flex items-center justify-center relative group">
                <span className="font-mono text-xs font-bold text-secondary">API / Logic</span>
              </div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Backend Core</span>
            </div>

            {/* Connecting Flow */}
            <div className="hidden md:flex h-1 flex-1 bg-white/5 relative overflow-hidden rounded-full">
               <motion.div 
                 className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
                 animate={{ x: ["-100%", "300%"] }}
                 transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: 0.5 }}
               />
            </div>

            {/* Database Sphere */}
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
