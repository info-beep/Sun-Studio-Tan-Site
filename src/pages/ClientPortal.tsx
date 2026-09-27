import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Award, Calendar, CheckSquare, Sparkles, LogOut, Ticket, Star, Trash2, Shield, RefreshCw } from 'lucide-react';
import { Appointment, UserProfile } from '../types';

interface ClientPortalProps {
  onLogout?: () => void;
  onNavigateToBooking?: () => void;
}

export default function ClientPortal({ onLogout, onNavigateToBooking }: ClientPortalProps) {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Alexis Devereaux',
    email: 'alexis.devereaux@gmail.com',
    phone: '614.555.0192',
    membership: 'none',
    loyaltyPoints: 340,
    visitsCount: 4,
  });

  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [activeTab, setActiveTab] = useState<'membership' | 'bookings' | 'perks'>('bookings');
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    // 1. Initialize/Retrieve profile from localStorage
    const savedProfile = localStorage.getItem('sun_studio_profile');
    if (savedProfile) {
      try {
        setProfile(JSON.parse(savedProfile));
      } catch (e) {
        console.error("Failed to parse saved profile", e);
      }
    } else {
      // Save default
      localStorage.setItem('sun_studio_profile', JSON.stringify(profile));
    }

    // 2. Retrieve appointments from localStorage
    const savedAppointments = localStorage.getItem('sun_studio_appointments');
    if (savedAppointments) {
      try {
        setAppointments(JSON.parse(savedAppointments));
      } catch (e) {
        console.error("Failed to parse saved appointments", e);
      }
    } else {
      // Insert custom default old appointments for rich history!
      const defaultHistory: Appointment[] = [
        {
          id: 'APT-MOCK101',
          service: { id: 'tan-base', name: 'Artisanal Base Tan', price: 42, duration: '20 mins', description: 'Classic golden-bronze Norvell application', category: 'tanning' },
          addons: [{ id: 'add-lift', name: 'Dermal Lift Booster', price: 7, description: 'Skin-firming' }],
          specialist: { id: 'sp-valeria', name: 'Valeria Russo', role: 'Tanning Specialist', rating: 5, imageUrl: '', bio: '' },
          date: '2026-05-12',
          time: '02:00 PM',
          clientNotes: { skinType: 'medium', desiredIntensity: 'radiant-medium', sensitivity: false },
          totalPrice: 49,
          createdAt: '2026-05-11T10:00:00Z',
          status: 'completed'
        }
      ];
      localStorage.setItem('sun_studio_appointments', JSON.stringify(defaultHistory));
      setAppointments(defaultHistory);
    }
  }, []);

  const handleMembershipChange = (tier: 'none' | 'base' | 'build' | 'bronzed') => {
    const updated = { ...profile, membership: tier };
    setProfile(updated);
    localStorage.setItem('sun_studio_profile', JSON.stringify(updated));
  };

  const handleCancelAppointment = (id: string) => {
    const updated = appointments.map(apt => {
      if (apt.id === id) {
        return { ...apt, status: 'cancelled' as const };
      }
      return apt;
    });
    setAppointments(updated);
    localStorage.setItem('sun_studio_appointments', JSON.stringify(updated));
  };

  const handleDeleteRecord = (id: string) => {
    const filtered = appointments.filter(apt => apt.id !== id);
    setAppointments(filtered);
    localStorage.setItem('sun_studio_appointments', JSON.stringify(filtered));
  };

  const redeemPerk = (pointsCost: number, perkName: string) => {
    if (profile.loyaltyPoints < pointsCost) {
      setErrorMessage(`Insufficient points to redeem ${perkName}. Require ${pointsCost} points.`);
      setTimeout(() => setErrorMessage(''), 4000);
      return;
    }

    const updated = { ...profile, loyaltyPoints: profile.loyaltyPoints - pointsCost };
    setProfile(updated);
    localStorage.setItem('sun_studio_profile', JSON.stringify(updated));
    alert(`Successfully redeemed perk: "${perkName}"! Voucher code sent to ${profile.email}`);
  };

  // Helper tier color mappings
  const getTierDetails = () => {
    const points = profile.loyaltyPoints;
    if (points >= 1000) return { name: 'Diamond Aura Member', color: 'text-purple-400', pct: 100, next: 'Maximum Tier Completed' };
    if (points >= 500) return { name: 'Platinum Radiant Member', color: 'text-teal-300', pct: Math.round(((points - 500) / 500) * 100), next: `${1000 - points} pts to Diamond` };
    return { name: 'Gold Glow Explorer', color: 'text-amber-400', pct: Math.round((points / 500) * 100), next: `${500 - points} pts to Platinum` };
  };

  const tier = getTierDetails();

  return (
    <div className="py-24 px-6 max-w-6xl mx-auto min-h-screen relative z-10">
      {/* Upper header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/5 pb-10 mb-12">
        <div className="space-y-2">
          <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-amber-300">Client Access Portal</span>
          <h1 className="text-4xl font-serif italic text-white flex items-center gap-3">
            Welcome, <span className="text-white/60 font-sans not-italic font-light">{profile.name}</span>
          </h1>
          <p className="text-xs text-white/40 tracking-wider">Premium Account Status: <span className="text-white uppercase font-mono">{profile.membership === 'none' ? 'Visitor Base' : profile.membership + ' member'}</span></p>
        </div>

        {onLogout && (
          <button
            onClick={onLogout}
            className="px-5 py-2.5 border border-white/10 hover:border-white/30 text-xs tracking-widest text-white/60 hover:text-white uppercase font-bold transition-all flex items-center gap-2 rounded-sm"
          >
            <LogOut size={12} />
            <span>Switch Profile</span>
          </button>
        )}
      </div>

      <div className="grid lg:grid-cols-3 gap-12 items-start">
        {/* Left Side: Dynamic Loyalty Card & Quick stats */}
        <div className="space-y-8 lg:col-span-1">
          {/* Virtual Membership Badge Card */}
          <div className="relative aspect-[1.58/1] w-full rounded-xl overflow-hidden p-6 border border-white/10 bg-gradient-to-tr from-stone-900 via-neutral-900 to-amber-950 shadow-2xl flex flex-col justify-between">
            {/* Background texture shine */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,_rgba(251,191,36,0.1)_0%,_transparent_55%)]"></div>
            
            <div className="flex justify-between items-start relative z-10">
              <div>
                <span className="text-[8px] font-mono tracking-[0.2em] text-white/40 uppercase">SUNLESS LUXURY PASS</span>
                <p className="text-md font-serif italic text-white tracking-widest mt-1">Sun Studio</p>
              </div>
              <Sparkles size={18} className="text-amber-400" />
            </div>

            <div className="space-y-4 relative z-10">
              <div className="space-y-1">
                <p className="text-[10px] tracking-widest font-mono text-white/50 uppercase">{tier.name}</p>
                <div className="flex justify-between items-baseline">
                  <span className="text-2xl font-light tracking-tight text-white">{profile.loyaltyPoints}</span>
                  <span className="text-[9px] font-mono text-white/30 tracking-widest">LOYALTY PTS</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1">
                <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-400 to-amber-200" style={{ width: `${tier.pct}%` }}></div>
                </div>
                <div className="flex justify-between text-[8px] font-mono text-white/30 tracking-widest uppercase">
                  <span>{tier.pct}% level</span>
                  <span>{tier.next}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-white/50 relative z-10 border-t border-white/5 pt-3">
              <span>MEMBER SINCE 2023</span>
              <span className="uppercase text-amber-300 font-bold">{profile.membership} Pass</span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 border border-white/5 bg-white/[0.01] rounded-sm text-center space-y-1">
              <Award size={18} className="mx-auto text-amber-400" />
              <p className="text-lg font-light text-white">{profile.visitsCount}</p>
              <p className="text-[10px] uppercase text-white/40 tracking-wider">Total Visits</p>
            </div>
            <div className="p-5 border border-white/5 bg-white/[0.01] rounded-sm text-center space-y-1">
              <Shield size={18} className="mx-auto text-amber-400" />
              <p className="text-lg font-light text-white">{profile.membership === 'none' ? 'None' : profile.membership.toUpperCase()}</p>
              <p className="text-[10px] uppercase text-white/40 tracking-wider">Active Plan</p>
            </div>
          </div>

          {/* Quick error notification */}
          <AnimatePresence>
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="p-4 bg-red-950/45 border border-red-800 text-red-300 text-xs rounded-sm"
              >
                {errorMessage}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Side: Tabbed Interface */}
        <div className="lg:col-span-2 space-y-8">
          {/* Tab buttons */}
          <div className="flex border-b border-white/5 text-xs uppercase tracking-[0.2em] font-semibold gap-6 pb-2">
            {[
              { id: 'bookings', label: 'My Sessions', counter: appointments.length },
              { id: 'membership', label: 'Plan & Upgrades', counter: null },
              { id: 'perks', label: 'Member Vouchers', counter: null }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-2 border-b-2 transition-all flex items-center gap-2
                  ${activeTab === tab.id ? 'border-amber-400 text-white font-bold' : 'border-transparent text-white/40 hover:text-white/70'}
                `}
              >
                <span>{tab.label}</span>
                {tab.counter !== null && (
                  <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded-full text-white/80 font-mono font-normal">
                    {tab.counter}
                  </span>
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {/* BOOKINGS TABLE */}
            {activeTab === 'bookings' && (
              <motion.div
                key="bookings"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-serif italic text-white">Your Scheduled & Past Sessions</h3>
                  {onNavigateToBooking && (
                    <button
                      onClick={onNavigateToBooking}
                      className="px-4 py-2 bg-white text-black text-[10px] uppercase tracking-widest font-bold hover:bg-gray-200 transition-colors"
                    >
                      Book Session
                    </button>
                  )}
                </div>

                {appointments.length === 0 ? (
                  <div className="text-center py-20 border border-dashed border-white/5 rounded-sm space-y-4">
                    <Calendar size={32} className="mx-auto text-white/20" />
                    <p className="text-xs text-white/40 italic">You have no reservations logged in this device browser yet.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {appointments.map(apt => (
                      <div
                        key={apt.id}
                        className="p-6 border border-white/5 bg-white/[0.01] rounded-sm space-y-4 hover:bg-white/[0.02] transition-colors relative"
                      >
                        <div className="flex justify-between items-start border-b border-white/5 pb-3">
                          <div>
                            <span className="text-[9px] text-white/40 font-mono tracking-wider">{apt.id}</span>
                            <h4 className="text-sm font-semibold tracking-wide text-white mt-0.5 uppercase">{apt.service.name}</h4>
                          </div>
                          <span className={`text-[9px] tracking-widest uppercase py-1 px-3 border rounded-full font-mono
                            ${apt.status === 'upcoming' ? 'bg-teal-400/10 border-teal-400/25 text-teal-300' : ''}
                            ${apt.status === 'completed' ? 'bg-white/5 border-white/10 text-white/50' : ''}
                            ${apt.status === 'cancelled' ? 'bg-red-400/10 border-red-400/25 text-red-400' : ''}
                          `}>
                            {apt.status}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-white/60">
                          <div>
                            <span className="block text-[8px] text-white/30 tracking-widest uppercase">Date</span>
                            <span className="text-white font-medium mt-0.5 block">{apt.date}</span>
                          </div>
                          <div>
                            <span className="block text-[8px] text-white/30 tracking-widest uppercase">Time Slot</span>
                            <span className="text-white font-medium mt-0.5 block">{apt.time}</span>
                          </div>
                          <div>
                            <span className="block text-[8px] text-white/30 tracking-widest uppercase">Assigned Stylist</span>
                            <span className="text-white/80 mt-0.5 block">{apt.specialist.name}</span>
                          </div>
                          <div>
                            <span className="block text-[8px] text-white/30 tracking-widest uppercase">Price</span>
                            <span className="text-amber-300 mt-0.5 block font-semibold">${apt.totalPrice}</span>
                          </div>
                        </div>

                        {apt.addons.length > 0 && (
                          <div className="flex flex-wrap gap-2 pt-2">
                            {apt.addons.map(add => (
                              <span key={add.id} className="text-[9px] bg-white/5 px-2 py-0.5 text-white/40 tracking-wider uppercase font-mono border border-white/5 rounded-sm">
                                + {add.name}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex justify-end gap-3 pt-3 border-t border-white/5">
                          {apt.status === 'upcoming' && (
                            <button
                              onClick={() => handleCancelAppointment(apt.id)}
                              className="px-4 py-1.5 border border-red-900 hover:bg-red-950/20 text-red-400 text-[10px] uppercase font-bold tracking-widest transition-all rounded-sm"
                            >
                              Cancel Session
                            </button>
                          )}
                          <button
                            onClick={() => handleDeleteRecord(apt.id)}
                            className="p-1.5 text-white/20 hover:text-white/60 hover:bg-white/5 transition-colors rounded-sm"
                            title="Remove transaction log"
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* MEMBERSHIP PLAN UPGRADES */}
            {activeTab === 'membership' && (
              <motion.div
                key="membership"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-serif italic text-white">Active Unlimited Membership Details</h3>
                  <p className="text-xs text-white/40 font-light leading-relaxed">Upgrade your plan to unlock VIO-7™ violet complex solution lines or Heated 98°F luxury private cabins automatically.</p>
                </div>

                <div className="grid gap-4">
                  {[
                    { tier: 'none', label: 'None/Pay-per-session', price: '$0', desc: 'No monthly commitment. Traditional single visits billed at standard $42-$62 tiers, plus full add-ons pricing.' },
                    { tier: 'base', label: 'Base Pass Club', price: '$24.99/mo', desc: 'Unlimited baseline Norvell tanning. Grants priority slots bookings and member pricing upgrades.' },
                    { tier: 'build', label: 'Build Venetian Pass', price: '$39.99/mo', desc: 'Unlimited Norvell + Venetian violet solutions. Advanced custom depth contouring included twice a month.' },
                    { tier: 'bronzed', label: 'Bronzed heated VIP Pass', price: '$59.99/mo', desc: 'Unlimited ALL solutions. Heated VIP experience, 20% discount on teeth cosmetics, long-lived formula additions.' }
                  ].map(plan => {
                    const isActive = profile.membership === plan.tier;
                    return (
                      <div
                        key={plan.tier}
                        onClick={() => handleMembershipChange(plan.tier as any)}
                        className={`p-6 border rounded-sm transition-all duration-300 cursor-pointer flex justify-between items-center group
                          ${isActive ? 'border-amber-400 bg-amber-950/10' : 'border-white/5 bg-white/[0.01] hover:border-white/10'}
                        `}
                      >
                        <div className="space-y-1.5 pr-4">
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm tracking-wider font-semibold text-white lowercase first-letter:uppercase">{plan.label}</h4>
                            {isActive && <span className="text-[9px] bg-amber-400 text-black px-2 py-0.5 rounded-full font-mono uppercase font-bold tracking-widest shrink-0">Active</span>}
                          </div>
                          <p className="text-xs text-white/50 leading-relaxed font-light">{plan.desc}</p>
                        </div>
                        <div className="text-right shrink-0 flex flex-col items-end gap-3">
                          <span className="text-lg font-mono text-white">{plan.price}</span>
                          <span className={`text-[10px] tracking-widest uppercase px-3 py-1 border rounded-full font-mono
                            ${isActive ? 'border-amber-400 text-amber-300 font-bold' : 'border-white/10 text-white/30 group-hover:border-white/30'}
                          `}>
                            {isActive ? 'Current' : 'Select'}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* MEMBERS PERKS VOUCHERS */}
            {activeTab === 'perks' && (
              <motion.div
                key="perks"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-serif italic text-white">Loyalty Perks Marketplace</h3>
                  <p className="text-xs text-white/40 font-light leading-relaxed">Redeem your accumulated points for free additives, companion tanning discounts, or LED maintenance credits.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { name: 'Free Rapid Rinse Upgrade', cost: 100, desc: 'Receive a complimentary 2-hour rapid rinse add-on on your next tan booking.' },
                    { name: 'Companion Free Pass', cost: 300, desc: 'Bring a friend for a complimentary Norvell Base Tan session on us.' },
                    { name: 'Dermal Lift Booster Addition', cost: 80, desc: 'Apply a collagen-infused firming booster to any upcoming tanned session.' },
                    { name: 'Teeth LED $30 Coupon', cost: 200, desc: 'Instantly deduct $30 off any single-session express LED teeth whitening event.' }
                  ].map((perk, idx) => (
                    <div
                      key={idx}
                      className="p-6 border border-white/5 bg-white/[0.01] hover:bg-white/[0.02] transition-all rounded-sm flex flex-col justify-between h-48"
                    >
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="text-xs font-bold uppercase text-white tracking-wider pr-4">{perk.name}</h4>
                          <span className="text-xs font-semibold text-amber-300 font-mono shrink-0">{perk.cost} pts</span>
                        </div>
                        <p className="text-xs text-white/50 leading-relaxed font-light">{perk.desc}</p>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-white/5 text-[10px] font-mono">
                        <span className="text-white/30 uppercase">Market price approx $12</span>
                        <button
                          onClick={() => redeemPerk(perk.cost, perk.name)}
                          className="px-4 py-1.5 border border-white/10 hover:bg-white hover:text-black hover:border-white transition-all font-bold uppercase rounded-sm"
                        >
                          Redeem perk
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
