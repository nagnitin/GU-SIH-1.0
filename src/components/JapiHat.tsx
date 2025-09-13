import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const JapiHat: React.FC = () => {
  const japiRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (japiRef.current && particlesRef.current) {
      // Main Japi floating animation
      gsap.to(japiRef.current, {
        y: -20,
        rotation: 15,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

      // Particles animation
      gsap.to(particlesRef.current.children, {
        y: -30,
        opacity: 0,
        duration: 2,
        stagger: 0.3,
        ease: "power2.out",
        yoyo: true,
        repeat: -1
      });
    }
  }, []);

  return (
    <div className="absolute top-20 left-10 opacity-40 hidden xl:block" ref={japiRef}>
      <div className="relative">
        {/* Main Japi structure */}
        <div className="w-32 h-20 bg-gradient-to-b from-amber-800 to-amber-600 rounded-full relative overflow-hidden shadow-2xl transform rotate-12">
          {/* Bamboo weave pattern */}
          <div className="absolute inset-2 bg-gradient-to-b from-amber-700 to-amber-500 rounded-full">
            {/* Horizontal bamboo strips */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div
                key={i}
                className="absolute w-full h-0.5 bg-amber-900/50"
                style={{ top: `${i * 10}%` }}
              />
            ))}
            
            {/* Vertical bamboo strips */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
              <div
                key={i}
                className="absolute h-full w-0.5 bg-amber-900/50"
                style={{ left: `${i * 8}%` }}
              />
            ))}
          </div>
          
          {/* Decorative border */}
          <div className="absolute inset-0 border-2 border-amber-900/30 rounded-full"></div>
          
          {/* Traditional Assamese motifs */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-4 h-4 bg-red-600 rounded-full opacity-80"></div>
          </div>
          
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
            <div className="w-3 h-3 bg-yellow-600 rounded-full opacity-80"></div>
          </div>
          
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-blue-600 rounded-full opacity-80"></div>
          </div>
          
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
            <div className="w-2 h-2 bg-yellow-500 rounded-full opacity-80"></div>
          </div>
        </div>
        
        {/* Japi string/tie */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="w-16 h-1 bg-red-600 rounded-full opacity-60"></div>
        </div>
        
        {/* Floating particles around Japi */}
        <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-4 -left-4 w-2 h-2 bg-emerald-400 rounded-full"></div>
          <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-amber-400 rounded-full"></div>
          <div className="absolute -top-2 -right-2 w-1.5 h-1.5 bg-red-400 rounded-full"></div>
          <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default JapiHat; 