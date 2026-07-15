import React, { useEffect, useRef, useState } from "react";
import Spline from '@splinetool/react-spline';
import { Logo } from "../components/Logo";

export const Hero: React.FC = () => {
  const splineWrapperRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const wrapper = splineWrapperRef.current;
    if (!wrapper) return;

    // Stop wheel events from reaching the Spline canvas
    // This allows the browser to handle the default scroll behavior
    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
    };

    wrapper.addEventListener('wheel', handleWheel, { capture: true });
    return () => wrapper.removeEventListener('wheel', handleWheel, { capture: true });
  }, []);

  return (
    <section
      id="hero"
      aria-label="Aura hero section"
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* Left Content Section */}
      <div className="absolute z-20 top-1/2 -translate-y-1/2 left-16 md:left-56 max-w-xl pointer-events-none select-none">
        {/* Subtle glow backdrop for text readability */}
        <div className="absolute -inset-8 bg-black/40 blur-3xl rounded-full -z-10" />
        
        <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]">
          <span className="block text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] mb-2">
            Beyond Intelligence.
          </span>
          {/* Extraordinary Aurora Gradient for "Pure Presence" */}
          <span 
            className="block text-transparent bg-clip-text animate-pulse"
            style={{
              backgroundImage: 'linear-gradient(135deg, #00FFF0 0%, #4DB6AC 20%, #FF6B6B 40%, #FFE66D 60%, #4ECDC4 80%, #A855F7 100%)',
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 4s ease infinite',
              filter: 'drop-shadow(0 0 30px rgba(77,182,172,0.5)) drop-shadow(0 0 60px rgba(255,107,107,0.3))',
            }}
          >
            Pure Presence.
          </span>
        </h2>
        
        <div className="space-y-5">
          <p className="text-xl md:text-2xl font-light text-white/90 tracking-wide leading-relaxed">
            Meet{' '}
            <span 
              className="font-black text-transparent bg-clip-text px-1"
              style={{
                backgroundImage: 'linear-gradient(90deg, #00FFF0, #4DB6AC, #A855F7)',
                textShadow: '0 0 30px rgba(77,182,172,0.8)',
              }}
            >
              AURA
            </span>
            {' '}— the Advanced Unified Real-time Assistant.
          </p>
          <p className="text-lg text-slate-300/90 leading-relaxed font-light max-w-lg">
            The AI that lives on your desktop, <span className="text-[#4ECDC4] font-medium">sees what you see</span>, and acts at the <span className="text-[#FFE66D] font-medium">speed of thought</span>.
          </p>
        </div>
        
        {/* Enhanced Decorative element & CTA */}
        {/* <div className="mt-10 flex flex-wrap items-center gap-6">
          <button
            onClick={() => document.getElementById('demo-video')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 to-purple-500/20 hover:from-primary/40 hover:to-purple-500/40 border border-primary/30 hover:border-primary rounded-full transition-all duration-500 pointer-events-auto shadow-[0_0_20px_rgba(0,212,200,0.2)] hover:shadow-[0_0_40px_rgba(0,212,200,0.4)]"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white text-sm group-hover:scale-110 transition-transform shadow-lg">
              ▶
            </div>
            <span className="text-base text-white font-bold tracking-tight group-hover:text-primary-light transition-colors">
              Explore System Demo
            </span>
          </button>
          
          <div className="flex items-center gap-4">
            <div className="h-1 w-16 bg-gradient-to-r from-[#00FFF0] via-[#A855F7] to-[#FF6B6B] rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#00FFF0] animate-pulse shadow-[0_0_10px_rgba(0,255,240,0.8)]" />
              <span className="text-[#4DB6AC] text-xs font-bold tracking-[0.3em] uppercase">System Online</span>
            </div>
          </div>
        </div> */}
      </div>

      {/* Glowing AURA text in front of Spline with faded effect */}
      <div 
        className="absolute group transition-all duration-300 z-20 mix-blend-screen opacity-70"
        style={{ top: '50%', left: '67%', transform: 'translate(-50%, -50%)' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top Line & Label */}
        <div 
          className="absolute left-1/2 bottom-full -translate-x-1/2 flex flex-col items-center justify-end pointer-events-none"
          style={{ height: '250px', paddingBottom: '20px' }}
        >
           {/* Label */}
           <div 
            className={`text-[#4DB6AC] text-xs font-semibold tracking-[0.2em] uppercase mb-2 transition-all duration-700 ease-out whitespace-nowrap ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ textShadow: '0 0 8px rgba(77,182,172,0.4)' }}
          >
            Brain (LLM)
          </div>
          {/* Line */}
          <div 
            className="w-[1px] bg-gradient-to-t from-[#4DB6AC] to-transparent transition-all duration-700 ease-out"
            style={{
              height: isHovered ? '160px' : '0px',
              boxShadow: isHovered ? '0 0 10px #4DB6AC, 0 0 20px rgba(77,182,172,0.4)' : 'none',
            }}
          />
        </div>
        
        {/* Right Line & Label - Voice & Ears */}
        <div 
          className="absolute top-1/2 left-full -translate-y-1/2 flex flex-row items-center pointer-events-none"
          style={{ width: '250px', paddingLeft: '10px' }}
        >
          {/* Line */}
          <div 
            className="h-[1px] bg-gradient-to-r from-[#FF8A65] to-transparent transition-all duration-700 ease-out"
            style={{
              width: isHovered ? '50px' : '0px',
              boxShadow: isHovered ? '0 0 10px #FF8A65, 0 0 20px rgba(255,138,101,0.4)' : 'none',
            }}
          />
           {/* Label */}
           <div 
            className={`text-[#FF8A65] text-xs font-semibold tracking-[0.2em] uppercase ml-2 transition-all duration-700 ease-out whitespace-nowrap ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            style={{ textShadow: '0 0 8px rgba(255,138,101,0.4)' }}
          >
            Voice & Ears <br /> (Speaker + Mic)
          </div>
        </div>
        
        {/* Bottom Line & Label */}
        <div 
          className="absolute left-1/2 top-full -translate-x-1/2 flex flex-col items-center justify-start pointer-events-none"
          style={{ height: '290px', paddingTop: '20px' }}
        >
          {/* Line */}
          <div 
            className="w-[1px] bg-gradient-to-b from-[#4DB6AC] to-transparent transition-all duration-700 ease-out"
            style={{
              height: isHovered ? '160px' : '0px',
              boxShadow: isHovered ? '0 0 10px #4DB6AC, 0 0 20px rgba(77,182,172,0.4)' : 'none',
            }}
          />
           {/* Label */}
           <div 
            className={`text-[#4DB6AC] text-xs font-semibold tracking-[0.2em] uppercase mt-2 transition-all duration-700 ease-out whitespace-nowrap ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
            style={{ textShadow: '0 0 8px rgba(77,182,172,0.4)' }}
          >
             Eyes (Webcam + Screen)
          </div>
        </div>
        
        {/* Left Line & Label - Hand (MCP Server) */}
        <div 
          className="absolute top-1/2 right-full -translate-y-1/2 flex flex-row items-center justify-end pointer-events-none"
          style={{ width: '220px', paddingRight: '10px' }}
        >
           {/* Label */}
           <div 
            className={`text-[#FF8A65] text-xs font-semibold tracking-[0.2em] uppercase mr-2 transition-all duration-700 ease-out whitespace-nowrap ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
            style={{ textShadow: '0 0 8px rgba(255,138,101,0.4)' }}
          >
            Hand <br /> (MCP Server)
          </div>
          {/* Line */}
          <div 
            className="h-[1px] bg-gradient-to-l from-[#FF8A65] to-transparent transition-all duration-700 ease-out"
            style={{
              width: isHovered ? '50px' : '0px',
              boxShadow: isHovered ? '0 0 10px #FF8A65, 0 0 20px rgba(255,138,101,0.4)' : 'none',
            }}
          />
        </div>



        <h1 
          className={`text-[8rem] font-black tracking-tight leading-[0.8] text-center select-none transition-all duration-500 cursor-default ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{
            background: 'linear-gradient(to bottom, #ffffff, #4DB6AC, #008A7F)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: isHovered 
              ? '0 0 20px rgba(77,182,172, 0.5), 0 0 50px rgba(0, 138, 127, 0.3)'
              : 'none',
            filter: 'none',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          AURA
        </h1>
      </div>

      <div ref={splineWrapperRef} className="absolute inset-0 z-10">
          <Spline scene="https://prod.spline.design/XG0RunundWTke0HU/scene.splinecode" />
      </div>

      <div className="absolute bottom-4 right-5 z-[9999] group cursor-pointer">
        <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 shadow-[0_0_15px_rgba(0,138,127,0.1)] transition-all duration-500 ease-out group-hover:scale-105 group-hover:bg-slate-900/80 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,138,127,0.4)]">
          <div className="transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            <Logo className="w-9 h-9 drop-shadow-[0_0_8px_rgba(0,138,127,0.5)]" />
          </div>
          <span className="text-lg font-bold tracking-[0.2em] bg-gradient-to-r from-white via-primary-light to-slate-300 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(0,138,127,0.5)] transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(0,138,127,0.8)] group-hover:tracking-[0.25em]">
            AURA
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
