import React, { useEffect, useRef } from 'react';

const NeuralBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Configuration
    const lineDensity = 120; // One line per X pixels (roughly)
    const numLines = Math.ceil(width / lineDensity) + 2;
    const lines: DataLine[] = [];

    class DataLine {
      x: number;
      amplitude: number;
      period: number;
      phase: number;
      speed: number;
      pulseY: number;
      pulseSpeed: number;

      constructor(x: number) {
        this.x = x;
        this.amplitude = Math.random() * 25 + 10; // Gentle curves
        this.period = Math.random() * 0.003 + 0.001; // Long waves
        this.phase = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.001 + 0.0005; // Slow undulation
        
        // Pulse properties
        this.pulseY = Math.random() * height;
        this.pulseSpeed = Math.random() * 1.5 + 0.5; // Data packet speed
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        // 1. Draw the Path (Data Pipeline)
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(136, 146, 176, 0.03)'; // Very subtle brand-gray
        ctx.lineWidth = 1;

        for (let y = 0; y <= height; y += 20) {
          const xOffset = Math.sin(y * this.period + time * this.speed + this.phase) * this.amplitude;
          if (y === 0) ctx.moveTo(this.x + xOffset, y);
          else ctx.lineTo(this.x + xOffset, y);
        }
        ctx.stroke();

        // 2. Draw the Pulse (Data Packet)
        this.pulseY += this.pulseSpeed;
        if (this.pulseY > height + 100) {
          this.pulseY = -100; // Reset to top
        }

        // Calculate current X of the pulse based on the wave function at pulseY
        const currentXOffset = Math.sin(this.pulseY * this.period + time * this.speed + this.phase) * this.amplitude;
        const pulseX = this.x + currentXOffset;

        // Draw Glow
        const gradient = ctx.createRadialGradient(pulseX, this.pulseY, 0, pulseX, this.pulseY, 4);
        gradient.addColorStop(0, 'rgba(15, 209, 194, 0.8)'); // Brand Teal Core
        gradient.addColorStop(1, 'rgba(15, 209, 194, 0)'); // Fade out

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pulseX, this.pulseY, 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize Lines
    for (let i = 0; i < numLines; i++) {
      lines.push(new DataLine(i * lineDensity + (Math.random() * 50)));
    }

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      
      lines.forEach(line => line.draw(ctx, time));
      
      time += 1;
      animationFrameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      // Re-initialization logic could go here, but for simplicity we keep existing lines
    };

    window.addEventListener('resize', handleResize);
    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
};

export default NeuralBackground;