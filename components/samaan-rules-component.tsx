"use client";
import { useState, useEffect, useRef } from 'react';
import Rules from "./rules";

export default function SamaanRulesGame() {
  const [score, setScore] = useState(0);
  const [emojis, setEmojis] = useState([]);
  const containerRef = useRef(null);
  const y2kEmojis = ['💿', '📼', '📟', '🔮', '🦄', '🌈', '👾', '🎮', '🛸', '📻', '📺', '✨'];

  useEffect(() => {
    const createEmoji = () => {
      if (!containerRef.current) return;
      
      const newEmoji = {
        id: Date.now() + Math.random(),
        emoji: y2kEmojis[Math.floor(Math.random() * y2kEmojis.length)],
        style: {
          left: `${10 + Math.random() * 80}%`,
          top: `${Math.random() * 100}%`,
          fontSize: `${Math.floor(Math.random() * 30 + 20)}px`,
          animationDuration: `${Math.random() * 15 + 10}s`,
          filter: `hue-rotate(${Math.random() * 360}deg) drop-shadow(0 0 2px rgba(255,255,255,0.8))`,
          zIndex: 400, // Consistent z-index
          pointerEvents: 'auto'
        }
      };
      
      setEmojis(prev => [...prev.slice(-20), newEmoji]);
    };

    const interval = setInterval(createEmoji, 800);
    return () => clearInterval(interval);
  }, []);

  const catchEmoji = (id) => {
    setScore(prev => prev + 1);
    setEmojis(prev => prev.filter(e => e.id !== id));
  };

  return (
    <div 
      ref={containerRef}
      className="relative h-[100vh] w-full overflow-hidden crt-effect"
      style={{ pointerEvents: 'none' }} // DISABLE CLICKS ON CONTAINER
    >
      {/* Background elements (non-interactive) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Your background elements here */}
      </div>

      {/* Vertical Text (non-interactive) */}
      <div className="absolute left-0 top-0 h-full flex items-center z-10 px-4 pointer-events-none">
        <div className="vertical-text">
          <span className="text-layer text-pink-500">RELATIONSHIP</span>
          <span className="text-layer text-cyan-400">RULES</span>
          <span className="text-layer text-yellow-300">2025</span>
        </div>
      </div>

      {/* Centered Rules (interactive) */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-30 pl-24">
        <div className="w-full max-w-2xl pointer-events-auto">
          <Rules />
        </div>
      </div>

      {/* Scoreboard (interactive) */}
      <div className="fixed top-4 right-4 z-50 bg-black bg-opacity-70 text-pink-400 px-4 py-2 rounded-full border-2 border-pink-400 font-bold text-sm shadow-lg backdrop-blur-sm pointer-events-auto">
        ★ Score: {score}
      </div>

      {/* Clickable Emojis */}
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          className="absolute animate-float cursor-pointer hover:scale-125 transition-transform duration-300 z-[400] pointer-events-auto"
          style={emoji.style}
          onClick={() => catchEmoji(emoji.id)}
        >
          {emoji.emoji}
        </div>
      ))}

      {/* Instructions (interactive) */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 text-center text-white text-xs bg-black bg-opacity-50 px-4 py-2 rounded-lg border border-pink-400 pointer-events-auto">
        Click the floating emojis to collect them!
      </div>
    </div>
  );
}
