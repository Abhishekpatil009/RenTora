'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import RentoraLogoMascot from './RentoraLogoMascot';

function classNames(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
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

    // Listen to auth state changes
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
    <header
      className={classNames(
        'fixed top-0 left-0 right-0 z-[100] h-20 flex items-center px-6 md:px-12 transition-all duration-500 ease-in-out',
        scrolled
          ? 'bg-[#0D1117]/80 backdrop-blur-xl border-b border-[#5A80E9]/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
          : 'bg-transparent pt-4'
      )}
    >
      {/* LOGO */}
      <Link href="/" className="flex items-center gap-4 group">
        <RentoraLogoMascot />
        <span className="text-2xl md:text-3xl font-bold tracking-tighter text-white group-hover:text-[#5A80E9] transition-colors">
          RENTORA
        </span>
      </Link>

      {/* NAV */}
      <nav className="hidden md:flex ml-auto items-center gap-8">
        <Link href="/rentals" className="nav-link">Browse</Link>
        <Link href="/categories" className="nav-link">Categories</Link>
        <Link href="/owner" className="nav-link">Become an Owner</Link>

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
      </nav>
    </header>
  );
};

export default Header;
