import { Chrome, Github } from 'lucide-react';

export const SocialAuth = () => (
  <>
    <div className="mt-10 mb-8 flex items-center gap-4">
      <div className="h-px flex-1 bg-white/5"></div>
      <span className="text-[9px] font-black uppercase tracking-[4px] text-[#C5C8D7]/30">
        Verified Security
      </span>
      <div className="h-px flex-1 bg-white/5"></div>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <button className="auth-social-btn">
        <Chrome size={18} /> Google
      </button>
      <button className="auth-social-btn">
        <Github size={18} /> GitHub
      </button>
    </div>
  </>
);
