'use client';

import React from 'react';
import { CheckCircle2, Cpu, Zap } from 'lucide-react';

/**
 * --- Component: SpecsSection ---
 * A cinematic technical specifications area featuring glassmorphic cards,
 * glowing interactive states, and high-end typography.
 */
export default function SpecsSection({ specs }: { specs: string[] }) {
  
  // Skeleton state for loading or missing content
  if (!specs || specs.length === 0) {
    return (
      <div className="space-y-8 animate-pulse py-12">
        <div className="h-10 w-64 bg-white/5 rounded-lg" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-20 bg-white/5 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className="relative group py-12">
      {/* Decorative background glow behind the grid */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-[#5A80E9]/5 blur-[120px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

      <div className="space-y-10">
        {/* Section Header with Icon Pill */}
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-[#5A80E9]/10 flex items-center justify-center border border-[#5A80E9]/20 shadow-[0_0_20px_rgba(90,128,233,0.1)]">
            <Cpu size={22} className="text-[#5A80E9]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-none">
            Technical <span className="text-[#5A80E9]">Specs</span>
          </h2>
        </div>

        {/* Responsive Grid of Tactile Spec Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
          {specs.map((spec, i) => (
            <div 
              key={i} 
              className="group/card relative flex items-center gap-5 p-6 rounded-[2rem] bg-[#12131C]/40 border border-white/5 backdrop-blur-md transition-all duration-500 hover:border-[#5A80E9]/30 hover:bg-[#12131C]/60 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              {/* Glowing Icon Container */}
              <div className="relative flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover/card:border-[#5A80E9]/40 group-hover/card:bg-[#5A80E9]/10 transition-all duration-500">
                <CheckCircle2 
                  size={18} 
                  className="text-[#C5C8D7] group-hover/card:text-[#5A80E9] transition-colors" 
                />
                <div className="absolute inset-0 rounded-xl bg-[#5A80E9]/20 blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
              </div>

              {/* Spec Text */}
              <span className="text-base md:text-lg text-[#C5C8D7] font-medium tracking-wide group-hover/card:text-white transition-colors">
                {spec}
              </span>

              {/* Subtle shimmer effect on individual cards */}
              <div className="absolute inset-0 overflow-hidden rounded-[2rem] pointer-events-none">
                <div className="absolute inset-0 -translate-x-full group-hover/card:animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Tagline */}
        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[4px] text-[#C5C8D7]/20 pt-4">
          <Zap size={12} />
          Certified Performance Standards
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