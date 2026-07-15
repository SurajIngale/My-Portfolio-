import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock, BookOpen } from 'lucide-react';

const posts = [
  {
    title: "Mastering Server Components in Next.js 14",
    excerpt: "A practical guide to balancing Server Components and Client Components for optimal performance, SEO, and interactive UX.",
    date: "Nov 15, 2023",
    readTime: "8 min read",
    tag: "Frontend"
  },
  {
    title: "From Express to Go: Rewriting Our Core API",
    excerpt: "Why we migrated our heavy compute endpoints to Go, the challenges we faced, and how we achieved a 60% reduction in response times.",
    date: "Sep 22, 2023",
    readTime: "12 min read",
    tag: "Backend"
  },
  {
    title: "Designing Resilient Microservices with Docker & Redis",
    excerpt: "Implementing caching strategies, message queues, and containerization to build a backend architecture that scales gracefully under load.",
    date: "Jul 10, 2023",
    readTime: "10 min read",
    tag: "Architecture"
  }
];

export function Blog() {
  return (
    <section className="py-24 relative bg-black/20 border-y border-white/5">
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
              Technical Writing
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Thoughts and lessons learned while building modern web applications.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-sm font-mono text-primary hover:text-primary/80 transition-colors">
            View All Articles <ArrowRight size={16} />
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
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="hidden md:flex w-12 h-12 rounded-full border border-white/10 items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-colors shrink-0">
                <BookOpen className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden">
          <a href="#" className="flex items-center justify-center gap-2 text-sm font-mono text-primary glass-panel py-4 rounded-xl">
            View All Articles <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
