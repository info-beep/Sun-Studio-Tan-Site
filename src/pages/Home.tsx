import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  ArrowRight, 
  Check, 
  Car, 
  Sparkles, 
  Clock, 
  Flame, 
  ShieldCheck, 
  Smile, 
  MapPin, 
  Heart, 
  Users, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Video,
  Globe
} from 'lucide-react';
import { Page } from '../types';
import beautyTanningImage from '../assets/images/regenerated_image_1780547142816.png';
import teethWhiteningImage from '../assets/images/regenerated_image_1780540375958.png';
import technicianImage from '../assets/images/regenerated_image_1780550622479.png';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterSubmitted(false);
        setNewsletterEmail('');
      }, 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div id="home-page-container" className="w-full text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-20 order-2 lg:order-1"
          >
            <motion.span variants={itemVariants} className="inline-block mb-4 text-xs tracking-[0.4em] uppercase text-amber-300 font-semibold">
              Columbus, Ohio • Since 2016
            </motion.span>
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif italic mb-6 tracking-tight leading-[0.95]">
              Sun <span className="text-white/40">Studio</span><br />
              <span className="text-3xl sm:text-4xl md:text-6xl not-italic font-light tracking-widest uppercase block mt-3">The Glow</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="max-w-xl text-base sm:text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8">
              A decade of mastery in the art of the perfect sunless tan. Custom airbrush tanning, heated Evolv cabins, and dentist-grade teeth whitening in the heart of the Short North.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <button 
                type="button"
                onClick={() => onNavigate('book')}
                className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-black text-xs tracking-[0.25em] uppercase font-bold transition-all duration-300 shadow-lg cursor-pointer rounded-sm"
              >
                Schedule Session
              </button>
              <button 
                type="button"
                onClick={() => onNavigate('pricing')}
                className="px-8 py-3.5 border border-white/20 hover:border-amber-400 text-white hover:text-amber-300 text-xs tracking-[0.25em] uppercase font-bold transition-all duration-300 cursor-pointer rounded-sm"
              >
                View Pricing
              </button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-12 flex items-center gap-8 border-t border-white/10 pt-6">
              <div>
                <p className="text-2xl font-serif italic text-amber-300">20+</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/50">Years Experience</p>
              </div>
              <div className="w-[1px] h-8 bg-white/15"></div>
              <div>
                <p className="text-2xl font-serif italic text-amber-300">10k+</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/50">Happy Clients</p>
              </div>
              <div className="w-[1px] h-8 bg-white/15"></div>
              <div>
                <p className="text-2xl font-serif italic text-amber-300">4.8 ★</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/50">384+ Reviews</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image with Elegant Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[480px] aspect-[4/5] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://nivbeqiuhotuxbmcvuxt.supabase.co/storage/v1/object/public/project-images/6db4d2e0-d105-4970-873c-e507305ae618/45b4bfd6-3b89-49d1-b1f1-195cc753ca17.jpg" 
                alt="Sun Studio Tan Columbus" 
                className="w-full h-full object-cover object-center grayscale-[0.15] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/70 backdrop-blur-md rounded border border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-amber-400 font-bold block">COLUMBUS, OH</span>
                    <span className="text-sm font-medium text-white">612 N High St • Short North</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/30">
                    <Car className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-[10px] font-bold">2 HR FREE PARKING</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. SIGNATURE OLD HOME PAGE DESIGN: "hello sunshine" & GROUPON 4.8/5 SOCIAL PROOF */}
      <section className="py-16 px-6 bg-gradient-to-b from-stone-950 via-[#14120e] to-black border-y border-amber-500/15">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          {/* Left: Arched "hello sunshine" Graphic Motif */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative inline-block mb-3">
              <span className="text-4xl sm:text-5xl md:text-6xl font-serif italic text-amber-300 tracking-tight drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">
                hello sunshine
              </span>
              <div className="absolute -top-3 -right-4 w-6 h-6 text-amber-400 animate-spin-slow">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
            <p className="text-base sm:text-lg text-white/80 font-light max-w-md">
              Sun Studio Tan Columbus — Premier Heated Airbrush Tanning
            </p>
          </div>

          {/* Right: Circular Badge & Groupon Verified Social Proof */}
          <div className="flex flex-wrap items-center justify-center gap-6 bg-white/[0.03] p-6 rounded-2xl border border-white/10">
            {/* Circular Stamp */}
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-amber-400/60 p-1 flex items-center justify-center relative">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-400/20 to-black flex flex-col items-center justify-center text-center p-1">
                <span className="text-[8px] tracking-[0.1em] font-bold text-amber-300 uppercase leading-none">SUN STUDIO</span>
                <span className="text-base font-black text-white leading-tight">4.8 / 5</span>
                <span className="text-[7px] text-white/70 uppercase tracking-tight">VERIFIED</span>
              </div>
            </div>

            {/* Groupon Badge Details */}
            <div className="text-left">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-6 h-6 rounded-sm bg-[#53a318] text-white font-black text-xs flex items-center justify-center shadow-xs">
                  G
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-white">GROUPON VERIFIED</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-300 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
                <span className="text-white font-bold text-sm ml-1">4.8 / 5</span>
              </div>
              <p className="text-xs text-white/60">
                Based on <strong className="text-white">384 verified reviews</strong> &amp; 35+ pages of 5-star ratings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIGNATURE OLD HOME PAGE DESIGN: EVOLV HEATED AIRBRUSH SECTION */}
      <section className="py-20 px-6 bg-black border-b border-white/5 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] font-bold uppercase tracking-widest mb-4">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              HEATED AIRBRUSH TANS. PERFECTED.
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif italic mb-6 leading-tight">
              Stay warm. Dry faster. <br />
              <span className="text-amber-300 font-sans not-italic font-bold tracking-tight text-3xl sm:text-4xl">
                The Evolv Heated Experience.
              </span>
            </h2>
            <p className="text-white/70 leading-relaxed text-base sm:text-lg mb-8 font-light">
              Gone are the days of freezing during your spray tan. Our heated Evolv application warms the air and solution to 98°F, opening your pores for deeper absorption, immediate flash drying, and the most natural, lasting bronze tone available anywhere in Ohio.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onNavigate('book')}
                className="px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs uppercase tracking-widest transition-all rounded cursor-pointer"
              >
                BOOK A HEATED TAN &gt;
              </button>
              <button
                type="button"
                onClick={() => onNavigate('tanning')}
                className="px-6 py-3.5 border border-white/20 hover:border-white text-white text-xs uppercase tracking-widest transition-all rounded cursor-pointer"
              >
                Learn How It Works
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-full max-w-md p-8 rounded-2xl bg-gradient-to-br from-stone-900 to-black border border-white/10 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-2xl font-bold tracking-tight lowercase text-white">
                  evolv<span className="text-amber-400">.</span>
                </span>
                <span className="text-[10px] tracking-widest uppercase bg-amber-400/20 text-amber-300 px-3 py-1 rounded-full font-bold">
                  Exclusive Technology
                </span>
              </div>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span><strong>98°F Heated Air Delivery:</strong> Keeps you cozy and warm while speeding melanin oxidation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span><strong>Dry-As-You-Go Precision:</strong> Get dressed immediately without feeling sticky or damp.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span><strong>Zero Orange Guarantee:</strong> Scientific violet &amp; golden undertones tailored to your skin.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIGNATURE OLD HOME PAGE DESIGN: CIRCULAR BADGES SERVICE SHOWCASE */}
      <section className="py-24 px-6 bg-[#fcfaf7] text-stone-900 border-y border-stone-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] font-bold text-[#b87c3f] uppercase block mb-2">
              Our Core Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif italic text-stone-900">
              Tailored for Columbus Perfection
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Left Circular Card: Custom Airbrush Tanning */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              {/* Teal Circular Illustrated Icon */}
              <div className="w-28 h-28 rounded-full bg-teal-50 border-4 border-teal-100 flex items-center justify-center mb-6 shadow-inner relative">
                <Sparkles className="w-12 h-12 text-teal-600" />
                <div className="absolute -bottom-1 bg-teal-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  SPRAY
                </div>
              </div>
              <span className="text-xs font-bold tracking-[0.2em] text-teal-700 uppercase mb-1">
                BASE • BUILD • BRONZED
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif italic text-stone-900 mb-3">
                Custom Airbrush Spray Tanning
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-8 max-w-md">
                Our expert technicians will tailor the tan to match your skin tone, ensuring you enjoy a natural and luminous complexion. Additional options include: <strong>Heated Spray Tan | Express / Rapid 2-Hour Tan</strong>.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <button
                  type="button"
                  onClick={() => onNavigate('tanning')}
                  className="px-5 py-2.5 rounded-full border border-stone-300 hover:border-stone-900 text-stone-800 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  • Learn More
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('book')}
                  className="px-6 py-2.5 rounded-full bg-[#b87c3f] hover:bg-[#a36b34] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
                >
                  • Book Now
                </button>
              </div>
            </div>

            {/* Right Circular Card: Teeth Whitening */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
              {/* Blue Circular Illustrated Icon */}
              <div className="w-28 h-28 rounded-full bg-sky-50 border-4 border-sky-100 flex items-center justify-center mb-6 shadow-inner relative">
                <Smile className="w-12 h-12 text-sky-600" />
                <div className="absolute -bottom-1 bg-sky-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  WHITE
                </div>
              </div>
              <span className="text-xs font-bold tracking-[0.2em] text-sky-700 uppercase mb-1">
                Powered by Bleach Bright
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif italic text-stone-900 mb-3">
                L.E.D. Teeth Whitening
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed mb-8 max-w-md">
                Enhance your smile with our expert Teeth Whitening treatment. Bid farewell to stains and discoloration, and hello to a brilliant white smile. <strong>Dentist Quality Whitening in 30 Minutes</strong>.
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <button
                  type="button"
                  onClick={() => onNavigate('pricing')}
                  className="px-5 py-2.5 rounded-full border border-stone-300 hover:border-stone-900 text-stone-800 text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  • Learn More
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('book')}
                  className="px-6 py-2.5 rounded-full bg-[#b87c3f] hover:bg-[#a36b34] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
                >
                  • Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              type="button"
              onClick={() => onNavigate('pricing')}
              className="inline-flex items-center gap-2 text-stone-800 hover:text-[#b87c3f] font-bold text-sm tracking-wider uppercase transition-colors cursor-pointer"
            >
              Explore All Services &amp; Packages <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. SIGNATURE OLD HOME PAGE DESIGN: EDITORIAL GUIDE (HOW LONG DOES AN AIRBRUSH SPRAY TAN LAST?) */}
      <section className="py-24 px-6 bg-[#121110] border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs tracking-[0.3em] uppercase text-amber-300 font-bold block mb-3">
              CLIENT EDUCATION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic leading-tight text-white mb-6">
              How Long Does an Airbrush Spray Tan Last?
            </h2>
            <div className="w-16 h-1 bg-amber-400 mb-6"></div>
            <p className="text-white/60 text-sm italic mb-6">
              Expert advice from Joey and the Sun Studio Tan Columbus technician team.
            </p>
            <button
              type="button"
              onClick={() => onNavigate('care')}
              className="inline-flex items-center gap-2 text-amber-300 hover:text-white font-bold text-xs uppercase tracking-widest transition-colors cursor-pointer"
            >
              Read Full Care Protocol &gt;
            </button>
          </div>

          <div className="lg:col-span-7 bg-white/[0.02] p-8 sm:p-10 rounded-2xl border border-white/10 text-white/80 leading-relaxed space-y-5 text-base font-light">
            <p>
              Airbrush spray tans typically last <strong>7–10 days</strong>, depending on your skin type, how you prep, and how you care for your skin afterward. At Sun Studio Tan in Columbus, most clients see their color fully develop within 24 hours and enjoy a gradual, even fade rather than patchy spots.
            </p>
            <p>
              Our <strong>BASE, BUILD, and BRONZED</strong> options are all professional Norvell and Evolv formulas designed to deliver a natural bronze that looks like a real tan, not a spray.
            </p>
            <p>
              To extend your results, we recommend exfoliating the day before your session, keeping skin well hydrated with tan-safe lotion, and avoiding long, hot baths or harsh scrubs, which can strip color early. Many Sun Studio Tan clients maintain a year-round glow with memberships starting at <strong>$24.99 per month</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT-GEN STUDIO CAPABILITIES: VEO VIDEO, SEARCH GROUNDING & MAPS GROUNDING */}
      <section className="py-20 px-6 bg-[#0a0a0a] border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[11px] font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Studio Intelligence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif italic text-white mb-3">
              Modern Technology Meets Timeless Radiance
            </h2>
            <p className="text-white/50 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Explore our new digital capabilities: animate your bridal or tanning look into cinematic video, consult real-time weather &amp; skincare data, and navigate the Short North Arts District.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Veo Video Generation */}
            <div className="bg-stone-950/80 border border-amber-400/20 rounded-2xl p-7 flex flex-col justify-between hover:border-amber-400/50 transition-colors group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-5 text-amber-300 group-hover:scale-105 transition-transform">
                  <Video className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-amber-400 mb-1">
                  Model: veo-3.1-fast-generate-preview
                </div>
                <h3 className="text-xl font-serif italic text-white mb-2">
                  AI Video Motion Studio
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-light mb-6">
                  Upload your photo and bring your sunless glow to life with fluid camera orbits, warm sunset flares, and 9:16 or 16:9 cinematic video generation.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('video')}
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Launch Video Studio</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 2: Google Search Grounding */}
            <div className="bg-stone-950/80 border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-amber-400/50 transition-colors group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mb-5 text-sky-400 group-hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-sky-300 mb-1">
                  Google Search Grounding (gemini-3.5-flash)
                </div>
                <h3 className="text-xl font-serif italic text-white mb-2">
                  Live Weather &amp; Skincare AI
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-light mb-6">
                  Check live Columbus UV levels, humidity, and verified ingredient chemistry to protect your spray tan and maintain lasting luminosity.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('care')}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Care Intelligence</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 3: Google Maps Grounding */}
            <div className="bg-stone-950/80 border border-white/10 rounded-2xl p-7 flex flex-col justify-between hover:border-amber-400/50 transition-colors group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center mb-5 text-emerald-400 group-hover:scale-105 transition-transform">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 mb-1">
                  Google Maps Grounding (gemini-3.5-flash)
                </div>
                <h3 className="text-xl font-serif italic text-white mb-2">
                  Short North Studio Guide
                </h3>
                <p className="text-xs text-white/60 leading-relaxed font-light mb-6">
                  Find verified parking garages, street meters, walking transit, and nearby cafes right around our 612 N High St Columbus studio.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Find Parking &amp; Directions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SIGNATURE OLD HOME PAGE DESIGN: THE ICONIC YELLOW ACCENT BOX */}
      {/* "Why Columbus Keeps Coming Back to Sun Studio Tan" */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#f6d239] text-black p-8 sm:p-12 md:p-14 rounded-2xl shadow-2xl relative overflow-hidden border-4 border-black">
            {/* Black square with white question mark */}
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-black text-white flex items-center justify-center font-black text-2xl shrink-0 shadow-md">
                ?
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight uppercase leading-tight font-sans">
                  Why Columbus Keeps Coming Back to Sun Studio Tan
                </h3>
                <p className="text-xs uppercase font-bold tracking-widest text-black/70 mt-1">
                  The Gold Standard in Short North Sunless Care
                </p>
              </div>
            </div>

            {/* 5 Distinct High-Contrast Reasons */}
            <ul className="space-y-4 text-sm sm:text-base font-medium">
              <li className="flex flex-col sm:flex-row sm:items-baseline gap-2 pb-3 border-b border-black/15">
                <span className="inline-block px-3 py-1 bg-white text-black font-extrabold rounded-full text-xs uppercase tracking-wider shadow-xs shrink-0 self-start">
                  • Custom-matched to your skin tone
                </span>
                <span className="text-black/90 font-normal">
                  — no two tans look the same because no two clients are the same.
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-baseline gap-2 pb-3 border-b border-black/15">
                <span className="inline-block px-3 py-1 bg-white text-black font-extrabold rounded-full text-xs uppercase tracking-wider shadow-xs shrink-0 self-start">
                  • 3 Premium Solutions
                </span>
                <span className="text-black/90 font-normal">
                  — Norvell, Venetian, and heated Evolv give you real options for your real goal.
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-baseline gap-2 pb-3 border-b border-black/15">
                <span className="inline-block px-3 py-1 bg-white text-black font-extrabold rounded-full text-xs uppercase tracking-wider shadow-xs shrink-0 self-start">
                  • 35+ pages of 5-star reviews on Groupon
                </span>
                <span className="text-black/90 font-normal">
                  — we let the results speak.
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-baseline gap-2 pb-3 border-b border-black/15">
                <span className="inline-block px-3 py-1 bg-white text-black font-extrabold rounded-full text-xs uppercase tracking-wider shadow-xs shrink-0 self-start">
                  • Short North Location
                </span>
                <span className="text-black/90 font-normal">
                  — easy to get to, free parking at the Joseph Garage for 2 hour.
                </span>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                <span className="inline-block px-3 py-1 bg-black text-white font-extrabold rounded-full text-xs uppercase tracking-wider shadow-xs shrink-0 self-start">
                  • Memberships from $24.99/month
                </span>
                <span className="text-black/90 font-normal">
                  — because a great tan shouldn't be a one-time thing.
                </span>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-black/20 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-wider text-black/80">
                Experience Columbus's favorite studio today:
              </span>
              <button
                type="button"
                onClick={() => onNavigate('book')}
                className="px-6 py-2.5 bg-black text-white hover:bg-neutral-800 font-bold uppercase tracking-widest text-xs rounded transition-all cursor-pointer shadow-md"
              >
                Book An Appointment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SIGNATURE OLD HOME PAGE DESIGN: BODY & FACE WELLNESS (WELLFIT 3-STEP) */}
      <section className="py-24 px-6 bg-gradient-to-b from-black via-stone-950 to-[#0e0d0c] border-b border-white/5">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-300 block mb-3">
              SKINCARE REVOLUTION
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif italic mb-6 leading-tight">
              Body &amp; Face Wellness
            </h2>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-6 font-light">
              Introducing the latest for 2026 at Sun Studio Tan! Experience the amazing <strong>Wellfit Premium 3-Step</strong> face and body care, designed to provide top-notch skincare from within. Get ready to radiate like never before!
            </p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="p-3 bg-white/[0.03] rounded-lg border border-white/5 text-center">
                <span className="text-amber-300 font-bold text-xs uppercase block">Step 1: Hydrate</span>
                <span className="text-[10px] text-white/50">Barrier repair</span>
              </div>
              <div className="p-3 bg-white/[0.03] rounded-lg border border-white/5 text-center">
                <span className="text-amber-300 font-bold text-xs uppercase block">Step 2: Balance</span>
                <span className="text-[10px] text-white/50">pH preparation</span>
              </div>
              <div className="p-3 bg-white/[0.03] rounded-lg border border-white/5 text-center">
                <span className="text-amber-300 font-bold text-xs uppercase block">Step 3: Boost</span>
                <span className="text-[10px] text-white/50">Collagen lift</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onNavigate('wellness')}
                className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs rounded cursor-pointer transition-all"
              >
                Wellfit Face &amp; Body
              </button>
              <button
                type="button"
                onClick={() => onNavigate('wellness')}
                className="px-6 py-3 border border-white/20 hover:border-white text-white font-bold uppercase tracking-wider text-xs rounded cursor-pointer transition-all"
              >
                Wellness Boosts
              </button>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl bg-amber-950/20">
              <img
                src={technicianImage}
                alt="Wellfit Skincare and Wellness Treatment"
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/80 backdrop-blur-md rounded border border-white/10">
                <p className="text-xs font-bold text-amber-300 uppercase tracking-widest">Available with any tan session</p>
                <p className="text-sm text-white/90">Add-on serum &amp; vitamin boost starting at just $7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SIGNATURE OLD HOME PAGE DESIGN: "LOCATED IN THE SHORT NORTH COLUMBUS OHIO" */}
      <section className="py-24 px-6 bg-black border-b border-white/5">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
              <MapPin className="w-4 h-4 text-amber-400" />
              Historic Arts District
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif italic text-white leading-tight mb-6">
              Located in the Short North Columbus Ohio
            </h2>
            <div className="p-4 bg-white/[0.03] rounded-xl border border-white/10 mb-6 space-y-2 text-xs">
              <p className="flex items-center gap-2 text-white/90">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <strong>612 N High St, Columbus, OH 43215</strong>
              </p>
              <p className="flex items-center gap-2 text-white/70">
                <Car className="w-4 h-4 text-amber-400 shrink-0" />
                2 Hours Free Parking at The Joseph Garage
              </p>
              <p className="flex items-center gap-2 text-white/70">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                Open 7 Days a Week
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 border border-white/20 hover:border-amber-400 text-white hover:text-amber-300 text-xs uppercase tracking-widest font-bold transition-all rounded cursor-pointer"
            >
              Get Directions &amp; Hours
            </button>
          </div>

          <div className="lg:col-span-7 bg-white/[0.02] p-8 sm:p-10 rounded-2xl border border-white/10 text-white/75 leading-relaxed text-base sm:text-lg font-light">
            <p>
              Perfectly positioned between Downtown Columbus and The Ohio State University, making it a go-to glow destination for locals, students, and visitors alike. Known for its custom, streak-free results and elevated yet welcoming vibe, the studio attracts everyone from OSU students prepping for formals to professionals and travelers staying at nearby hotels like Le Méridien and Graduate Columbus.
            </p>
            <p className="mt-4">
              Whether you're getting ready for a night out, a wedding, or major city events like the Arnold Sports Festival or HighBall Halloween, Sun Studio Tan delivers a flawless, natural-looking glow right in the center of Columbus's most vibrant district.
            </p>
          </div>
        </div>
      </section>

      {/* 10. SIGNATURE OLD HOME PAGE DESIGN: 4 REAL CLIENT REVIEW CARDS */}
      <section className="py-24 px-6 bg-gradient-to-b from-stone-950 to-black border-b border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-300 block mb-2">
              AUTHENTIC CLIENT FEEDBACK
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif italic">
              Columbus Verified Experiences
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:bg-white/[0.04] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] tracking-widest uppercase text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded">
                    REAL CLIENT REVIEW
                  </span>
                  <div className="flex text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-white/80 italic leading-relaxed mb-6 font-light">
                  "...sent all my sorority sisters here. The spray tans look like we paid ten times what we did."
                </p>
              </div>
              <div className="border-t border-white/5 pt-3">
                <span className="text-xs font-bold text-white block">C.H.</span>
                <span className="text-[10px] text-white/40 uppercase">5-Star Review</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:bg-white/[0.04] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] tracking-widest uppercase text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded">
                    REAL CLIENT REVIEW
                  </span>
                  <div className="flex text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-white/80 italic leading-relaxed mb-6 font-light">
                  "Walked in nervous, walked out glowing. The staff made me feel so comfortable from the jump."
                </p>
              </div>
              <div className="border-t border-white/5 pt-3">
                <span className="text-xs font-bold text-white block">E.L.</span>
                <span className="text-[10px] text-white/40 uppercase">5-Star Review</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:bg-white/[0.04] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] tracking-widest uppercase text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded">
                    REAL CLIENT REVIEW
                  </span>
                  <div className="flex text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-white/80 italic leading-relaxed mb-6 font-light">
                  "Best spray tan I've ever gotten. Period. Even, natural, and it faded beautifully."
                </p>
              </div>
              <div className="border-t border-white/5 pt-3">
                <span className="text-xs font-bold text-white block">K.T.</span>
                <span className="text-[10px] text-white/40 uppercase">5-Star Review</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:bg-white/[0.04] transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] tracking-widest uppercase text-amber-400 font-bold bg-amber-400/10 px-2 py-0.5 rounded">
                    REAL CLIENT REVIEW
                  </span>
                  <div className="flex text-amber-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={11} fill="currentColor" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-white/80 italic leading-relaxed mb-6 font-light">
                  "This place is a hidden gem in Short North. Super fast, affordable, and the results speak for themselves."
                </p>
              </div>
              <div className="border-t border-white/5 pt-3">
                <span className="text-xs font-bold text-white block">B.G.</span>
                <span className="text-[10px] text-white/40 uppercase">5-Star Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. SIGNATURE OLD HOME PAGE DESIGN: VIP NEWSLETTER ("Wana Glow & Stay in the Know???") */}
      <section className="py-20 px-6 bg-[#161412] border-b border-white/5 relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-400 block mb-2">
            VIP EXCLUSIVES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic mb-4">
            Wana Glow &amp; Stay in the Know???
          </h2>
          <p className="text-white/70 text-sm sm:text-base max-w-md mx-auto mb-8 font-light">
            Subscribe to our newsletter to receive exclusive deals, seasonal promos, and Short North updates.
          </p>

          {newsletterSubmitted ? (
            <div className="inline-flex items-center gap-3 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-6 py-3 rounded-full text-sm font-semibold">
              <CheckCircle2 className="w-5 h-5" />
              <span>You're on the VIP list! Watch your inbox for secret specials.</span>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email address..."
                className="w-full px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:border-amber-400"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs transition-colors shrink-0 cursor-pointer shadow-md"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 12. SIGNATURE OLD HOME PAGE DESIGN: FREE PARKING AT THE JOSEPH GARAGE & MAP */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 bg-white/[0.03] p-8 rounded-2xl border border-white/10 text-center md:text-left">
            {/* Blue Free Parking Badge */}
            <div className="w-16 h-16 rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/40 flex items-center justify-center mx-auto md:mx-0 mb-6">
              <Car className="w-8 h-8" />
            </div>
            <span className="text-xs font-bold tracking-[0.25em] text-sky-400 uppercase block mb-1">
              FREE PARKING
            </span>
            <h3 className="text-3xl font-serif italic mb-3">
              The Joseph Garage
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6 font-light">
              Don't worry about Short North street parking. Enjoy <strong>2 hours of free validated parking</strong> at The Joseph Garage, located just steps away from our front door.
            </p>
            <div className="p-4 bg-black/60 rounded border border-white/5 text-xs text-white/60 space-y-1">
              <p>• Pull into The Joseph Garage on Russell St.</p>
              <p>• Bring your ticket into Sun Studio Tan</p>
              <p>• We validate your ticket at checkout</p>
            </div>
          </div>

          <div className="md:col-span-7 h-72 rounded-2xl overflow-hidden border border-white/10 relative">
            <iframe
              title="Sun Studio Columbus Map"
              src="https://maps.google.com/maps?q=Sun%20Studio%20612%20N%20High%20St%20Columbus%20OH%2043215&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 13. FINAL BOOKING CALL TO ACTION */}
      <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-black via-stone-950 to-[#0c0a08] text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="text-xs tracking-[0.4em] uppercase text-amber-400 font-bold block mb-4">
            EXPERIENCE THE SHORT NORTH GLOW
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif italic mb-8 leading-tight">
            Ready for your signature glow?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 font-light">
            Book online anytime at <span className="text-amber-300 font-medium">book.sunstudiotan.com</span> or call our studio directly. Walk-ins welcome based on technician availability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => onNavigate('book')}
              className="px-10 py-4 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-[0.25em] text-xs transition-all rounded shadow-xl cursor-pointer"
            >
              BOOK APPOINTMENT NOW
            </button>
            <a
              href="tel:6143330051"
              className="px-8 py-4 border border-white/20 hover:border-white text-white text-xs font-bold uppercase tracking-[0.2em] transition-all rounded"
            >
              CALL 614.333.0051
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
