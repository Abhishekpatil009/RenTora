'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#12131C] pt-32 pb-12 border-t border-white/5 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-[#5A80E9]/10 blur-[150px] -z-0 pointer-events-none"></div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24">
          
          {/* Column 1: Branding & About */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-4 group cursor-pointer w-fit">
              <div className="relative w-12 h-12 bg-gradient-to-br from-[#5A80E9] to-[#A8C5FF] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(90,128,233,0.4)] group-hover:rotate-[15deg] transition-all duration-500 overflow-hidden">
                <span className="text-white font-black text-2xl">R</span>
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <span className="text-4xl font-black tracking-tighter text-white group-hover:text-[#5A80E9] transition-colors duration-300">
                RENTORA
              </span>
            </div>
            
            <p className="text-lg text-[#C5C8D7] font-light leading-relaxed max-w-sm">
              The world&apos;s premium rental ecosystem. From high-end cinema gear to professional adventure tools—experience anything, own less.
            </p>

            <div className="flex gap-5">
              {['instagram', 'twitter', 'youtube', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  aria-label={social}
                  className="w-12 h-12 rounded-2xl bg-[#0D1117] border border-white/5 flex items-center justify-center text-[#C5C8D7] hover:text-white hover:border-[#5A80E9] hover:shadow-[0_0_20px_rgba(90,128,233,0.3)] transition-all transform hover:-translate-y-2 group"
                >
                  <i className={`fab fa-${social} text-xl group-hover:animate-neon-pulse`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Browse */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-[4px] mb-10 border-l-2 border-[#5A80E9] pl-4">Browse</h4>
            <ul className="space-y-5">
              {['Professional Cameras', 'Mountain Bikes', 'MacBook Pros', 'Power Tools', 'Audio Equipment'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#C5C8D7] hover:text-[#5A80E9] hover:pl-2 transition-all duration-300 font-light text-base block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Owners */}
          <div>
            <h4 className="text-sm font-black text-white uppercase tracking-[4px] mb-10 border-l-2 border-[#5A80E9] pl-4">Owners</h4>
            <ul className="space-y-5">
              {['List Your Gear', 'Insurance Policy', 'Revenue Calculator', 'Safety Protocols', 'Community Guidelines'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#C5C8D7] hover:text-[#5A80E9] hover:pl-2 transition-all duration-300 font-light text-base block">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-black text-white uppercase tracking-[4px] mb-10 border-l-2 border-[#5A80E9] pl-4">Stay Updated</h4>
            <p className="text-[#C5C8D7] font-light mb-8 text-sm leading-relaxed">
              Join 10,000+ explorers getting early access to exclusive listings.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="email@rentora.com" 
                  className="w-full bg-[#0D1117] border border-white/10 rounded-2xl py-4 px-6 text-white text-sm outline-none focus:border-[#5A80E9] focus:ring-1 focus:ring-[#5A80E9] transition-all"
                />
              </div>
              <button className="w-full relative overflow-hidden group py-4 bg-[#5A80E9] text-white font-black rounded-2xl text-xs uppercase tracking-[2px] transition-all hover:shadow-[0_0_30px_rgba(90,128,233,0.4)] active:scale-95">
                <span className="relative z-10">Join Ecosystem</span>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-12 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] font-black uppercase tracking-[3px] text-[#C5C8D7]">
            <a href="#" className="hover:text-white transition-colors relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#5A80E9] group-hover:w-full transition-all"></span>
            </a>
            <a href="#" className="hover:text-white transition-colors relative group">
              Terms of Use
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#5A80E9] group-hover:w-full transition-all"></span>
            </a>
            <a href="#" className="hover:text-white transition-colors relative group">
              Sitemap
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#5A80E9] group-hover:w-full transition-all"></span>
            </a>
            <a href="#" className="hover:text-white transition-colors relative group">
              Damage Protection
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#5A80E9] group-hover:w-full transition-all"></span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-[10px] font-black uppercase tracking-[4px] text-[#C5C8D7]/50 whitespace-nowrap">
              © 2025 Rentora Technology Corp.
            </p>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[8px] font-bold text-white uppercase tracking-widest">Network Status: Optimal</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes neon-pulse {
          0%, 100% { text-shadow: 0 0 0px #5A80E9; }
          50% { text-shadow: 0 0 15px #5A80E9, 0 0 25px #A8C5FF; }
        }
        .animate-neon-pulse {
          animation: neon-pulse 2s infinite ease-in-out;
        }
      `}</style>
    </footer>
  );
};

export default Footer;