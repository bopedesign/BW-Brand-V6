/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Check, X, Sparkles, MessageSquare, Target, Heart, ShieldCheck, PenTool, Layers, UserCheck, UserX, Menu, ChevronDown, Users } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

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

export default function BrandStrategy() {
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
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-sm font-semibold tracking-widest uppercase hover:text-[#d97757] transition-colors hidden sm:block"
          >
            Strategy
          </button>
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
              <li><a href="#brand-direction" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Brand Direction</a></li>
              <li><a href="#brand-foundation" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Brand Foundation</a></li>
              <li><a href="#brand-archetype" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Brand Archetype</a></li>
              <li><a href="#brand-narrative" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Brand Narrative</a></li>
            </ul>
          </div>
          {/* Brand Expression */}
          <div>
            <h3 className="text-[14px] font-bold text-[#d97757] mb-4 uppercase tracking-widest">Brand Expression</h3>
            <ul className="space-y-3">
              <li><a href="#brand-personality" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Brand Personality</a></li>
              <li><a href="#tone-of-voice" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Tone of Voice</a></li>
              <li><a href="#messaging-pillars" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Messaging Pillars</a></li>
            </ul>
          </div>
          {/* Market & Audience */}
          <div>
            <h3 className="text-[14px] font-bold text-[#d97757] mb-4 uppercase tracking-widest">Market & Audience</h3>
            <ul className="space-y-3">
              <li><a href="#swot-analysis" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">SWOT Analysis</a></li>
              <li><a href="#competitive-landscape" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Competitive Landscape</a></li>
              <li><a href="#target-audience" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Target Audience</a></li>
              <li><a href="#customer-journey" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Customer Journey</a></li>
            </ul>
          </div>
          {/* Marketing */}
          <div>
            <h3 className="text-[14px] font-bold text-[#d97757] mb-4 uppercase tracking-widest">Marketing</h3>
            <ul className="space-y-3">
              <li><a href="#marketing-messaging" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Marketing Messaging</a></li>
              <li><a href="#conversion-copy" onClick={() => setIsMenuOpen(false)} className="text-[18px] font-light hover:text-[#d97757] transition-colors">Conversion Copy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="h-screen print:h-auto print:min-h-0 overflow-hidden flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 bg-[#262624] text-[#faf9f4]">
        {/* Top Logo Area */}
        <div className="flex-none pt-4 z-10">
          <img src="/core-logo-white.png" alt="Core Strategic Brand" className="h-20 md:h-[100px] lg:h-[120px] w-auto" />
        </div>

        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-6 lg:gap-12 items-stretch justify-between w-full py-8 z-0">
          <div className="w-full lg:w-[55%] flex-shrink-0 flex flex-col justify-center z-10">
            <FadeIn>
              <h2 className="font-serif italic text-[clamp(16px,2vw,23.04px)] whitespace-nowrap mb-4 lg:mb-6 opacity-90">Define your brand's position before the market defines it for you</h2>
              <h1 className="text-[clamp(24px,4.5vw,82.56px)] leading-[1.1] font-bold tracking-tight mb-6 lg:mb-12 whitespace-nowrap">
                Brand Position & Strategy<br />
                For <span className="italic text-[#d97757]">Bailey Weiler Homes</span>
              </h1>
              <div className="text-[16px] opacity-80 space-y-1">
                <p>Prepared for: Craig Bailey and Don Weiler</p>
                <p>Date: 4/8/2026</p>
              </div>
            </FadeIn>
          </div>
          <div className="w-full lg:w-[45%] flex-1 relative min-h-[40vh] lg:min-h-0 z-0 pointer-events-none">
            <FadeIn delay={0.2} className="absolute inset-0 w-full h-full flex items-center justify-center lg:justify-end">
              <img 
                src="/header-graphic.png" 
                alt="Strategic Brand Graphic" 
                className="w-full h-full object-contain lg:object-right" 
              />
            </FadeIn>
          </div>
        </div>

              </section>

      {/* Table of Contents */}
      <section id="table-of-contents" className="min-h-screen print:min-h-0 flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 border-t border-white/10 bg-[#262624] text-[#faf9f4] print:break-inside-avoid">
        {/* Main Content Row */}
        <div className="w-full relative z-10 flex flex-col md:flex-row print:flex-row mt-4 md:mt-8 mb-auto">
          {/* Logo Column */}
          <div className="w-48 print:w-72 lg:w-72 flex-shrink-0 mb-12 md:mb-0 print:mb-0">
            <img src="/core-logo-white.png" alt="Core Strategic Brand" className="h-[120px] w-auto" />
          </div>

          {/* Content Column */}
          <div className="flex-1 max-w-5xl pt-2">
            <FadeIn>
              <h4 className="font-serif italic text-[19.2px] text-white/70 mb-4">What's inside</h4>
              <h2 className="text-[47.77px] lg:text-[57.33px] font-bold tracking-tight leading-[1.1] mb-10 text-white">Table of Contents</h2>
              <hr className="border-white/20 mb-12 w-full" />
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-x-16 gap-y-12">
              {/* Group 1: Core Identity */}
              <FadeIn delay={0.1}>
                <h3 className="text-[24px] font-bold text-[#d97757] mb-6 uppercase tracking-widest text-sm">Core Identity</h3>
                <ul className="space-y-4">
                  <li><a href="#brand-direction" className="text-[20px] lg:text-[24px] font-light hover:text-[#d97757] transition-colors">Brand Direction</a></li>
                  <li><a href="#brand-foundation" className="text-[20px] lg:text-[24px] font-light hover:text-[#d97757] transition-colors">Brand Foundation</a></li>
                  <li><a href="#brand-archetype" className="text-[20px] lg:text-[24px] font-light hover:text-[#d97757] transition-colors">Brand Archetype</a></li>
                  <li><a href="#brand-narrative" className="text-[20px] lg:text-[24px] font-light hover:text-[#d97757] transition-colors">Brand Narrative</a></li>
                </ul>
              </FadeIn>

              {/* Group 2: Brand Expression */}
              <FadeIn delay={0.2}>
                <h3 className="text-[24px] font-bold text-[#d97757] mb-6 uppercase tracking-widest text-sm">Brand Expression</h3>
                <ul className="space-y-4">
                  <li><a href="#brand-personality" className="text-[20px] lg:text-[24px] font-light hover:text-[#d97757] transition-colors">Brand Personality</a></li>
                  <li><a href="#tone-of-voice" className="text-[20px] lg:text-[24px] font-light hover:text-[#d97757] transition-colors">Tone of Voice</a></li>
                  <li><a href="#messaging-pillars" className="text-[20px] lg:text-[24px] font-light hover:text-[#d97757] transition-colors">Messaging Pillars</a></li>
                </ul>
              </FadeIn>

              {/* Group 3: Market & Audience */}
              <FadeIn delay={0.3}>
                <h3 className="text-[24px] font-bold text-[#d97757] mb-6 uppercase tracking-widest text-sm">Market & Audience</h3>
                <ul className="space-y-4">
                  <li><a href="#swot-analysis" className="text-[20px] lg:text-[24px] font-light hover:text-[#d97757] transition-colors">SWOT Analysis</a></li>
                  <li><a href="#competitive-landscape" className="text-[20px] lg:text-[24px] font-light hover:text-[#d97757] transition-colors">Competitive Landscape</a></li>
                  <li><a href="#target-audience" className="text-[20px] lg:text-[24px] font-light hover:text-[#d97757] transition-colors">Target Audience</a></li>
                  <li><a href="#customer-journey" className="text-[20px] lg:text-[24px] font-light hover:text-[#d97757] transition-colors">Customer Journey</a></li>
                </ul>
              </FadeIn>

              {/* Group 4: Marketing */}
              <FadeIn delay={0.4}>
                <h3 className="text-[24px] font-bold text-[#d97757] mb-6 uppercase tracking-widest text-sm">Marketing</h3>
                <ul className="space-y-4">
                  <li><a href="#marketing-messaging" className="text-[20px] lg:text-[24px] font-light hover:text-[#d97757] transition-colors">Marketing Messaging</a></li>
                  <li><a href="#conversion-copy" className="text-[20px] lg:text-[24px] font-light hover:text-[#d97757] transition-colors">Conversion Copy</a></li>
                </ul>
              </FadeIn>
            </div>
          </div>
        </div>

              </section>

      {/* Brand Direction */}
      <section id="brand-direction" className="min-h-screen print:min-h-0 flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 border-t border-black/10 bg-[#faf9f4] print:break-inside-avoid">
        {/* Main Content Row */}
        <div className="w-full relative z-10 flex flex-col md:flex-row print:flex-row mt-4 md:mt-8 mb-auto">
          {/* Logo Column */}
          <div className="w-48 print:w-72 lg:w-72 flex-shrink-0 mb-12 md:mb-0 print:mb-0">
            <img src="/core-logo-orange.png" alt="Core Strategic Brand" className="h-[120px] w-auto" />
          </div>
          
          {/* Content Column */}
          <div className="flex-1 max-w-4xl pt-2">
            <FadeIn>
              <h4 className="font-serif italic text-[19.2px] text-[#262624]/70 mb-4">Clarity for how the brand moves forward</h4>
              <h2 className="text-[47.77px] lg:text-[57.33px] font-bold tracking-tight leading-[1.1] mb-6 text-[#262624]">Brand Direction</h2>
              <p className="text-[19.2px] text-[#262624]/80 leading-relaxed mb-10 max-w-2xl">
                A focused direction that shapes how Bailey Weiler communicates, designs, and builds, ensuring every decision aligns with its standard.
              </p>
              
              <hr className="border-black/20 mb-10 w-full" />
              
              <p className="text-[27.65px] lg:text-[33.18px] leading-snug font-light text-[#262624]">
                Bailey Weiler is defined by a relational, design forward approach to building custom homes, where deep listening, intentional design, and a consistently high standard come together to deliver homes at an exceptional level that exceeds expectations.
              </p>
            </FadeIn>
          </div>
        </div>

              </section>

      {/* Brand Foundation (Promise & Value Prop) */}
      <section id="brand-foundation" className="min-h-screen print:min-h-0 flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 border-t border-black/10 bg-[#faf9f4] print:break-inside-avoid">
        {/* Main Content Row */}
        <div className="w-full relative z-10 flex flex-col md:flex-row print:flex-row mt-4 md:mt-8 mb-auto">
          {/* Logo Column */}
          <div className="w-48 print:w-72 lg:w-72 flex-shrink-0 mb-12 md:mb-0 print:mb-0">
            <img src="/core-logo-orange.png" alt="Core Strategic Brand" className="h-[120px] w-auto" />
          </div>
          
          {/* Content Column */}
          <div className="flex-1 max-w-4xl pt-2">
            <FadeIn>
              <h4 className="font-serif italic text-[19.2px] text-[#262624]/70 mb-4">What the brand is built on and what it stands for</h4>
              <h2 className="text-[47.77px] lg:text-[57.33px] font-bold tracking-tight leading-[1.1] mb-10 text-[#262624]">Brand Foundation</h2>
              <hr className="border-black/20 mb-10 w-full" />
              
              <div className="mb-12">
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Brand Mission</h5>
                <p className="text-[27.65px] lg:text-[33.18px] leading-snug font-light text-[#262624]">
                  To transform custom home building into a highly collaborative, design-led partnership, creating exceptional, personalized homes through meticulous craftsmanship and a deep understanding of each client's vision.
                </p>
              </div>

              <div className="mb-12">
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Brand Vision</h5>
                <p className="text-[27.65px] lg:text-[33.18px] leading-snug font-light text-[#262624]">
                  To be recognized as the premier builder of timeless, exceptionally crafted, personalized homes, setting the standard for design-forward and relationship-driven custom residential construction.
                </p>
              </div>

              <div className="mb-12">
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Brand Values</h5>
                <ul className="text-[27.65px] lg:text-[33.18px] leading-snug font-light text-[#262624] list-disc pl-8">
                  <li>Design-Led</li>
                  <li>Collaborative Partnership</li>
                  <li>Elevated Craftsmanship</li>
                  <li>Curated Experience</li>
                </ul>
              </div>

              <div className="mb-12">
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Brand Goals</h5>
                <p className="text-[27.65px] lg:text-[33.18px] leading-snug font-light text-[#262624]">
                  Elevate brand perception to a leading design-forward custom home partner; Attract and engage discerning, design-conscious clients; Successfully expand market presence; Clearly articulate their unique, relationship-driven approach; Differentiate effectively to compete at the highest tier of custom home building.
                </p>
              </div>

              <div className="mb-12">
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Brand Promise</h5>
                <p className="text-[27.65px] lg:text-[33.18px] leading-snug font-light text-[#262624]">
                  We build custom homes through deep understanding and a guided process, where design, detail, and execution are held to an exceptional standard.
                </p>
              </div>

              <div>
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Value Proposition</h5>
                <p className="text-[27.65px] lg:text-[33.18px] leading-snug font-light text-[#262624]">
                  Creating a custom home is complex, and most clients are not fully understood or guided through the process with clarity. Bailey Weiler takes a more relational, design forward approach grounded in listening, guidance, and a higher standard, resulting in homes delivered at an exceptional level.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

              </section>

      {/* Brand Archetype */}
      <section id="brand-archetype" className="min-h-screen print:min-h-0 flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 border-t border-black/10 bg-white/30 print:break-inside-avoid">
        {/* Main Content Row */}
        <div className="w-full relative z-10 flex flex-col md:flex-row print:flex-row mt-4 md:mt-8 mb-auto">
          {/* Logo Column */}
          <div className="w-48 print:w-72 lg:w-72 flex-shrink-0 mb-12 md:mb-0 print:mb-0">
            <img src="/core-logo-orange.png" alt="Core Strategic Brand" className="h-[120px] w-auto" />
          </div>
          
          {/* Content Column */}
          <div className="flex-1 max-w-4xl pt-2">
            <FadeIn>
              <h4 className="font-serif italic text-[19.2px] text-[#262624]/70 mb-4">The character of the brand and how it behaves</h4>
              <h2 className="text-[47.77px] lg:text-[57.33px] font-bold tracking-tight leading-[1.1] mb-10 text-[#262624]">Brand Archetype</h2>
              <hr className="border-black/20 mb-10 w-full" />
              
              <div className="mb-12">
                <h3 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-[#d97757] mb-2">The Creator</h3>
                <p className="font-serif italic text-[24px] text-[#262624]/80 mb-6">"Think different."</p>
                
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">The Creator Overview</h5>
                <p className="text-[20px] lg:text-[24px] leading-relaxed font-light text-[#262624] mb-10">
                  Brands that value innovation, imagination, and creativity. They aim to create things of enduring value.
                </p>
              </div>

              <div className="mb-12">
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Application to Your Company</h5>
                <p className="text-[18px] lg:text-[20px] leading-relaxed font-light text-[#262624]">
                  Bailey Weiler Homes embodies 'The Creator' archetype by going beyond traditional home building. They don't just construct houses; they craft unique, personalized living environments that stand as works of art and enduring value. This archetype perfectly aligns with their core values: being Design-Led, fostering Collaborative Partnerships, delivering Elevated Craftsmanship, and providing a Curated Experience. For Bailey Weiler Homes, 'The Creator' means they are the visionary partners who translate their clients' deepest aspirations into tangible, beautiful homes. Their Unique Selling Proposition—a relational, design-forward approach that includes deep listening, guided decision-making, and consistently high standards—is a direct manifestation of this archetype. They actively engage with homeowners, inviting them into a co-creative process where their ideas are not just heard, but expertly refined and executed. This approach caters directly to their target audience of affluent homeowners who possess a refined design sensibility and desire a guided, relationship-driven experience over a transactional one. In a competitive market where other builders often use generic claims of 'quality,' Bailey Weiler Homes stands out as a genuine creative force. They offer a specific and potent differentiator: the opportunity to truly invent a home that reflects personal identity and vision. They are selling the promise of a unique creation, a home that feels like an extension of the owner's dreams, built with meticulous care and an innovative spirit. This positioning allows Bailey Weiler Homes to inspire imagination, empower clients to express their individuality, and ultimately deliver homes that are not only beautiful but deeply meaningful and enduring.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-8">
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">General Definition</h5>
                  <p className="text-[16px] leading-relaxed font-light text-[#262624]">
                    For Bailey Weiler Homes, 'The Creator' archetype means they aren't just in the business of building houses; they are in the business of bringing unique visions to life. This identity means they value innovation, imagination, and a meticulous, design-led process. They aim to craft custom homes that are not only exceptionally well-built but also deeply meaningful and provide enduring value for their discerning clients. They see each project as an opportunity to create something truly original, blending artistic flair with precise execution.
                  </p>
                </div>
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Key Traits</h5>
                  <p className="text-[16px] leading-relaxed font-light text-[#262624]">
                    Bailey Weiler Homes, as a 'Creator' archetype, is defined by its inventive, imaginative, and artistic approach to home building. They stand out as non-conformists in a traditional industry, dedicated to crafting unique living spaces. Their key traits include a deep commitment to design leadership, fostering collaborative partnerships with clients to bring visions to life, and a relentless pursuit of elevated craftsmanship. They are problem-solvers who don't just build, but invent bespoke solutions through deep listening and guided decision-making, ensuring each home is a personalized masterpiece rather than a standard structure.
                  </p>
                </div>
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Typical Goal</h5>
                  <p className="text-[16px] leading-relaxed font-light text-[#262624]">
                    The main goal for Bailey Weiler Homes, embracing 'The Creator' archetype, is to craft highly personalized custom homes that are truly meaningful and hold enduring value for their owners. This goes beyond just constructing a structure; it's about translating a client's unique vision and lifestyle into a living work of art. Their mission is to create legacy homes that stand the test of time in both quality and design, becoming cherished spaces that deeply resonate with and reflect the individuality of their owners.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

              </section>

      {/* Brand Narrative */}
      <section id="brand-narrative" className="min-h-screen print:min-h-0 flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 border-t border-black/10 bg-[#faf9f4] print:break-inside-avoid">
        {/* Main Content Row */}
        <div className="w-full relative z-10 flex flex-col md:flex-row print:flex-row mt-4 md:mt-8 mb-auto">
          {/* Logo Column */}
          <div className="w-48 print:w-72 lg:w-72 flex-shrink-0 mb-12 md:mb-0 print:mb-0">
            <img src="/core-logo-orange.png" alt="Core Strategic Brand" className="h-[120px] w-auto" />
          </div>
          
          {/* Content Column */}
          <div className="flex-1 max-w-4xl pt-2">
            <FadeIn>
              <h4 className="font-serif italic text-[19.2px] text-[#262624]/70 mb-4">How the brand communicates what it does and why it exists</h4>
              <h2 className="text-[47.77px] lg:text-[57.33px] font-bold tracking-tight leading-[1.1] mb-10 text-[#262624]">Brand Narrative</h2>
              <hr className="border-black/20 mb-10 w-full" />
              
              <div className="mb-12">
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Brand Positioning Statement</h5>
                <p className="text-[24px] lg:text-[28px] leading-snug font-light text-[#262624]">
                  For discerning homeowners in Indianapolis who envision a truly unique living space, Bailey Weiler Homes is the custom builder that partners with you to bring your most personal design to life. We stand apart by blending a relational, design-forward approach with meticulous craftsmanship, ensuring your home is an authentic expression of you, built to an exceptional standard.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 print:grid-cols-3 gap-8">
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">What We Do</h5>
                  <p className="text-[18px] leading-relaxed font-light text-[#262624]">
                    We build highly personalized, custom luxury homes that blend timeless design with exceptional execution, setting a new standard for residential construction in the Indianapolis area.
                  </p>
                </div>
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">How We Do It</h5>
                  <p className="text-[18px] leading-relaxed font-light text-[#262624]">
                    We achieve this through a collaborative partnership built on deep listening, guiding you expertly through a design-led process. We combine thoughtful aesthetics with elevated craftsmanship, curating an experience that translates your distinct vision into a home of unparalleled quality and personal meaning.
                  </p>
                </div>
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Why We Do It</h5>
                  <p className="text-[18px] leading-relaxed font-light text-[#262624]">
                    We believe a home should be a deeply personal creation, a unique canvas reflecting its owners' vision and designed to enrich their lives for generations. We exist to inspire and empower discerning individuals to bring their most imaginative and meaningful living spaces into being.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

              </section>

      {/* Brand Personality */}
      <section id="brand-personality" className="min-h-screen print:min-h-0 flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 border-t border-black/10 bg-white/30 print:break-inside-avoid">
        {/* Main Content Row */}
        <div className="w-full relative z-10 flex flex-col md:flex-row print:flex-row mt-4 md:mt-8 mb-auto">
          {/* Logo Column */}
          <div className="w-48 print:w-72 lg:w-72 flex-shrink-0 mb-12 md:mb-0 print:mb-0">
            <img src="/core-logo-orange.png" alt="Core Strategic Brand" className="h-[120px] w-auto" />
          </div>
          
          {/* Content Column */}
          <div className="flex-1 w-full pt-2">
          <FadeIn>
            <h4 className="font-serif italic text-[19.2px] text-[#262624]/70 mb-4">The traits that shape how the brand shows up</h4>
            <h2 className="text-[47.77px] lg:text-[57.33px] font-bold tracking-tight leading-[1.1] mb-10 text-[#262624]">Brand Personality</h2>
            <hr className="border-black/20 mb-10 w-full" />
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-3 lg:grid-cols-3 gap-x-12 gap-y-8 lg:gap-y-12 w-full">
          {[
            { title: "Relational", desc: "We build real relationships, not transactions", icon: Heart },
            { title: "Passionate", desc: "We care deeply about getting it right, with an attention to detail that reflects a higher level of expectation", icon: Sparkles },
            { title: "Perceptive", desc: "We take the time to deeply listen and understand", icon: MessageSquare },
            { title: "Discerning", desc: "We make thoughtful decisions based on what truly matters, reflecting the expectations of clients with a refined point of view", icon: Target },
            { title: "Honest", desc: "We communicate openly and do what's right", icon: ShieldCheck },
            { title: "Elevated", desc: "We deliver at an exceptional level with a consistently high standard, reflected in both the design and the overall experience", icon: Layers },
          ].map((trait, i) => (
            <FadeIn key={i} delay={i * 0.1} className="flex flex-col">
              <trait.icon className="w-6 h-6 mb-4 text-[#d97757]" strokeWidth={1.5} />
              <h4 className="text-[20px] md:text-[24px] lg:text-[27.65px] mb-2 tracking-tight font-medium">{trait.title}</h4>
              <p className="text-[16px] leading-relaxed opacity-70">{trait.desc}</p>
            </FadeIn>
          ))}
          </div>
          </div>
        </div>

              </section>

      {/* Tone of Voice */}
      <section id="tone-of-voice" className="min-h-screen print:min-h-0 flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 border-t border-black/10 bg-[#faf9f4] print:break-inside-avoid">
        {/* Main Content Row */}
        <div className="w-full relative z-10 flex flex-col md:flex-row print:flex-row mt-4 md:mt-8 mb-auto">
          {/* Logo Column */}
          <div className="w-48 print:w-72 lg:w-72 flex-shrink-0 mb-12 md:mb-0 print:mb-0">
            <img src="/core-logo-orange.png" alt="Core Strategic Brand" className="h-[120px] w-auto" />
          </div>
          
          {/* Content Column */}
          <div className="flex-1 w-full pt-2">
            <FadeIn>
              <h4 className="font-serif italic text-[19.2px] text-[#262624]/70 mb-4">How the brand sounds in every interaction</h4>
              <h2 className="text-[47.77px] lg:text-[57.33px] font-bold tracking-tight leading-[1.1] mb-10 text-[#262624]">Tone of Voice</h2>
              <hr className="border-black/20 mb-10 w-full" />
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-x-12 gap-y-8 lg:gap-y-12 w-full">
              {[
                { title: "Clear, not complex", desc: "Explains things simply, without overcomplicating or using industry jargon" },
                { title: "Thoughtful and Intentional", desc: "Speaks with care and purpose, not rushed or careless" },
                { title: "Honest and Refined", desc: "Clear and truthful, delivered with professionalism and care" },
                { title: "Personal, not corporate", desc: "Feels like a conversation with a person, not a company" },
                { title: "Confident, not forceful", desc: "Speaks with certainty and experience, without pushing" },
                { title: "Aspirational, not exaggerated", desc: "Elevates the outcome and experience without becoming unrealistic or overdone" },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.1} className="flex flex-col border-b border-black/5 pb-4 lg:pb-6">
                  <h4 className="text-[20px] md:text-[24px] lg:text-[27.65px] tracking-tight font-medium mb-2">{item.title}</h4>
                  <p className="text-[16px] opacity-70 leading-relaxed">{item.desc}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

              </section>

      {/* SWOT Analysis */}
      <section id="swot-analysis" className="min-h-screen print:min-h-0 flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 border-t border-black/10 bg-white/30 print:break-inside-avoid">
        {/* Main Content Row */}
        <div className="w-full relative z-10 flex flex-col md:flex-row print:flex-row mt-4 md:mt-8 mb-auto">
          {/* Logo Column */}
          <div className="w-48 print:w-72 lg:w-72 flex-shrink-0 mb-12 md:mb-0 print:mb-0">
            <img src="/core-logo-orange.png" alt="Core Strategic Brand" className="h-[120px] w-auto" />
          </div>
          
          {/* Content Column */}
          <div className="flex-1 max-w-5xl pt-2">
            <FadeIn>
              <h4 className="font-serif italic text-[19.2px] text-[#262624]/70 mb-4">A strategic evaluation of the brand's current position</h4>
              <h2 className="text-[47.77px] lg:text-[57.33px] font-bold tracking-tight leading-[1.1] mb-10 text-[#262624]">SWOT Analysis</h2>
              <hr className="border-black/20 mb-10 w-full" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
                  <h3 className="text-[24px] lg:text-[27.65px] font-bold text-[#d97757] mb-4">Strengths</h3>
                  <p className="text-[16px] leading-relaxed font-light text-[#262624]">
                    Bailey Weiler Homes has a clear, compelling Unique Selling Proposition focusing on a relational, design-forward approach, which directly addresses a key pain point for their affluent, design-conscious target audience. Their brand archetype, 'The Creator,' aligns well with their focus on personalization and thoughtful design. Core brand values like 'Design-Led' and 'Collaborative Partnership' are strong internal drivers supporting this approach. Positive client testimonials reinforce their ability to deliver high-quality craftsmanship and a guided, professional experience. They have established experience since 2005, building a foundation of trust.
                  </p>
                </div>
                
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
                  <h3 className="text-[24px] lg:text-[27.65px] font-bold text-[#d97757] mb-4">Weaknesses</h3>
                  <p className="text-[16px] leading-relaxed font-light text-[#262624]">
                    While their USP is strong, the general language on their main website page (e.g., 'Premier Custom Home and Commercial Builder') could be more specific in articulating their unique, relationship-driven approach to fully elevate brand perception. The target audience is specified as Indianapolis, but they list addresses in both Bloomington and Zionsville, which might suggest a potentially diluted geographic focus if not managed carefully. Achieving their goal of elevating brand perception implies there's still room to solidify their position as the leading design-forward custom home partner.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
                  <h3 className="text-[24px] lg:text-[27.65px] font-bold text-[#d97757] mb-4">Opportunities</h3>
                  <p className="text-[16px] leading-relaxed font-light text-[#262624]">
                    There's a significant opportunity to further amplify their 'design-forward' and 'collaborative partnership' messaging through all communication channels, especially those favored by their target audience like Instagram and their website portfolio. Developing targeted content that directly addresses the 'Discerning Home Visionary's' pain points and showcases their guided decision-making process can attract more ideal clients. Strategic partnerships with architects and luxury real estate agents can expand their reach. By clearly communicating their differentiation, they can solidify their position and expand market presence within the Indianapolis area.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
                  <h3 className="text-[24px] lg:text-[27.65px] font-bold text-[#d97757] mb-4">Threats</h3>
                  <p className="text-[16px] leading-relaxed font-light text-[#262624]">
                    The custom home market, especially at the luxury level, is competitive, with other established builders vying for the same affluent clientele. Economic downturns or rising interest rates could reduce demand for high-end custom homes. A key threat is if their unique, relational, design-forward approach isn't consistently and powerfully communicated, leading them to be perceived as a standard custom builder. As they aim to expand, maintaining the high level of personalized attention and craftsmanship that defines their brand could become challenging, potentially diluting service quality and harming their reputation.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/5">
                <h3 className="text-[24px] lg:text-[27.65px] font-bold text-[#262624] mb-4">Overall Assessment</h3>
                <p className="text-[16px] leading-relaxed font-light text-[#262624]">
                  Bailey Weiler Homes has a robust foundation with a distinct market position and a deep understanding of its target audience. Their strengths lie in their unique, relationship-driven, and design-forward approach, which is well-supported by their brand values and validated by client feedback. To fully capitalize on their potential, they need to sharpen their external messaging to consistently reflect their unique selling proposition and clearly differentiate themselves in a competitive landscape. Focusing on amplifying their 'Creator' archetype and 'Curated Experience' through compelling visuals and client stories will be key to elevating their brand perception and achieving their growth goals, while carefully managing the delivery of their high-touch service as they expand.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

              </section>


      {/* Messaging Pillars */}
      <section id="messaging-pillars" className="min-h-screen print:min-h-0 flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 border-t border-black/10 bg-[#262624] text-[#faf9f4] print:break-inside-avoid">
        {/* Main Content Row */}
        <div className="w-full relative z-10 flex flex-col md:flex-row print:flex-row mt-4 md:mt-8 mb-auto">
          {/* Logo Column */}
          <div className="w-48 print:w-72 lg:w-72 flex-shrink-0 mb-12 md:mb-0 print:mb-0">
            <img src="/core-logo-white.png" alt="Core Strategic Brand" className="h-[120px] w-auto" />
          </div>
          
          {/* Content Column */}
          <div className="flex-1 w-full pt-2">
            <FadeIn>
              <h4 className="font-serif italic text-[19.2px] text-white/70 mb-4">What we say</h4>
              <h2 className="text-[47.77px] lg:text-[57.33px] font-bold tracking-tight leading-[1.1] mb-10 text-white">Messaging Pillars</h2>
              <hr className="border-white/20 mb-10 w-full" />
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-12 lg:gap-16 w-full">
              {[
                { num: "01", title: "Deep Understanding Comes First", desc: "Everything starts with understanding what matters to the client before anything is designed or built" },
                { num: "02", title: "A Guided, Not Guesswork Process", desc: "Clients are not left to figure things out. They are led through decisions with clarity and experience" },
                { num: "03", title: "Design Shapes the Outcome", desc: "The home is not assembled. It is thoughtfully designed around how the client wants to live" },
                { num: "04", title: "A Higher Standard at Every Step", desc: "The same level of care is applied from first conversation to final detail" },
              ].map((pillar, i) => (
                <FadeIn key={i} delay={i * 0.1} className="relative flex flex-col">
                  <div className="font-serif text-[48px] md:text-[56px] lg:text-[68.8px] text-[#d97757] leading-none mb-4">{pillar.num}</div>
                  <div>
                    <h4 className="text-[20px] md:text-[24px] lg:text-[27.65px] mb-3 tracking-tight font-medium">{pillar.title}</h4>
                    <p className="text-[16px] opacity-70 leading-relaxed">{pillar.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

              </section>


      {/* Customer Journey */}
      <section id="customer-journey" className="min-h-screen print:min-h-0 flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 border-t border-black/10 bg-white/30 print:break-inside-avoid">
        {/* Main Content Row */}
        <div className="w-full relative z-10 flex flex-col md:flex-row print:flex-row mt-4 md:mt-8 mb-auto">
          {/* Logo Column */}
          <div className="w-48 print:w-72 lg:w-72 flex-shrink-0 mb-12 md:mb-0 print:mb-0">
            <img src="/core-logo-orange.png" alt="Core Strategic Brand" className="h-[120px] w-auto" />
          </div>
          
          {/* Content Column */}
          <div className="flex-1 w-full pt-2">
            <FadeIn>
              <h4 className="font-serif italic text-[19.2px] text-[#262624]/70 mb-4">The path we take</h4>
              <h2 className="text-[47.77px] lg:text-[57.33px] font-bold tracking-tight leading-[1.1] mb-10 text-[#262624]">Customer Journey</h2>
              <hr className="border-black/20 mb-10 w-full" />
            </FadeIn>
            <div className="w-full">
              <div className="relative border-l border-black/10 ml-4 md:ml-0 md:border-l-0 md:border-t md:flex md:pt-8 w-full">
                {[
                  { title: "Discovery", desc: "The relationship starts with listening and understanding what the client is trying to achieve" },
                  { title: "Design", desc: "Ideas are shaped into a thoughtful design that reflects how the client wants to live" },
                  { title: "Guidance", desc: "Clients are led through decisions with clarity and experience, not left to figure things out" },
                  { title: "Build", desc: "The home is built with a consistent level of care, precision, and attention to detail" },
                  { title: "Completion", desc: "The result is a home that feels aligned with what the client envisioned from the beginning" },
                ].map((step, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="mb-8 md:mb-0 ml-8 md:ml-0 md:flex-1 md:px-4 relative">
                    <div className="absolute w-3 h-3 bg-[#d97757] rounded-full -left-[38px] top-1.5 md:-top-[38px] md:left-1/2 md:-translate-x-1/2"></div>
                    <div className="text-[16px] font-bold tracking-widest text-[#d97757] mb-2">0{i + 1}</div>
                    <h4 className="text-[20px] md:text-[24px] lg:text-[27.65px] mb-2 tracking-tight font-medium">{step.title}</h4>
                    <p className="text-[16px] opacity-70 leading-relaxed">{step.desc}</p>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>

              </section>

      {/* Competitive Landscape */}
      <section id="competitive-landscape" className="min-h-screen print:min-h-0 flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 border-t border-black/10 bg-[#262624] text-[#faf9f4] print:break-inside-avoid">
        {/* Main Content Row */}
        <div className="w-full relative z-10 flex flex-col md:flex-row print:flex-row mt-4 md:mt-8 mb-auto">
          {/* Logo Column */}
          <div className="w-48 print:w-72 lg:w-72 flex-shrink-0 mb-12 md:mb-0 print:mb-0">
            <img src="/core-logo-white.png" alt="Core Strategic Brand" className="h-[120px] w-auto" />
          </div>
          
          {/* Content Column */}
          <div className="flex-1 max-w-4xl pt-2">
            <FadeIn>
              <h4 className="font-serif italic text-[19.2px] text-white/70 mb-4">The market we operate in and how we compare</h4>
              <h2 className="text-[47.77px] lg:text-[57.33px] font-bold tracking-tight leading-[1.1] mb-10 text-white">Competitive Landscape</h2>
              <hr className="border-white/20 mb-10 w-full" />
              
              <div className="mb-12">
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-white">Competitive Landscape Summary</h5>
                <p className="text-[20px] lg:text-[24px] leading-relaxed font-light text-white">
                  The Indianapolis custom home market is a competitive environment where builders differentiate through various strategies: legacy and diversification (Gradison), process-driven franchise luxury (AR Homes), niche design and sustainability (Loren Wood), and claims of innovation (Becley). Most competitors use similar, often generic, language around 'quality' and 'listening.' This creates a significant opportunity for a builder like Bailey & Weiler, whose 'relational, design-forward' approach is a more specific and potent differentiator in a crowded field.
                </p>
              </div>

              <div className="mb-12">
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-white">Differentiation Notes</h5>
                <p className="text-[20px] lg:text-[24px] leading-relaxed font-light text-white">
                  Bailey & Weiler delivers custom homes through a more relational, design forward approach, combining deep listening, guided decision making, and a consistently high standard to create homes at an exceptional level that exceeds what is typically expected from a builder.
                </p>
              </div>

              <div className="space-y-16">
                {/* Loren Wood Builders */}
                <div>
                  <h3 className="text-[32px] md:text-[40px] font-bold text-[#d97757] mb-4">Loren Wood Builders</h3>
                  <p className="text-[18px] leading-relaxed font-light text-white mb-6">
                    Loren Wood Builders is a niche competitor with a powerful design-centric and sustainable building identity. Their Phius certification is a key differentiator. While their primary market is Bloomington, their expansion into Indianapolis poses a threat, especially for clients prioritizing architectural purity and green building over conventional luxury.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Strengths</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Strong, differentiated identity as a design-build firm focused on architectural context, history, and landscape integration.</li>
                        <li>Phius Certified Builder status is a significant and credible differentiator, appealing to the growing market for high-performance, sustainable homes.</li>
                        <li>In-house architecture and design team provides a seamless, integrated client experience.</li>
                        <li>Expertise in 'adaptive reuse' demonstrates a high level of design and construction sophistication.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Weaknesses</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Primary base in Bloomington may result in weaker brand recognition and subcontractor relationships in the core Indianapolis market compared to local incumbents.</li>
                        <li>Their design aesthetic, while strong, may be perceived as more 'artisanal' or academic, potentially not aligning with all segments of the affluent Indy market seeking mainstream luxury.</li>
                        <li>Balancing operations between two distinct geographic markets (Bloomington and Indianapolis) can present logistical challenges.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Opportunities</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Aggressively market their Phius certification and sustainability expertise to capture the eco-conscious luxury client segment in Indianapolis.</li>
                        <li>Target high-value, complex renovation projects in historic Indianapolis neighborhoods like Meridian-Kessler, where their 'context-sensitive' approach is a perfect fit.</li>
                        <li>Position themselves as the go-to builder for architecturally unique and challenging projects that other builders may avoid.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Threats</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Being perceived as an 'out-of-town' builder by clients who prioritize deep local-only roots and networks.</li>
                        <li>Their niche design focus, while a strength, could limit their addressable market compared to builders with a broader aesthetic range.</li>
                        <li>Competition from other Indianapolis-based architects and builders who also specialize in modern or sustainable design.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* AR Homes */}
                <div>
                  <h3 className="text-[32px] md:text-[40px] font-bold text-[#d97757] mb-4">AR Homes / Scott Bates Builders, Inc.</h3>
                  <p className="text-[18px] leading-relaxed font-light text-white mb-6">
                    AR Homes (Scott Bates Builders) is a formidable competitor in the high-end luxury segment, leveraging a powerful national brand and a systematized process. Their strength is predictability and structured customization. Their primary weakness is the potential perception of being a less-personal, 'corporate' builder, which is the exact market gap Bailey & Weiler aims to fill.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Strengths</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Leverages the brand recognition, marketing power, and credibility of the national AR Homes franchise.</li>
                        <li>A clear, high-end market position with pricing starting at $1M+, which pre-qualifies their clientele.</li>
                        <li>Proprietary 'Personalized Floor Plan' process provides a strong, tangible USP that promises efficiency and customization.</li>
                        <li>National awards and furnished model homes serve as powerful trust signals and marketing tools.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Weaknesses</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>The franchise model may be perceived as less authentic or truly 'custom' than an independent builder, especially by clients seeking a one-of-a-kind home.</li>
                        <li>Process is based on customizing existing plans, which is a disadvantage for clients who want a home designed entirely from scratch.</li>
                        <li>The corporate, systematized approach may lack the genuine 'relational' feel that Bailey & Weiler champions.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Opportunities</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Utilize the national brand's resources for sophisticated digital marketing and lead generation, potentially dominating online search.</li>
                        <li>Expand the portfolio of available floor plans to cater to emerging architectural trends.</li>
                        <li>Promote their process as the perfect balance of customization and predictability, appealing to risk-averse luxury clients.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Threats</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Highly vulnerable to competitors like Bailey & Weiler who specifically target clients seeking a more personal, boutique, and non-transactional experience.</li>
                        <li>Reputation is tied to the national AR Homes brand; any negative publicity at the corporate level could impact the local builder.</li>
                        <li>The high price point makes them more susceptible to market downturns affecting the ultra-luxury segment.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Becley Building Group */}
                <div>
                  <h3 className="text-[32px] md:text-[40px] font-bold text-[#d97757] mb-4">Becley Building Group</h3>
                  <p className="text-[18px] leading-relaxed font-light text-white mb-6">
                    Becley Building Group competes directly on the 'design-forward' axis, emphasizing innovation and modern aesthetics. Their presence in exclusive communities is a strength. Their key vulnerability is a potentially diluted brand focus due to their commercial work, creating an opportunity for a purely residential-focused firm like Bailey & Weiler to claim superior specialization.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Strengths</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Strong brand positioning around 'cutting-edge design' and innovation, appealing to clients seeking modern homes.</li>
                        <li>Presence in prestigious, named communities (e.g., Chatham Hills, Sagamore) associates their brand with exclusivity and luxury.</li>
                        <li>Diversified services including new construction, remodeling, and light commercial, which can provide financial stability.</li>
                        <li>Founders are directly involved, which can enhance the client relationship and trust factor.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Weaknesses</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>The inclusion of 'light commercial' construction could confuse their brand identity and detract from their positioning as a specialist in luxury custom homes.</li>
                        <li>The claim of an 'enjoyable process' is generic; it lacks the specific, compelling language of Bailey & Weiler's 'deep listening' and 'guided decision making'.</li>
                        <li>Positioning as 'cutting-edge' requires continuous innovation in design and materials to remain credible.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Opportunities</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Capitalize on the 'innovation' angle by prominently featuring sustainable building practices, smart home integration, and unique architectural materials.</li>
                        <li>Develop a portfolio of 'light commercial' projects (e.g., boutique wineries, high-end professional offices) that aligns with their luxury residential aesthetic.</li>
                        <li>Further penetrate the 'on your lot' market by showcasing their ability to adapt their cutting-edge designs to diverse properties.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Threats</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Risk of being perceived as spread too thin across residential, remodel, and commercial sectors, diminishing their expertise in the custom home niche.</li>
                        <li>Intense competition from other builders who also claim to be modern and design-focused.</li>
                        <li>A shift in consumer taste away from 'cutting-edge' styles towards more timeless or traditional architecture could negatively impact their appeal.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Gradison Design-Build */}
                <div>
                  <h3 className="text-[32px] md:text-[40px] font-bold text-[#d97757] mb-4">Gradison Design-Build</h3>
                  <p className="text-[18px] leading-relaxed font-light text-white mb-6">
                    Gradison Design-Build is an established, diversified competitor with a strong reputation for quality and stability. Their family-owned history is a key asset. However, their broad focus and traditional positioning may make them vulnerable to more specialized, design-forward builders targeting clients who seek a highly personalized and modern aesthetic.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Strengths</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Long-standing reputation as a family-owned company since 1986, which builds trust and implies stability.</li>
                        <li>Diversified business model including custom homes, renovations, and land development, providing multiple revenue streams and resilience to market shifts.</li>
                        <li>Strong local presence and experience in key affluent Indianapolis suburbs (Zionsville, Carmel, Fishers).</li>
                        <li>Positive testimonials highlighting post-closing warranty support, a key concern for luxury buyers.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Weaknesses</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Messaging around an 'easy and enjoyable' process may lack the sophistication and depth of Bailey & Weiler's 'guided, relational, design-forward' approach.</li>
                        <li>The broad service offering, particularly land development, could dilute their brand identity as a specialized, high-touch custom home builder.</li>
                        <li>The established, multi-generational branding might be perceived as more traditional and less 'design-forward' compared to a more modern, boutique builder.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Opportunities</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Leverage their land development division to offer exclusive 'build-ready' lots in desirable areas, creating a significant competitive advantage.</li>
                        <li>Expand their high-end renovation services as the housing stock in affluent communities ages.</li>
                        <li>Market their long history and family-owned status to appeal to clients who value tradition and long-term stability.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Threats</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Boutique, design-led builders like Bailey & Weiler may appeal more strongly to affluent clients with a modern design sensibility.</li>
                        <li>Economic downturns could simultaneously impact all three of their core business areas (new builds, renovations, land development).</li>
                        <li>Increased competition from other builders establishing themselves in their core geographic markets.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Wedgewood Building Company */}
                <div>
                  <h3 className="text-[32px] md:text-[40px] font-bold text-[#d97757] mb-4">Wedgewood Building Company</h3>
                  <p className="text-[18px] leading-relaxed font-light text-white mb-6">
                    Wedgewood Building Company represents the quintessential high-quality custom builder. They are a strong, direct competitor but their messaging is somewhat generic. Their lack of a sharp, unique differentiator makes them vulnerable to Bailey & Weiler's more specific and compelling 'relational, design-forward' value proposition.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Strengths</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Clear positioning as a 'premier custom home builder' focused on quality materials and craftsmanship.</li>
                        <li>Client-centric messaging ('listening to understand the client's lifestyle') directly addresses a key buyer motivation.</li>
                        <li>Established presence in desirable communities and offers flexibility with building in their neighborhoods or on a client's lot.</li>
                        <li>Strong visual portfolio showcasing high-quality, aspirational homes.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Weaknesses</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Their core messaging about 'quality,' 'craftsmanship,' and 'listening' is generic and used by nearly every competitor in the market, making it difficult to stand out.</li>
                        <li>Lacks a unique, memorable selling proposition.</li>
                        <li>Appears to compete on traditional quality rather than being explicitly 'design-forward'.</li>
                      </ul>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Opportunities</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Develop and market a more distinct brand story or a signature design process to differentiate from the competition.</li>
                        <li>Form strategic partnerships with high-profile Indianapolis interior designers to bolster their design credentials and reach a new audience.</li>
                        <li>Create content (e.g., blog posts, videos) that goes deeper into what 'listening to your lifestyle' actually means in their process, adding substance to the claim.</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-2 text-white">Threats</h5>
                      <ul className="list-disc pl-5 text-[16px] leading-relaxed font-light text-white/80 space-y-2">
                        <li>Highly susceptible to being out-marketed by competitors with a stronger, more differentiated USP, such as Bailey Weiler.</li>
                        <li>In a market where all builders claim quality, they may be forced to compete more on price if they cannot establish a stronger brand identity.</li>
                        <li>Risk of being seen as a 'safe' but uninspired choice compared to more dynamic, design-led firms.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-white/20">
                <h3 className="text-[32px] md:text-[40px] font-bold text-[#d97757] mb-8">Actionable Insights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Double Down on the USP",
                      desc: "Aggressively market the unique combination of 'relational approach' and 'design-forward' execution. Use specific language like 'deep listening' and 'guided decision making' in all marketing materials to contrast with competitors' generic claims."
                    },
                    {
                      title: "Brand the Process",
                      desc: "Formalize and name your client journey. Create a visual diagram or branded guide that explains the 'Bailey Weiler Experience' from initial deep listening to final execution. This makes your relational promise tangible, much like AR Homes has done with their 'Personalized Floor Plan' process."
                    },
                    {
                      title: "Visually Prove 'Design-Forward'",
                      desc: "Your website, portfolio, and social media must be a masterclass in design. Feature architecturally significant projects that are visually distinct from the more traditional luxury homes offered by many competitors. This is your primary battleground against builders like Wedgewood and Gradison."
                    },
                    {
                      title: "Tell the Relational Story",
                      desc: "Feature client testimonials that speak directly to the experience of working with you, not just the quality of the home. Ask clients to describe how the 'guided decision making' and 'deep listening' made a difference. This directly counters the impersonal feel of a franchise model."
                    },
                    {
                      title: "Target the Right Pain Point",
                      desc: "Craft marketing campaigns that target affluent clients frustrated with transactional, cookie-cutter building experiences. Position Bailey Weiler as the antidote for discerning homeowners who want a partner, not just a contractor."
                    }
                  ].map((insight, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#d97757]/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-[#d97757]" />
                      </div>
                      <div>
                        <h4 className="text-[20px] leading-relaxed font-medium text-white mb-2">{insight.title}</h4>
                        <p className="text-[16px] leading-relaxed font-light text-white/80">{insight.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

              </section>

      {/* Target Audience */}
      <section id="target-audience" className="min-h-screen print:min-h-0 flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 border-t border-black/10 bg-[#faf9f4] print:break-inside-avoid">
        {/* Main Content Row */}
        <div className="w-full relative z-10 flex flex-col md:flex-row print:flex-row mt-4 md:mt-8 mb-auto">
          {/* Logo Column */}
          <div className="w-48 print:w-72 lg:w-72 flex-shrink-0 mb-12 md:mb-0 print:mb-0">
            <img src="/core-logo-orange.png" alt="Core Strategic Brand" className="h-[120px] w-auto" />
          </div>
          
          {/* Content Column */}
          <div className="flex-1 max-w-5xl pt-2">
            <FadeIn>
              <h4 className="font-serif italic text-[19.2px] text-[#262624]/70 mb-4">Who we are trying to reach and what matters to them</h4>
              <h2 className="text-[47.77px] lg:text-[57.33px] font-bold tracking-tight leading-[1.1] mb-10 text-[#262624]">Target Audience</h2>
              <hr className="border-black/20 mb-10 w-full" />
              
              <div className="mb-12">
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Ideal Customer Profile</h5>
                <h3 className="text-[32px] md:text-[40px] font-bold text-[#d97757] mb-4">The Discerning Home Visionary</h3>
                <p className="text-[20px] lg:text-[24px] leading-relaxed font-light text-[#262624]">
                  The Discerning Home Visionary is an accomplished person, either at their career peak or enjoying retirement, who is ready to build their dream home without compromise. They have a strong sense of style and high standards, seeking a builder who is not just a contractor but a collaborative partner. Their biggest frustration is the 'cookie-cutter' approach, and they are looking for a relationship-driven firm that will listen carefully and execute their unique vision with exceptional skill.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-12 mb-12">
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Demographics</h5>
                  <ul className="space-y-3 text-[16px] leading-relaxed font-light text-[#262624]">
                    <li><strong>Age range:</strong> 45-65+</li>
                    <li><strong>Gender:</strong> Any</li>
                    <li><strong>Education level:</strong> Bachelor's Degree or higher</li>
                    <li><strong>Location:</strong> Affluent suburban or semi-rural areas within the builder's service region</li>
                    <li><strong>Income level:</strong> High / Affluent ($350,000+ household)</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Psychographics</h5>
                  <ul className="space-y-3 text-[16px] leading-relaxed font-light text-[#262624]">
                    <li><strong>Interests:</strong> Architecture and interior design, Fine art, Luxury travel, Gourmet food and wine</li>
                    <li><strong>Values:</strong> Exceptional quality, Personalization, Honesty and transparency, Design excellence, Strong professional relationships</li>
                    <li><strong>Personality traits:</strong> Detail-oriented, Decisive, Appreciates quality, Values trust and clear communication</li>
                    <li><strong>Lifestyle:</strong> Affluent and quality-focused, they appreciate fine craftsmanship and unique experiences. Their home is a central part of their identity and a place for both quiet relaxation and sophisticated entertaining.</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-12 mb-12">
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Core Pain Points</h5>
                  <ul className="list-disc pl-5 space-y-2 text-[16px] leading-relaxed font-light text-[#262624]">
                    <li>Frustration with builders who offer limited customization options.</li>
                    <li>Disappointment with homes that lack exceptional quality and attention to detail.</li>
                    <li>Feeling unheard or misunderstood by builders during the design process.</li>
                    <li>The stress of managing a complex project without a trusted guide.</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Goals & Aspirations</h5>
                  <ul className="list-disc pl-5 space-y-2 text-[16px] leading-relaxed font-light text-[#262624]">
                    <li>To build a one-of-a-kind home that perfectly fits their lifestyle and personal taste.</li>
                    <li>To enjoy a smooth, collaborative, and low-stress building process.</li>
                    <li>To feel confident they have a true partner who will deliver on promises.</li>
                    <li>To create a beautiful, lasting home that serves as a personal sanctuary.</li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-12 mb-12">
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Decision Making Style</h5>
                  <p className="text-[16px] leading-relaxed font-light text-[#262624]">
                    Balanced. They are driven by the emotional desire for a dream home but make rational decisions based on quality, trust, and a builder's proven process.
                  </p>
                </div>
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Recommended Brand Tone</h5>
                  <p className="text-[16px] leading-relaxed font-light text-[#262624]">
                    Confident, sophisticated, and consultative. The tone should be reassuring and respectful, focusing on partnership, expertise, and a shared commitment to quality. Speak plainly and honestly, avoiding jargon or overly salesy language.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-12">
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Preferred Communication Channels</h5>
                  <ul className="list-disc pl-5 space-y-2 text-[16px] leading-relaxed font-light text-[#262624]">
                    <li>Instagram (for visual inspiration and design aesthetic)</li>
                    <li>LinkedIn (to verify professional credibility)</li>
                    <li>Referrals from trusted sources like architects and friends</li>
                    <li>Builder's website and portfolio</li>
                    <li>Local high-end lifestyle magazines</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Buying Triggers</h5>
                  <ul className="list-disc pl-5 space-y-2 text-[16px] leading-relaxed font-light text-[#262624]">
                    <li>Reaching a financial or life milestone that allows for the creation of a 'forever home'.</li>
                    <li>Dissatisfaction with the lack of unique, high-quality homes on the market.</li>
                    <li>The desire to build a home perfectly tailored to a new phase of life, such as retirement or an empty nest.</li>
                    <li>Wanting to work with a partner who can bring a specific, uncompromising vision to life.</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

              </section>

      {/* Marketing Messaging */}
      <section id="marketing-messaging" className="min-h-screen print:min-h-0 flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 border-t border-black/10 bg-[#faf9f4] print:break-inside-avoid">
        {/* Main Content Row */}
        <div className="w-full relative z-10 flex flex-col md:flex-row print:flex-row mt-4 md:mt-8 mb-auto">
          {/* Logo Column */}
          <div className="w-48 print:w-72 lg:w-72 flex-shrink-0 mb-12 md:mb-0 print:mb-0">
            <img src="/core-logo-orange.png" alt="Core Strategic Brand" className="h-[120px] w-auto" />
          </div>
          
          {/* Content Column */}
          <div className="flex-1 max-w-5xl pt-2">
            <FadeIn>
              <h4 className="font-serif italic text-[19.2px] text-[#262624]/70 mb-4">How we communicate value across channels</h4>
              <h2 className="text-[47.77px] lg:text-[57.33px] font-bold tracking-tight leading-[1.1] mb-10 text-[#262624]">Marketing Messaging</h2>
              <hr className="border-black/20 mb-10 w-full" />
              
              <div className="mb-16">
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-6 text-[#262624]">Headlines</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6">
                  {[
                    "A collaborative approach to luxury custom home building",
                    "Build a home only you could have imagined",
                    "Luxury custom homes built through a more personal approach",
                    "A home designed with you at the center"
                  ].map((headline, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-black/5">
                      <p className="text-[18px] lg:text-[20px] font-medium text-[#262624] leading-snug">"{headline}"</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-6 text-[#262624]">Taglines</h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-3 lg:grid-cols-3 gap-6">
                  {[
                    "Thoughtfully Crafted. Personally Yours.",
                    "Designed Together. Built Well",
                    "Crafted Through Collaboration"
                  ].map((tagline, i) => (
                    <div key={i} className="bg-[#262624] p-6 rounded-xl shadow-sm">
                      <p className="text-[16px] lg:text-[18px] font-medium text-[#faf9f4] leading-snug">"{tagline}"</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-6 text-[#262624]">Calls to Action (CTAs)</h5>
                <div className="space-y-4">
                  {[
                    "Build Your Dream Home: Work with a Team That Guides You Through Each Step",
                    "Schedule a Design Consultation: Explore What's Possible for Your New Home",
                    "Build with Confidence: Work with a Team That Listens and Stays with You Through Every Step",
                    "Let's Talk: Build Something That Feels Distinctly Yours",
                    "Start the Conversation: Create a Home Unlike Anything Else"
                  ].map((cta, i) => {
                    const [boldPart, restPart] = cta.split(': ');
                    return (
                      <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-black/5">
                        <div className="w-8 h-8 rounded-full bg-[#d97757]/10 flex items-center justify-center flex-shrink-0">
                          <Target className="w-4 h-4 text-[#d97757]" />
                        </div>
                        <p className="text-[16px] text-[#262624]">
                          <strong className="font-semibold">{boldPart}:</strong> {restPart}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

              </section>

      {/* Conversion Copy */}
      <section id="conversion-copy" className="min-h-screen print:min-h-0 flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 border-t border-black/10 bg-[#faf9f4] print:break-inside-avoid">
        {/* Main Content Row */}
        <div className="w-full relative z-10 flex flex-col md:flex-row print:flex-row mt-4 md:mt-8 mb-auto">
          {/* Logo Column */}
          <div className="w-48 print:w-72 lg:w-72 flex-shrink-0 mb-12 md:mb-0 print:mb-0">
            <img src="/core-logo-orange.png" alt="Core Strategic Brand" className="h-[120px] w-auto" />
          </div>
          
          {/* Content Column */}
          <div className="flex-1 max-w-5xl pt-2">
            <FadeIn>
              <h4 className="font-serif italic text-[19.2px] text-[#262624]/70 mb-4">How we turn interest into action</h4>
              <h2 className="text-[47.77px] lg:text-[57.33px] font-bold tracking-tight leading-[1.1] mb-10 text-[#262624]">Conversion Copy</h2>
              <hr className="border-black/20 mb-10 w-full" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 print:grid-cols-2 gap-12 mb-12">
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Pain</h5>
                  <p className="text-[18px] leading-relaxed font-light text-[#262624] bg-white p-6 rounded-xl shadow-sm border border-black/5">
                    Are you a discerning homeowner in Indianapolis with a clear vision for your dream home, yet dread the typical custom building process? You aspire to a residence that is a true extension of your unique style and life, but worry about finding a builder who truly understands and can flawlessly execute that vision.
                  </p>
                </div>
                <div>
                  <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Agitate</h5>
                  <p className="text-[18px] leading-relaxed font-light text-[#262624] bg-white p-6 rounded-xl shadow-sm border border-black/5">
                    The reality of custom home building often falls short of the dream. You face a series of important decisions, unclear communication, and the concern that your original vision may shift along the way, that quality may not meet expectations, or that the process may feel transactional. Compromises, delays, and a final result that feels more standard than personal can take away from what should be a meaningful and rewarding experience.
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Solve</h5>
                <p className="text-[20px] lg:text-[24px] leading-relaxed font-light text-[#262624] bg-[#262624] text-[#faf9f4] p-8 rounded-2xl shadow-sm">
                  Imagine a custom home journey where your vision is not just heard, but expertly amplified and meticulously brought to life. At Bailey Weiler Homes, we transform the complex process of building into a collaborative, design-forward experience. We partner with you, offering deep listening and guided decision-making every step of the way, ensuring your home is a personalized masterpiece built with unparalleled craftsmanship and an unwavering commitment to your highest standards. We don't just build houses; we craft distinctive, enduring residences that perfectly reflect your sophisticated taste and lifestyle.
                </p>
              </div>

              <div className="mb-12">
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">USP Emphasis</h5>
                <p className="text-[18px] leading-relaxed font-light text-[#262624]">
                  The copy directly integrates our USP by emphasizing 'design-forward' residences, a 'deeply collaborative partnership,' an 'expertly guided process,' and 'elevated craftsmanship.' The 'solve' section highlights 'deep listening and guided decision-making,' a 'personalized masterpiece,' and 'unparalleled craftsmanship,' all reinforcing the core tenets of our unique offering. It speaks to exceeding 'highest expectations for personalization and quality' by promising a home that 'perfectly reflects your sophisticated taste and lifestyle.'
                </p>
              </div>

              <div className="mb-12">
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Benefits</h5>
                <ul className="space-y-4">
                  {[
                    "Experience a truly collaborative partnership where your unique vision is central to every decision.",
                    "Enjoy a stress-free, expertly guided journey from concept to move-in, free from typical building anxieties.",
                    "Live in a custom home defined by thoughtful, design-forward aesthetics and superior, enduring craftsmanship.",
                    "Gain complete transparency and peace of mind through a building process built on trust and clear communication.",
                    "Own a personalized residence that not only meets but consistently exceeds your highest expectations for quality and individuality."
                  ].map((benefit, i) => (
                    <li key={i} className="flex gap-4 text-[18px] leading-relaxed font-light text-[#262624]">
                      <Check className="w-6 h-6 shrink-0 text-[#d97757] mt-1" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-[16px] font-semibold tracking-[0.15em] uppercase opacity-50 mb-4 text-[#262624]">Desired Action</h5>
                <div className="inline-block bg-[#d97757] text-white px-8 py-4 rounded-full text-[16px] font-semibold tracking-wider uppercase">
                  Schedule Your Design Consultation
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

              </section>

      {/* CTA Section */}
      <section id="cta" className="h-screen print:h-auto print:min-h-0 overflow-hidden print:overflow-visible flex flex-col relative px-6 md:px-12 lg:px-24 pt-24 pb-24 border-t border-white/10 bg-[#262624] text-[#faf9f4] print:break-inside-avoid">
        {/* Background Graphic */}
        <div className="absolute top-0 right-0 bottom-0 w-full md:w-1/2 pointer-events-none z-0">
          <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] opacity-30">
            <circle cx="400" cy="400" r="300" stroke="#d97757" strokeWidth="4" />
            <circle cx="800" cy="200" r="400" stroke="#faf9f4" strokeWidth="4" opacity="0.5" />
            <circle cx="600" cy="800" r="350" stroke="#faf9f4" strokeWidth="4" opacity="0.5" />
            <path d="M 0 400 Q 400 200 800 400" stroke="#d97757" strokeWidth="4" />
            <circle cx="0" cy="400" r="15" fill="#d97757" />
            <circle cx="200" cy="100" r="15" fill="#faf9f4" opacity="0.5" />
          </svg>
        </div>

        {/* Top Logo Area */}
        <div className="relative z-20 mb-auto pt-4 text-left">
          <img src="/core-logo-orange.png" alt="Core Strategic Brand" className="h-20 md:h-[100px] lg:h-[120px] w-auto rounded-xl" />
        </div>

        <FadeIn className="relative z-10 my-auto text-left max-w-2xl">
          <h2 className="text-[clamp(32px,5vw,64px)] leading-[1.1] font-bold tracking-tight mb-6">
            Putting This to Work
          </h2>
          <p className="text-[18px] md:text-[20px] leading-relaxed mb-8 font-medium">
            The strategy outlined here supports clearer choices as the brand is expressed across channels. It is intended to guide execution and reduce guesswork as work moves forward.
          </p>
          
          <hr className="border-white/20 mb-8 w-64" />
          
          <div className="text-[#d97757] text-[18px] md:text-[20px] font-medium leading-relaxed">
            <p>Please let us know if you have any questions.</p>
            <a href="mailto:jeane@bopedesign.com" className="hover:underline font-bold">jeane@bopedesign.com</a>
          </div>
        </FadeIn>

      </section>
    </div>
  );
}
