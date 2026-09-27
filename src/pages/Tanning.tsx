import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Palette, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Check, 
  ChevronDown, 
  Star, 
  ArrowRight, 
  Zap, 
  Heart,
  Droplets,
  Calendar,
  Flame
} from 'lucide-react';
import beautyTanningImage from '../assets/images/regenerated_image_1780547142816.png';

interface TanningProps {
  onNavigateToWellness?: () => void;
}

export default function Tanning({ onNavigateToWellness }: TanningProps = {}) {
  const [activeTab, setActiveTab] = useState<'wellness' | 'express'>('wellness');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeResultClient, setActiveResultClient] = useState<number>(0);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { id: 'overview', label: 'Overview' },
    { id: 'levels', label: 'Choose Your Level' },
    { id: 'what-to-expect', label: 'What To Expect' },
    { id: 'prep-aftercare', label: 'Prep & Aftercare' },
    { id: 'add-ons', label: 'Add-Ons' },
    { id: 'results', label: 'Real Results' },
    { id: 'faq', label: 'FAQ' },
    { id: 'reviews', label: 'Reviews' },
  ];

  const resultsData = [
    {
      name: 'Sarah M.',
      level: 'Medium Bronze (BUILD Level)',
      note: 'Fair skin with cool pink undertones. Violet-brown BUILD formula counteracted red undertones into a natural European holiday tan.',
      beforeDesc: 'Natural untanned skin tone (fair with pink undertones)',
      afterDesc: 'Luminous olive-bronze finish with seamless tone correction',
      beforeTone: 'bg-[#f4dfd4]',
      afterTone: 'bg-[#b88556]'
    },
    {
      name: 'Jessica T.',
      level: 'Golden Bronze (BASE Level)',
      note: 'Light skin with warm undertones. BASE Norvell Dark solution developed into a classic, sun-drenched beach vacation tone.',
      beforeDesc: 'Natural light skin tone prior to appointment',
      afterDesc: 'Warm golden-bronze glow with even edge feathering',
      beforeTone: 'bg-[#f6e5dc]',
      afterTone: 'bg-[#c59163]'
    },
    {
      name: 'Amanda K.',
      level: 'Deep Heated Finish (BRONZED Level)',
      note: 'Medium skin tone. Evolv Heated application applied at 98°F for maximum pore penetration and ultra-even, long-lasting color.',
      beforeDesc: 'Medium olive skin tone before treatment',
      afterDesc: 'Deep, radiant satin bronze with aloe-infused hydration',
      beforeTone: 'bg-[#e7cdb8]',
      afterTone: 'bg-[#9c6a3f]'
    }
  ];

  const faqs = [
    {
      q: 'Will I look orange?',
      a: 'Never. We formulate every custom spray by analyzing your unique skin undertones. Our BUILD and BRONZED formulas utilize violet and olive base correctors specifically engineered to eliminate and neutralize any brassy or orange pull, leaving an authentic, just-off-the-beach bronze.'
    },
    {
      q: 'How long does it last?',
      a: 'With proper prep and daily moisturizing, your airbrush tan will typically last 7 to 10 days. Using our recommended sulfate-free body wash and gradual extender lotion can lengthen your glow up to 12 days.'
    },
    {
      q: 'When do I rinse?',
      a: 'For our signature Base and Build formulations, your initial warm water rinse is at 8 to 12 hours (or overnight). For Rapid solutions, you can rinse in as early as 2 to 4 hours depending on your desired depth.'
    },
    {
      q: 'What should I wear?',
      a: 'During the session, you may undress to your comfort level (bathing suit, dark undergarments, or disposable bottoms provided). Afterward, wear loose, dark cotton clothing and open-toed sandals to prevent creasing while the bronzer sets.'
    },
    {
      q: 'Can I work out the same day?',
      a: 'We recommend skipping heavy sweating, gym workouts, swimming, or saunas until after your initial rinse. Once you have taken your first rinse and patted dry, you are free to resume all regular workouts.'
    },
    {
      q: 'How do I make it fade evenly?',
      a: 'The secret to a flawless fade is hydration. Pat dry after showers instead of rubbing with a towel, avoid harsh physical exfoliants or swimming pools with heavy chlorine, and apply rich lotion or gradual tanning moisturizer morning and night.'
    }
  ];

  return (
    <div className="w-full bg-[#0a0a0a] text-white">
      {/* Secondary Sticky Sub-Nav */}
      <div className="sticky top-0 z-40 bg-[#0f0e0d]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between text-xs tracking-wider">
          <span className="font-semibold text-amber-300 uppercase text-[11px] md:text-xs flex items-center gap-1.5 whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Airbrush Tanning
          </span>
          <div className="flex items-center gap-3 md:gap-6 overflow-x-auto py-1 scrollbar-none text-white/70">
            {navLinks.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="hover:text-amber-300 transition-colors whitespace-nowrap text-[10px] md:text-xs tracking-wider cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="overview" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20 px-6">
        {/* Ambient Warm Spa Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c130c]/90 via-[#0e0c0a]/95 to-[#0a0a0a] pointer-events-none" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* New Clients Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs md:text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>New Clients: $20 BASE Airbrush Tan</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-sans font-light tracking-tight mb-6"
          >
            Airbrush Spray Tanning{' '}
            <span className="font-serif italic font-normal text-amber-200/90 block sm:inline">
              (UV-Free)
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-xl text-white/70 max-w-2xl font-light leading-relaxed mb-10"
          >
            Custom shade matching for your skin tone. Streak-free, natural-looking results. Hand-applied by trained artists in the Short North.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="https://book.sunstudiotan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#965c36] hover:bg-[#aa6a3e] text-white text-sm font-semibold tracking-wider rounded transition-all duration-300 shadow-lg shadow-[#965c36]/20 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Your Tan
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('levels')}
              className="w-full sm:w-auto px-8 py-3.5 border border-white/20 hover:border-amber-300/60 hover:text-amber-200 text-white/90 text-sm font-medium tracking-wider rounded transition-all duration-300 cursor-pointer"
            >
              Find Your Level
            </button>
          </motion.div>
        </div>
      </section>

      {/* Why Sun Studio Tan Section */}
      <section className="bg-[#faf8f5] text-[#1a1918] py-24 px-6 md:px-12 border-t border-b border-[#ece6de]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[#1c1a18] tracking-tight mb-4">
              Why Sun Studio Tan
            </h2>
            <p className="text-base text-[#6b6560] font-light leading-relaxed">
              A different kind of spray tan experience—built on expertise, not gimmicks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-7 rounded-xl border border-[#ece7df] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#f6eee7] text-[#965c36] flex items-center justify-center mb-5">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-[#1f1d1a] mb-2">
                  Custom Shade Matching
                </h3>
                <p className="text-sm text-[#66605b] leading-relaxed">
                  We blend solutions to match your unique undertone—never one-shade-fits-all.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-7 rounded-xl border border-[#ece7df] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#f6eee7] text-[#965c36] flex items-center justify-center mb-5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-[#1f1d1a] mb-2">
                  Even, Natural Fade
                </h3>
                <p className="text-sm text-[#66605b] leading-relaxed">
                  Our formulas are designed to fade gracefully without patchiness.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-7 rounded-xl border border-[#ece7df] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#f6eee7] text-[#965c36] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-[#1f1d1a] mb-2">
                  Trained Artist Application
                </h3>
                <p className="text-sm text-[#66605b] leading-relaxed">
                  Hand-sprayed by experienced technicians for streak-free precision.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-7 rounded-xl border border-[#ece7df] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#f6eee7] text-[#965c36] flex items-center justify-center mb-5">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-[#1f1d1a] mb-2">
                  Quick & Efficient
                </h3>
                <p className="text-sm text-[#66605b] leading-relaxed">
                  In and out in under 15 minutes. Your tan develops while you live your life.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-7 rounded-xl border border-[#ece7df] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#f6eee7] text-[#965c36] flex items-center justify-center mb-5">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-[#1f1d1a] mb-2">
                  Short North Convenience
                </h3>
                <p className="text-sm text-[#66605b] leading-relaxed">
                  Located in the heart of Columbus. Easy parking, easy access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Level Section */}
      <section id="levels" className="bg-[#faf8f5] text-[#1a1918] py-24 px-6 md:px-12 border-b border-[#ece6de]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1c1a18] tracking-tight mb-4">
              Choose Your Level
            </h2>
            <p className="text-base text-[#6b6560] font-light leading-relaxed">
              Three distinct solutions, each with its own finish. Pick what fits your skin and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Level 1: BASE */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5dfd7] shadow-sm flex flex-col justify-between hover:border-[#965c36]/40 transition-all">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#965c36] block mb-2">
                  NORVELL DARK
                </span>
                <h3 className="text-3xl font-serif font-bold text-[#1a1918] mb-3">
                  BASE
                </h3>
                <p className="text-sm text-[#5d5752] leading-relaxed mb-6">
                  Classic golden-brown depth—rich, warm, and natural.
                </p>

                <div className="border-t border-[#f0eae3] pt-5 space-y-4">
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#88827c] mb-1">
                      BEST FOR
                    </h4>
                    <p className="text-sm text-[#2a2725]">
                      You want a traditional deep tan that looks like "real sun."
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#88827c] mb-1">
                      UNDERTONE
                    </h4>
                    <p className="text-sm text-[#2a2725]">
                      Warm brown (golden bronze)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://book.sunstudiotan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 border border-[#1a1918] hover:bg-[#1a1918] hover:text-white text-[#1a1918] text-center font-semibold text-xs tracking-[0.15em] uppercase rounded-md transition-colors block"
                >
                  Book BASE
                </a>
              </div>
            </div>

            {/* Level 2: BUILD (Most Popular) */}
            <div className="relative bg-white rounded-2xl p-8 border-2 border-[#965c36] shadow-xl flex flex-col justify-between">
              {/* Badge */}
              <div className="absolute -top-3.5 right-6 bg-[#965c36] text-white text-[11px] font-bold tracking-wider px-3.5 py-1 rounded-full uppercase shadow-md flex items-center gap-1">
                <Star className="w-3 h-3 fill-white" />
                Most Popular
              </div>

              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#965c36] block mb-2">
                  NORVELL VENETIAN
                </span>
                <h3 className="text-3xl font-serif font-bold text-[#1a1918] mb-3">
                  BUILD
                </h3>
                <p className="text-sm text-[#5d5752] leading-relaxed mb-6">
                  Olive-toned, super flattering—designed to neutralize yellow/orange pull.
                </p>

                <div className="border-t border-[#f0eae3] pt-5 space-y-4">
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#88827c] mb-1">
                      BEST FOR
                    </h4>
                    <p className="text-sm text-[#2a2725]">
                      Everyone (especially if you've ever pulled orange before).
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#88827c] mb-1">
                      UNDERTONE
                    </h4>
                    <p className="text-sm text-[#2a2725]">
                      Violet-brown base (tone-correcting)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://book.sunstudiotan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#965c36] hover:bg-[#7e4b2a] text-white text-center font-semibold text-xs tracking-[0.15em] uppercase rounded-md transition-colors shadow-md block"
                >
                  Book BUILD
                </a>
              </div>
            </div>

            {/* Level 3: BRONZED */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5dfd7] shadow-sm flex flex-col justify-between hover:border-[#965c36]/40 transition-all">
              <div>
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#965c36] block mb-2">
                  EVOLV HEATED
                </span>
                <h3 className="text-3xl font-serif font-bold text-[#1a1918] mb-3">
                  BRONZED
                </h3>
                <p className="text-sm text-[#5d5752] leading-relaxed mb-6">
                  Warm, luxury application for smoother, more even results and an even fade.
                </p>

                <div className="border-t border-[#f0eae3] pt-5 space-y-4">
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#88827c] mb-1">
                      BEST FOR
                    </h4>
                    <p className="text-sm text-[#2a2725]">
                      You want the most premium experience and the most dialed-in finish.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#88827c] mb-1">
                      EXPERIENCE
                    </h4>
                    <p className="text-sm text-[#2a2725]">
                      Heated (~98°F) to reduce goosebumps; aloe-based feel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <a
                  href="https://book.sunstudiotan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 border border-[#1a1918] hover:bg-[#1a1918] hover:text-white text-[#1a1918] text-center font-semibold text-xs tracking-[0.15em] uppercase rounded-md transition-colors block"
                >
                  Book BRONZED
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Pricing Link */}
          <div className="mt-12 text-center text-sm text-[#66605b]">
            <span>Starting at $24.99/mo · </span>
            <a 
              href="https://book.sunstudiotan.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#965c36] font-semibold hover:underline inline-flex items-center gap-1"
            >
              View full pricing & memberships
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* What To Expect Section */}
      <section id="what-to-expect" className="bg-[#faf8f5] text-[#1a1918] py-24 px-6 md:px-12 border-b border-[#ece6de]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1c1a18] tracking-tight mb-4">
              What To Expect
            </h2>
            <p className="text-base text-[#6b6560] font-light leading-relaxed">
              Your appointment in five simple steps.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: 'STEP 1',
                title: 'Quick Consult',
                desc: 'We chat about your skin type, goals, and any upcoming events to choose the right level.'
              },
              {
                step: 'STEP 2',
                title: 'Skin Prep & Barrier Cream',
                desc: 'We apply specialized barrier cream to palms, feet, and dry spots to ensure an ultra-seamless blend.'
              },
              {
                step: 'STEP 3',
                title: 'Artisan Spray Application',
                desc: 'Your certified technician hand-sprays your custom formulated solution with precision contouring.'
              },
              {
                step: 'STEP 4',
                title: 'Dry & Set',
                desc: "We finish with powder to set your tan. Leave in loose, dark clothing—you're dry to the touch."
              },
              {
                step: 'STEP 5',
                title: 'Rinse & Develop',
                desc: 'Wait 8, 12, or 24 hours before showering (based on your solution). Your tan continues to develop for up to 24 hours.'
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 md:p-7 rounded-xl border border-[#ece7df] shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#965c36]/30 transition-all"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <span className="px-3 py-1 bg-[#f5ede6] text-[#965c36] text-xs font-bold tracking-wider rounded uppercase shrink-0">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg text-[#1f1d1a]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#66605b] mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prep & Aftercare Section */}
      <section id="prep-aftercare" className="bg-[#faf8f5] text-[#1a1918] py-24 px-6 md:px-12 border-b border-[#ece6de]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1c1a18] tracking-tight mb-4">
              Prep & Aftercare
            </h2>
            <p className="text-base text-[#6b6560] font-light leading-relaxed">
              A few simple steps to get the best results from your tan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Before Your Tan */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5dfd7] shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f0eae3]">
                <div className="w-8 h-8 rounded-full bg-[#965c36] text-white flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1a1918]">
                  Before Your Tan
                </h3>
              </div>

              <ul className="space-y-4 text-sm text-[#443f3b]">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#965c36] shrink-0 mt-0.5" />
                  <span>Exfoliate 24 hours before (skip the day-of)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#965c36] shrink-0 mt-0.5" />
                  <span>Shave or wax at least 12 hours prior</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#965c36] shrink-0 mt-0.5" />
                  <span>Skip lotions, oils, and deodorant day-of</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#965c36] shrink-0 mt-0.5" />
                  <span>Remove all jewelry and watches</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#965c36] shrink-0 mt-0.5" />
                  <span>Wear loose, dark clothing to your appointment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#965c36] shrink-0 mt-0.5" />
                  <span>Come with a clean, dry face (no makeup)</span>
                </li>
              </ul>
            </div>

            {/* Card 2: After Your Tan */}
            <div className="bg-white rounded-2xl p-8 border border-[#e5dfd7] shadow-sm">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#f0eae3]">
                <div className="w-8 h-8 rounded-full bg-[#965c36] text-white flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1a1918]">
                  After Your Tan
                </h3>
              </div>

              <ul className="space-y-4 text-sm text-[#443f3b]">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#965c36] shrink-0 mt-0.5" />
                  <span>Pat dry—don't rub—after showering</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#965c36] shrink-0 mt-0.5" />
                  <span>Moisturize daily to extend your tan</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#965c36] shrink-0 mt-0.5" />
                  <span>Avoid exfoliating, chlorine, and long baths</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#965c36] shrink-0 mt-0.5" />
                  <span>Use gradual tanner to maintain between sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#965c36] shrink-0 mt-0.5" />
                  <span>Expect 7-10 days of wear with proper care</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enhance Your Experience (Add-Ons) Section */}
      <section id="add-ons" className="bg-[#faf8f5] text-[#1a1918] py-24 px-6 md:px-12 border-b border-[#ece6de]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1c1a18] tracking-tight mb-4">
              Enhance Your Experience
            </h2>
            <p className="text-base text-[#6b6560] font-light leading-relaxed">
              Optional add-ons to maximize your results.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1.5 rounded-xl bg-[#ece6de] border border-[#ded5cb]">
              <button
                type="button"
                onClick={() => setActiveTab('wellness')}
                className={`px-6 py-2.5 rounded-lg text-xs md:text-sm font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'wellness'
                    ? 'bg-white text-[#1a1918] shadow-sm'
                    : 'text-[#6b6560] hover:text-[#1a1918]'
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#965c36]" />
                Wellness Add-Ons
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('express')}
                className={`px-6 py-2.5 rounded-lg text-xs md:text-sm font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-2 ${
                  activeTab === 'express'
                    ? 'bg-white text-[#1a1918] shadow-sm'
                    : 'text-[#6b6560] hover:text-[#1a1918]'
                }`}
              >
                <Zap className="w-4 h-4 text-[#965c36]" />
                Express Options
              </button>
            </div>
          </div>

          {/* Cards Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeTab === 'wellness' ? (
              <>
                {/* GLOW */}
                <div className="bg-white p-6 rounded-xl border border-[#e5dfd7] shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1918]">GLOW</h3>
                    <p className="text-xs font-semibold tracking-wider text-[#965c36] uppercase mb-4">
                      DHA BOOST
                    </p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-[#1a1918]">$8</span>
                      <span className="text-xs text-[#827c76] ml-2 block sm:inline">($3.99 members)</span>
                    </div>
                    <p className="text-xs text-[#66605b] leading-relaxed">
                      Darker + longer-lasting tan results.
                    </p>
                  </div>
                </div>

                {/* RECOVER */}
                <div className="bg-white p-6 rounded-xl border border-[#e5dfd7] shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1918]">RECOVER</h3>
                    <p className="text-xs font-semibold tracking-wider text-[#965c36] uppercase mb-4">
                      VITAMIN BATH
                    </p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-[#1a1918]">$10</span>
                      <span className="text-xs text-[#827c76] ml-2 block sm:inline">($3.99 members)</span>
                    </div>
                    <p className="text-xs text-[#66605b] leading-relaxed">
                      Hydration + skin recovery.
                    </p>
                  </div>
                </div>

                {/* LIFT */}
                <div className="bg-white p-6 rounded-xl border border-[#e5dfd7] shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1918]">LIFT</h3>
                    <p className="text-xs font-semibold tracking-wider text-[#965c36] uppercase mb-4">
                      COLLAGEN BOOST
                    </p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-[#1a1918]">$12</span>
                      <span className="text-xs text-[#827c76] ml-2 block sm:inline">($3.99 members)</span>
                    </div>
                    <p className="text-xs text-[#66605b] leading-relaxed">
                      Firming + skin support.
                    </p>
                  </div>
                </div>

                {/* Wellness Trio */}
                <div className="bg-[#f7efe7] p-6 rounded-xl border-2 border-[#965c36] shadow-sm flex flex-col justify-between relative">
                  <span className="absolute -top-3 right-4 bg-[#965c36] text-white text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase">
                    Bundle
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1918]">Wellness Trio</h3>
                    <p className="text-xs font-semibold tracking-wider text-[#965c36] uppercase mb-4">
                      ALL THREE ADD-ONS
                    </p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-[#1a1918]">$19</span>
                      <span className="text-xs text-[#827c76] ml-2 line-through">$30</span>
                      <span className="text-xs text-[#965c36] font-semibold ml-1">($19 members)</span>
                    </div>
                    <p className="text-xs text-[#66605b] leading-relaxed">
                      All three wellness add-ons bundled together.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Rapid Rinse */}
                <div className="bg-white p-6 rounded-xl border border-[#e5dfd7] shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1918]">RAPID RINSE</h3>
                    <p className="text-xs font-semibold tracking-wider text-[#965c36] uppercase mb-4">
                      1-3 HR ACCELERATOR
                    </p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-[#1a1918]">$15</span>
                      <span className="text-xs text-[#827c76] ml-2 block sm:inline">($9.99 members)</span>
                    </div>
                    <p className="text-xs text-[#66605b] leading-relaxed">
                      Rinse in as little as 1-3 hours for event-day flexibility.
                    </p>
                  </div>
                </div>

                {/* Heated Dry */}
                <div className="bg-white p-6 rounded-xl border border-[#e5dfd7] shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1918]">HEATED DRY</h3>
                    <p className="text-xs font-semibold tracking-wider text-[#965c36] uppercase mb-4">
                      INFUSION BLAST
                    </p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-[#1a1918]">$8</span>
                      <span className="text-xs text-[#827c76] ml-2 block sm:inline">($4.99 members)</span>
                    </div>
                    <p className="text-xs text-[#66605b] leading-relaxed">
                      Thermal setting blast with botanical essence for instant absorption.
                    </p>
                  </div>
                </div>

                {/* Scent Drops */}
                <div className="bg-white p-6 rounded-xl border border-[#e5dfd7] shadow-sm flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1918]">SCENT DROPS</h3>
                    <p className="text-xs font-semibold tracking-wider text-[#965c36] uppercase mb-4">
                      AROMA INFUSION
                    </p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-[#1a1918]">$5</span>
                      <span className="text-xs text-[#827c76] ml-2 block sm:inline">($2.99 members)</span>
                    </div>
                    <p className="text-xs text-[#66605b] leading-relaxed">
                      Infuse your session with sweet coconut, warm vanilla, or fresh eucalyptus.
                    </p>
                  </div>
                </div>

                {/* Express Glow Duo */}
                <div className="bg-[#f7efe7] p-6 rounded-xl border-2 border-[#965c36] shadow-sm flex flex-col justify-between relative">
                  <span className="absolute -top-3 right-4 bg-[#965c36] text-white text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full uppercase">
                    Bundle
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1918]">Express Duo</h3>
                    <p className="text-xs font-semibold tracking-wider text-[#965c36] uppercase mb-4">
                      RINSE + INFUSION
                    </p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-[#1a1918]">$20</span>
                      <span className="text-xs text-[#827c76] ml-2 line-through">$23</span>
                      <span className="text-xs text-[#965c36] font-semibold ml-1">($14.99 members)</span>
                    </div>
                    <p className="text-xs text-[#66605b] leading-relaxed">
                      Rapid Rinse + Thermal Infusion lock for urgent, last-minute events.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="mt-10 text-center text-xs text-[#736c66] flex flex-wrap items-center justify-center gap-4">
            <span>These add-ons can be used with a tan or on their own ·{' '}
              <a 
                href="https://book.sunstudiotan.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#965c36] font-semibold underline"
              >
                See full pricing
              </a>
            </span>
            {onNavigateToWellness && (
              <button
                type="button"
                onClick={onNavigateToWellness}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#965c36] hover:text-[#7a4826] bg-[#f2ebe3] px-3.5 py-1.5 rounded-full transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                View Full Wellness Boosts Guide (GLOW, RECOVER, LIFT)
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section id="results" className="bg-[#141210] text-white py-24 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-light tracking-tight mb-4">
              Real Results
            </h2>
            <p className="text-base text-white/60 font-light leading-relaxed">
              See the stunning transformations our clients experience.
            </p>
          </div>

          {/* Client Selector Pills */}
          <div className="flex justify-center gap-3 mb-8 overflow-x-auto py-2">
            {resultsData.map((client, idx) => (
              <button
                key={client.name}
                type="button"
                onClick={() => setActiveResultClient(idx)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                  activeResultClient === idx
                    ? 'bg-[#965c36] text-white shadow-md'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {client.name} · {client.level.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Before & After Card Display */}
          <div className="bg-[#1b1816] rounded-2xl border border-white/10 p-6 md:p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Left Side: BEFORE */}
              <div className="relative rounded-xl overflow-hidden bg-black/40 border border-white/10 aspect-[3/4] flex flex-col items-center justify-center p-6 text-center">
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm border border-white/20 px-3 py-1 rounded text-[11px] font-bold tracking-widest uppercase text-white/80">
                  BEFORE
                </div>
                <div className="w-32 h-32 rounded-full border-4 border-white/10 shadow-inner mb-4 flex items-center justify-center transition-colors"
                  style={{ backgroundColor: resultsData[activeResultClient].beforeTone.replace('bg-[', '').replace(']', '') }}
                >
                  <span className="text-xs text-black/60 font-mono tracking-wider font-semibold">Natural Baseline</span>
                </div>
                <p className="text-sm text-white/80 font-medium mt-2">
                  {resultsData[activeResultClient].beforeDesc}
                </p>
              </div>

              {/* Right Side: AFTER */}
              <div className="relative rounded-xl overflow-hidden bg-black/40 border border-amber-500/30 aspect-[3/4] flex flex-col items-center justify-center p-6 text-center">
                <div className="absolute top-4 left-4 bg-[#965c36] px-3 py-1 rounded text-[11px] font-bold tracking-widest uppercase text-white shadow">
                  AFTER
                </div>
                <div className="w-32 h-32 rounded-full border-4 border-amber-300/40 shadow-lg shadow-amber-900/40 mb-4 flex items-center justify-center transition-colors"
                  style={{ backgroundColor: resultsData[activeResultClient].afterTone.replace('bg-[', '').replace(']', '') }}
                >
                  <span className="text-xs text-black/80 font-mono tracking-wider font-bold">Custom Glow</span>
                </div>
                <p className="text-sm text-amber-200/90 font-medium mt-2">
                  {resultsData[activeResultClient].afterDesc}
                </p>
              </div>
            </div>

            {/* Client Note Caption */}
            <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-semibold text-white text-base">
                  {resultsData[activeResultClient].name}
                </span>
                <span className="text-white/40 mx-2">—</span>
                <span className="text-amber-300 text-sm font-medium">
                  {resultsData[activeResultClient].level}
                </span>
                <p className="text-xs text-white/50 mt-1 max-w-xl">
                  {resultsData[activeResultClient].note}
                </p>
              </div>

              <a
                href="https://book.sunstudiotan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#965c36] hover:bg-[#aa6a3e] text-white text-xs font-semibold tracking-wider rounded transition-colors whitespace-nowrap text-center"
              >
                Get This Shade
              </a>
            </div>

            <div className="mt-4 text-[11px] text-white/30 italic text-center">
              *Results may vary based on natural skin undertone and post-care discipline. Real client records shown.
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section id="faq" className="bg-[#faf8f5] text-[#1a1918] py-24 px-6 md:px-12 border-b border-[#ece6de]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1c1a18] tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-[#6b6560] font-light leading-relaxed">
              Everything you need to know before your first spray tan.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-[#ece7df] overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-base md:text-lg text-[#1f1d1a] cursor-pointer hover:text-[#965c36] transition-colors"
                >
                  <span>{item.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#88827c] transition-transform duration-300 shrink-0 ${
                      openFaqIndex === idx ? 'rotate-180 text-[#965c36]' : ''
                    }`} 
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openFaqIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[#66605b] leading-relaxed border-t border-[#f2ece5]">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Clients Say (Reviews) Section */}
      <section id="reviews" className="bg-[#faf8f5] text-[#1a1918] py-24 px-6 md:px-12 border-b border-[#ece6de]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1c1a18] tracking-tight mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base text-[#6b6560] font-light leading-relaxed">
              Real results from real people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-white p-8 rounded-2xl border border-[#e5dfd7] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-500 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-[#47423e] leading-relaxed italic mb-6">
                  "I've been spray tanned dozens of times and this is by far the best. No orange, no streaks, just a perfect natural glow. The BUILD level is my holy grail."
                </p>
              </div>
              <div className="pt-4 border-t border-[#f0eae3] flex items-center justify-between">
                <span className="font-semibold text-sm text-[#1a1918]">Sarah M.</span>
                <span className="text-xs text-[#965c36] font-medium">Verified Client</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-8 rounded-2xl border border-[#e5dfd7] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-500 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-[#47423e] leading-relaxed italic mb-6">
                  "As a redhead who usually turns orange with spray tans, I was nervous. But they matched my undertone perfectly—I looked like I'd been on vacation, not in a booth."
                </p>
              </div>
              <div className="pt-4 border-t border-[#f0eae3] flex items-center justify-between">
                <span className="font-semibold text-sm text-[#1a1918]">Jessica T.</span>
                <span className="text-xs text-[#965c36] font-medium">Verified Client</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-8 rounded-2xl border border-[#e5dfd7] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-500 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-[#47423e] leading-relaxed italic mb-6">
                  "The BRONZED heated application was a game-changer. So comfortable, and the fade was the most even I've ever experienced. Worth every penny."
                </p>
              </div>
              <div className="pt-4 border-t border-[#f0eae3] flex items-center justify-between">
                <span className="font-semibold text-sm text-[#1a1918]">Amanda K.</span>
                <span className="text-xs text-[#965c36] font-medium">Verified Client</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Glow? Call to Action Banner */}
      <section className="bg-[#faf8f5] text-[#1a1918] py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto bg-[#f4ece3] border border-[#e5ded4] rounded-3xl p-10 md:p-14 text-center shadow-sm">
          <h2 className="text-3xl md:text-5xl font-serif font-light text-[#1c1a18] tracking-tight mb-4">
            Ready to glow?
          </h2>
          <p className="text-base text-[#6b6560] font-light leading-relaxed max-w-xl mx-auto mb-8">
            Book your custom airbrush spray tan today and leave looking like you just got back from vacation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="https://book.sunstudiotan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#965c36] hover:bg-[#aa6a3e] text-white text-sm font-semibold tracking-wider rounded transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Your Tan
            </a>
            <a
              href="https://book.sunstudiotan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 border border-[#1a1918] hover:bg-[#1a1918] hover:text-white text-[#1a1918] text-sm font-semibold tracking-wider rounded transition-colors flex items-center justify-center gap-2"
            >
              View Memberships
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <p className="text-xs text-[#8c857f]">
            + $30 annual facility fee applies to memberships
          </p>
        </div>
      </section>
    </div>
  );
}
