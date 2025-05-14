"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import SamaanHistory from "../components/samaan";
import Rules from "../components/rules";
import VerticalText from "../components/vert-rules";
import SamaanRulesGame from "../components/samaan-rules-component";
import UnderConstruction from "../components/under-construction";

const y2kEmojis = ["💿", "📼", "📟", "🔮", "🦄", "🌈", "👾", "🎮", "🛸", "📻", "📺", "✨"];

export default function Hero() {
  const heading = "welcome  to  soob's  world 💿";
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    // Create 15-20 random emojis with random positions and animations
    const newEmojis = Array.from({ length: 15 + Math.floor(Math.random() * 6) }, () => {
      const emoji = y2kEmojis[Math.floor(Math.random() * y2kEmojis.length)];
      const size = 1 + Math.random() * 2; // 1-3rem
      const duration = 5 + Math.random() * 10; // 5-15s
      const delay = Math.random() * 5; // 0-5s
      
      return {
        emoji,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          fontSize: `${size}rem`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          opacity: 0.7 + Math.random() * 0.3, // 0.7-1
        }
      };
    });
    
    setEmojis(newEmojis);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[url('/bg.jpg')] bg-cover bg-center scale-110 blur-sm" />
        </div>

        {/* Floating Emojis */}
        {emojis.map((item, index) => (
          <div
            key={index}
            className="absolute pointer-events-none animate-floaty floating-emoji"
            style={item.style}
          >
            {item.emoji}
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-6xl font-y2k text-pink-50 drop-shadow-[0_0_10px_#ff69b4] flex flex-wrap justify-center gap-2 text-center">
            {heading.split(" ").map((word, index) => (
              <span
                key={index}
                className="inline-block animate-jittery"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationDuration: '1.2s'
                }}
              >
                {word}
              </span>
            ))}
          </h1>
        </div>
      </div>
      <SamaanHistory />
      <div className="flex flex-col items-center justify-center min-h-[100vh] w-full relative">
        <SamaanRulesGame />
      </div>
      <UnderConstruction />
    </div>
  );
}
