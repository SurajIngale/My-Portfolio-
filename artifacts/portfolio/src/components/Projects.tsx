import { motion, useSpring, useMotionTemplate } from 'framer-motion';
import { ExternalLink, GitFork as Github, Layers, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Society Management Platform',
    description: 'An enterprise-scale application for managing residents, authentication, financial operations, workforce, and visitor management.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Express', 'Tailwind CSS'],
    features: ['Secure Authentication', 'Multi-Tenant Architecture', 'REST APIs', 'Role Management', 'Financial Processing'],
    link: '#',
    github: '#',
  },
  {
    title: 'Loan Management System',
    description: 'Developed a complete loan lifecycle management solution supporting loan application, approval, disbursement, repayment, restructuring, settlement, and closure.',
    tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Decimal.js'],
    features: ['EMI Calculator', 'Repayment Processing', 'Financial Accuracy'],
    link: '#',
    github: '#',
  },
  {
    title: 'Enterprise Authentication System',
    description: 'Implemented secure authentication supporting OTP login, password login, JWT authentication, refresh tokens, session handling, and token blacklisting.',
    tech: ['Node.js', 'Express.js', 'JWT', 'Redis', 'PostgreSQL'],
    features: ['OTP Login', 'JWT & Refresh Tokens', 'Token Blacklisting'],
    link: '#',
    github: '#',
  },
  {
    title: 'E-Commerce Platform',
    description: 'Developed a complete shopping platform featuring authentication, product management, shopping cart, checkout, and order management.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    features: ['Product Management', 'Shopping Cart', 'Checkout & Orders'],
    link: '#',
    github: '#',
  },
  {
    title: 'Appointment Management System',
    description: 'Built a scheduling platform with patient and doctor dashboards, appointment booking, rescheduling, and cancellation.',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
    features: ['Doctor & Patient Dashboards', 'Appointment Booking', 'Rescheduling & Cancellation'],
    link: '#',
    github: '#',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(300px at ${mouseX}px ${mouseY}px, white, transparent)`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onMouseMove={onMouseMove}
      className="group relative hud-panel glass-panel-strong p-8 rounded-2xl border-white/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col h-full"
    >
      {/* Spotlight hover glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-2xl" />
      </motion.div>

      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Decorative sparkle */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Sparkles className="text-primary/30 w-5 h-5" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-xl bg-black/40 border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-all duration-300">
            <Layers className="text-primary w-6 h-6" />
          </div>
          <div className="flex gap-3">
            <a href={project.github}
              className="text-muted-foreground hover:text-primary transition-all duration-200 p-2 bg-black/20 rounded-full hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)]">
              <Github size={18} />
            </a>
            <a href={project.link}
              className="text-muted-foreground hover:text-primary transition-all duration-200 p-2 bg-black/20 rounded-full hover:bg-primary/10 hover:shadow-[0_0_10px_rgba(0,240,255,0.2)]">
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

        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-xs text-secondary font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_0_4px_rgba(139,92,246,0.6)]" />
                {feature}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
            {project.tech.map(tech => (
              <span key={tech}
                className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded hover:bg-primary/10 hover:text-primary transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-aura-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            {/* Section label pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-md rounded-full mb-6 border border-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_6px_rgba(0,240,255,0.8)]" />
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Featured Projects</span>
            </div>

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
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
