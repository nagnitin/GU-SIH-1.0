import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ThreeDCard } from './3DElements';

interface RealImageItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  location: string;
  description: string;
}

const AssamRealImages: React.FC = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  const realImages: RealImageItem[] = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      alt: 'Brahmaputra River',
      title: 'Brahmaputra River',
      location: 'Guwahati, Assam',
      description: 'The mighty Brahmaputra flowing through Guwahati'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
      alt: 'Tea Gardens',
      title: 'Tea Gardens',
      location: 'Jorhat, Assam',
      description: 'Lush green tea plantations of Assam'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      alt: 'Kaziranga National Park',
      title: 'Kaziranga National Park',
      location: 'Golaghat, Assam',
      description: 'Home to the one-horned rhinoceros'
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=800&h=600&fit=crop',
      alt: 'Kamakhya Temple',
      title: 'Kamakhya Temple',
      location: 'Guwahati, Assam',
      description: 'Ancient temple on Nilachal Hill'
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop',
      alt: 'Assam Wildlife',
      title: 'Assam Wildlife',
      location: 'Various Locations',
      description: 'Rich biodiversity and wildlife'
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop',
      alt: 'Assam Landscapes',
      title: 'Assam Landscapes',
      location: 'Northeast India',
      description: 'Breathtaking landscapes of Assam'
    }
  ];

  useEffect(() => {
    if (imagesRef.current) {
      const cards = imagesRef.current.querySelectorAll('.real-image-card');
      
      gsap.fromTo(cards, 
        { 
          y: 100, 
          opacity: 0, 
          rotationX: -15,
          scale: 0.8
        },
        { 
          y: 0, 
          opacity: 1, 
          rotationX: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent pixel-font">
          Real Assam & Northeast India
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg retro-font">
          Discover the authentic beauty and culture of Assam through these real images
        </p>
        <div ref={imagesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {realImages.map((image, index) => (
            <ThreeDCard 
              key={image.id} 
              className="real-image-card group cursor-pointer"
              depth={40}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600/80 text-white px-3 py-1 rounded-full text-sm retro-font">
                    Assam
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 retro-font">{image.title}</h3>
                    <p className="text-sm text-gray-200 retro-font mb-1">{image.location}</p>
                    <p className="text-sm text-gray-300 retro-font">{image.description}</p>
                  </div>
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssamRealImages; 