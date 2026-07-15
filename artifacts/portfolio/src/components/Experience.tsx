import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Full Stack Engineer',
    company: 'Nexus Innovations',
    duration: '2023 - Present',
    responsibilities: [
      'Architected and delivered a multi-tenant SaaS platform using React, Next.js, and Go microservices.',
      'Designed complex PostgreSQL schemas and integrated Redis for real-time dashboard analytics.',
      'Collaborated closely with UX designers to implement accessible, responsive interfaces using Tailwind CSS.'
    ],
    achievements: 'Improved application load times by 60% through edge caching and optimized bundle splitting.',
    tech: ['React', 'Next.js', 'Go', 'PostgreSQL', 'Redis', 'AWS']
  },
  {
    role: 'Full Stack Developer',
    company: 'FinEdge Systems',
    duration: '2021 - 2023',
    responsibilities: [
      'Built interactive trading dashboards processing live WebSocket streams using React and Redux Toolkit.',
      'Developed high-throughput financial REST APIs in Node.js/Express with strict JWT authentication.',
      'Containerized legacy applications and established automated testing pipelines using GitHub Actions.'
    ],
    achievements: 'Zero downtime during 3 major platform migrations affecting 50,000+ daily active users.',
    tech: ['TypeScript', 'Node.js', 'React', 'Docker', 'WebSockets', 'Jest']
  },
  {
    role: 'Software Engineer',
    company: 'HealthSync Data',
    duration: '2019 - 2021',
    responsibilities: [
      'Developed full-stack patient portals utilizing React for the client and Python/Django for backend services.',
      'Implemented robust form validations and state management for complex healthcare workflows.',
      'Managed cloud deployments on AWS and handled CI/CD integrations.'
    ],
    achievements: 'Successfully delivered a HIPAA-compliant reporting tool 2 weeks ahead of schedule.',
    tech: ['Python', 'Django', 'React', 'AWS EC2', 'PostgreSQL']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">02.</span>
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 md:p-10 rounded-2xl border-white/5 hover:border-primary/20 transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-lg text-secondary font-medium mt-1">
                    <Briefcase size={18} />
                    {exp.company}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm bg-black/40 px-4 py-2 rounded-lg border border-white/10 w-fit">
                  <Calendar size={16} />
                  {exp.duration}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <ul className="space-y-3">
                  {exp.responsibilities.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-1.5">▹</span>
                      {req}
                    </li>
                  ))}
                </ul>
                <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl mt-6">
                  <p className="text-sm font-medium text-primary">
                    <span className="font-bold">Key Achievement:</span> {exp.achievements}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                {exp.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono text-muted-foreground bg-black/40 border border-white/5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
