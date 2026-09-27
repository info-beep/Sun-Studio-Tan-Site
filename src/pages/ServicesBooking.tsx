import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Calendar, Clock, Sparkles, User, ShieldAlert, ChevronRight, ChevronLeft, Trash2, ArrowRight, Database, ExternalLink, Link2, HelpCircle } from 'lucide-react';
import { Service, Addon, Specialist, Appointment } from '../types';

const SERVICES: Service[] = [
  { id: 'tan-base', name: 'Artisanal Base Tan', price: 42, duration: '20 mins', description: 'Classic golden-bronze Norvell application tailored for light-to-medium default tones.', category: 'tanning' },
  { id: 'tan-build', name: 'Premium Build Tan', price: 52, duration: '25 mins', description: 'Anti-orange VIO-7™ Venetian solution crafted for deep exotic hues.', category: 'tanning' },
  { id: 'tan-bronze', name: 'VIP Bronzed Heated Tan', price: 62, duration: '30 mins', description: 'Heated 98°F luxury micro-mist experience with longest-lasting fade.', category: 'tanning' },
  { id: 'white-express', name: 'Express Whitening LED', price: 139, duration: '30 mins', description: 'Professional Bleach Bright system brightening smile up to 4 shades.', category: 'whitening' },
  { id: 'white-triple', name: 'Signature Whitening Session', price: 299, duration: '60 mins', description: 'Full power session for immediate results of up to 8 shades dynamic lift.', category: 'whitening' },
];

const ADDONS: Addon[] = [
  { id: 'add-express', name: 'Express Double Rapid', price: 9, description: 'Rinse in just 2 hours instead of 8 hours.' },
  { id: 'add-lift', name: 'Dermal Lift Booster', price: 7, description: 'Skin-firming and anti-aging additive.' },
  { id: 'add-recover', name: 'Hydra-Recover Prep', price: 7, description: 'Ultra-moisturizing lock pre-treatment.' },
  { id: 'add-balance', name: 'pH Balance Spray', price: 7, description: 'Eliminates dry skin spots for zero streaks.' },
];

const SPECIALISTS: Specialist[] = [
  { id: 'sp-lorena', name: 'Lorena Sinclair', role: 'Master Esthetician & Founder', rating: 4.9, imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200', bio: '20 years of bespoke tanning mastery. Trusted by Ohio\'s elite looks.' },
  { id: 'sp-marcus', name: 'Marcus Sterling', role: 'Senior Whitening Specialist', rating: 4.8, imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200', bio: 'LED dental cosmetics expert with 8+ years refining radiant smiles.' },
  { id: 'sp-valeria', name: 'Valeria Russo', role: 'Tanning & Contour Artist', rating: 5.0, imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200', bio: 'Specialist in custom muscle definition contouring and micro-shadow details.' },
];

const TIME_SLOTS = [
  '09:00 AM', '10:30 AM', '12:00 PM', '01:30 PM', '03:00 PM', '04:30 PM', '06:00 PM'
];

interface ServicesBookingProps {
  onBookingSuccess: () => void;
}

export default function ServicesBooking({ onBookingSuccess }: ServicesBookingProps) {
  // Booking modes: 'bespoke' (custom local UX with skin formulation) or 'portal' (Live Sync Database Integration)
  const [bookingMode, setBookingMode] = useState<'bespoke' | 'portal'>('bespoke');
  const [bookingUrl, setBookingUrl] = useState<string>(() => {
    const saved = localStorage.getItem('sun_studio_booking_url');
    if (!saved || saved.includes('sunstudiotan') || saved.includes('vagaro')) {
      return 'https://book.sunstudiotan.com/';
    }
    return saved;
  });
  const [isSaved, setIsSaved] = useState(false);

  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('2026-06-05');
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  // Skin consult state
  const [skinType, setSkinType] = useState<string>('medium');
  const [desiredIntensity, setDesiredIntensity] = useState<string>('radiant-medium');
  const [sensitivity, setSensitivity] = useState<boolean>(false);

  const saveBookingSettings = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('sun_studio_booking_url', bookingUrl);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const toggleAddon = (addon: Addon) => {
    if (selectedAddons.some(a => a.id === addon.id)) {
      setSelectedAddons(selectedAddons.filter(a => a.id !== addon.id));
    } else {
      setSelectedAddons([...selectedAddons, addon]);
    }
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    // Auto-select match specialist default type if needed
    if (service.category === 'whitening') {
      setSelectedSpecialist(SPECIALISTS.find(s => s.id === 'sp-marcus') || SPECIALISTS[0]);
    } else {
      setSelectedSpecialist(SPECIALISTS.find(s => s.id === 'sp-lorena') || SPECIALISTS[0]);
    }
  };

  const calculateTotal = () => {
    if (!selectedService) return 0;
    const addonsTotal = selectedAddons.reduce((sum, item) => sum + item.price, 0);
    return selectedService.price + addonsTotal;
  };

  const handleSubmitBooking = () => {
    if (!selectedService || !selectedSpecialist || !selectedTime) return;

    const newAppointment: Appointment = {
      id: `APT-${Math.random().toString(36).substring(2, 9).toUpperCase()}`,
      service: selectedService,
      addons: selectedAddons,
      specialist: selectedSpecialist,
      date: selectedDate,
      time: selectedTime,
      clientNotes: {
        skinType,
        desiredIntensity,
        sensitivity,
      },
      totalPrice: calculateTotal(),
      createdAt: new Date().toISOString(),
      status: 'upcoming'
    };

    // Retrieve and append to localStorage
    const existing = localStorage.getItem('sun_studio_appointments');
    const appointmentsList = existing ? JSON.parse(existing) : [];
    appointmentsList.unshift(newAppointment);
    localStorage.setItem('sun_studio_appointments', JSON.stringify(appointmentsList));

    // Update user profile points and visits count
    const profileRaw = localStorage.getItem('sun_studio_profile');
    if (profileRaw) {
      const p = JSON.parse(profileRaw);
      p.loyaltyPoints = (p.loyaltyPoints || 0) + Math.round(newAppointment.totalPrice * 1.5);
      p.visitsCount = (p.visitsCount || 0) + 1;
      localStorage.setItem('sun_studio_profile', JSON.stringify(p));
    }

    setStep(6); // Go to receipt screen
  };

  // Helper calendar renderer
  const renderCalendar = () => {
    const daysInJune = 30;
    const days = [];
    for (let i = 1; i <= daysInJune; i++) {
      const dateStr = `2026-06-${i < 10 ? '0' + i : i}`;
      const isPast = i < 4; // Current date is 2026-06-04
      const isToday = i === 4;
      const isSelected = selectedDate === dateStr;

      days.push(
        <button
          key={i}
          disabled={isPast}
          onClick={() => setSelectedDate(dateStr)}
          className={`h-11 rounded-sm border flex flex-col items-center justify-center text-xs tracking-wider relative transition-all duration-300
            ${isPast ? 'text-white/10 border-transparent cursor-not-allowed' : ''}
            ${isToday ? 'border-amber-400/50 text-amber-400 font-bold' : 'border-white/5'}
            ${isSelected ? 'bg-white text-black font-semibold border-white scale-105 shadow-lg' : 'hover:border-white/20 hover:bg-white/5'}
          `}
        >
          <span>{i}</span>
          {isToday && <span className="absolute bottom-1 w-1 h-1 rounded-full bg-amber-400"></span>}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="py-24 px-6 max-w-6xl mx-auto min-h-[80vh] relative z-20">
      
      {/* Live Engine vs Custom Selection Header */}
      <div className="mb-12 p-1 bg-white/[0.02] border border-white/5 rounded-sm flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex w-full sm:w-auto">
          <button
            onClick={() => setBookingMode('bespoke')}
            className={`flex-grow sm:flex-grow-0 py-3.5 px-6 text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 rounded-sm ${
              bookingMode === 'bespoke'
                ? 'bg-white text-black'
                : 'text-white/50 hover:text-white'
            }`}
          >
            <Sparkles size={14} />
            <span>Consulting & Formula Designer</span>
          </button>
          <button
            onClick={() => setBookingMode('portal')}
            className={`flex-grow sm:flex-grow-0 py-3.5 px-6 text-xs uppercase tracking-widest font-semibold transition-all flex items-center justify-center gap-2 rounded-sm ${
              bookingMode === 'portal'
                ? 'bg-amber-400 text-black font-bold'
                : 'text-white/50 hover:text-white'
            }`}
          >
            <Database size={14} />
            <span>Live Online Booking</span>
          </button>
        </div>
        <div className="px-4 text-[10px] font-mono text-white/40 uppercase tracking-wider text-center sm:text-right font-semibold">
          {bookingMode === 'portal' ? (
            <span className="text-amber-300 animate-pulse">● Direct Booking Connection Enabled</span>
          ) : (
            <span>Self-Guided pH formulation</span>
          )}
        </div>
      </div>

      {bookingMode === 'portal' ? (
        <motion.div
          key="portal-mode"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          {/* Quick instructions and settings sync box */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 border border-white/5 bg-white/[0.01] p-8 space-y-6">
              <div>
                <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-amber-350 block mb-2">CLOUD RESERVATION ENGINE</span>
                <h3 className="text-xl font-serif italic text-white">How This Sync Works</h3>
              </div>
              <p className="text-xs text-white/55 leading-relaxed font-light">
                Our online reservation engine operates as your master salon calendar:
              </p>
              <ul className="text-white/50 font-light space-y-2.5 list-disc pl-4 text-xs">
                <li>All scheduled appointments update your master portal instantly.</li>
                <li>Your real-time specialist calendars are updated automatically.</li>
                <li>Customer accounts and payment processing remain stored securely.</li>
              </ul>

              {/* Dynamic URL Configuration Box */}
              <form onSubmit={saveBookingSettings} className="pt-6 border-t border-white/5 space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/40 block font-mono font-bold">Booking Link or URL</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-grow bg-[#0c0c0c] border border-white/10 rounded-sm px-3 py-2.5 text-xs font-mono text-white tracking-wider focus:outline-none focus:border-amber-400"
                      value={bookingUrl}
                      onChange={(e) => setBookingUrl(e.target.value)}
                      placeholder="https://book.sunstudiotan.com/"
                    />
                    <button
                      type="submit"
                      className="px-4 bg-white text-black text-[10px] font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors rounded-sm"
                    >
                      Update
                    </button>
                  </div>
                </div>
                {isSaved && (
                  <p className="text-[10px] text-teal-300 font-mono">✔ Destination updated successfully in storage.</p>
                )}
              </form>
            </div>

            {/* Embedded Live Web Portal Container */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-serif italic text-white flex items-center gap-2">
                    Live Booking Canvas
                  </h3>
                  <p className="text-xs text-white/40 font-mono">DESTINATION: {bookingUrl}</p>
                </div>
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-amber-300 hover:underline hover:text-amber-200 uppercase tracking-wider font-mono font-semibold"
                >
                  <ExternalLink size={12} />
                  <span>Open Direct Portal</span>
                </a>
              </div>

              {/* The Live frame wrapper */}
              <div className="border border-white/10 rounded-sm overflow-hidden bg-neutral-950 aspect-[4/3] md:aspect-[16/11] relative">
                <div className="absolute inset-0 z-0 bg-[#0f0f0f] flex flex-col justify-between p-8">
                  <div className="space-y-4 max-w-xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/20 text-amber-300 rounded font-mono text-[10px]">
                      <Database size={12} />
                      <span>LIVE CONNECTION ACTIVE</span>
                    </div>
                    <h4 className="text-2xl font-serif italic text-white flex items-center gap-2">Live Booking System</h4>
                    <p className="text-xs text-white/50 leading-relaxed font-light">
                      This space renders your live booking widget. Customer records, staff selections, schedules, and processing update directly.
                    </p>
                  </div>

                  <div className="space-y-6 pt-6 border-t border-white/5">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-6 bg-amber-400 hover:bg-amber-300 transition-colors text-black font-bold uppercase text-[10px] tracking-widest text-center"
                      >
                        Open In New Tab
                      </a>
                      <button
                        onClick={() => setBookingMode('bespoke')}
                        className="py-3 px-6 border border-[#ffffff1c] hover:border-white/20 transition-all text-white/80 font-bold uppercase text-[10px] tracking-widest"
                      >
                        Try Bespoke Form designer instead
                      </button>
                    </div>
                  </div>
                </div>

                {/* Live frame rendering */}
                <iframe
                  src={bookingUrl} 
                  title="Live Reservation Engine"
                  className="w-full h-full border-0 absolute inset-0 z-10 opacity-90 hover:opacity-100 transition-opacity bg-[#151515]"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                ></iframe>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <>
          {/* Progress Path */}
          {step < 6 && (
            <div className="flex items-center justify-between mb-16 border-b border-white/5 pb-6">
              <div className="flex items-center gap-2 animate-fade-in1">
                <span className="text-[10px] bg-white/10 text-white/85 px-2 py-0.5 tracking-wider uppercase rounded-sm">Step {step} of 5</span>
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse"></span>
              </div>
              <div className="hidden md:flex gap-4 text-[10px] tracking-[0.3em] uppercase text-white/30 font-semibold">
                <span className={step >= 1 ? 'text-white' : ''}>1. Service</span>
                <ChevronRight size={10} />
                <span className={step >= 2 ? 'text-white' : ''}>2. Boosters</span>
                <ChevronRight size={10} />
                <span className={step >= 3 ? 'text-white' : ''}>3. Skin Consult</span>
                <ChevronRight size={10} />
                <span className={step >= 4 ? 'text-white' : ''}>4. Specialist</span>
                <ChevronRight size={10} />
                <span className={step >= 5 ? 'text-white' : ''}>5. Schedule</span>
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* Step 1: Select Curated Service */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid lg:grid-cols-3 gap-12"
              >
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <h2 className="text-3xl font-serif italic mb-2">Bespoke Treatment Selection</h2>
                    <p className="text-white/40 text-sm italic">Select the primary service for your upcoming reservation.</p>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-3 font-semibold">Artisanal Spray Tanning</p>
                    <div className="grid gap-4">
                      {SERVICES.filter(s => s.category === 'tanning').map(s => (
                        <div
                          key={s.id}
                          onClick={() => handleServiceSelect(s)}
                          className={`p-6 border rounded-sm transition-all duration-300 cursor-pointer flex justify-between items-center group
                            ${selectedService?.id === s.id ? 'border-white bg-white/5' : 'border-white/5 bg-white/[0.01] hover:border-white/20'}
                          `}
                        >
                          <div className="space-y-1 pr-4">
                            <h4 className="text-sm tracking-wider font-semibold text-white group-hover:text-amber-300 transition-colors">{s.name}</h4>
                            <p className="text-xs text-white/50 leading-relaxed font-light">{s.description}</p>
                            <span className="inline-block text-[10px] text-white/30 tracking-widest uppercase font-mono">{s.duration}</span>
                          </div>
                          <div className="text-right flex items-center gap-4">
                            <span className="text-2xl font-light tracking-tight text-white">${s.price}</span>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center
                              ${selectedService?.id === s.id ? 'border-white bg-white text-black' : 'border-white/25'}
                            `}>
                              {selectedService?.id === s.id && <Check size={12} />}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-3 font-semibold">Teeth Whitening cosmetics</p>
                    <div className="grid gap-4">
                      {SERVICES.filter(s => s.category === 'whitening').map(s => (
                        <div
                          key={s.id}
                          onClick={() => handleServiceSelect(s)}
                          className={`p-6 border rounded-sm transition-all duration-300 cursor-pointer flex justify-between items-center group
                            ${selectedService?.id === s.id ? 'border-white bg-white/5' : 'border-white/5 bg-white/[0.01] hover:border-white/20'}
                          `}
                        >
                          <div className="space-y-1 pr-4">
                            <h4 className="text-sm tracking-wider font-semibold text-white group-hover:text-amber-300 transition-colors">{s.name}</h4>
                            <p className="text-xs text-white/50 leading-relaxed font-light">{s.description}</p>
                            <span className="inline-block text-[10px] text-white/30 tracking-widest uppercase font-mono">{s.duration}</span>
                          </div>
                          <div className="text-right flex items-center gap-4">
                            <span className="text-2xl font-light tracking-tight text-white">${s.price}</span>
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center
                              ${selectedService?.id === s.id ? 'border-white bg-white text-black' : 'border-white/25'}
                            `}>
                              {selectedService?.id === s.id && <Check size={12} />}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar Summary */}
                <div className="border-l border-white/5 pl-8 space-y-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <h3 className="text-xs tracking-[0.3em] uppercase text-white/50 font-bold">Your Estimate</h3>
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm space-y-4">
                      {selectedService ? (
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-xs text-white/40 tracking-wider uppercase font-mono">Service</p>
                            <p className="text-sm font-semibold tracking-wide text-white mt-1">{selectedService.name}</p>
                          </div>
                          <span className="text-lg font-light">${selectedService.price}</span>
                        </div>
                      ) : (
                        <p className="text-xs text-white/30 py-4 italic">No treatment selected. Choose an artisanal solution to proceed.</p>
                      )}
                    </div>
                  </div>

                  {selectedService && (
                    <button
                      onClick={() => setStep(2)}
                      className="w-full py-4 bg-white text-black font-semibold text-[10px] tracking-[0.4em] uppercase hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 mt-8"
                    >
                      <span>Continue To Boosters</span>
                      <ArrowRight size={12} />
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 2: Select Addons / Premium Boosters */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid lg:grid-cols-3 gap-12"
              >
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <button onClick={() => setStep(1)} className="text-[10px] tracking-[0.3em] text-white/40 uppercase hover:text-white flex items-center gap-2 mb-4">
                      <ChevronLeft size={12} /> Edit Treatment
                    </button>
                    <h2 className="text-3xl font-serif italic mb-2">Enhance Your Glow</h2>
                    <p className="text-white/40 text-sm italic">Pair your experience with premium hydration locks, pH balancing systems, or ultra rapid rinse formulas.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {ADDONS.map(addon => {
                      const isSelected = selectedAddons.some(a => a.id === addon.id);
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddon(addon)}
                          className={`p-6 border rounded-sm cursor-pointer transition-all duration-300 flex flex-col justify-between h-44
                            ${isSelected ? 'border-white bg-white/5' : 'border-white/5 bg-white/[0.01] hover:border-white/20'}
                          `}
                        >
                          <div>
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-xs tracking-[0.2em] uppercase font-bold text-white pr-2">{addon.name}</h4>
                              <span className="text-lg font-mono text-amber-300">+${addon.price}</span>
                            </div>
                            <p className="text-xs text-white/50 leading-relaxed font-light">{addon.description}</p>
                          </div>

                          <div className="flex justify-end pt-4">
                            <span className={`text-[10px] tracking-widest uppercase py-1 px-3 border rounded-full font-mono
                              ${isSelected ? 'bg-amber-400 border-amber-400 text-black font-semibold' : 'border-white/20 text-white/50'}
                            `}>
                              {isSelected ? 'Added' : 'Add booster'}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Sidebar Summary */}
                <div className="border-l border-white/5 pl-8 space-y-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <h3 className="text-xs tracking-[0.3em] uppercase text-white/50 font-bold">Summary Review</h3>
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm space-y-4 divide-y divide-white/5">
                      <div className="flex justify-between items-start pb-4">
                        <div>
                          <p className="text-[10px] text-white/40 tracking-wider uppercase font-mono">Service</p>
                          <p className="text-xs font-semibold uppercase tracking-wider text-white mt-1">{selectedService?.name}</p>
                        </div>
                        <span className="text-sm font-light text-white/80">${selectedService?.price}</span>
                      </div>

                      {selectedAddons.length > 0 && (
                        <div className="pt-4 space-y-3">
                          <p className="text-[10px] text-white/40 tracking-wider uppercase font-mono">Boosters</p>
                          {selectedAddons.map(addon => (
                            <div key={addon.id} className="flex justify-between items-center text-xs">
                              <span className="text-white/60">{addon.name}</span>
                              <span className="text-amber-300">+${addon.price}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="pt-4 flex justify-between items-center text-white">
                        <p className="text-xs uppercase tracking-[0.2em] font-bold">Estimated Total</p>
                        <span className="text-2xl font-light tracking-tight text-amber-300 font-mono">${calculateTotal()}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(3)}
                    className="w-full py-4 bg-white text-black font-semibold text-[10px] tracking-[0.4em] uppercase hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 mt-8"
                  >
                    <span>Skin & Glow Analysis</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Skin & Consultation Form */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid lg:grid-cols-3 gap-12"
              >
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <button onClick={() => setStep(2)} className="text-[10px] tracking-[0.3em] text-white/40 uppercase hover:text-white flex items-center gap-2 mb-4">
                      <ChevronLeft size={12} /> Boosters Add-ons
                    </button>
                    <h2 className="text-3xl font-serif italic mb-2">Bespoke Tan Cosmetics Consultation</h2>
                    <p className="text-white/40 text-sm italic">Analyze your baseline and desired density to map the perfect formulation.</p>
                  </div>

                  <div className="space-y-8 bg-white/[0.01] border border-white/5 p-8 rounded-sm">
                    {/* Baseline Tone Selection */}
                    <div className="space-y-4">
                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white">1. What is your natural skin baseline tone?</span>
                      <div className="grid grid-cols-3 gap-3">
                        {['fair', 'medium', 'deep'].map(tone => (
                          <button
                            key={tone}
                            type="button"
                            onClick={() => setSkinType(tone)}
                            className={`py-4 rounded-sm border uppercase text-[10px] tracking-widest font-mono
                              ${skinType === tone ? 'border-white bg-white text-black font-semibold' : 'border-white/5 hover:border-white/20 text-white/50'}
                            `}
                          >
                            {tone}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Intensity Choice */}
                    <div className="space-y-4">
                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-white">2. Select your desired glow output intense:</span>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { key: 'radiant-light', label: 'Light Glow' },
                          { key: 'radiant-medium', label: 'Vibrant Medium' },
                          { key: 'radiant-bronze', label: 'Deep Bronze' },
                        ].map(opt => (
                          <button
                            key={opt.key}
                            type="button"
                            onClick={() => setDesiredIntensity(opt.key)}
                            className={`py-4 px-2 rounded-sm border text-center uppercase text-[9px] tracking-[0.15em] font-mono
                              ${desiredIntensity === opt.key ? 'border-white bg-white text-black font-semibold' : 'border-white/5 hover:border-white/20 text-white/50'}
                            `}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Skin Toggles */}
                    <div className="flex items-center justify-between p-4 border border-white/5 bg-black/40 rounded-sm">
                      <div className="flex gap-3 items-start">
                        <ShieldAlert size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs uppercase font-bold tracking-wider text-white">Sensitive Skin / Allergies</p>
                          <p className="text-[10px] text-white/40 leading-relaxed font-light mt-1">If active, we switch to our hypoallergenic Aloe-infused ultra-pure solution automatically.</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSensitivity(!sensitivity)}
                        className={`shrink-0 w-12 h-6 rounded-full relative transition-colors duration-300 block
                          ${sensitivity ? 'bg-amber-400' : 'bg-white/10'}
                        `}
                      >
                        <span className={`absolute top-1 left-1 w-4 h-4 bg-black rounded-full transition-all duration-300
                          ${sensitivity ? 'translate-x-6 bg-black' : 'translate-x-0 bg-white/70'}
                        `}></span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Sidebar Summary */}
                <div className="border-l border-white/5 pl-8 space-y-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <h3 className="text-xs tracking-[0.3em] uppercase text-white/50 font-bold">Active Configuration</h3>
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm space-y-4 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-white/40 uppercase">BASELINE:</span>
                        <span className="text-white uppercase font-semibold">{skinType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/40 uppercase">FORMULA:</span>
                        <span className="text-white uppercase font-semibold">{desiredIntensity.replace('radiant-', '')}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/40 uppercase">SENSITIVE?</span>
                        <span className={sensitivity ? 'text-amber-300 font-bold' : 'text-white/30'}>{sensitivity ? 'YES (HYPOALLERGENIC)' : 'NO'}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(4)}
                    className="w-full py-4 bg-white text-black font-semibold text-[10px] tracking-[0.4em] uppercase hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 mt-8"
                  >
                    <span>Curated Artisans</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Specialist Selection */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid lg:grid-cols-3 gap-12"
              >
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <button onClick={() => setStep(3)} className="text-[10px] tracking-[0.3em] text-white/40 uppercase hover:text-white flex items-center gap-2 mb-4">
                      <ChevronLeft size={12} /> Consult Formulation
                    </button>
                    <h2 className="text-3xl font-serif italic mb-2">Our Highly Qualified Artisans</h2>
                    <p className="text-white/40 text-sm italic">Each aesthetic master possesses unique talents in definitions and shading contours.</p>
                  </div>

                  <div className="space-y-4">
                    {SPECIALISTS.map(spec => (
                      <div
                        key={spec.id}
                        onClick={() => setSelectedSpecialist(spec)}
                        className={`p-6 border rounded-sm cursor-pointer transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center
                          ${selectedSpecialist?.id === spec.id ? 'border-white bg-white/5' : 'border-white/5 bg-white/[0.01] hover:border-white/20'}
                        `}
                      >
                        <img src={spec.imageUrl} alt={spec.name} className="w-16 h-16 rounded-full object-cover border border-white/10 grayscale hover:grayscale-0 transition-all duration-500" />
                        <div className="space-y-2 flex-grow text-center sm:text-left">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                            <h4 className="text-base tracking-wide font-semibold text-white">{spec.name}</h4>
                            <span className="text-[10px] tracking-widest text-amber-300 font-mono">★ {spec.rating} rating</span>
                          </div>
                          <p className="text-xs text-white/40 tracking-wider uppercase font-medium">{spec.role}</p>
                          <p className="text-xs text-white/50 font-light leading-relaxed">{spec.bio}</p>
                        </div>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0
                          ${selectedSpecialist?.id === spec.id ? 'border-white bg-white text-black' : 'border-white/25'}
                        `}>
                          {selectedSpecialist?.id === spec.id && <Check size={12} />}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sidebar Summary */}
                <div className="border-l border-white/5 pl-8 space-y-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <h3 className="text-xs tracking-[0.3em] uppercase text-white/50 font-bold">Assigned Stylist</h3>
                    {selectedSpecialist ? (
                      <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm flex items-center gap-4">
                        <img src={selectedSpecialist.imageUrl} alt={selectedSpecialist.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="text-xs font-semibold text-white">{selectedSpecialist.name}</p>
                          <p className="text-[10px] uppercase tracking-wider text-amber-300 mt-1">{selectedSpecialist.role}</p>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-white/30 italic">No specialist chosen yet.</p>
                    )}
                  </div>

                  {selectedSpecialist && (
                    <button
                      onClick={() => setStep(5)}
                      className="w-full py-4 bg-white text-black font-semibold text-[10px] tracking-[0.4em] uppercase hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 mt-8"
                    >
                      <span>Schedule Appointment</span>
                      <ArrowRight size={12} />
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 5: Scheduling Calendar Integration */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="grid lg:grid-cols-3 gap-12"
              >
                <div className="lg:col-span-2 space-y-8">
                  <div>
                    <button onClick={() => setStep(4)} className="text-[10px] tracking-[0.3em] text-white/40 uppercase hover:text-white flex items-center gap-2 mb-4">
                      <ChevronLeft size={12} /> Edit Specialist
                    </button>
                    <h2 className="text-3xl font-serif italic mb-2">Reserve Your Time Slot</h2>
                    <p className="text-white/40 text-sm italic">Columbus Studio Hours: 9:00 AM - 7:00 PM daily. Active timezone resides in Eastern Time.</p>
                  </div>

                  {/* Month Visual Calendar - June 2026 */}
                  <div className="bg-white/[0.01] border border-white/5 p-6 rounded-sm space-y-6">
                    <div className="flex justify-between items-center text-xs tracking-[0.2em] font-bold text-white uppercase border-b border-white/5 pb-4">
                      <span>← Anterior</span>
                      <span className="text-amber-300">June 2026</span>
                      <span className="text-white/30 cursor-not-allowed">Next →</span>
                    </div>

                    <div className="grid grid-cols-7 gap-2 text-center text-[9px] tracking-widest uppercase text-white/30 font-bold mb-3">
                      <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
                    </div>

                    {/* Grid starts on Monday for June 1st, 2026 */}
                    <div className="grid grid-cols-7 gap-2">
                      {/* Offset for Sunday (blank space) */}
                      <div className="h-11"></div>
                      {renderCalendar()}
                    </div>
                  </div>

                  {/* Time Slots selector */}
                  <div className="space-y-4">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 font-bold">Select Preferred Daily Slot</p>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                      {TIME_SLOTS.map(time => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-3.5 px-2 rounded-sm border text-xs tracking-wider font-mono transition-all duration-300
                            ${selectedTime === time ? 'border-amber-300 bg-amber-400 text-black font-semibold' : 'border-white/5 hover:border-white/20 text-white/60 bg-white/[0.01]'}
                          `}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar Summary */}
                <div className="border-l border-white/5 pl-8 space-y-8 flex flex-col justify-between">
                  <div className="space-y-6">
                    <h3 className="text-xs tracking-[0.3em] uppercase text-white/50 font-bold">Summary Reservation</h3>
                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-sm space-y-4">
                      <div className="space-y-1">
                        <p className="text-[10px] text-white/40 tracking-wider uppercase font-mono">TREATMENT</p>
                        <p className="text-xs text-white uppercase tracking-wider font-semibold">{selectedService?.name}</p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-[10px] text-white/40 tracking-wider uppercase font-mono">ARTISAN</p>
                        <p className="text-xs text-white tracking-wide">{selectedSpecialist?.name}</p>
                      </div>

                      <div className="space-y-1">
                        <p className="text-[10px] text-white/40 tracking-wider uppercase font-mono">TIME & DATE</p>
                        <p className="text-xs text-amber-300 font-mono font-semibold">
                          {selectedDate} @ {selectedTime || 'Select a time'}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex justify-between items-center text-white">
                        <p className="text-xs uppercase tracking-[0.2em] font-bold">Estimated Total</p>
                        <span className="text-2xl font-light tracking-tight text-amber-300 font-mono">${calculateTotal()}</span>
                      </div>
                    </div>
                  </div>

                  {selectedTime && (
                    <button
                      onClick={handleSubmitBooking}
                      className="w-full py-4 bg-amber-400 text-black font-semibold text-[10px] tracking-[0.4em] uppercase hover:bg-amber-300 transition-all duration-300 flex items-center justify-center gap-2 mt-8 animate-bounce"
                    >
                      <span>Confirm Reservation</span>
                      <Check size={12} />
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {/* Step 6: Luxury Receipt / Booking Completed screen */}
            {step === 6 && (
              <motion.div
                key="step6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl mx-auto text-center space-y-10"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center mb-6 text-amber-400">
                    <Sparkles size={28} />
                  </div>
                  <h2 className="text-4xl font-serif italic mb-2">Reservation Secured</h2>
                  <p className="text-white/50 text-sm max-w-sm font-light">We look forward to curating your signature glow in Columbus.</p>
                </div>

                {/* Ticket Card */}
                <div className="bg-white/[0.02] border border-white/10 rounded-sm p-8 text-left relative overflow-hidden shadow-2xl space-y-8">
                  {/* Gold glowing border */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-600"></div>

                  <div className="flex justify-between items-start border-b border-white/5 pb-4">
                    <div>
                      <span className="text-[9px] tracking-[0.1em] text-white/40 uppercase font-mono">MEMBER RECEIPT</span>
                      <h4 className="text-sm font-serif italic text-white mt-1">Sun Studio Columbus</h4>
                    </div>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-[9px] text-amber-300 font-mono uppercase rounded-sm">Confirmed</span>
                  </div>

                  <div className="grid grid-cols-2 gap-6 text-xs">
                    <div>
                      <p className="text-[10px] text-white/40 tracking-wider uppercase font-mono">Service Requested</p>
                      <p className="text-white font-medium mt-1">{selectedService?.name}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 tracking-wider uppercase font-mono">Assigned Artisan</p>
                      <p className="text-white font-medium mt-1">{selectedSpecialist?.name}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 tracking-wider uppercase font-mono">Date Requested</p>
                      <p className="text-white font-medium font-mono mt-1">{selectedDate}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-white/40 tracking-wider uppercase font-mono">Time Slot</p>
                      <p className="text-teal-300 font-medium font-mono mt-1">{selectedTime}</p>
                    </div>
                  </div>

                  {selectedAddons.length > 0 && (
                    <div className="border-t border-white/5 pt-4">
                      <p className="text-[10px] text-white/40 tracking-wider uppercase font-mono mb-2">Cosmetics Addons Applied</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedAddons.map(a => (
                          <span key={a.id} className="text-[9px] bg-white/5 border border-white/5 px-2.5 py-1 text-white/80 font-mono uppercase tracking-wider rounded-sm">
                            {a.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-6 border-t border-white/5">
                    <div>
                      <p className="text-[9px] text-white/30 tracking-wider uppercase font-mono">Price Total (VAT Inc.)</p>
                      <p className="text-2xl font-light text-amber-400 font-mono tracking-tighter">${calculateTotal()}</p>
                    </div>
                    {/* Barcode style */}
                    <div className="flex flex-col items-center">
                      <div className="space-y-0.5 opacity-25">
                        <div className="flex gap-0.5 justify-center">
                          <span className="w-[1px] h-8 bg-white inline-block"></span>
                          <span className="w-[3px] h-8 bg-white inline-block"></span>
                          <span className="w-[1px] h-8 bg-white inline-block"></span>
                          <span className="w-[2px] h-8 bg-white inline-block"></span>
                          <span className="w-[1px] h-8 bg-white inline-block"></span>
                          <span className="w-[4px] h-8 bg-white inline-block"></span>
                          <span className="w-[1px] h-8 bg-white inline-block"></span>
                          <span className="w-[2px] h-8 bg-white inline-block"></span>
                          <span className="w-[1px] h-8 bg-white inline-block"></span>
                        </div>
                        <p className="text-[8px] font-mono text-center tracking-widest uppercase">SS-TAN-2026</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      onBookingSuccess();
                    }}
                    className="px-8 py-3 bg-white text-black font-semibold text-[10px] tracking-[0.3em] uppercase hover:bg-gray-200 transition-colors"
                  >
                    Access Client Portal
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setSelectedService(null);
                      setSelectedAddons([]);
                      setSelectedTime('');
                    }}
                    className="px-8 py-3 border border-white/10 hover:border-white/30 text-white font-semibold text-[10px] tracking-[0.3em] uppercase transition-colors"
                  >
                    Schedule Another Session
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
