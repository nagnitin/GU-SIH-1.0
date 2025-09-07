import { useEffect, useRef, useState } from 'react';
import { Calendar, Users, Trophy, MapPin, Clock, Mail, Phone, Code, Zap, Target } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
import FloatingParticles from './components/FloatingParticles';
import TypewriterEffect from './components/TypewriterEffect';
import CodeSnippet from './components/CodeSnippet';
import AssamPattern from './components/AssamPattern';
import GamusaAccent from './components/GamusaAccent';
import CountdownTimer from './components/CountdownTimer';
import HeroBackground from './components/HeroBackground';
import ImageGallery from './components/ImageGallery';
import AssamRealImages from './components/AssamRealImages';
import GauhatiUniversity from './components/GauhatiUniversity';
import AssamInteractiveMap from './components/AssamInteractiveMap';
import { ThreeDCard, ThreeDFloating } from './components/3DElements';
import BinaryBackground from './components/BinaryBackground';
import LazyComponent from './components/LazyComponent';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    // Optimized hero section animations
    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1,
          ease: "power1.out"
        }
      );
    }

    // Optimized section animations on scroll
    gsap.utils.toArray('section[id]').forEach((section: any) => {
      gsap.fromTo(section,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power1.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
            fastScrollEnd: true
          }
        }
      );
    });
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('header')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
      <div className="min-h-screen text-white relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <BinaryBackground />
        <HeroBackground />
      <FloatingParticles />
      <AssamPattern />
      <GamusaAccent />
      
      {/* Header */}
      <header className="relative z-10 p-4 md:p-6">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent pixel-font-glow">
            GUenARK 2025
          </div>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#about" className="hover:text-emerald-400 transition-colors relative group retro-font text-base lg:text-lg">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#themes" className="hover:text-emerald-400 transition-colors relative group retro-font text-base lg:text-lg">
              Activities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#rules" className="hover:text-emerald-400 transition-colors relative group retro-font text-base lg:text-lg">
              Rules
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#timeline" className="hover:text-emerald-400 transition-colors relative group retro-font text-base lg:text-lg">
              Timeline
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#prizes" className="hover:text-emerald-400 transition-colors relative group retro-font text-base lg:text-lg">
              Prizes
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors relative group retro-font text-base lg:text-lg">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="bg-gradient-to-r from-emerald-600 to-amber-600 px-4 py-2 md:px-6 md:py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all text-sm md:text-base font-semibold whitespace-nowrap">
              Register
            </button>
            <button 
              className="md:hidden text-white hover:text-emerald-400 transition-colors p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-green-400/30 z-50">
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#about" 
                className="block text-white hover:text-emerald-400 transition-colors retro-font text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#themes" 
                className="block text-white hover:text-emerald-400 transition-colors retro-font text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Activities
              </a>
              <a 
                href="#rules" 
                className="block text-white hover:text-emerald-400 transition-colors retro-font text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rules
              </a>
              <a 
                href="#timeline" 
                className="block text-white hover:text-emerald-400 transition-colors retro-font text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Timeline
              </a>
              <a 
                href="#prizes" 
                className="block text-white hover:text-emerald-400 transition-colors retro-font text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Prizes
              </a>
              <a 
                href="#contact" 
                className="block text-white hover:text-emerald-400 transition-colors retro-font text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-12 md:py-20 px-4 md:px-6" ref={heroRef}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 md:mb-8 animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-200 bg-clip-text text-transparent pixel-font-large">
                GUenARK
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-300 via-green-200 to-green-100 bg-clip-text text-transparent pixel-font-large">
                2025
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-300 mb-3 md:mb-4 retro-font px-4 leading-relaxed mobile-text">
              Gauhati University Entrepreneurship and Nurturing, Advancement through Research and Knowledge
            </p>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl text-green-200 min-h-[1.5rem] md:min-h-[2rem] retro-font px-4 mobile-text">
              <TypewriterEffect 
                texts={[
                  "Shelter for ideas, Launchpad for Startups.",
                  "Building Tomorrow at the Crossroads of Ideas, Investment & Governance.",
                  "Innovation, Incubation and Startup Cell presents.",
                  "A Mega event for Northeast India.",
                  "Where Ideas Meet Investment.",
                  "Advancing through Research and Knowledge."
                ]}
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-3 md:gap-4 mb-8 md:mb-12 px-4 mobile-padding">
            <div className="flex items-center text-green-400 text-sm md:text-base">
              <Calendar className="mr-2 w-4 h-4 flex-shrink-0" />
              <span className="retro-font">10th & 11th October, 2025</span>
            </div>
            <div className="flex items-center text-green-300 text-sm md:text-base">
              <MapPin className="mr-2 w-4 h-4 flex-shrink-0" />
              <span className="retro-font">Gauhati University, Guwahati</span>
            </div>
            <div className="flex items-center text-green-200 text-sm md:text-base">
              <Users className="mr-2 w-4 h-4 flex-shrink-0" />
              <span className="retro-font">Startup & Innovation Focus</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-6 mb-8 md:mb-12 px-4 mobile-padding">
            <a href="#registration" className="retro-button px-8 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all animate-pulse inline-block text-white text-center">
              Register Now
            </a>
            <a href="#themes" className="border-2 border-green-400 px-8 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-green-400 hover:text-gray-900 transition-all retro-font inline-block text-center">
              View Activities
            </a>
          </div>
          
          {/* Countdown Timer */}
          <div className="max-w-2xl mx-auto mb-8 md:mb-12">
            <CountdownTimer />
          </div>
          
          {/* SDG Badge */}
          <ThreeDFloating>
            <div className="flex justify-center mb-6 md:mb-8">
              <div className="bg-gradient-to-r from-green-600 to-green-500 px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-semibold flex items-center space-x-2 shadow-2xl backdrop-blur-sm">
                <span className="retro-font text-sm md:text-base">UN Sustainable Development Goals</span>
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
      <section id="about" className="relative z-10 py-12 md:py-20 px-4 md:px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent pixel-font">
            About GUenARK 2025
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 retro-font">
                GUenARK 2025 is a pioneering initiative of Gauhati University designed to ignite innovation, 
                foster entrepreneurship, and build a vibrant ecosystem of research-driven growth. This mega event 
                brings together students, startups, researchers, industry leaders, and policymakers to converge 
                and co-create solutions for Northeast India.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 retro-font">
                The ARK symbolizes both a vessel of hope and a repository of knowledge. GUenARK provides a platform 
                to safeguard, cultivate, and advance innovative ideas, helping innovators transform ideas into 
                prototypes, businesses, and scalable endeavors through various events including hackathons, 
                ideathons, and startup exhibitions.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {['Hackathon', 'Ideathon', 'Startup Exhibition', 'Innovation Talks', 'Investor Meets', 'Research Showcase'].map((tag) => (
                  <span key={tag} className="bg-green-600/20 border border-green-400 px-3 py-1.5 md:px-4 md:py-2 rounded-full retro-font text-sm md:text-base">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-green-600 to-green-500 p-6 md:p-8 rounded-2xl shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 retro-font">Why GUenARK 2025?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <span className="retro-font text-base md:text-lg">Innovation & Entrepreneurship</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="retro-font text-base md:text-lg">Research-Driven Growth</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="retro-font text-base md:text-lg">Startup Ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="retro-font text-base md:text-lg">Industry-Academia Linkages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="relative z-10 py-12 md:py-20 px-4 md:px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-12 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent pixel-font">
            GUenARK Activities
          </h2>
          <p className="text-center text-gray-300 mb-8 md:mb-12 text-lg md:text-xl retro-font px-2">
            Three major events building tomorrow at the crossroads of ideas, investment & governance
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ThreeDCard className="group cursor-pointer" depth={50}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Code className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-2 retro-font">HACKATHON</h3>
                <p className="text-sm text-blue-300 retro-font">24-Hour Technology Challenge</p>
              </div>
              <p className="text-gray-300 text-center retro-font">
                24-hour Hackathon on Technology for Sustainable Development focusing on practical solutions 
                for Northeast India's challenges (water, tea-agriculture, waste, tourism, healthcare, urban resilience), 
                aligned with UN SDGs, promoting interdisciplinary teamwork and outcome-driven prototypes.
              </p>
              <div className="mt-4 p-4 bg-blue-600/10 rounded-lg border border-blue-400/20">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop" 
                  alt="Hackathon"
                  className="w-full h-24 object-cover rounded-lg opacity-80"
                />
              </div>
            </ThreeDCard>
            
                        <ThreeDCard className="group cursor-pointer" depth={50}>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Zap className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-green-400 mb-2 retro-font">IDEATHON</h3>
                  <p className="text-sm text-green-300 retro-font">24-Hour Innovation Challenge</p>
                </div>
                <p className="text-gray-300 text-center retro-font">
                  24-hour Ideathon on Sustainable Futures for Northeast India challenging students to design 
                  business models, policy frameworks, community campaigns, financial tools, and education innovations 
                  addressing regional issues beyond technology, leading to practical models and policy-ready solutions.
                </p>
                <div className="mt-4 p-4 bg-green-600/10 rounded-lg border border-green-400/20">
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop" 
                    alt="Ideathon"
                    className="w-full h-24 object-cover rounded-lg opacity-80"
                  />
                </div>
              </ThreeDCard>
            
            <ThreeDCard className="group cursor-pointer" depth={50}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Trophy className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2 retro-font">STARTUP EXHIBITION</h3>
                <p className="text-sm text-yellow-300 retro-font">100+ Innovation Stalls</p>
              </div>
              <p className="text-gray-300 text-center retro-font">
                Startup & Innovation Exhibition showcasing 100+ startups, innovators, and student entrepreneurs 
                from Assam and Northeast India, focusing on solutions in agritech, clean energy, tourism, 
                digital commerce, etc. Offering visibility, funding, and vital linkages.
              </p>
              <div className="mt-4 p-4 bg-yellow-600/10 rounded-lg border border-yellow-400/20">
                <img 
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop" 
                  alt="Startup Exhibition"
                  className="w-full h-24 object-cover rounded-lg opacity-80"
                />
              </div>
            </ThreeDCard>
          </div>
        </div>
      </section>

      {/* Real Assam Images Section */}
      <section className="relative z-10">
        <LazyComponent>
          <AssamRealImages />
        </LazyComponent>
      </section>

      {/* Gauhati University Section */}
      <section className="relative z-10">
        <LazyComponent>
          <GauhatiUniversity />
        </LazyComponent>
      </section>

      {/* Interactive Assam Map Section */}
      <section className="relative z-10">
        <LazyComponent>
          <AssamInteractiveMap />
        </LazyComponent>
      </section>

      {/* Image Gallery Section */}
      <section className="relative z-10 bg-black/20">
        <LazyComponent>
          <ImageGallery />
        </LazyComponent>
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
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-bold text-green-400 mb-2 retro-font">Innovation</h4>
                <p className="text-sm text-gray-300 retro-font">Novel approach to problem-solving</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-green-300 mb-2 retro-font">Impact</h4>
                <p className="text-sm text-gray-300 retro-font">Potential for real-world application</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-green-200 mb-2 retro-font">Technical Excellence</h4>
                <p className="text-sm text-gray-300 retro-font">Code quality and implementation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
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
              { day: 'Day 1', time: '10th October 2025', events: ['Startup & Innovation Expo Setup', 'Opening Ceremony & Keynote', 'Hackathon & Ideathon Launch', 'Investor Meets & Innovation Talks'] },
              { day: 'Day 2', time: '11th October 2025', events: ['24-Hour Hackathon Continues', 'Startup Exhibition & Networking', 'Structured Engagement Sessions', 'Final Presentations & Awards'] }
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
                Special Category Awards
              </span>
              <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm retro-font border border-green-400/30">
                Academic Recognition
              </span>
              <span className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm retro-font border border-green-400/30">
                Implementation Support
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
              Ready to be part of the innovation ecosystem? Register for GUenARK 2025 and join the mega event 
              building tomorrow at the crossroads of ideas, investment & governance.
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

      {/* Patrons Section */}
      <section className="relative z-10 py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent pixel-font">
            Patrons & Leadership
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ThreeDCard className="text-center" depth={30}>
              <h3 className="text-xl font-bold text-green-400 mb-4 retro-font">Chief Patron</h3>
              <p className="text-lg font-semibold text-white mb-2 retro-font">Dr. Himanta Biswa Sarma</p>
              <p className="text-gray-300 retro-font">Hon'ble Chief Minister, Assam</p>
            </ThreeDCard>
            <ThreeDCard className="text-center" depth={30}>
              <h3 className="text-xl font-bold text-green-300 mb-4 retro-font">Patrons</h3>
              <p className="text-lg font-semibold text-white mb-2 retro-font">Shri Keshab Mahanta</p>
              <p className="text-gray-300 retro-font mb-2">Hon'ble Minister of Revenue, Disaster Management, IT, Science, Technology & Climate Change</p>
              <p className="text-lg font-semibold text-white mb-2 retro-font">Shri Bimal Borah</p>
              <p className="text-gray-300 retro-font">Hon'ble Minister of Cultural Affairs, Industries, Commerce and Public Enterprises</p>
            </ThreeDCard>
            <ThreeDCard className="text-center" depth={30}>
              <h3 className="text-xl font-bold text-green-200 mb-4 retro-font">Co-Patrons</h3>
              <p className="text-lg font-semibold text-white mb-2 retro-font">Prof. Nani Gopal Mahanta</p>
              <p className="text-gray-300 retro-font mb-2">Hon'ble Vice Chancellor, Gauhati University</p>
              <p className="text-lg font-semibold text-white mb-2 retro-font">Dr. Krishna Kumar Dwivedi, IAS</p>
              <p className="text-gray-300 retro-font mb-2">Principal Secretary to CM</p>
              <p className="text-lg font-semibold text-white mb-2 retro-font">Dr. Jeevan Basavaraj, IAS</p>
              <p className="text-gray-300 retro-font">Secretary, Dept. of Innovation, Incubation and Startups (DIIS), Govt. of Assam</p>
            </ThreeDCard>
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
              <p className="text-gray-300 retro-font">guenark@gauhati.ac.in</p>
            </div>
            <div className="bg-gray-800/30 p-8 rounded-2xl backdrop-blur-sm">
              <Phone className="mx-auto mb-4 text-green-300" size={48} />
              <h3 className="text-xl font-bold mb-2 retro-font">Call Us</h3>
              <p className="text-gray-300 retro-font">+91 361 257 0000</p>
            </div>
          </div>
          
          <div className="mt-8 bg-gradient-to-r from-green-600/20 to-green-500/20 p-6 rounded-2xl border border-green-400/30">
            <h3 className="text-xl font-bold text-center mb-4 text-white retro-font">Gauhati University Rankings</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              <div className="bg-green-600/20 p-4 rounded-lg border border-green-400/30">
                <p className="text-lg font-bold text-green-400 retro-font">1st</p>
                <p className="text-sm text-gray-300 retro-font">Among Universities of NE India</p>
              </div>
              <div className="bg-green-600/20 p-4 rounded-lg border border-green-400/30">
                <p className="text-lg font-bold text-green-400 retro-font">9th</p>
                <p className="text-sm text-gray-300 retro-font">Among State Universities of India</p>
              </div>
              <div className="bg-green-600/20 p-4 rounded-lg border border-green-400/30">
                <p className="text-lg font-bold text-green-400 retro-font">33rd</p>
                <p className="text-sm text-gray-300 retro-font">Among all Universities of India</p>
              </div>
              <div className="bg-green-600/20 p-4 rounded-lg border border-green-400/30">
                <p className="text-lg font-bold text-green-400 retro-font">52nd</p>
                <p className="text-sm text-gray-300 retro-font">Among all Institutions of India</p>
              </div>
              <div className="bg-green-600/20 p-4 rounded-lg border border-green-400/30">
                <p className="text-lg font-bold text-green-400 retro-font">NAAC A+</p>
                <p className="text-sm text-gray-300 retro-font">Accredited University</p>
              </div>
              <div className="bg-green-600/20 p-4 rounded-lg border border-green-400/30">
                <p className="text-lg font-bold text-green-400 retro-font">NIRF 2025</p>
                <p className="text-sm text-gray-300 retro-font">Ranked University</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-2xl font-bold text-green-400 mb-2 retro-font">Innovation, Incubation and Startup Cell</p>
              <p className="text-gray-300 retro-font">Gauhati University, Guwahati-781014, Assam, India</p>
              <p className="text-gray-300 retro-font">Web: www.gauhati.ac.in/guenark2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 bg-black/40">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 retro-font">
            © 2025 GUenARK 2025. Organized by Innovation, Incubation and Startup Cell, Gauhati University. 
            Building Tomorrow at the Crossroads of Ideas, Investment & Governance.
            Honoring the spirit of Northeast India.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;