'use client';

import { useState } from 'react';
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
} from 'lucide-react';

interface Props {
  isLogin: boolean;
  loading: boolean;
  showPassword: boolean;
  setShowPassword: (v: boolean) => void;
  onSubmit: (email: string, password: string, fullName?: string) => void;
}

export const AuthForm = ({
  isLogin,
  loading,
  showPassword,
  setShowPassword,
  onSubmit,
}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Email and password are required');
      return;
    }

    if (!isLogin && password.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }

    onSubmit(email.trim(), password, fullName.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!isLogin && (
        <div className="relative">
          <User
            className="absolute left-5 top-1/2 -translate-y-1/2 text-[#C5C8D7]/40"
            size={18}
          />
          <input
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            className="w-full bg-[#0D1117] border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white text-sm outline-none"
          />
        </div>
      )}

      {/* Email */}
      <div className="relative">
        <Mail
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#C5C8D7]/40"
          size={18}
        />
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          className="w-full bg-[#0D1117] border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-white text-sm outline-none"
        />
      </div>

      {/* Password */}
      <div className="relative">
        <Lock
          className="absolute left-5 top-1/2 -translate-y-1/2 text-[#C5C8D7]/40"
          size={18}
        />
        <input
          required
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full bg-[#0D1117] border border-white/10 rounded-2xl py-4 pl-14 pr-14 text-white text-sm outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-5 top-1/2 -translate-y-1/2 text-[#C5C8D7]/40"
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-[#5A80E9] rounded-2xl font-black uppercase text-xs tracking-[3px] disabled:opacity-60"
      >
        <span className="flex justify-center items-center gap-2">
          {loading ? 'Processing...' : isLogin ? 'Sign In' : 'Create Account'}
          {!loading && <ArrowRight size={16} />}
        </span>
      </button>
    </form>
  );
};
