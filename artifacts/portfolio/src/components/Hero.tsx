import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import { Download, GitFork as Github, Link as Linkedin, Mail, LayoutGrid as Layout } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { ThreeDWave } from './ThreeDWave';

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
      {/* 3D Wave background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        {mounted && <ThreeDWave />}
      </div>

      {/* Scanline overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none z-[1]" />

      {/* Background elements */}
      <div className="absolute inset-0 bg-aura-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 ambient-glow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel-strong border-primary/30 text-primary mb-6 pulse-ring">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono tracking-wider uppercase">Full Stack Ecosystem Online</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Hi, I'm
            <br />
            <span className="aurora-text">Suraj Ingale</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary glow-text-cyan block mt-2 text-4xl md:text-5xl">
              Full Stack Software Developer
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
            Building scalable backend systems, modern web applications, and intuitive digital experiences.
            <br /><br />
            I'm a Full Stack Software Developer with over a year of professional experience building secure, scalable, and high-performance web applications. My expertise spans React, Node.js, TypeScript, PostgreSQL, Redis, and modern backend architectures. I enjoy solving complex engineering problems, designing clean APIs, optimizing performance, and delivering reliable software that creates real business value.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors gap-2 glow-shadow-cyan"
            >
              <Layout size={18} />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg glass-panel-strong hover:bg-white/5 transition-colors gap-2 border-white/10"
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

          {/* Floating HUD Stats - Top Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute top-10 right-10 hud-panel glass-panel-strong p-4 rounded-xl flex items-center gap-4 border-white/10 glow-shadow-cyan"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <span className="font-mono font-bold">5+</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Backend Modules</p>
              <p className="font-medium text-sm">Major Systems Built</p>
            </div>
          </motion.div>

          {/* Floating HUD Stats - Bottom Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-10 left-10 hud-panel glass-panel-strong p-4 rounded-xl flex items-center gap-4 border-white/10 glow-shadow-violet"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary">
              <span className="font-mono font-bold">1+</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Experience</p>
              <p className="font-medium text-sm">Professional Years</p>
            </div>
          </motion.div>

          {/* HUD corner accent - top left */}
          <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/30 rounded-tl-xl pointer-events-none" />
          {/* HUD corner accent - bottom right */}
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-secondary/30 rounded-br-xl pointer-events-none" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-primary/40 flex items-start justify-center p-1"
        >
          <span className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
