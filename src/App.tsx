import { useEffect, useRef, useState } from "react";
import {
  Calendar,
  Users,
  Trophy,
  MapPin,
  Clock,
  Mail,
  Phone,
  Globe,
  Code,
  Zap,
  Award,
  Star,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GUenArkLogo from "/GUenArk.png";
import GULogo from "/GU Digital Logo.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
import FloatingParticles from "./components/FloatingParticles";
import TypewriterEffect from "./components/TypewriterEffect";
import CodeSnippet from "./components/CodeSnippet";
import AssamPattern from "./components/AssamPattern";
import GamusaAccent from "./components/GamusaAccent";
import CountdownTimer from "./components/CountdownTimer";
import HeroBackground from "./components/HeroBackground";
import ImageGallery from "./components/ImageGallery";
import GauhatiUniversity from "./components/GauhatiUniversity";
import { ThreeDCard, ThreeDFloating } from "./components/3DElements";
import BinaryBackground from "./components/BinaryBackground";
import LazyComponent from "./components/LazyComponent";

function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Prevent background scroll and potential white flash when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden", "menu-open");
      document.documentElement.classList.add("menu-open");
    } else {
      document.body.classList.remove("overflow-hidden", "menu-open");
      document.documentElement.classList.remove("menu-open");
    }
  }, [isMobileMenuOpen]);
  useEffect(() => {
    // Optimized hero section animations
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power1.out",
        }
      );
    }

    // Optimized section animations on scroll
    gsap.utils.toArray("section[id]").forEach((section: any) => {
      gsap.fromTo(
        section,
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
            fastScrollEnd: true,
          },
        }
      );
    });
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest("header")) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
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
      <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center">
            <img 
              src={GUenArkLogo} 
              alt="GUenARK Logo" 
              className="h-8 md:h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <a
              href="#about"
              className="hover:text-blue-600 transition-colors relative group text-lg lg:text-xl text-gray-800 font-medium"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#themes"
              className="hover:text-blue-600 transition-colors relative group text-lg lg:text-xl text-gray-800 font-medium"
            >
              Activities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#rules"
              className="hover:text-blue-600 transition-colors relative group text-lg lg:text-xl text-gray-800 font-medium"
            >
              Rules
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#timeline"
              className="hover:text-blue-600 transition-colors relative group text-lg lg:text-xl text-gray-800 font-medium"
            >
              Timeline
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#prizes"
              className="hover:text-blue-600 transition-colors relative group text-lg lg:text-xl text-gray-800 font-medium"
            >
              Prizes
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="hover:text-blue-600 transition-colors relative group text-lg lg:text-xl text-gray-800 font-medium"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4">
            <img 
              src={GULogo} 
              alt="Gauhati University Logo" 
              className="h-10 md:h-12 w-auto"
            />
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdNMiKTlSt1dAuDsoEwmM9sMcjfI_OgHBn9vecOHn3jGrh4XA/closedform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 md:px-6 md:py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all text-sm md:text-base font-semibold whitespace-nowrap text-white"
            >
              Register
            </a>
            <button
              className="md:hidden text-gray-900 font-semibold hover:text-blue-600 transition-colors p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
              <nav className="py-2">
                {[
                  { name: "About", href: "#about" },
                  { name: "Activities", href: "#themes" },
                  { name: "Rules", href: "#rules" },
                  { name: "Timeline", href: "#timeline" },
                  { name: "Prizes", href: "#prizes" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleNavLinkClick}
                    className="block px-6 py-2 text-gray-800 hover:bg-blue-500/10 hover:text-blue-600 transition-all duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Register Button */}
              <div className="px-6 pb-6">
                <a
                  href="https://forms.gle/5sAbicfHShUE6KyW9"
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
      <section
        className="relative z-10 pt-24 pb-12 md:pt-32 md:pb-20 px-4 md:px-6"
        ref={heroRef}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 md:mb-8 animate-fadeInUp">
            <div className="mb-8 md:mb-12 flex justify-center">
              <img 
                src={GUenArkLogo} 
                alt="GUenARK 2026" 
                className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto"
              />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 mb-8 md:mb-12 px-4 leading-relaxed font-medium max-w-5xl mx-auto">
              <span className="font-bold">G</span>auhati <span className="font-bold">U</span>niversity <span className="font-bold">E</span>ntrepreneurship <span className="font-bold">a</span>nd <span className="font-bold">N</span>urturing, <span className="font-bold">A</span>dvancement
              <br />
              through <span className="font-bold">R</span>esearch <span className="font-bold">a</span>nd <span className="font-bold">K</span>nowledge
            </p>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-600 mb-6 md:mb-8 px-4 font-bold">
              ⚡ 24-Hour Hackathon | Ideathon | Startup ⚡
            </div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 md:mb-12 px-4 font-semibold">
              Choose Your Challenge. Build. Innovate. Impact.
            </p>
            <div className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium min-h-[2.5rem] md:min-h-[3rem] px-4 mb-12">
              <TypewriterEffect 
                texts={[
                  "Shelter for ideas, Launchpad for Startups.",
                  "Building Tomorrow at the Crossroads of Ideas, Investment & Governance.",
                  "Innovation, Incubation and Startup Cell presents.",
                  "A Mega event for Northeast India.",
                  "Where Ideas Meet Investment.",
                  "Advancing through Research and Knowledge.",
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
                <h3 className="text-gray-900 text-lg md:text-xl font-semibold mb-2">
                  Date
                </h3>
                <p className="text-gray-700 font-medium text-base md:text-lg">
                  2nd & 3rd February, 2026
                </p>
            </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="text-gray-900 text-lg md:text-xl font-semibold mb-2">
                  Venue
                </h3>
                <p className="text-gray-700 font-medium text-base md:text-lg">
                  Gauhati University, Guwahati
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/15 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gray-800" />
                </div>
                <h3 className="text-gray-900 text-lg md:text-xl font-semibold mb-2">
                  Focus
                </h3>
                <p className="text-gray-700 font-medium text-base md:text-lg">
                  Technology for Sustainable Development
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <a
              href="https://forms.gle/5sAbicfHShUE6KyW9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-700 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all inline-block text-white"
            >
              Register Now
            </a>
            <a
              href="/GUenARK_2025.pdf"
              download="GUenARK_2025_Brochure.pdf"
              className="bg-gradient-to-r from-green-600 to-green-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all inline-block text-white"
            >
              Download Brochure
            </a>
            <a
              href="#themes"
              className="bg-transparent border-2 border-slate-300 text-slate-800 px-12 py-4 md:px-16 md:py-5 rounded-lg text-lg md:text-xl font-semibold hover:bg-slate-100 hover:text-slate-900 transition-all inline-block text-center"
            >
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
                <span className="font-serif text-sm md:text-base">
                  UN Sustainable Development Goals
                </span>
              </div>
            </div>
          </ThreeDFloating>
        </div>

        {/* Floating Code Snippets */}
        <div className="hidden lg:block">
          <CodeSnippet className="absolute top-4 left-2 z-0" delay={1000} />
          <CodeSnippet
            className="absolute bottom-10 right-4 z-0"
            delay={2000}
          />
        </div>
      </section>

      {/* IIS Cell Team Section */}
      <section className="relative z-10 py-20 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-blue-700 font-serif tracking-wide">
            Who Are We - IIS Cell
          </h2>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-serif">
                Innovation, Incubation & Start-Up (IIS) Cell
              </h3>
              <p className="text-lg text-gray-700 font-semibold">
                ... from ideas to impact
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                  About Us
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  The Innovation, Incubation & Start-Up (IIS) Cell at Gauhati
                  University is dedicated to converting research and ideas into
                  sustainable ventures. We conduct hackathons, workshops, and
                  incubation cohorts to foster innovation and entrepreneurship.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                  Vision
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Gauhati University aims to be a catalyst for inclusive,
                  sustainable innovation across Assam and Northeast India,
                  driving regional development through technology and
                  entrepreneurship.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                  Mission
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  To empower students, faculty, and local entrepreneurs through
                  mentorship, incubation, seed support, and industry linkages,
                  creating a vibrant innovation ecosystem.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-center mb-6 text-gray-900 font-serif">
                Meet The Team
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-900">
                    Prof. Ratul Mahanta
                  </p>
                  <p className="text-sm text-gray-700">
                    Dept. of Economics -{" "}
                    <span className="font-bold">Chairperson</span>
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-900">
                    Prof. Kandarpa Kumar Sarma
                  </p>
                  <p className="text-sm text-gray-700">
                    Dept. of Electronics and Communication Engineering (on lien) and COE, GU
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-900">
                    Dr. Tilak Ch Das
                  </p>
                  <p className="text-sm text-gray-700">Dept of Commerce</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-900">
                    Dr. Debashis Saikia
                  </p>
                  <p className="text-sm text-gray-700">Dept of USIC</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-900">
                    Dr. Jyoti Prakash Medhi
                  </p>
                  <p className="text-sm text-gray-700">Dept of Electronics and Communication Engineering</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-900">
                    Dr. Nabamita Deb
                  </p>
                  <p className="text-sm text-gray-700">Dept of Information Technology</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-900">
                    Dr. Samir Sarkar
                  </p>
                  <p className="text-sm text-gray-700">
                    Dept of Business Admin
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-900">
                    Dr. Bitopi Gogoi
                  </p>
                  <p className="text-sm text-gray-700">
                    Dept of Business Admin
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-900">
                    Dr. Pranjit Hazarika
                  </p>
                  <p className="text-sm text-gray-700">Dept of Geological Sc</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-900">Principal</p>
                  <p className="text-sm text-gray-700">
                    University Law College, GU
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold text-gray-900">
                    Dr. Rupamjyoti Nath
                  </p>
                  <p className="text-sm text-gray-700">
                    Dept of Economics -{" "}
                    <span className="font-bold">Convener</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-gray-800 font-semibold mb-2">
                Contact IIS Cell
              </p>
              <p className="text-blue-600 font-bold">iis_cell@gauhati.ac.in</p>
            </div>
          </div>
        </div>
      </section>

      {/* University Rankings & Innovation Cell Section */}
      <section className="relative z-10 py-12 md:py-16 px-4 md:px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="bg-blue-50 p-6 md:p-8 rounded-2xl border border-blue-200 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-900 font-serif">
              Gauhati University Rankings (NIRF 2025)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
              <div className="bg-white/80 p-4 rounded-lg border border-slate-200 shadow-md">
                <p className="text-lg font-bold text-blue-700 font-serif">
                  1st
                </p>
                <p className="text-sm text-gray-800 font-semibold">
                  Among Universities of NE India
                </p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg border border-slate-200 shadow-md">
                <p className="text-lg font-bold text-blue-600 font-serif">
                  9th
                </p>
                <p className="text-sm text-gray-800 font-semibold">
                  Among State Universities of India
                </p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg border border-slate-200 shadow-md">
                <p className="text-lg font-bold text-blue-600 font-serif">
                  33rd
                </p>
                <p className="text-sm text-gray-800 font-semibold">
                  Among all Universities of India
                </p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg border border-slate-200 shadow-md">
                <p className="text-lg font-bold text-blue-600 font-serif">
                  52nd
                </p>
                <p className="text-sm text-gray-800 font-semibold">
                  Among all Institutions of India
                </p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg border border-slate-200 shadow-md">
                <p className="text-lg font-bold text-blue-600 font-serif">
                  NAAC A+
                </p>
                <p className="text-sm text-gray-800 font-semibold">
                  Accredited University
                </p>
              </div>
              <div className="bg-white/80 p-4 rounded-lg border border-slate-200 shadow-md">
                <p className="text-lg font-bold text-blue-600 font-serif">
                  NIRF 2025
                </p>
                <p className="text-sm text-gray-800 font-semibold">
                  Ranked University
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-2xl font-bold text-gray-900 mb-2 font-serif">
                Innovation, Incubation and Startup Cell
              </p>
              <p className="text-gray-800 font-serif font-semibold">
                Gauhati University, Guwahati-781014, Assam, India
              </p>
              <p className="text-gray-800 font-serif font-semibold">
                Web: www.gauhati.ac.in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="relative z-20 py-16 md:py-24 px-4 md:px-6 bg-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 md:mb-8 text-blue-700 font-serif tracking-wide">
            About GUenARK 2026
          </h2>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-medium">
                GUenARK 2026 is a pioneering initiative to ignite innovation,
                foster entrepreneurship, and build a vibrant research-driven
                ecosystem. The name ARK symbolizes a vessel of hope and a
                repository of knowledge, reflecting GUenARK's mission to
                safeguard, cultivate, and advance transformative ideas.
              </p>
              <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-medium">
                It connects students, startups, researchers, industry, and
                policymakers. Through startup exhibitions, hackathons,
                ideathons, and investor networking, it enables innovators to
                turn ideas into prototypes, businesses, and scalable ventures.
                It aligns with Startup India, Startup Assam, Atmanirbhar Assam,
                and NEP 2020.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-4">
                {[
                  "Hackathon",
                  "Ideathon",
                  "Startup Exhibition",
                  "Innovation Talks",
                  "Investor Meets",
                  "Research Showcase",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-50 border border-blue-300 px-3 py-1.5 md:px-4 md:py-2 rounded-full font-serif text-sm md:text-base text-slate-800 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-slate-200">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 font-serif tracking-wide text-gray-900">
                  Why GUenARK 2026?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                        />
                      </svg>
                    </div>
                    <span className="font-serif text-base md:text-lg">
                      Innovation & Entrepreneurship
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <span className="font-serif text-base md:text-lg">
                      Research-Driven Growth
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <span className="font-serif text-base md:text-lg">
                      Startup Ecosystem
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <span className="font-serif text-base md:text-lg">
                      Industry-Academia Linkages
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section
        id="themes"
        className="relative z-10 py-12 md:py-20 px-4 md:px-6 bg-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-8 text-blue-700 font-serif tracking-wide">
            GUenARK Activities
          </h2>
          <p className="text-center text-gray-800 mb-8 md:mb-12 text-lg md:text-xl lg:text-2xl px-4 font-medium max-w-4xl mx-auto">
            Choose your challenge: Participate in either Hackathon OR Ideathon
            building tomorrow at the crossroads of ideas, investment &
            governance
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <ThreeDCard
              className="group cursor-pointer h-full flex flex-col"
              depth={50}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Code className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-serif">
                  HACKATHON
                </h3>
                <p className="text-sm text-gray-700 font-semibold">
                  24-Hour Technology Challenge
                </p>
              </div>
              <div className="flex-grow">
                <p className="text-gray-800 text-center font-medium mb-4">
                  The 24-hour Hackathon on Technology for Sustainable
                  Development will engage students and innovators in building
                  practical solutions for Northeast India's key
                  challenges—water, tea agriculture, waste, tourism, healthcare,
                  and urban resilience. Aligned with the UN SDGs, it promotes
                  interdisciplinary teamwork, inclusivity, and outcome-driven
                  prototypes with scope for real-world pilots.
                </p>
                <div className="mb-4">
                  <h4 className="text-gray-900 font-semibold mb-2">
                    Tracks (Pick One):
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Water & Sanitation [SDG 6]</li>
                    <li>• Agriculture & Tea [SDG 2]</li>
                    <li>• Waste Management [SDG 12]</li>
                    <li>• Tourism & Heritage [SDG 8]</li>
                    <li>• Healthcare [SDG 7]</li>
                    <li>• Urban Resilience [SDG 13]</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="text-gray-900 font-semibold mb-2">Outcome:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>
                      • Prototypes and pilot-ready solutions addressing key
                      regional issues
                      </li>
                    <li>
                      • Opportunities for collaboration with government, NGOs
                      and industry
                    </li>
                    <li>
                      • Enhanced student skills in innovation, sustainability
                      and entrepreneurship
                    </li>
                    <li>
                      • Selected teams to receive follow-up incubation and
                      mentorship support
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-auto">
                <p className="text-blue-700 font-bold text-lg">
                  Cash Prize: ₹1.5 Lakh
                </p>
                <div className="mt-4 p-4 bg-blue-600/10 rounded-lg border border-blue-400/20">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop"
                    alt="Hackathon"
                    className="w-full h-24 object-cover rounded-lg opacity-80"
                  />
                </div>
              </div>
            </ThreeDCard>

            <ThreeDCard
              className="group cursor-pointer h-full flex flex-col"
              depth={50}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2 font-serif">
                  IDEATHON
                </h3>
                <p className="text-sm text-gray-700 font-semibold">
                  24-Hour Innovation Challenge
                </p>
              </div>
              <div className="flex-grow">
                <p className="text-gray-800 text-center font-medium mb-4">
                  The 24-hour Ideathon on Sustainable Futures for Northeast
                  India will challenge students to design business models,
                  policies, community campaigns, financial tools, and
                  educational innovations addressing regional issues beyond
                  technology. Through research, mentoring, and pitching, teams
                  will deliver practical, policy-ready solutions with potential
                  for community adoption and impact.
                </p>
                <div className="mb-4">
                  <h4 className="text-gray-900 font-semibold mb-2">
                    Tracks (Pick One):
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Business, Market & Digital Commerce [SDG 8, 9, 12, 15]</li>
                    <li>• Policy & Governance Innovation [SDG 11, 12, 13, 16]</li>
                    <li>• Community Engagement & Storytelling [SDG 8, 11, 12, 17]</li>
                    <li>• Financial Inclusion for Green Growth [SDG 1, 5, 8, 10, 13]</li>
                    <li>• Education, Skills & Lifestyle Innovation [SDG 4, 8, 11, 12, 13]</li>
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="text-gray-900 font-semibold mb-2">Outcome:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>
                      • Actionable business, policy, and community models
                      addressing Northeast challenges
                    </li>
                    <li>
                      • Practical deliverables such as business canvases, policy
                      drafts, campaigns, and product prototypes
                    </li>
                    <li>
                      • Opportunities for pilot adoption with local
                      stakeholders, NGOs, or industry
                    </li>
                    <li>
                      • Strengthened student capacity in innovation,
                      entrepreneurship, and sustainable problem-solving
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-auto">
                <p className="text-blue-700 font-bold text-lg">
                  Cash Prize: ₹1 Lakh
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <img
                    src="https://images.unsplash.com/photo-1623652554515-91c833e3080e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Ideathon"
                    className="w-full h-24 object-cover rounded-lg opacity-80"
                  />
                </div>
              </div>
            </ThreeDCard>

            <ThreeDCard
              className="group cursor-pointer h-full flex flex-col"
              depth={50}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Trophy className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-serif">
                  STARTUP EXHIBITION
                </h3>
                <p className="text-sm text-gray-700 font-semibold">
                  100+ Innovation Stalls
                </p>
              </div>
              <div className="flex-grow">
                <p className="text-gray-800 text-center font-medium mb-4">
                  The Startup & Innovation Exhibition will showcase 100+
                  startups, innovators, and student entrepreneurs from Assam and
                  Northeast India, highlighting solutions in agritech, clean
                  energy, tourism, digital commerce, and more. By bringing
                  together startups, investors, policymakers, and academia, it
                  offers visibility, funding opportunities, and vital linkages
                  positioning Gauhati University as a hub for innovation and
                  regional ecosystem development.
                </p>
                <div className="mb-4">
                  <h4 className="text-gray-900 font-semibold mb-2">Outcome:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>
                      • Knowledge sharing and inspiration for young innovators
                    </li>
                    <li>
                      • Policy-level insights for ecosystem development in Assam
                      & NE
                    </li>
                    <li>
                      • Strengthened academia-industry-government linkages
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-auto">
                <p className="text-blue-700 font-bold text-lg">
                  Linkage for Seed Money
                </p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=200&fit=crop"
                    alt="Startup Exhibition"
                    className="w-full h-24 object-cover rounded-lg opacity-80"
                  />
                </div>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Team Formation & Composition
              </h3>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">
                    Teams must be formed from the same institute (no
                    inter-college teams)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">
                    Each team should consist of 5 members, including a team
                    leader
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">
                    At least one female member is mandatory in every team
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">
                    This is an on-site hackathon; online participation not
                    entertained
                  </span>
                </li>
              </ul>
            </ThreeDCard>

            <ThreeDCard className="space-y-6" depth={30}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Nomination & Registration
              </h3>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">
                    Institutions can nominate up to 5 teams (3 shortlisted + 2
                    waitlisted)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">
                    Authorization letter from institute head required
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">
                    NOC from parents for participation required
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">
                    Joining fee: ₹500/- (refundable) for selected teams
                  </span>
                </li>
              </ul>
            </ThreeDCard>

            {/* Team Identity (new) */}
            <ThreeDCard className="space-y-6" depth={30}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Team Identity
              </h3>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">Team name must be unique and should not include the institute name</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">A student cannot be a member of more than one team (Hackathon / Ideathon)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">Teams submit their idea under a single track only, using the same team name</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">Teams must submit an undertaking agreeing to all terms and conditions</span>
                </li>
              </ul>
            </ThreeDCard>

            {/* Idea Submission Guidelines (new) */}
            <ThreeDCard className="space-y-6" depth={30}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                Idea Submission Guidelines
              </h3>
              <ul className="space-y-4 text-gray-800">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">Only the team leader can submit the idea on the GUenARK portal</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">Each team may submit ideas for a maximum of 1 problem statement</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <span className="font-semibold">Submission must include: Team name, Authorization/Nomination letter scans, Team member details, Problem statement chosen, and a 10‑slide PDF (title, description, presentation)</span>
                </li>
              </ul>
            </ThreeDCard>
          </div>

          <ThreeDCard className="mt-12" depth={40}>
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 font-serif">
              Evaluation & Selection Criteria
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 font-serif">
                  Novelty & Innovation
                </h4>
                <p className="text-sm text-gray-800 font-semibold">
                  Novel approach to problem-solving
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 font-serif">
                  Complexity & Clarity
                </h4>
                <p className="text-sm text-gray-800 font-semibold">
                  Technical complexity and clarity of solution
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 font-serif">
                  Feasibility & Sustainability
                </h4>
                <p className="text-sm text-gray-800 font-semibold">
                  Practical feasibility and sustainability
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2 font-serif">
                  Scale of Impact
                </h4>
                <p className="text-sm text-gray-800 font-semibold">
                  Scale of impact and future potential
                </p>
              </div>
            </div>
          </ThreeDCard>

          {/* Grand Finale (new) */}
          <ThreeDCard className="mt-8" depth={30}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">Grand Finale</h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span className="font-semibold">Grand Finale to be held offline at <span className="font-bold">GUIST (Guru Prasad Das Bhaban), Gauhati University</span></span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span className="font-semibold">Teams must travel to their assigned venue and be available for meetings, training, and preparation prior to the finale</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                <span className="font-semibold">Accommodation and Travel Allowance (TA) to be borne by participants</span>
              </li>
            </ul>
          </ThreeDCard>
        </div>
      </section>

      {/* 24-Hour Activity Plan */}
      <section id="timeline" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-blue-700 font-serif tracking-wide">
            24-Hour Activity Plan
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ThreeDCard className="space-y-6" depth={30}>
              <h3 className="text-2xl font-bold text-gray-900 font-serif">Hackathon</h3>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Day 1 (Afternoon – Night)</h4>
                <ul className="space-y-2 text-gray-800">
                  <li>• Hour 1–2: Problem statement briefing & team formation</li>
                  <li>• Hour 3–5: Requirement analysis & brainstorming (define scope, assign roles)</li>
                  <li>• Hour 6: Short break + quick sync-up</li>
                  <li>• Hour 7–9: Initial prototyping (UI sketches, system design, data models)</li>
                  <li>• Hour 10–11: Mentor check-in (technical validation & guidance)</li>
                  <li>• Hour 12: Refine prototype plan & set milestones for Day 2</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Day 2 (Morning – Afternoon)</h4>
                <ul className="space-y-2 text-gray-800">
                  <li>• Hour 13–15: Coding & development of core features</li>
                  <li>• Hour 16: Break + mentor checkpoint</li>
                  <li>• Hour 17–19: Integration & testing (debugging, refining functionality)</li>
                  <li>• Hour 20: Buffer for incomplete modules or troubleshooting</li>
                  <li>• Hour 21–22: Final touches (UI polish, performance check, deployment setup)</li>
                  <li>• Hour 23: Team sync + pitch preparation (demo flow & Q&A)</li>
                  <li>• Hour 24: Final presentations & live demos (5 min/team, max 6 slides)</li>
                </ul>
              </div>
            </ThreeDCard>

            <ThreeDCard className="space-y-6" depth={30}>
              <h3 className="text-2xl font-bold text-gray-900 font-serif">Ideathon</h3>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Day 1 (Afternoon – Night)</h4>
                <ul className="space-y-2 text-gray-800">
                  <li>• Hour 1–2: Problem orientation & team formation</li>
                  <li>• Hour 3–5: Research & problem scoping (market gaps, policies, stakeholders)</li>
                  <li>• Hour 6: Break & team reflection</li>
                  <li>• Hour 7–9: Draft initial solutions (business models, policy frameworks, prototypes)</li>
                  <li>• Hour 10–11: Mentor check‑in & validation feedback</li>
                  <li>• Hour 12: Refine ideas & set milestones for Day 2</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Day 2 (Morning – Afternoon)</h4>
                <ul className="space-y-2 text-gray-800">
                  <li>• Hour 13–15: Develop concrete deliverables (pitch decks, canvases, policy notes, prototypes)</li>
                  <li>• Hour 16: Break & mentor checkpoint</li>
                  <li>• Hour 17–19: Finalize deliverables (unit economics, roadmaps, rollout strategies)</li>
                  <li>• Hour 20: Buffer for pending work</li>
                  <li>• Hour 21–22: Rehearse presentations & finalize visuals</li>
                  <li>• Hour 23: Team reflection & Q&A prep</li>
                  <li>• Hour 24: Jury presentations (5 min/team, max 6 slides)</li>
                </ul>
              </div>
            </ThreeDCard>
          </div>
        </div>
      </section>

      {/* Expected Outcomes */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-blue-700 font-serif tracking-wide">
            Expected Outcomes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ThreeDCard className="space-y-4" depth={30}>
              <h3 className="text-2xl font-bold text-gray-900 font-serif">Hackathon</h3>
              <ul className="space-y-2 text-gray-800">
                <li>• Prototypes & Demos – Early-stage working solutions (apps, devices, dashboards)</li>
                <li>• Technical Models – AI/ML models, algorithms, or simulation results</li>
                <li>• Designs & Frameworks – System architectures, workflow designs, or engineering blueprints</li>
                <li>• Scalable Solutions – Roadmaps for pilot testing and deployment</li>
              </ul>
            </ThreeDCard>

            <ThreeDCard className="space-y-4" depth={30}>
              <h3 className="text-2xl font-bold text-gray-900 font-serif">Ideathon</h3>
              <ul className="space-y-2 text-gray-800">
                <li>• Business Models – Canvases, unit economics, and market linkage strategies</li>
                <li>• Policy Drafts – 2–3 page actionable policy notes with adoption roadmap</li>
                <li>• Financial Models – FinTech/microfinance concepts with impact mapping</li>
                <li>• Education/Lifestyle Models – Innovation frameworks with feasibility & adoption mapping</li>
              </ul>
            </ThreeDCard>
          </div>
        </div>
      </section>

      {/* 2-Days Startup Expo */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-blue-700 font-serif tracking-wide">
            2-Days Startup Expo
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ThreeDCard className="space-y-6" depth={30}>
              <h3 className="text-2xl font-bold text-gray-900 font-serif">Facilities Provided</h3>
              <ul className="space-y-2 text-gray-800">
                <li>• Exhibition stall space (table; standees permitted)</li>
                <li>• Access to power supply and internet</li>
                <li>• Basic logistical support for smooth participation</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 font-serif mt-6">Participant Responsibilities</h3>
              <ul className="space-y-2 text-gray-800">
                <li>• Bring own banners, posters, product demos, and prototypes</li>
                <li>• Set up and dismantle stalls within allotted time</li>
                <li>• Comply with Gauhati University regulations for any on-site sales</li>
              </ul>
            </ThreeDCard>

            <ThreeDCard className="space-y-6" depth={30}>
              <h3 className="text-2xl font-bold text-gray-900 font-serif">Application & Submission</h3>
              <ul className="space-y-2 text-gray-800">
                <li>• Applications must be submitted through the GUenARK Portal</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 font-serif mt-6">Required Documents</h3>
              <ul className="space-y-2 text-gray-800">
                <li>• Startup registration certificate / incorporation details</li>
                <li>• Brief startup profile (founders, sector, key achievements)</li>
                <li>• Pitch deck or presentation (PDF, max. 10 slides)</li>
                <li>• Logo, product images, and promotional materials (if available)</li>
                <li>• Each startup may apply under one thematic track only (to be finalized)</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 font-serif mt-6">Registration Fees</h3>
              <p className="text-gray-800 font-semibold">₹3000/- per team <span className="font-normal">(Refundable after participation in the event)</span></p>
            </ThreeDCard>
          </div>
          <div className="mt-8 bg-blue-50 rounded-2xl border border-blue-200 p-6">
            <p className="text-gray-900 font-serif font-semibold mb-2">All the registration fees are refundable after successful participation in <span className="font-bold">GUenARK 2026</span>.</p>
            <p className="text-red-600 font-semibold">Note: The fee will not be refunded in case of withdrawal or absence after registration.</p>
          </div>
        </div>
      </section>

      {/* Important Links */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-blue-700 font-serif tracking-wide">
            Important Links
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ThreeDCard className="p-6" depth={30}>
              <h3 className="text-2xl font-bold text-gray-900 font-serif mb-2">Registration – GUenARK 2026</h3>
              <p className="text-gray-700 font-semibold mb-4">Team registration</p>
              <a
                href="https://forms.gle/5sAbicfHShUE6KyW9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition"
              >
                Open Registration Form
              </a>
            </ThreeDCard>

            <ThreeDCard className="p-6" depth={30}>
              <h3 className="text-2xl font-bold text-gray-900 font-serif mb-2">Nomination – Letter Format</h3>
              <p className="text-gray-700 font-semibold mb-4">Institute nomination letter template</p>
              <a
                href="https://docs.google.com/document/d/1S02lCIc5uiSl3kWiawRetQddwSp0ySC9/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition"
              >
                Open Nomination Format
              </a>
            </ThreeDCard>

            <ThreeDCard className="p-6" depth={30}>
              <h3 className="text-2xl font-bold text-gray-900 font-serif mb-2">NOC (Parents/Guardian) – Letter Format</h3>
              <p className="text-gray-700 font-semibold mb-4">Parent/guardian NOC template</p>
              <a
                href="https://docs.google.com/document/d/1PQxi_d8GVjBKacIoZakxmjSjD2vPhruG/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition"
              >
                Open NOC Format
              </a>
            </ThreeDCard>

            <ThreeDCard className="p-6" depth={30}>
              <h3 className="text-2xl font-bold text-gray-900 font-serif mb-2">Presentation – Format</h3>
              <p className="text-gray-700 font-semibold mb-4">Presentation folder (max 10 slides)</p>
              <a
                href="https://drive.google.com/drive/folders/1vuGtyjMAVvSZzke76DQCNj0AW8ZfdX5q"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition"
              >
                Open Presentation Folder
              </a>
            </ThreeDCard>
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
            Compete for prestigious awards and recognition in sustainable
            development innovation
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                place: "Hackathon Prizes worth",
                prize: "₹1,50,000",
                gradient: "from-blue-300 via-blue-400 to-blue-600",
                border: "border-blue-300/30",
                glow: "shadow-blue-600/20",
                Icon: Trophy,
                subtitle: "24-Hour Technology Challenge",
              },
              {
                place: "Ideathon Prizes worth",
                prize: "₹1,00,000",
                gradient: "from-slate-300 via-slate-400 to-slate-600",
                border: "border-slate-400/30",
                glow: "shadow-slate-500/20",
                Icon: Award,
                subtitle: "24-Hour Innovation Challenge",
              },
              {
                place: "Startup Exhibition",
                prize: "Seed Money",
                gradient: "from-blue-100 via-blue-200 to-blue-300",
                border: "border-blue-300/30",
                glow: "shadow-blue-300/20",
                Icon: Star,
                subtitle: "Linkage for Funding",
              },
            ].map((prize, index) => (
              <ThreeDCard key={index} className="group" depth={50}>
                <div
                  className={`relative bg-gradient-to-br ${prize.gradient} p-8 rounded-3xl border ${prize.border} shadow-2xl ${prize.glow} backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
              </div>

                  {/* Badge Icon */}
                  <div className="relative flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 shadow-lg flex items-center justify-center">
                      {prize.Icon && (
                        <prize.Icon className="w-8 h-8 text-white drop-shadow" />
                      )}
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
              Plus special category prizes for each SDG theme, academic
              recognition, and potential implementation support!
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
      <section
        id="registration"
        className="relative z-10 py-20 px-6 bg-transparent"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 text-blue-700 font-serif tracking-wide">
            Register Your Team
          </h2>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg">
            <p className="text-lg text-gray-900 mb-8 font-serif font-semibold">
              Ready to be part of the innovation ecosystem? Register for GUenARK
              2026 and join the mega event building tomorrow at the crossroads
              of ideas, investment & governance.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                  HACKATHON & IDEATHON
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Eligibility:
                    </h4>
                    <p className="text-gray-700">
                      UG / PG / PhD students of same Institute
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Team size:
                    </h4>
                    <p className="text-gray-700">
                      Total five (5) members (including Team Leader)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Gender rule:
                    </h4>
                    <p className="text-gray-700">
                      At least one team member must be female
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Documents:
                    </h4>
                    <ul className="text-gray-700 space-y-1 ml-4">
                      <li>1. Nomination letter from Institute's Head</li>
                      <li>2. NOC letter from parents for participation</li>
                      <li>3. Idea Presentation (pdf only)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Fees:</h4>
                    <p className="text-gray-700">
                      Selected teams must submit ₹500/- (refundable)
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                  STARTUP EXHIBITION
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">
                      Eligibility:
                    </h4>
                    <p className="text-gray-700">
                      Assam Startup registered Ventures
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Fees:</h4>
                    <p className="text-gray-700">
                      ₹3000/- exhibition stall fare (refundable)
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">
                    What You'll Get
                  </h3>
                  <ul className="space-y-2 text-gray-800">
                    <li className="font-serif font-semibold">
                      • Expert mentorship
                    </li>
                    <li className="font-serif font-semibold">
                      • Networking opportunities
                    </li>
                    <li className="font-serif font-semibold">
                      • Certificate of participation
                    </li>
                    <li className="font-serif font-semibold">
                      • Potential implementation support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <a
                href="https://forms.gle/5sAbicfHShUE6KyW9"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-700 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all inline-block text-white"
              >
                Register Now
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
          {/* Organizing Committee Button */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 px-8 py-3 rounded-full text-white font-semibold shadow-lg">
              Organizing Committee
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-blue-800 font-serif tracking-wide">
            Patrons & Leadership
          </h2>
          
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Chief Patron Heading */}
            <h3 className="text-2xl font-bold text-center mb-6 text-blue-800 font-serif">
              Chief Patron
            </h3>
            {/* Chief Patron Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                  <img 
                    src="/Himanta.png" 
                    alt="Dr. Himanta Biswa Sarma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
                  Dr. Himanta Biswa Sarma
                </h3>
                <p className="text-lg text-gray-600 italic">
                  Hon'ble Chief Minister, Assam
                </p>
              </div>
            </div>
            {/* Patrons Heading */}
            <h3 className="text-2xl font-bold text-center mb-6 text-blue-800 font-serif">
              Patrons
            </h3>
            {/* Patrons Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                  <img 
                    src="/Keshab.png" 
                    alt="Shri Keshab Mahanta"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
                  Shri Keshab Mahanta
                </h3>
                <p className="text-lg text-gray-600 italic mb-6">
                  Hon'ble Minister of Revenue, Disaster Management, Information Technology, Science, Technology & Climate Change
                </p>
                
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                  <img 
                    src="/Bimal.png" 
                    alt="Shri Bimal Borah"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
                  Shri Bimal Borah
                </h3>
                <p className="text-lg text-gray-600 italic">
                  Hon'ble Minister of Cultural Affairs, Industries, Commerce and Public Enterprises
                </p>
              </div>
            </div>
            {/* Co-Patrons Heading */}
            <h3 className="text-2xl font-bold text-center mb-6 text-blue-800 font-serif">
              Co-Patrons
            </h3>
            {/* Co-Patrons Cards */}
            <div className="space-y-8">
              
              {/* Prof. Nani Gopal Mahanta */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                    <img 
                      src="/Nanigopal.png" 
                      alt="Prof. Nani Gopal Mahanta"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
                    Prof. Nani Gopal Mahanta
                  </h3>
                  <p className="text-lg text-gray-600 italic">
                    Hon'ble Vice Chancellor, Gauhati University
                  </p>
                </div>
              </div>

              {/* Dr. Krishna Kumar Dwivedi */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                    <img 
                      src="/Krishna.png" 
                      alt="Dr. Krishna Kumar Dwivedi"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
                    Dr. Krishna Kumar Dwivedi, IAS
                  </h3>
                  <p className="text-lg text-gray-600 italic">
                    Principal Secretary to Hon'ble CM Assam
                  </p>
                </div>
              </div>

              {/* Dr. Jeevan Basavaraj */}
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg">
                    <img 
                      src="/Jeevan.png" 
                      alt="Dr. Jeevan Basavaraj"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
                    Dr. Jeevan Basavaraj, IAS
                  </h3>
                  <p className="text-lg text-gray-600 italic">
                    Secretary, Dept. of Innovation, Incubation and Startups, Govt. of Assam
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Advisory Team Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-800 font-serif">
              Advisory Team
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Administrative Advisor */}
              <div className="bg-blue-100 rounded-2xl p-6 shadow-xl border border-blue-200">
                <h4 className="text-xl font-bold text-center mb-4 text-blue-800 font-serif">
                  Administrative Advisor
                </h4>
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-800 mb-1 font-serif">
                    Prof. Utpal Sarma
                  </p>
                  <p className="text-gray-700 text-sm">
                    Registrar, GU
                  </p>
                </div>
              </div>

              {/* Technical Advisors */}
              <div className="bg-blue-100 rounded-2xl p-6 shadow-xl border border-blue-200">
                <h4 className="text-xl font-bold text-center mb-4 text-blue-800 font-serif">
                  Technical Advisors
                </h4>
                <div className="space-y-3">
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-800 mb-1 font-serif">
                      Prof. Shikhar Kumar Sarma
                    </p>
                    <p className="text-gray-700 text-sm">
                      Dean Faculty of Tech, GU
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-800 mb-1 font-serif">
                      Prof. Kumananda Tayung
                    </p>
                    <p className="text-gray-700 text-sm">
                      Dean Faculty of Science, GU
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-800 mb-1 font-serif">
                      Prof. Pradeep Kr. Jain
                    </p>
                    <p className="text-gray-700 text-sm">
                      Dean, Faculty of Comm. & Mngt., GU
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-gray-800 mb-1 font-serif">
                      Prof. Ratul Mahanta
                    </p>
                    <p className="text-gray-700 text-sm">
                      Dean Faculty of Arts, GU
                    </p>
                  </div>
                </div>
              </div>

              {/* Strategic Advisor */}
              <div className="bg-blue-100 rounded-2xl p-6 shadow-xl border border-blue-200">
                <h4 className="text-xl font-bold text-center mb-4 text-blue-800 font-serif">
                  Strategic Advisor
                </h4>
                <div className="text-center">
                  <p className="text-lg font-bold text-gray-800 mb-1 font-serif">
                    Neha K Mehra
                  </p>
                  <div className="space-y-1">
                    <p className="text-gray-700 text-sm">
                      Promoter, York Print
                    </p>
                    <p className="text-gray-700 text-sm">
                      Board Member, FIEO
                    </p>
                    <p className="text-gray-700 text-sm">
                      Secretary, Laghu Udyog Bharti NE Women's Wing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="relative z-10 py-20 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 text-blue-700 font-serif tracking-wide">
            Sponsors
          </h2>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-4 px-4 font-bold text-gray-900 font-serif">
                      Benefits / Criteria
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-blue-600 font-serif">
                      Platinum
                      <br />
                      (₹7.0-₹10 L)
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-yellow-600 font-serif">
                      Gold
                      <br />
                      (₹5.0 L)
                    </th>
                    <th className="text-center py-4 px-4 font-bold text-gray-600 font-serif">
                      Silver
                      <br />
                      (₹2.0 L)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-semibold text-gray-800">
                      Logo Visibility
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700">
                      Largest (all media, stage, kits)
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700">
                      Prominent (banners, kits, website)
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700">
                      Side panels, event mention
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-semibold text-gray-800">
                      Speaking Opportunity
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700">
                      Inaugural session
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700">
                      Breakout talk
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700">—</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-4 px-4 font-semibold text-gray-800">
                      Exhibition Booth
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700">
                      2 Premium stalls
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700">
                      Large stall
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700">
                      Standard stall
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-semibold text-gray-800">
                      Branding at Venue
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700">
                      Stage backdrop & premium spots
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700">
                      Banners & event materials
                    </td>
                    <td className="py-4 px-4 text-center text-gray-700">
                      Side panels & ceremony mention
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-800 font-semibold mb-4">
                Interested in sponsoring GUenARK 2026?
              </p>
              <a
                href="mailto:guenark@gauhati.ac.in"
                className="bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:scale-105 transition-all inline-block"
              >
                Contact Us for Sponsorship
              </a>
            </div>
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
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 border-2 border-gray-800 rounded-full flex items-center justify-center">
                <Mail className="text-gray-800" size={32} />
            </div>
              <h3 className="text-xl font-bold mb-4 font-serif text-gray-900">
                Email Us
              </h3>
              <p className="text-gray-800 font-semibold mb-2">
                guenark@gauhati.ac.in
              </p>
              <p className="text-gray-800 font-semibold">
                iis_cell@gauhati.ac.in
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 border-2 border-gray-800 rounded-full flex items-center justify-center">
                <Globe className="text-gray-800" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 font-serif text-gray-900">
                Website
              </h3>
              <p className="text-gray-800 font-semibold">
                www.gauhati.ac.in
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* FOLLOW US Section */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-6 font-serif">FOLLOW US</h3>
              <div className="flex justify-center md:justify-start space-x-6 mb-6">
                {/* Facebook */}
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="text-white hover:text-pink-400 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875z"/>
                  </svg>
                </a>
                {/* Twitter */}
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <p className="text-white text-sm">
                © 2025-26 GUenARK 2026. All rights reserved
              </p>
            </div>

            {/* CONTACT US Section */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-6 font-serif">CONTACT US</h3>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <p className="text-white text-sm">
                    +91 361 257 0411, +91 361 257 0412
                  </p>
                </div>
                {/* Email */}
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <p className="text-white text-sm">
                    guenark@gauhati.ac.in, iis_cell@gauhati.ac.in
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
