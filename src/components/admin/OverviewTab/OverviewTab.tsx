import { LogIn, UserPlus } from 'lucide-react';
import  RentoraLogoMascot  from '@/components/landingPage/header/RentoraLogoMascot';

interface Props {
  isLogin: boolean;
}

export const AuthHeader = ({ isLogin }: Props) => (
  <div className="flex flex-col items-center text-center mb-10">
    <div className="mb-4 scale-125">
      <RentoraLogoMascot />
    </div>

    <div className="flex items-center gap-2 mb-2">
      {isLogin ? (
        <LogIn className="text-[#5A80E9]" size={20} />
      ) : (
        <UserPlus className="text-[#5A80E9]" size={20} />
      )}
      <h3 className="text-2xl font-black text-white uppercase tracking-tight">
        {isLogin ? 'Welcome Back' : 'Create Account'}
      </h3>
    </div>

    <p className="text-sm text-[#C5C8D7] font-medium">
      {isLogin
        ? 'Access your premium gear ecosystem'
        : "Join the world's most trusted marketplace"}
    </p>
  </div>
);
