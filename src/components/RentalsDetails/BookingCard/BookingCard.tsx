'use client';

import React, { useState } from 'react';
import { 
  Calendar, 
  Info, 
  ChevronRight, 
  ShieldCheck, 
  CreditCard,
  TrendingUp
} from 'lucide-react';

/**
 * --- Component: BookingCard ---
 * A cinematic, sticky booking interface featuring glassmorphic depth,
 * automated cost calculation visuals, and high-end interactive states.
 */
export default function BookingCard({ 
  price = 2500, 
  deposit = 15000 
}: { 
  price: number; 
  deposit: number 
}) {
  const [days] = useState(4); // Mocked for calculation logic
  const platformFee = 450;
  const total = (price * days) + platformFee + deposit;

  return (
    <div className="lg:sticky lg:top-28 group">
      {/* Dynamic Glow Background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#5A80E9] to-[#A8C5FF] rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
      
      <div className="relative p-10 rounded-[3rem] bg-[#12131C] border border-white/5 backdrop-blur-2xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden">
        
        {/* Animated Shimmer Overlay */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

        {/* 1. PRICING HEADER */}
        <div className="flex items-end justify-between mb-10">
          <div className="space-y-1">
            <span className="text-[10px] font-black text-[#5A80E9] uppercase tracking-[3px]">Daily Rate</span>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black text-white tracking-tighter">₹{price.toLocaleString()}</span>
              <span className="text-[#C5C8D7] text-xs font-bold uppercase tracking-widest">/ Day</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#5A80E9]/10 rounded-lg border border-[#5A80E9]/20">
            <TrendingUp size={12} className="text-[#5A80E9]" />
            <span className="text-[9px] font-black text-[#A8C5FF] uppercase tracking-wider">Top Rated</span>
          </div>
        </div>

        {/* 2. SELECTION INPUTS (GLASSMOPHIC STYLE) */}
        <div className="space-y-4 mb-10">
          <button className="w-full group/input relative p-5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between transition-all hover:border-[#5A80E9]/50 hover:bg-black/60">
            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#5A80E9]/10 flex items-center justify-center border border-[#5A80E9]/20 group-hover/input:bg-[#5A80E9] transition-all">
                <Calendar size={18} className="text-[#5A80E9] group-hover/input:text-white" />
              </div>
              <div>
                <span className="block text-[10px] font-black text-[#C5C8D7] uppercase tracking-widest mb-0.5">Rental Period</span>
                <span className="block text-sm font-bold text-white tracking-wide">Oct 24 — Oct 28</span>
              </div>
            </div>
            <ChevronRight size={18} className="text-[#C5C8D7] group-hover/input:translate-x-1 transition-transform" />
          </button>

          <button className="w-full group/input relative p-5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between transition-all hover:border-[#5A80E9]/50 hover:bg-black/60">
            <div className="flex items-center gap-4 text-left">
              <div className="w-10 h-10 rounded-xl bg-[#5A80E9]/10 flex items-center justify-center border border-[#5A80E9]/20 group-hover/input:bg-[#5A80E9] transition-all">
                <ShieldCheck size={18} className="text-[#5A80E9] group-hover/input:text-white" />
              </div>
              <div>
                <span className="block text-[10px] font-black text-[#C5C8D7] uppercase tracking-widest mb-0.5">Protection Plan</span>
                <span className="block text-sm font-bold text-white tracking-wide">Premium Coverage</span>
              </div>
            </div>
            <ChevronRight size={18} className="text-[#C5C8D7] group-hover/input:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3. COST BREAKDOWN */}
        <div className="space-y-4 mb-10 pb-8 border-b border-white/5">
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#C5C8D7] font-medium tracking-wide">₹{price.toLocaleString()} x {days} days</span>
            <span className="text-white font-bold tracking-wider">₹{(price * days).toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-sm group/info cursor-help">
            <div className="flex items-center gap-1.5 text-[#C5C8D7] font-medium tracking-wide">
              Security Deposit
              <Info size={14} className="text-[#5A80E9] opacity-50 group-hover/info:opacity-100 transition-opacity" />
            </div>
            <span className="text-[#A8C5FF] font-bold tracking-wider">₹{deposit.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#C5C8D7] font-medium tracking-wide">Platform Fee</span>
            <span className="text-white font-bold tracking-wider">₹{platformFee}</span>
          </div>
        </div>

        {/* 4. TOTAL & CTA */}
        <div className="space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <span className="block text-[11px] font-black text-[#5A80E9] uppercase tracking-[4px] mb-1">Total Due</span>
              <span className="text-3xl font-black text-white tracking-tighter">₹{total.toLocaleString()}</span>
            </div>
            <p className="text-[9px] text-[#C5C8D7]/40 text-right uppercase tracking-widest italic">
              * Fully Refundable Deposit <br />
              Included in total
            </p>
          </div>

          <button className="group/btn relative w-full overflow-hidden py-6 bg-[#5A80E9] text-white font-black rounded-2xl text-lg uppercase tracking-[4px] shadow-[0_0_40px_rgba(90,128,233,0.3)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(90,128,233,0.6)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3">
            <CreditCard size={20} className="group-hover/btn:-rotate-12 transition-transform" />
            <span className="relative z-10">Reserve Now</span>
            
            {/* Liquid Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
          </button>
        </div>

        {/* Verification Tagline */}
        <div className="mt-8 text-center">
          <span className="text-[9px] font-black text-[#C5C8D7]/30 uppercase tracking-[5px]">
            Encrypted Secure Booking
          </span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@200;400;700;900&display=swap');
        
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .group:hover .group-hover\\:animate-shimmer {
          animation: shimmer 2.5s infinite ease-in-out;
        }
      ` }} />
    </div>
  );
}