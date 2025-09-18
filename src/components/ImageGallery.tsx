import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ThreeDCard } from './3DElements';

interface ImageItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category: string;
}

const ImageGallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  const images: ImageItem[] = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1685948704729-ea8b6af566b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Assam Tea Gardens',
      title: 'Tea Gardens of Assam',
      description: 'Lush green tea plantations stretching across the rolling hills',
      category: 'tea-garden'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1621789547000-b74d615ce6c5?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Brahmaputra River',
      title: 'Mighty Brahmaputra',
      description: 'The lifeline of Northeast India flowing through the valley',
      category: 'brahmaputra'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1668007598394-292ee944e83b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Northeast Forests',
      title: 'Biodiversity Hotspot',
      description: 'Rich biodiversity and dense forests of Northeast India',
      category: 'biodiversity'
    },
    {
      id: '4',
      src: 'https://i.pinimg.com/736x/4c/88/94/4c8894faf7b15fc026f98f646436c6b2.jpg',
      alt: 'Traditional Assamese Culture',
      title: 'Cultural Heritage',
      description: 'Traditional Assamese culture and heritage',
      category: 'heritage'
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1675296098308-f9f526c6b724?q=80&w=1134&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Assam Wildlife',
      title: 'Wildlife Sanctuary',
      description: 'Diverse wildlife and natural habitats',
      category: 'biodiversity'
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1625418828597-8ffc3d2e666d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Assam Landscapes',
      title: 'Scenic Landscapes',
      description: 'Breathtaking landscapes of Northeast India',
      category: 'landscape'
    }
  ];

  useEffect(() => {
    if (galleryRef.current) {
      const cards = galleryRef.current.querySelectorAll('.image-card');
      
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
            trigger: galleryRef.current,
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-blue-700 font-serif tracking-wide">
          Northeast India in Pictures
        </h2>
        <p className="text-center text-gray-900 mb-12 text-lg font-serif font-semibold">
          Discover the diverse beauty and culture of Northeast India
        </p>
        <div ref={galleryRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <ThreeDCard 
              key={image.id}
              className="image-card group cursor-pointer"
              depth={40}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2 font-serif text-white drop-shadow-lg">{image.title}</h3>
                    <p className="text-sm text-gray-100 font-serif font-semibold drop-shadow-md">{image.description}</p>
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

export default ImageGallery; 