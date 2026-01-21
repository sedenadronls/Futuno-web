import { useEffect, useRef } from 'react';

/**
 * 3D Animated Background Component
 * Creates floating geometric shapes with parallax effect
 */
export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPercent = (clientX / innerWidth - 0.5) * 2;
      const yPercent = (clientY / innerHeight - 0.5) * 2;

      const shapes = container.querySelectorAll('.floating-shape');
      shapes.forEach((shape, index) => {
        const depth = (index + 1) * 0.5;
        const x = xPercent * 20 * depth;
        const y = yPercent * 20 * depth;
        (shape as HTMLElement).style.transform = `translate(${x}px, ${y}px) rotate(${xPercent * 10}deg)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      
      {/* Secondary gradient orb */}
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-radial from-blue-500/15 via-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      
      {/* Floating 3D shapes */}
      <div className="floating-shape absolute top-[15%] left-[10%] w-20 h-20 transition-transform duration-300 ease-out">
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 backdrop-blur-sm border border-primary/20 animate-float-slow rotate-12 shadow-lg shadow-primary/20" />
      </div>
      
      <div className="floating-shape absolute top-[25%] right-[15%] w-16 h-16 transition-transform duration-300 ease-out">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400/25 to-blue-600/10 backdrop-blur-sm border border-blue-400/20 animate-float-medium shadow-lg shadow-blue-400/20" />
      </div>
      
      <div className="floating-shape absolute bottom-[30%] left-[20%] w-24 h-24 transition-transform duration-300 ease-out">
        <div className="w-full h-full rounded-xl bg-gradient-to-br from-cyan-400/20 to-cyan-600/5 backdrop-blur-sm border border-cyan-400/15 animate-float-fast -rotate-12 shadow-lg shadow-cyan-400/15" />
      </div>
      
      <div className="floating-shape absolute top-[60%] right-[10%] w-14 h-14 transition-transform duration-300 ease-out">
        <div className="w-full h-full rounded-lg bg-gradient-to-br from-purple-400/25 to-purple-600/10 backdrop-blur-sm border border-purple-400/20 animate-float-slow rotate-45 shadow-lg shadow-purple-400/15" />
      </div>
      
      <div className="floating-shape absolute bottom-[20%] right-[30%] w-12 h-12 transition-transform duration-300 ease-out">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/35 to-primary/15 backdrop-blur-sm border border-primary/25 animate-float-medium shadow-lg shadow-primary/20" />
      </div>

      <div className="floating-shape absolute top-[40%] left-[5%] w-10 h-10 transition-transform duration-300 ease-out">
        <div className="w-full h-full rounded-lg bg-gradient-to-br from-indigo-400/20 to-indigo-600/5 backdrop-blur-sm border border-indigo-400/15 animate-float-fast rotate-30 shadow-lg shadow-indigo-400/10" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/80" />
    </div>
  );
}
