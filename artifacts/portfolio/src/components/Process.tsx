import { motion } from 'framer-motion';
import { Lightbulb, Search, PenTool, Code, Server, TestTube, Rocket, Activity } from 'lucide-react';

const steps = [
  { id: '01', icon: Lightbulb, title: 'Ideation', desc: 'Defining requirements and business logic.' },
  { id: '02', icon: Search, title: 'Research', desc: 'Selecting the optimal tech stack & architecture.' },
  { id: '03', icon: PenTool, title: 'UI/UX Design', desc: 'Wireframing and Figma prototyping.' },
  { id: '04', icon: Code, title: 'Frontend', desc: 'Building responsive React components.' },
  { id: '05', icon: Server, title: 'Backend', desc: 'Developing APIs & database schemas.' },
  { id: '06', icon: TestTube, title: 'Testing', desc: 'Unit, integration, and E2E testing.' },
  { id: '07', icon: Rocket, title: 'Deployment', desc: 'CI/CD pipeline and cloud hosting.' },
  { id: '08', icon: Activity, title: 'Monitoring', desc: 'Observability and performance tuning.' }
];

export function Process() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Development Lifecycle</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A structured, full-stack approach to software delivery ensuring quality, security, and scalability at every stage.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/5 -translate-y-1/2 hidden lg:block rounded-full">
            <motion.div 
              className="absolute top-0 left-0 h-full w-1/4 bg-gradient-to-r from-transparent via-primary to-transparent"
              animate={{ x: ["-100%", "400%"] }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl glass-panel border-white/10 flex items-center justify-center mb-4 group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 relative shadow-lg">
                  <step.icon className="text-muted-foreground group-hover:text-primary transition-colors" size={24} />
                  
                  {/* Active step indicator badge */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black border border-white/10 flex items-center justify-center text-[10px] font-mono text-muted-foreground group-hover:text-primary group-hover:border-primary/50 transition-colors">
                    {step.id}
                  </div>
                </div>
                <h4 className="font-bold text-sm text-foreground mb-1">{step.title}</h4>
                <p className="text-xs text-muted-foreground leading-tight px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
