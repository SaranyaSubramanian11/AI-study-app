
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-6 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span>NOW POWERED BY GEMINI 3 FLASH</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              Master Any Subject with your <span className="gradient-text">AI Companion</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Lumina is your 24/7 personal tutor. We adapt to your learning style, 
              provide instant feedback, and guide you through complex topics 
              with the patience of a saint and the knowledge of a PhD.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={onCtaClick}
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all transform hover:-translate-y-1"
              >
                Start Learning Free
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-bold rounded-2xl border border-slate-200 shadow-sm hover:border-indigo-300 transition-all">
                Watch Demo
              </button>
            </div>
            
            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-6 text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                    alt="User" 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="text-sm font-medium">Joined by 10,000+ students this month</p>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://picsum.photos/seed/edutech/1200/900" 
                alt="AI Tutoring Experience" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Floating Dashboard Card */}
              <div className="absolute bottom-6 left-6 right-6 glass p-5 rounded-2xl shadow-lg animate-bounce-slow">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">Concept Mastered!</h4>
                    <p className="text-xs text-slate-600">Quantum Mechanics Fundamentals</p>
                  </div>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[85%]"></div>
                </div>
              </div>
            </div>
            
            {/* Background pattern */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600/10 rounded-full blur-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
