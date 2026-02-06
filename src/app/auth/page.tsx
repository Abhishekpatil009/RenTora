'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';

import { BackgroundDecor } from '@/components/auth/BackgroundDecor/BackgroundDecor';
import { BackToHome } from '@/components/auth/BackToHome/BackToHome';
import { AuthHeader } from '@/components/auth/AuthHeader/AuthHeader';
import { AuthForm } from '@/components/auth/AuthForm/AuthForm';
import { SocialAuth } from '@/components/auth/SocialAuth/SocialAuth';
import { AuthFooterToggle } from '@/components/auth/AuthFooterToggle/AuthFooterToggle';
import { TrustBadge } from '@/components/auth/TrustBadge/TrustBadge';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleAuth = async (
    email: string,
    password: string,
    fullName?: string
  ) => {
    setLoading(true);

    const { data, error } = isLogin
      ? await supabase.auth.signInWithPassword({
          email,
          password,
        })
      : await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
        });

    setLoading(false);

    console.log('AUTH RESPONSE:', { data, error });

    if (error) {
      alert(error.message);
      return;
    }

    // Signup with email confirmation enabled
    if (!isLogin && !data.session) {
      alert('Account created! Please check your email to confirm.');
      return;
    }

    // Login or confirmed signup
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-[#0D1117] flex items-center justify-center p-4 relative">
      <BackgroundDecor />
      <BackToHome />

      <div className="w-full max-w-[480px] bg-[#12131C]/80 rounded-[2.5rem] p-8 md:p-12">
        <AuthHeader isLogin={isLogin} />

        <AuthForm
          isLogin={isLogin}
          loading={loading}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          onSubmit={handleAuth}
        />

        <SocialAuth />

        <AuthFooterToggle
          isLogin={isLogin}
          toggleAuth={() => setIsLogin(!isLogin)}
        />

        <TrustBadge />
      </div>
    </div>
  );
}
