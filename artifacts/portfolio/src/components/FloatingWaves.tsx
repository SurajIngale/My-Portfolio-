import React, { useEffect, useRef } from 'react';

export const FloatingWaves: React.FC = () => {
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
      height = 200;
      canvas.width = width;
      canvas.height = height;
    };

    const waves = [
      { amplitude: 30,  frequency: 0.002,  speed: 0.02,  offset: 0, color: 'rgba(0, 240, 255, 0.12)', yOffset: 100 },
      { amplitude: 40,  frequency: 0.0015, speed: 0.015, offset: 2, color: 'rgba(0, 240, 255, 0.10)', yOffset: 100 },
      { amplitude: 20,  frequency: 0.003,  speed: 0.01,  offset: 4, color: 'rgba(139, 92, 246, 0.10)', yOffset: 100 },
      { amplitude: 50,  frequency: 0.001,  speed: 0.005, offset: 1, color: 'rgba(0, 240, 255, 0.06)', yOffset: 100 },
    ];

    const drawWave = (wave: typeof waves[0]) => {
      ctx.beginPath();
      ctx.moveTo(0, height);

      for (let x = 0; x <= width; x++) {
        const y = Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude + wave.yOffset;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.fillStyle = wave.color;
      ctx.fill();
    };

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);
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
      className="w-full h-[200px] pointer-events-none"
      style={{ opacity: 0.9 }}
    />
  );
};
