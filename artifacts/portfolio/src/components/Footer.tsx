export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 bg-black/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-foreground font-bold tracking-tighter">
            <span className="text-primary">S</span>Ingale
          </div>
          
          <div className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Suraj Ingale. All systems nominal.
          </div>
          
          <div className="flex gap-6 text-sm font-mono text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
