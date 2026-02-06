'use client';

import React, { useState } from 'react';

/**
 * --- Component: ImageGallery ---
 * A high-end cinematic gallery featuring a massive hero display,
 * glassmorphic thumbnails, and smooth state transitions.
 */
export default function ImageGallery({ images }: { images: string[] }) {
  const [active, setActive] = useState(0);

  // Guard clause for empty image arrays
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-[650px] bg-white/5 rounded-[3rem] flex items-center justify-center border border-white/10">
        <span className="text-[#C5C8D7]/30 font-black uppercase tracking-[4px]">No Imagery Available</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[700px] mb-16">
      {/* 1. HERO DISPLAY AREA */}
      <div className="lg:col-span-9 relative group rounded-[3rem] overflow-hidden border border-white/5 bg-[#12131C] shadow-2xl">
        {/* Dynamic Image with Scale Transition */}
        <img 
          key={active} // Key ensures animation re-triggers on change
          src={images[active]} 
          alt={`Gallery Item ${active + 1}`}
          className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105 animate-fade-in"
        />

        {/* Cinematic Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        {/* Image Counter Badge */}
        <div className="absolute bottom-8 right-8 px-6 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full">
          <span className="text-xs font-black text-white uppercase tracking-[2px]">
            {active + 1} <span className="text-[#5A80E9]">/</span> {images.length}
          </span>
        </div>
      </div>

      {/* 2. THUMBNAIL NAVIGATION AREA */}
      <div className="lg:col-span-3 flex lg:flex-col gap-5 overflow-x-auto lg:overflow-y-auto no-scrollbar py-2">
        {images.map((img, i) => (
          <button 
            key={i} 
            onClick={() => setActive(i)}
            className={`
              relative flex-shrink-0 w-32 h-32 lg:w-full lg:h-44 rounded-[2rem] overflow-hidden border-2 transition-all duration-500 transform
              ${active === i 
                ? 'border-[#5A80E9] scale-[0.96] shadow-[0_0_30px_rgba(90,128,233,0.3)]' 
                : 'border-transparent opacity-40 hover:opacity-100 hover:scale-[1.02] hover:border-white/20'
              }
            `}
            aria-label={`View image ${i + 1}`}
          >
            <img 
              src={img} 
              className="w-full h-full object-cover" 
              alt={`Thumbnail ${i + 1}`} 
            />
            
            {/* Active Indicator Overlay */}
            {active === i && (
              <div className="absolute inset-0 bg-[#5A80E9]/10 pointer-events-none animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; filter: blur(10px); }
          to { opacity: 1; filter: blur(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      ` }} />
    </div>
  );
}