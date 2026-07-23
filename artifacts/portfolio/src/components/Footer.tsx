import { Logo } from './Logo';
import { FloatingWaves } from './FloatingWaves';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-black/60 overflow-hidden">
      {/* Floating waves transition at top */}
      <div className="w-full pointer-events-none select-none opacity-60">
        <FloatingWaves />
      </div>

      {/* Ambient glow orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 pb-10 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3 group">
            <Logo className="w-10 h-7" />
            <span className="font-bold tracking-tighter text-lg">
              <span className="text-primary glow-text-cyan">S</span>
              <span>Ingale</span>
            </span>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            © {year} Suraj Ingale. All systems nominal.
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm font-mono text-muted-foreground">
            <a href="#" className="hover:text-primary transition-all duration-200 hover:drop-shadow-[0_0_6px_rgba(0,240,255,0.6)]">GitHub</a>
            <a href="#" className="hover:text-primary transition-all duration-200 hover:drop-shadow-[0_0_6px_rgba(0,240,255,0.6)]">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-all duration-200 hover:drop-shadow-[0_0_6px_rgba(0,240,255,0.6)]">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
