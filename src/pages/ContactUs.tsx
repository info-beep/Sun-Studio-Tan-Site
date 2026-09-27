import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'tanning',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      // Clean up form
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'tanning',
        message: ''
      });
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-12 pb-24 px-6">
      {/* Page Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <span className="text-[10px] tracking-[0.5em] uppercase text-amber-300 font-bold mb-3 block">GET IN TOUCH</span>
        <h1 className="text-4xl md:text-6xl font-serif italic mb-6">Connect With Our Studio</h1>
        <p className="text-white/40 font-light text-md max-w-xl mx-auto leading-relaxed">
          Questions about our unlimited memberships or custom shade contouring? Contact us directly or send a brief message.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 items-start">
        {/* Contact Details cards */}
        <div className="lg:col-span-1 space-y-6">
          <div className="p-8 border border-white/5 bg-white/[0.01]">
            <div className="text-amber-300 mb-6"><Phone size={24} strokeWidth={1.5} /></div>
            <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2 font-bold font-mono">Call or Text</h3>
            <a href="tel:6143330051" className="text-xl font-light hover:text-amber-300 transition-colors">614.333.0051</a>
            <p className="text-[10px] text-white/30 tracking-wider uppercase mt-4">Average response: Under 5 mins</p>
          </div>

          <div className="p-8 border border-white/5 bg-white/[0.01]">
            <div className="text-amber-300 mb-6"><MapPin size={24} strokeWidth={1.5} /></div>
            <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2 font-bold font-mono">Location</h3>
            <p className="text-xl font-light">612 N High St</p>
            <p className="text-white/50 text-xs font-light mt-1">Columbus, OH 43215</p>
            <p className="text-[10px] text-white/30 tracking-wider uppercase mt-4">Short North District</p>
          </div>

          <div className="p-8 border border-white/5 bg-white/[0.01]">
            <div className="text-amber-300 mb-6"><Clock size={24} strokeWidth={1.5} /></div>
            <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2 font-bold font-mono">Operating Hours</h3>
            <div className="text-sm font-light space-y-1.5 mt-2">
              <div className="flex justify-between">
                <span className="text-white/60">Monday - Sunday</span>
                <span className="font-mono">8:00 AM - 8:00 PM</span>
              </div>
            </div>
            <p className="text-[10px] text-amber-400 font-medium tracking-wider uppercase mt-6">Strictly By Appointment Only • No Walk-Ins</p>
          </div>
        </div>

        {/* Message Form (2 columns) */}
        <div className="lg:col-span-2 p-8 md:p-12 border border-white/5 bg-white/[0.01] rounded-sm relative">
          <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-6">
            <MessageSquare size={20} className="text-amber-300" />
            <h2 className="text-xl font-serif italic text-white">Send an Inquiry Message</h2>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-16 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-amber-400/10 text-amber-300 flex items-center justify-center mx-auto border border-amber-400/20">
                <CheckCircle size={32} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif italic text-white">Message Safely Transmitted</h3>
                <p className="text-xs text-white/55 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. A certified Sun Studio concierge will review your inquiry and follow up shortly.
                </p>
              </div>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-2 border border-white/10 hover:border-white/20 text-[10px] tracking-widest uppercase font-bold"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] tracking-widest uppercase text-white/50 block font-bold font-mono">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Charlotte Rose"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm py-4 px-4 text-xs font-mono tracking-wider focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] tracking-widest uppercase text-white/50 block font-bold font-mono">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. charlotte@domain.com"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm py-4 px-4 text-xs font-mono tracking-wider focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-[10px] tracking-widest uppercase text-white/50 block font-bold font-mono">Mobile Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. (614) 555-0199"
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm py-4 px-4 text-xs font-mono tracking-wider focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="interest" className="text-[10px] tracking-widest uppercase text-white/50 block font-bold font-mono">Service of Interest</label>
                  <select 
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm py-4 px-4 text-xs font-mono tracking-wider text-white/70 focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="tanning">Bespoke Airbrush Spray Tanning</option>
                    <option value="whitening">Advanced LED Teeth Whitening</option>
                    <option value="membership">Unlimited Membership Plans</option>
                    <option value="other">Other / Group Party inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] tracking-widest uppercase text-white/50 block font-bold font-mono">Your Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  required 
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="How can we assist you?"
                  className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm py-4 px-4 text-xs font-mono tracking-wider focus:outline-none focus:border-amber-400 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full py-4 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <>
                    <span className="animate-pulse">Processing Transmission...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={12} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Google Maps Grounded Studio & Neighborhood Navigator */}
      <StudioMapsGuide />
    </div>
  );
}

function StudioMapsGuide() {
  const [query, setQuery] = useState('Best parking garages and meter spots near Sun Studio Tan at 612 N High St, Columbus, OH');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ text: string; places: { title: string; url: string; snippet?: string }[] } | null>(null);
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [locationStatus, setLocationStatus] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const PRESETS = [
    { label: '🚗 Studio Parking Guide', q: 'Where are the best parking garages and meter parking options near Sun Studio Tan at 612 N High St, Columbus, OH?' },
    { label: '☕ Nearby Coffee & Brunch', q: 'What are the top rated coffee shops and cafes within a 5-minute walk from 612 N High St in the Short North Arts District?' },
    { label: '🚶 Directions & Transit', q: 'How do I get to Sun Studio Tan at 612 N High St, Columbus, OH from downtown Columbus or OSU campus?' },
    { label: '🛍️ Short North Boutiques', q: 'What luxury boutiques and lifestyle spots are near 612 N High St in Columbus, OH?' }
  ];

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus('Geolocation is not supported by your browser.');
      return;
    }
    setLocationStatus('Locating coordinates...');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLocationStatus(`Location detected (${pos.coords.latitude.toFixed(3)}, ${pos.coords.longitude.toFixed(3)})`);
      },
      () => {
        setLocationStatus('Location access declined. Using Short North center.');
      },
      { timeout: 8000 }
    );
  };

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return;
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/maps-grounding', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: searchQuery,
          latitude: userCoords?.lat,
          longitude: userCoords?.lng
        })
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || 'Failed to retrieve Google Maps information.');
      }

      const data = await res.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || 'Error communicating with Google Maps service.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto mt-24 pt-16 border-t border-white/10">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[11px] font-semibold uppercase tracking-widest mb-3">
          <MapPin className="w-3.5 h-3.5" />
          <span>Google Maps Grounding • Live Studio Explorer</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-3">
          Explore Sun Studio &amp; Short North District
        </h2>
        <p className="text-white/50 text-xs md:text-sm leading-relaxed">
          Powered by real-time Google Maps data and gemini-3.5-flash. Discover verified studio parking, walking directions, and premier dining or shopping spots right around 612 N High St.
        </p>
      </div>

      <div className="bg-stone-950/60 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-sm">
        {/* Preset Queries */}
        <div className="flex flex-wrap gap-2 mb-6">
          {PRESETS.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setQuery(p.q);
                handleSearch(p.q);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide border transition-all cursor-pointer ${
                query === p.q
                  ? 'bg-amber-400 text-black border-amber-400'
                  : 'bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
            placeholder="Ask anything about our Columbus studio, parking, or nearby destinations..."
            className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-amber-400 transition-colors"
          />

          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
            <button
              type="button"
              onClick={handleGetLocation}
              title="Use current GPS location"
              className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white/70 hover:text-amber-300 text-xs flex items-center justify-center transition-colors cursor-pointer"
            >
              <MapPin className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => handleSearch(query)}
              disabled={loading}
              className="w-full sm:w-auto px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black font-bold uppercase tracking-wider text-xs rounded-xl transition-all cursor-pointer whitespace-nowrap disabled:opacity-50"
            >
              {loading ? 'Searching Maps...' : 'Search Maps'}
            </button>
          </div>
        </div>

        {locationStatus && (
          <p className="text-[11px] text-amber-300/80 font-mono mt-2">{locationStatus}</p>
        )}

        {error && (
          <p className="text-xs text-red-400 mt-4">{error}</p>
        )}

        {/* Search Results Display */}
        {result && (
          <div className="mt-8 pt-8 border-t border-white/10 space-y-6">
            <div className="prose prose-invert max-w-none text-xs md:text-sm text-white/80 leading-relaxed font-light whitespace-pre-line">
              {result.text}
            </div>

            {/* Google Maps Place Links (Strict Requirement) */}
            {result.places && result.places.length > 0 && (
              <div className="mt-6">
                <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-amber-300 mb-3 flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" /> Verified Google Maps Locations &amp; Directions
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {result.places.map((place, pIdx) => (
                    <a
                      key={pIdx}
                      href={place.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-amber-400/40 transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-xs font-semibold text-white group-hover:text-amber-300 transition-colors">
                            {place.title}
                          </h4>
                          <span className="text-[10px] text-amber-400 group-hover:translate-x-0.5 transition-transform">↗</span>
                        </div>
                        {place.snippet && (
                          <p className="text-[11px] text-white/50 mt-1.5 line-clamp-2 italic">
                            "{place.snippet}"
                          </p>
                        )}
                      </div>
                      <span className="text-[10px] text-amber-300/70 font-mono mt-3 block">
                        Open in Google Maps
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
