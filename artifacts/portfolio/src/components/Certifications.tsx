import { motion } from 'framer-motion';
import { Award, Shield } from 'lucide-react';

const certs = [
  {
    name: "AWS Certified Solutions Architect",
    level: "Professional",
    year: "2023",
    color: "from-[#FF9900]/20 to-transparent",
    border: "border-[#FF9900]/30"
  },
  {
    name: "Certified Kubernetes Administrator",
    level: "CKA",
    year: "2022",
    color: "from-[#326CE5]/20 to-transparent",
    border: "border-[#326CE5]/30"
  },
  {
    name: "MongoDB Certified Developer",
    level: "Associate",
    year: "2021",
    color: "from-[#47A248]/20 to-transparent",
    border: "border-[#47A248]/30"
  }
];

export function Certifications() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-4">
            <span className="text-primary font-mono text-sm tracking-widest uppercase">06.</span>
            Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative glass-panel rounded-2xl p-6 overflow-hidden border ${cert.border}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-20`} />
              
              <div className="relative z-10 flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center border border-white/10">
                  <Shield className="text-muted-foreground w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-muted-foreground bg-black/40 px-2 py-1 rounded">
                  {cert.year}
                </div>
              </div>
              
              <div className="relative z-10">
                <p className="text-xs font-mono text-muted-foreground mb-2 uppercase tracking-wider">{cert.level}</p>
                <h3 className="font-bold text-lg leading-tight">{cert.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
