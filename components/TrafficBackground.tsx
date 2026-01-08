
import React, { useEffect, useRef } from 'react';

const CAR_SPEED = 1.8;
const LANE_HEIGHT = 65;
const CAR_WIDTH = 45;
const CAR_HEIGHT = 20;

class Car {
  x: number;
  y: number;
  speed: number;
  baseColor: string;
  color: string;
  braking: boolean;
  laneIndex: number;
  width_canvas: number;

  constructor(laneIndex: number, width: number) {
    this.laneIndex = laneIndex;
    this.width_canvas = width;
    this.y = laneIndex * LANE_HEIGHT + (LANE_HEIGHT - CAR_HEIGHT) / 2;
    this.x = Math.random() * width;
    this.speed = CAR_SPEED + Math.random() * 1.2;
    const hue = 210 + Math.random() * 30;
    this.baseColor = `hsla(${hue}, 80%, 60%, 0.4)`;
    this.color = this.baseColor;
    this.braking = false;
  }

  update(width: number, mouse: { x: number, y: number, active: boolean }) {
    const dx = mouse.x - (this.x + CAR_WIDTH / 2);
    const dy = mouse.y - (this.y + CAR_HEIGHT / 2);
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (mouse.active && dist < 150) {
      this.speed *= 0.95;
      this.color = 'rgba(239, 68, 68, 0.7)'; 
      this.braking = true;
    } else {
      const targetSpeed = CAR_SPEED + (Math.sin(Date.now() * 0.001 + this.laneIndex) * 0.3);
      if (this.speed < targetSpeed) {
        this.speed += 0.04;
      } else {
        this.speed = targetSpeed;
      }
      this.color = this.baseColor;
      this.braking = false;
    }

    this.x += this.speed;
    if (this.x > width) {
      this.x = -CAR_WIDTH;
      this.speed = CAR_SPEED + Math.random() * 1.2;
    }
  }

  draw(ctx: CanvasRenderingContext2D, isDarkMode: boolean) {
    ctx.save();
    ctx.shadowBlur = this.braking ? 15 : 5;
    ctx.shadowColor = this.braking ? 'rgba(239, 68, 68, 0.5)' : 'rgba(59, 130, 246, 0.2)';
    ctx.fillStyle = this.color;
    
    ctx.beginPath();
    const r = 4;
    if (ctx.roundRect) {
      ctx.roundRect(this.x, this.y, CAR_WIDTH, CAR_HEIGHT, r);
    } else {
      ctx.rect(this.x, this.y, CAR_WIDTH, CAR_HEIGHT);
    }
    ctx.fill();

    if (this.braking) {
      ctx.fillStyle = 'rgba(255, 0, 0, 0.8)';
      ctx.fillRect(this.x, this.y + 2, 3, 4);
      ctx.fillRect(this.x, this.y + CAR_HEIGHT - 6, 3, 4);
    } else {
      ctx.fillStyle = isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(255, 255, 255, 0.3)';
      ctx.fillRect(this.x + CAR_WIDTH - 4, this.y + 2, 4, 3);
      ctx.fillRect(this.x + CAR_WIDTH - 4, this.y + CAR_HEIGHT - 5, 4, 3);
    }
    ctx.restore();
  }
}

const TrafficBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -2000, y: -2000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    let cars: Car[] = [];
    let width = 0;
    let height = 0;

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      cars = [];
      const numLanes = Math.ceil(height / LANE_HEIGHT);
      for (let i = 0; i < numLanes; i++) {
        const density = width > 1000 ? 3 : 2;
        const numCars = 1 + Math.floor(Math.random() * density);
        for (let j = 0; j < numCars; j++) {
          cars.push(new Car(i, width));
        }
      }
    };

    const animate = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      ctx.clearRect(0, 0, width, height);
      
      ctx.strokeStyle = isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.02)';
      ctx.setLineDash([20, 40]);
      const numLanes = Math.ceil(height / LANE_HEIGHT);
      for (let i = 0; i <= numLanes; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * LANE_HEIGHT);
        ctx.lineTo(width, i * LANE_HEIGHT);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      cars.forEach(car => {
        car.update(width, mouseRef.current);
        car.draw(ctx, isDarkMode);
      });
      animationFrame = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', handleMouseMove);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // z-0 and opacity-60 to make it clearly visible as a backdrop
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 opacity-60 pointer-events-none transition-opacity duration-1000 bg-transparent" 
    />
  );
};

export default TrafficBackground;
