import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ThreeDCard } from './3DElements';

interface UniversityInfo {
  id: string;
  title: string;
  description: string;
  image: string;
  stats: Array<{ value: string; label: string; color: string }>;
}

const GauhatiUniversity: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const universityInfo: UniversityInfo[] = [
    {
      id: '1',
      title: 'Gauhati University Campus',
      description: 'Established in 1948, Gauhati University is one of the oldest and most prestigious universities in Northeast India.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9e1?w=800&h=600&fit=crop',
      stats: [
        { value: '75+', label: 'Years of Excellence', color: 'text-yellow-600' },
        { value: '50+', label: 'Academic Departments', color: 'text-yellow-400' },
        { value: '100+', label: 'Research Projects', color: 'text-blue-400' },
        { value: '50K+', label: 'Students Enrolled', color: 'text-purple-400' }
      ]
    },
    {
      id: '2',
      title: 'Academic Excellence',
      description: 'Committed to providing world-class education and fostering innovation across diverse disciplines.',
      image: 'https://images.unsplash.com/photo-1523240794102-9eb5ccb83336?w=800&h=600&fit=crop',
      stats: [
        { value: '95%', label: 'Graduation Rate', color: 'text-yellow-600' },
        { value: '150+', label: 'Research Papers', color: 'text-blue-400' },
        { value: '25+', label: 'International Collaborations', color: 'text-purple-400' },
        { value: '100+', label: 'Faculty Members', color: 'text-yellow-400' }
      ]
    },
    {
      id: '3',
      title: 'Research & Innovation',
      description: 'Leading cutting-edge research in sustainable development, technology, and regional challenges.',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
      stats: [
        { value: '50+', label: 'Ongoing Projects', color: 'text-yellow-600' },
        { value: '₹10Cr+', label: 'Research Funding', color: 'text-blue-400' },
        { value: '20+', label: 'Patents Filed', color: 'text-purple-400' },
        { value: '30+', label: 'Industry Partners', color: 'text-yellow-400' }
      ]
    },
    {
      id: '4',
      title: 'Student Life',
      description: 'Vibrant campus life with diverse cultural activities, sports, and student organizations.',
      image: 'https://images.unsplash.com/photo-1523240794102-9eb5ccb83336?w=800&h=600&fit=crop',
      stats: [
        { value: '100+', label: 'Student Clubs', color: 'text-yellow-600' },
        { value: '15+', label: 'Sports Facilities', color: 'text-blue-400' },
        { value: '25+', label: 'Cultural Events', color: 'text-purple-400' },
        { value: '10+', label: 'Hostels', color: 'text-yellow-400' }
      ]
    }
  ];

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll('.university-card');
      
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
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
    
    // Animate tab content change
    gsap.to('.university-content', {
      opacity: 0,
      y: 20,
      duration: 0.3,
      onComplete: () => {
        gsap.to('.university-content', {
          opacity: 1,
          y: 0,
          duration: 0.5
        });
      }
    });
  };

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-yellow-600 pixel-font drop-shadow-lg">
          Gauhati University
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg retro-font">
          The premier institution of higher education in Northeast India, fostering innovation and sustainable development since 1948
        </p>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {universityInfo.map((info, index) => (
            <button
              key={info.id}
              onClick={() => handleTabChange(index)}
              className={`px-6 py-3 rounded-full transition-all duration-300 retro-font ${
                activeTab === index
                  ? 'bg-yellow-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              {info.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div ref={containerRef} className="grid lg:grid-cols-2 gap-12 items-center">
          <ThreeDCard className="university-card" depth={50}>
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={universityInfo[activeTab].image} 
                alt={universityInfo[activeTab].title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-yellow-600/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white retro-font font-semibold">75+ Years of Excellence</span>
              </div>
            </div>
          </ThreeDCard>

          <div className="university-content">
            <h3 className="text-3xl font-bold text-white mb-6 pixel-font">
              {universityInfo[activeTab].title}
            </h3>
            <p className="text-lg text-gray-300 mb-8 retro-font leading-relaxed">
              {universityInfo[activeTab].description}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {universityInfo[activeTab].stats.map((stat, index) => (
                <div key={index} className="bg-gray-800/50 p-4 rounded-xl backdrop-blur-sm">
                  <div className={`text-3xl font-bold mb-2 pixel-font ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300 retro-font">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GauhatiUniversity; 