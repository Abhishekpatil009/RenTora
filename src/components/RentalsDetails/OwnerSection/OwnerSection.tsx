'use client';

import React from 'react';
import { ShieldCheck, MessageSquare, Award, Clock } from 'lucide-react';

/**
 * --- Component: OwnerSection ---
 * A premium verification card representing the gear owner. 
 * Features verified status badges, response metrics, and cinematic glassmorphism.
 */
export default function OwnerSection({ owner }: { owner: any }) {
  
  // Guard clause to prevent rendering errors if owner data is missing
  if (!owner) {
    return (
      <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 animate-pulse">
        <div className="flex gap-6">
          <div className="w-20 h-20 bg-white/10 rounded-2xl" />
          <div className="space-y-3 flex-1">
            <div className="h-6 bg-white/10 rounded w-1/3" />
            <div className="h-4 bg-white/10 rounded w-1/4" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative p-8 bg-[#12131C] rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-500 hover:border-[#5A80E9]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#5A80E9]/5 blur-3xl group-hover:bg-[#5A80E9]/10 transition-colors" />

      <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Avatar with Identity Shield */}
          <div className="relative">
            <div className="w-24 h-24 rounded-[2rem] overflow-hidden border-2 border-white/5 group-hover:border-[#5A80E9]/30 transition-all duration-500">
              <img 
                src={owner.avatar || "https://i.pravatar.cc/150?u=fallback"} 
                alt={owner.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            {/* Identity Verified Badge */}
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#5A80E9] rounded-2xl flex items-center justify-center border-[4px] border-[#12131C] shadow-lg">
              <ShieldCheck size={18} className="text-white" />
            </div>
          </div>

          {/* Owner Identity Info */}
          <div className="text-center sm:text-left space-y-2">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <h3 className="font-black text-2xl text-white tracking-tight">
                {owner.name}
              </h3>
              {/* Status Tag */}
              <span className="px-3 py-1 bg-[#5A80E9]/10 text-[#A8C5FF] text-[10px] font-black uppercase tracking-[2px] rounded-lg border border-[#5A80E9]/20">
                {owner.level || 'Verified Owner'}
              </span>
            </div>
            
            <p className="text-sm text-[#C5C8D7] font-medium opacity-60">
              Rentora member since {owner.joined || '2024'}
            </p>

            {/* Micro-Metrics */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-5 pt-3">
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#C5C8D7] uppercase tracking-wider">
                <Clock size={14} className="text-[#5A80E9]" />
                Responds {owner.responseTime || '< 2 hrs'}
              </div>
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#C5C8D7] uppercase tracking-wider">
                <Award size={14} className="text-yellow-400" />
                98% Positive
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex-shrink-0 w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm font-black uppercase tracking-[2px] hover:bg-[#5A80E9] hover:border-[#5A80E9] hover:shadow-[0_0_30px_rgba(90,128,233,0.3)] transition-all duration-300 transform active:scale-95 group/btn">
            <MessageSquare size={18} className="group-hover/btn:rotate-12 transition-transform" />
            Message Owner
          </button>
        </div>
      </div>

      {/* Interactive Surface Shimmer */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .group-hover\\:animate-shimmer {
          animation: shimmer 2s infinite ease-in-out;
        }
      ` }} />
    </div>
  );
}