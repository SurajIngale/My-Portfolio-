import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 50);
  });

  const links = [
    { label: 'About',        href: '#about' },
    { label: 'Experience',   href: '#experience' },
    { label: 'Skills',       href: '#skills' },
    { label: 'Robot',        href: '#robot' },
    { label: 'Projects',     href: '#projects' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Terminal',     href: '#terminal' },
  ];

  // Active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map(l => l.href.substring(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-background/85 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,240,255,0.04)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 group"
        >
          <Logo className="w-10 h-7" />
          <span className="text-xl font-bold tracking-tighter">
            <span className="text-primary glow-text-cyan">S</span>
            <span className="text-foreground">Ingale</span>
            <span className="w-1.5 h-1.5 inline-block bg-primary rounded-full ml-1 animate-pulse" />
          </span>
        </button>

        {/* Desktop Nav – pill container */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center bg-card/50 backdrop-blur-md rounded-full p-1 border border-white/5">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-primary/15 border border-primary/30 rounded-full shadow-[0_0_12px_rgba(0,240,255,0.15)]"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="px-5 py-2 text-sm font-medium glass-panel-strong rounded-full border-white/10 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300"
          >
            Initialize Contact
          </motion.button>
        </div>

        {/* Mobile toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-t border-white/5"
        >
          <div className="container mx-auto px-6 py-6 space-y-1">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm ${
                  activeSection === link.href
                    ? 'bg-primary/10 text-primary border border-primary/20'
                    : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="w-full mt-3 bg-primary/10 border border-primary/30 text-primary py-3 rounded-xl font-bold text-sm hover:bg-primary/20 transition-colors"
            >
              Initialize Contact
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
