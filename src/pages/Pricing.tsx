import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Crown, 
  Diamond, 
  Check, 
  Sparkles, 
  Droplets, 
  ChevronUp, 
  Calendar, 
  Tag, 
  ArrowRight, 
  Info,
  ExternalLink,
  ShieldCheck,
  Zap,
  Flame,
  Award
} from 'lucide-react';
import beautyTanningImage from '../assets/images/regenerated_image_1780547142816.png';
import teethWhiteningImage from '../assets/images/regenerated_image_1780540375958.png';

interface PricingProps {
  onNavigate?: (page: 'tanning' | 'wellness' | 'whitening') => void;
}

export default function Pricing({ onNavigate }: PricingProps = {}) {
  const [showGrouponModal, setShowGrouponModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'memberships' | 'addons' | 'whitening'>('all');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-[#fcfbfa] text-[#1e1c1a] font-sans antialiased pb-28">
      {/* 1. TOP HEADER TITLE */}
      <section className="pt-10 pb-8 px-4 sm:px-6 md:px-12 text-center max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#4a423b] tracking-tight font-light"
        >
          Pricing: Spray Tan &amp; Teeth Whitening Prices – Columbus, Ohio
        </motion.h1>
      </section>

      {/* 2. FIVE-CARD SERVICE HIGHLIGHT BANNER */}
      <section className="px-4 sm:px-6 md:px-12 max-w-6xl mx-auto mb-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {/* Card 1: AIRBRUSH */}
          <motion.div 
            whileHover={{ y: -4 }}
            onClick={() => scrollToSection('pricing-board')}
            className="bg-[#f05a54] text-white rounded-xl p-6 sm:p-7 flex flex-col justify-center items-center text-center shadow-md cursor-pointer transition-all aspect-[4/5] sm:aspect-auto sm:h-52 group"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-wider uppercase mb-1 font-sans">
              AIRBRUSH
            </span>
            <span className="text-sm font-serif italic text-white/90">
              Spray Tanning
            </span>
            <span className="mt-4 text-[11px] font-semibold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              View Rates
            </span>
          </motion.div>

          {/* Card 2: PHOTO (Beach Legs) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative rounded-xl overflow-hidden shadow-md aspect-[4/5] sm:aspect-auto sm:h-52 group bg-[#2a2622]"
          >
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" 
              alt="Sun-kissed tanned legs relaxing on the beach sand"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={(e) => {
                // Fallback to local high-res asset
                (e.target as HTMLElement).setAttribute('src', beautyTanningImage);
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <span className="text-xs text-white/90 font-medium tracking-wide uppercase">
                UV-Free Luxury
              </span>
            </div>
          </motion.div>

          {/* Card 3: WELLNESS */}
          <motion.div 
            whileHover={{ y: -4 }}
            onClick={() => scrollToSection('addons-wellness')}
            className="bg-[#f05a54] text-white rounded-xl p-6 sm:p-7 flex flex-col justify-center items-center text-center shadow-md cursor-pointer transition-all aspect-[4/5] sm:aspect-auto sm:h-52 group"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-wider uppercase mb-1 font-sans">
              WELLNESS
            </span>
            <span className="text-sm font-serif italic text-white/90">
              Spa Treatments
            </span>
            <span className="mt-4 text-[11px] font-semibold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              View Boosts
            </span>
          </motion.div>

          {/* Card 4: PHOTO (Teeth Whitening Smile) */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative rounded-xl overflow-hidden shadow-md aspect-[4/5] sm:aspect-auto sm:h-52 group bg-[#2a2622]"
          >
            <img 
              src={teethWhiteningImage} 
              alt="Radiant client smiling with bright white teeth"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-3 left-3 right-3 text-center">
              <span className="text-xs text-white/90 font-medium tracking-wide uppercase">
                Instant Results
              </span>
            </div>
          </motion.div>

          {/* Card 5: TEETH WHITENING */}
          <motion.div 
            whileHover={{ y: -4 }}
            onClick={() => scrollToSection('teeth-whitening-section')}
            className="col-span-2 sm:col-span-1 bg-[#f05a54] text-white rounded-xl p-6 sm:p-7 flex flex-col justify-center items-center text-center shadow-md cursor-pointer transition-all sm:h-52 group"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-normal mb-1 font-sans leading-tight">
              Teeth<br className="hidden sm:inline" /> Whitening
            </span>
            <span className="text-sm font-serif italic text-white/90">
              LED Whitening
            </span>
            <span className="mt-4 text-[11px] font-semibold tracking-wider uppercase bg-white/20 px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              View Packages
            </span>
          </motion.div>
        </div>
      </section>

      {/* 3. SIGNATURE MASTER PRICING BOARD (Marble / Gold Framed Aesthetic) */}
      <section id="pricing-board" className="px-3 sm:px-6 md:px-12 max-w-6xl mx-auto">
        <div className="relative rounded-3xl border border-[#d6c7b5]/80 bg-gradient-to-b from-[#faf6ee] via-[#f7f2e7] to-[#f4ece0] shadow-2xl overflow-hidden p-5 sm:p-8 md:p-12">
          {/* Subtle Marble Texture Tint */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#a37848_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* TOP LOGO BANNER */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center mb-10 pb-6 border-b border-[#e2d5c3]">
            <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
              {/* Sun Studio Tan Graphic Title */}
              <div className="text-center">
                <div className="inline-flex items-center gap-3">
                  <span className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1f1d1b] font-normal tracking-tight">
                    Sun Studio
                  </span>
                  <div className="relative flex items-center justify-center">
                    <Sun className="w-8 h-8 sm:w-10 sm:h-10 text-[#d48b38] stroke-[1.75]" />
                  </div>
                </div>
                <div className="text-lg sm:text-2xl font-serif tracking-[0.4em] uppercase text-[#38312a] mt-1 font-light">
                  — TAN —
                </div>
              </div>

              {/* SS Seal Badge */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#8c6738] p-1 flex items-center justify-center shadow-inner bg-[#fffdf9]">
                <div className="w-full h-full rounded-full border border-dashed border-[#b3854d] flex flex-col items-center justify-center text-center">
                  <span className="font-serif font-bold text-lg sm:text-xl text-[#714f26] tracking-tighter leading-none">
                    SS
                  </span>
                  <span className="text-[7px] tracking-widest text-[#8c6738] uppercase font-bold mt-0.5">
                    EST. 2005
                  </span>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="mt-4 text-xs sm:text-sm md:text-base tracking-[0.35em] text-[#714f26] uppercase font-bold">
              GLOW. CONFIDENCE. YOU.
            </div>
          </div>

          {/* 3 SOLUTION LEVEL CARDS (BASE, BUILD, BRONZED) */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
            {/* 1. BASE */}
            <div className="bg-[#fffdf9]/90 backdrop-blur-sm rounded-2xl border border-[#dbcabb] p-5 sm:p-6 shadow-sm flex flex-col justify-between transition-all hover:border-[#c59a58]">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-full bg-[#fde9c8] border border-[#e8a34b] flex items-center justify-center shrink-0 shadow-sm text-[#ab6214]">
                    <Sun className="w-7 h-7 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#2a241e] tracking-tight">
                      BASE
                    </h3>
                    <span className="text-xs text-[#714f26] font-medium block">
                      (Norvell Original)
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#5d5349] leading-relaxed">
                  Natural, everyday color for a classic sun-kissed glow. Perfect for fair skin or first-time tanners.
                </p>
              </div>
            </div>

            {/* 2. BUILD */}
            <div className="bg-[#fffdf9]/90 backdrop-blur-sm rounded-2xl border border-[#dbcabb] p-5 sm:p-6 shadow-sm flex flex-col justify-between transition-all hover:border-[#c59a58]">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-full bg-[#fae5d3] border border-[#d97d41] flex items-center justify-center shrink-0 shadow-sm text-[#9b4914]">
                    <Crown className="w-7 h-7 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#2a241e] tracking-tight">
                      BUILD
                    </h3>
                    <span className="text-xs text-[#714f26] font-medium block">
                      (Norvell Venetian)
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#5d5349] leading-relaxed">
                  Violet-brown formula designed to soften orange tones and create a deeper, olive-inspired Mediterranean glow.
                </p>
              </div>
            </div>

            {/* 3. BRONZED */}
            <div className="bg-[#fffdf9]/90 backdrop-blur-sm rounded-2xl border border-[#dbcabb] p-5 sm:p-6 shadow-sm flex flex-col justify-between transition-all hover:border-[#c59a58]">
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 rounded-full bg-[#d6eedb] border border-[#3e8952] flex items-center justify-center shrink-0 shadow-sm text-[#276e3b]">
                    <Diamond className="w-7 h-7 stroke-[2]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-[#2a241e] tracking-tight">
                      BRONZED
                    </h3>
                    <span className="text-xs text-[#714f26] font-medium block">
                      (Heated Airbrush)
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#5d5349] leading-relaxed">
                  Warm, misted, fully customized airbrush tan for a smooth, photo-ready bronze with thermal skin infusion.
                </p>
              </div>
            </div>
          </div>

          {/* MEMBERSHIPS TITLE & BANNER */}
          <div className="relative z-10 text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1f1d1b] tracking-tight uppercase">
              MEMBERSHIPS
            </h2>
            <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#8c6738] uppercase mt-2">
              NO COMMITMENT • NO CANCELLATION FEES • UNLIMITED TANNING
            </p>
          </div>

          {/* 4 MEMBERSHIP TIERS GRID */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {/* TIER 1: SPRAY & SAVE */}
            <div className="bg-white rounded-2xl border border-[#decbbd] p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div>
                {/* Badge Top */}
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#edd8c4] text-[#6d4c28] text-[10px] font-bold tracking-widest uppercase shadow-xs">
                    TAN MONTHLY
                  </span>
                </div>

                {/* Icon */}
                <div className="w-10 h-10 mx-auto mb-2 text-[#9a6735] flex items-center justify-center">
                  <Sparkles className="w-8 h-8 stroke-[1.5]" />
                </div>

                {/* Title */}
                <h3 className="text-center text-xl font-bold text-[#26211c] tracking-tight uppercase mb-1">
                  SPRAY &amp; SAVE
                </h3>

                {/* Price */}
                <div className="text-center my-4 pb-4 border-b border-[#ebdccd]">
                  <span className="text-4xl font-serif font-bold text-[#b4712c]">
                    $9.99
                  </span>
                  <span className="block text-[11px] font-semibold text-[#7c6a58] tracking-wider uppercase mt-1">
                    PER MONTH
                  </span>
                </div>

                {/* Checkmarks */}
                <ul className="space-y-3 mb-6 text-xs text-[#4d443b]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ab6f32] shrink-0 stroke-[2.5]" />
                    <span className="font-semibold text-[#2b251f]">1 TAN EVERY MONTH</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ab6f32] shrink-0 stroke-[2.5]" />
                    <span>NO COMMITMENT</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ab6f32] shrink-0 stroke-[2.5]" />
                    <span>PAY BY CARD ONLY — $5.99</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ab6f32] shrink-0 stroke-[2.5]" />
                    <span>EXCLUSIVE PROMOS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ab6f32] shrink-0 stroke-[2.5]" />
                    <span className="font-semibold text-[#8b5620]">30% OFF ADDITIONAL TANS</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <a
                href="https://book.sunstudiotan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-2.5 px-3 rounded-xl bg-[#2a241e] hover:bg-black text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                JOIN MEMBERSHIP
              </a>
            </div>

            {/* TIER 2: BASE (OUR MOST POPULAR) */}
            <div className="bg-white rounded-2xl border-2 border-[#e8a34b] p-6 flex flex-col justify-between shadow-md relative hover:shadow-lg transition-all">
              <div>
                {/* Ribbon Badge */}
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#fde9c8] text-[#935212] text-[10px] font-bold tracking-widest uppercase shadow-xs">
                    OUR MOST POPULAR
                  </span>
                </div>

                {/* Icon */}
                <div className="w-10 h-10 mx-auto mb-2 text-[#9a6735] flex items-center justify-center">
                  <Sun className="w-8 h-8 stroke-[1.5]" />
                </div>

                {/* Title */}
                <h3 className="text-center text-xl font-bold text-[#26211c] tracking-tight uppercase mb-0.5">
                  BASE
                </h3>
                <p className="text-center text-[10px] font-bold text-[#86633b] tracking-wider uppercase mb-1">
                  NORVELL SOLUTION
                </p>

                {/* Price */}
                <div className="text-center my-4 pb-4 border-b border-[#ebdccd]">
                  <span className="text-4xl font-serif font-bold text-[#b4712c]">
                    $24.99
                  </span>
                  <span className="block text-[11px] font-semibold text-[#7c6a58] tracking-wider uppercase mt-1">
                    PER MONTH
                  </span>
                </div>

                {/* Checkmarks */}
                <ul className="space-y-3 mb-6 text-xs text-[#4d443b]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ab6f32] shrink-0 stroke-[2.5]" />
                    <span className="font-bold text-[#2b251f]">UNLIMITED USE</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ab6f32] shrink-0 stroke-[2.5]" />
                    <span>UPGRADE ANYTIME</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ab6f32] shrink-0 stroke-[2.5]" />
                    <span>REWARDS PROGRAM</span>
                  </li>
                </ul>
              </div>

              {/* Single Session Pill */}
              <div className="space-y-2">
                <a
                  href="https://book.sunstudiotan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#b37430] to-[#c7873b] hover:from-[#9c6123] hover:to-[#b37430] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
                >
                  JOIN $24.99/MO
                </a>
                <a
                  href="https://book.sunstudiotan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-2 px-3 rounded-lg bg-[#faf5ee] border border-[#e0cbba] text-[#714f26] text-[11px] font-bold tracking-wider uppercase hover:bg-[#f0e2d3] transition-colors"
                >
                  SINGLE SESSION $42
                </a>
              </div>
            </div>

            {/* TIER 3: BUILD (BEST VALUE) */}
            <div className="bg-white rounded-2xl border-2 border-[#d97d41] p-6 flex flex-col justify-between shadow-md relative hover:shadow-lg transition-all">
              <div>
                {/* Ribbon Badge */}
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#fae5d3] text-[#8a3e0f] text-[10px] font-bold tracking-widest uppercase shadow-xs">
                    BEST VALUE
                  </span>
                </div>

                {/* Icon */}
                <div className="w-10 h-10 mx-auto mb-2 text-[#9b4914] flex items-center justify-center">
                  <Crown className="w-8 h-8 stroke-[1.5]" />
                </div>

                {/* Title */}
                <h3 className="text-center text-xl font-bold text-[#26211c] tracking-tight uppercase mb-0.5">
                  BUILD
                </h3>
                <p className="text-center text-[10px] font-bold text-[#86633b] tracking-wider uppercase mb-1">
                  NORVELL VENETIAN
                </p>

                {/* Price */}
                <div className="text-center my-4 pb-4 border-b border-[#ebdccd]">
                  <span className="text-4xl font-serif font-bold text-[#b4712c]">
                    $39.99
                  </span>
                  <span className="block text-[11px] font-semibold text-[#7c6a58] tracking-wider uppercase mt-1">
                    PER MONTH
                  </span>
                </div>

                {/* Checkmarks */}
                <ul className="space-y-3 mb-6 text-xs text-[#4d443b]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ab6f32] shrink-0 stroke-[2.5]" />
                    <span className="font-bold text-[#2b251f]">UNLIMITED USE</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ab6f32] shrink-0 stroke-[2.5]" />
                    <span>PRIORITY BOOKING</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#ab6f32] shrink-0 stroke-[2.5]" />
                    <span>REWARDS PROGRAM</span>
                  </li>
                </ul>
              </div>

              {/* Single Session Pill */}
              <div className="space-y-2">
                <a
                  href="https://book.sunstudiotan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#b37430] to-[#c7873b] hover:from-[#9c6123] hover:to-[#b37430] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
                >
                  JOIN $39.99/MO
                </a>
                <a
                  href="https://book.sunstudiotan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-2 px-3 rounded-lg bg-[#faf5ee] border border-[#e0cbba] text-[#714f26] text-[11px] font-bold tracking-wider uppercase hover:bg-[#f0e2d3] transition-colors"
                >
                  SINGLE SESSION $52
                </a>
              </div>
            </div>

            {/* TIER 4: BRONZED (VIP) */}
            <div className="bg-white rounded-2xl border-2 border-[#388e3c] p-6 flex flex-col justify-between shadow-md relative hover:shadow-lg transition-all">
              <div>
                {/* Ribbon Badge */}
                <div className="text-center mb-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#1b5e20] text-white text-[10px] font-bold tracking-widest uppercase shadow-xs">
                    VIP
                  </span>
                </div>

                {/* Icon */}
                <div className="w-10 h-10 mx-auto mb-2 text-[#2e7d32] flex items-center justify-center">
                  <Diamond className="w-8 h-8 stroke-[1.5]" />
                </div>

                {/* Title */}
                <h3 className="text-center text-xl font-bold text-[#26211c] tracking-tight uppercase mb-0.5">
                  BRONZED
                </h3>
                <p className="text-center text-[10px] font-bold text-[#86633b] tracking-wider uppercase mb-1">
                  HEATED AIRBRUSH
                </p>

                {/* Price */}
                <div className="text-center my-4 pb-4 border-b border-[#ebdccd]">
                  <span className="text-4xl font-serif font-bold text-[#b4712c]">
                    $59.99
                  </span>
                  <span className="block text-[11px] font-semibold text-[#7c6a58] tracking-wider uppercase mt-1">
                    PER MONTH
                  </span>
                </div>

                {/* Checkmarks */}
                <ul className="space-y-3 mb-6 text-xs text-[#4d443b]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2e7d32] shrink-0 stroke-[2.5]" />
                    <span className="font-bold text-[#2b251f]">UNLIMITED ALL SOLUTIONS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2e7d32] shrink-0 stroke-[2.5]" />
                    <span>HEATED LUXURY AIRBRUSH</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2e7d32] shrink-0 stroke-[2.5]" />
                    <span>LONGEST LASTING FORMULA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2e7d32] shrink-0 stroke-[2.5]" />
                    <span>REWARDS PROGRAM</span>
                  </li>
                </ul>
              </div>

              {/* Single Session Pill */}
              <div className="space-y-2">
                <a
                  href="https://book.sunstudiotan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#205b26] to-[#2e7d32] hover:from-[#17461c] hover:to-[#205b26] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
                >
                  JOIN $59.99/MO
                </a>
                <a
                  href="https://book.sunstudiotan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center py-2 px-3 rounded-lg bg-[#faf5ee] border border-[#e0cbba] text-[#714f26] text-[11px] font-bold tracking-wider uppercase hover:bg-[#f0e2d3] transition-colors"
                >
                  SINGLE SESSION $62
                </a>
              </div>
            </div>
          </div>

          {/* FACILITY FEE NOTICE BANNER */}
          <div className="relative z-10 bg-[#f7eedf] border border-[#e2d2c1] rounded-2xl p-4 sm:p-5 mb-10 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#edd4bc] flex items-center justify-center text-[#7d5125] shrink-0 shadow-inner">
              <Calendar className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <div className="text-sm sm:text-base md:text-lg font-bold text-[#2a241e] tracking-tight uppercase">
                $30 ANNUAL FACILITY FEE AT SIGNUP — ALL MEMBERSHIPS
              </div>
              <p className="text-xs sm:text-sm text-[#735d48] font-medium mt-0.5">
                CANCEL OR PAUSE ANYTIME WITHIN THE YEAR AT NO ADDITIONAL CHARGE.
              </p>
            </div>
          </div>

          {/* ADD-ONS & WELLNESS SECTION */}
          <div id="addons-wellness" className="relative z-10 bg-white/95 rounded-2xl border border-[#dbc9ba] p-6 sm:p-8 mb-10 shadow-sm">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] bg-[#d9c7b6] flex-1" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2b251f] tracking-wide uppercase px-2">
                ADD-ONS &amp; WELLNESS
              </h3>
              <div className="h-[1px] bg-[#d9c7b6] flex-1" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {/* Addon 1: EXPRESS SESSIONS */}
              <div className="flex flex-col items-center justify-between p-3 rounded-xl hover:bg-[#faf6f0] transition-colors">
                <span className="text-xs font-bold text-[#635345] uppercase tracking-wider mb-2">
                  EXPRESS SESSIONS
                </span>
                <div className="w-10 h-10 text-[#d48b38] flex items-center justify-center mb-1">
                  <Sparkles className="w-7 h-7 stroke-[1.75]" />
                </div>
                <div className="text-3xl font-serif font-bold text-[#9e5d1e] my-1">
                  +$9
                </div>
                <span className="text-[11px] font-semibold text-[#827161] tracking-wide uppercase">
                  TWO HOUR RINSE
                </span>
              </div>

              {/* Addon 2: LIFT */}
              <div className="flex flex-col items-center justify-between p-3 rounded-xl hover:bg-[#faf6f0] transition-colors">
                <span className="text-xs font-bold text-[#635345] uppercase tracking-wider mb-2">
                  LIFT
                </span>
                <div className="w-10 h-10 text-[#6d5b4e] flex items-center justify-center mb-1">
                  <ChevronUp className="w-8 h-8 stroke-[2.5]" />
                </div>
                <div className="text-3xl font-serif font-bold text-[#9e5d1e] my-1">
                  $7
                </div>
                <span className="text-[11px] font-semibold text-[#827161] tracking-wide">
                  Collagen Boost
                </span>
              </div>

              {/* Addon 3: RECOVER */}
              <div className="flex flex-col items-center justify-between p-3 rounded-xl hover:bg-[#faf6f0] transition-colors">
                <span className="text-xs font-bold text-[#635345] uppercase tracking-wider mb-2">
                  RECOVER
                </span>
                <div className="w-10 h-10 text-[#1b6271] flex items-center justify-center mb-1">
                  <Droplets className="w-7 h-7 stroke-[1.75]" />
                </div>
                <div className="text-3xl font-serif font-bold text-[#9e5d1e] my-1">
                  $7
                </div>
                <span className="text-[11px] font-semibold text-[#827161] tracking-wide">
                  Vitamin Bath
                </span>
              </div>

              {/* Addon 4: BALANCE */}
              <div className="flex flex-col items-center justify-between p-3 rounded-xl hover:bg-[#faf6f0] transition-colors">
                <span className="text-xs font-bold text-[#635345] uppercase tracking-wider mb-2">
                  BALANCE
                </span>
                <div className="w-10 h-10 text-[#b58043] flex items-center justify-center mb-1">
                  <Sun className="w-7 h-7 stroke-[1.75]" />
                </div>
                <div className="text-3xl font-serif font-bold text-[#9e5d1e] my-1">
                  $7
                </div>
                <span className="text-[11px] font-semibold text-[#827161] tracking-wide">
                  pH Balancing Prep
                </span>
              </div>
            </div>
          </div>

          {/* TEETH WHITENING SECTION */}
          <div id="teeth-whitening-section" className="relative z-10 bg-white/95 rounded-2xl border border-[#dbc9ba] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] bg-[#d9c7b6] flex-1" />
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2b251f] tracking-wide px-2">
                Teeth Whitening
              </h3>
              <div className="h-[1px] bg-[#d9c7b6] flex-1" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-[#edd9cb]">
              {/* 1. SINGLE SESSION */}
              <div className="pt-4 md:pt-0 flex flex-col justify-center items-center">
                <span className="text-xs font-bold text-[#635345] uppercase tracking-wider mb-2">
                  SINGLE SESSION
                </span>
                <div className="text-4xl sm:text-5xl font-serif font-bold text-[#1f1d1b] my-2">
                  $139
                </div>
                <p className="text-xs text-[#7e7062] max-w-xs mt-1">
                  60-minute intensive LED light activation with enamel-safe hydrogen peroxide formula
                </p>
                <a
                  href="https://book.sunstudiotan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-2 rounded-lg bg-[#2a241e] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Book Session
                </a>
              </div>

              {/* 2. 3-SESSION PACKAGE */}
              <div className="pt-4 md:pt-0 md:px-4 flex flex-col justify-center items-center">
                <span className="text-xs font-bold text-[#9e5d1e] uppercase tracking-wider mb-2">
                  3-SESSION PACKAGE
                </span>
                <div className="text-4xl sm:text-5xl font-serif font-bold text-[#b4712c] my-2">
                  $239
                </div>
                <span className="text-[11px] font-bold text-[#6e4e2a] uppercase tracking-widest bg-[#faeedf] px-3 py-1 rounded-full mt-1">
                  BEST FOR LASTING RESULTS
                </span>
                <p className="text-xs text-[#7e7062] max-w-xs mt-2">
                  Save $178. Recommended for deep staining and maximum shade jump (up to 12 shades).
                </p>
                <a
                  href="https://book.sunstudiotan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-2 rounded-lg bg-gradient-to-r from-[#b37430] to-[#c7873b] hover:from-[#9c6123] hover:to-[#b37430] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
                >
                  Get 3-Pack
                </a>
              </div>

              {/* 3. MEMBERSHIP */}
              <div className="pt-4 md:pt-0 flex flex-col justify-center items-center">
                <span className="text-xs font-bold text-[#635345] uppercase tracking-wider mb-2">
                  MEMBERSHIP
                </span>
                <div className="text-4xl sm:text-5xl font-serif font-bold text-[#1f1d1b] my-2">
                  $49<span className="text-xl font-sans text-[#7e7062]">/mo</span>
                </div>
                <p className="text-xs text-[#7e7062] max-w-xs mt-1">
                  Monthly whitening touch-ups to keep your smile continuously photo-ready all year round.
                </p>
                <a
                  href="https://book.sunstudiotan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-2 rounded-lg bg-[#2a241e] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  Join $49/mo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GROUPONS FOOTER BAR & TERMS */}
      <section className="mt-12 text-center px-6">
        <div className="flex items-center justify-center gap-6 text-sm text-[#7d7064]">
          <button
            type="button"
            onClick={() => setShowGrouponModal(true)}
            className="hover:text-[#b4712c] font-semibold underline underline-offset-4 cursor-pointer transition-colors"
          >
            Groupons
          </button>
          <span>•</span>
          <a
            href="https://book.sunstudiotan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b4712c] transition-colors"
          >
            Terms &amp; Conditions
          </a>
        </div>
      </section>

      {/* 5. GROUPON VOUCHER REDEMPTION MODAL */}
      <AnimatePresence>
        {showGrouponModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowGrouponModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#dfd5c9] text-left relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <Tag className="w-5 h-5 text-[#f05a54]" />
                  <h3 className="text-xl font-serif font-bold text-[#2a241e]">
                    Groupon Vouchers
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowGrouponModal(false)}
                  className="text-gray-400 hover:text-gray-700 font-bold text-lg w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 space-y-4 text-xs sm:text-sm text-[#5a5047] leading-relaxed">
                <p>
                  Have a Groupon voucher for Sun Studio Tan? We are thrilled to welcome you to our Short North studio!
                </p>

                <div className="bg-[#fbf6ef] p-4 rounded-xl border border-[#ebd8c4] space-y-2">
                  <div className="font-bold text-[#805021] flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> How to Redeem:
                  </div>
                  <ol className="list-decimal list-inside space-y-1 text-xs">
                    <li>Click <strong>Book Now</strong> to view our live booking calendar.</li>
                    <li>Select the service matching your Groupon voucher (Airbrush Tan or Teeth Whitening).</li>
                    <li>Enter your Groupon barcode or voucher code in the booking notes.</li>
                    <li>Bring your mobile voucher to your appointment.</li>
                  </ol>
                </div>

                <p className="text-[11px] text-gray-500">
                  *New clients only. Can be applied toward solution upgrades (Venetian or Heated Airbrush) at the studio. 24-hour cancellation policy applies.
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://book.sunstudiotan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-[#f05a54] hover:bg-[#d94843] text-white text-center font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Book with Voucher
                </a>
                <button
                  type="button"
                  onClick={() => setShowGrouponModal(false)}
                  className="py-3 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
