
import React, { useEffect, useState } from 'react';

interface HeaderProps {
  onOpenAuth: (mode: 'login' | 'signup') => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenAuth }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center text-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">Lumina<span className="text-indigo-600">AI</span></span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
          <a href="#demo" className="hover:text-indigo-600 transition-colors">How it Works</a>
          <a href="#testimonials" className="hover:text-indigo-600 transition-colors">Success Stories</a>
        </nav>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => onOpenAuth('login')}
            className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
          >
            Log in
          </button>
          <button 
            onClick={() => onOpenAuth('signup')}
            className="px-5 py-2.5 text-sm font-semibold text-white gradient-bg rounded-full shadow-lg shadow-indigo-200 hover:opacity-90 transition-all active:scale-95"
          >
            Sign up Free
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
