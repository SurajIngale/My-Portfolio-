import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
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
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px]" />
              
              <div className="prose prose-invert max-w-none text-muted-foreground">
                <p>
                  I'm a Full Stack Software Engineer passionate about bridging the gap between elegant frontend interfaces and robust backend architectures. 
                  My work spans the entire software development lifecycle—from UI/UX collaboration to database design, cloud deployment, and performance optimization.
                </p>
                <p>
                  I believe in clean architecture, strong typing, and comprehensive testing. Whether I'm crafting responsive React components, 
                  optimizing complex SQL queries, or setting up automated CI/CD pipelines, my goal is always to deliver secure, scalable, and maintainable solutions.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-2xl font-bold text-foreground text-primary">5+</div>
                  <div className="text-sm text-muted-foreground font-mono mt-1">Years Full Stack</div>
                </div>
                <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-2xl font-bold text-foreground text-secondary">30+</div>
                  <div className="text-sm text-muted-foreground font-mono mt-1">Projects Deployed</div>
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
            <h3 className="text-xl font-bold mb-8 font-mono">Philosophy & Approach</h3>
            <div className="space-y-6">
              {[
                { title: 'Frontend Excellence', desc: 'Crafting pixel-perfect, accessible, and responsive user interfaces with modern React, Next.js, and precise CSS/animations.' },
                { title: 'Backend Scalability', desc: 'Designing secure REST and GraphQL APIs, microservices in Node.js/Go, and optimizing database models for high concurrency.' },
                { title: 'DevOps & Cloud Native', desc: 'Automating deployments with Docker, Kubernetes, and GitHub Actions across AWS, Vercel, and modern cloud platforms.' },
                { title: 'Performance First', desc: 'Obsessing over core web vitals, bundle sizes, query execution times, and edge caching for sub-second interactions.' }
              ].map((item, i) => (
                <div key={i} className="glass-panel p-6 rounded-xl hover:border-primary/30 transition-colors border-white/5 group">
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
