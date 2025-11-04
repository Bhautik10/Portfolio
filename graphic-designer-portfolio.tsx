import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Github, Briefcase, Award, Code, Palette, ChevronRight, ExternalLink, Sparkles, Star } from 'lucide-react';

export default function PortfolioWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [scrollY, setScrollY] = useState(0);
  const fullTitle = "Graphic Designer";
  const [typedTitle, setTypedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const typingSpeed = 80;
    const deletingSpeed = 50;
    const pauseAfterTypeMs = 1200;
    const pauseAfterDeleteMs = 400;

    let timeoutId: number | undefined;

    if (!isDeleting && typedTitle.length < fullTitle.length) {
      timeoutId = window.setTimeout(() => {
        setTypedTitle(fullTitle.slice(0, typedTitle.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && typedTitle.length === fullTitle.length) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), pauseAfterTypeMs);
    } else if (isDeleting && typedTitle.length > 0) {
      timeoutId = window.setTimeout(() => {
        setTypedTitle(fullTitle.slice(0, typedTitle.length - 1));
      }, deletingSpeed);
    } else if (isDeleting && typedTitle.length === 0) {
      timeoutId = window.setTimeout(() => setIsDeleting(false), pauseAfterDeleteMs);
    }

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [typedTitle, isDeleting, fullTitle]);

  const projects = [
    {
      id: 1,
      title: "Brand Identity - Tech Startup",
      category: "branding",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      description: "Complete brand identity including logo, color palette, and brand guidelines",
      color: "from-pink-300 to-purple-300"
    },
    {
      id: 2,
      title: "E-commerce UI Design",
      category: "ui-ux",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      description: "Modern e-commerce platform with seamless user experience",
      color: "from-blue-300 to-cyan-300"
    },
    {
      id: 3,
      title: "Social Media Campaign",
      category: "marketing",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
      description: "Engaging social media graphics for product launch",
      color: "from-yellow-300 to-orange-300"
    },
    {
      id: 4,
      title: "Restaurant Branding",
      category: "branding",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      description: "Full branding package for upscale dining establishment",
      color: "from-green-300 to-emerald-300"
    },
    {
      id: 5,
      title: "Mobile App Interface",
      category: "ui-ux",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      description: "Intuitive fitness tracking app with modern aesthetics",
      color: "from-purple-300 to-pink-300"
    },
    {
      id: 6,
      title: "Magazine Layout Design",
      category: "print",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80",
      description: "Editorial design for lifestyle magazine",
      color: "from-red-300 to-rose-300"
    }
  ];

  const skills = [
    { name: "Adobe Creative Suite", level: 95, color: "from-pink-400 to-purple-500" },
    { name: "Figma & Sketch", level: 90, color: "from-blue-400 to-cyan-500" },
    { name: "Brand Identity", level: 92, color: "from-yellow-400 to-orange-500" },
    { name: "UI/UX Design", level: 88, color: "from-green-400 to-emerald-500" },
    { name: "Typography", level: 85, color: "from-purple-400 to-pink-500" },
    { name: "Motion Graphics", level: 80, color: "from-red-400 to-rose-500" }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Floating Elements Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Animated SVG Graphics */}
        <svg className="absolute top-10 left-10 w-32 h-32 animate-spin" style={{animationDuration: '20s'}} viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="url(#gradient1)" strokeWidth="3" strokeDasharray="10 5"/>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        <svg className="absolute top-40 right-20 w-24 h-24" style={{animation: 'float 6s ease-in-out infinite'}} viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="url(#gradient2)" opacity="0.3"/>
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>

        <svg className="absolute bottom-32 left-1/4 w-28 h-28 animate-pulse" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" rx="10" fill="url(#gradient3)" opacity="0.3" transform="rotate(45 50 50)"/>
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        <svg className="absolute bottom-20 right-32 w-36 h-36 animate-bounce" style={{animationDuration: '3s'}} viewBox="0 0 100 100">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="url(#gradient4)" opacity="0.3"/>
          <defs>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-lg shadow-2xl' : 'bg-white/70 backdrop-blur-md shadow-lg'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-300 shadow-lg">
                  <Sparkles className="text-white" size={24} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent block leading-tight">
                  Bhautik Bhoot
                </span>
                <span className="text-xs text-gray-600 font-semibold">Graphic Designer</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-2">
              {['Home', 'About', 'Work', 'Skills', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="relative px-6 py-2 text-gray-700 hover:text-purple-600 transition font-semibold group"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <a 
                href="#contact" 
                className="ml-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-purple-300 transition transform hover:scale-105"
              >
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-700 relative w-12 h-12 flex items-center justify-center rounded-xl hover:bg-purple-50 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X size={28} style={{ animation: 'spin 0.3s linear 1' }} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-lg shadow-2xl border-t border-purple-100 animate-slideDown">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {['Home', 'About', 'Work', 'Skills', 'Contact'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block px-6 py-4 text-gray-700 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 rounded-2xl transition font-semibold transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animation: 'fadeIn 0.3s ease-out',
                    animationDelay: `${index * 0.05}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact" 
                className="block mx-6 mt-4 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-xl text-center transform hover:scale-105 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        @keyframes caretBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .caret {
          display: inline-block;
          width: 1px;
          height: 1em;
          background: currentColor;
          animation: caretBlink 1s steps(1) infinite;
          vertical-align: -0.15em;
        }
      `}</style>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-20 h-20 border-4 border-purple-300 rounded-lg animate-spin" style={{animationDuration: '10s'}}></div>
          <div className="absolute top-40 right-32 w-16 h-16 bg-pink-300 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-24 h-24 border-4 border-orange-300 rounded-full" style={{animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite'}}></div>
          <div className="absolute top-1/2 right-20 w-12 h-12 bg-yellow-300 transform rotate-45" style={{animation: 'bounce 2s infinite'}}></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 text-sm font-semibold shadow-lg animate-pulse">
                <Star size={16} />
                Available for Freelance
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-3 leading-tight">
                Hi, I'm
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent animate-pulse">
                  Bhautik Bhoot
                </span>
              </h1>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-6">
                {typedTitle}
                <span className="ml-1 caret"></span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                With 5 years of experience crafting compelling visual stories and memorable brand identities that leave lasting impressions
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#work" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-300 transition transform hover:scale-105 flex items-center gap-2">
                  View My Work
                  <ChevronRight className="group-hover:translate-x-1 transition" size={20} />
                </a>
                <a href="#contact" className="px-8 py-4 bg-white text-purple-600 rounded-full font-semibold shadow-xl hover:shadow-2xl border-2 border-purple-200 hover:border-purple-400 transition transform hover:scale-105">
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero_bg.png"
                  alt="Creative design workspace"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transforming Ideas into Visual Excellence
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              I help brands stand out with creative designs that captivate audiences and drive results. Let's create something extraordinary together!
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">100+</div>
                <div className="text-lg opacity-90">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">15+</div>
                <div className="text-lg opacity-90">Awards Won</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">5+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600">Passionate designer turning ideas into visual masterpieces</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border-4 border-purple-100 hover:border-purple-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Briefcase className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">5+ Years</h3>
              <p className="text-gray-600 text-lg">Professional experience in graphic design and brand development across various industries</p>
            </div>
            <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border-4 border-pink-100 hover:border-pink-300">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">50+ Projects</h3>
              <p className="text-gray-600 text-lg">Successfully completed projects for satisfied clients worldwide with 5-star reviews</p>
            </div>
            <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border-4 border-blue-100 hover:border-blue-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <Code className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Multi-disciplinary</h3>
              <p className="text-gray-600 text-lg">Expertise in branding, UI/UX, digital marketing, and creative strategy</p>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-4 border-orange-200">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Creative workspace"
                  className="rounded-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-orange-400 to-pink-400 rounded-2xl p-6 shadow-xl">
                  <p className="text-white font-bold text-4xl">5+</p>
                  <p className="text-white text-sm">Years Experience</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">My Creative Journey</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate graphic designer with over 5 years of experience transforming ideas into stunning visual narratives. My journey began with a love for art and evolved into a professional career where I blend creativity with strategy.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I specialize in creating memorable brand identities, intuitive user interfaces, and compelling marketing materials that not only look beautiful but also drive results. Every project is an opportunity to push creative boundaries and deliver exceptional value to my clients.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-6 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full font-semibold text-sm">Brand Identity</span>
                <span className="px-6 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full font-semibold text-sm">UI/UX Design</span>
                <span className="px-6 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 rounded-full font-semibold text-sm">Digital Marketing</span>
                <span className="px-6 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full font-semibold text-sm">Illustration</span>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition transform hover:scale-105">
                Let's Collaborate
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">My Design Process</h2>
            <p className="text-xl text-gray-600">A systematic approach to creating exceptional designs</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border-4 border-purple-100 hover:border-purple-300">
              <div className="text-6xl font-bold text-purple-200 mb-4">01</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Discovery</h3>
              <p className="text-gray-600">Understanding your brand, goals, and target audience to create a solid foundation</p>
            </div>
            <div className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border-4 border-pink-100 hover:border-pink-300">
              <div className="text-6xl font-bold text-pink-200 mb-4">02</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Ideation</h3>
              <p className="text-gray-600">Brainstorming creative concepts and exploring various design directions</p>
            </div>
            <div className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border-4 border-orange-100 hover:border-orange-300">
              <div className="text-6xl font-bold text-orange-200 mb-4">03</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Execution</h3>
              <p className="text-gray-600">Bringing ideas to life with precision, attention to detail, and creative excellence</p>
            </div>
            <div className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 border-4 border-green-100 hover:border-green-300">
              <div className="text-6xl font-bold text-green-200 mb-4">04</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Delivery</h3>
              <p className="text-gray-600">Finalizing the design with revisions and delivering polished, ready-to-use assets</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600">What clients say about working with me</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-purple-100 hover:shadow-2xl transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={24} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg italic">"Absolutely phenomenal work! The brand identity created exceeded all expectations. Professional, creative, and delivered on time."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                <div>
                  <p className="font-bold text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-600 text-sm">CEO, Tech Startup</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-pink-100 hover:shadow-2xl transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={24} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg italic">"Outstanding UI/UX design that transformed our app. User engagement increased by 40% after the redesign. Highly recommend!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full"></div>
                <div>
                  <p className="font-bold text-gray-900">Michael Chen</p>
                  <p className="text-gray-600 text-sm">Product Manager, Fitness App</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-orange-100 hover:shadow-2xl transition">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={24} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 text-lg italic">"Creative genius! The marketing materials boosted our campaign performance significantly. A true professional who understands design."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full"></div>
                <div>
                  <p className="font-bold text-gray-900">Emily Rodriguez</p>
                  <p className="text-gray-600 text-sm">Marketing Director, E-commerce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Featured Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of my recent projects showcasing brand identity, digital design, and creative solutions
            </p>
          </div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'branding', 'ui-ux', 'marketing', 'print'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-8 py-3 rounded-full font-semibold transition transform hover:scale-105 shadow-lg ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl'
                    : 'bg-white text-gray-700 hover:shadow-xl hover:text-purple-600'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1).replace('-', '/')}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-3 border-4 border-transparent hover:border-purple-200"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-70 transition`}></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                    <button className="px-6 py-3 bg-white text-purple-600 rounded-full font-bold shadow-xl transform scale-90 group-hover:scale-100 transition flex items-center gap-2">
                      View Details <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Mastering the tools and techniques that bring ideas to life</p>
          </div>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex justify-between mb-4">
                  <span className="text-xl font-bold text-gray-900">{skill.name}</span>
                  <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div
                    className={`bg-gradient-to-r ${skill.color} h-4 rounded-full transition-all duration-1000 shadow-lg`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-600 mb-12">
              Have a project in mind? I'd love to hear about it and see how we can create something amazing together.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a href="mailto:bhootbhautik@gmail.com" className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full hover:shadow-xl transition transform hover:scale-105 font-semibold">
                <Mail size={24} /> bhootbhautik@gmail.com
              </a>
              <a href="tel:+919998143701" className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full hover:shadow-xl transition transform hover:scale-105 font-semibold">
                <Phone size={24} /> +91 999 814 3701
              </a>
            </div>
            <div className="flex justify-center gap-6">
              <a href="#" className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition shadow-lg hover:shadow-xl">
                <Linkedin size={28} />
              </a>
              <a href="#" className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition shadow-lg hover:shadow-xl">
                <Github size={28} />
              </a>
              <a href="#" className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition shadow-lg hover:shadow-xl">
                <ExternalLink size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 font-medium">© 2025 Bhautik Bhoot. Built with purpose and creativity</p>
        </div>
      </footer>
    </div>
  );
}