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

export default function BrandIdentity() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompetitorSidebarOpen, setIsCompetitorSidebarOpen] = useState(false);
  const [isVibeOpen, setIsVibeOpen] = useState(false);
  const [heroOverlayOpacity, setHeroOverlayOpacity] = useState(0.5);

  return (
    <div className="min-h-screen print:min-h-0 bg-[#ccbfb2] font-sans text-[#292623] selection:bg-[#262624] selection:text-[#faf9f4]">
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
          <label className="hidden md:flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-semibold tracking-[0.24em] uppercase whitespace-nowrap">
              Overlay
            </span>
            <input
              type="range"
              min="0"
              max="80"
              step="1"
              value={Math.round(heroOverlayOpacity * 100)}
              onChange={(event) => setHeroOverlayOpacity(Number(event.target.value) / 100)}
              className="discreet-slider w-20"
              aria-label="Hero background overlay opacity"
            />
          </label>
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
              <Link to="/identity" className="px-4 py-3 text-sm font-medium hover:bg-gray-50 transition-colors">01</Link>
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
          {/* Go to Top */}
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

          {/* Process */}
          <div>
            <Link 
              to="/process" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-[14px] font-bold text-[#d97757] hover:text-white transition-colors uppercase tracking-widest"
            >
              Process
            </Link>
          </div>

          {/* Brand Identity */}
          <div>
            <Link 
              to="/identity" 
              onClick={() => setIsMenuOpen(false)} 
              className="text-[14px] font-bold text-[#d97757] hover:text-white transition-colors uppercase tracking-widest"
            >
              Logo Concept 01
            </Link>
          </div>

          {/* Core Identity */}
          <div>
            <h3 className="text-[14px] font-bold text-[#d97757] mb-4 uppercase tracking-widest">Core Identity</h3>
            <ul className="space-y-3">
              <li><Link to="/#brand-direction" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Brand Direction</Link></li>
              <li><Link to="/#brand-foundation" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Brand Foundation</Link></li>
              <li><Link to="/#brand-archetype" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Brand Archetype</Link></li>
              <li><Link to="/#brand-narrative" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Brand Narrative</Link></li>
            </ul>
          </div>
          {/* Brand Expression */}
          <div>
            <h3 className="text-[14px] font-bold text-[#d97757] mb-4 uppercase tracking-widest">Brand Expression</h3>
            <ul className="space-y-3">
              <li><Link to="/#brand-personality" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Brand Personality</Link></li>
              <li><Link to="/#tone-of-voice" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Tone of Voice</Link></li>
              <li><Link to="/#messaging-pillars" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Messaging Pillars</Link></li>
            </ul>
          </div>
          {/* Market & Audience */}
          <div>
            <h3 className="text-[14px] font-bold text-[#d97757] mb-4 uppercase tracking-widest">Market & Audience</h3>
            <ul className="space-y-3">
              <li><Link to="/#swot-analysis" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">SWOT Analysis</Link></li>
              <li><Link to="/#competitive-landscape" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Competitive Landscape</Link></li>
              <li><Link to="/#target-audience" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Target Audience</Link></li>
              <li><Link to="/#customer-journey" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Customer Journey</Link></li>
            </ul>
          </div>
          {/* Marketing */}
          <div>
            <h3 className="text-[14px] font-bold text-[#d97757] mb-4 uppercase tracking-widest">Marketing</h3>
            <ul className="space-y-3">
              <li><Link to="/#marketing-messaging" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Marketing Messaging</Link></li>
              <li><Link to="/#conversion-copy" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Conversion Copy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-[57px] pb-0 px-0 w-full">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-4 lg:grid-cols-4 gap-[1px] bg-white">
          
          {/* Logo - Hero / Full Width & 2x Taller */}
          <div className="md:col-span-2 lg:col-span-4 print:col-span-4 h-[calc(100vh-57px)] print:h-auto print:min-h-0 print:py-24 bg-white flex flex-col items-center justify-center relative overflow-hidden p-12 md:p-24">
            <img
              src="/Bailey-Weiler-home--lakeside.jpg"
              alt="Bailey Weiler Home"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ backgroundColor: `rgba(27, 24, 23, ${heroOverlayOpacity})` }}
            ></div>
            <img 
              src="/01-light-logo.png" 
              alt="Primary Logo" 
              className="relative z-10 w-full max-w-3xl max-h-full object-contain drop-shadow-2xl mt-12" 
            />
          </div>

          {/* Full Width Variations */}
          <div className="md:col-span-2 lg:col-span-4 print:col-span-4 bg-[#faf9f4] overflow-hidden">
            <img
              src="/01-variations.png"
              alt="Logo variations"
              className="block w-full h-auto"
            />
          </div>

          {/* Full Width Stationary */}
          <div className="md:col-span-2 lg:col-span-4 print:col-span-4 bg-[#faf9f4] overflow-hidden">
            <img
              src="/01-stationary.png"
              alt="Brand stationary"
              className="block w-full h-auto"
            />
          </div>

          {/* Full Width Additional Mocks */}
          <div className="md:col-span-2 lg:col-span-4 print:col-span-4 bg-[#faf9f4] overflow-hidden">
            <img
              src="/01-additional-mocks.png"
              alt="Additional logo mockups"
              className="block w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
