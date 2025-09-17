import { useEffect, useRef, useState } from 'react';
import { Calendar, Users, Trophy, MapPin, Clock, Mail, Phone, Code, Zap, Award, Star } from 'lucide-react';
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
import GauhatiUniversity from './components/GauhatiUniversity';
import { ThreeDCard, ThreeDFloating } from './components/3DElements';
import BinaryBackground from './components/BinaryBackground';
import LazyComponent from './components/LazyComponent';

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Prevent background scroll and potential white flash when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden', 'menu-open');
      document.documentElement.classList.add('menu-open');
    } else {
      document.body.classList.remove('overflow-hidden', 'menu-open');
      document.documentElement.classList.remove('menu-open');
    }
  }, [isMobileMenuOpen]);
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

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-gray-900 relative overflow-hidden bg-transparent">
        <BinaryBackground />
        <HeroBackground />
      <FloatingParticles />
      <AssamPattern />
      <GamusaAccent />
      
      {/* Header */}
      <header className="relative z-10 p-4 md:p-6 bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent font-serif tracking-wide">
            GUenARK 2025
          </div>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a href="#about" className="hover:text-blue-600 transition-colors relative group text-lg lg:text-xl text-gray-800 font-medium">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#themes" className="hover:text-blue-600 transition-colors relative group text-lg lg:text-xl text-gray-800 font-medium">
              Activities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#rules" className="hover:text-blue-600 transition-colors relative group text-lg lg:text-xl text-gray-800 font-medium">
              Rules
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#timeline" className="hover:text-blue-600 transition-colors relative group text-lg lg:text-xl text-gray-800 font-medium">
              Timeline
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#prizes" className="hover:text-blue-600 transition-colors relative group text-lg lg:text-xl text-gray-800 font-medium">
              Prizes
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors relative group text-lg lg:text-xl text-gray-800 font-medium">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 md:px-6 md:py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all text-sm md:text-base font-semibold whitespace-nowrap text-white">
              Register
            </button>
            <button 
              className="md:hidden text-gray-900 font-semibold hover:text-blue-600 transition-colors p-1"
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
        
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="md:hidden fixed inset-0 bg-black/90 z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <div
              ref={mobileMenuRef}
              className="md:hidden fixed top-20 left-4 right-4 bg-white/95 backdrop-blur-sm z-50 rounded-2xl border border-slate-200 shadow-2xl overflow-hidden"
            >
              <nav className="py-6">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Activities', href: '#themes' },
                  { name: 'Rules', href: '#rules' },
                  { name: 'Timeline', href: '#timeline' },
                  { name: 'Prizes', href: '#prizes' },
                  { name: 'Contact', href: '#contact' },
                ].map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleNavLinkClick}
                    className="flex items-center justify-between px-6 py-4 text-gray-800 hover:bg-blue-500/10 hover:text-blue-600 transition-all duration-300 font-serif text-lg border-b border-gray-700/30 last:border-b-0"
                  >
                    <span>{item.name}</span>
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </nav>
              
              {/* Register Button */}
              <div className="px-6 pb-6">
                <a
                  href="#registration"
                  onClick={handleNavLinkClick}
                  className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition-all w-full block text-center font-serif text-white"
                >
                  Register Now
                </a>
              </div>
            </div>
          </>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative z-10 py-12 md:py-20 px-4 md:px-6" ref={heroRef}>
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 md:mb-8 animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 md:mb-12 font-serif tracking-wide leading-tight">
              <span className="text-blue-700">
                GUenARK
              </span>
              <br />
              <span className="text-blue-500">
                2025
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 mb-8 md:mb-12 px-4 leading-relaxed font-medium max-w-5xl mx-auto">
              Gauhati University Entrepreneurship and Nurturing, Advancement through Research and Knowledge
            </p>
            <div className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium min-h-[2.5rem] md:min-h-[3rem] px-4 mb-12">
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

          {/* Event Details Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-10 mb-12 border border-slate-200 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="text-gray-900 text-lg md:text-xl font-semibold mb-2">Date</h3>
                <p className="text-gray-700 font-medium text-base md:text-lg">10th & 11th October, 2025</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="text-gray-900 text-lg md:text-xl font-semibold mb-2">Venue</h3>
                <p className="text-gray-700 font-medium text-base md:text-lg">Gauhati University, Guwahati</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gray-800" />
            </div>
                <h3 className="text-gray-900 text-lg md:text-xl font-semibold mb-2">Focus</h3>
                <p className="text-gray-700 font-medium text-base md:text-lg">Technology for Sustainable Development</p>
            </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a href="#registration" className="bg-gradient-to-r from-blue-600 to-blue-500 px-12 py-4 md:px-16 md:py-5 rounded-lg text-lg md:text-xl font-semibold hover:shadow-lg hover:scale-105 transition-all inline-block text-white text-center">
              Register Now
            </a>
            <a href="#themes" className="bg-transparent border-2 border-slate-300 text-slate-800 px-12 py-4 md:px-16 md:py-5 rounded-lg text-lg md:text-xl font-semibold hover:bg-slate-100 hover:text-slate-900 transition-all inline-block text-center">
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
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 md:px-6 md:py-3 rounded-full text-white font-semibold flex items-center space-x-2 shadow-2xl backdrop-blur-sm">
                <span className="font-serif text-sm md:text-base">UN Sustainable Development Goals</span>
              </div>
            </div>
          </ThreeDFloating>
        </div>

        {/* Floating Code Snippets */}
        <div className="hidden lg:block">
          <CodeSnippet className="absolute top-4 left-2 z-0" delay={1000} />
          <CodeSnippet className="absolute bottom-10 right-4 z-0" delay={2000} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-20 py-16 md:py-24 px-4 md:px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-blue-700 font-serif tracking-wide">
            About GUenARK 2025
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-medium">
                GUenARK 2025 is a pioneering initiative of Gauhati University designed to ignite innovation, 
                foster entrepreneurship, and build a vibrant ecosystem of research-driven growth. This mega event 
                brings together students, startups, researchers, industry leaders, and policymakers to converge 
                at the crossroads of ideas, investment, and governance.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-medium">
                The ARK symbolizes both a vessel of hope and a repository of knowledge. GUenARK provides a platform 
                to safeguard, cultivate, and advance innovative ideas, helping innovators transform ideas into 
                prototypes, businesses, and scalable endeavors through various events including hackathons, 
                ideathons, and startup exhibitions.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {['Hackathon', 'Ideathon', 'Startup Exhibition', 'Innovation Talks', 'Investor Meets', 'Research Showcase'].map((tag) => (
                  <span key={tag} className="bg-blue-50 border border-blue-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full font-serif text-sm md:text-base text-slate-800 font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-slate-200">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif tracking-wide text-gray-900">Why GUenARK 2025?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <span className="font-serif text-base md:text-lg">Innovation & Entrepreneurship</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <span className="font-serif text-base md:text-lg">Research-Driven Growth</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="font-serif text-base md:text-lg">Startup Ecosystem</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <span className="font-serif text-base md:text-lg">Industry-Academia Linkages</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="relative z-10 py-12 md:py-20 px-4 md:px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-blue-700 font-serif tracking-wide">
            GUenARK Activities
          </h2>
          <p className="text-center text-gray-800 mb-8 md:mb-12 text-lg md:text-xl lg:text-2xl px-4 font-medium max-w-4xl mx-auto">
            Three major events building tomorrow at the crossroads of ideas, investment & governance
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ThreeDCard className="group cursor-pointer" depth={50}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Code className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">HACKATHON</h3>
                <p className="text-sm text-gray-700 font-semibold">24-Hour Technology Challenge</p>
              </div>
              <p className="text-gray-800 text-center font-medium mb-4">
                24-hour Hackathon on Technology for Sustainable Development focusing on practical solutions 
                for Northeast India's challenges, aligned with UN SDGs, promoting interdisciplinary teamwork and outcome-driven prototypes.
              </p>
              <div className="mb-4">
                <h4 className="text-gray-900 font-semibold mb-2">Tracks (Pick One):</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Water & Sanitation [SDG 6]</li>
                  <li>• Agriculture & Tea [SDG 2]</li>
                  <li>• Waste Management [SDG 12]</li>
                  <li>• Tourism & Heritage [SDG 8]</li>
                  <li>• Healthcare [SDG 7]</li>
                  <li>• Urban Resilience [SDG 13]</li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-blue-700 font-bold text-lg">Cash Prize: ₹1.5 Lakh</p>
              </div>
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
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Zap className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2 font-serif">IDEATHON</h3>
                  <p className="text-sm text-gray-700 font-semibold">24-Hour Innovation Challenge</p>
                </div>
                <p className="text-gray-800 text-center font-medium mb-4">
                  24-hour Ideathon on Sustainable Futures for Northeast India challenging students to design 
                  business models, policy frameworks, community campaigns, financial tools, and education innovations 
                  addressing regional issues beyond technology.
                </p>
                <div className="mb-4">
                  <h4 className="text-gray-900 font-semibold mb-2">Tracks (Pick One):</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Sustainable Business Models</li>
                    <li>• Policy & Governance</li>
                    <li>• Community & Media</li>
                    <li>• Green Financial Inclusion</li>
                    <li>• Education & Lifestyle</li>
                  </ul>
                </div>
                <div className="text-center">
                  <p className="text-blue-700 font-bold text-lg">Cash Prize: ₹1 Lakh</p>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop" 
                    alt="Ideathon"
                    className="w-full h-24 object-cover rounded-lg opacity-80"
                  />
                </div>
              </ThreeDCard>
            
            <ThreeDCard className="group cursor-pointer" depth={50}>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Trophy className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif">STARTUP EXHIBITION</h3>
                <p className="text-sm text-gray-700 font-semibold">100+ Innovation Stalls</p>
              </div>
              <p className="text-gray-800 text-center font-medium mb-4">
                Startup & Innovation Exhibition showcasing 100+ startups, innovators, and student entrepreneurs 
                from Assam and Northeast India, focusing on solutions in agritech, clean energy, tourism, 
                digital commerce, etc. Offering visibility, funding, and vital linkages.
              </p>
              <div className="text-center">
                <p className="text-blue-700 font-bold text-lg">Linkage for Seed Money</p>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
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


      {/* Gauhati University Section */}
      <section className="relative z-10">
        <LazyComponent>
          <GauhatiUniversity />
        </LazyComponent>
      </section>


      {/* Image Gallery Section */}
      <section className="relative z-10 bg-transparent">
        <LazyComponent>
          <ImageGallery />
        </LazyComponent>
      </section>

      {/* Rules & Regulations Section */}
      <section id="rules" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-blue-700 font-serif tracking-wide">
            Rules & Regulations
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <ThreeDCard className="space-y-6" depth={30}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Team Formation & Composition</h3>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">Teams must be formed from the same institute (no inter-college teams)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">Each team should consist of 5 members, including a team leader</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">At least one female member is mandatory in every team</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">This is an on-site hackathon; online participation not entertained</span>
                </li>
              </ul>
            </ThreeDCard>
            
            <ThreeDCard className="space-y-6" depth={30}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Nomination & Registration</h3>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">Institutions can nominate up to 5 teams (3 shortlisted + 2 waitlisted)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">Authorization letter from institute head required</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">NOC from parents for participation required</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">Joining fee: ₹500/- (refundable) for selected teams</span>
                </li>
              </ul>
            </ThreeDCard>
          </div>
          
          <ThreeDCard className="mt-12" depth={40}>
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 font-serif">Evaluation & Selection Criteria</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 font-serif">Novelty & Innovation</h4>
                <p className="text-sm text-gray-800 font-semibold">Novel approach to problem-solving</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 font-serif">Complexity & Clarity</h4>
                <p className="text-sm text-gray-800 font-semibold">Technical complexity and clarity of solution</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 font-serif">Feasibility & Sustainability</h4>
                <p className="text-sm text-gray-800 font-semibold">Practical feasibility and sustainability</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 font-serif">Scale of Impact</h4>
                <p className="text-sm text-gray-800 font-semibold">Scale of impact and future potential</p>
              </div>
            </div>
          </ThreeDCard>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-blue-700 font-serif tracking-wide">
            Event Timeline
          </h2>
          <div className="space-y-8">
            {[
              { day: 'Day 1', time: '10th October 2025', events: ['Problem statement briefing & team formation', 'Requirement analysis & brainstorming', 'Initial prototyping & system design', 'Mentor check-in & technical validation'] },
              { day: 'Day 2', time: '11th October 2025', events: ['Coding & development of core features', 'Integration & testing', 'Final touches & deployment setup', 'Final presentations & live demos (5 min/team)'] }
            ].map((day, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="bg-gradient-to-r from-blue-700 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl flex-1 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">{day.day} - {day.time}</h3>
                  <ul className="space-y-2 text-gray-800">
                    {day.events.map((event, i) => (
                      <li key={i} className="flex items-center">
                        <Clock className="mr-2 text-gray-800" size={16} />
                        <span className="font-serif font-semibold">{event}</span>
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
      <section id="prizes" className="relative z-10 py-20 px-6 bg-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-blue-700 font-serif tracking-wide">
            Prizes & Recognition
          </h2>
          <p className="text-xl text-gray-900 mb-12 font-serif max-w-3xl mx-auto font-semibold">
            Compete for prestigious awards and recognition in sustainable development innovation
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                place: 'Hackathon Winner', 
                prize: '₹1,50,000', 
                gradient: 'from-blue-300 via-blue-400 to-blue-600',
                border: 'border-blue-300/30',
                glow: 'shadow-blue-600/20',
                Icon: Trophy, 
                subtitle: '24-Hour Technology Challenge' 
              },
              { 
                place: 'Ideathon Winner', 
                prize: '₹1,00,000', 
                gradient: 'from-slate-300 via-slate-400 to-slate-600',
                border: 'border-slate-400/30',
                glow: 'shadow-slate-500/20',
                Icon: Award, 
                subtitle: '24-Hour Innovation Challenge' 
              },
              { 
                place: 'Startup Exhibition', 
                prize: 'Seed Money', 
                gradient: 'from-blue-100 via-blue-200 to-blue-300',
                border: 'border-blue-300/30',
                glow: 'shadow-blue-300/20',
                Icon: Star, 
                subtitle: 'Linkage for Funding' 
              }
            ].map((prize, index) => (
              <ThreeDCard key={index} className="group" depth={50}>
                <div className={`relative bg-gradient-to-br ${prize.gradient} p-8 rounded-3xl border ${prize.border} shadow-2xl ${prize.glow} backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                  </div>
                  
                  {/* Badge Icon */}
                  <div className="relative flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 shadow-lg flex items-center justify-center">
                      {prize.Icon && <prize.Icon className="w-8 h-8 text-white drop-shadow" />}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative text-center space-y-3">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3 font-serif">
                      {prize.place}
                    </h3>
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-3">
                      <p className="text-4xl font-bold text-gray-800 font-serif">
                        {prize.prize}
                      </p>
                    </div>
                    <p className="text-sm text-gray-700 font-semibold font-serif">
                      {prize.subtitle}
                    </p>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              </ThreeDCard>
            ))}
          </div>
          <div className="mt-12 bg-blue-50 p-8 rounded-3xl border border-blue-200">
            <p className="text-lg text-gray-800 font-serif mb-4">
              Plus special category prizes for each SDG theme, academic recognition, and potential implementation support!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-serif border border-blue-300">
                Special Category Awards
              </span>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-serif border border-blue-300">
                Academic Recognition
              </span>
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-serif border border-blue-300">
                Implementation Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="relative z-10 py-20 px-6 bg-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-blue-700 font-serif tracking-wide">
            Register Your Team
          </h2>
                      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg">
            <p className="text-lg text-gray-900 mb-8 font-serif font-semibold">
              Ready to be part of the innovation ecosystem? Register for GUenARK 2025 and join the mega event 
              building tomorrow at the crossroads of ideas, investment & governance.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">Registration Requirements</h3>
                <ul className="space-y-2 text-gray-800">
                  <li className="font-semibold">• Team of 5 members (including team leader)</li>
                  <li className="font-semibold">• At least one female member mandatory</li>
                  <li className="font-semibold">• Same institute/college only</li>
                  <li className="font-semibold">• NOC from parents for participation</li>
                  <li className="font-semibold">• Nomination letter from institute head</li>
                  <li className="font-semibold">• Joining fee: ₹500/- (refundable)</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">What You'll Get</h3>
                <ul className="space-y-2 text-gray-800">
                  <li className="font-serif font-semibold">• Expert mentorship</li>
                  <li className="font-serif font-semibold">• Networking opportunities</li>
                  <li className="font-serif font-semibold">• Certificate of participation</li>
                  <li className="font-serif font-semibold">• Potential implementation support</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <a 
                href="https://forms.gle/example" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-700 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all inline-block text-white"
              >
                Register Now - Google Form
              </a>
              <p className="text-sm text-gray-900 font-serif font-semibold">
                Registration deadline: Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patrons Section */}
      <section className="relative z-10 py-20 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-blue-700 font-serif tracking-wide">
            Patrons & Leadership
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ThreeDCard className="text-center" depth={30}>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">Chief Patron</h3>
              <p className="text-lg font-semibold text-gray-800 mb-2 font-serif">Dr. Himanta Biswa Sarma</p>
              <p className="text-gray-800 font-semibold">Hon'ble Chief Minister, Assam</p>
            </ThreeDCard>
            <ThreeDCard className="text-center" depth={30}>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">Patrons</h3>
              <p className="text-lg font-semibold text-gray-800 mb-2 font-serif">Shri Keshab Mahanta</p>
              <p className="text-gray-800 font-semibold mb-2">Hon'ble Minister of Revenue, Disaster Management, IT, Science, Technology & Climate Change</p>
              <p className="text-lg font-semibold text-gray-800 mb-2 font-serif">Shri Bimal Borah</p>
              <p className="text-gray-800 font-semibold">Hon'ble Minister of Cultural Affairs, Industries, Commerce and Public Enterprises</p>
            </ThreeDCard>
            <ThreeDCard className="text-center" depth={30}>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">Co-Patrons</h3>
              <p className="text-lg font-semibold text-gray-800 mb-2 font-serif">Prof. Nani Gopal Mahanta</p>
              <p className="text-gray-800 font-semibold mb-2">Hon'ble Vice Chancellor, Gauhati University</p>
              <p className="text-lg font-semibold text-gray-800 mb-2 font-serif">Dr. Krishna Kumar Dwivedi, IAS</p>
              <p className="text-gray-800 font-semibold mb-2">Principal Secretary to CM</p>
              <p className="text-lg font-semibold text-gray-800 mb-2 font-serif">Dr. Jeevan Basavaraj, IAS</p>
              <p className="text-gray-800 font-semibold">Secretary, Dept. of Innovation, Incubation and Startups (DIIS), Govt. of Assam</p>
            </ThreeDCard>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-blue-700 font-serif tracking-wide">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 p-8 rounded-2xl border border-slate-200 shadow-lg">
              <Mail className="mx-auto mb-4 text-gray-800" size={48} />
              <h3 className="text-xl font-bold mb-2 font-serif text-gray-900">Email Us</h3>
              <p className="text-gray-800 font-semibold">guenark@gauhati.ac.in</p>
              <p className="text-gray-800 font-semibold">iis_gu@gauhati.ac.in</p>
            </div>
            <div className="bg-white/80 p-8 rounded-2xl border border-slate-200 shadow-lg">
              <Phone className="mx-auto mb-4 text-gray-800" size={48} />
              <h3 className="text-xl font-bold mb-2 font-serif text-gray-900">Website</h3>
              <p className="text-gray-800 font-semibold">www.gauhati.ac.in/guenark2025</p>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 p-6 rounded-2xl border border-blue-200">
            <h3 className="text-xl font-bold text-center mb-4 text-gray-900 font-serif">Gauhati University Rankings (NIRF 2025)</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              <div className="bg-white/80 p-4 rounded-lg border border-slate-200 shadow-md">
                <p className="text-lg font-bold text-blue-700 font-serif">1st</p>
                <p className="text-sm text-gray-800 font-semibold">Among Universities of NE India</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg border border-slate-200 shadow-md">
                <p className="text-lg font-bold text-blue-600 font-serif">9th</p>
                <p className="text-sm text-gray-800 font-semibold">Among State Universities of India</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg border border-slate-200 shadow-md">
                <p className="text-lg font-bold text-blue-600 font-serif">33rd</p>
                <p className="text-sm text-gray-800 font-semibold">Among all Universities of India</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg border border-slate-200 shadow-md">
                <p className="text-lg font-bold text-blue-600 font-serif">52nd</p>
                <p className="text-sm text-gray-800 font-semibold">Among all Institutions of India</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg border border-slate-200 shadow-md">
                <p className="text-lg font-bold text-blue-600 font-serif">NAAC A+</p>
                <p className="text-sm text-gray-800 font-semibold">Accredited University</p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg border border-slate-200 shadow-md">
                <p className="text-lg font-bold text-blue-600 font-serif">NIRF 2025</p>
                <p className="text-sm text-gray-800 font-semibold">Ranked University</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-2xl font-bold text-gray-900 mb-2 font-serif">Innovation, Incubation and Startup Cell</p>
              <p className="text-gray-800 font-serif font-semibold">Gauhati University, Guwahati-781014, Assam, India</p>
              <p className="text-gray-800 font-serif font-semibold">Web: www.gauhati.ac.in/guenark2025</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-900 font-serif font-semibold">
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