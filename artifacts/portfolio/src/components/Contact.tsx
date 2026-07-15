import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Mock network request
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Initialize Connection</h2>
          <p className="text-muted-foreground">Have a complex systems problem? Let's engineer a solution.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-muted-foreground ml-1">Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase text-muted-foreground ml-1">Protocol (Email)</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-muted-foreground ml-1">Payload</label>
              <textarea 
                required
                rows={5}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Describe your architectural challenges..."
              />
            </div>

            <button 
              type="submit"
              disabled={status !== 'idle'}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === 'idle' && (
                <>
                  <Send size={18} />
                  Transmit Message
                </>
              )}
              {status === 'submitting' && (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                  Establishing handshake...
                </span>
              )}
              {status === 'success' && (
                <span className="text-background font-bold">200 OK - Transmitted</span>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
