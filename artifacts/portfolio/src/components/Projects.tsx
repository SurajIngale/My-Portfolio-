import { motion } from 'framer-motion';
import { ExternalLink, Github, MonitorSmartphone, Server, Database, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Nexus AI SaaS Platform',
    description: 'A comprehensive AI writing assistant offering document generation and content analysis. Features real-time collaborative editing, subscription management, and complex AI streaming APIs.',
    tech: ['Next.js', 'React', 'Node.js', 'OpenAI API', 'Stripe', 'Prisma'],
    features: ['Real-time streaming', 'Role-based access', 'Payment integration'],
    link: '#',
    github: '#'
  },
  {
    title: 'Society Management System',
    description: 'A full-stack administrative portal for residential communities. Includes maintenance tracking, complaint ticketing, visitor logs, and automated billing generation.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    features: ['Complex dashboards', 'Automated CRON jobs', 'PDF generation'],
    link: '#',
    github: '#'
  },
  {
    title: 'Vanguard E-Commerce',
    description: 'High-performance headless e-commerce storefront. Utilizes server-side rendering for optimal SEO, integrated headless CMS for inventory, and dynamic cart management.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Redux Toolkit', 'Tailwind'],
    features: ['Sub-second load times', 'Framer Motion animations', 'Headless CMS'],
    link: '#',
    github: '#'
  },
  {
    title: 'SyncFlow Project Manager',
    description: 'Kanban-style project management tool with live updates. Drag-and-drop interfaces synchronized across all connected clients via WebSockets with persistent state in Postgres.',
    tech: ['React', 'Go', 'WebSockets', 'PostgreSQL', 'React Query'],
    features: ['Optimistic UI updates', 'Live synchronization', 'Complex drag-n-drop'],
    link: '#',
    github: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
              <span className="text-primary font-mono text-sm tracking-widest uppercase">05.</span>
              Featured Projects
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              End-to-end applications demonstrating complete ownership of the stack—from pixel-perfect UI to scalable database schemas.
            </p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col h-full border-white/5 hover:border-primary/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 group-hover:border-primary/50 transition-colors">
                    <Layers className="text-primary w-6 h-6" />
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-black/20 rounded-full hover:bg-white/10">
                      <Github size={18} />
                    </a>
                    <a href={project.link} className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-black/20 rounded-full hover:bg-white/10">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-secondary font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
