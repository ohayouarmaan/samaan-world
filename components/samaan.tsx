"use client";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const pages = [
  "💿 Mad moose mein drunk waffle :3",
  "🌙 The dumbass anxious nightout we had lol",
  "🛸 I kinda love sam idk lol (please tell me you get the reference)",
  "📸 Paise Barbaadi Machine",
  "💌 Banra chan",
  "😸 Umami Cha mmmmhhhmmm yes daddy",
  "😺 Dekho Dekho Kya pyaaru si hai papa ka shirt pehen ke daaru ki bottles fekne khao gully jaa rahi hai :3",
];

export default function SamaanHistory() {
  const [pageIndex, setPageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleChange = (dir) => {
    setFade(true);
    setTimeout(() => {
      setPageIndex((prev) =>
        dir === "next"
          ? (prev + 1) % pages.length
          : (prev - 1 + pages.length) % pages.length
      );
      setFade(false);
    }, 300); // match fade duration
  };

  return (
    <div className="samaan-history h-[100vh] max-h-[100vh] min-h-[100vh] w-full flex flex-col items-center justify-center relative overflow-hidden crt-effect crt-screen relative">
        <h2 className="text-5xl mb-10 font-y2k text-pink-500 drop-shadow-[0_0_8px_#ff88cc] tracking-widest relative inline-block">
        <span className="sparkle-text animate-sparkle">Samaan History</span>
        <span className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Glitter particles */}
          {[...Array(12)].map((_, i) => (
            <span 
              key={i}
              className="absolute text-yellow-300 opacity-0 animate-glitter"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${0.5 + Math.random() * 1}rem`
              }}
            >
              {['☆', '★', '✧', '✦'][Math.floor(Math.random() * 4)]}
            </span>
          ))}
        </span>
      </h2>

      <div className="bg-[url('/paper-texture.avif')] bg-cover border-4 border-pink-500 w-full max-w-2xl h-64 rounded-xl relative flex items-center justify-center shadow-xl px-4 py-8">
        <p
          className={`text-xl text-center font-pixel transition-opacity duration-300 max-w-xl ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {pages[pageIndex]}
        </p>

        {/* Arrows */}
        <button
          onClick={() => handleChange("prev")}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-500 hover:text-pink-700 transition"
        >
          <ArrowLeft size={32} />
        </button>
        <button
          onClick={() => handleChange("next")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-pink-500 hover:text-pink-700 transition"
        >
          <ArrowRight size={32} />
        </button>
      </div>
    </div>
  );
}
