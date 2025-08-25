import React, { useEffect, useRef } from 'react';
import { Calendar, Users, Trophy, MapPin, Clock, Mail, Phone, Code, Zap, Target } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
import FloatingParticles from './components/FloatingParticles';
import TypewriterEffect from './components/TypewriterEffect';
import CodeSnippet from './components/CodeSnippet';
import AssamPattern from './components/AssamPattern';
import GamusaPattern from './components/GamusaPattern';
import GamusaAccent from './components/GamusaAccent';
import JapiHat from './components/JapiHat';
import AssamTea from './components/AssamTea';
import AssamCulture from './components/AssamCulture';
import CountdownTimer from './components/CountdownTimer';
import AssamIcons from './components/AssamIcons';
import HeroBackground from './components/HeroBackground';
import ImageGallery from './components/ImageGallery';
import AssamRealImages from './components/AssamRealImages';
import GauhatiUniversity from './components/GauhatiUniversity';
import AssamInteractiveMap from './components/AssamInteractiveMap';
import { ThreeDCard, ThreeDFloating } from './components/3DElements';
import BinaryBackground from './components/BinaryBackground';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Hero section animations
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.2,
          ease: "power2.out"
        }
      );
    }

    // Section animations on scroll
    gsap.utils.toArray('section[id]').forEach((section: any) => {
      gsap.fromTo(section,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

      return (
      <div className="min-h-screen text-white relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <BinaryBackground />
        <HeroBackground />
        <FloatingParticles />
        <AssamPattern />
        <GamusaPattern />
        <GamusaAccent />
        <JapiHat />
        <AssamTea />
        <AssamCulture />
      
      {/* Header */}
      <header className="relative z-10 p-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent pixel-font-glow">
            GU SIH 1.0
          </div>
                                <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-emerald-400 transition-colors relative group retro-font">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#themes" className="hover:text-emerald-400 transition-colors relative group retro-font">
              Themes
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#rules" className="hover:text-emerald-400 transition-colors relative group retro-font">
              Rules
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#timeline" className="hover:text-emerald-400 transition-colors relative group retro-font">
              Timeline
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#prizes" className="hover:text-emerald-400 transition-colors relative group retro-font">
              Prizes
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors relative group retro-font">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-amber-600 px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all">
              Register Now
            </button>
            <button className="md:hidden text-white hover:text-emerald-400 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-6" ref={heroRef}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-200 bg-clip-text text-transparent pixel-font-large">
                GU SIH
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-300 via-green-200 to-green-100 bg-clip-text text-transparent pixel-font-large">
                1.0
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-green-300 mb-4 retro-font">
              Gauhati University Smart India Hackathon
            </p>
            <div className="text-xl text-green-200 min-h-[2rem] retro-font">
              <TypewriterEffect 
                texts={[
                  "Technology for Sustainable Development.",
                  "Solving Northeast India's Challenges.",
                  "UN SDGs in Action.",
                  "Innovation for a Better Tomorrow.",
                  "Where Tradition Meets Technology.",
                  "Building Sustainable Solutions."
                ]}
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            <div className="flex items-center text-green-400">
              <Calendar className="mr-2" />
              <span className="retro-font">Coming Soon</span>
            </div>
            <div className="flex items-center text-green-300">
              <MapPin className="mr-2" />
              <span className="retro-font">Gauhati University, Guwahati</span>
            </div>
            <div className="flex items-center text-green-200">
              <Users className="mr-2" />
              <span className="retro-font">UN SDGs Focus</span>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="#registration" className="retro-button px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all animate-pulse inline-block text-white">
              Register Now
            </a>
            <button className="border-2 border-green-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400 hover:text-gray-900 transition-all retro-font">
              View Themes
            </button>
          </div>
          
          {/* Countdown Timer */}
          <div className="max-w-2xl mx-auto mb-12">
            <CountdownTimer />
          </div>
          
          {/* SDG Badge */}
          <ThreeDFloating>
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-green-600 to-green-500 px-6 py-3 rounded-full text-white font-semibold flex items-center space-x-2 shadow-2xl backdrop-blur-sm">
                <span className="text-2xl">🌱</span>
                <span className="retro-font">UN Sustainable Development Goals</span>
                <span className="text-2xl">🌍</span>
              </div>
            </div>
          </ThreeDFloating>
        </div>

        {/* Floating Code Snippets */}
        <div className="hidden lg:block">
          <CodeSnippet className="absolute top-20 left-10" delay={1000} />
          <CodeSnippet className="absolute bottom-20 right-10" delay={2000} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent pixel-font">
            About GU SIH 1.0
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-gray-300 retro-font">
                Northeast India, with its rich biodiversity, cultural heritage, and economic potential, 
                faces unique sustainability challenges. GU SIH 1.0 brings together students and innovators 
                to co-create locally relevant, impactful solutions aligned with the UN Sustainable 
                Development Goals (SDGs).
              </p>
              <p className="text-lg leading-relaxed text-gray-300 retro-font">
                From floods from the Brahmaputra to tea garden livelihood issues, waste mismanagement, 
                and fragile power infrastructure - this hackathon addresses the region's most pressing 
                challenges through technology-driven sustainable development solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Flood Management', 'Tea Garden Tech', 'Waste Management', 'Power Infrastructure', 'Biodiversity', 'Cultural Heritage'].map((tag) => (
                  <span key={tag} className="bg-green-600/20 border border-green-400 px-4 py-2 rounded-full retro-font">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
                              <div className="bg-gradient-to-r from-green-600 to-green-500 p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 retro-font">Why GU SIH 1.0?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Trophy className="mr-3 mt-1 text-amber-400" size={20} />
                    <span className="retro-font">UN SDGs Alignment</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="mr-3 mt-1 text-emerald-400" size={20} />
                    <span className="retro-font">Academic Excellence</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="mr-3 mt-1 text-teal-400" size={20} />
                    <span className="retro-font">Local Impact Focus</span>
                  </li>
                  <li className="flex items-start">
                    <Target className="mr-3 mt-1 text-red-400" size={20} />
                    <span className="retro-font">Sustainable Solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="relative z-10 py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent pixel-font">
            Hackathon Themes
          </h2>
          <p className="text-center text-gray-300 mb-12 text-lg retro-font">
            Focus on UN Sustainable Development Goals (SDGs) for Northeast India
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ThreeDCard className="group cursor-pointer" depth={50}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <AssamIcons type="brahmaputra" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-2 retro-font">Flood Management</h3>
                <p className="text-sm text-blue-300 retro-font">SDG 13: Climate Action</p>
              </div>
              <p className="text-gray-300 text-center retro-font">
                Technology solutions for Brahmaputra flood prediction, early warning systems, 
                and resilient infrastructure development.
              </p>
              <div className="mt-4 p-4 bg-blue-600/10 rounded-lg border border-blue-400/20">
                <img 
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop" 
                  alt="Brahmaputra River"
                  className="w-full h-24 object-cover rounded-lg opacity-80"
                />
              </div>
            </ThreeDCard>
            
                        <ThreeDCard className="group cursor-pointer" depth={50}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <AssamIcons type="tea-garden" className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-green-400 mb-2 retro-font">Tea Garden Technology</h3>
                  <p className="text-sm text-green-300 retro-font">SDG 8: Decent Work</p>
                </div>
                <p className="text-gray-300 text-center retro-font">
                  Digital solutions for tea garden workers' livelihood improvement, 
                  sustainable farming practices, and market access.
                </p>
                <div className="mt-4 p-4 bg-green-600/10 rounded-lg border border-green-400/20">
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop" 
                    alt="Tea Gardens"
                    className="w-full h-24 object-cover rounded-lg opacity-80"
                  />
                </div>
              </ThreeDCard>
            
            <ThreeDCard className="group cursor-pointer" depth={50}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2 L12 22" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 6 L16 6" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 10 L16 10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 14 L16 14" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <path d="M8 18 L16 18" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="8" r="1" fill="currentColor"/>
                    <circle cx="12" cy="12" r="1" fill="currentColor"/>
                    <circle cx="12" cy="16" r="1" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2 retro-font">Waste Management</h3>
                <p className="text-sm text-yellow-300 retro-font">SDG 12: Responsible Consumption</p>
              </div>
              <p className="text-gray-300 text-center retro-font">
                Smart waste collection, recycling innovations, and circular economy 
                solutions for urban and rural areas.
              </p>
              <div className="mt-4 p-4 bg-yellow-600/10 rounded-lg border border-yellow-400/20">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop" 
                  alt="Waste Management"
                  className="w-full h-24 object-cover rounded-lg opacity-80"
                />
              </div>
            </ThreeDCard>
            
            <ThreeDCard className="group cursor-pointer" depth={50}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2 L3 14 L12 14 L11 22 L21 10 L12 10 Z" fill="currentColor"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-2 retro-font">Power Infrastructure</h3>
                <p className="text-sm text-purple-300 retro-font">SDG 7: Affordable Energy</p>
              </div>
              <p className="text-gray-300 text-center retro-font">
                Renewable energy solutions, smart grid technologies, and energy 
                access for remote communities.
              </p>
              <div className="mt-4 p-4 bg-purple-600/10 rounded-lg border border-purple-400/20">
                <img 
                  src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=200&fit=crop" 
                  alt="Power Infrastructure"
                  className="w-full h-24 object-cover rounded-lg opacity-80"
                />
              </div>
            </ThreeDCard>
            
            <ThreeDCard className="group cursor-pointer" depth={50}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <AssamIcons type="biodiversity" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-2 retro-font">Biodiversity Conservation</h3>
                <p className="text-sm text-emerald-300 retro-font">SDG 15: Life on Land</p>
              </div>
              <p className="text-gray-300 text-center retro-font">
                Wildlife monitoring, forest conservation, and sustainable tourism 
                solutions for Northeast's rich biodiversity.
              </p>
              <div className="mt-4 p-4 bg-emerald-600/10 rounded-lg border border-emerald-400/20">
                <img 
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=200&fit=crop" 
                  alt="Biodiversity"
                  className="w-full h-24 object-cover rounded-lg opacity-80"
                />
              </div>
            </ThreeDCard>
            
            <ThreeDCard className="group cursor-pointer" depth={50}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <AssamIcons type="heritage" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-2 retro-font">Cultural Heritage</h3>
                <p className="text-sm text-red-300 retro-font">SDG 11: Sustainable Cities</p>
              </div>
              <p className="text-gray-300 text-center retro-font">
                Digital preservation of cultural heritage, traditional knowledge 
                documentation, and cultural tourism enhancement.
              </p>
              <div className="mt-4 p-4 bg-red-600/10 rounded-lg border border-red-400/20">
                <img 
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=400&h=200&fit=crop" 
                  alt="Cultural Heritage"
                  className="w-full h-24 object-cover rounded-lg opacity-80"
                />
              </div>
            </ThreeDCard>
          </div>
        </div>
      </section>

      {/* Real Assam Images Section */}
      <section className="relative z-10">
        <AssamRealImages />
      </section>

      {/* Gauhati University Section */}
      <section className="relative z-10">
        <GauhatiUniversity />
      </section>

      {/* Interactive Assam Map Section */}
      <section className="relative z-10">
        <AssamInteractiveMap />
      </section>

      {/* Image Gallery Section */}
      <section className="relative z-10 bg-black/20">
        <ImageGallery />
      </section>

      {/* Rules & Regulations Section */}
      <section id="rules" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent pixel-font">
            Rules & Regulations
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <ThreeDCard className="space-y-6" depth={30}>
              <h3 className="text-2xl font-bold text-green-400 mb-4 retro-font">Team Guidelines</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></div>
                  <span className="retro-font">Team size: 4-6 members per team</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></div>
                  <span className="retro-font">All team members must be current students</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></div>
                  <span className="retro-font">Inter-disciplinary teams are encouraged</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3"></div>
                  <span className="retro-font">One mentor per team (optional)</span>
                </li>
              </ul>
            </ThreeDCard>
            
            <ThreeDCard className="space-y-6" depth={30}>
              <h3 className="text-2xl font-bold text-green-300 mb-4 retro-font">Competition Rules</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                  <span className="retro-font">48-hour continuous coding period</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                  <span className="retro-font">All code must be written during the hackathon</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                  <span className="retro-font">Open source libraries and APIs allowed</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-300 rounded-full mt-2 mr-3"></div>
                  <span className="retro-font">Final presentation: 5 minutes + 3 minutes Q&A</span>
                </li>
              </ul>
            </ThreeDCard>
          </div>
          
          <ThreeDCard className="mt-12" depth={40}>
            <h3 className="text-2xl font-bold text-center mb-6 text-white retro-font">Judging Criteria</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">💡</span>
                </div>
                <h4 className="font-bold text-green-400 mb-2 retro-font">Innovation</h4>
                <p className="text-sm text-gray-300 retro-font">Novel approach to problem-solving</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🎯</span>
                </div>
                <h4 className="font-bold text-green-300 mb-2 retro-font">Impact</h4>
                <p className="text-sm text-gray-300 retro-font">Potential for real-world application</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">⚙️</span>
                </div>
                <h4 className="font-bold text-green-200 mb-2 retro-font">Technical Excellence</h4>
                <p className="text-sm text-gray-300 retro-font">Code quality and implementation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🌱</span>
                </div>
                <h4 className="font-bold text-green-400 mb-2 retro-font">Sustainability</h4>
                <p className="text-sm text-gray-300 retro-font">Alignment with UN SDGs</p>
              </div>
            </div>
          </ThreeDCard>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent pixel-font">
            Event Timeline
          </h2>
          <div className="space-y-8">
            {[
              { day: 'Day 1', time: 'Coming Soon', events: ['Registration & Team Formation', 'Opening Ceremony & SDG Workshop', 'Theme Announcement', 'Hacking Begins!'] },
              { day: 'Day 2', time: 'Coming Soon', events: ['Expert Mentor Sessions', 'Workshop: Sustainable Tech Solutions', 'Mid-point Check-ins', 'Cultural Evening with Bihu'] },
              { day: 'Day 3', time: 'Coming Soon', events: ['Final Submissions', 'Project Presentations', 'SDG Impact Assessment', 'Awards & Closing Ceremony'] }
            ].map((day, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="bg-gradient-to-r from-green-600 to-green-500 w-16 h-16 rounded-full flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl flex-1 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-green-400 mb-2 retro-font">{day.day} - {day.time}</h3>
                  <ul className="space-y-2 text-gray-300">
                    {day.events.map((event, i) => (
                      <li key={i} className="flex items-center">
                        <Clock className="mr-2 text-green-400" size={16} />
                        <span className="retro-font">{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section id="prizes" className="relative z-10 py-20 px-6 bg-gradient-to-br from-black/30 via-gray-900/20 to-black/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent pixel-font">
            Prizes & Recognition
          </h2>
          <p className="text-xl text-gray-300 mb-12 retro-font max-w-3xl mx-auto">
            Compete for prestigious awards and recognition in sustainable development innovation
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                place: '1st Place', 
                prize: '₹1,00,000', 
                gradient: 'from-yellow-300 via-yellow-400 to-orange-500',
                border: 'border-yellow-400/30',
                glow: 'shadow-yellow-500/20',
                icon: '🥇', 
                subtitle: 'Best SDG Impact' 
              },
              { 
                place: '2nd Place', 
                prize: '₹75,000', 
                gradient: 'from-slate-300 via-slate-400 to-slate-600',
                border: 'border-slate-400/30',
                glow: 'shadow-slate-500/20',
                icon: '🥈', 
                subtitle: 'Innovation Award' 
              },
              { 
                place: '3rd Place', 
                prize: '₹50,000', 
                gradient: 'from-orange-300 via-orange-400 to-red-500',
                border: 'border-orange-400/30',
                glow: 'shadow-orange-500/20',
                icon: '🥉', 
                subtitle: 'Technical Excellence' 
              }
            ].map((prize, index) => (
              <ThreeDCard key={index} className="group" depth={50}>
                <div className={`relative bg-gradient-to-br ${prize.gradient} p-8 rounded-3xl border ${prize.border} shadow-2xl ${prize.glow} backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                  </div>
                  
                  {/* Medal */}
                  <div className="relative text-center mb-6">
                    <div className="text-7xl mb-4 drop-shadow-2xl animate-pulse">{prize.icon}</div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative text-center space-y-3">
                    <h3 className="text-2xl font-bold text-white mb-3 retro-font drop-shadow-lg">
                      {prize.place}
                    </h3>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-3">
                      <p className="text-4xl font-bold text-white pixel-font drop-shadow-lg">
                        {prize.prize}
                      </p>
                    </div>
                    <p className="text-sm text-white/90 font-semibold retro-font drop-shadow-md">
                      {prize.subtitle}
                    </p>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </ThreeDCard>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-r from-green-600/10 to-green-500/10 p-8 rounded-3xl border border-green-400/20 backdrop-blur-sm">
            <p className="text-lg text-gray-300 retro-font mb-4">
              Plus special category prizes for each SDG theme, academic recognition, and potential implementation support!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm retro-font border border-green-400/30">
                🏆 Special Category Awards
              </span>
              <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm retro-font border border-green-400/30">
                📜 Academic Recognition
              </span>
              <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm retro-font border border-green-400/30">
                🚀 Implementation Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="relative z-10 py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent pixel-font">
            Register Your Team
          </h2>
                      <div className="bg-gray-800/30 p-8 rounded-2xl backdrop-blur-sm border border-green-400/30">
            <p className="text-lg text-gray-300 mb-8 retro-font">
              Ready to make a difference? Register your team for GU SIH 1.0 and be part of the solution 
              for Northeast India's sustainable development challenges.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-xl font-bold text-green-400 mb-4">Registration Requirements</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="retro-font">• Team of 4-6 students</li>
                  <li className="retro-font">• Valid student ID cards</li>
                  <li className="retro-font">• University/College affiliation</li>
                  <li className="retro-font">• Basic programming knowledge</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-green-300 mb-4">What You'll Get</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="retro-font">• Expert mentorship</li>
                  <li className="retro-font">• Networking opportunities</li>
                  <li className="retro-font">• Certificate of participation</li>
                  <li className="retro-font">• Potential implementation support</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <a 
                href="https://forms.gle/example" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-600 to-green-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all inline-block"
              >
                Register Now - Google Form
              </a>
              <p className="text-sm text-gray-400 retro-font">
                Registration deadline: Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent pixel-font">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/30 p-8 rounded-2xl backdrop-blur-sm">
              <Mail className="mx-auto mb-4 text-green-400" size={48} />
              <h3 className="text-xl font-bold mb-2 retro-font">Email Us</h3>
              <p className="text-gray-300 retro-font">gusih@gauhati.ac.in</p>
            </div>
            <div className="bg-gray-800/30 p-8 rounded-2xl backdrop-blur-sm">
              <Phone className="mx-auto mb-4 text-green-300" size={48} />
              <h3 className="text-xl font-bold mb-2 retro-font">Call Us</h3>
              <p className="text-gray-300 retro-font">+91 361 257 0000</p>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-green-600/20 to-green-500/20 p-6 rounded-2xl border border-green-400/30">
            <h3 className="text-xl font-bold text-center mb-4 text-white retro-font">Organized By</h3>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-400 mb-2 retro-font">Gauhati University</p>
              <p className="text-gray-300 retro-font">Department of Electronics and Communication Engineering</p>
              <p className="text-gray-300 retro-font">Guwahati, Assam, India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 bg-black/40">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 retro-font">
            © 2025 GU SIH 1.0. Organized by Gauhati University. 
            <span className="text-green-400">🌱</span> Advancing UN Sustainable Development Goals.
            <span className="text-green-300">🧣</span> Honoring the spirit of Northeast India.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;