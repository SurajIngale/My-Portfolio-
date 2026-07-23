import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ThreeDWave } from '../components/ThreeDWave';
import { Terminal, Cpu, Globe, Zap, FileCode, FolderOpen, Search, Command, Sparkles, Monitor, Brain } from 'lucide-react';

export const Presentation: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // --- Intro Content (0 - 0.12) ---
  // Show IMMEDIATELY when section starts, then fade out
  const introOpacity = useTransform(smoothProgress, [0, 0.01, 0.1, 0.12], [1, 1, 1, 0]);
  const introScale = useTransform(smoothProgress, [0, 0.02], [0.95, 1]);
  const introY = useTransform(smoothProgress, [0.1, 0.12], [0, -50]);

  // --- Desktop Entry (0.12 - 0.22) ---
  const desktopOpacity = useTransform(smoothProgress, [0.12, 0.22], [0, 1]);
  const desktopScale = useTransform(smoothProgress, [0.12, 0.22], [0.85, 1]);
  const desktopRotateX = useTransform(smoothProgress, [0.12, 0.22], [15, 0]); // 3D perspective
  const desktopY = useTransform(smoothProgress, [0.12, 0.22], [100, 0]);

  // --- Step 1 Text (0.22 - 0.32) ---
  const text1Opacity = useTransform(smoothProgress, [0.22, 0.27, 0.3, 0.32], [0, 1, 1, 0]);

  // --- Scanner Effect (0.32 - 0.47) ---
  const scannerOpacity = useTransform(smoothProgress, [0.32, 0.35, 0.45, 0.47], [0, 1, 1, 0]);
  const scannerY = useTransform(smoothProgress, [0.32, 0.47], ['0%', '100%']);
  const text2Opacity = useTransform(smoothProgress, [0.35, 0.39, 0.45, 0.47], [0, 1, 1, 0]);

  // --- Code Editor & Terminal (0.47 - 0.62) ---
  const editorY = useTransform(smoothProgress, [0.47, 0.55], ['100%', '0%']);
  const terminalY = useTransform(smoothProgress, [0.5, 0.58], ['100%', '0%']);
  const editorOpacity = useTransform(smoothProgress, [0.47, 0.55], [0, 1]);
  const text3Opacity = useTransform(smoothProgress, [0.49, 0.54, 0.59, 0.62], [0, 1, 1, 0]);

  // --- Automation Panels (0.62 - 0.77) ---
  const panelScale = useTransform(smoothProgress, [0.62, 0.7], [0.85, 1]);
  const panelOpacity = useTransform(smoothProgress, [0.62, 0.7], [0, 1]);
  const text4Opacity = useTransform(smoothProgress, [0.65, 0.7, 0.75, 0.77], [0, 1, 1, 0]);

  // --- Final Fade Out (0.82 - 1.0) ---
  const desktopFadeOut = useTransform(smoothProgress, [0.82, 0.92], [1, 0]);

  return (
    // Increased height to 400vh for smoother, more gradual animations
    <section id="presentation" ref={targetRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center pt-20">
        
        {/* Voice Waves Background - Always visible */}
        <div className="absolute inset-0 z-0">
          <ThreeDWave />
          {/* Soft Overlay over waves */}
          <div className="absolute inset-0 bg-black/40 z-[1]" />
        </div>

        {/* Intro Content - Shows before desktop */}
        <motion.div 
          style={{ opacity: introOpacity, scale: introScale, y: introY }}
          className="absolute inset-0 z-40 flex flex-col items-center justify-center pointer-events-none pt-20"
        >
          <div className="relative">
            {/* Glowing orb effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
            </div>
            
            <div className="relative z-10 text-center space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex items-center justify-center p-8 relative group"
              >
                {/* Glow Backdrop */}
                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full animate-pulse transition-all duration-700 group-hover:bg-primary/30 group-hover:blur-[80px]" />
                
                {/* Glass Container */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-[3rem]" />
                  
                  <div className="relative">
                    <Monitor className="w-28 h-28 text-white drop-shadow-[0_0_30px_rgba(0,255,240,0.8)] transition-transform duration-500 group-hover:scale-110" />
                    <Sparkles className="w-14 h-14 text-primary-light absolute -top-4 -right-4 animate-pulse drop-shadow-[0_0_15px_rgba(0,255,240,0.6)]" />
                  </div>
              </motion.div>
              
              <div className="space-y-4 relative">
                {/* Subtle backdrop for text readability */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-black/40 blur-[80px] -z-10 rounded-full" />

                <p className="text-lg md:text-xl text-slate-400 font-medium tracking-wide pb-4 max-w-3xl mx-auto">
                  Modern desktops are powerful — but still blind, manual, and fragmented.
                </p>
                <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tight drop-shadow-2xl">
                  Experience
                </h2>
                <h3 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary-light via-primary to-primary-dark bg-clip-text text-transparent drop-shadow-lg pb-2">
                  Desktop Intelligence
                </h3>
                <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-medium">
                  AURA seamlessly integrates into your workflow, transforming how you interact with your desktop
                </p>
              </div>

              {/* Animated dots */}
              <div className="flex gap-3 items-center justify-center pt-8">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 rounded-full bg-primary"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text Overlays */}
        <div className="absolute inset-0 z-50 pointer-events-none flex items-center justify-center pt-20">
          <motion.div style={{ opacity: text1Opacity }} className="text-center absolute px-4">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
              AURA lives on your <span className="text-primary-light">desktop</span>.
            </h2>
            <p className="text-xl md:text-2xl text-slate-200 drop-shadow-lg">Native. Powerful. Always there.</p>
          </motion.div>
          
          <motion.div style={{ opacity: text2Opacity }} className="text-center absolute px-4">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
              She sees what <span className="text-primary-light">you see</span>.
            </h2>
            <p className="text-xl md:text-2xl text-slate-200 drop-shadow-lg">Real-time multimodal analysis.</p>
          </motion.div>

          <motion.div style={{ opacity: text3Opacity }} className="text-center absolute px-4">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
              Native <span className="text-primary-light">Intelligence</span>.
            </h2>
            <p className="text-xl md:text-2xl text-slate-200 drop-shadow-lg">Zero friction. Infinite possibilities.</p>
          </motion.div>

          <motion.div style={{ opacity: text4Opacity }} className="text-center absolute px-4">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
              From intent to <span className="text-primary-light">action</span>.
            </h2>
            <p className="text-xl md:text-2xl text-slate-200 drop-shadow-lg">Instantly.</p>
          </motion.div>
        </div>

        {/* Desktop Environment - 3D Perspective */}
        <motion.div 
          style={{ 
            opacity: useTransform([desktopOpacity, desktopFadeOut], ([a, b]) => (a as number) * (b as number)),
            scale: desktopScale,
            y: desktopY,
          }}
          className="relative w-[82%] h-[90%] max-w-8xl z-10"
        >
          {/* 3D Perspective Container */}
          <motion.div
            style={{
              rotateX: desktopRotateX,
              transformPerspective: 2000,
            }}
            className="w-full h-full relative group"
          >
            {/* Desktop Window with Enhanced Glass Effect */}
            <div className="relative w-full h-full bg-slate-900/40 backdrop-blur-3xl rounded-3xl border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.9)] overflow-hidden ring-1 ring-white/5 transition-all duration-500">
              
              {/* Multiple transparent overlays for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-primary/[0.05] rounded-3xl pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,200,0.05),transparent_70%)] pointer-events-none" />
              
              {/* Subtle Desktop Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)] pointer-events-none" />
              
              {/* Top Bar - macOS style with transparency */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-slate-950/50 border-b border-white/10 flex items-center px-6 justify-between z-20 backdrop-blur-xl">
                <div className="flex gap-5 items-center">
                  <div className="flex gap-2 group/traffic">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 group-hover/traffic:bg-red-500 transition-colors cursor-pointer shadow-[0_0_10px_rgba(239,68,68,0.3)]" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 group-hover/traffic:bg-yellow-500 transition-colors cursor-pointer shadow-[0_0_10px_rgba(234,179,8,0.3)]" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 group-hover/traffic:bg-green-500 transition-colors cursor-pointer shadow-[0_0_10px_rgba(34,197,94,0.3)]" />
                  </div>
                  <div className="text-sm text-slate-200 font-medium flex items-center gap-2 px-3 py-1 rounded-lg hover:bg-white/5 transition-colors cursor-default">
                    <Cpu size={16} className="text-primary-light" />
                    <span className="tracking-wide">AURA Workspace</span>
                  </div>
                </div>
                <div className="flex gap-6 text-slate-300 items-center text-sm">
                  <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-full border border-white/5">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                    <span className="text-xs font-medium text-green-400">AI Active</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={16} className="text-yellow-400" />
                    <span className="font-mono text-xs">100%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe size={16} className="text-blue-400" />
                    <span className="font-mono text-xs opacity-80">Dec 14 9:47 PM</span>
                  </div>
                </div>
              </div>

              {/* AURA Core Glow - More subtle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <div className="w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px] animate-pulse" />
              </div>

              {/* Scanner Overlay */}
              <motion.div 
                style={{ opacity: scannerOpacity }}
                className="absolute inset-0 top-12 z-10 pointer-events-none"
              >
                <div className="absolute inset-0 border-2 border-primary/30 rounded-b-3xl m-8 mt-4 shadow-[inset_0_0_100px_rgba(0,212,200,0.15)]" />
                <motion.div 
                  style={{ top: scannerY }}
                  className="absolute left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_50px_rgba(0,212,200,1)]" 
                />
                <div className="absolute top-24 right-20 bg-slate-900/90 border border-primary/50 text-primary-light px-6 py-3 rounded-2xl text-sm font-mono flex items-center gap-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl translate-x-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-[ping_1.5s_infinite]" />
                  ANALYZING SCREEN CONTEXT...
                </div>
                
                {/* Real-time Analysis Cards */}
                <div className="absolute top-44 left-20 space-y-4">
                  {[
                    { label: "Detected: Code Editor", delay: 0 },
                    { label: "Language: TypeScript", delay: 0.1 },
                    { label: "Context: React Component", delay: 0.2 }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: item.delay }}
                      className="bg-slate-900/90 border-l-2 border-primary px-5 py-3 rounded-r-xl text-xs font-mono text-primary-light backdrop-blur-xl shadow-lg flex items-center gap-3"
                    >
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      {item.label}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Main Content Area - Multiple Windows */}
              <div className="absolute inset-0 p-8 pt-24 flex gap-6">
                {/* Left Side - Code Editor with AI Suggestions */}
                <motion.div 
                  style={{ y: editorY, opacity: editorOpacity }}
                  className="flex-1 bg-[#1e1e1e]/90 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative z-10"
                >
                  <div className="h-10 bg-[#252526] border-b border-white/5 flex items-center px-4 gap-3 justify-between">
                    <div className="flex items-center gap-3">
                      <FileCode size={14} className="text-blue-400" />
                      <span className="text-xs text-slate-300 font-medium">aura_engine.tsx</span>
                      <div className="text-[10px] bg-primary/10 text-primary-light px-2 py-0.5 rounded-full border border-primary/20">AI Enhanced</div>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                      <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6 font-mono text-sm text-slate-300 space-y-3 leading-relaxed overflow-hidden bg-[#1e1e1e]/50">
                    <div className="flex gap-6 opacity-50"><span className="text-slate-600 select-none w-6">1</span> <span>import <span className="text-purple-400">React</span> from 'react';</span></div>
                    <div className="flex gap-6 opacity-50"><span className="text-slate-600 select-none w-6">2</span> <span>import <span className="text-purple-400">{'{ useAI }'}</span> from '@aura/core';</span></div>
                    <div className="flex gap-6"><span className="text-slate-600 select-none w-6">3</span> <span></span></div>
                    <div className="flex gap-6"><span className="text-slate-600 select-none w-6">4</span> <span>export const <span className="text-yellow-400">AuraEngine</span> = () ={'>'} {'{'}</span></div>
                    <div className="flex gap-6"><span className="text-slate-600 select-none w-6">5</span> <span className="pl-6"><span className="text-purple-400">const</span> intelligence = <span className="text-blue-400">useAI</span>();</span></div>
                    <div className="flex gap-6"><span className="text-slate-600 select-none w-6">6</span> <span className="pl-6"><span className="text-purple-400">const</span> context = <span className="text-blue-400">useScreenContext</span>();</span></div>
                    <div className="flex gap-6"><span className="text-slate-600 select-none w-6">7</span> <span className="pl-6"></span></div>
                    <div className="flex gap-6"><span className="text-slate-600 select-none w-6">8</span> <span className="pl-6">return (</span></div>
                    <div className="flex gap-6"><span className="text-slate-600 select-none w-6">9</span> <span className="pl-12">{'<'}div className="<span className="text-green-400">neural-link</span>"{'>'}</span></div>
                    <div className="flex gap-6"><span className="text-slate-600 select-none w-6">10</span> <span className="pl-16">{'<'}Core processing={'{'}<span className="text-blue-400">true</span>{'}'} /{' >'}</span></div>
                    
                    {/* AI Suggestion Inline */}
                    <div className="flex gap-6 bg-primary/5 border-l-2 border-primary/40 -ml-2 pl-2 py-1">
                      <span className="text-slate-600 select-none w-6">11</span> 
                      <span className="pl-16 text-slate-400 italic flex items-center gap-2">
                        <Sparkles size={12} className="text-primary" />
                        <span className="text-primary-light">AURA suggests: Add error boundary for resilience</span>
                      </span>
                    </div>
                  </div>
                  
                  {/* AI Insight Card - Floating */}
                  <div className="absolute bottom-24 right-6 bg-slate-900/95 backdrop-blur-xl border border-primary/30 p-4 rounded-xl shadow-2xl flex items-start gap-4 max-w-xs z-20 hover:scale-105 transition-transform cursor-pointer group/card">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20 group-hover/card:border-primary/50 transition-colors">
                       <Sparkles size={20} className="text-primary-light" />
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] text-primary-light/80 font-bold uppercase tracking-wider mb-0.5">Aura Insight</div>
                      <div className="text-sm font-bold text-white mb-0.5">Performance Boost</div>
                      <div className="text-xs text-slate-400">Refactored code for 2x faster execution</div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Side - Terminal + System Monitor */}
                <div className="w-[35%] flex flex-col gap-6">
                  {/* Terminal */}
                  <motion.div 
                    style={{ y: terminalY, opacity: editorOpacity }}
                    className="flex-1 bg-[#0c0c0c]/90 backdrop-blur-2xl rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative z-10"
                  >
                    <div className="h-10 bg-[#1e1e1e] border-b border-white/5 flex items-center px-4 gap-3">
                      <Terminal size={14} className="text-green-400" />
                      <span className="text-xs text-slate-300 font-medium">terminal — zsh</span>
                      <div className="ml-auto text-[10px] bg-green-500/10 text-green-400 px-2 py-0.5 rounded-full border border-green-500/20">Running</div>
                    </div>
                    <div className="p-5 font-mono text-xs space-y-3 flex-1 overflow-hidden">
                      <div className="flex gap-3">
                        <span className="text-green-400">➜</span>
                        <span className="text-cyan-400">~</span>
                        <span className="text-slate-200">aura init --verbose</span>
                      </div>
                      <div className="text-slate-500 pl-5">Initializing neural pathways...</div>
                      <div className="text-slate-400 pl-5">Loading context modules... <span className="text-green-400 font-bold">✓ DONE</span></div>
                      <div className="text-slate-400 pl-5">Syncing with cloud core... <span className="text-green-400 font-bold">✓ OK</span></div>
                      <div className="text-slate-400 pl-5">Optimizing local runtime... <span className="text-green-400 font-bold">✓ COMPLETE</span></div>
                      <div className="text-primary-light pl-5 mt-2">→ AURA is ready to assist</div>
                      <div className="flex gap-3 pt-2">
                        <span className="text-green-400">➜</span>
                        <span className="text-cyan-400">~</span>
                        <span className="text-slate-200 animate-pulse">_</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* System Monitor */}
                  <motion.div 
                    style={{ y: terminalY, opacity: editorOpacity }}
                    className="bg-slate-900/80 backdrop-blur-2xl rounded-2xl border border-white/10 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative z-10"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <Cpu size={16} className="text-primary-light" />
                      <span className="text-sm font-semibold text-slate-200">System Monitor</span>
                    </div>
                    <div className="space-y-4 text-xs">
                      <div>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-slate-400">CPU Usage</span>
                          <span className="text-primary-light font-mono font-bold">23%</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full w-[23%] bg-gradient-to-r from-primary to-primary-light rounded-full shadow-[0_0_10px_rgba(0,212,200,0.5)]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-slate-400">Memory</span>
                          <span className="text-blue-400 font-mono font-bold">4.2 GB</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full w-[52%] bg-gradient-to-r from-blue-500 to-blue-400 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-slate-400">AI Processing</span>
                          <span className="text-green-400 font-mono font-bold">Active</span>
                        </div>
                        <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                          <div className="h-full w-[78%] bg-gradient-to-r from-green-500 to-green-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Automation Panels Overlay - Mission Control Style */}
              <motion.div 
                style={{ scale: panelScale, opacity: panelOpacity }}
                className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] z-40 flex items-center justify-center p-12"
              >
                 <div className="grid grid-cols-2 gap-8 w-full max-w-7xl">
                    {[
                      { 
                        icon: Search, 
                        title: "Intelligence & Research", 
                        features: [
                          "Live web search with real-time data extraction",
                          "Context-aware insights from public and dynamic sources"
                        ],
                        status: "Capabilities", 
                        color: "blue" 
                      },
                      { 
                        icon: FolderOpen, 
                        title: "File & System Management", 
                        features: [
                          "Create, read, update, and organize files & folders",
                          "Full directory scanning with safe system-level access"
                        ],
                        status: "Operations", 
                        color: "green" 
                      },
                      { 
                        icon: Command, 
                        title: "Hands-Free System Control", 
                        features: [
                          "Launch, manage, and close desktop applications",
                          "Control browser navigation, screen actions, and system state"
                        ],
                        status: "Control", 
                        color: "purple" 
                      },
                      { 
                        icon: Brain, 
                        title: "Vision & Audio Control", 
                        features: [
                          "Adjust system volume and visual resolution in real time",
                          "Manage camera, screen streams, and visual output"
                        ],
                        status: "Output", 
                        color: "primary" 
                      },
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-slate-900/60 backdrop-blur-3xl border border-white/10 p-10 rounded-[2.5rem] hover:border-primary/50 hover:bg-slate-800/80 transition-all duration-500 group cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col min-h-[280px] relative overflow-hidden"
                      >
                        {/* Hover Gradient Background */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${
                          item.color === 'green' ? 'from-green-500' :
                          item.color === 'blue' ? 'from-blue-500' :
                          item.color === 'purple' ? 'from-purple-500' :
                          'from-primary'
                        } to-transparent`} />

                        <div className="flex items-center justify-between mb-8 relative z-10">
                          <div className="flex items-center gap-5">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                              item.color === 'green' ? 'bg-green-500/15 text-green-400' :
                              item.color === 'blue' ? 'bg-blue-500/15 text-blue-400' :
                              item.color === 'purple' ? 'bg-purple-500/15 text-purple-400' :
                              'bg-primary/15 text-primary-light'
                            }`}>
                              <item.icon size={28} />
                            </div>
                            <h3 className="text-white font-black text-2xl tracking-tight group-hover:text-primary-light transition-colors duration-300">{item.title}</h3>
                          </div>
                          <div className={`text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.15em] shrink-0 border transition-all duration-300 ${
                            item.color === 'green' ? 'bg-green-500/10 text-green-400 border-green-500/20 group-hover:bg-green-500/20' :
                            item.color === 'blue' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20 group-hover:bg-blue-500/20' :
                            item.color === 'purple' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20 group-hover:bg-purple-500/20' :
                            'bg-primary/10 text-primary-light border-primary/20 group-hover:bg-primary/20'
                          }`}>
                            {item.status}
                          </div>
                        </div>
                        <div className="flex-1 space-y-4 relative z-10">
                          {item.features.map((feature, j) => (
                            <div key={j} className="flex items-start gap-4 text-sm leading-relaxed text-slate-300 group-hover:text-white transition-colors duration-300">
                              <div className={`w-2 h-2 rounded-full mt-2 shrink-0 shadow-[0_0_10px_rgba(255,255,255,0.2)] ${
                                item.color === 'green' ? 'bg-green-500/60' :
                                item.color === 'blue' ? 'bg-blue-500/60' :
                                item.color === 'purple' ? 'bg-purple-500/60' :
                                'bg-primary/60'
                              }`} />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <div className="mt-8 h-1 w-full bg-white/5 rounded-full overflow-hidden relative z-10">
                          <div className={`h-full rounded-full w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out ${
                             item.color === 'green' ? 'bg-green-500' :
                             item.color === 'blue' ? 'bg-blue-500' :
                             item.color === 'purple' ? 'bg-purple-500' :
                             'bg-primary'
                          }`} />
                        </div>
                      </motion.div>
                    ))}
                 </div>
              </motion.div>

              {/* macOS-style Dock */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center gap-3 px-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-50 hover:scale-105 transition-transform duration-300 ring-1 ring-white/5">
                {[
                  { icon: <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20"><Globe size={20} /></div> },
                  { icon: <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-slate-600 to-slate-800 flex items-center justify-center text-white shadow-lg shadow-black/40"><Terminal size={20} /></div> },
                  { icon: <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-indigo-400 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20"><FileCode size={20} /></div> },
                  { separator: true },
                  { icon: <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-primary to-primary-dark flex items-center justify-center text-white shadow-[0_0_15px_rgba(0,212,200,0.3)]"><Cpu size={20} /></div> },
                ].map((item, i) => (
                  item.separator ? (
                    <div key={i} className="w-[1px] h-8 bg-white/10 mx-1" />
                  ) : (
                    <div key={i} className="relative group">
                      <div className="hover:-translate-y-2 transition-transform duration-200 ease-out cursor-pointer">
                        {item.icon}
                      </div>
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )
                ))}
              </div>

            </div>
          </motion.div>
        </motion.div>
        {/* Criterion Label */}
        <div className="absolute bottom-4 right-5 z-[9999] group cursor-pointer">
          <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 shadow-[0_0_15px_rgba(0,138,127,0.1)] transition-all duration-500 ease-out group-hover:scale-105 group-hover:bg-slate-900/80 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,138,127,0.4)]">
            <div className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Monitor className="w-6 h-6 text-primary-light drop-shadow-[0_0_8px_rgba(0,138,127,0.5)]" />
            </div>
            <span className="text-lg font-bold tracking-[0.2em] bg-gradient-to-r from-white via-primary-light to-slate-300 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(0,138,127,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(0,138,127,0.8)] group-hover:tracking-[0.25em]">
              Usability
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
