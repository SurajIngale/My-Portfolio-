import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from 'framer-motion';
import { Check, DollarSign, Sparkles } from 'lucide-react';
import { Button } from '../components/Button';
import { useRef } from 'react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export const Pricing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const pricingTiers: PricingTier[] = [
    {
      name: 'Starter',
      price: '$0',
      description: 'Perfect for exploring Aura\'s capabilities.',
      features: [
        'Basic voice commands',
        '100 commands / day',
        '5 custom shortcuts',
        'English language only',
        'Community support'
      ],
      cta: 'Get Started Free'
    },
    {
      name: 'Pro',
      price: '$9.99',
      description: 'Unlock the full power of your voice.',
      features: [
        'Unlimited commands',
        'Advanced context awareness',
        'Unlimited shortcuts',
        '50+ languages',
        'Priority support',
        'Early access features'
      ],
      highlighted: true,
      cta: 'Start 14-Day Trial'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For teams and organizations.',
      features: [
        'Everything in Pro',
        'Custom AI training',
        'On-premise deployment',
        'SSO & Admin controls',
        'Dedicated success manager',
        'SLA guarantees'
      ],
      cta: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-dark/20 via-slate-950 to-slate-950 pointer-events-none" />
      
      <motion.div 
        style={{ y }}
        className="absolute top-1/4 right-0 w-[800px] h-[800px] bg-primary-dark/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"
      />
      <motion.div 
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          style={{ opacity }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900/50 backdrop-blur-md rounded-full mb-8 border border-slate-800 shadow-lg"
          >
            <DollarSign size={14} className="text-primary-light" />
            <span className="text-sm font-medium text-slate-300">Simple, Transparent Pricing</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Invest in Your
            <br />
            <span className="bg-gradient-to-r from-primary-light to-primary-dark bg-clip-text text-transparent">
              Productivity
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Start for free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-slate-500 mt-16 text-sm"
        >
          All plans include automatic updates. Need a custom solution? <a href="#" className="text-primary-light hover:underline">Let's talk.</a>
        </motion.p>
      </div>
    </section>
  );
};

const PricingCard = ({ tier, index }: { tier: PricingTier; index: number }) => {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={onMouseMove}
      className={`group relative flex flex-col h-full ${tier.highlighted ? 'md:-mt-8 md:mb-8 z-10' : ''}`}
    >
      <div className={`h-full bg-slate-900/40 backdrop-blur-sm border rounded-3xl p-8 hover:bg-slate-900/60 transition-all duration-500 flex flex-col relative overflow-hidden ${
        tier.highlighted 
          ? 'border-primary/50 shadow-2xl shadow-primary/10' 
          : 'border-slate-800'
      }`}>
        
        {/* Hover Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={style}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20" />
        </motion.div>

        {tier.highlighted && (
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary-light to-primary-dark" />
        )}

        {tier.highlighted && (
          <div className="absolute top-6 right-6">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary-light text-xs font-bold uppercase tracking-wider rounded-full border border-primary/20">
              <Sparkles size={10} /> Popular
            </span>
          </div>
        )}

        <div className="mb-8 relative z-10">
          <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
          <p className="text-slate-400 text-sm mb-6 h-10">{tier.description}</p>
          <div className="flex items-baseline gap-1">
            <span className="text-4xl font-bold text-white tracking-tight">{tier.price}</span>
            {tier.price !== 'Custom' && <span className="text-slate-500">/mo</span>}
          </div>
        </div>

        <ul className="space-y-4 mb-8 flex-1 relative z-10">
          {tier.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
              <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                tier.highlighted ? 'bg-primary/20 text-primary-light' : 'bg-slate-800 text-slate-400'
              }`}>
                <Check size={12} />
              </div>
              {feature}
            </li>
          ))}
        </ul>

        <div className="relative z-10">
          <Button
            variant={tier.highlighted ? 'primary' : 'outline'}
            className={`w-full justify-center ${tier.highlighted ? 'shadow-lg shadow-primary/20' : 'bg-transparent border-slate-700 hover:bg-slate-800 text-slate-300'}`}
          >
            {tier.cta}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
