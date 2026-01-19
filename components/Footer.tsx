
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Lumina<span className="text-indigo-400">AI</span></span>
            </div>
            <p className="max-w-xs mb-8 text-slate-400 leading-relaxed">
              Empowering the world to learn faster, better, and with more joy through advanced artificial intelligence.
            </p>
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-slate-400 rounded-sm"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Product</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Personal Tutor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Study Planner</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Exam Prep</a></li>
              <li><a href="#" className="hover:text-white transition-colors">For Schools</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Resources</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2024 Lumina AI Technologies Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
            <a href="#" className="hover:text-slate-300">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
