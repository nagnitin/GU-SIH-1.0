import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AssamTea: React.FC = () => {
  const teaRef = useRef<HTMLDivElement>(null);
  const steamRef = useRef<HTMLDivElement>(null);
  const leavesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (teaRef.current && steamRef.current && leavesRef.current) {
      // Tea cup gentle sway
      gsap.to(teaRef.current, {
        rotation: 2,
        duration: 3,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });

      // Steam animation
      gsap.to(steamRef.current.children, {
        y: -40,
        opacity: 0,
        scale: 0.5,
        duration: 2,
        stagger: 0.2,
        ease: "power2.out",
        yoyo: true,
        repeat: -1
      });

      // Floating tea leaves
      gsap.to(leavesRef.current.children, {
        y: -20,
        x: 10,
        rotation: 360,
        duration: 4,
        stagger: 0.5,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });
    }
  }, []);

  return (
    <div className="absolute bottom-20 right-20 opacity-50 hidden lg:block" ref={teaRef}>
      <div className="relative">
        {/* Tea cup */}
        <div className="w-24 h-20 bg-gradient-to-b from-amber-200 to-amber-400 rounded-full relative shadow-2xl">
          {/* Cup handle */}
          <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-6 h-8 border-4 border-amber-300 rounded-r-full"></div>
          
          {/* Tea liquid */}
          <div className="absolute inset-2 bg-gradient-to-b from-amber-800 to-amber-600 rounded-full">
            {/* Tea leaves floating */}
            <div className="absolute top-2 left-3 w-2 h-1 bg-yellow-800 rounded-full opacity-60"></div>
            <div className="absolute top-4 right-4 w-1.5 h-0.5 bg-yellow-800 rounded-full opacity-60"></div>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-0.5 bg-yellow-800 rounded-full opacity-60"></div>
          </div>
          
          {/* Cup rim */}
          <div className="absolute inset-0 border-2 border-amber-300 rounded-full"></div>
        </div>
        
        {/* Steam animation */}
        <div ref={steamRef} className="absolute -top-8 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 h-8 bg-white/30 rounded-full"
              />
            ))}
          </div>
        </div>
        
        {/* Tea plantation background effect */}
        <div className="absolute -bottom-4 -left-4 w-32 h-8 bg-gradient-to-t from-green-800 to-green-600 rounded-full opacity-20"></div>
        
        {/* Floating tea leaves */}
        <div ref={leavesRef} className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-2 -left-2 w-4 h-4">
            <div className="w-full h-full bg-yellow-600 rounded-full opacity-40"></div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-3 h-3">
            <div className="w-full h-full bg-yellow-700 rounded-full opacity-40"></div>
          </div>
          <div className="absolute top-0 right-0 w-2 h-2">
            <div className="w-full h-full bg-yellow-500 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssamTea; 