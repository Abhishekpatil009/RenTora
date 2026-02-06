'use client';

import React from 'react';
import { AlignLeft, Sparkles } from 'lucide-react';

/**
 * --- Component: DescriptionSection ---
 * A cinematic product description area with high-end typography,
 * optimized line-height for readability, and a subtle glassmorphic accent.
 */
export default function DescriptionSection({ text }: { text: string }) {
  
  // Skeleton state for loading or missing content
  if (!text) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-10 w-48 bg-white/5 rounded-lg" />
        <div className="space-y-3">
          <div className="h-4 w-full bg-white/5 rounded" />
          <div className="h-4 w-full bg-white/5 rounded" />
          <div className="h-4 w-2/3 bg-white/5 rounded" />
        </div>
      </div>
    );
  }

  return (
    <section className="relative group py-12">
      {/* Decorative vertical accent line visible on large screens */}
      <div className="absolute -left-8 top-12 bottom-12 w-1 bg-gradient-to-b from-[#5A80E9] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden xl:block" />

      <div className="space-y-8">
        {/* Section Header with Icon Pill */}
        <div className="flex items-center gap-5">
          <div className="w-12 h-12 rounded-2xl bg-[#5A80E9]/10 flex items-center justify-center border border-[#5A80E9]/20 shadow-[0_0_20px_rgba(90,128,233,0.1)]">
            <AlignLeft size={22} className="text-[#5A80E9]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-none">
            Product <span className="text-[#5A80E9]">Description</span>
          </h2>
        </div>

        {/* Cinematic Glass Content Block */}
        <div className="relative p-8 md:p-12 rounded-[3rem] bg-[#12131C]/40 border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-[#12131C]/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          
          {/* Subtle background graphic for depth */}
          <Sparkles 
            size={160} 
            className="absolute -bottom-16 -right-16 text-[#5A80E9]/5 transform rotate-12 pointer-events-none group-hover:text-[#5A80E9]/10 transition-colors duration-700" 
          />

          {/* Typography optimized for high-end readability */}
          <p className="relative z-10 text-lg md:text-xl text-[#C5C8D7] leading-[1.9] font-light tracking-wide whitespace-pre-line selection:bg-[#5A80E9]/30">
            {text}
          </p>

          {/* Bottom interactive border reveal */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#5A80E9] to-transparent transition-all duration-1000 ease-out group-hover:w-full" />
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200;400;700;900&display=swap');
        
        /* Optimization for multi-line text blocks */
        .whitespace-pre-line {
          text-underline-offset: 4px;
        }
      ` }} />
    </section>
  );
}