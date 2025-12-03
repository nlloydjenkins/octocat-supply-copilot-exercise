import { useState } from 'react';

export default function BlackFridayBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-b-2 border-primary shadow-[0_4px_20px_rgba(118,184,82,0.3)]">
      <div className="relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(118,184,82,0.1)_10px,rgba(118,184,82,0.1)_20px)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center relative">
          {/* Left Octocat icon */}
          <div className="hidden sm:flex items-center mr-4">
            <img 
              src="/copilot.png" 
              alt="Octocat"
              className="h-10 w-auto animate-pulse drop-shadow-[0_0_8px_rgba(118,184,82,0.5)]"
            />
          </div>
          
          {/* Main content */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center">
            {/* Black Friday text with gradient */}
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                🎉 BLACK FRIDAY 🎉
              </span>
            </div>
            
            {/* Discount badge */}
            <div className="bg-primary text-white px-4 py-1 rounded-full font-bold text-lg sm:text-xl shadow-[0_0_15px_rgba(118,184,82,0.5)] animate-bounce">
              UP TO 50% OFF!
            </div>
            
            {/* CTA text */}
            <span className="text-light text-sm sm:text-base font-medium">
              Limited time offer on all OctoCAT supplies!
            </span>
            
            {/* Shop Now button */}
            <button 
              aria-label="Shop Black Friday deals - up to 50% off on all supplies"
              className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-bold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_rgba(118,184,82,0.4)]"
            >
              SHOP NOW →
            </button>
          </div>
          
          {/* Right Octocat icon */}
          <div className="hidden sm:flex items-center ml-4">
            <img 
              src="/copilot.png" 
              alt="Octocat"
              className="h-10 w-auto animate-pulse drop-shadow-[0_0_8px_rgba(118,184,82,0.5)]"
            />
          </div>
          
          {/* Close button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-light hover:text-primary transition-colors p-1"
            aria-label="Close banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
