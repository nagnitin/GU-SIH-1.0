import React from 'react';

const GamusaPattern: React.FC = () => {
  return (
    <div className="absolute inset-0 opacity-5">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="gamusa-pattern" x="0" y="0" width="200" height="150" patternUnits="userSpaceOnUse">
            {/* Main white background */}
            <rect x="0" y="0" width="200" height="150" fill="white" opacity="0.01"/>
            
            {/* Top horizontal stripes */}
            <rect x="0" y="0" width="200" height="3" fill="#dc2626"/>
            
            {/* Bottom horizontal stripes */}
            <rect x="0" y="147" width="200" height="3" fill="#dc2626"/>
            
            {/* Left vertical stripes */}
            <rect x="0" y="0" width="3" height="150" fill="#dc2626"/>
            
            {/* Right vertical stripes */}
            <rect x="189" y="0" width="3" height="150" fill="#dc2626"/>
            
            {/* Single diamond motif on left side */}
            <g fill="#dc2626" opacity="0.5">
              {[20, 35, 50, 65, 80, 95, 110, 125].map((y, i) => (
                <polygon key={i} points={`20,${y} 25,${y-4} 30,${y} 25,${y+4}`}/>
              ))}
            </g>
            
            {/* Single diamond motif on right side */}
            <g fill="#dc2626" opacity="0.5">
              {[20, 35, 50, 65, 80, 95, 110, 125].map((y, i) => (
                <polygon key={i} points={`170,${y} 175,${y-4} 180,${y} 175,${y+4}`}/>
              ))}
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gamusa-pattern)"/>
      </svg>
    </div>
  );
};

export default GamusaPattern;