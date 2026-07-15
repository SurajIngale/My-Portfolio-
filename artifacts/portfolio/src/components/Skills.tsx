import { motion } from 'framer-motion';

const skills = [
  { category: 'Languages', items: ['TypeScript', 'Go', 'Python', 'Rust', 'SQL'] },
  { category: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'] },
  { category: 'Infrastructure', items: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD'] },
  { category: 'Architecture', items: ['Microservices', 'GraphQL', 'gRPC', 'Kafka', 'REST'] }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 -right-1/4 w-[800px] h-[800px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">02.</span>
            Technology Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 rounded-2xl group hover:border-primary/40 transition-colors"
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

        {/* 3D representation placeholder - using animated CSS for spatial feel */}
        <div className="mt-16 h-64 glass-panel rounded-2xl flex items-center justify-center relative overflow-hidden border-white/5">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative z-10">
            {/* Frontend */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-xl bg-card border border-white/10 shadow-lg flex items-center justify-center relative group hover:border-primary transition-colors">
                <span className="font-mono text-xs">Client</span>
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              </div>
            </div>

            {/* Connection */}
            <div className="hidden md:flex h-0.5 w-16 bg-gradient-to-r from-transparent via-primary to-transparent relative overflow-hidden">
               <motion.div 
                 className="absolute inset-0 w-full h-full bg-primary"
                 animate={{ x: ["-100%", "100%"] }}
                 transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
               />
            </div>

            {/* Gateway */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 rounded-xl bg-card border border-primary/50 shadow-[0_0_15px_rgba(0,240,255,0.2)] flex items-center justify-center relative z-10">
                <span className="font-mono text-xs text-primary">Gateway</span>
              </div>
            </div>

            {/* Connections */}
            <div className="hidden md:flex flex-col justify-center h-full gap-8 relative">
              <div className="w-16 h-0.5 bg-white/10" />
              <div className="w-16 h-0.5 bg-white/10" />
            </div>

            {/* Microservices */}
            <div className="flex md:flex-col gap-4">
              <div className="w-16 h-12 rounded-lg bg-card border border-secondary/50 shadow-[0_0_10px_rgba(139,92,246,0.2)] flex items-center justify-center">
                <span className="font-mono text-[10px] text-secondary">Auth</span>
              </div>
              <div className="w-16 h-12 rounded-lg bg-card border border-white/10 flex items-center justify-center">
                <span className="font-mono text-[10px]">Users</span>
              </div>
              <div className="w-16 h-12 rounded-lg bg-card border border-white/10 flex items-center justify-center">
                <span className="font-mono text-[10px]">Data</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
