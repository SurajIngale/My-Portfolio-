import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2023 - Present',
    role: 'Senior Backend Engineer',
    company: 'Nexus Cloud Infrastructure',
    description: 'Leading a team of 5 engineers to re-architect the core billing engine from a monolith to distributed Go microservices. Reduced p99 latency by 40% and infrastructure costs by $12k/mo.'
  },
  {
    year: '2021 - 2023',
    role: 'Backend Engineer',
    company: 'FinEdge Systems',
    description: 'Developed high-throughput financial ledger processing systems in Node.js and TypeScript. Implemented event-driven architecture using Kafka for asynchronous trade settlements.'
  },
  {
    year: '2019 - 2021',
    role: 'Software Engineer',
    company: 'HealthSync Data',
    description: 'Built RESTful APIs in Python/Django for healthcare providers. Managed PostgreSQL databases and implemented strict RBAC for HIPAA compliance.'
  }
];

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
              System Specs
            </h2>
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px]" />
              
              <div className="prose prose-invert max-w-none text-muted-foreground">
                <p>
                  I'm a backend engineer focused on building robust, scalable, and secure distributed systems. 
                  I believe that the best architecture is the one that solves the business problem with the least amount of accidental complexity.
                </p>
                <p>
                  My philosophy revolves around strong typing, comprehensive testing, and observability-first design. 
                  When I'm not optimizing database queries or debugging race conditions, I'm usually reading about consensus algorithms or tinkering with rust.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-2xl font-bold text-foreground">5+</div>
                  <div className="text-sm text-muted-foreground font-mono mt-1">Years Exp.</div>
                </div>
                <div className="p-4 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-2xl font-bold text-foreground">1B+</div>
                  <div className="text-sm text-muted-foreground font-mono mt-1">Requests/Mo</div>
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
            <h3 className="text-xl font-bold mb-8 font-mono">Runtime History</h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-secondary before:to-transparent">
              
              {timeline.map((item, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-card shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow shadow-primary/20 transition-colors group-hover:border-primary">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-panel p-6 rounded-xl hover:border-primary/30 transition-colors">
                    <div className="flex flex-col mb-2">
                      <span className="font-mono text-primary text-sm">{item.year}</span>
                      <h4 className="font-bold text-lg mt-1">{item.role}</h4>
                      <span className="text-sm text-muted-foreground">{item.company}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
