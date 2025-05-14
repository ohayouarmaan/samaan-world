"use client";
import { useState } from 'react';

export default function RelationshipRules() {
  const [currentRule, setCurrentRule] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const rules = [
    "💖 ARMAAN LOVES SAM MORE",
    "📞 ARMAAN CALLS SAM MORE",
    "🎮 ARMAAN LOVES SAM SO MUCH SHE THINKS ARMAAN IS AN AI",
    "🍜 ARMAAN CAN DO WHATEVER HE WANTS (AS LONG AS IT'S DECIDED BY SAM)",
    "🤫 SAM CAN SLAP ARMAAN WHENEVER SHE WANTS",
    "👻 SAM CAN EDUCATE SAMAAN ON HOW TO BEHAVE (ARMAAN'S ASS IS NOT A BETTER PARENT)",
    "📸 ONCE WE BOTH GET THE OPTION THERE BETTER BE A MINIMUM OF 4 VIDEO REASSURANCE",
    "💌 WE'RE GONNA GET BACK TOGETHER, BE IT IN BBSR, BANGALORE OR ANYWHERE TBH"
  ];

  const changeRule = () => {
    setIsClicked(true);
    setTimeout(() => {
      setCurrentRule((prev) => (prev + 1) % rules.length);
      setIsClicked(false);
    }, 200);
  };

  return (
    <div className="y2k-rules-container w-full max-w-xl mx-auto p-6 relative overflow-hidden crt-effect z-[300]">
      {/* Glitter background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-pink-400 opacity-70 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
              zIndex: 0
            }}
          >
            {['✧', '✦', '♡', '✿', '★', '☆'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Animated title */}
        <h2 className="text-4xl md:text-5xl font-y2k text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 animate-text-shine">
          <span className="inline-block animate-bounce">R</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.1s'}}>U</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}>L</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.3s'}}>E</span>
          <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>Z</span>
          <span className="inline-block animate-wiggle ml-2">💘</span>
        </h2>

        {/* Clickable Rule display */}
        <button 
          className={`y2k-rule-card w-full bg-white bg-opacity-80 rounded-lg border-4 border-pink-400 p-6 mb-8 shadow-lg transform ${isClicked ? 'scale-95' : 'rotate-1 hover:rotate-0'} transition-all duration-200 cursor-pointer focus:outline-none z-[300]`}
          onClick={changeRule}
          aria-label="Next relationship rule"
        >
          <p className="text-xl md:text-2xl font-comic text-center text-purple-900 select-none">
            {rules[currentRule]}
          </p>
          <div className="text-center mt-4 text-sm text-pink-600 animate-pulse select-none">
            (click to change rule)
          </div>
        </button>

        {/* Y2K decorations */}
        <div className="flex justify-between items-center">
          <div className="animate-spin-slow text-3xl">🌀</div>
          <div className="text-center">
            <div className="inline-block animate-bounce text-4xl">📜</div>
            <div className="text-xs mt-1 text-yellow-500 font-pixel">v1.0</div>
          </div>
          <div className="animate-spin-reverse text-3xl">🌪️</div>
        </div>
      </div>
    </div>
  );
}
