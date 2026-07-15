import { motion } from 'framer-motion';
import { Award, ShieldCheck, Zap } from 'lucide-react';

const achievementGroups = [
  {
    category: "System Engineering",
    icon: Award,
    description: "Architecting core platform capabilities and reusable backend services.",
    items: [
      "Built complete Loan Management System",
      "Designed Multi-Tenant Middleware",
      "Built Bulk Loan Processing APIs"
    ]
  },
  {
    category: "Security & Auth",
    icon: ShieldCheck,
    description: "Developing robust authentication systems and secure third-party integrations.",
    items: [
      "Implemented secure OTP Authentication",
      "Improved Aadhaar verification performance",
      "Improved API security"
    ]
  },
  {
    category: "Optimization & Reliability",
    icon: Zap,
    description: "Improving application throughput, resolving bugs, and ensuring mathematical accuracy.",
    items: [
      "Developed reusable Loan Calculator",
      "Optimized financial calculations",
      "Resolved production bottlenecks",
      "Improved backend reliability"
    ]
  }
];

export function Testimonials() {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-black/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-4 mb-4">
            Technical Achievements
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Key milestones, integrations, and performance improvements delivered in production.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievementGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-8 rounded-2xl relative group hover:border-primary/30 transition-colors border-white/5 hover:-translate-y-1 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <group.icon size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {group.category}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {group.description}
              </p>
              
              <ul className="space-y-3 mt-auto pt-6 border-t border-white/5">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-normal">
                    <span className="text-primary mt-1 font-mono">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
