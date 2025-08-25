import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ThreeDParallax } from './3DElements';

const HeroBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (backgroundRef.current) {
      // Parallax effect for background layers
      gsap.to(backgroundRef.current.querySelector('.parallax-bg-1'), {
        y: -100,
        duration: 2,
        ease: "power2.out",
        yoyo: true,
        repeat: -1
      });

      gsap.to(backgroundRef.current.querySelector('.parallax-bg-2'), {
        y: -50,
        duration: 3,
        ease: "power2.out",
        yoyo: true,
        repeat: -1
      });

      gsap.to(backgroundRef.current.querySelector('.parallax-bg-3'), {
        y: -150,
        duration: 4,
        ease: "power2.out",
        yoyo: true,
        repeat: -1
      });
    }
  }, []);

  return (
    <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
      {/* Background Images with Parallax */}
      <ThreeDParallax speed={0.3}>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop" 
            alt="Brahmaputra River"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
      </ThreeDParallax>

      <ThreeDParallax speed={0.5}>
        <div className="absolute inset-0 parallax-bg-1">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop" 
            alt="Assam Tea Gardens"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      </ThreeDParallax>

      <ThreeDParallax speed={0.7}>
        <div className="absolute inset-0 parallax-bg-2">
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=1080&fit=crop" 
            alt="Kaziranga National Park"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
      </ThreeDParallax>

      <ThreeDParallax speed={0.4}>
        <div className="absolute inset-0 parallax-bg-3">
          <img 
            src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1920&h=1080&fit=crop" 
            alt="Kamakhya Temple"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
      </ThreeDParallax>

      {/* 3D Floating Elements */}
      <div className="absolute top-20 left-20 parallax-bg-3">
        <div className="w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-amber-400/20 rounded-full backdrop-blur-sm border border-emerald-400/30 transform rotate-12"></div>
      </div>

      <div className="absolute bottom-20 right-20 parallax-bg-1">
        <div className="w-24 h-24 bg-gradient-to-br from-amber-400/20 to-red-400/20 rounded-full backdrop-blur-sm border border-amber-400/30 transform -rotate-12"></div>
      </div>

      <div className="absolute top-1/2 left-1/3 parallax-bg-2">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full backdrop-blur-sm border border-blue-400/30"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-emerald-900/60 to-amber-900/80"></div>
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  );
};

export default HeroBackground; 