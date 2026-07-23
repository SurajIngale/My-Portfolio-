import { motion } from 'framer-motion';
import { Send, Terminal } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PresentationControls, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

function WorkspaceModel() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.05;
    }
  });

  return (
    <PresentationControls
      global
      rotation={[0.13, 0.5, 0]}
      polar={[-0.4, 0.2]}
      azimuth={[-1, 0.75]}
      {...({ config: { mass: 2, tension: 400 }, snap: { mass: 4, tension: 400 } } as any)}
    >
      <group ref={groupRef} position={[0, -0.5, 0]} scale={1.2}>
        {/* Desk Surface */}
        <mesh position={[0, -0.05, 0]}>
          <boxGeometry args={[4, 0.1, 2.5]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
        </mesh>
        
        {/* Laptop Base */}
        <mesh position={[-0.8, 0.05, 0.3]}>
          <boxGeometry args={[1.2, 0.05, 0.8]} />
          <meshStandardMaterial color="#2d2d2d" metalness={0.5} roughness={0.2} />
        </mesh>
        
        {/* Laptop Screen */}
        <mesh position={[-0.8, 0.45, -0.1]} rotation={[0.1, 0, 0]}>
          <boxGeometry args={[1.2, 0.8, 0.05]} />
          <meshStandardMaterial color="#111" />
          <mesh position={[0, 0, 0.026]}>
             <planeGeometry args={[1.1, 0.7]} />
             <meshBasicMaterial color="#00F0FF" opacity={0.8} transparent />
          </mesh>
        </mesh>
        
        {/* External Monitor */}
        <mesh position={[0.8, 0.8, -0.2]} rotation={[0, -0.2, 0]}>
          <boxGeometry args={[2.2, 1.4, 0.05]} />
          <meshStandardMaterial color="#111" />
          <mesh position={[0, 0, 0.026]}>
             <planeGeometry args={[2.1, 1.3]} />
             <meshBasicMaterial color="#8B5CF6" opacity={0.6} transparent />
          </mesh>
        </mesh>
        {/* Monitor Stand */}
        <mesh position={[0.8, 0.3, -0.3]}>
          <cylinderGeometry args={[0.05, 0.2, 1]} />
          <meshStandardMaterial color="#333" />
        </mesh>

        {/* Coffee Mug */}
        <mesh position={[1.5, 0.15, 0.6]}>
          <cylinderGeometry args={[0.12, 0.12, 0.3]} />
          <meshStandardMaterial color="#fff" roughness={0.2} />
        </mesh>
        
        {/* Mechanical Keyboard */}
        <mesh position={[0.6, 0.05, 0.7]} rotation={[0, -0.1, 0]}>
          <boxGeometry args={[1.0, 0.04, 0.3]} />
          <meshStandardMaterial color="#222" />
          {/* Key glows */}
          <mesh position={[0, 0.02, 0]} rotation={[-Math.PI/2, 0, 0]}>
            <planeGeometry args={[0.9, 0.2]} />
            <meshBasicMaterial color="#10B981" opacity={0.3} transparent />
          </mesh>
        </mesh>

        {/* Floating code snippets/elements */}
        <Float speed={3} rotationIntensity={0.2} floatIntensity={0.5} position={[-1.5, 1.2, 0]}>
           <mesh>
             <boxGeometry args={[0.3, 0.3, 0.02]} />
             <meshBasicMaterial color="#00F0FF" wireframe />
           </mesh>
        </Float>
        <Float speed={2} rotationIntensity={0.4} floatIntensity={0.5} position={[2, 1.5, 0]}>
           <mesh>
             <icosahedronGeometry args={[0.2, 0]} />
             <meshBasicMaterial color="#8B5CF6" wireframe />
           </mesh>
        </Float>
      </group>
    </PresentationControls>
  );
}

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/20 border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="mb-10">
            {/* Label pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-md rounded-full mb-6 border border-white/5">
              <Terminal size={12} className="text-primary" />
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Get In Touch</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
              <Terminal className="text-primary" /> Initialize Connection
            </h2>
            <p className="text-muted-foreground">
              Let's build something amazing together.
              <br /><br />
              Whether it's building scalable APIs, designing modern web applications, or solving challenging engineering problems, I'm always excited to collaborate on meaningful projects.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel p-8 rounded-2xl flex flex-col gap-6 border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[50px]" />
            
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
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
            
            <div className="space-y-2 relative z-10">
              <label className="text-xs font-mono uppercase text-muted-foreground ml-1">Payload / Project Details</label>
              <textarea 
                required
                rows={5}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Describe your architectural challenges or product vision..."
              />
            </div>

            <button 
              type="submit"
              disabled={status !== 'idle'}
              className="relative z-10 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_rgba(0,240,255,0.5)]"
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

        <div className="order-1 lg:order-2 h-[400px] lg:h-[600px] w-full relative">
          {mounted && (
            <Canvas camera={{ position: [0, 2, 6], fov: 45 }}>
              <Environment preset="city" />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, 5, -10]} color="#00F0FF" intensity={2} />
              <pointLight position={[10, 5, 10]} color="#8B5CF6" intensity={2} />
              
              <WorkspaceModel />
              
              <ContactShadows 
                position={[0, -0.6, 0]} 
                opacity={0.5} 
                scale={10} 
                blur={2.5} 
                far={4} 
              />
            </Canvas>
          )}
        </div>
      </div>
    </section>
  );
}
