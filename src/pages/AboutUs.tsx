import { motion } from 'motion/react';
import { MapPin, Star, Users, Award, Heart, Sparkles, Clock, ShieldCheck, Car, Calendar, ExternalLink } from 'lucide-react';
import joeyPortrait from '../assets/images/regenerated_image_1780550620497.png';
import columbusFeature from '../assets/images/regenerated_image_1780550621473.png';
import technicianImage from '../assets/images/regenerated_image_1780550622479.png';
import { Page } from '../types';

interface AboutUsProps {
  onNavigate?: (page: Page) => void;
}

interface TimelineEvent {
  year: string;
  title: string;
  location: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2001',
    title: 'City Tan',
    location: 'Studio City, California',
    description: "Joey, the founder of Sun Studio Tan, started his tanning industry venture in 2001 at City Tan, the initial salon where he worked. Situated in Studio City, California, City Tan catered to affluent locals and celebrities. This early experience laid the groundwork for Joey's successful career in the tanning sector, providing him with valuable insights and skills."
  },
  {
    year: '2003',
    title: 'Portofino Sun',
    location: 'New York City',
    description: "In 2003, Joey came back to New York City to pursue a job opportunity in Manhattan. Managing Portofino Sun in the East Village proved to be a fulfilling experience, providing access to a varied clientele, including celebrities. This position showcased his management abilities and strengthened his ties to the entertainment sector, marking a crucial milestone in his continued achievements in both business and entertainment."
  },
  {
    year: '2005',
    title: 'Sun of a Beach',
    location: 'Powell, Ohio',
    description: "With ideas of a new business, Joey moved home to Ohio. He decided to bring a little extra sunshine to town. Enter Sun of a Beach, a boutique tanning salon smack dab in the heart of Powell. It's not your average tanning stop - oh no, we're talking four levels of UV tanning and a UVA bed that's high pressure and high satisfaction."
  },
  {
    year: '2007',
    title: 'Local Success',
    location: 'Powell, Ohio',
    description: "The locals caught on quick, and before you could say \"bronzed\", Sun of a Beach was the go-to tanning spot for everyone, from high schoolers to adults. Thanks to top-notch services and a prime location, it was like the salon had its own little spot of permanent sunshine in the local tanning scene."
  },
  {
    year: '2008',
    title: 'Sunset Tan',
    location: 'Los Angeles, California',
    description: "After making the decision to return to Los Angeles, where Joey's journey in the tanning salon industry began, he and his partner, along with their two dogs, Gizmo and Wilbur, relocated to sublet a pool house. Joey secured a position at the renowned Sunset Tan, known for its appearance on E!'s hit TV show."
  },
  {
    year: '2009',
    title: 'Hollywood Tans',
    location: 'Los Angeles, California',
    description: "While working at Sunset Tan, Joey met the owner of a competing salon, Hollywood Tans. After a discussion, Joey was offered the chance to collaborate and help expand Hollywood Tans, aiming to make it the top indoor tanning option on the west coast."
  },
  {
    year: '2013',
    title: 'Sun Studio LA',
    location: 'Los Angeles, California',
    description: "After two years of dedicated effort and expanding to a second location, they decided to rebrand the business as Sun Studio LA. This marked a significant milestone in their journey within the tanning industry, signifying their growth and commitment to providing top-tier services. The new brand not only reflected their expanded presence but also reinforced their dedication to excellence in the market."
  },
  {
    year: '2016',
    title: 'Airbrush Tans OH',
    location: 'Columbus, Ohio',
    description: "In 2016, the saying \"there's no place like home\" took on new meaning when Joey decided to return to Ohio and launch Airbrush Tans OH, a new business idea he and Todd started themselves. The introduction of the Hollywood sunless tan quickly gained traction, and the business began to grow rapidly."
  },
  {
    year: 'Present',
    title: 'Sun Studio Tan',
    location: 'Columbus, Ohio',
    description: "Today, Sun Studio Tan stands as a premier tanning destination, combining over two decades of industry expertise with cutting-edge techniques to deliver the perfect sun-kissed glow."
  }
];

export default function AboutUs({ onNavigate }: AboutUsProps) {
  const scrollToTimeline = () => {
    const el = document.getElementById('our-journey');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-stone-900 font-sans">
      
      {/* 1. HERO SECTION: Welcome to Sun Studio Tan & Joey Anthony Device Card */}
      <section className="relative pt-12 pb-20 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Bio Intro & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#c59336] font-serif italic text-3xl sm:text-4xl lg:text-5xl block mb-2 font-normal">
                Welcome to
              </span>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.05] font-normal">
                <span className="text-stone-900 block font-semibold">Sun Studio</span>
                <span className="text-amber-500 block font-normal">Tan</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-stone-600 text-base sm:text-lg font-light leading-relaxed max-w-xl"
            >
              Over two decades of passion, expertise, and dedication to helping you achieve the perfect, sun-kissed glow. Our journey is one of excellence, innovation, and unwavering commitment to your radiance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="pt-2"
            >
              <button
                type="button"
                onClick={scrollToTimeline}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border border-amber-500/50 bg-[#FBF7EE] text-stone-800 hover:bg-amber-100/70 hover:border-amber-500 transition-all shadow-sm text-sm font-medium tracking-wide cursor-pointer group"
              >
                <span>Explore Our Story</span>
                <span className="ml-2 text-amber-600 group-hover:translate-y-0.5 transition-transform">↓</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Framed Device Mockup featuring Joey Anthony in Studio */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[340px] sm:max-w-[380px]"
            >
              {/* Outer Warm Ambient Glow & Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-200/40 via-amber-100/20 to-stone-200/40 rounded-[2.5rem] filter blur-xl opacity-70"></div>
              
              {/* Phone/Tablet Device Shell */}
              <div className="relative bg-[#231F20] p-3 sm:p-4 rounded-[2.5rem] shadow-[0_25px_50px_-12px_rgba(40,30,20,0.25)] border-4 border-stone-800">
                
                {/* Device Screen */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-stone-900">
                  <img
                    src={technicianImage}
                    alt="Joey Anthony - Founder & Owner of Sun Studio Tan"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Gradient for Bottom Readability */}
                  <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

                  {/* Overlaid Badges */}
                  <div className="absolute bottom-4 inset-x-4 flex items-end justify-between z-10">
                    <div>
                      <p className="text-white font-serif italic text-lg sm:text-xl font-medium tracking-wide">
                        Joey Anthony
                      </p>
                      <p className="text-[11px] text-amber-300 uppercase tracking-widest font-sans font-medium">
                        Founder &amp; Owner
                      </p>
                    </div>

                    <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 flex items-center gap-1.5 shadow-sm">
                      <span className="text-white text-xs font-semibold tracking-tight">sunstudio</span>
                      <span className="text-[10px] text-amber-300 font-light">• Joey Anthony, Owner</span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 2. TIMELINE SECTION: Our Journey - Two Decades of Tanning Excellence */}
      <section id="our-journey" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#c59336] font-serif italic text-3xl sm:text-4xl block mb-2 font-normal"
          >
            Our Journey
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 tracking-tight font-normal"
          >
            Two Decades of Tanning Excellence
          </motion.h2>
        </div>

        {/* Alternating Timeline Tree */}
        <div className="relative">
          {/* Central Vertical Amber Line (Desktop) */}
          <div className="absolute left-1/2 top-4 bottom-4 w-[2px] bg-amber-500/40 -translate-x-1/2 hidden md:block"></div>
          {/* Left Vertical Line (Mobile) */}
          <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-amber-500/40 md:hidden"></div>

          <div className="space-y-16 sm:space-y-20 relative">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={event.year}
                  className={`flex flex-col md:flex-row items-center justify-between relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Dot (Desktop) */}
                  <div className="absolute left-1/2 top-10 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 border-[#FAF9F5] bg-amber-500 shadow-sm z-10 hidden md:block"></div>
                  
                  {/* Timeline Node Dot (Mobile) */}
                  <div className="absolute left-6 top-10 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-[#FAF9F5] bg-amber-500 shadow-sm z-10 md:hidden"></div>

                  {/* Card Content */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 25 : -25 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className="bg-white p-7 sm:p-8 rounded-2xl border border-stone-200/80 shadow-[0_4px_24px_rgba(40,30,20,0.04)] hover:shadow-[0_8px_30px_rgba(40,30,20,0.08)] transition-all duration-300 relative group"
                    >
                      {/* Golden Year Badge in top right corner */}
                      <div className="absolute top-5 right-5 bg-amber-500 text-white font-serif font-bold text-xs px-3.5 py-1 rounded-md tracking-wider shadow-xs">
                        {event.year}
                      </div>

                      {/* Event Title */}
                      <h3 className="font-serif text-2xl text-stone-900 font-semibold mb-1 pr-16 group-hover:text-amber-800 transition-colors">
                        {event.title}
                      </h3>

                      {/* Event Location */}
                      <div className="flex items-center gap-1.5 text-amber-700 font-serif italic text-xs mb-4">
                        <MapPin size={13} className="text-amber-600 shrink-0" />
                        <span>{event.location}</span>
                      </div>

                      {/* Event Description */}
                      <p className="text-stone-600 text-sm leading-relaxed font-light">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. MEET THE OWNER SECTION: Joey Anthony & Stats */}
      <section className="bg-white/70 border-t border-b border-stone-200/60 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Side: Owner Portrait & "Featured on Out & About Columbus" Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-stone-200"
              >
                <img
                  src={joeyPortrait}
                  alt="Joey Anthony in blue blazer"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                {/* Overlaid Bottom Title */}
                <div className="absolute bottom-6 left-6 z-10">
                  <div className="border border-white/40 px-4 py-1.5 backdrop-blur-xs bg-black/20 inline-block">
                    <h3 className="text-white text-xl sm:text-2xl font-serif tracking-[0.2em] uppercase font-bold">
                      Joey Anthony
                    </h3>
                  </div>
                </div>
              </motion.div>

              {/* Overlapping TV Segment Thumbnail */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative -mt-12 z-20 bg-stone-900 text-white rounded-xl p-2.5 shadow-2xl border border-stone-800 max-w-xs w-full mx-4"
              >
                <div className="aspect-[16/9] w-full rounded-lg overflow-hidden relative">
                  <img
                    src={columbusFeature}
                    alt="Featured on Out and About Columbus"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-amber-500/10 mix-blend-color"></div>
                </div>
                <div className="text-center py-1.5">
                  <p className="text-[9px] text-amber-400 uppercase tracking-[0.25em] font-extrabold">Featured on</p>
                  <p className="text-xs text-stone-200 font-serif italic mt-0.5 font-medium">Out &amp; About Columbus</p>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Owner Story & 4 Stats */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="font-serif italic text-[#c59336] text-2xl sm:text-3xl block mb-1">
                  Meet the Owner
                </span>
                <h2 className="text-4xl sm:text-5xl font-serif text-stone-900 tracking-tight font-semibold mb-6">
                  Joey Anthony
                </h2>

                <div className="space-y-4 text-stone-600 leading-relaxed font-light text-base sm:text-lg">
                  <p>
                    Joey Anthony's journey in the tanning industry began in 2001 at City Tan in Studio City, California, where he first discovered his passion for helping clients achieve their perfect glow. What started as a job quickly became a calling.
                  </p>
                  <p>
                    From managing prestigious salons in New York City to founding his own businesses in Ohio and Los Angeles, Joey has spent over two decades mastering every aspect of the tanning industry. His experience spans UV tanning, spray tanning, and the latest airbrush techniques.
                  </p>
                  <p>
                    Having worked with celebrities and everyday clients alike, Joey brings the same level of dedication and expertise to every appointment. His philosophy is simple: everyone deserves to feel confident and radiant in their own skin.
                  </p>
                </div>
              </div>

              {/* 4 Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                <div className="bg-[#FAF9F5] p-4 rounded-xl border border-stone-200/80 shadow-xs text-center flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-amber-100/60 flex items-center justify-center text-amber-600 mb-2">
                    <Star size={16} fill="currentColor" />
                  </div>
                  <span className="text-2xl font-serif font-bold text-stone-900 block">20+</span>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold mt-0.5">Years Experience</span>
                </div>

                <div className="bg-[#FAF9F5] p-4 rounded-xl border border-stone-200/80 shadow-xs text-center flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-amber-100/60 flex items-center justify-center text-amber-600 mb-2">
                    <Users size={16} />
                  </div>
                  <span className="text-2xl font-serif font-bold text-stone-900 block">10K+</span>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold mt-0.5">Happy Clients</span>
                </div>

                <div className="bg-[#FAF9F5] p-4 rounded-xl border border-stone-200/80 shadow-xs text-center flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-amber-100/60 flex items-center justify-center text-amber-600 mb-2">
                    <Award size={16} />
                  </div>
                  <span className="text-2xl font-serif font-bold text-stone-900 block">5</span>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold mt-0.5">Salons Managed</span>
                </div>

                <div className="bg-[#FAF9F5] p-4 rounded-xl border border-stone-200/80 shadow-xs text-center flex flex-col items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-amber-100/60 flex items-center justify-center text-amber-600 mb-2">
                    <Heart size={16} fill="currentColor" />
                  </div>
                  <span className="text-2xl font-serif font-bold text-stone-900 block">100%</span>
                  <span className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold mt-0.5">Dedication</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FIND OUT MORE ABOUT SUN STUDIO TAN (Details & Rates Breakdown) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-stone-800">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif tracking-[0.15em] uppercase font-semibold text-stone-900">
            Find Out More About Sun Studio Tan
          </h2>
          <p className="text-stone-600 text-sm sm:text-base font-light mt-2 max-w-2xl mx-auto">
            A Luxury Spray Tan Experience in the Short North. Heated Airbrush Tanning for Elevated Comfort.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200/80 p-8 sm:p-10 shadow-sm space-y-6 text-stone-600 font-light leading-relaxed">
          <p className="text-stone-800 font-normal">
            Sun Studio Tan is a custom airbrush spray tanning and LED teeth whitening studio located at{' '}
            <strong className="font-semibold text-stone-900">612 N High Street</strong> in Columbus, Ohio's Short North Arts District ZIP: 43215 • Phone:{' '}
            <a href="tel:6143330051" className="text-amber-700 font-medium hover:underline">(614) 333-0051</a>
          </p>

          <p>
            Founded and operated by Joey Anthony, who has over 20 years of experience in the indoor tanning industry, including work with celebrity clientele in New York City, Studio City, and Los Angeles.
          </p>

          <div className="bg-[#FAF9F5] p-6 rounded-xl border border-stone-200/60 space-y-2">
            <h4 className="font-serif font-semibold text-stone-900 text-sm tracking-wide uppercase mb-3">
              Services Offered:
            </h4>
            <ul className="space-y-2 text-stone-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="font-medium text-stone-900">BASE airbrush spray tan</strong> (Norvell solution): $42 single session</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="font-medium text-stone-900">BUILD airbrush spray tan</strong> (Venetian solution): $52 single session</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="font-medium text-stone-900">BRONZED heated airbrush tan</strong> (Evolv solution): $62 single session</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="font-medium text-stone-900">LED teeth whitening</strong> (Bleach Bright certified): $139 single session</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="font-medium text-stone-900">Spray &amp; Save Membership:</strong> $9.99/month (1 tan + 30% off add-ons)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                <span><strong className="font-medium text-stone-900">Unlimited tanning memberships:</strong> $24.99–$59.99/month</span>
              </li>
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-sm pt-2">
            <div className="flex items-center gap-3">
              <Clock className="text-amber-600 shrink-0" size={18} />
              <span><strong className="font-medium text-stone-800">Hours:</strong> 7 Days a week 8am–8pm by appointment only.</span>
            </div>
            <div className="flex items-center gap-3">
              <Car className="text-amber-600 shrink-0" size={18} />
              <span><strong className="font-medium text-stone-800">Parking:</strong> Complimentary 2-hour parking at the Joseph Garage.</span>
            </div>
          </div>

          <p className="text-sm text-stone-500 pt-2 border-t border-stone-100">
            The studio has earned 35+ pages of 5-star reviews on Groupon and is listed on Yelp, the Short North arts district directory, Booksy, and Nextdoor.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 items-center justify-between">
            <span className="text-sm font-medium text-amber-800">
              Online booking available at sunstudiotan.com
            </span>
            <a
              href="https://book.sunstudiotan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-stone-900 hover:bg-amber-600 text-white text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm"
            >
              <span>Book Appointment</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* 5. THE PREMIUM SUNLESS TAN SOLUTIONS WE USE (Authentic Storytelling Essay) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-stone-200/50">
        <div className="text-center mb-12">
          {/* Decorative Calligraphic Script Heading matching screenshot */}
          <h2 className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-[#c59336] tracking-wide font-normal">
            The Premium Sunless Tan Solutions We Use
          </h2>
          <div className="w-24 h-0.5 bg-amber-400/40 mx-auto mt-4"></div>
        </div>

        <div className="space-y-6 text-stone-700 text-base sm:text-lg leading-relaxed font-light">
          <p>
            Sun Studio Tan is Columbus' Short North destination for a confident, camera-ready glow—without the orange, the streaks, or the "what happened to her?" moment. We're a boutique, appointment-focused studio built for people who want results that look like their skin... just upgraded.
          </p>

          <p>
            Our story starts long before our Short North address. Joey's tanning journey began in 2002 in Los Angeles, sparked by the kind of boutique experience that made clients feel instantly taken care of—like you walked in stressed and walked out shiny and unstoppable. That early inspiration turned into a career obsession: mastering tone, undertone, technique, and the little details that separate a "spray tan" from a flawless finish. The Columbus studio may be your local glow spot, but it's backed by 20+ years of real industry experience and thousands of bodies (politely!) painted with precision.
          </p>

          <p>
            Along the way, Joey's work has served everyone from everyday locals to high-pressure, high-visibility clients—performers, professionals, brides, and people who need to look expensive under bad lighting. When it comes to celebrity clients: we keep that lane classy and private. If you want name-drops on the site, only list the ones you're allowed to publicly mention—otherwise we stick to what matters: consistent, next-level results.
          </p>

          <p>
            So why Columbus—and specifically the Short North? Because this neighborhood fits how our clients actually live. We're positioned right in the middle of the action—steps from major hotels and event traffic—making it easy to book a glow before dinners, weddings, trips, photo shoots, shows, and big weekends.
          </p>

          <p>
            What makes Sun Studio Tan different is simple: we don't do "one-shade-fits-all." Every appointment starts with your goal (subtle sun-kissed, rich bronze, event-ready glow), your skin tone, and your timeline. We specialize in custom airbrush tans and we're known for Columbus' only Heated Airbrush Tan experience—designed for a smoother feel, more comfort, and longer-lasting results.
          </p>

          <p>
            No pushy upsells. No rushed booth spray and a prayer. Just expert technique, premium solutions, and a studio vibe that's calm, clean, and confidence-forward. If you're prepping for something big—or you just want to look alive in Ohio winter—welcome. Your glow starts here.
          </p>
        </div>

        {/* Closing Seal & Terms */}
        <div className="mt-16 pt-12 border-t border-stone-200/50 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-stone-300 via-stone-100 to-stone-400 border border-amber-600/30 flex items-center justify-center shadow-md mb-4">
            <span className="font-serif italic text-2xl font-bold text-stone-800">SS</span>
          </div>
          <p className="text-xs uppercase tracking-[0.25em] text-amber-800 font-bold font-sans">
            EST. 2005 • Columbus, Ohio
          </p>
          <a
            href="https://book.sunstudiotan.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] text-stone-400 hover:text-stone-600 transition-colors mt-8 underline"
          >
            Terms &amp; Conditions
          </a>
        </div>
      </section>

    </div>
  );
}
