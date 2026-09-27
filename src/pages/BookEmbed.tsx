import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, RefreshCw, ShieldCheck, MapPin, Phone, Calendar, Sparkles, CheckCircle2, Clock } from 'lucide-react';

interface BookEmbedProps {
  onNavigateHome?: () => void;
}

export default function BookEmbed({ onNavigateHome }: BookEmbedProps) {
  const [iframeKey, setIframeKey] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const BOOKING_URL = "https://book.sunstudiotan.com/";

  const handleRefresh = () => {
    setIsLoading(true);
    setIframeKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#2b251f] pt-24 pb-20 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header Ribbon & Info */}
        <div className="bg-white rounded-2xl border border-[#ebdccd] shadow-sm p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#f2e7db]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fceddc] border border-[#e8be92] text-[#935212] text-[11px] font-bold tracking-widest uppercase mb-3">
                <Sparkles size={12} className="text-[#b4712c]" />
                ✦ SUN STUDIO TAN BOOKING PORTAL ✦
              </div>
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1f1a16] tracking-tight">
                Online Studio Booking
              </h1>
              <p className="text-sm text-[#706458] mt-1">
                Select your service, choose your specialist, and confirm your bespoke appointment instantly.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1f1a16] hover:bg-[#b87c3f] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
              >
                <span>Open in New Tab</span>
                <ExternalLink size={13} />
              </a>

              <button
                type="button"
                onClick={handleRefresh}
                title="Reload booking form"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full border border-[#d6c3b2] bg-[#fbf8f4] hover:bg-white text-[#635447] hover:text-[#1f1a16] text-xs font-medium transition-colors cursor-pointer"
              >
                <RefreshCw size={13} className={isLoading ? "animate-spin" : ""} />
                <span className="hidden sm:inline">Refresh</span>
              </button>
            </div>
          </div>

          {/* Highlights & Security Strip */}
          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-[#6e6154]">
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-[#b4712c] shrink-0" />
              <span>612 N High St, Short North</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={15} className="text-[#b4712c] shrink-0" />
              <a href="tel:6143330051" className="hover:text-[#b4712c] font-medium">614-333-0051 (Call / Text)</a>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={15} className="text-emerald-700 shrink-0" />
              <span>Stripe 256-Bit SSL Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={15} className="text-[#b4712c] shrink-0" />
              <span>Instant SMS Confirmation</span>
            </div>
          </div>
        </div>

        {/* Embedded Iframe Container */}
        <div className="relative bg-white rounded-2xl border border-[#e0cbba] shadow-xl overflow-hidden min-h-[850px] sm:min-h-[920px]">
          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-[#faf8f5]/90 backdrop-blur-xs flex flex-col items-center justify-center gap-4 z-20">
              <div className="w-12 h-12 rounded-full border-3 border-[#e8be92] border-t-[#b4712c] animate-spin"></div>
              <div className="text-center space-y-1">
                <p className="text-sm font-serif font-bold text-[#2a241e]">
                  Loading Live Booking Calendar...
                </p>
                <p className="text-xs text-[#706458]">
                  Connecting to <span className="font-mono text-[#b4712c]">book.sunstudiotan.com</span>
                </p>
              </div>
            </div>
          )}

          {/* The Live Booking Applet */}
          <iframe
            key={iframeKey}
            id="sun-studio-booking-iframe"
            title="Sun Studio Tan Online Booking"
            src={BOOKING_URL}
            className="w-full h-[900px] sm:h-[1050px] border-0"
            allow="payment *; geolocation *; clipboard-write *;"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Bottom Fallback & Helpful Notes */}
        <div className="rounded-xl border border-[#ead8c7] bg-[#fbf6ef] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6e5d4e]">
          <div className="flex items-start gap-3">
            <Clock size={16} className="text-[#b4712c] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#2b251f]">
                Prefer full-screen or experiencing mobile browser display quirks?
              </p>
              <p className="text-[#6e5d4e] mt-0.5">
                You can always complete your reservation directly on our standalone portal at <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#b4712c] underline">book.sunstudiotan.com</a>.
              </p>
            </div>
          </div>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-4 py-2 rounded-lg bg-[#2b251f] hover:bg-black text-white font-medium uppercase tracking-wider text-[11px] transition-colors"
          >
            Launch Standalone App
          </a>
        </div>

      </div>
    </div>
  );
}
