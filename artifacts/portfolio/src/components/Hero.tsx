import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import { Download, Github, Linkedin, Mail, Layout } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';

function FullStackModel() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        {/* Core Sphere - Database */}
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial color="#8B5CF6" wireframe />
        </mesh>

        {/* Middle Layer - Backend/API Hologram */}
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.2, 1]} />
          <meshPhysicalMaterial 
            color="#000" 
            transmission={0.9} 
            opacity={1} 
            roughness={0.1}
            ior={1.5}
            transparent
          />
        </mesh>
        
        {/* Outer Rings - Frontend & Cloud */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.0, 0.01, 16, 100]} />
          <meshBasicMaterial color="#00F0FF" transparent opacity={0.3} />
        </mesh>

        <mesh rotation={[Math.PI / 2.5, Math.PI / 4, 0]}>
          <torusGeometry args={[2.4, 0.01, 16, 100]} />
          <meshBasicMaterial color="#10B981" transparent opacity={0.3} />
        </mesh>
        
        {/* Floating tech nodes */}
        {[
          { pos: [2.0, 0, 0], color: "#00F0FF" },
          { pos: [-2.0, 0, 0], color: "#00F0FF" },
          { pos: [0, 1.2, 0], color: "#8B5CF6" },
          { pos: [0, -1.2, 0], color: "#8B5CF6" },
          { pos: [1.7, 1.7, 0], color: "#10B981" },
          { pos: [-1.7, -1.7, 0], color: "#10B981" },
        ].map((node, i) => (
          <mesh key={i} position={node.pos as [number, number, number]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color={node.color} />
          </mesh>
        ))}

        {/* Flowing data lines */}
        <mesh>
          <cylinderGeometry args={[1.5, 1.5, 0.02, 32]} />
          <meshBasicMaterial color="#00F0FF" transparent opacity={0.5} wireframe />
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
            <span className="text-xs font-mono tracking-wider uppercase">Full Stack Ecosystem Online</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Hi, I'm
            <br />
            Alex Carter
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary glow-text-cyan block mt-2 text-4xl md:text-5xl">
              Full Stack Software Engineer
            </span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            I build exceptional digital experiences by combining modern frontend technologies with scalable backend architectures, cloud infrastructure, and intuitive user experiences.
          </p>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors gap-2"
            >
              <Layout size={18} />
              View Projects
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
            <a href="#contact" className="hover:text-primary transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>

        <div className="h-[500px] w-full relative hidden lg:block">
          {mounted && (
            <Canvas camera={{ position: [0, 2, 7], fov: 45 }}>
              <Environment preset="city" />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -10]} color="#00F0FF" intensity={2} />
              <pointLight position={[10, 10, 10]} color="#8B5CF6" intensity={2} />
              
              <FullStackModel />
              
              <ContactShadows 
                position={[0, -2.5, 0]} 
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
            className="absolute top-10 right-10 glass-panel p-4 rounded-xl flex items-center gap-4 border-white/10"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <span className="font-mono font-bold">100</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Lighthouse</p>
              <p className="font-medium text-sm">Performance Score</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-10 left-10 glass-panel p-4 rounded-xl flex items-center gap-4 border-white/10"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
              <span className="font-mono font-bold">98%</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Test Coverage</p>
              <p className="font-medium text-sm">Jest & Cypress</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
