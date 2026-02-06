'use client';

import React, { useState } from 'react';
import { Star, MapPin, Package, Heart, Share2, Award } from 'lucide-react';

/**
 * --- Component: HeaderSection ---
 * A cinematic header for product details featuring high-end typography,
 * responsive actions, and glassmorphic button states.
 */
export default function HeaderSection({ data }: { data: any }) {
  const [liked, setLiked] = useState(false);

  // Guard clause to prevent "Cannot read properties of undefined" errors
  if (!data) {
    return (
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 animate-pulse">
        <div className="space-y-4 w-full">
          <div className="h-6 w-32 bg-white/5 rounded-full" />
          <div className="h-16 w-3/4 bg-white/5 rounded-2xl" />
          <div className="h-6 w-1/2 bg-white/5 rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
      {/* LEFT SIDE: PRODUCT INFO */}
      <div className="space-y-4 max-w-4xl">
        {/* Category Badge & Verification Tag */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-[#5A80E9] text-[10px] font-black uppercase tracking-[3px] bg-[#5A80E9]/10 px-4 py-1.5 rounded-full border border-[#5A80E9]/20">
            <Package size={14} className="animate-pulse" /> 
            {data.category || 'Rental'}
          </div>
          <div className="flex items-center gap-1.5 text-[#A8C5FF]/50 text-[10px] font-bold uppercase tracking-[2px]">
            <Award size={12} />
            Rentora Verified
          </div>
        </div>

        {/* Cinematic Title */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-[0.9] drop-shadow-2xl">
          {data.title || 'Product Listing'}
        </h1>

        {/* Metadata: Ratings & Location */}
        <div className="flex flex-wrap items-center gap-8 text-sm md:text-base font-medium text-[#C5C8D7]">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-lg border border-white/5 group-hover:border-yellow-400/50 transition-all">
              <Star className="text-yellow-400 fill-yellow-400" size={16} />
              <span className="text-white font-bold">{data.rating ?? '0.0'}</span>
            </div>
            <span className="opacity-50 group-hover:opacity-100 transition-opacity underline decoration-[#C5C8D7]/30">
              ({data.reviews ?? '0'} verified reviews)
            </span>
          </div>

          <div className="flex items-center gap-2 group cursor-pointer hover:text-white transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#5A80E9]/10 flex items-center justify-center border border-[#5A80E9]/20 group-hover:bg-[#5A80E9] group-hover:text-white transition-all">
              <MapPin size={16} />
            </div>
            <span className="tracking-wide">{data.location || 'Location available on request'}</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: ACTIONS */}
      <div className="flex items-center gap-4 flex-shrink-0">
        {/* Like/Heart Button */}
        <button 
          onClick={() => setLiked(!liked)} 
          className={`
            group relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500
            ${liked 
              ? 'bg-red-500/10 border border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.2)]' 
              : 'bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30'
            }
          `}
          aria-label="Toggle Favorite"
        >
          <Heart 
            className={`transition-all duration-500 ${liked ? 'fill-red-500 text-red-500 scale-110' : 'text-white group-hover:scale-110'}`} 
            size={24} 
          />
          {/* Subtle Ripple/Glow on Like */}
          {liked && <div className="absolute inset-0 rounded-2xl bg-red-500/20 animate-ping pointer-events-none"></div>}
        </button>

        {/* Share Button */}
        <button 
          className="group w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-[#5A80E9] hover:border-[#5A80E9] hover:shadow-[0_0_30px_rgba(90,128,233,0.4)] transition-all duration-300 transform active:scale-90"
          aria-label="Share Gear"
        >
          <Share2 className="group-hover:rotate-12 transition-transform" size={24} />
        </button>
      </div>
    </div>
  );
}