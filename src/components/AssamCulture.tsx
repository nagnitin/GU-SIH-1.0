import React from 'react';

const AssamCulture: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none hidden 2xl:block">
      <div className="relative">
        {/* Traditional Assamese dance motifs */}
        <div className="w-64 h-64 relative">
          {/* Outer ring - Bihu dance circle */}
          <div className="absolute inset-0 border-2 border-emerald-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          
          {/* Middle ring - Traditional patterns */}
          <div className="absolute inset-8 border border-amber-400/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
          
          {/* Inner ring - Cultural symbols */}
          <div className="absolute inset-16 border border-red-400/20 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
          
          {/* Center - Traditional Assamese symbol */}
          <div className="absolute inset-24 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full opacity-20 animate-pulse"></div>
          
          {/* Floating cultural elements */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
            <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          {/* Traditional musical instruments */}
          <div className="absolute top-4 left-4">
            <div className="w-6 h-2 bg-amber-600 rounded-full animate-pulse opacity-60"></div>
          </div>
          <div className="absolute top-4 right-4">
            <div className="w-2 h-6 bg-amber-600 rounded-full animate-pulse opacity-60" style={{ animationDelay: '0.5s' }}></div>
          </div>
          <div className="absolute bottom-4 left-4">
            <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="w-3 h-3 bg-yellow-600 rounded-full animate-pulse opacity-60" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
        
        {/* Traditional Assamese text elements */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-xs text-emerald-400/50 font-bold">বিহু</div>
        </div>
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <div className="text-xs text-amber-400/50 font-bold">আসাম</div>
        </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-90 text-center">
          <div className="text-xs text-red-400/50 font-bold">সংস্কৃতি</div>
        </div>
        <div className="absolute right-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 text-center">
          <div className="text-xs text-blue-400/50 font-bold">ঐতিহ্য</div>
        </div>
      </div>
    </div>
  );
};

export default AssamCulture; 