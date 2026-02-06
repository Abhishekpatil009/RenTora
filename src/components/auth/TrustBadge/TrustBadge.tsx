import { ShieldCheck } from 'lucide-react';

export const TrustBadge = () => (
  <div className="mt-8 pt-6 border-t border-white/5 flex justify-center items-center gap-2 opacity-30">
    <ShieldCheck size={14} className="text-[#5A80E9]" />
    <span className="text-[9px] font-black uppercase tracking-[3px]">
      Enterprise Encrypted Protocol v2.5
    </span>
  </div>
);
