import React, { useEffect, useRef } from 'react';

const BinaryBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const digits = ['0', '1'];
      
      // Create binary digits
      for (let i = 0; i < 50; i++) {
        const digit = document.createElement('div');
        digit.className = 'binary-digit';
        digit.textContent = digits[Math.floor(Math.random() * digits.length)];
        digit.style.left = `${Math.random() * 100}%`;
        digit.style.top = `${Math.random() * 100}%`;
        digit.style.animationDelay = `${Math.random() * 8}s`;
        digit.style.animationDuration = `${8 + Math.random() * 4}s`;
        container.appendChild(digit);
      }
    }
  }, []);

  return <div ref={containerRef} className="binary-bg" />;
};

export default BinaryBackground; 