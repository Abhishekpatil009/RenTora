'use client';

import type { LandingPageRentalItem } from '@/data/mockItems';
import { useRef, MouseEvent, useState } from 'react';

const FeaturedCard = ({
  item,
  index,
}: {
  item: LandingPageRentalItem;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();

    const x = (e.clientX - r.left - r.width / 2) / 10;
    const y = (e.clientY - r.top - r.height / 2) / 10;

    const glareX = ((e.clientX - r.left) / r.width) * 100;
    const glareY = ((e.clientY - r.top) / r.height) * 100;

    cardRef.current.style.transform =
      `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg) scale3d(1.02, 1.02, 1.02)`;
    cardRef.current.style.setProperty('--glare-x', `${glareX}%`);
    cardRef.current.style.setProperty('--glare-y', `${glareY}%`);
  };

  const onLeave = () => {
    if (!cardRef.current) return;
    setHovering(false);
    cardRef.current.style.transform =
      'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={onLeave}
      style={{ animationDelay: `${index * 150}ms` }}
      className="group relative bg-[#12131C] rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-300 ease-out animate-slide-up-fade opacity-0 fill-mode-forwards"
    >
      {/* Glare Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-30 glare-gradient" />

      {/* Image */}
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12131C] via-transparent to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="p-8 relative z-20">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-[#5A80E9] transition-colors duration-300">
            {item.title}
          </h3>
          <div className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-lg">
            <span className="text-yellow-400 text-xs">★</span>
            <span className="text-white text-xs font-bold">{item.rating}</span>
          </div>
        </div>

        <p className="text-sm font-medium text-[#C5C8D7] uppercase tracking-widest mb-6">
          {item.category}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-3xl font-black text-white">
              ₹{item.pricePerDay}
            </span>
            <span className="text-[10px] text-[#C5C8D7] font-bold tracking-widest uppercase">
              Per Day
            </span>
          </div>

          <button className="relative overflow-hidden px-6 py-3 bg-[#5A80E9] text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_30px_rgba(90,128,233,0.5)] active:scale-90 active:rotate-2">
            Rent Now
          </button>
        </div>
      </div>

      <style jsx>{`
        .glare-gradient {
          background: radial-gradient(
            circle at var(--glare-x, 50%) var(--glare-y, 50%),
            rgba(255, 255, 255, 0.8) 0%,
            transparent 60%
          );
        }

        @keyframes slide-up-fade {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up-fade {
          animation: slide-up-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

export default FeaturedCard;
