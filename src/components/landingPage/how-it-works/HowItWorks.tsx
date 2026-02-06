'use client';

import React, { useEffect, useRef, useState } from 'react';

// Step data with detailed descriptions for a more professional feel
const steps = [
  { 
    step: '01', 
    title: 'Find Gear', 
    icon: '🔍', 
    desc: 'Browse our curated collection of premium equipment and professional gear.' 
  },
  { 
    step: '02', 
    title: 'Set Dates', 
    icon: '📅', 
    desc: 'Choose your flexible rental period with transparent daily rates.' 
  },
  { 
    step: '03', 
    title: 'Pay & Secure', 
    icon: '💳', 
    desc: 'Encrypted checkout including a fully refundable security deposit.' 
  },
  { 
    step: '04', 
    title: 'Use It', 
    icon: '🚀', 
    desc: 'Enjoy professional performance without the overhead of ownership.' 
  },
  { 
    step: '05', 
    title: 'Return', 
    icon: '🔄', 
    desc: 'Return easily and get your deposit credited back instantly.' 
  },
];

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 bg-[#12131C] overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#5A80E9]/30 to-transparent"></div>
      
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            HOW <span className="text-[#5A80E9]">RENTORA</span> WORKS
          </h2>
          <div className="w-24 h-1.5 bg-[#5A80E9] mx-auto rounded-full shadow-[0_0_20px_#5A80E9]"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5A80E9]/20 to-transparent -translate-y-24 z-0"></div>

          {steps.map((s, idx) => (
            <div 
              key={s.step}
              style={{ transitionDelay: `${idx * 150}ms` }}
              className={`group relative p-10 bg-[#0D1117] rounded-[2.5rem] border border-white/5 transition-all duration-700 transform hover:-translate-y-4 hover:border-[#5A80E9]/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              {/* Animated Glass Shimmer */}
              <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] pointer-events-none">
                <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>

              {/* Step Number Background */}
              <span className="absolute top-6 left-8 text-7xl font-black text-white opacity-[0.03] group-hover:opacity-10 transition-opacity pointer-events-none select-none">
                #{s.step}
              </span>

              {/* Icon with Ambient Glow */}
              <div className="relative mb-8 text-6xl group-hover:scale-125 transition-transform duration-500 ease-out z-10 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                {s.icon}
                <div className="absolute inset-0 bg-[#5A80E9] blur-3xl opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-black text-white uppercase tracking-widest mb-4 group-hover:text-[#5A80E9] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-[#C5C8D7] font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Bottom Decorative Bar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#5A80E9] rounded-full transition-all duration-500 group-hover:w-1/2 group-hover:shadow-[0_0_15px_#5A80E9]"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .group-hover\\:animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;