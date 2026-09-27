import React from 'react';
import { motion } from 'motion/react';
import { 
  Sun, 
  Droplets, 
  Sparkles, 
  Leaf, 
  Heart, 
  Shield, 
  RotateCw, 
  Zap, 
  Smile 
} from 'lucide-react';

export default function Wellness() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-[#fdfcf9] text-[#1f1e1d] font-sans antialiased">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 text-center overflow-hidden">
        {/* Subtle background warm ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Subtitle */}
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] md:text-xs font-semibold tracking-[0.28em] text-[#b36b2b] uppercase mb-4"
          >
            SUN STUDIO TAN
          </motion.span>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center justify-center gap-3 text-5xl sm:text-6xl md:text-7xl tracking-tight mb-8"
          >
            <span className="font-serif font-light text-[#1f1e1d] relative">
              Wellness
              <span className="absolute left-0 -bottom-1.5 w-full h-[2px] bg-[#d39e5c]/70 rounded-full" />
            </span>
            <span className="font-sans font-bold text-[#1f1e1d]">
              Boosts
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#5a544f] max-w-2xl font-light leading-relaxed mb-10"
          >
            Upgrade every spray session with our premium add-ons designed to enhance your tan and nourish your skin from within.
          </motion.p>

          {/* Quick-Jump Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3.5 mb-14"
          >
            {/* GLOW Pill */}
            <button
              type="button"
              onClick={() => scrollTo('glow')}
              className="px-8 py-2.5 rounded-full bg-[#fbe3c6] hover:bg-[#f6d6b1] text-[#71441a] text-xs font-bold tracking-[0.15em] uppercase shadow-sm hover:shadow transition-all cursor-pointer"
            >
              GLOW
            </button>

            {/* RECOVER Pill */}
            <button
              type="button"
              onClick={() => scrollTo('recover')}
              className="px-8 py-2.5 rounded-full bg-[#c6f0f8] hover:bg-[#b0e8f3] text-[#135d6e] text-xs font-bold tracking-[0.15em] uppercase shadow-sm hover:shadow transition-all cursor-pointer"
            >
              RECOVER
            </button>

            {/* LIFT Pill */}
            <button
              type="button"
              onClick={() => scrollTo('lift')}
              className="px-8 py-2.5 rounded-full bg-[#eee8e2] hover:bg-[#e2d9d1] text-[#554e48] text-xs font-bold tracking-[0.15em] uppercase shadow-sm hover:shadow transition-all cursor-pointer"
            >
              LIFT
            </button>
          </motion.div>

          {/* Scroll Mouse Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-5 h-9 rounded-full border-2 border-[#9b938c]/40 flex items-start justify-center p-1.5">
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 bg-[#9b938c]/70 rounded-full" 
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1: GLOW (DHA Boost) */}
      <section 
        id="glow" 
        className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#fffaf0] via-[#fdf2df] to-[#fbf5e8] border-t border-[#f0e4d2]"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Heading */}
          <div className="mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#8f582b] inline-block tracking-tight">
              <span className="relative font-normal">
                GLOW
                <span className="absolute left-0 -bottom-1.5 w-full h-[2.5px] bg-[#b87640] rounded-full" />
              </span>
              <span className="font-sans font-light text-2xl sm:text-3xl md:text-4xl text-[#9f6a3d] ml-3">
                (DHA Boost)
              </span>
            </h2>
          </div>

          {/* Subtitle / Description */}
          <p className="max-w-2xl mx-auto text-[#7d5028] text-base md:text-lg font-normal leading-relaxed mb-16">
            Combines DHA with Erythrulose to help develop a richer, longer-lasting tan while enhancing skin moisturization for smoother, more even color.
          </p>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-4xl mx-auto">
            {/* Pillar 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border border-[#edd7c2] flex items-center justify-center text-[#965c36] mb-6">
                <Sun className="w-7 h-7 stroke-[1.5]" />
              </div>
              <p className="text-sm sm:text-base text-[#674424] leading-relaxed max-w-xs">
                Develops a richer, more intense tan that lasts significantly longer
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border border-[#edd7c2] flex items-center justify-center text-[#965c36] mb-6">
                <Droplets className="w-7 h-7 stroke-[1.5]" />
              </div>
              <p className="text-sm sm:text-base text-[#674424] leading-relaxed max-w-xs">
                Enhanced moisturization keeps skin supple and prevents dryness
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border border-[#edd7c2] flex items-center justify-center text-[#965c36] mb-6">
                <Sparkles className="w-7 h-7 stroke-[1.5]" />
              </div>
              <p className="text-sm sm:text-base text-[#674424] leading-relaxed max-w-xs">
                Promotes smoother, more even color distribution across the skin
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: RECOVER (Vitamin Bath) */}
      <section 
        id="recover" 
        className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#ebf8fa] via-[#e2f4f7] to-[#e8f7fa] border-t border-[#d3ecf1]"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Heading */}
          <div className="mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#1b6271] inline-block tracking-tight">
              <span className="relative font-normal">
                RECOVER
                <span className="absolute left-0 -bottom-1.5 w-full h-[2.5px] bg-[#1b6271] rounded-full" />
              </span>
              <span className="font-sans font-light text-2xl sm:text-3xl md:text-4xl text-[#1f7385] ml-3">
                (Vitamin Bath)
              </span>
            </h2>
          </div>

          {/* Subtitle / Description */}
          <p className="max-w-2xl mx-auto text-[#185562] text-base md:text-lg font-normal leading-relaxed mb-16">
            An amino acid and vitamin-enriched mist that hydrates and revitalizes the skin so it looks brighter, feels more supple, and is better equipped to handle environmental stressors.
          </p>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-4xl mx-auto">
            {/* Pillar 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border border-[#c6e6ee] flex items-center justify-center text-[#1b6271] mb-6">
                <Leaf className="w-7 h-7 stroke-[1.5]" />
              </div>
              <p className="text-sm sm:text-base text-[#185562] leading-relaxed max-w-xs">
                Fermented hyaluronic acid fractions specifically tailored to optimize skincare performance
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border border-[#c6e6ee] flex items-center justify-center text-[#1b6271] mb-6">
                <Heart className="w-7 h-7 stroke-[1.5]" />
              </div>
              <p className="text-sm sm:text-base text-[#185562] leading-relaxed max-w-xs">
                Enhances overall product performance, offering moisture and improved efficacy
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border border-[#c6e6ee] flex items-center justify-center text-[#1b6271] mb-6">
                <Shield className="w-7 h-7 stroke-[1.5]" />
              </div>
              <p className="text-sm sm:text-base text-[#185562] leading-relaxed max-w-xs">
                Hydrates, moisturizes, soothes, and repairs the skin barrier for radiant glow
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: LIFT (Collagen Boost) */}
      <section 
        id="lift" 
        className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#fdfcf9] via-[#f7f3ed] to-[#f4eee6] border-t border-[#ebe4dc]"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Heading */}
          <div className="mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#2a2622] inline-block tracking-tight">
              <span className="relative font-normal">
                LIFT
                <span className="absolute left-0 -bottom-1.5 w-full h-[2.5px] bg-[#4a423b] rounded-full" />
              </span>
              <span className="font-sans font-light text-2xl sm:text-3xl md:text-4xl text-[#5b5148] ml-3">
                (Collagen Boost)
              </span>
            </h2>
          </div>

          {/* Subtitle / Description */}
          <p className="max-w-2xl mx-auto text-[#514840] text-base md:text-lg font-normal leading-relaxed mb-16">
            Designed to support collagen production and healthy cell renewal, helping to smooth the skin's surface and diminish the appearance of fine lines, wrinkles, and imperfections.
          </p>

          {/* 3 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 max-w-4xl mx-auto">
            {/* Pillar 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border border-[#ded5cb] flex items-center justify-center text-[#4a423b] mb-6">
                <RotateCw className="w-7 h-7 stroke-[1.5]" />
              </div>
              <p className="text-sm sm:text-base text-[#4a423b] leading-relaxed max-w-xs">
                Restores skin elasticity and promotes healthy cellular renewal
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border border-[#ded5cb] flex items-center justify-center text-[#4a423b] mb-6">
                <Zap className="w-7 h-7 stroke-[1.5]" />
              </div>
              <p className="text-sm sm:text-base text-[#4a423b] leading-relaxed max-w-xs">
                Stimulates natural collagen production at the cellular level
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md border border-[#ded5cb] flex items-center justify-center text-[#4a423b] mb-6">
                <Smile className="w-7 h-7 stroke-[1.5]" />
              </div>
              <p className="text-sm sm:text-base text-[#4a423b] leading-relaxed max-w-xs">
                Reduces wrinkles and skin imperfections for a firmer, lifted appearance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-[#ece7df] text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1a1816] tracking-tight mb-4">
            Ready to Elevate Your Glow?
          </h2>
          <p className="text-base sm:text-lg text-[#615952] font-light max-w-xl leading-relaxed mb-10">
            Add any of our Wellness Boosts to your next spray tan session and experience the difference premium skincare makes.
          </p>

          <a
            href="https://book.sunstudiotan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full bg-gradient-to-r from-[#e77a16] to-[#ec8b29] hover:from-[#d66f11] hover:to-[#df7f1f] text-white font-semibold text-sm tracking-wider uppercase shadow-xl shadow-orange-500/25 hover:shadow-orange-500/35 transition-all duration-300"
          >
            Book Your Session
          </a>
        </div>
      </section>
    </div>
  );
}
