import { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export function InteractiveSnake() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const animationFrameRef = useRef<number>();

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Initialize particles (reduced count for performance, even fewer on mobile)
  useEffect(() => {
    const initialParticles: Particle[] = [];
    const particleCount = isMobile ? 10 : 20;
    for (let i = 0; i < particleCount; i++) {
      initialParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 4 + 2,
      });
    }
    setParticles(initialParticles);
  }, [isMobile]);

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  // Animate particles (skip on mobile for better performance)
  useEffect(() => {
    if (isMobile) return; // Disable animation on mobile

    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;
          let newVx = particle.vx;
          let newVy = particle.vy;

          // Bounce off edges
          if (newX <= 0 || newX >= 100) {
            newVx = -particle.vx;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            newVy = -particle.vy;
            newY = Math.max(0, Math.min(100, newY));
          }

          // React to mouse when hovered
          if (isHovered) {
            const dx = mousePos.x - newX;
            const dy = mousePos.y - newY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 20) {
              const force = (20 - distance) / 20;
              newVx -= (dx / distance) * force * 0.5;
              newVy -= (dy / distance) * force * 0.5;
            }
          }

          // Apply drag
          newVx *= 0.98;
          newVy *= 0.98;

          // Keep minimum velocity
          if (Math.abs(newVx) < 0.1) newVx += (Math.random() - 0.5) * 0.2;
          if (Math.abs(newVy) < 0.1) newVy += (Math.random() - 0.5) * 0.2;

          return {
            ...particle,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        })
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered, mousePos, isMobile]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-full min-h-[500px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full blur-3xl opacity-20"></div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {particles.map((particle, i) =>
            particles.slice(i + 1).map((otherParticle) => {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const maxDistance = 20;

              if (distance < maxDistance) {
                const opacity = (1 - distance / maxDistance) * (isHovered ? 0.4 : 0.2);
                return (
                  <line
                    key={`${particle.id}-${otherParticle.id}`}
                    x1={`${particle.x}%`}
                    y1={`${particle.y}%`}
                    x2={`${otherParticle.x}%`}
                    y2={`${otherParticle.y}%`}
                    stroke="rgb(16, 185, 129)"
                    strokeWidth="1"
                    opacity={opacity}
                  />
                );
              }
              return null;
            })
          )}
        </svg>

        {/* Particle dots */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-emerald-500 transition-opacity duration-300"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: isHovered ? 0.6 : 0.3,
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 10px rgba(16, 185, 129, 0.5)',
            }}
          />
        ))}
      </div>

      {/* Snake Image */}
      <img
        src="https://images.unsplash.com/photo-1758186763733-7077c8b91e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHZpcGVyJTIwc25ha2UlMjBncmVlbnxlbnwxfHx8fDE3NjMwMDY0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Hitviper"
        className="relative w-full max-w-md h-auto transition-transform duration-700 ease-out z-10"
        style={{
          transform: isHovered ? 'rotate(8deg) scale(1.05)' : 'rotate(0deg) scale(1)',
          mixBlendMode: 'multiply',
        }}
        loading="eager"
      />
    </div>
  );
}
