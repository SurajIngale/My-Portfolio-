import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TermIcon } from 'lucide-react';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: '',
      output: (
        <div className="text-primary mb-2">
          Welcome to AC-Term v2.1.0.<br/>
          Type <span className="text-secondary">help</span> to see available commands.
        </div>
      )
    }
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <ul className="text-muted-foreground list-none space-y-1 my-2">
            <li><span className="text-primary w-20 inline-block">about</span> - Display biography</li>
            <li><span className="text-primary w-20 inline-block">skills</span> - List technical skills</li>
            <li><span className="text-primary w-20 inline-block">contact</span> - Show contact info</li>
            <li><span className="text-primary w-20 inline-block">clear</span> - Clear terminal output</li>
          </ul>
        );
        break;
      case 'about':
        output = <div className="my-2 text-muted-foreground">Backend Engineer specializing in Go, TS, and distributed systems. Building the invisible layer of the internet.</div>;
        break;
      case 'skills':
        output = <div className="my-2 text-muted-foreground">Go, TypeScript, Rust, PostgreSQL, Redis, Kafka, Docker, Kubernetes, AWS.</div>;
        break;
      case 'contact':
        output = <div className="my-2"><a href="mailto:hello@example.com" className="text-secondary hover:underline">hello@example.com</a></div>;
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'sudo':
      case 'rm -rf':
        output = <div className="my-2 text-destructive">Permission denied. Nice try.</div>;
        break;
      default:
        output = <div className="my-2 text-destructive">Command not found: {cmd}. Type 'help' for options.</div>;
    }

    setHistory(prev => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <section id="terminal" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-xl overflow-hidden glass-panel border-white/10 shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="bg-black/40 px-4 py-3 flex items-center gap-2 border-b border-white/5">
            <div className="flex gap-2 mr-4">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-success/80" />
            </div>
            <TermIcon size={14} className="text-muted-foreground" />
            <span className="text-xs font-mono text-muted-foreground">guest@ac-system:~</span>
          </div>

          {/* Terminal Body */}
          <div 
            className="p-6 h-[400px] overflow-y-auto font-mono text-sm"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item, i) => (
              <div key={i}>
                {item.command && (
                  <div className="flex gap-2">
                    <span className="text-success">➜</span>
                    <span className="text-secondary">~</span>
                    <span className="text-foreground">{item.command}</span>
                  </div>
                )}
                {item.output}
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex gap-2 mt-2">
              <span className="text-success">➜</span>
              <span className="text-secondary">~</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-foreground caret-primary"
                autoComplete="off"
                spellCheck="false"
                autoFocus
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
