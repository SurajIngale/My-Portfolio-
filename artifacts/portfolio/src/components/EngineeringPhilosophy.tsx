import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { ShieldCheck, Gauge, Layers, Database, Lock, RefreshCw, Code as Code2, Server } from 'lucide-react';

const principles = [
  {
    id: 1,
    icon: ShieldCheck,
    title: 'Security by Default',
    challenge:
      'Authentication systems are often bolted on as an afterthought, leaving APIs vulnerable to token theft, session hijacking, and privilege escalation.',
    approach:
      'I design auth-first architectures — JWT with refresh token rotation, OTP verification, RBAC enforcement, and Redis-based token blacklisting from day one.'
  },
  {
    id: 2,
    icon: Gauge,
    title: 'Performance Is a Feature',
    challenge:
      'Slow APIs kill user trust. N+1 queries, unoptimized joins, and missing cache layers turn responsive apps into bottlenecks under load.',
    approach:
      'I profile relentlessly — Redis caching for hot paths, query optimization with EXPLAIN ANALYZE, connection pooling, and paginated responses to keep p99 under 350ms.'
  },
  {
    id: 3,
    icon: Layers,
    title: 'Modularity Over Monoliths',
    challenge:
      'Monolithic codebases become unmaintainable as teams grow. Business logic, data access, and routing tangle into a single brittle mass.',
    approach:
      'I build modular service-oriented architectures — separated concerns, reusable middleware, dependency injection, and clean interfaces that survive team turnover.'
  },
  {
    id: 4,
    icon: Database,
    title: 'Data Integrity Is Non-Negotiable',
    challenge:
      'Financial calculations with floating-point math, missing transactions, and race conditions silently corrupt data over time.',
    approach:
      'I use Decimal.js for monetary precision, ACID transactions for multi-step operations, optimistic locking for concurrent updates, and audit trails for every mutation.'
  },
  {
    id: 5,
    icon: Lock,
    title: 'Multi-Tenant Isolation',
    challenge:
      'SaaS platforms leak data between tenants when row-level filtering is inconsistent or enforced only at the application layer.',
    approach:
      'I enforce tenant isolation at the database level — schema-per-tenant or RLS policies, tenant-scoped query builders, and automated tests that verify cross-tenant access fails.'
  },
  {
    id: 6,
    icon: RefreshCw,
    title: 'Production Resilience',
    challenge:
      'Systems crash at 3 AM because of unhandled edge cases, memory leaks, and missing health checks that nobody noticed during dev.',
    approach:
      'I implement graceful shutdowns, circuit breakers, structured logging with Pino, health endpoints, and alerting — so issues surface before users do.'
  },
  {
    id: 7,
    icon: Code2,
    title: 'Type Safety as Documentation',
    challenge:
      'Untyped JavaScript codebases require tribal knowledge. New developers guess at function signatures and discover bugs in production.',
    approach:
      'I use strict TypeScript everywhere — Zod for runtime validation, drizzle-zod for schema-derived types, and zero `any` escapes. The compiler is the first reviewer.'
  },
  {
    id: 8,
    icon: Server,
    title: 'API-First Design',
    challenge:
      'APIs designed by accretion become inconsistent — different naming conventions, error formats, and pagination strategies across endpoints.',
    approach:
      'I design APIs with OpenAPI specs first — consistent naming, standardized error envelopes, cursor-based pagination, and generated client hooks so frontend and backend stay in sync.'
  }
];

export function EngineeringPhilosophy() {
  const containerRef = useRef<HTMLElement>(null);
  useScroll({ target: containerRef });

  return (
    <section
      ref={containerRef}
      id="philosophy"
      className="relative py-24 overflow-hidden bg-black/20 border-y border-white/5"
    >
      <div className="absolute inset-0 bg-aura-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-secondary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-4">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">08.</span>
            Engineering Philosophy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Principles that guide every architectural decision — from authentication to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="relative hud-panel glass-panel-strong rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 text-primary group-hover:bg-primary/10 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>

              <div className="space-y-6">
                <div className="pl-4 border-l border-white/10">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1 font-mono">
                    Common Challenge
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                <div className="pl-4 border-l-2 border-primary">
                  <p className="text-xs uppercase tracking-widest text-primary mb-1 font-mono">
                    My Approach
                  </p>
                  <p className="text-foreground text-sm font-semibold leading-relaxed">
                    {item.approach}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-2xl md:text-3xl text-muted-foreground">
            I don't just write code that works.
            <span className="block text-foreground font-medium mt-2">
              I build systems that survive growth, change, and 3 AM pages.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
