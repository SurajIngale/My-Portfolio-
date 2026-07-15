import { motion } from 'framer-motion';
import { ExternalLink, GitFork as Github, Layers } from 'lucide-react';

const projects = [
  {
    title: 'Society Management Platform',
    description: 'An enterprise-scale application for managing residents, authentication, financial operations, workforce, and visitor management.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Express', 'Tailwind CSS'],
    features: ['Secure Authentication', 'Multi-Tenant Architecture', 'REST APIs', 'Role Management', 'Financial Processing'],
    link: '#',
    github: '#'
  },
  {
    title: 'Loan Management System',
    description: 'Developed a complete loan lifecycle management solution supporting loan application, approval, disbursement, repayment, restructuring, settlement, and closure.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Decimal.js'],
    features: ['EMI Calculator', 'Repayment Processing', 'Financial Accuracy'],
    link: '#',
    github: '#'
  },
  {
    title: 'Enterprise Authentication System',
    description: 'Implemented secure authentication supporting OTP login, password login, JWT authentication, refresh tokens, session handling, and token blacklisting.',
    tech: ['Node.js', 'Express.js', 'JWT', 'Redis', 'PostgreSQL'],
    features: ['OTP Login', 'JWT & Refresh Tokens', 'Token Blacklisting'],
    link: '#',
    github: '#'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Developed a complete shopping platform featuring authentication, product management, shopping cart, checkout, and order management.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    features: ['Product Management', 'Shopping Cart', 'Checkout & Orders'],
    link: '#',
    github: '#'
  },
  {
    title: 'Appointment Management System',
    description: 'Built a scheduling platform with patient and doctor dashboards, appointment booking, rescheduling, and cancellation.',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    features: ['Doctor & Patient Dashboards', 'Appointment Booking', 'Rescheduling & Cancellation'],
    link: '#',
    github: '#'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-aura-grid opacity-20 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
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
              className="hud-panel glass-panel-strong p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col h-full border-white/5 hover:border-primary/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 group-hover:border-primary/50 group-hover:glow-shadow-cyan transition-all duration-300">
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
