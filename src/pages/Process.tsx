import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, Users } from 'lucide-react';

const competitorLogos = [
  "com-Diyanni.png",
  "com-Executive.png",
  "com-ar.png",
  "com-light-becley.png",
  "com-capital.webp",
  "com-carrington.png",
  "com-light-christopher scott.webp",
  "com-light-fox.svg",
  "com-gg.webp",
  "com-gradison.png",
  "com-hbn.webp",
  "com-homebydesign.webp",
  "com-kentshaffer.png",
  "com-lorenwood.jpg",
  "com-mc.png",
  "com-oldtown.png",
  "com-light-scott cambell.webp",
  "com-scottbates.png",
  "com-light-sigma.png",
  "com-light-wedgewood.webp",
  "com-woodstock.png"
];

const typographyExploration = [
  { name: 'Serif', fontClass: 'font-serif' },
  { name: 'Sans Serif', fontClass: 'font-sans' },
  { name: 'Script', fontClass: 'font-script' },
  { name: 'Handwritten', fontClass: 'font-handwritten' },
  { name: 'Slab', fontClass: 'font-slab' },
];

const colorPalettes = [
  {
    name: 'Orange',
    psychology: 'Energetic, Playful, Warm, Vibrant',
    colors: ['#fff3e0', '#ffb74d', '#f57c00', '#e65100', '#bf360c']
  },
  {
    name: 'Yellow',
    psychology: 'Hopeful, Optimistic, Cheerful, Bright',
    colors: ['#fffde7', '#fff176', '#fbc02d', '#f57f17', '#f9a825']
  },
  {
    name: 'Blue',
    psychology: 'Reliable, Trustworthy, Calm, Professional',
    colors: ['#e3f2fd', '#64b5f6', '#1976d2', '#0d47a1', '#01579b']
  },
  {
    name: 'Pink',
    psychology: 'Romantic, Soft, Creative, Compassionate',
    colors: ['#fce4ec', '#f06292', '#e91e63', '#c2185b', '#880e4f']
  },
  {
    name: 'Brown',
    psychology: 'Earthy, Grounded, Reliable, Warm',
    colors: ['#efebe9', '#bcaaa4', '#795548', '#4e342e', '#3e2723']
  },
  {
    name: 'Black',
    psychology: 'Luxury, Sophisticated, Bold, Classic',
    colors: ['#f5f5f5', '#9e9e9e', '#616161', '#212121', '#000000']
  },
  {
    name: 'Red',
    psychology: 'Passionate, Urgent, Exciting, Powerful',
    colors: ['#ffebee', '#e57373', '#f44336', '#d32f2f', '#b71c1c']
  },
  {
    name: 'Purple',
    psychology: 'Royal, Imaginative, Luxurious, Spiritual',
    colors: ['#f3e5f5', '#ba68c8', '#9c27b0', '#7b1fa2', '#4a148c']
  },
  {
    name: 'Green',
    psychology: 'Natural, Growth, Fresh, Balanced',
    colors: ['#e8f5e9', '#81c784', '#4caf50', '#388e3c', '#1b5e20']
  }
];

export default function Process() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompetitorSidebarOpen, setIsCompetitorSidebarOpen] = useState(false);
  const [isVibeOpen, setIsVibeOpen] = useState(false);

  return (
    <div className="min-h-screen print:min-h-0 bg-[#faf9f4] text-[#262624] font-sans selection:bg-[#262624] selection:text-[#faf9f4]">
      {/* Sticky Navigation Menu */}
      <div 
        className="fixed top-0 left-0 right-0 z-40 bg-[#faf9f4] text-[#262624] px-6 md:px-12 lg:px-24 py-4 flex justify-between items-center border-b border-black/10 print:hidden"
      >
        <Link 
          to="/"
          className="text-[16px] font-bold tracking-[0.3em] uppercase hover:text-[#d97757] transition-colors text-left"
        >
          Branding
        </Link>
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsVibeOpen(!isVibeOpen)}
            className={`transition-colors hidden sm:flex items-center justify-center ${isVibeOpen ? 'text-[#d97757]' : 'hover:text-[#d97757]'}`}
            title="Vibe & Feel"
          >
            <Sparkles className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsCompetitorSidebarOpen(true)}
            className="hover:text-[#d97757] transition-colors hidden sm:flex items-center justify-center"
            title="Competitors"
          >
            <Users className="w-5 h-5" />
          </button>
          <Link to="/" className="text-sm font-semibold tracking-widest uppercase hover:text-[#d97757] transition-colors hidden sm:block">
            Strategy
          </Link>
          <Link to="/process" className="text-sm font-semibold tracking-widest uppercase hover:text-[#d97757] transition-colors hidden sm:block">
            Process
          </Link>
          <div className="relative group hidden sm:block">
            <button className="text-sm font-semibold tracking-widest uppercase hover:text-[#d97757] transition-colors flex items-center gap-1">
              Logo Concepts
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col overflow-hidden">
              <Link to="/identity" className="px-4 py-3 text-sm font-medium hover:bg-gray-50 transition-colors text-left">01</Link>
            </div>
          </div>
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="flex items-center gap-2 hover:text-[#d97757] transition-colors"
          >
            <span className="text-sm font-semibold tracking-widest uppercase hidden sm:block">Menu</span>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Vibe & Feel Dropdown Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-30 transition-opacity duration-300 ${isVibeOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsVibeOpen(false)} 
      />

      {/* Vibe & Feel Dropdown */}
      <div 
        className={`fixed top-0 left-0 right-0 bg-[#1b1817] text-[#faf9f4] z-30 shadow-2xl transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVibeOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div className="pt-[100px] pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Left Column: Primary Vibe */}
            <div className="md:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-12 bg-[#d97757]"></div>
                <h3 className="text-[12px] font-bold text-[#d97757] tracking-[0.2em] uppercase">Primary Vibe & Feel</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6">
                {['Home', 'Design', 'Build', 'Relational', 'Premium', 'Understated', 'Story'].map((vibe, i) => (
                  <span key={i} className="text-3xl md:text-4xl font-serif font-light tracking-tight text-white hover:text-[#d97757] transition-colors cursor-default">
                    {vibe}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Right Column: What it is not */}
            <div className="md:col-span-4 md:border-l md:border-white/10 md:pl-8 flex flex-col justify-start">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-[1px] w-8 bg-white/30"></div>
                <h3 className="text-[11px] font-semibold text-white/50 tracking-[0.2em] uppercase">What it is not</h3>
              </div>
              <ul className="space-y-4">
                {['Fashion', 'Tradesman', 'Overly Feminine or Masculine'].map((notVibe, i) => (
                  <li key={i} className="text-xl md:text-2xl font-light text-white/70 flex items-center gap-3">
                    <span className="text-[#d97757]/50 text-sm">✕</span>
                    {notVibe}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Competitor Sidebar */}
      <div 
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${isCompetitorSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsCompetitorSidebarOpen(false)} 
      />
      <div 
        className={`fixed top-0 right-0 bottom-0 w-full md:w-[400px] bg-[#faf9f4] text-[#262624] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isCompetitorSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 md:px-12 py-6 flex justify-between items-center border-b border-black/10">
          <div className="text-[16px] font-bold tracking-[0.3em] uppercase">Competitors</div>
          <button onClick={() => setIsCompetitorSidebarOpen(false)} className="hover:text-[#d97757] transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-0">
          <div className="grid grid-cols-2 gap-[1px] bg-black/10 border-b border-black/10">
            {competitorLogos.map((logo, index) => {
              const needsDarkBg = logo.startsWith('com-light');
              return (
                <div 
                  key={index} 
                  className={`${needsDarkBg ? 'bg-[#262624]' : 'bg-white'} p-8 flex items-center justify-center aspect-square`}
                >
                  <img 
                    src={`/${logo}`} 
                    alt={`Competitor ${index + 1}`} 
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full Screen / Drawer Menu */}
      <div 
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsMenuOpen(false)} 
      />
      <div 
        className={`fixed top-0 right-0 bottom-0 w-full md:w-[400px] bg-[#262624] text-[#faf9f4] z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 md:px-12 py-6 flex justify-between items-center border-b border-white/10">
          <div className="text-[16px] font-bold tracking-[0.3em]">MENU</div>
          <button onClick={() => setIsMenuOpen(false)} className="hover:text-[#d97757] transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-6 md:px-12 py-8 space-y-8">
          <div>
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
              }} 
              className="text-[14px] font-bold text-[#d97757] hover:text-white transition-colors uppercase tracking-widest"
            >
              Go to Top
            </button>
          </div>
          <div>
            <Link 
              to="/process" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-[14px] font-bold text-[#d97757] hover:text-white transition-colors uppercase tracking-widest"
            >
              Process
            </Link>
          </div>
          <div>
            <Link 
              to="/identity" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-[14px] font-bold text-[#d97757] hover:text-white transition-colors uppercase tracking-widest"
            >
              Logo Concept 01
            </Link>
          </div>
          <div>
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-[14px] font-bold text-[#d97757] hover:text-white transition-colors uppercase tracking-widest"
            >
              Brand Strategy
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-[1600px] mx-auto">
        
        <div className="mb-24">
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Process</h1>
          <p className="text-xl md:text-2xl font-light opacity-80 max-w-3xl">
            Exploring how different typography and color choices influence the feel and vibe of the Bailey Weiler brand.
          </p>
        </div>

        {/* Typography Section */}
        <section className="mb-32">
          <div className="mb-16 border-b border-black/10 pb-8">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#d97757]">Typography Exploration</h2>
            <p className="mt-4 text-lg opacity-70 max-w-2xl">
              How the types of fonts work with the client's name. Each style communicates a distinct personality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-3 lg:grid-cols-3 gap-8">
            {typographyExploration.map((type, index) => (
              <div key={index} className="bg-white p-12 md:p-16 flex flex-col items-center justify-center text-center aspect-[4/3] shadow-sm hover:shadow-md transition-shadow">
                <div className={`text-4xl md:text-5xl lg:text-6xl mb-8 ${type.fontClass}`}>
                  Bailey Weiler
                </div>
                <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-50 mt-auto">
                  {type.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Color Psychology Section */}
        <section>
          <div className="mb-16 border-b border-black/10 pb-8">
            <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#d97757]">Color Psychology</h2>
            <p className="mt-4 text-lg opacity-70 max-w-2xl">
              Different types of feel/vibe communicated through primary color palettes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-3 lg:grid-cols-3 gap-12">
            {colorPalettes.map((palette, index) => (
              <div key={index} className="flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-serif mb-2">{palette.name}</h3>
                  <p className="text-sm font-medium tracking-wide uppercase text-[#d97757] opacity-90">
                    {palette.psychology}
                  </p>
                </div>
                <div className="flex h-32 rounded-lg overflow-hidden shadow-sm">
                  {palette.colors.map((color, colorIndex) => (
                    <div 
                      key={colorIndex} 
                      className="flex-1 transition-transform hover:scale-105 origin-center"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
