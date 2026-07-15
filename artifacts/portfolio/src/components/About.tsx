import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-aura-grid opacity-20 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center gap-4">
              <span className="text-primary font-mono text-sm tracking-widest uppercase">01.</span>
              Developer Profile
            </h2>
            <div className="hud-panel glass-panel-strong p-8 rounded-2xl relative overflow-hidden border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px]" />

              <div className="prose prose-invert max-w-none text-muted-foreground space-y-4 relative z-10">
                <p>
                  <strong>Professional Summary:</strong> Associate Software Developer with experience in Full Stack and Backend Development, specializing in REST API development, authentication systems, financial modules, PostgreSQL database design, Redis caching, and scalable Node.js applications. Experienced in delivering production-ready software, resolving critical production issues, designing maintainable architectures, and collaborating with cross-functional teams to build enterprise applications.
                </p>
                <p>
                  I am a Full Stack Software Developer passionate about creating scalable applications that combine intuitive user experiences with robust backend systems. My journey began with frontend development using React and JavaScript, where I learned to build responsive and user-friendly interfaces. As I gained experience, my focus expanded toward backend engineering, API development, authentication systems, financial workflows, database optimization, and distributed application architecture.
                </p>
                <p>
                  Currently, I work as an Associate Software Developer at Shaurya Technosoft Pvt. Ltd., contributing to enterprise-scale applications involving authentication, loan management, financial processing, multi-tenant architecture, and production support. I enjoy transforming complex business requirements into maintainable, secure, and efficient software solutions while continuously learning modern technologies like Go, Kubernetes, Kafka, and cloud platforms.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-black/40 border border-white/5 hover:border-primary/30 transition-colors">
                  <div className="text-2xl font-bold text-primary">1+</div>
                  <div className="text-sm text-muted-foreground font-mono mt-1">Years Experience</div>
                </div>
                <div className="p-4 rounded-lg bg-black/40 border border-white/5 hover:border-secondary/30 transition-colors">
                  <div className="text-2xl font-bold text-secondary">10+</div>
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
            <h3 className="text-xl font-bold mb-8 font-mono">What I Do</h3>
            <div className="space-y-6">
              {[
                { title: 'Frontend Development', desc: 'Building responsive, interactive, and accessible web applications using React, Next.js, TypeScript, Tailwind CSS, and modern frontend best practices.' },
                { title: 'Backend Development', desc: 'Designing secure REST APIs, implementing authentication, business logic, caching, validation, logging, and scalable backend architectures using Node.js and TypeScript.' },
                { title: 'Database Engineering', desc: 'Designing relational databases, writing optimized queries, handling transactions, and ensuring data consistency using PostgreSQL, Prisma ORM, Redis, and MongoDB.' },
                { title: 'Performance Optimization', desc: 'Improving API response times, reducing bottlenecks, optimizing financial calculations, implementing caching strategies, and resolving production issues.' },
                { title: 'System Design', desc: 'Creating modular architectures, multi-tenant systems, reusable services, scalable backend modules, and clean API designs.' }
              ].map((item, i) => (
                <div key={i} className="glass-panel-strong p-6 rounded-xl hover:border-primary/30 transition-all duration-300 border-white/5 group hover:translate-x-1">
                  <h4 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
