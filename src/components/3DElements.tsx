import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface ThreeDElementProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  perspective?: number;
  hoverEffect?: boolean;
}

const ThreeDElement: React.FC<ThreeDElementProps> = ({ 
  children, 
  className = '', 
  depth = 20, 
  perspective = 1000,
  hoverEffect = true 
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current && hoverEffect) {
      const element = elementRef.current;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / centerY * -10;
        const rotateY = (x - centerX) / centerX * 10;

        gsap.to(element, {
          rotateX: rotateX,
          rotateY: rotateY,
          duration: 0.2,
          ease: "power1.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: "power1.out"
        });
      };

      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [hoverEffect]);

  return (
    <div 
      ref={elementRef}
      className={`transform-gpu ${className}`}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d'
      }}
    >
      <div
        style={{
          transform: `translateZ(${depth}px)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {children}
      </div>
    </div>
  );
};

// 3D Card Component
export const ThreeDCard: React.FC<ThreeDElementProps> = ({ children, className = '', depth = 30 }) => {
  return (
    <ThreeDElement className={`${className} transition-all duration-300`} depth={depth}>
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 shadow-2xl">
        {children}
      </div>
    </ThreeDElement>
  );
};

// 3D Floating Element
export const ThreeDFloating: React.FC<ThreeDElementProps> = ({ children, className = '' }) => {
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (floatingRef.current) {
      gsap.to(floatingRef.current, {
        y: -15,
        duration: 2.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
      });
    }
  }, []);

  return (
    <div ref={floatingRef} className={`transform-gpu ${className}`}>
      {children}
    </div>
  );
};

// 3D Parallax Background
export const ThreeDParallax: React.FC<{ children: React.ReactNode; speed?: number }> = ({ 
  children, 
  speed = 0.5 
}) => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * speed;
        
        gsap.set(parallaxRef.current, {
          y: rate
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={parallaxRef} className="transform-gpu">
      {children}
    </div>
  );
};

export default ThreeDElement; 