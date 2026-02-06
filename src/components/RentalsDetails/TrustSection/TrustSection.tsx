'use client';

import React from 'react';
import { Award, Clock, ShieldCheck, Shield } from 'lucide-react';

/**
 * --- Component: TrustSection ---
 * A cinematic safety and trust area featuring glassmorphic cards,
 * glowing interactive states, and high-end typography.
 */
export default function TrustSection() {
  
  const trustMarkers = [
    {
      icon: Award,
      title: "Quality Insured",
      desc: "Coverage up to ₹1,00,000 for any technical faults during use.",
      accent: "from-yellow-500/20 to-transparent"
    },
    {
      icon: Clock,
      title: "Flexible Pickup",
      desc: "24/7 self-service pickup points available across the city.",
      accent: "from-[#5A80E9]/20 to-transparent"
    },
    {
      icon: ShieldCheck,
      title: "Rentora Verified",
      desc: "Every item is inspected and tested by experts before listing.",
      accent: "from-green-500/20 to-transparent"
    }
  ];

  return (
    <section className="relative group py-12">
      {/* Decorative background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#5A80E9]/5 blur-[120px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      <div className="space-y-10">
        {/* Section Header with Icon Pill */}
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-[#5A80E9]/10 flex items-center justify-center border border-[#5A80E9]/20 shadow-[0_0_20px_rgba(90,128,233,0.1)]">
            <Shield size={22} className="text-[#5A80E9]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-none">
            Safety & <span className="text-[#5A80E9]">Trust</span>
          </h2>
        </div>

        {/* Responsive Grid of Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {trustMarkers.map((item, i) => {
            const Icon = item.icon;
            return (
              <div 
                key={i} 
                className="group/card relative p-8 rounded-[3rem] bg-[#12131C]/40 border border-white/5 backdrop-blur-md transition-all duration-500 hover:border-[#5A80E9]/30 hover:bg-[#12131C]/60 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] text-center"
              >
                {/* Gradient Background Accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 rounded-[3rem]`} />

                {/* Icon Container with Glow */}
                <div className="relative mb-6 inline-flex w-16 h-16 rounded-2xl bg-white/5 items-center justify-center border border-white/10 group-hover/card:border-[#5A80E9]/40 group-hover/card:bg-[#5A80E9]/10 transition-all duration-500">
                  <Icon 
                    size={32} 
                    className="text-[#C5C8D7] group-hover/card:text-[#5A80E9] transition-colors duration-500 group-hover/card:scale-110" 
                  />
                  <div className="absolute inset-0 rounded-2xl bg-[#5A80E9]/20 blur-2xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3">
                  <h3 className="text-sm font-black text-white uppercase tracking-[3px]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#C5C8D7] font-medium leading-relaxed opacity-80 group-hover/card:opacity-100 transition-opacity">
                    {item.desc}
                  </p>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-[3rem] pointer-events-none">
                  <div className="absolute inset-0 -translate-x-full group-hover/card:animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Verification Tagline */}
        <div className="flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[4px] text-[#C5C8D7]/20 pt-4">
          <ShieldCheck size={12} />
          Encrypted Marketplace Protocol v2.5
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200;400;700;900&display=swap');
        
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .group-hover\\/card\\:animate-shimmer {
          animation: shimmer 2s infinite ease-in-out;
        }
      ` }} />
    </section>
  );
}