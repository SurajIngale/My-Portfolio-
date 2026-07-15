import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Server, Activity } from 'lucide-react';

const projects = [
  {
    title: 'Nexus Enterprise Auth',
    description: 'A distributed authentication and authorization system processing 50M+ logins daily. Built with Go, Redis, and PostgreSQL. Features OAuth2, MFA, and real-time session invalidation.',
    tech: ['Go', 'Redis', 'PostgreSQL', 'gRPC'],
    metrics: ['50M+ req/day', '12ms p99 latency'],
    link: '#',
    github: '#'
  },
  {
    title: 'LedgerFlow Financial Engine',
    description: 'Event-driven double-entry accounting ledger for FinTech. Handles concurrent transactions with strict ACID guarantees using Kafka for event sourcing and eventual consistency.',
    tech: ['TypeScript', 'Node.js', 'Kafka', 'CockroachDB'],
    metrics: ['Zero dropped events', 'ACID compliant'],
    link: '#',
    github: '#'
  },
  {
    title: 'Stratos API Gateway',
    description: 'High-performance API gateway built in Rust. Handles rate limiting, JWT validation, request routing, and payload inspection before hitting internal microservices.',
    tech: ['Rust', 'Tokio', 'Redis'],
    metrics: ['200k RPS', '3MB footprint'],
    link: '#',
    github: '#'
  },
  {
    title: 'Observer Metric Aggregator',
    description: 'Time-series data pipeline for collecting, aggregating, and querying millions of custom application metrics. Custom storage engine optimized for read-heavy workloads.',
    tech: ['Python', 'ClickHouse', 'Prometheus'],
    metrics: ['1B+ datapoints', 'Sub-second queries'],
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
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">03.</span>
            Featured Architecture
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle hover background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 group-hover:border-primary/50 transition-colors">
                    <Server className="text-primary w-6 h-6" />
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors">
                      <Github size={20} />
                    </a>
                    <a href={project.link} className="text-muted-foreground hover:text-foreground transition-colors">
                      <ExternalLink size={20} />
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
                  <div className="flex gap-4">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-mono text-secondary">
                        <Activity size={12} />
                        {metric}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs font-mono text-muted-foreground">
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
