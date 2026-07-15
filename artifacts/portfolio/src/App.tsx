import { useState, useEffect } from 'react';
import { BootSequence } from './components/BootSequence';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { UIShowcase } from './components/UIShowcase';
import { Process } from './components/Process';
import { Architecture } from './components/Architecture';
import { Projects } from './components/Projects';
import { Metrics } from './components/Metrics';
import { Testimonials } from './components/Testimonials';
import { GithubActivity } from './components/GithubActivity';
import { Blog } from './components/Blog';
import { Terminal } from './components/Terminal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  const [booted, setBooted] = useState(false);

  // Disable scroll during boot
  useEffect(() => {
    if (!booted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [booted]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary">
      {!booted && <BootSequence onComplete={() => setBooted(true)} />}
      
      <CustomCursor />
      
      {booted && (
        <main className="animate-in fade-in duration-1000">
          <Navbar />
          <Hero />
          <Metrics />
          <About />
          <Experience />
          <Skills />
          <UIShowcase />
          <Process />
          <Architecture />
          <Projects />
          <GithubActivity />
          <Testimonials />
          <Blog />
          <Terminal />
          <Contact />
          <Footer />
        </main>
      )}
    </div>
  );
}
