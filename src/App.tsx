import { motion, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Instagram, Facebook, Phone } from 'lucide-react';
import Chatbot from './components/Chatbot';
import CareGuide from './pages/CareGuide';
import ClientPortal from './pages/ClientPortal';
import AboutUs from './pages/AboutUs';
import FAQs from './pages/FAQs';
import ContactUs from './pages/ContactUs';
import Tanning from './pages/Tanning';
import Wellness from './pages/Wellness';
import Pricing from './pages/Pricing';
import Weddings from './pages/Weddings';
import BookEmbed from './pages/BookEmbed';
import Home from './pages/Home';
import VideoStudio from './pages/VideoStudio';
import { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path === '/book' || path.startsWith('/book') || hash === '#book') return 'book';
      if (path === '/faq' || hash === '#faq') return 'faq';
      if (path === '/pricing' || hash === '#pricing') return 'pricing';
      if (path === '/weddings' || hash === '#weddings') return 'weddings';
      if (path === '/tanning' || hash === '#tanning') return 'tanning';
      if (path === '/about' || hash === '#about') return 'about';
      if (path === '/wellness' || hash === '#wellness') return 'wellness';
      if (path === '/care' || hash === '#care') return 'care';
      if (path === '/portal' || hash === '#portal') return 'portal';
      if (path === '/contact' || hash === '#contact') return 'contact';
      if (path === '/video' || hash === '#video') return 'video';
    }
    return 'home';
  });
  const mainRef = useRef<HTMLElement>(null);
  const isLightPage = currentPage === 'weddings' || currentPage === 'about' || currentPage === 'pricing' || currentPage === 'faq' || currentPage === 'book';

  // Scroll to top on page navigation and sync URL pathname
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const targetPath = currentPage === 'home' ? '/' : `/${currentPage}`;
      if (window.location.pathname !== targetPath && !(currentPage === 'home' && window.location.pathname === '')) {
        window.history.replaceState(null, '', targetPath);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '').toLowerCase();
      if (path === 'book') setCurrentPage('book');
      else if (path === 'faq') setCurrentPage('faq');
      else if (path === 'pricing') setCurrentPage('pricing');
      else if (path === 'weddings') setCurrentPage('weddings');
      else if (path === 'tanning') setCurrentPage('tanning');
      else if (path === 'about') setCurrentPage('about');
      else if (path === 'wellness') setCurrentPage('wellness');
      else if (path === 'care') setCurrentPage('care');
      else if (path === 'portal') setCurrentPage('portal');
      else if (path === 'contact') setCurrentPage('contact');
      else if (path === 'video') setCurrentPage('video');
      else setCurrentPage('home');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="bg-[#050505] text-white font-sans selection:bg-white selection:text-black min-h-screen flex flex-col justify-between">
      {/* Silk Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,_#1a1a1a_0%,_transparent_50%)]"></div>
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] opacity-20" 
          style={{ 
            background: 'conic-gradient(from 0deg at 50% 50%, #000 0%, #111 25%, #000 50%, #111 75%, #000 100%)',
            filter: 'blur(80px)'
          }}
        />
      </div>

      {/* Shared Luxury Navigation Bar */}
      <nav id="navbar-top" className={`relative z-50 flex items-center justify-between px-6 md:px-8 py-5 border-b transition-colors duration-300 ${
        isLightPage 
          ? 'bg-white/95 text-stone-900 border-stone-200/90 backdrop-blur-md shadow-xs' 
          : 'bg-black/30 text-white border-white/5 backdrop-blur-sm'
      }`}>
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <div className={`w-9 h-9 flex items-center justify-center rounded-full border transition-colors ${
            isLightPage ? 'bg-stone-900 text-white border-stone-800' : 'bg-white text-black border-transparent'
          }`}>
            <span className="font-bold text-lg tracking-tighter">SS</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-base font-serif tracking-[0.2em] uppercase hidden md:block leading-none ${isLightPage ? 'text-stone-900 font-semibold' : 'text-white font-light'}`}>
              Sun Studio
            </span>
            <span className={`text-[8px] tracking-[0.35em] uppercase hidden md:block font-bold ${isLightPage ? 'text-[#b87c3f]' : 'text-amber-400'}`}>
              TAN
            </span>
          </div>
        </div>
        
        {/* Navigation selectors */}
        <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm tracking-normal font-medium overflow-x-auto max-w-[65%] md:max-w-none py-1 scrollbar-none">
          <button 
            type="button"
            onClick={() => setCurrentPage('home')} 
            className={`transition-all cursor-pointer whitespace-nowrap pb-1 border-b-2 ${
              currentPage === 'home' 
                ? (isLightPage ? 'text-[#b87c3f] border-[#b87c3f] font-bold' : 'text-amber-300 border-amber-300 font-bold')
                : (isLightPage ? 'border-transparent text-stone-600 hover:text-stone-900' : 'border-transparent text-white/55 hover:text-white')
            }`}
          >
            Home
          </button>
          <button 
            type="button"
            onClick={() => setCurrentPage('tanning')} 
            className={`transition-all cursor-pointer whitespace-nowrap pb-1 border-b-2 ${
              currentPage === 'tanning' 
                ? (isLightPage ? 'text-[#b87c3f] border-[#b87c3f] font-bold' : 'text-amber-300 border-amber-300 font-bold')
                : (isLightPage ? 'border-transparent text-stone-600 hover:text-stone-900' : 'border-transparent text-white/55 hover:text-white')
            }`}
          >
            Tanning
          </button>
          <a 
            href="https://book.sunstudiotan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-all cursor-pointer whitespace-nowrap pb-1 border-b-2 border-transparent normal-case ${
              isLightPage ? 'text-stone-600 hover:text-[#b87c3f]' : 'text-white/55 hover:text-amber-300'
            }`}
          >
            Teeth Whitening
          </a>
          <button 
            type="button"
            onClick={() => setCurrentPage('wellness')} 
            className={`transition-all cursor-pointer whitespace-nowrap pb-1 border-b-2 ${
              currentPage === 'wellness' 
                ? (isLightPage ? 'text-[#b87c3f] border-[#b87c3f] font-bold' : 'text-amber-300 border-amber-300 font-bold')
                : (isLightPage ? 'border-transparent text-stone-600 hover:text-stone-900' : 'border-transparent text-white/55 hover:text-white')
            }`}
          >
            Wellness
          </button>
          <button 
            type="button"
            onClick={() => setCurrentPage('pricing')} 
            className={`transition-all cursor-pointer whitespace-nowrap pb-1 border-b-2 ${
              currentPage === 'pricing' 
                ? (isLightPage ? 'text-[#b87c3f] border-[#b87c3f] font-bold' : 'text-amber-300 border-amber-300 font-bold')
                : (isLightPage ? 'border-transparent text-stone-600 hover:text-stone-900' : 'border-transparent text-white/55 hover:text-white')
            }`}
          >
            Pricing
          </button>
          <button 
            type="button"
            onClick={() => setCurrentPage('about')} 
            className={`transition-all cursor-pointer whitespace-nowrap pb-1 border-b-2 ${
              currentPage === 'about' 
                ? (isLightPage ? 'text-[#b87c3f] border-[#b87c3f] font-bold' : 'text-amber-300 border-amber-300 font-bold')
                : (isLightPage ? 'border-transparent text-stone-600 hover:text-stone-900' : 'border-transparent text-white/55 hover:text-white')
            }`}
          >
            About Us
          </button>
          <button 
            type="button"
            onClick={() => setCurrentPage('weddings')} 
            className={`transition-all cursor-pointer whitespace-nowrap pb-1 border-b-2 ${
              currentPage === 'weddings' 
                ? (isLightPage ? 'text-[#b87c3f] border-[#b87c3f] font-bold' : 'text-amber-300 border-amber-300 font-bold')
                : (isLightPage ? 'border-transparent text-stone-600 hover:text-stone-900' : 'border-transparent text-white/55 hover:text-white')
            }`}
          >
            Weddings
          </button>
          <button 
            type="button"
            onClick={() => setCurrentPage('faq')} 
            className={`transition-all cursor-pointer whitespace-nowrap pb-1 border-b-2 ${
              currentPage === 'faq' 
                ? (isLightPage ? 'text-[#b87c3f] border-[#b87c3f] font-bold' : 'text-amber-300 border-amber-300 font-bold')
                : (isLightPage ? 'border-transparent text-stone-600 hover:text-stone-900' : 'border-transparent text-white/55 hover:text-white')
            }`}
          >
            FAQs
          </button>
          <button 
            type="button"
            onClick={() => setCurrentPage('care')} 
            className={`transition-all cursor-pointer whitespace-nowrap pb-1 border-b-2 ${
              currentPage === 'care' 
                ? (isLightPage ? 'text-[#b87c3f] border-[#b87c3f] font-bold' : 'text-amber-300 border-amber-300 font-bold')
                : (isLightPage ? 'border-transparent text-stone-600 hover:text-stone-900' : 'border-transparent text-white/55 hover:text-white')
            }`}
          >
            Care Guide
          </button>
          <button 
            type="button"
            onClick={() => setCurrentPage('portal')} 
            className={`transition-all cursor-pointer whitespace-nowrap pb-1 border-b-2 ${
              currentPage === 'portal' 
                ? (isLightPage ? 'text-[#b87c3f] border-[#b87c3f] font-bold' : 'text-amber-300 border-amber-300 font-bold')
                : (isLightPage ? 'border-transparent text-stone-600 hover:text-stone-900' : 'border-transparent text-white/55 hover:text-white')
            }`}
          >
            Portal
          </button>
          <button 
            type="button"
            onClick={() => setCurrentPage('contact')} 
            className={`transition-all cursor-pointer whitespace-nowrap pb-1 border-b-2 ${
              currentPage === 'contact' 
                ? (isLightPage ? 'text-[#b87c3f] border-[#b87c3f] font-bold' : 'text-amber-300 border-amber-300 font-bold')
                : (isLightPage ? 'border-transparent text-stone-600 hover:text-stone-900' : 'border-transparent text-white/55 hover:text-white')
            }`}
          >
            Contact
          </button>
          <button 
            type="button"
            onClick={() => setCurrentPage('video')} 
            className={`transition-all cursor-pointer whitespace-nowrap pb-1 border-b-2 flex items-center gap-1.5 ${
              currentPage === 'video' 
                ? (isLightPage ? 'text-[#b87c3f] border-[#b87c3f] font-bold' : 'text-amber-300 border-amber-300 font-bold')
                : (isLightPage ? 'border-transparent text-stone-600 hover:text-stone-900' : 'border-transparent text-amber-300/80 hover:text-amber-300')
            }`}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span>Video Studio</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button 
            type="button"
            onClick={() => setCurrentPage('book')}
            className={`px-5 py-1.5 border-2 text-[11px] md:text-xs tracking-[0.18em] font-bold uppercase whitespace-nowrap rounded-full flex items-center justify-center cursor-pointer shadow-sm transition-all duration-300 ${
              currentPage === 'book'
                ? 'bg-[#b87c3f] text-white border-[#b87c3f]'
                : isLightPage 
                  ? 'border-[#b87c3f] text-[#b87c3f] hover:bg-[#b87c3f] hover:text-white' 
                  : 'border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-black'
            }`}
          >
            BOOK
          </button>
          <a 
            href="https://book.sunstudiotan.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Open booking in new tab"
            className={`p-1.5 rounded-full border transition-colors hidden sm:flex items-center justify-center ${
              isLightPage ? 'border-stone-300 text-stone-600 hover:text-[#b87c3f]' : 'border-white/20 text-white/60 hover:text-amber-300'
            }`}
          >
            <span className="sr-only">Open booking in new tab</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          </a>
        </div>
      </nav>

      {/* Main Content Areas */}
      <main ref={mainRef} className="relative z-10 flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Home onNavigate={(page) => setCurrentPage(page)} />
            </motion.div>
          )}

          {/* CARE GUIDE CHRONOLOGICAL CHECKLIST LOOKBOOK */}
          {currentPage === 'care' && (
            <motion.div
              key="care-guide-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CareGuide />
            </motion.div>
          )}

          {/* CLIENT ACCOUNT AND MEMBERSHIP PORTAL */}
          {currentPage === 'portal' && (
            <motion.div
              key="client-portal-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ClientPortal 
                onLogout={() => {
                  // Simulate clean restart
                  localStorage.removeItem('sun_studio_profile');
                  localStorage.removeItem('sun_studio_appointments');
                  window.location.reload();
                }} 
                onNavigateToBooking={() => {
                  window.open('https://book.sunstudiotan.com/', '_blank');
                }} 
              />
            </motion.div>
          )}

          {/* TANNING SERVICE PAGE */}
          {currentPage === 'tanning' && (
            <motion.div
              key="tanning-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Tanning onNavigateToWellness={() => setCurrentPage('wellness')} />
            </motion.div>
          )}

          {/* WELLNESS BOOSTS PAGE */}
          {currentPage === 'wellness' && (
            <motion.div
              key="wellness-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Wellness />
            </motion.div>
          )}

          {/* PRICING & MEMBERSHIPS PAGE */}
          {currentPage === 'pricing' && (
            <motion.div
              key="pricing-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Pricing onNavigate={(page) => setCurrentPage(page)} />
            </motion.div>
          )}

          {/* ABOUT US STORY PAGE */}
          {currentPage === 'about' && (
            <motion.div
              key="about-studio-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <AboutUs onNavigate={(page) => setCurrentPage(page)} />
            </motion.div>
          )}

          {/* BRIDAL & WEDDINGS PAGE */}
          {currentPage === 'weddings' && (
            <motion.div
              key="weddings-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Weddings onNavigate={(page) => setCurrentPage(page)} />
            </motion.div>
          )}

          {/* FAQs SUPPORT AND ACCORDIONS PAGE */}
          {currentPage === 'faq' && (
            <motion.div
              key="faqs-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <FAQs />
            </motion.div>
          )}

          {/* CONTACT US DETAILS AND FORM PAGE */}
          {currentPage === 'contact' && (
            <motion.div
              key="contact-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ContactUs />
            </motion.div>
          )}

          {/* EMBEDDED ONLINE BOOKING (sunstudiotan.com/book) */}
          {currentPage === 'book' && (
            <motion.div
              key="book-embed-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BookEmbed onNavigateHome={() => setCurrentPage('home')} />
            </motion.div>
          )}

          {/* AI VEO VIDEO MOTION STUDIO */}
          {currentPage === 'video' && (
            <motion.div
              key="video-studio-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <VideoStudio onNavigateToBook={() => setCurrentPage('book')} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      {currentPage !== 'faq' && currentPage !== 'book' && (
        <footer className="relative z-10 bg-black border-t border-white/5 pt-20 pb-10 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white flex items-center justify-center rounded-full">
                <span className="text-black font-bold text-sm tracking-tighter">SS</span>
              </div>
              <span className="text-lg font-light tracking-[0.3em] uppercase">Sun Studio</span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed text-sm">
              Columbus's premier destination for luxury spray tanning and teeth whitening. Dedicated to excellence since 2016.
            </p>
            <div className="w-full max-w-md h-40 rounded-sm overflow-hidden border border-white/10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              <iframe
                title="Sun Studio Google Business Profile Map"
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
          
          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold mb-8 text-white/60">Pages</h4>
            <ul className="space-y-4 text-xs font-mono uppercase tracking-widest text-white/40">
              <li>
                <button type="button" onClick={() => setCurrentPage('home')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  Home & Story
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setCurrentPage('tanning')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  Airbrush Tanning
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setCurrentPage('wellness')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  Wellness Boosts
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setCurrentPage('pricing')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  Pricing &amp; Memberships
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setCurrentPage('book')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  Online Booking (/book)
                </button>
              </li>
              <li>
                <a 
                  href="https://book.sunstudiotan.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-300 transition-colors cursor-pointer text-left block"
                >
                  Direct Portal (book.sunstudiotan.com)
                </a>
              </li>
              <li>
                <button type="button" onClick={() => setCurrentPage('about')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  About Studio
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setCurrentPage('weddings')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  Bridal &amp; Weddings
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setCurrentPage('faq')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  Frequently FAQs
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setCurrentPage('care')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  Skincare Protocols
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setCurrentPage('portal')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  My Account Club
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setCurrentPage('video')} className="hover:text-amber-300 transition-colors cursor-pointer text-left flex items-center gap-1.5 text-amber-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  AI Video Studio (Veo)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => setCurrentPage('contact')} className="hover:text-amber-300 transition-colors cursor-pointer text-left">
                  Contact Studio
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold mb-8 text-white/60">Connect</h4>
            <div className="flex gap-6 text-xl text-white/40">
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="tel:6143330051" className="hover:text-white transition-colors"><Phone size={20} /></a>
            </div>
            <div className="mt-8">
              <p className="text-xs text-white/40">612 N High St<br />Columbus, OH 43215</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/20">© 2025 Sun Studio Tan. All Rights Reserved.</p>
          <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-white/20">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
      )}

      <Chatbot />
    </div>
  );
}
