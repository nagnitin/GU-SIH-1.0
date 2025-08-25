import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FloatingParticles: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (particlesRef.current) {
      const particles = particlesRef.current.children;
      
      gsap.to(particles, {
        y: -100,
        x: (i) => (i % 2 === 0 ? 50 : -50),
        opacity: 0,
        duration: (i) => 3 + Math.random() * 4,
        ease: "power1.out",
        stagger: 0.1,
        repeat: -1,
        yoyo: true
      });
    }
  }, []);

  return (
    <div ref={particlesRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full opacity-30"></div>
        </div>
      ))}
    </div>
  );
};

export default FloatingParticles;