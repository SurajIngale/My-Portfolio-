import React, { useEffect, useRef } from 'react';

export const VoiceWaves: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width: number;
    let height: number;
    let time = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // Configuration for "Big Voice Waves"
    // Using the requested color #008A7F
    const waves = [
      {
        amplitude: 150,
        frequency: 0.001,
        speed: 0.02,
        offset: 0,
        color: 'rgba(0, 138, 127, 0.2)', 
        yOffset: 0, 
      },
      {
        amplitude: 100,
        frequency: 0.002,
        speed: 0.03,
        offset: 2,
        color: 'rgba(0, 138, 127, 0.4)', 
        yOffset: 0,
      },
      {
        amplitude: 200,
        frequency: 0.0005,
        speed: 0.01,
        offset: 4,
        color: 'rgba(0, 138, 127, 0.1)', 
        yOffset: 0,
      },
      {
        amplitude: 120,
        frequency: 0.0025,
        speed: 0.025,
        offset: 1,
        color: 'rgba(0, 138, 127, 0.3)', 
        yOffset: 0,
      },
      {
        amplitude: 180,
        frequency: 0.0015,
        speed: 0.015,
        offset: 3,
        color: 'rgba(0, 138, 127, 0.15)', 
        yOffset: 0,
      }
    ];

    const drawWave = (wave: typeof waves[0]) => {
      ctx.beginPath();
      const centerY = height / 2;
      
      // Start slightly off-screen
      ctx.moveTo(-50, centerY);

      for (let x = 0; x <= width + 50; x += 5) { // Step by 5 for performance
        // Combine sine waves for a more "voice-like" irregularity
        const y = centerY + 
          Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude * Math.sin(time * 0.01) +
          Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.5) * (wave.amplitude * 0.5);
        
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = wave.color;
      ctx.lineWidth = 4; // Slightly thicker
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowBlur = 15; // Neon glow
      ctx.shadowColor = wave.color;
      ctx.stroke();
      ctx.shadowBlur = 0; // Reset for next operations if any
    };

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);
      
      // Ensure background is black (though the parent section handles this, clearing to transparent is safer)
      // ctx.fillStyle = '#000000';
      // ctx.fillRect(0, 0, width, height);

      waves.forEach(drawWave);

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen"
    />
  );
};
