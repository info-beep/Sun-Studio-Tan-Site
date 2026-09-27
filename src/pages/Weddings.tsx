import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Sparkles, 
  Heart, 
  Check, 
  Clock, 
  ShieldCheck, 
  Droplets, 
  Users, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  X, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  Phone, 
  MapPin, 
  ArrowRight,
  Palette,
  ClipboardList
} from 'lucide-react';
import { Page } from '../types';

interface WeddingsProps {
  onNavigate?: (page: Page) => void;
}

export default function Weddings({ onNavigate }: WeddingsProps) {
  const [showConsultModal, setShowConsultModal] = useState(false);
  const [consultSubmitted, setConsultSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    brideName: '',
    email: '',
    phone: '',
    weddingDate: '',
    partySize: 'bride-only',
    trialPreferredDate: '',
    notes: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultSubmitted(true);
    setTimeout(() => {
      // Auto close after success
    }, 4000);
  };

  const weddingFaqs = [
    {
      q: "Will the spray tan rub off onto my white wedding dress?",
      a: "No! At Sun Studio Tan, we use professional, rapid-curing formulations paired with warm-mist heated airbrush technology. Once you take your initial rinse post-application (recommended 1-2 days before the wedding), the cosmetic bronzer guide is washed away, leaving only the pure, set DHA reaction in your skin that will not transfer onto delicate bridal fabrics or lace."
    },
    {
      q: "When is the ideal time to schedule my bridal trial spray tan?",
      a: "We recommend scheduling your trial 2 to 6 weeks before the wedding day—ideally right before your bridal shower, bachelorette weekend, or hair & makeup trial! This allows you to preview the exact tone, wear it with your beauty trial, and fine-tune your desired shade intensity for the big day."
    },
    {
      q: "When should I get my final wedding-week spray tan?",
      a: "Your final bridal tan should take place 1 to 2 days prior to the wedding (typically Wednesday or Thursday for a Saturday wedding). Complete all other beauty treatments first: waxing, manicures, pedicures, and massages should be done 24-48 hours before your tan."
    },
    {
      q: "Can the groom and wedding party get sprayed too?",
      a: "Absolutely! We customize individual shades for every person—from a subtle, healthy photo-ready glow for the groom to rich bronze tones for the bridesmaids and mothers of the bride and groom. Ask about our bridal party group perks for 4 or more appointments."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-900 font-sans selection:bg-amber-100 selection:text-stone-900 pb-20">
      
      {/* 1. HERO SECTION: Bridal + Wedding Spray Tans */}
      <section className="relative overflow-hidden bg-[#fbf9f6] border-b border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Heading & Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 xl:col-span-5 space-y-6 z-10"
            >
              <div className="inline-block">
                <span className="text-stone-600 text-sm sm:text-base font-normal tracking-wide">
                  Wedding Spray Tan in Columbus
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.05]">
                <span className="text-stone-900 block font-normal">Bridal + Wedding</span>
                <span className="text-[#c68a4c] block font-normal italic sm:not-italic mt-1">Spray Tans</span>
              </h1>

              <p className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-xl">
                Ditch the booths + the beds and get sprayed by hand instead – a flawlessly applied glow to compliment your true skin tone for one of the most special and beautiful days of your life.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <button
                  type="button"
                  onClick={() => setShowConsultModal(true)}
                  className="px-8 py-3.5 bg-white rounded-xl shadow-[0_4px_20px_rgba(40,30,20,0.08)] border border-stone-200/80 text-[#b87c3f] hover:text-[#97602a] hover:bg-stone-50 transition-all font-medium text-sm sm:text-base tracking-wide cursor-pointer flex items-center gap-2 group"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight size={16} className="text-[#c68a4c] group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="https://book.sunstudiotan.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3.5 rounded-xl border border-stone-300 text-stone-700 hover:text-stone-900 hover:border-stone-400 bg-stone-100/60 transition-all text-sm font-medium tracking-wide flex items-center gap-2"
                >
                  <span>Direct Booking</span>
                  <ExternalLink size={14} className="text-stone-500" />
                </a>
              </div>

              <div className="pt-4 flex items-center gap-6 text-xs text-stone-500 font-light border-t border-stone-200/80">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={16} className="text-amber-600" />
                  <span>Zero White Dress Transfer</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles size={16} className="text-amber-600" />
                  <span>Heated Airbrush Comfort</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: High-End Bridal Hero Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:col-span-6 xl:col-span-7 flex justify-center lg:justify-end relative"
            >
              <div className="relative w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-stone-200/90 aspect-[4/3] sm:aspect-[16/11] bg-stone-100">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
                  alt="Radiant bride with flawless natural bridal tan in lace wedding gown with veil"
                  className="w-full h-full object-cover object-[center_20%]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Soft ambient gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-stone-900/10 pointer-events-none"></div>

                {/* Overlaid Pill Badge */}
                <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 shadow-lg flex items-center gap-2">
                  <Sparkles size={14} className="text-[#c68a4c]" />
                  <span className="text-xs font-serif italic text-stone-800 font-medium">Custom photo-ready bridal tone</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. SUBHEADER BANNER: "Find the perfect spray tan near you for your big day." */}
      <section className="bg-[#e9eff5] border-y border-[#d3dfea] py-3.5 px-4 text-center">
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById('wedding-glow-package');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-[#204060] font-serif italic text-base sm:text-lg underline underline-offset-4 hover:text-[#b87c3f] transition-colors cursor-pointer"
        >
          “Find the perfect spray tan near you for your big day.”
        </button>
      </section>

      {/* 3. WEDDING WEEK GLOW PACKAGE BOARD / POSTER */}
      <section id="wedding-glow-package" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Outer Silk/Satin Fabric Ruffle Backdrop Simulation */}
        <div className="relative p-3 sm:p-6 lg:p-10 rounded-3xl bg-gradient-to-br from-[#e4dfd7] via-[#efebe5] to-[#d8d2c8] shadow-[0_20px_60px_rgba(40,30,20,0.12)] border border-[#d6cfc3]">
          
          {/* Outer Black Border */}
          <div className="border-2 border-stone-800 p-2 sm:p-3 rounded-2xl bg-[#231F20]/5">
            
            {/* Inner Black Border Frame */}
            <div className="border border-stone-800 rounded-xl bg-gradient-to-b from-[#fdfbf7] via-[#f7f2ea] to-[#f4eee4] p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-inner">
              
              {/* Subtle Warm Bokeh Light Accents */}
              <div className="absolute -top-16 -left-16 w-56 h-56 bg-amber-200/30 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute top-1/2 -right-16 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl pointer-events-none"></div>

              {/* Header: Sunburst & Title */}
              <div className="text-center max-w-2xl mx-auto relative z-10 mb-8 sm:mb-12">
                
                {/* Sun Studio Tan Sunburst Vector Graphic */}
                <div className="flex flex-col items-center justify-center mb-1">
                  <div className="w-16 h-8 flex items-end justify-center overflow-hidden mb-1">
                    <svg viewBox="0 0 100 50" className="w-16 h-8 text-[#b88640] stroke-current fill-none stroke-[1.5]">
                      <path d="M 15,50 A 35,35 0 0 1 85,50" />
                      <line x1="50" y1="50" x2="50" y2="10" />
                      <line x1="50" y1="50" x2="25" y2="18" />
                      <line x1="50" y1="50" x2="75" y2="18" />
                      <line x1="50" y1="50" x2="10" y2="35" />
                      <line x1="50" y1="50" x2="90" y2="35" />
                      <circle cx="50" cy="50" r="18" className="fill-[#b88640]/20" />
                    </svg>
                  </div>
                  <span className="text-[11px] sm:text-xs tracking-[0.35em] text-[#8e682e] uppercase font-serif font-medium">
                    SUN STUDIO TAN
                  </span>
                </div>

                {/* Wedding Week (Flowing Calligraphic Script) */}
                <h3 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic text-[#a37233] font-normal leading-tight tracking-wide mb-1">
                  Wedding Week
                </h3>

                {/* GLOW PACKAGE (Bold Serif) */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif uppercase tracking-[0.18em] text-stone-900 font-bold mb-6">
                  GLOW PACKAGE
                </h2>

                {/* Golden Badge: $125 Bride Package */}
                <div className="inline-flex items-center gap-3 px-8 py-3 rounded-lg bg-gradient-to-r from-[#b37833] via-[#caa055] to-[#a36e2f] text-white shadow-md border border-[#8a5b23]/30">
                  <span className="text-2xl sm:text-3xl font-serif italic font-bold tracking-tight">
                    $125
                  </span>
                  <span className="text-lg sm:text-2xl font-serif italic tracking-wide font-medium">
                    Bride Package
                  </span>
                  <div className="flex items-center text-amber-200 ml-1">
                    <Sparkles size={20} fill="currentColor" />
                  </div>
                </div>

                {/* Description of the Heated Airbrush */}
                <div className="mt-6 space-y-1">
                  <p className="text-sm sm:text-base font-serif font-bold uppercase tracking-wider text-[#8e642f]">
                    SUN STUDIO TAN BRONZED ( HEATED ):
                  </p>
                  <p className="text-stone-700 text-sm sm:text-base font-light italic">
                    Warm-mist, fully customized airbrush tan for a photo-ready glow.
                  </p>
                </div>

                {/* Appointment Only Banner */}
                <div className="mt-4 inline-flex items-center gap-2 text-stone-800 text-xs sm:text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                    <Calendar size={12} />
                  </div>
                  <span>By appointment only:</span>
                  <a
                    href="https://book.sunstudiotan.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#966324] hover:underline font-semibold"
                  >
                    sunstudiotan.com/book
                  </a>
                </div>

              </div>

              {/* Main Content Grid: Left (Includes list) + Center (Recommended Timeline) + Right (Bride Photo) */}
              <div className="grid lg:grid-cols-12 gap-8 items-center pt-6 border-t border-amber-900/15 relative z-10">
                
                {/* Column 1: Includes (5-8 items with circular gold icons) */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl sm:text-3xl font-serif italic text-[#9b6c2c]">
                      Includes:
                    </span>
                    <Heart size={16} className="text-[#a87431] fill-[#a87431]/20 stroke-current" />
                  </div>

                  <div className="space-y-3.5">
                    {/* Item 1 */}
                    <div className="flex items-center gap-3.5 bg-white/70 backdrop-blur-xs p-3 rounded-xl border border-amber-900/10 shadow-xs">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#caa055] to-[#f4d28d] flex items-center justify-center text-stone-900 shrink-0 shadow-xs">
                        <Sparkles size={18} className="text-stone-900" />
                      </div>
                      <span className="text-stone-800 text-sm font-serif font-medium">
                        One &ldquo;Bronzed&rdquo; bridal trial heated spray tan
                      </span>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center gap-3.5 bg-white/70 backdrop-blur-xs p-3 rounded-xl border border-amber-900/10 shadow-xs">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#caa055] to-[#f4d28d] flex items-center justify-center text-stone-900 shrink-0 shadow-xs">
                        <Users size={18} className="text-stone-900" />
                      </div>
                      <span className="text-stone-800 text-sm font-serif font-medium">
                        One final wedding-week custom airbrush tan
                      </span>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center gap-3.5 bg-white/70 backdrop-blur-xs p-3 rounded-xl border border-amber-900/10 shadow-xs">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#caa055] to-[#f4d28d] flex items-center justify-center text-stone-900 shrink-0 shadow-xs">
                        <Palette size={18} className="text-stone-900" />
                      </div>
                      <span className="text-stone-800 text-sm font-serif font-medium">
                        Personalized shade matching
                      </span>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-center gap-3.5 bg-white/70 backdrop-blur-xs p-3 rounded-xl border border-amber-900/10 shadow-xs">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#caa055] to-[#f4d28d] flex items-center justify-center text-stone-900 shrink-0 shadow-xs">
                        <ClipboardList size={18} className="text-stone-900" />
                      </div>
                      <span className="text-stone-800 text-sm font-serif font-medium">
                        Wedding-day prep timeline
                      </span>
                    </div>

                    {/* Item 5 */}
                    <div className="flex items-center gap-3.5 bg-white/70 backdrop-blur-xs p-3 rounded-xl border border-amber-900/10 shadow-xs">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#caa055] to-[#f4d28d] flex items-center justify-center text-stone-900 shrink-0 shadow-xs">
                        <Droplets size={18} className="text-stone-900" />
                      </div>
                      <span className="text-stone-800 text-sm font-serif font-medium">
                        Aftercare plan for long-lasting color
                      </span>
                    </div>
                  </div>
                </div>

                {/* Column 2: Recommended Timeline Arched Card */}
                <div className="lg:col-span-3 flex justify-center">
                  <div className="w-full max-w-[260px] bg-[#f4ebe0] border border-[#d2be9f] rounded-3xl p-6 text-center shadow-md space-y-4">
                    <div className="w-8 h-8 mx-auto rounded-full bg-gradient-to-tr from-[#b87d37] to-[#e4bc75] flex items-center justify-center text-white shadow-xs">
                      <Heart size={14} fill="currentColor" />
                    </div>

                    <h4 className="font-serif italic text-xl sm:text-2xl text-[#8d5e23] font-medium leading-snug">
                      Recommended timeline:
                    </h4>

                    <div className="text-xs text-amber-800 font-serif italic">♡</div>

                    {/* Step 1 */}
                    <div className="space-y-1.5">
                      <div className="w-9 h-9 mx-auto rounded-full bg-gradient-to-tr from-[#caa055] to-[#f4d28d] flex items-center justify-center text-stone-900 shadow-xs">
                        <Calendar size={16} />
                      </div>
                      <p className="text-xs text-stone-700 font-serif">Book your trial</p>
                      <p className="text-base sm:text-lg font-serif font-bold text-stone-900 leading-none">
                        2–6 WEEKS
                      </p>
                      <p className="text-xs text-stone-600 font-serif">before the wedding</p>
                    </div>

                    <div className="text-xs text-amber-800 font-serif italic">♡</div>

                    {/* Step 2 */}
                    <div className="space-y-1.5">
                      <div className="w-9 h-9 mx-auto rounded-full bg-gradient-to-tr from-[#caa055] to-[#f4d28d] flex items-center justify-center text-stone-900 shadow-xs">
                        <Calendar size={16} />
                      </div>
                      <p className="text-xs text-stone-700 font-serif">and your final bridal tan</p>
                      <p className="text-base sm:text-lg font-serif font-bold text-stone-900 leading-none">
                        1–2 DAYS
                      </p>
                      <p className="text-xs text-stone-600 font-serif">before the wedding day.</p>
                    </div>
                  </div>
                </div>

                {/* Column 3: Bride Photo in Backless Dress with Floral Bouquet */}
                <div className="lg:col-span-4 flex justify-center">
                  <div className="relative w-full max-w-[320px] aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-2 border-stone-800/20 bg-stone-100">
                    <img
                      src="https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=1200&q=80"
                      alt="Bride in backless wedding gown with bouquet showcasing flawless tan on back and shoulders"
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-3 inset-x-3 text-center">
                      <span className="text-[11px] font-serif italic text-white drop-shadow-md">
                        Flawless back &amp; décolletage radiance
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom CTA within package */}
              <div className="mt-10 pt-8 border-t border-amber-900/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-serif font-semibold text-stone-900">
                    Ready to book your Wedding Week Glow Package?
                  </p>
                  <p className="text-xs text-stone-600">
                    Limited weekend bridal slots available. We recommend reserving your date in advance.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowConsultModal(true)}
                    className="px-6 py-2.5 rounded-lg border border-amber-600/40 text-stone-800 hover:bg-amber-50 text-xs font-semibold tracking-wider uppercase transition-colors"
                  >
                    Ask a Question
                  </button>
                  <a
                    href="https://book.sunstudiotan.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-lg bg-stone-900 hover:bg-[#b87c3f] text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm flex items-center gap-1.5"
                  >
                    <span>Reserve Package</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. BRIDAL PARTY & MAID OF HONOR GROUP PERKS */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl border border-stone-200/90 p-8 sm:p-10 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#b87c3f] font-bold font-sans">
                Bridal Parties &amp; Groups
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-semibold">
                Bringing the Bridesmaids &amp; Mom?
              </h3>
              <p className="text-stone-600 text-sm sm:text-base font-light leading-relaxed">
                Enjoy our private Columbus studio experience together! We offer custom group booking windows for parties of 4 or more so everyone receives personalized shade matching and a camera-ready glow.
              </p>
              <ul className="grid sm:grid-cols-2 gap-2 text-xs text-stone-700 pt-2 font-medium">
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#c68a4c]" />
                  <span>Complimentary studio refreshments</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#c68a4c]" />
                  <span>Custom shade tailored for each bridesmaid</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#c68a4c]" />
                  <span>Special discount for parties of 4+</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check size={14} className="text-[#c68a4c]" />
                  <span>Complimentary 2-hr parking at Joseph Garage</span>
                </li>
              </ul>
            </div>

            <div className="text-center md:border-l md:border-stone-200 md:pl-8 space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-[#b87c3f]">
                <Users size={24} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Inquire for Groups</p>
                <p className="text-lg font-serif font-bold text-stone-900 mt-1">Bridal Squad Glow</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setFormData(prev => ({ ...prev, partySize: 'party-4-plus' }));
                  setShowConsultModal(true);
                }}
                className="w-full py-2.5 px-4 bg-[#b87c3f] hover:bg-[#97602a] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
              >
                Inquire Group Booking
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BRIDAL TANNING FREQUENTLY ASKED QUESTIONS */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-[#b87c3f] font-bold font-sans">
            Wedding FAQs
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 font-semibold mt-1">
            Frequently Asked Bridal Questions
          </h3>
          <p className="text-stone-600 text-sm font-light mt-2">
            Everything you need to know about preparing your skin for the wedding day.
          </p>
        </div>

        <div className="space-y-3">
          {weddingFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={faq.q}
                className="bg-white rounded-xl border border-stone-200/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-serif text-stone-900 text-base font-medium">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 shrink-0">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-stone-600 text-sm font-light leading-relaxed border-t border-stone-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. BOTTOM FOOTER LINK */}
      <div className="mt-16 text-center border-t border-stone-200/60 pt-8">
        <a
          href="https://book.sunstudiotan.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-stone-500 hover:text-stone-800 transition-colors underline"
        >
          Terms &amp; Conditions
        </a>
      </div>

      {/* 7. BRIDAL CONSULTATION & INQUIRY MODAL */}
      <AnimatePresence>
        {showConsultModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowConsultModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#fdfbf7] rounded-2xl shadow-2xl border border-stone-200 overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-stone-900 to-stone-800 p-6 text-white relative">
                <button
                  type="button"
                  onClick={() => setShowConsultModal(false)}
                  className="absolute top-5 right-5 text-stone-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="flex items-center gap-2 text-amber-400 text-xs uppercase tracking-widest font-semibold mb-1">
                  <Sparkles size={14} />
                  <span>Sun Studio Tan • Bridal Suite</span>
                </div>
                <h3 className="text-2xl font-serif font-medium text-white">
                  Schedule Bridal Consultation
                </h3>
                <p className="text-stone-300 text-xs font-light mt-1">
                  Tell us about your wedding date and glow vision, or book your trial directly.
                </p>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {consultSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-2xl font-serif text-stone-900">Thank You, Bride-to-Be!</h4>
                    <p className="text-stone-600 text-sm font-light max-w-sm mx-auto">
                      Joey and our studio team have received your bridal inquiry. We will contact you at <strong>{formData.phone || formData.email}</strong> to finalize your timeline and reserve your trial.
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setShowConsultModal(false);
                          setConsultSubmitted(false);
                        }}
                        className="px-6 py-2.5 bg-stone-900 text-white rounded-lg text-xs font-semibold uppercase tracking-wider"
                      >
                        Close Window
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1">
                        Bride's Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.brideName}
                        onChange={(e) => setFormData({ ...formData, brideName: e.target.value })}
                        placeholder="e.g. Emma Johnson"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="emma@example.com"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(614) 555-0192"
                          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1">
                          Wedding Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.weddingDate}
                          onChange={(e) => setFormData({ ...formData, weddingDate: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1">
                          Bridal Party Size
                        </label>
                        <select
                          value={formData.partySize}
                          onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                        >
                          <option value="bride-only">Bride Only ($125 Package)</option>
                          <option value="bride-groom">Bride + Groom</option>
                          <option value="party-3-to-5">Bride + 2–4 Bridesmaids</option>
                          <option value="party-4-plus">Full Bridal Party (5+ guests)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-stone-700 mb-1">
                        Questions, Skin Concerns, or Preferred Trial Date
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us if you have sensitive skin, your dress style, or upcoming bachelorette/shower dates..."
                        className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 bg-white text-stone-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-amber-500"
                      />
                    </div>

                    <div className="pt-2 space-y-3">
                      <button
                        type="submit"
                        className="w-full py-3 bg-stone-900 hover:bg-[#b87c3f] text-white rounded-lg text-sm font-semibold uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send size={16} />
                        <span>Submit Bridal Inquiry</span>
                      </button>

                      <div className="text-center">
                        <span className="text-xs text-stone-500">or prefer to choose your exact time slot right now?</span>
                        <a
                          href="https://book.sunstudiotan.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-xs font-semibold text-[#b87c3f] hover:underline mt-1"
                        >
                          Open Online Booking Calendar →
                        </a>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
