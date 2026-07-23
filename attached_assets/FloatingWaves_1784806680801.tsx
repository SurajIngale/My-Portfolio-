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
      height = 200; // Fixed height for the wave container
      canvas.width = width;
      canvas.height = height;
    };

    const waves = [
      {
        amplitude: 30,
        frequency: 0.002,
        speed: 0.02,
        offset: 0,
        color: 'rgba(0, 138, 127, 0.1)', // Primary Teal with low opacity
        yOffset: 100,
      },
      {
        amplitude: 40,
        frequency: 0.0015,
        speed: 0.015,
        offset: 2,
        color: 'rgba(77, 182, 172, 0.1)', // Primary Light with low opacity
        yOffset: 100,
      },
      {
        amplitude: 20,
        frequency: 0.003,
        speed: 0.01,
        offset: 4,
        color: 'rgba(0, 109, 100, 0.1)', // Primary Dark with low opacity
        yOffset: 100,
      },
      {
        amplitude: 50,
        frequency: 0.001,
        speed: 0.005,
        offset: 1,
        color: 'rgba(0, 138, 127, 0.05)', // Primary Teal very low opacity
        yOffset: 100,
      }
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

      // Create a subtle gradient mask for fading out at the top
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, 'rgba(0,0,0,0)');
      gradient.addColorStop(0.5, 'rgba(0,0,0,1)');
      gradient.addColorStop(1, 'rgba(0,0,0,1)');
      
      // We can't easily mask individual waves with globalCompositeOperation 'destination-in' 
      // without clearing, so we just rely on the alpha of the waves themselves.
      // However, to make it look like the reference (fading into darkness), 
      // we can draw the waves and then overlay a gradient if needed, 
      // or just trust the wave alpha.
      
      // Let's draw waves
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
      style={{ opacity: 0.8 }}
    />
  );
};
