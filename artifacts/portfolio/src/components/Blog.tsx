import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const posts = [
  {
    title: "Why we migrated from Redis to KeyDB for our caching layer",
    excerpt: "Exploring the trade-offs of multi-threading in caching systems, and how KeyDB solved our specific bottleneck in high-throughput API endpoints.",
    date: "Oct 12, 2023",
    readTime: "8 min read",
    tag: "Architecture"
  },
  {
    title: "Understanding Race Conditions in Distributed Systems",
    excerpt: "A deep dive into distributed locking mechanisms, optimistic concurrency control, and why relying on database constraints isn't always enough.",
    date: "Aug 04, 2023",
    readTime: "12 min read",
    tag: "Engineering"
  },
  {
    title: "Building an Event-Sourced Ledger with Kafka",
    excerpt: "How we implemented a strict double-entry accounting system that processes thousands of transactions per second without losing strict ACID properties.",
    date: "May 28, 2023",
    readTime: "15 min read",
    tag: "FinTech"
  }
];

export function Blog() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
              <span className="text-primary font-mono text-sm tracking-widest uppercase">07.</span>
              System Logs
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-mono text-primary hover:text-primary/80 transition-colors">
            View All Entries <ArrowRight size={16} />
          </a>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-6 md:p-8 rounded-2xl group hover:bg-white/[0.03] transition-colors border-white/5 hover:border-primary/30 flex flex-col md:flex-row gap-6 md:items-center justify-between"
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-4">
                  <span className="text-primary border border-primary/30 bg-primary/10 px-2 py-0.5 rounded">
                    {post.tag}
                  </span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="hidden md:flex w-12 h-12 rounded-full border border-white/10 items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors shrink-0">
                <ArrowRight className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <a href="#" className="flex items-center justify-center gap-2 text-sm font-mono text-primary glass-panel py-4 rounded-xl">
            View All Entries <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
