"use client";
import { useState, useEffect } from 'react';

export default function Y2kVerticalText() {
  const phrases = ["RULES", "LAWS", "CODE", "VIBES"];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [glitch, setGlitch] = useState(false);

  // Rotate phrases and trigger glitch
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setGlitch(false);
      }, 200);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute left-0 top-0 h-full flex items-center z-20 px-4">
      <div className={`vertical-text ${glitch ? 'glitch-active' : ''}`}>
        {/* Main text with multiple shadows */}
        <div className="text-layer text-yellow-300">OUR</div>
        <div className="text-layer text-pink-500 transform rotate-2">{phrases[currentPhrase]}</div>
        <div className="text-layer text-blue-400 transform -rotate-1">OF</div>
        <div className="text-layer text-green-300">LOVE</div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute text-xl animate-spin"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 10}s`,
                color: ['#ff00ff', '#00ffff', '#ffff00'][Math.floor(Math.random() * 3)]
              }}
            >
              {['✧', '★', '♡', '✿', '◈', '○'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
