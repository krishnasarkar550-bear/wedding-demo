import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, Clock, Heart, Music, Map as MapIcon, ChevronDown, Sparkles, Wind } from 'lucide-react';

// --- Components ---

const Firefly = ({ style }: { style: React.CSSProperties, key?: React.Key }) => (
  <div className="firefly" style={style} />
);

const Petal = ({ style }: { style: React.CSSProperties, key?: React.Key }) => (
  <div className="petal" style={style}>
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0C10 0 20 5 20 10C20 15 15 20 10 20C5 20 0 15 0 10C0 5 10 0 10 0Z" fill="#ffc1e3" fillOpacity="0.6" />
    </svg>
  </div>
);

const Sparkle = ({ style }: { style: React.CSSProperties, key?: React.Key }) => (
  <div className="sparkle" style={style} />
);

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <motion.h3 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-sm uppercase tracking-[0.4em] text-[#c4a484] font-sans font-bold mb-4"
  >
    {children}
  </motion.h3>
);

// --- Main App ---

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Generate random fireflies, petals, and sparkles
  const fireflies = useMemo(() => Array.from({ length: 25 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${3 + Math.random() * 4}s`,
  })), []);

  const petals = useMemo(() => Array.from({ length: 15 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 10}s`,
    animationDuration: `${10 + Math.random() * 10}s`,
    transform: `scale(${0.5 + Math.random()})`,
  })), []);

  const sparkles = useMemo(() => Array.from({ length: 30 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 3}s`,
  })), []);

  const weddingData = {
    bride: {
      name: "Sreeparna",
      parents: "Mr. & Mrs. [Bride's Parents]"
    },
    groom: {
      name: "Krishna",
      parents: "Mr. & Mrs. [Groom's Parents]"
    },
    date: "Sunday, December 13, 2026",
    time: "5:30 PM",
    venue: "The Enchanted Forest Estate",
    address: "777 Willow Creek Road, Serenity Valley, CA 90210",
    message: "In the quiet whisper of the leaves and the golden glow of the setting sun, we found a love that feels like home. We invite you to witness the beginning of our forever in a place where nature and dreams intertwine.",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733248043701!2d-118.4003563!3d34.0736204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c37927944541!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden selection:bg-[#fce4ec]">
      {/* --- Background Layers --- */}
      <div className="fixed inset-0 sunset-bg z-0" />
      
      {/* Fireflies Layer */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {fireflies.map((f, i) => (
          <Firefly key={i} style={{ 
            left: f.left, 
            top: f.top, 
            animation: `firefly ${f.animationDuration} infinite ease-in-out ${f.animationDelay}` 
          }} />
        ))}
      </div>

      {/* Petals Layer */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {petals.map((p, i) => (
          <Petal key={i} style={{ 
            left: p.left, 
            animation: `fall ${p.animationDuration} infinite linear ${p.animationDelay}`,
            transform: p.transform
          }} />
        ))}
      </div>

      {/* Sparkles Layer */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {sparkles.map((s, i) => (
          <Sparkle key={i} style={{ 
            left: s.left, 
            top: s.top, 
            animation: `sparkle 3s infinite ease-in-out ${s.animationDelay}` 
          }} />
        ))}
      </div>

      {/* --- Content --- */}
      <AnimatePresence>
        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="relative z-20"
          >
            {/* Hero Section */}
            <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center space-y-12">
              {/* Floral Wreath & Couple */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative"
              >
                {/* Animated Floral Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="w-72 h-72 md:w-96 md:h-96 rounded-full border-[12px] border-white/30 shadow-2xl overflow-hidden relative"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop" 
                    alt="Couple"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay Wreath Frame */}
                  <div className="absolute inset-0 border-[16px] border-transparent rounded-full shadow-[inset_0_0_40px_rgba(255,255,255,0.8)]" />
                </motion.div>
                
                {/* Floating Flowers around the ring */}
                <motion.img 
                  src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=200&auto=format&fit=crop"
                  className="absolute -top-10 -left-10 w-32 h-32 object-contain animate-sway pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                <motion.img 
                  src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=200&auto=format&fit=crop"
                  className="absolute -bottom-10 -right-10 w-32 h-32 object-contain animate-sway pointer-events-none scale-x-[-1]"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Names */}
              <div className="space-y-4">
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="text-6xl md:text-8xl font-script text-[#5d5347] drop-shadow-sm"
                >
                  {weddingData.bride.name}
                </motion.h1>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-2xl font-serif text-[#c4a484] italic"
                >
                  &
                </motion.div>
                <motion.h1 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 1 }}
                  className="text-6xl md:text-8xl font-script text-[#5d5347] drop-shadow-sm"
                >
                  {weddingData.groom.name}
                </motion.h1>
              </div>

              {/* Scroll Indicator */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="pt-12"
              >
                <ChevronDown className="w-6 h-6 text-[#c4a484]" />
              </motion.div>
            </section>

            {/* Details Section */}
            <section className="max-w-4xl mx-auto px-6 py-24 space-y-32 text-center">
              
              {/* Invitation Message */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <SectionHeader>Our Story</SectionHeader>
                <p className="text-2xl md:text-3xl font-serif italic text-[#6b5e4c] leading-relaxed max-w-2xl mx-auto">
                  "{weddingData.message}"
                </p>
                <div className="flex justify-center space-x-4 text-[#c4a484]">
                  <Sparkles className="w-4 h-4" />
                  <Heart className="w-4 h-4 fill-current" />
                  <Sparkles className="w-4 h-4" />
                </div>
              </motion.div>

              {/* Bride & Groom Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                <motion.div 
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="space-y-6 p-8 bg-white/30 backdrop-blur-md rounded-[40px] border border-white/40 shadow-xl"
                >
                  <SectionHeader>The Bride</SectionHeader>
                  <h2 className="text-4xl font-display text-[#5d5347]">{weddingData.bride.name}</h2>
                  <div className="space-y-1">
                    <p className="text-sm uppercase tracking-widest text-[#8c7e6d]">Daughter of</p>
                    <p className="text-lg font-serif italic">{weddingData.bride.parents}</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="space-y-6 p-8 bg-white/30 backdrop-blur-md rounded-[40px] border border-white/40 shadow-xl"
                >
                  <SectionHeader>The Groom</SectionHeader>
                  <h2 className="text-4xl font-display text-[#5d5347]">{weddingData.groom.name}</h2>
                  <div className="space-y-1">
                    <p className="text-sm uppercase tracking-widest text-[#8c7e6d]">Son of</p>
                    <p className="text-lg font-serif italic">{weddingData.groom.parents}</p>
                  </div>
                </motion.div>
              </div>

              {/* Wedding Details */}
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-12 py-16 border-y border-[#c4a484]/30"
              >
                <SectionHeader>The Celebration</SectionHeader>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#fdf1e6] rounded-full flex items-center justify-center mx-auto text-[#c4a484]">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <h4 className="font-sans font-bold uppercase tracking-widest text-xs text-[#8c7e6d]">The Date</h4>
                    <p className="text-xl font-display">{weddingData.date}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#fdf1e6] rounded-full flex items-center justify-center mx-auto text-[#c4a484]">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h4 className="font-sans font-bold uppercase tracking-widest text-xs text-[#8c7e6d]">The Time</h4>
                    <p className="text-xl font-display">{weddingData.time}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-[#fdf1e6] rounded-full flex items-center justify-center mx-auto text-[#c4a484]">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h4 className="font-sans font-bold uppercase tracking-widest text-xs text-[#8c7e6d]">The Venue</h4>
                    <p className="text-xl font-display">{weddingData.venue}</p>
                  </div>
                </div>
              </motion.div>

              {/* Location Map */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <SectionHeader>Location</SectionHeader>
                <p className="text-lg text-[#6b5e4c] mb-8">{weddingData.address}</p>
                <div className="relative w-full h-[400px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/50">
                  <iframe 
                    src={weddingData.mapUrl}
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  {/* Animated Pin Overlay (Visual only) */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  >
                    <MapPin className="w-12 h-12 text-[#ff4081] fill-[#ff4081]/20 drop-shadow-lg" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Final Footer */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pt-24 space-y-6"
              >
                <div className="text-[#c4a484] flex justify-center space-x-2">
                  <Wind className="w-5 h-5 animate-sway" />
                  <Heart className="w-5 h-5 fill-current" />
                  <Wind className="w-5 h-5 animate-sway" />
                </div>
                <p className="text-sm uppercase tracking-[0.5em] text-[#8c7e6d] font-bold">We can't wait to see you</p>
                <p className="text-xs text-[#c4a484] italic">#SreeparnaAndKrishna2026</p>
              </motion.div>

            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Decorative Floating Elements --- */}
      {/* Butterflies / Birds Placeholder */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-1/4 left-10 z-30 pointer-events-none opacity-40"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#c4a484" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
          <path d="M12 12l4 4" />
          <path d="M12 12l-4 4" />
          <path d="M12 12l4-4" />
          <path d="M12 12l-4-4" />
        </svg>
      </motion.div>

    </div>
  );
}
