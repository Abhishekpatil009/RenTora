'use client';

import React from 'react';
import { CATEGORIES } from '@/data/categories';

const CategoryCarousel = () => {
  return (
    <section className="py-24 bg-[#0D1117] overflow-hidden">
      <div className="px-12 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
          POPULAR <span className="text-[#5A80E9]">CATEGORIES</span>
        </h2>
      </div>

      {/* Mask image creates a fade effect on the left and right edges 
        to smooth out the entering/exiting items.
      */}
      <div className="relative w-full mask-linear-fade">
        <div className="flex gap-12 w-max animate-infinite-scroll hover:pause-animation px-12 py-8">
          {/* Render the list twice to create the seamless infinite loop effect.
            When the first set scrolls out of view, the second set takes its place perfectly.
          */}
          {[...CATEGORIES, ...CATEGORIES].map((cat, index) => (
            <div
              key={`${cat.id}-${index}`}
              className="group relative flex-shrink-0 w-64 h-64 bg-[#12131C] rounded-full flex flex-col items-center justify-center border border-white/5 cursor-pointer transition-all duration-500 ease-out hover:scale-110 hover:border-[#5A80E9] hover:bg-[#1A1B2E] hover:shadow-[0_0_50px_rgba(90,128,233,0.3)]"
            >
              <span className="text-6xl mb-4 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 filter drop-shadow-lg">
                {cat.icon}
              </span>
              <span className="text-lg font-bold text-white tracking-widest group-hover:text-[#5A80E9] transition-colors">
                {cat.label}
              </span>
              
              {/* Internal Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-radial-gradient from-[#5A80E9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded CSS for specific animations not in default Tailwind */}
      <style jsx>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
        
        .pause-animation:hover {
          animation-play-state: paused;
        }

        .mask-linear-fade {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }
      `}</style>
    </section>
  );
};

export default CategoryCarousel;