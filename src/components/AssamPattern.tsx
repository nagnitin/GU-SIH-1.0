import React from 'react';

const AssamPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 opacity-5">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <pattern id="assam-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
          <path d="M30,30 L70,30 L70,70 L30,70 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="25" cy="25" r="3" fill="currentColor"/>
          <circle cx="75" cy="75" r="3" fill="currentColor"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#assam-pattern)"/>
      </svg>
    </div>
  );
};

export default AssamPattern;