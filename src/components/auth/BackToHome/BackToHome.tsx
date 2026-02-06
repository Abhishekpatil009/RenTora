import { ArrowLeft } from 'lucide-react';

export const BackToHome = () => (
  <a
    href="/"
    className="absolute top-8 left-8 flex items-center gap-2 text-xs font-black text-[#C5C8D7] uppercase tracking-widest hover:text-white transition-all group"
  >
    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
    Back to Marketplace
  </a>
);
