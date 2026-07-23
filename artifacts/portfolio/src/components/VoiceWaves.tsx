import React, { useEffect, useRef } from 'react';

interface VoiceWavesProps {
  className?: string;
  opacity?: number;
}

export const VoiceWaves: React.FC<VoiceWavesProps> = ({
  className = "absolute inset-0 w-full h-full pointer-events-none mix-blend-screen",
  opacity = 1,
}) => {
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
      width = canvas.parentElement?.clientWidth ?? window.innerWidth;
      height = canvas.parentElement?.clientHeight ?? window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const waves = [
      { amplitude: 150, frequency: 0.001,  speed: 0.02,  offset: 0, color: 'rgba(0, 240, 255, 0.18)' },
      { amplitude: 100, frequency: 0.002,  speed: 0.03,  offset: 2, color: 'rgba(0, 240, 255, 0.35)' },
      { amplitude: 200, frequency: 0.0005, speed: 0.01,  offset: 4, color: 'rgba(0, 240, 255, 0.08)' },
      { amplitude: 120, frequency: 0.0025, speed: 0.025, offset: 1, color: 'rgba(139, 92, 246, 0.25)' },
      { amplitude: 180, frequency: 0.0015, speed: 0.015, offset: 3, color: 'rgba(0, 240, 255, 0.12)' },
    ];

    const drawWave = (wave: typeof waves[0]) => {
      ctx.beginPath();
      const centerY = height / 2;

      ctx.moveTo(-50, centerY);
      for (let x = 0; x <= width + 50; x += 5) {
        const y = centerY +
          Math.sin(x * wave.frequency + time * wave.speed + wave.offset) * wave.amplitude * Math.sin(time * 0.01) +
          Math.sin(x * wave.frequency * 2 + time * wave.speed * 1.5) * (wave.amplitude * 0.5);
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = wave.color;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowBlur = 12;
      ctx.shadowColor = wave.color;
      ctx.stroke();
      ctx.shadowBlur = 0;
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
      className={className}
      style={{ opacity }}
    />
  );
};
