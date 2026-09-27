import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  ChevronDown, 
  Phone, 
  Calendar, 
  Sparkles, 
  Check, 
  X,
  ExternalLink,
  Flame,
  Droplets,
  Gem,
  MapPin
} from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'tanning' | 'whitening' | 'memberships' | 'prep' | 'booking';
  question: string;
  answer: string;
}

interface CategoryConfig {
  key: 'all' | 'tanning' | 'whitening' | 'memberships' | 'prep' | 'booking';
  label: string;
  icon?: string;
  sectionTitle?: string;
  sectionIcon?: React.ReactNode;
}

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqData: FAQItem[] = [
    // 1. Spray Tanning
    {
      id: 'tan-levels',
      category: 'tanning',
      question: "What spray tan levels do you offer, and what's the difference?",
      answer: "We offer three customized levels: Base ($45), Build ($50), and Bronzed ($60). Base gives a subtle, natural, sun-kissed tone ideal for fair skin or first-timers. Build provides a medium, radiant bronze with deeper undertones. Bronzed is our premier heated warm-mist airbrush experience delivering rich, multi-dimensional Mediterranean color with skin-firming botanicals. We also offer Rapid Rinse options for custom cure times (1–3 hours)."
    },
    {
      id: 'tan-duration',
      category: 'tanning',
      question: "How long does a spray tan last?",
      answer: "A Sun Studio spray tan typically lasts 7 to 10 days with proper prep and aftercare. Longevity depends on your skin's natural exfoliation cycle and hydration levels. Daily moisturizing with an oil-free lotion, avoiding long hot baths or saunas, and patting dry with a towel will maximize your color."
    },
    {
      id: 'tan-orange-streaky',
      category: 'tanning',
      question: "Will my spray tan look orange or streaky?",
      answer: "Never! We exclusively use premium Norvell® and Venetian® formulas featuring patented VIO-7™ anti-orange color technology. This unique blend of violet and brown bronzers neutralizes unwanted warm or brassy tones, mimicking natural sun exposure. Because every tan is hand-applied by our certified master technicians using warm-mist airbrush equipment, your finish will be seamless, smooth, and streak-free."
    },
    {
      id: 'tan-develop-time',
      category: 'tanning',
      question: "How quickly does the tan develop? When do I see my full color?",
      answer: "With our Standard solution, initial bronzer is visible immediately, and the active DHA develops fully over 8 to 24 hours before your first warm-water rinse. With our Rapid Rinse formula, you can shower in just 1 to 3 hours (1 hour for light, 2 hours for medium, 3 hours for deep), and the color will continue to develop and peak at 24 hours."
    },
    {
      id: 'tan-safety',
      category: 'tanning',
      question: "Is spray tanning safe? What's in the solution?",
      answer: "Yes, 100% safe! Our solutions use organically derived Dihydroxyacetone (DHA), an FDA-approved sugar cane derivative that reacts naturally with the amino acids in the top layer of dead skin cells. All solutions are 100% vegan, paraben-free, gluten-free, sulfate-free, non-comedogenic, and cruelty-free, infused with skin-nourishing vitamins C and E, green tea extract, and aloe vera."
    },
    {
      id: 'tan-pregnant',
      category: 'tanning',
      question: "Can I get a spray tan if I'm pregnant?",
      answer: "Spray tanning is generally considered safe during pregnancy because DHA does not penetrate past the topmost dead layer of the skin (stratum corneum) into the bloodstream. However, because hormonal shifts can make skin more sensitive or alter how color develops, we always recommend consulting your OB/GYN first. We provide nose filters, lip balm, and good air ventilation for maximum comfort."
    },
    {
      id: 'tan-wear',
      category: 'tanning',
      question: "What should I wear to my spray tan appointment?",
      answer: "Wear or bring dark, loose-fitting clothing (such as an oversized t-shirt, loose sweatpants, or a breezy sundress) and slide-on sandals or flip-flops. Avoid tight leggings, bras with underwires, socks, or jeans immediately after your appointment to prevent friction lines while the bronzer sets."
    },

    // 2. Teeth Whitening
    {
      id: 'teeth-system',
      category: 'whitening',
      question: "What teeth whitening system do you use?",
      answer: "We use the industry-leading BleachBright® LED Teeth Whitening system. This dental-grade system combines professional carbamide peroxide bleaching gel with a specialized cold blue LED light spectrum that activates oxygen molecules to safely lift years of coffee, tea, wine, and food stains in just 20 to 30 minutes."
    },
    {
      id: 'teeth-cost',
      category: 'whitening',
      question: "How much does teeth whitening cost?",
      answer: "A single professional LED Teeth Whitening session is $79. We also offer combo packages when paired with a spray tan for $110, as well as monthly maintenance add-on memberships for $39/month which include a touch-up session every single month."
    },
    {
      id: 'teeth-sensitivity',
      category: 'whitening',
      question: "Will teeth whitening hurt or cause sensitivity?",
      answer: "Our BleachBright formula is specially designed for ultra-low or zero sensitivity, utilizing potassium nitrate and gentle mineralizing agents. The vast majority of our clients experience zero pain or tingling. If you have naturally sensitive teeth, you can brush with a potassium-based toothpaste for two days prior, and avoid very hot or ice-cold beverages for 24 hours afterward."
    },
    {
      id: 'teeth-duration',
      category: 'whitening',
      question: "How long do teeth whitening results last?",
      answer: "Results typically last 3 to 6 months, and most clients brighten by 2 to 8 shades in a single session! Longevity depends on your dietary habits (coffee, red wine, dark berries, smoking). You can prolong results with at-home BleachBright maintenance foam or our monthly touch-up membership."
    },
    {
      id: 'teeth-tan-combo',
      category: 'whitening',
      question: "Can I combine teeth whitening with a spray tan in the same visit?",
      answer: "Yes! This is our most popular package: 'The Glow & Smile Duo.' We perform your 20-minute teeth whitening treatment first so your teeth are brilliant and dry, followed immediately by your custom warm-mist airbrush tan. You leave completely radiant from head to toe in under 45 minutes."
    },

    // 3. Memberships & Pricing
    {
      id: 'mem-offer',
      category: 'memberships',
      question: "What memberships do you offer?",
      answer: "We offer three convenient monthly unlimited memberships: Base ($79/mo), Build ($99/mo), and our premier Bronzed ($129/mo) which includes heated airbrush tans, custom undertone balancing, and complimentary prep sprays. All memberships operate on a flexible month-to-month basis with no long-term contracts."
    },
    {
      id: 'mem-spray-save',
      category: 'memberships',
      question: "What's the Spray & Save membership — is it worth it?",
      answer: "If you get sprayed two or more times per month, our Spray & Save membership saves you over 40% compared to single-session pricing. Members also receive 15% off all retail skincare and aftercare products, priority weekend booking windows, and discounted teeth whitening touch-ups."
    },
    {
      id: 'mem-packages',
      category: 'memberships',
      question: "Do you offer packages if I don't want a monthly membership?",
      answer: "Yes! We offer 3-session and 5-session tan packs that never expire, as well as our popular Bridal Glow Packages ($125 including trial and wedding tan) and student discount passes. Check our Pricing page for our complete tier breakdown."
    },
    {
      id: 'mem-cancel-pause',
      category: 'memberships',
      question: "Can I cancel or pause my membership?",
      answer: "Yes. You can pause or freeze your membership for up to 3 months for travel or winter breaks with zero penalty. Cancellations simply require 7 days written or digital notice prior to your next billing date. We pride ourselves on zero sneaky fees or lock-ins."
    },
    {
      id: 'mem-gift-cards',
      category: 'memberships',
      question: "Do you offer gift cards?",
      answer: "Yes! We offer digital and physical gift cards in any custom denomination, redeemable for custom spray tans, teeth whitening, retail skincare products, or memberships. They make the perfect gift for brides, birthdays, graduations, and holidays."
    },

    // 4. Prep & Aftercare
    {
      id: 'prep-before',
      category: 'prep',
      question: "How should I prepare for my spray tan?",
      answer: "Exfoliate 18–24 hours before your appointment using an oil-free scrub or exfoliating mitt. Shave or wax at least 24 hours prior. Arrive with clean, bare skin—free of lotions, perfumes, deodorant, and makeup. Wear loose, dark clothing and open-toed shoes."
    },
    {
      id: 'prep-aftercare',
      category: 'prep',
      question: "How do I take care of my tan after the appointment?",
      answer: "Wait the recommended time before rinsing (8–24 hours for standard, 1–3 hours for rapid). For your first rinse, use warm water only—no soap, loofahs, or scrubbing. Pat dry gently with a towel. Starting on day 2, moisturize twice daily with an alcohol-free, mineral-oil-free lotion, and drink plenty of water to keep your skin hydrated."
    },
    {
      id: 'prep-workout',
      category: 'prep',
      question: "How soon after a spray tan can I work out?",
      answer: "You must avoid working out, heavy sweating, or sauna sessions until after your first post-tan shower (at least 8 hours for standard, or after your designated rinse for rapid). Perspiration before the tan cures can cause streakiness or uneven development."
    },
    {
      id: 'prep-swim',
      category: 'prep',
      question: "Can I swim after a spray tan?",
      answer: "Wait until at least 24 hours after your session to swim. Keep in mind that chlorine in pools and hot tubs, as well as saltwater, acts as an exfoliant and will accelerate fading. If swimming, apply a waterproof sunscreen or barrier lotion beforehand and rinse with fresh water immediately after."
    },

    // 5. Booking & Studio Info
    {
      id: 'book-location-hours',
      category: 'booking',
      question: "Where are you located and what are your hours?",
      answer: "We are located at 612 North High Street, Columbus, Ohio 43215, in the vibrant Short North Arts District. We are open Monday through Friday from 10:00 AM to 8:00 PM, Saturday from 9:00 AM to 6:00 PM, and Sunday from 11:00 AM to 5:00 PM by appointment."
    },
    {
      id: 'book-how-to',
      category: 'booking',
      question: "How do I book an appointment?",
      answer: "Booking is fast and easy through our online calendar at sunstudiotan.com/book or directly at book.sunstudiotan.com, or by clicking the 'Book' button on our website. You can also call or text our studio directly at 614-333-0051 for assistance or group inquiries."
    },
    {
      id: 'book-advance',
      category: 'booking',
      question: "How far in advance should I book?",
      answer: "We recommend booking 3 to 7 days in advance, especially for Thursday and Friday evening appointments, weekends, and wedding or prom seasons, as peak time slots fill quickly."
    },
    {
      id: 'book-cancellation',
      category: 'booking',
      question: "What is your cancellation policy?",
      answer: "We ask for at least 24 hours notice to cancel or reschedule your appointment so that we may offer the slot to clients on our waitlist. Cancellations made with less than 24 hours notice or no-shows may be subject to a 50% service fee."
    },
    {
      id: 'book-parking',
      category: 'booking',
      question: "Do you have parking nearby?",
      answer: "Yes! We provide complimentary 2-hour parking validation for the Joseph Garage located right next door on Russell & High Street. Ample Short North street meter parking is also available via the ParkColumbus app."
    },
    {
      id: 'book-skin-tones',
      category: 'booking',
      question: "Do you have experience with all skin tones?",
      answer: "Yes, absolutely! Our master airbrush artists are certified in Fitzpatrick skin typing and color theory. We customize undertones (violet, olive, warm caramel) for fair, medium, olive, and deep rich skin tones to enhance your natural beauty with zero ashiness or unnatural contrast."
    }
  ];

  const categories: CategoryConfig[] = [
    { key: 'all', label: 'All Questions' },
    { 
      key: 'tanning', 
      label: 'Spray Tanning', 
      sectionTitle: 'Spray Tanning',
      sectionIcon: (
        <div className="w-6 h-6 rounded bg-[#422e16] border border-[#a37233]/40 flex items-center justify-center text-[#e5b364]">
          <Flame size={14} />
        </div>
      )
    },
    { 
      key: 'whitening', 
      label: 'Teeth Whitening', 
      sectionTitle: 'Teeth Whitening',
      sectionIcon: (
        <div className="w-6 h-6 rounded bg-[#422e16] border border-[#a37233]/40 flex items-center justify-center text-[#e5b364]">
          <Sparkles size={14} />
        </div>
      )
    },
    { 
      key: 'memberships', 
      label: 'Memberships', 
      sectionTitle: 'Memberships & Pricing',
      sectionIcon: (
        <div className="w-6 h-6 rounded bg-[#422e16] border border-[#a37233]/40 flex items-center justify-center text-[#5dade2]">
          <Gem size={14} />
        </div>
      )
    },
    { 
      key: 'prep', 
      label: 'Prep & Aftercare', 
      sectionTitle: 'Prep & Aftercare',
      sectionIcon: (
        <div className="w-6 h-6 rounded bg-[#422e16] border border-[#a37233]/40 flex items-center justify-center text-[#e5b364]">
          <Droplets size={14} />
        </div>
      )
    },
    { 
      key: 'booking', 
      label: 'Booking & Studio', 
      sectionTitle: 'Booking & Studio Info',
      sectionIcon: (
        <div className="w-6 h-6 rounded bg-[#422e16] border border-[#a37233]/40 flex items-center justify-center text-[#e74c3c]">
          <MapPin size={14} />
        </div>
      )
    }
  ];

  // Filter questions based on category and search query
  const filteredQuestions = useMemo(() => {
    return faqData.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = 
        searchQuery.trim() === '' || 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqData, selectedCategory, searchQuery]);

  // Group filtered questions by category for section rendering
  const activeSections = useMemo(() => {
    const sectionKeys: ('tanning' | 'whitening' | 'memberships' | 'prep' | 'booking')[] = [
      'tanning', 
      'whitening', 
      'memberships', 
      'prep', 
      'booking'
    ];

    return sectionKeys
      .map(catKey => {
        const config = categories.find(c => c.key === catKey);
        const items = filteredQuestions.filter(q => q.category === catKey);
        return {
          key: catKey,
          title: config?.sectionTitle || '',
          icon: config?.sectionIcon,
          items
        };
      })
      .filter(sec => sec.items.length > 0);
  }, [filteredQuestions, categories]);

  return (
    <div className="min-h-screen bg-[#0d0a08] text-white font-sans selection:bg-amber-900/60 selection:text-amber-200">
      
      {/* 1. HERO SECTION */}
      <section className="pt-12 pb-8 sm:pt-16 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center relative z-10">
        
        {/* Sun Studio Tan Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1c1510] border border-[#7d5626]/40 text-[#cda35e] text-xs uppercase tracking-[0.25em] font-semibold mb-6">
          <span>✦</span>
          <span>SUN STUDIO TAN</span>
          <span>✦</span>
        </div>

        {/* Main Headings */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1] mb-4">
          <span className="text-white font-normal">Got </span>
          <span className="text-[#caa055] font-serif italic font-normal">Questions?</span>
          <br className="hidden sm:inline" />
          <span className="text-white font-normal block sm:inline sm:ml-3">We've Got Answers.</span>
        </h1>

        <p className="text-stone-400 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed mt-2 mb-8">
          Everything you need to know about spray tanning, teeth whitening, memberships, and getting the most out of your glow.
        </p>

        {/* Search Input Bar */}
        <div className="max-w-xl mx-auto relative mb-8">
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions... (e.g. how long does a tan last)"
              className="w-full pl-5 pr-12 py-3.5 rounded-full bg-[#191410] border border-stone-800 text-stone-200 placeholder-stone-500 text-xs sm:text-sm focus:outline-hidden focus:border-[#caa055] focus:ring-1 focus:ring-[#caa055]/50 transition-all shadow-inner"
            />
            <div className="absolute right-4 text-stone-400 pointer-events-none">
              <Search size={16} />
            </div>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-10 text-stone-500 hover:text-stone-300 p-1"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-3xl mx-auto">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-1.5 sm:px-4.5 sm:py-2 rounded-full text-xs font-medium tracking-wide transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-[#291e13] text-[#caa055] border border-[#caa055] shadow-xs'
                    : 'bg-[#181310] text-stone-400 border border-stone-800 hover:border-stone-700 hover:text-stone-300'
                }`}
              >
                {cat.key !== 'all' && <span className="text-[#caa055] text-[10px]">✦</span>}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

      </section>

      {/* 2. ACCORDION QUESTION LIST BY CATEGORY */}
      <section className="pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {activeSections.length === 0 ? (
          <div className="text-center py-16 bg-[#14100c] rounded-2xl border border-stone-800 p-8">
            <p className="text-lg font-serif text-stone-300">No questions found matching "{searchQuery}"</p>
            <p className="text-xs text-stone-500 mt-2">Try searching for keywords like "rinse", "orange", "pregnant", or "parking".</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-5 px-5 py-2 bg-[#2a2016] text-[#caa055] border border-[#caa055]/50 rounded-full text-xs font-medium hover:bg-[#382b1e]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {activeSections.map((section) => (
              <div key={section.key} className="space-y-3.5">
                
                {/* Section Header: Icon + Gold Serif Title + Fine Line */}
                <div className="flex items-center gap-3 pt-4 pb-2 border-b border-stone-800/80">
                  {section.icon}
                  <h2 className="text-xl sm:text-2xl font-serif text-[#caa055] font-normal tracking-wide">
                    {section.title}
                  </h2>
                </div>

                {/* Question Accordion Items */}
                <div className="space-y-2.5">
                  {section.items.map((item) => {
                    const isOpen = !!openItems[item.id];
                    return (
                      <div
                        key={item.id}
                        className="rounded-xl bg-[#15110d] border border-stone-800/90 overflow-hidden transition-colors hover:border-stone-700/80"
                      >
                        <button
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer select-none group"
                        >
                          <span className="text-xs sm:text-sm font-light text-stone-200 group-hover:text-amber-200 transition-colors">
                            {item.question}
                          </span>
                          
                          <div className={`w-6 h-6 rounded-md bg-[#1f1914] border border-stone-800 flex items-center justify-center text-stone-400 group-hover:text-amber-300 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-amber-300' : ''}`}>
                            <ChevronDown size={14} />
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-stone-400 font-light leading-relaxed border-t border-stone-800/50">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>

              </div>
            ))}
          </div>
        )}

        {/* 3. STILL HAVE QUESTIONS? LET'S TALK CARD */}
        <div className="mt-16 rounded-3xl bg-gradient-to-b from-[#18130e] to-[#120e0a] border border-[#5d4424]/40 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-xl mx-auto space-y-4">
            
            <h3 className="text-3xl sm:text-4xl font-serif tracking-tight">
              <span className="text-white font-normal">Still Have Questions? </span>
              <span className="text-[#caa055] font-serif italic font-normal">Let's Talk.</span>
            </h3>

            <p className="text-stone-400 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
              Our team is happy to help you choose the right service, answer any questions, or just chat about getting your best glow.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="tel:6143330051"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#caa055] hover:bg-[#b58b44] text-stone-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Phone size={14} />
                <span>CALL OR TEXT US</span>
              </a>

              <a
                href="https://book.sunstudiotan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#1f1812] hover:bg-[#2c2219] text-[#e0b973] border border-[#7a592e]/60 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Calendar size={14} />
                <span>BOOK AN APPOINTMENT</span>
              </a>
            </div>

          </div>
        </div>

        {/* 4. ADDRESS / SUBTITLE DETAILS */}
        <div className="mt-12 text-center space-y-1">
          <p className="text-xs text-stone-400 tracking-wide font-light">
            Sun Studio Tan · 612 North High Street, Columbus, Ohio · <a href="tel:6143330051" className="hover:text-amber-300 underline font-medium">614-333-0051</a>
          </p>
          <p className="text-[11px] text-stone-500 tracking-wider uppercase font-light">
            Spray Tanning &amp; Teeth Whitening in the Short North
          </p>
        </div>

      </section>

      {/* 5. BOTTOM EDITORIAL / SEO SECTION (Light Ivory Background) */}
      <section className="bg-[#f7f5ef] text-stone-900 border-t border-stone-200 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Brand Logo Display */}
          <div className="md:col-span-4 lg:col-span-3">
            <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 tracking-tight leading-none">
              Sun Studio<br />Tan
            </h2>
          </div>

          {/* Right Column: SEO & Explanatory Copy */}
          <div className="md:col-span-8 lg:col-span-9 space-y-4">
            <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900">
              Spray Tanning &amp; Teeth Whitening FAQ — Sun Studio Tan Columbus
            </h3>

            <p className="text-stone-800 text-xs sm:text-sm font-serif font-medium leading-relaxed">
              FAQ - Find answers to all your tanning questions at Sun Studio Tan — from spray tan prep and aftercare to our Norvell products and membership details. Expert tips for a flawless, natural glow every time.
            </p>

            <p className="text-stone-600 text-xs sm:text-sm font-light leading-relaxed">
              Uncover the secrets to a sun-kissed glow at Sun Studio Tan. Our salon offers top-notch spray tanning services that will leave you looking bronzed and beautiful. Additionally, we provide professional teeth whitening treatments to enhance your smile. Have questions about our services? Find answers to frequently asked questions about Sun Studio Tan, spray tanning, and teeth whitening here.
            </p>

            <div className="pt-6 flex justify-end">
              <a
                href="https://book.sunstudiotan.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-stone-500 hover:text-stone-800 transition-colors underline"
              >
                Terms &amp; Conditions
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
