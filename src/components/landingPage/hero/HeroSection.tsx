'use client';

import React from 'react';

const HeroSection = () => {
  return (
    // pt-24 offsets fixed header (h-20) + luxury spacing
    <section className="relative pt-24 h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#0D1117]">
      
      {/* 1. Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-top-view-of-a-man-on-a-bicycle-in-the-city-4436-large.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* 2. Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#5A80E9] rounded-full blur-[100px] opacity-30 animate-pulse-slow z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#A8C5FF] rounded-full blur-[120px] opacity-20 animate-float z-10" />

      {/* 3. Glass Card */}
      <div className="relative z-20 w-full px-6 md:px-12">
        <div className="relative w-full p-12 md:p-20 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-xl bg-white/5 group overflow-hidden">

          {/* Shimmer */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter hero-reveal">
              RENT ANYTHING.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5A80E9] to-[#A8C5FF]">
                OWN LESS.
              </span>
            </h1>

            <p className="mt-8 text-lg md:text-2xl text-[#C5C8D7] max-w-2xl mx-auto opacity-0 animate-fade-in delay-500">
              Unlock a lifestyle of limitless experience with high-end rentals for modern explorers.
            </p>

            <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center opacity-0 animate-fade-in delay-700">
              <button className="px-10 py-4 bg-[#5A80E9] rounded-full font-bold hover:scale-105 transition-all">
                Start Browsing
              </button>
              <button className="px-10 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-all">
                How it Works
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes shimmer {
          to { transform: translateX(100%); }
        }
        .group-hover\\:animate-shimmer:hover {
          animation: shimmer 1.5s infinite;
        }

        @keyframes pulse-slow {
          0%,100% { transform: scale(1); opacity: .3; }
          50% { transform: scale(1.1); opacity: .5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s infinite ease-in-out;
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 10s infinite ease-in-out;
        }

        @keyframes hero-reveal {
          from { opacity: 0; transform: translateY(40px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .hero-reveal {
          animation: hero-reveal 1.2s cubic-bezier(.2,.8,.2,1) forwards;
        }

        @keyframes fade-in {
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .delay-500 { animation-delay: .5s; }
        .delay-700 { animation-delay: .7s; }
      `}</style>
    </section>
  );
};

export default HeroSection;
