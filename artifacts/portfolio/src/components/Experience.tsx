import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Associate Software Developer',
    company: 'Shaurya Technosoft Pvt. Ltd.',
    duration: '2025 - Present',
    responsibilities: [
      'Designed and developed scalable REST APIs using Node.js and TypeScript.',
      'Built secure authentication systems with JWT, OTP, refresh tokens, and role-based authorization.',
      'Developed loan lifecycle modules covering application, approval, disbursement, repayment, restructuring, and closure.',
      'Designed reusable backend services with modular architecture.',
      'Implemented Redis caching to improve performance.',
      'Optimized PostgreSQL queries and database transactions.',
      'Debugged production issues and improved API reliability.',
      'Worked on multi-tenant architecture ensuring secure data isolation.',
      'Collaborated with frontend, QA, and product teams to deliver production-ready features.'
    ],
    achievements: 'Designed reusable loan modules and database optimizations ensuring 99% API reliability and high performance.',
    tech: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'JWT']
  },
  {
    role: 'Full Stack Development Intern',
    company: 'Scalefull Technologies',
    duration: '2024',
    responsibilities: [
      'Developed responsive React applications.',
      'Built backend APIs using Node.js and Express.',
      'Created authentication systems.',
      'Designed appointment management solutions.',
      'Developed e-commerce features.',
      'Built project management dashboards.',
      'Improved user experience through responsive UI design.'
    ],
    achievements: 'Delivered interactive customer booking portals and e-commerce payment flows.',
    tech: ['React', 'Node.js', 'Express', 'JavaScript', 'Tailwind CSS', 'CSS3']
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
