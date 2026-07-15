import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Alex has a rare ability to deeply understand complex database architectures while simultaneously caring about the pixel-perfect details of the frontend UI. A true full-stack talent.",
    author: "Sarah Jenkins",
    role: "VP of Engineering, Nexus Cloud",
    initials: "SJ"
  },
  {
    text: "Working with Alex was seamless. The React dashboard they built for us not only looked stunning but communicated with the backend APIs efficiently. They own the entire product lifecycle.",
    author: "David Chen",
    role: "Lead UI/UX Designer, FinEdge",
    initials: "DC"
  },
  {
    text: "From setting up the Dockerized CI/CD pipeline to crafting the Next.js frontend, Alex delivered our SaaS MVP two weeks ahead of schedule. The code quality is exceptional across the stack.",
    author: "Elena Rodriguez",
    role: "Product Manager, StartupX",
    initials: "ER"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-4 mb-4">
            Peer Reviews
          </h2>
          <p className="text-muted-foreground">What collaborators say about my work across the stack.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative group hover:border-primary/30 transition-colors border-white/5 hover:-translate-y-1"
            >
              <Quote className="absolute top-6 right-6 text-white/5 w-12 h-12 group-hover:text-primary/10 transition-colors" />
              
              <p className="text-muted-foreground leading-relaxed mb-8 relative z-10 italic text-sm md:text-base">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/5 pt-6 mt-auto">
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
