'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Globe, User } from 'lucide-react';
import { supabase } from '@/lib/supabase/client';
import RentoraLogoMascot from '@/components/landingPage/header/RentoraLogoMascot';

type NavbarProps = {
  onSearch?: (value: string) => void;
};

export default function Navbar({ onSearch = () => {} }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);

  // Scroll effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Get logged-in user
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (data?.user) {
        setUserName(
          data.user.user_metadata?.full_name ||
          data.user.email?.split('@')[0] ||
          'User'
        );
      } else {
        setUserName(null);
      }
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUserName(
          session.user.user_metadata?.full_name ||
          session.user.email?.split('@')[0] ||
          'User'
        );
      } else {
        setUserName(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] h-24 flex items-center px-6 md:px-12 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-[#0D1117]/90 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_40px_rgba(0,0,0,0.4)]'
          : 'bg-transparent pt-4'
      }`}
    >
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-4 group">
        <RentoraLogoMascot />
        <span className="text-2xl font-black text-white group-hover:text-[#5A80E9] transition-colors">
          RENTORA
        </span>
      </Link>

      {/* SEARCH BAR */}
      <div className="flex-1 max-w-3xl mx-6 md:mx-16 hidden sm:block">
        <div
          className={`relative transition-all duration-300 ${
            isFocused ? 'scale-[1.02]' : 'scale-100'
          }`}
        >
          <div
            className={`absolute inset-0 bg-[#5A80E9]/20 rounded-full blur-2xl transition-opacity duration-500 ${
              isFocused ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div className="relative flex items-center">
            <Search
              className={`absolute left-5 w-5 h-5 transition-colors ${
                isFocused ? 'text-[#5A80E9]' : 'text-[#C5C8D7]/60'
              }`}
            />
            <input
              type="text"
              placeholder="Search rentals (camera, bike, laptop...)"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full bg-[#12131C]/60 backdrop-blur-md border border-white/10 rounded-full py-4 pl-14 pr-6 text-sm text-white placeholder-[#C5C8D7]/40 outline-none focus:border-[#5A80E9]/50 focus:bg-[#12131C]/90 transition-all shadow-inner"
            />
          </div>
        </div>
      </div>

      {/* USER ACTIONS */}
      <div className="flex items-center gap-3 ml-auto flex-shrink-0">
        {userName ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#C5C8D7]">
              Hi, <span className="text-white font-semibold">{userName}</span>
            </span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-xs font-bold rounded-full border border-white/20 text-white hover:bg-white/10 transition"
            >
              LOG OUT
            </button>
          </div>
        ) : (
          <Link
            href="/auth"
            className="ml-4 px-6 py-2.5 bg-[#5A80E9] hover:bg-[#4e73df] text-white text-xs font-bold rounded-full transition-all shadow-[0_0_15px_rgba(90,128,233,0.4)] hover:shadow-[0_0_25px_rgba(90,128,233,0.6)]"
          >
            SIGN IN
          </Link>
        )}
      </div>
    </nav>
  );
}
