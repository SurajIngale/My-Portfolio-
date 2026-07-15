import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import { Terminal, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

function ServerModel() {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group rotation={[0.4, 0.4, 0]}>
        {/* Main Chassis */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3, 0.8, 2]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.2} metalness={0.8} />
        </mesh>
        
        {/* Glass top/vents */}
        <mesh position={[0, 0.41, 0]}>
          <boxGeometry args={[2.8, 0.02, 1.8]} />
          <meshPhysicalMaterial 
            color="#000" 
            transmission={0.9} 
            opacity={1} 
            roughness={0.1}
            ior={1.5}
          />
        </mesh>

        {/* Glowing Data Lines inside */}
        <mesh position={[-1, 0.2, 0]}>
          <boxGeometry args={[0.1, 0.1, 1.5]} />
          <meshBasicMaterial color="#00F0FF" />
        </mesh>
        <mesh position={[0, 0.2, 0]}>
          <boxGeometry args={[0.1, 0.1, 1.5]} />
          <meshBasicMaterial color="#8B5CF6" />
        </mesh>
        <mesh position={[1, 0.2, 0]}>
          <boxGeometry args={[0.1, 0.1, 1.5]} />
          <meshBasicMaterial color="#00F0FF" />
        </mesh>

        {/* Front Panel LEDs */}
        <mesh position={[-1.2, 0, 1.01]}>
          <boxGeometry args={[0.1, 0.1, 0.05]} />
          <meshBasicMaterial color="#10B981" />
        </mesh>
        <mesh position={[-1.0, 0, 1.01]}>
          <boxGeometry args={[0.1, 0.1, 0.05]} />
          <meshBasicMaterial color="#10B981" />
        </mesh>
        <mesh position={[-0.8, 0, 1.01]}>
          <boxGeometry args={[0.1, 0.1, 0.05]} />
          <meshBasicMaterial color="#00F0FF" />
        </mesh>
      </group>
    </Float>
  );
}

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-primary/30 text-primary mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono tracking-wider uppercase">Systems Online</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Alex Carter
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary glow-text-cyan block mt-2">
              Backend Engineer
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            I architect scalable APIs, distributed systems, and cloud-native applications. 
            Building the invisible machinery that powers the digital world with precision and performance.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors gap-2"
            >
              <Terminal size={18} />
              View Architecture
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg glass-panel hover:bg-white/5 transition-colors gap-2 border-white/10"
            >
              <Download size={18} />
              Resume.pdf
            </a>
          </div>

          <div className="flex gap-6 mt-12 text-muted-foreground">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <div className="h-[500px] w-full relative hidden lg:block">
          {mounted && (
            <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
              <Environment preset="city" />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -10]} color="#00F0FF" intensity={2} />
              <pointLight position={[10, 10, 10]} color="#8B5CF6" intensity={2} />
              
              <ServerModel />
              
              <ContactShadows 
                position={[0, -1.5, 0]} 
                opacity={0.4} 
                scale={10} 
                blur={2} 
                far={4} 
              />
            </Canvas>
          )}
          
          {/* Floating Stats */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute top-10 right-10 glass-panel p-4 rounded-xl flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <span className="font-mono font-bold">99.9%</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Uptime</p>
              <p className="font-medium text-sm">Services Healthy</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-10 left-10 glass-panel p-4 rounded-xl flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
              <span className="font-mono font-bold">12ms</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Avg Latency</p>
              <p className="font-medium text-sm">Global Edge</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
