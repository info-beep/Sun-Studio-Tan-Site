import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Flame, Sun, Sparkles, BookOpen, Clock, Coffee, AlertCircle, Check, Search, Globe, ExternalLink, RefreshCw } from 'lucide-react';
import { querySearchGrounding, GroundingSource } from '../services/geminiService';

interface RecommendedCombo {
  solutionName: string;
  description: string;
  developmentTime: string;
  intensityScore: string;
  proAdvisor: string;
  boosterMatch: string;
}

export default function CareGuide() {
  const [activeTab, setActiveTab] = useState<'lookbook' | 'pre-tan' | 'post-tan' | 'teeth' | 'intelligence'>('lookbook');

  // Shade matcher inputs
  const [naturalSkin, setNaturalSkin] = useState<string>('fair');
  const [lifestyleGoal, setLifestyleGoal] = useState<string>('vacation');

  const getRecommendation = (): RecommendedCombo => {
    if (naturalSkin === 'fair') {
      if (lifestyleGoal === 'wedding') {
        return {
          solutionName: 'Norvell Venetian One (Ultralight Complex)',
          description: 'A beautiful, delicate, translucent glow that registers exquisitely under flash photography. Contains custom skin-correcting violet pigments to counteract yellow tints.',
          developmentTime: '1 - 1.5 Hours warm rinse',
          intensityScore: '2 / 5 Subtle Radiance',
          proAdvisor: 'Add "Hydra-Recover Prep" booster for soft supple results under heavy silk bridal fabrics.',
          boosterMatch: 'Hydra-Recover Prep'
        };
      } else if (lifestyleGoal === 'vacation') {
        return {
          solutionName: 'Norvell Premium Sunless + VIO-7™ Violet Lock',
          description: 'Warm mediterranean sunset tone designed to withstand chlorine and tropical ambient humidity.',
          developmentTime: '4 - 6 Hours default development',
          intensityScore: '3 / 5 Sun-Kissed',
          proAdvisor: 'Complement with "pH Balance Spray" to assure flawless coverage on joints.',
          boosterMatch: 'pH Balance Spray'
        };
      } else {
        return {
          solutionName: 'Norvell Venetian Glow Light',
          description: 'Classic clean elegance. Imparts a gentle weekend-away radiance without overwhelming natural light undertones.',
          developmentTime: '3 Hours rinse',
          intensityScore: '1.5 / 5 Natural Flush',
          proAdvisor: 'Rinse with body temperature water only for the first wash to safeguard developer.',
          boosterMatch: 'None'
        };
      }
    } else if (naturalSkin === 'medium') {
      if (lifestyleGoal === 'wedding') {
        return {
          solutionName: 'Norvell Venetian Glow Medium',
          description: 'Rich luxurious base matching olive tones. Recreates a natural contouring depth perfect for open-back silhouettes.',
          developmentTime: '3 Hours rinse',
          intensityScore: '3 / 5 Sunburst',
          proAdvisor: 'Perfect for bridal trials 3 days before the ceremony.',
          boosterMatch: 'Dermal Lift Booster'
        };
      } else if (lifestyleGoal === 'vacation') {
        return {
          solutionName: 'Venetian Double Dark (Exotic Intense)',
          description: 'Deep exotic purple-hued formula that mimics the intense bronze hues of the Italian Riviera. Extremely durable.',
          developmentTime: '2.5 Hours rapid rinse',
          intensityScore: '4.5 / 5 Deep Riviera',
          proAdvisor: 'Apply double coating at natural contours (shoulders, collarbone).',
          boosterMatch: 'Express Double Rapid'
        };
      } else {
        return {
          solutionName: 'Signature Norvell Build Formula',
          description: 'Balanced day-to-day glow optimized to look gorgeous under office fluorescent arrays or direct natural elements.',
          developmentTime: '4 Hours classic lock',
          intensityScore: '3 / 5 Office Radiant',
          proAdvisor: 'Moisturize twice daily with high oil-free lotions.',
          boosterMatch: 'pH Balance Spray'
        };
      }
    } else {
      // Deep Skin tone
      if (lifestyleGoal === 'wedding') {
        return {
          solutionName: 'Bespoke Contour Bronze VIP',
          description: 'Adds hyper-glowing highlights on skin ridges (shoulders, clavicle, arms) and provides an evening effect that makes fabrics pop.',
          developmentTime: '3 Hours hydration lock',
          intensityScore: '2.5 / 5 Luminous Highlight',
          proAdvisor: 'Select Valeria Russo as your specialist for precision contour brushwork.',
          boosterMatch: 'Dermal Lift Booster'
        };
      } else if (lifestyleGoal === 'vacation') {
        return {
          solutionName: 'Norvell UBT98 Ultra Bronzed Heated',
          description: 'Maximum density depth. Formulated with intensive hydrating aloe oils that nourish deep pigments in high sunshine conditions.',
          developmentTime: '4 Hours deep bake',
          intensityScore: '5 / 5 Midnight Bronze',
          proAdvisor: 'Avoid petroleum based sunblocks to keep the glow active for up to 10 days.',
          boosterMatch: 'Express Double Rapid'
        };
      } else {
        return {
          solutionName: 'Luminescent Custom Base Spray',
          description: 'An elegant polish that unifies baseline tones and seals pores for an extremely velvety, photo-ready luster.',
          developmentTime: '2 Hours express rinse',
          intensityScore: '3 / 5 Velvet Satin',
          proAdvisor: 'Use our special non-abrasive body washes post-tan.',
          boosterMatch: 'Hydra-Recover Prep'
        };
      }
    }
  };

  const rec = getRecommendation();

  return (
    <div className="py-24 px-6 max-w-6xl mx-auto min-h-screen relative z-20">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-xs tracking-[0.5em] uppercase text-amber-300">Skincare Protocols</h2>
        <h1 className="text-4xl md:text-6xl font-serif italic text-white font-light">The Glow Lookbook & Care Guide</h1>
        <p className="max-w-2xl mx-auto text-sm text-white/50 leading-relaxed font-light">
          An organic tan is a collaborative masterpiece. Follow our curated aesthetic rituals to maintain your luxury radiance indefinitely.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/5 mb-12 justify-center overflow-x-auto gap-2 md:gap-6 text-xs uppercase tracking-[0.2em] font-semibold">
        {[
          { id: 'lookbook', label: 'Shade LOOKBOOK', icon: Sparkles },
          { id: 'pre-tan', label: 'Pre-Tan Ritual', icon: Sun },
          { id: 'post-tan', label: 'Post-Tan Seal', icon: Clock },
          { id: 'teeth', label: 'White Diet Protocol', icon: BookOpen },
          { id: 'intelligence', label: 'Live Weather & Skincare AI', icon: Globe }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 py-4 px-4 border-b-2 transition-all duration-300 whitespace-nowrap
              ${activeTab === tab.id ? 'border-amber-400 text-white font-bold' : 'border-transparent text-white/40 hover:text-white/70'}
            `}
          >
            <tab.icon size={12} className="text-amber-400/70" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Looking Shade Matcher Finder */}
        {activeTab === 'lookbook' && (
          <motion.div
            key="lookbook"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <div className="space-y-8 bg-white/[0.01] border border-white/5 p-8 rounded-sm">
              <h3 className="text-xl font-serif italic text-white flex items-center gap-2">
                <Sparkles size={18} className="text-amber-300" /> Custom Formula Matcher
              </h3>
              <p className="text-xs text-white/40 leading-relaxed">Adjust your baseline skin characteristics and imminent life scenario to reveal the optimal sunless solution and booster mix.</p>

              <div className="space-y-4">
                <label className="text-[10px] tracking-[0.2em] uppercase text-white/50 block font-bold">Your Baseline Skin Tone</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'fair', label: 'Porcelain & Fair' },
                    { id: 'medium', label: 'Warm Olive or Beige' },
                    { id: 'deep', label: 'Deep Rich Melanated' }
                  ].map(x => (
                    <button
                      key={x.id}
                      onClick={() => setNaturalSkin(x.id)}
                      className={`py-3 rounded-sm border uppercase text-[9px] tracking-wider font-mono transition-all
                        ${naturalSkin === x.id ? 'border-white bg-white text-black font-semibold' : 'border-white/5 text-white/40 bg-black/20 hover:border-white/10'}
                      `}
                    >
                      {x.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] tracking-[0.2em] uppercase text-white/50 block font-bold">Imminent Scenario Match</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'wedding', label: 'Bridal' },
                    { id: 'vacation', label: 'Beach/Vacay' },
                    { id: 'daily', label: 'Bespoke Clean' }
                  ].map(x => (
                    <button
                      key={x.id}
                      onClick={() => setLifestyleGoal(x.id)}
                      className={`py-3 rounded-sm border uppercase text-[9px] tracking-wider font-mono transition-all
                        ${lifestyleGoal === x.id ? 'border-white bg-white text-black font-semibold' : 'border-white/5 text-white/40 bg-black/20 hover:border-white/10'}
                      `}
                    >
                      {x.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendation Output Billboard */}
            <div className="relative border border-amber-400/20 bg-gradient-to-br from-amber-950/20 to-black/80 p-8 rounded-sm overflow-hidden flex flex-col justify-between min-h-[400px]">
              {/* Subtle top glare */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 blur-3xl rounded-full"></div>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] tracking-[0.3em] uppercase bg-amber-400/10 text-amber-300 px-3 py-1 font-mono rounded-sm border border-amber-400/25">BESPOKE MATCH</span>
                  <span className="text-white/40 font-mono text-xs">{rec.intensityScore}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-serif italic text-white tracking-wide">{rec.solutionName}</h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light">{rec.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-4 my-2 text-xs">
                  <div>
                    <span className="block text-[9px] text-white/30 tracking-widest font-mono uppercase">Rinse Interval</span>
                    <span className="text-white mt-1 block font-semibold">{rec.developmentTime}</span>
                  </div>
                  <div>
                    <span className="block text-[9px] text-white/30 tracking-widest font-mono uppercase font-semibold">Booster Pair</span>
                    <span className="text-amber-300 mt-1 block font-bold font-mono">{rec.boosterMatch}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 relative z-10">
                <p className="text-xs text-white/50 italic flex gap-2 items-start bg-black/40 border border-white/5 p-4 leading-relaxed rounded-sm font-light">
                  <span className="text-amber-400 text-sm">💡</span>
                  <span><strong>Insider tip:</strong> {rec.proAdvisor}</span>
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Pre-Tan Ritual Checklists */}
        {activeTab === 'pre-tan' && (
          <motion.div
            key="pre-tan"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="p-8 border border-white/5 bg-white/[0.01] rounded-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center font-mono text-xs text-amber-300">24H</span>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white">24 Hours Pre-Session Protocol</h3>
              </div>
              <ul className="space-y-4 text-xs text-white/70 leading-relaxed font-light uppercase tracking-wide">
                <li className="flex gap-3 items-start"><Check size={12} className="text-amber-400 mt-0.5 shrink-0" /> Exfoliate thoroughly with high oil-free mitt or scrub.</li>
                <li className="flex gap-3 items-start"><Check size={12} className="text-amber-400 mt-0.5 shrink-0" /> Complete all shaving and waxing details (allow skin pores to seal).</li>
                <li className="flex gap-3 items-start"><Check size={12} className="text-amber-400 mt-0.5 shrink-0" /> Refrain from using heavily alkaline body washes or bar soaps.</li>
              </ul>
            </div>

            <div className="p-8 border border-white/5 bg-white/[0.01] rounded-sm space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-8 w-8 bg-white/5 border border-white/10 rounded-full flex items-center justify-center font-mono text-xs text-amber-300">02H</span>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white">2 Hours & Arrival Protocol</h3>
              </div>
              <ul className="space-y-4 text-xs text-white/70 leading-relaxed font-light uppercase tracking-wide">
                <li className="flex gap-3 items-start"><Check size={12} className="text-amber-400 mt-0.5 shrink-0" /> Remove all makeup, deodorant, perfume, and moisturizers (creates locks block).</li>
                <li className="flex gap-3 items-start"><Check size={12} className="text-amber-400 mt-0.5 shrink-0" /> Wear loose-fitting, dark, silky clothing and slides to prevent pressure bands.</li>
                <li className="flex gap-3 items-start"><Check size={12} className="text-amber-400 mt-0.5 shrink-0" /> Ask your stylist to apply barrier lotion on dry knuckles or nails.</li>
              </ul>
            </div>
          </motion.div>
        )}

        {/* Post-Tan Seal */}
        {activeTab === 'post-tan' && (
          <motion.div
            key="post-tan"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="p-8 border border-white/5 bg-white/[0.01] rounded-sm max-w-3xl mx-auto space-y-6"
          >
            <h3 className="text-xl font-serif italic text-white flex items-center gap-2">
              <Clock size={18} className="text-amber-300" /> Custom 8-Day Maintenance Schedule
            </h3>
            <p className="text-xs text-white/50 font-light leading-relaxed">
              Your sunless mist binds with amino acids in your outer epidermis. Maximize its molecular lifespan through precise, gentle hygiene protocols:
            </p>

            <div className="space-y-4 pt-4 border-t border-white/5">
              {[
                { period: 'First 2-8 Hours', action: 'Avoid contacts with any liquids, steam, work outs, pet licks, or beauty procedures. Allow deep formula development.' },
                { period: 'The First Shower', action: 'Lukewarm water rinse only. Do NOT use body washes, scrubs, or hair shampoo. Rinse until water runs completely clear, then pat dry.' },
                { period: 'Days 2 through 5', action: 'Moisturize twice daily with high oil-free lotions. Avoid AHA, salicylic acids, alcohol ingredients, or heavy mineral oils which stripped color.' },
                { period: 'Days 6 through 8+ ', action: 'When the tan begins its natural shed, start gentle physical exfoliation to assure an even fade without splotching.' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start text-xs border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  <span className="font-mono text-amber-300 uppercase shrink-0 w-28">{step.period}</span>
                  <p className="text-white/70 leading-relaxed font-light">{step.action}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Teeth Whitening Protocol - White Diet */}
        {activeTab === 'teeth' && (
          <motion.div
            key="teeth"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Safe list */}
            <div className="p-8 border border-white/5 bg-teal-950/5 rounded-sm space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-teal-300 flex items-center gap-2">
                <ShieldCheck size={14} /> The White Diet (Allowed Foods 48h)
              </h3>
              <p className="text-[11px] text-white/40 font-light italic">Your enamel pores remain temporarily expanded and vulnerable after LED light application.</p>
              <ul className="space-y-3 text-xs text-white/70 font-mono">
                <li className="flex gap-3 items-center"><Check size={12} className="text-teal-400" /> Skinless turkey or chicken</li>
                <li className="flex gap-3 items-center"><Check size={12} className="text-teal-400" /> Plain white rice & white pasta</li>
                <li className="flex gap-3 items-center"><Check size={12} className="text-teal-400" /> Skim or whole milk & white cheeses</li>
                <li className="flex gap-3 items-center"><Check size={12} className="text-teal-400" /> Egg whites & white potatoes</li>
                <li className="flex gap-3 items-center"><Check size={12} className="text-teal-400" /> Clear water, club soda or gin/tonic</li>
              </ul>
            </div>

            {/* Danger stain foods */}
            <div className="p-8 border border-white/5 bg-red-950/5 rounded-sm space-y-6">
              <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-red-400 flex items-center gap-2">
                <AlertCircle size={14} /> Warning: High Stain Stains
              </h3>
              <p className="text-[11px] text-white/40 font-light italic">These fluids will stain porous dental structure immediately post-session. Abstain for at least 48 hours.</p>
              <ul className="space-y-3 text-xs text-white/70 font-mono">
                <li className="flex gap-3 items-center"><Coffee size={12} className="text-red-400" /> Black coffee & espresso</li>
                <li className="flex gap-3 items-center"><AlertCircle size={12} className="text-red-400" /> Black teas & red wines</li>
                <li className="flex gap-3 items-center"><AlertCircle size={12} className="text-red-400" /> Soy sauce, ketchup, soy curry</li>
                <li className="flex gap-3 items-center"><AlertCircle size={12} className="text-red-400" /> Dark berries or black chocolates</li>
                <li className="flex gap-3 items-center"><AlertCircle size={12} className="text-red-400" /> Acidic juices or tobacco products</li>
              </ul>
            </div>
          </motion.div>
        )}

        {/* Live Weather & Skincare Intelligence (Google Search Grounding) */}
        {activeTab === 'intelligence' && (
          <motion.div
            key="intelligence"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            <SearchGroundingAdvisor />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SearchGroundingAdvisor() {
  const [prompt, setPrompt] = useState('What is the current UV index, temperature, and humidity forecast in Columbus, Ohio today, and what are the best skin prep steps for a spray tan?');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ text: string; sources: GroundingSource[] } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const QUICK_QUESTIONS = [
    {
      label: '🌤️ Columbus UV & Weather Today',
      q: 'What is the current UV index, temperature, and humidity in Columbus, Ohio today, and how should I adjust my spray tan post-care?'
    },
    {
      label: '🧴 Harmful Lotion Ingredients',
      q: 'Which specific cosmetic ingredients (like mineral oils, sulfates, or alcohols) break down DHA sunless tans prematurely?'
    },
    {
      label: '🏊 Swimming & Chlorine Protection',
      q: 'How does swimming in chlorine or saltwater affect a sunless tan, and what waterproof barrier lotions are recommended?'
    },
    {
      label: '🦷 Food Stain Timelines for Teeth',
      q: 'What are current dental recommendations for consuming coffee or tea after professional LED teeth whitening?'
    }
  ];

  const handleQuery = async (queryText: string) => {
    if (!queryText.trim()) return;
    setIsLoading(true);
    setError(null);

    try {
      const data = await querySearchGrounding(queryText);
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Failed to retrieve live Google Search intelligence.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 bg-stone-950/60 border border-white/10 p-8 md:p-10 rounded-2xl backdrop-blur-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[11px] font-semibold uppercase tracking-widest mb-2">
            <Globe className="w-3.5 h-3.5" />
            <span>Google Search Grounding • Real-Time AI</span>
          </div>
          <h3 className="text-2xl font-serif italic text-white">
            Real-Time Weather, UV &amp; Skincare Intelligence
          </h3>
          <p className="text-xs text-white/50 mt-1 max-w-xl">
            Grounded with live Google Search via gemini-3.5-flash. Get current Columbus weather data, ingredient chemistry, and verified dermatological advice.
          </p>
        </div>
      </div>

      {/* Preset Questions */}
      <div>
        <p className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-3">
          Instant Inquiries:
        </p>
        <div className="flex flex-wrap gap-2">
          {QUICK_QUESTIONS.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setPrompt(item.q);
                handleQuery(item.q);
              }}
              className={`text-xs px-3.5 py-2 rounded-xl border transition-all cursor-pointer ${
                prompt === item.q
                  ? 'bg-amber-400 text-black border-amber-400 font-semibold shadow-md shadow-amber-500/10'
                  : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Query Input */}
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleQuery(prompt)}
          placeholder="Ask any live skincare, weather, or tanning science question..."
          className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-amber-400 transition-colors"
        />

        <button
          type="button"
          onClick={() => handleQuery(prompt)}
          disabled={isLoading}
          className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs rounded-xl transition-all cursor-pointer whitespace-nowrap disabled:opacity-50 flex items-center justify-center gap-2 shrink-0"
        >
          {isLoading ? (
            <>
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
              <span>Searching Web...</span>
            </>
          ) : (
            <>
              <Search className="w-3.5 h-3.5" />
              <span>Search Google</span>
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-950/40 border border-red-500/30 rounded-xl text-red-300 text-xs">
          {error}
        </div>
      )}

      {/* Answer & Grounding Sources */}
      {result && (
        <div className="pt-6 border-t border-white/10 space-y-6">
          <div className="prose prose-invert max-w-none text-xs md:text-sm text-white/80 leading-relaxed font-light whitespace-pre-line bg-black/40 p-6 rounded-xl border border-white/5">
            {result.text}
          </div>

          {/* Critical Grounding Web Sources List */}
          {result.sources && result.sources.length > 0 && (
            <div className="mt-4">
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-amber-300 mb-3 flex items-center gap-2">
                <Globe className="w-3.5 h-3.5" /> Verified Google Search Web Sources
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {result.sources.map((source, sIdx) => (
                  <a
                    key={sIdx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-amber-400/40 transition-all group flex items-center justify-between gap-3"
                  >
                    <span className="text-xs text-white/80 font-medium group-hover:text-amber-300 transition-colors truncate">
                      {source.title}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
