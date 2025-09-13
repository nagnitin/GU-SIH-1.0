import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ThreeDCard } from './3DElements';

interface LocationPoint {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  x: number;
  y: number;
}

const AssamInteractiveMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<LocationPoint | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const locations: LocationPoint[] = [
    {
      id: '1',
      name: 'Guwahati',
      category: 'City',
      description: 'The largest city in Assam and the gateway to Northeast India',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      x: 20,
      y: 30
    },
    {
      id: '2',
      name: 'Kaziranga National Park',
      category: 'Wildlife',
      description: 'UNESCO World Heritage Site, home to the one-horned rhinoceros',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      x: 60,
      y: 20
    },
    {
      id: '3',
      name: 'Jorhat Tea Gardens',
      category: 'Tea Gardens',
      description: 'Famous tea plantations producing world-class Assam tea',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      x: 70,
      y: 40
    },
    {
      id: '4',
      name: 'Kamakhya Temple',
      category: 'Culture',
      description: 'Ancient temple dedicated to Goddess Kamakhya on Nilachal Hill',
      image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&h=300&fit=crop',
      x: 25,
      y: 35
    },
    {
      id: '5',
      name: 'Majuli Island',
      category: 'Heritage',
      description: 'World\'s largest river island and cultural hub of Assam',
      image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
      x: 65,
      y: 50
    },
    {
      id: '6',
      name: 'Manas National Park',
      category: 'Wildlife',
      description: 'Tiger Reserve and UNESCO World Heritage Site',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop',
      x: 15,
      y: 60
    }
  ];

  useEffect(() => {
    if (mapRef.current) {
      const points = mapRef.current.querySelectorAll('.map-point');
      
      gsap.fromTo(points, 
        { 
          scale: 0, 
          opacity: 0 
        },
        { 
          scale: 1, 
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const handleLocationClick = (location: LocationPoint) => {
    setSelectedLocation(location);
    
    // Animate the details card
    gsap.fromTo('.location-details', 
      { 
        opacity: 0, 
        y: 20, 
        scale: 0.9 
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.5,
        ease: "power2.out"
      }
    );
  };

  const categories = ['City', 'Wildlife', 'Tea Gardens', 'Culture', 'Heritage'];

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent pixel-font">
          Interactive Assam Map
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg retro-font">
          Click on the points to explore key locations across Assam
        </p>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <div ref={mapRef} className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-600/30 min-h-[500px]">
              {/* Background Image */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop" 
                  alt="Assam Landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Location Points */}
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => handleLocationClick(location)}
                  className="map-point absolute w-4 h-4 bg-yellow-600 rounded-full border-2 border-white shadow-lg hover:scale-150 transition-transform duration-300 cursor-pointer"
                  style={{ 
                    left: `${location.x}%`, 
                    top: `${location.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs retro-font whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {location.name}
                  </div>
                </button>
              ))}
              
              {/* Categories */}
              <div className="absolute bottom-4 left-4 bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2 retro-font">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <span key={category} className="bg-yellow-600 text-white px-3 py-1 rounded-full text-xs retro-font">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="lg:col-span-1">
            {selectedLocation ? (
              <ThreeDCard className="location-details" depth={30}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 retro-font">{selectedLocation.name}</h3>
                  <span className="inline-block bg-yellow-600/20 text-yellow-600 px-3 py-1 rounded-full text-sm retro-font mb-4">
                    {selectedLocation.category}
                  </span>
                  <p className="text-gray-300 mb-4 retro-font">{selectedLocation.description}</p>
                  <img 
                    src={selectedLocation.image} 
                    alt={selectedLocation.name}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </ThreeDCard>
            ) : (
              <ThreeDCard className="location-details" depth={30}>
                <div className="text-center">
                  <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 retro-font">Explore Assam</h3>
                  <p className="text-gray-300 retro-font">
                    Click on any point on the map to learn more about that location
                  </p>
                </div>
              </ThreeDCard>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssamInteractiveMap; 