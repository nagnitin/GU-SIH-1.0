import React from 'react';

const GamusaAccent: React.FC = () => {
  return (
    <div className="absolute top-10 right-10 opacity-20 animate-gamusaWave hidden lg:block">
      <div className="w-40 h-24 bg-white rounded-sm shadow-2xl transform rotate-12 relative overflow-hidden">
        {/* Top horizontal stripes */}
        <div className="absolute top-0 left-0 w-full">
          <div className="w-full h-1 bg-red-600"></div>
        </div>
        
        {/* Bottom horizontal stripes */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="w-full h-1 bg-red-600"></div>
        </div>
        
        {/* Left vertical stripes */}
        <div className="absolute left-0 top-0 h-full">
          <div className="h-full w-1 bg-red-600"></div>
        </div>
        
        {/* Right vertical stripes */}
        <div className="absolute right-0 top-0 h-full">
          <div className="h-full w-1 bg-red-600"></div>
        </div>
        
        {/* Single diamond motif on left side */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-1">
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <div className="w-2 h-2 bg-red-600 transform rotate-45"></div>
            </div>
          ))}
        </div>
        
        {/* Single diamond motif on right side */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-1">
          {[0, 1, 2].map((i) => (
            <div key={i}>
              <div className="w-2 h-2 bg-red-600 transform rotate-45"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamusaAccent;