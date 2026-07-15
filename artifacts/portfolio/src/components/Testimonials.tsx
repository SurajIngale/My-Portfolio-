import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Alex entirely re-architected our legacy billing engine in three months. What used to be a weekly nightmare of race conditions and manual fixes is now a perfectly tuned, event-driven machine. Truly exceptional backend engineering.",
    author: "Sarah Jenkins",
    role: "VP of Engineering, Nexus Cloud",
    initials: "SJ"
  },
  {
    text: "The API gateway Alex built for us handles 10x our previous throughput with half the memory footprint. The code was beautifully structured, strictly typed, and thoroughly tested.",
    author: "David Chen",
    role: "CTO, FinEdge Systems",
    initials: "DC"
  },
  {
    text: "You rarely find someone who understands both the deep technical weeds of database locking and the high-level business logic. Alex bridges that gap perfectly. Our systems have never been more stable.",
    author: "Elena Rodriguez",
    role: "Lead Architect, HealthSync",
    initials: "ER"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">05.</span>
            Peer Review
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative group hover:border-primary/30 transition-colors"
            >
              <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12 group-hover:text-primary/10 transition-colors" />
              
              <p className="text-muted-foreground leading-relaxed mb-8 relative z-10 italic">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-foreground">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-foreground">{item.author}</h4>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
