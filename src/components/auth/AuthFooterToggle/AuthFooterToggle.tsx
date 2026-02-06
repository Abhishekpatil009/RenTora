interface Props {
  isLogin: boolean;
  toggleAuth: () => void;
}

export const AuthFooterToggle = ({ isLogin, toggleAuth }: Props) => (
  <div className="mt-10 text-center">
    <p className="text-xs text-[#C5C8D7]">
      {isLogin ? 'New to Rentora?' : 'Already have an account?'}
      <button
        onClick={toggleAuth}
        className="ml-2 text-[#5A80E9] font-black uppercase tracking-widest"
      >
        {isLogin ? 'Sign Up' : 'Sign In'}
      </button>
    </p>
  </div>
);
