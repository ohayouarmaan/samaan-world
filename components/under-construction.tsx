"use client";
import { useEffect, useState } from 'react';

export default function UnderConstruction() {
  const [glitch, setGlitch] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Glitch and loading effects
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 5000);

    const loadInterval = setInterval(() => {
      setProgress(prev => (prev < 100) ? prev + Math.floor(Math.random() * 5) : 100);
    }, 300);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(loadInterval);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message })
      });

      if (!response.ok) throw new Error('Failed to send');

      setSubmitted(true);
      setMessage('');
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="under-construction w-full min-h-screen flex items-center justify-center p-4 crt-effect">
      {/* Floating blog elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-4xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
              opacity: 0.7,
              zIndex: 0
            }}
          >
            {['📝', '✏️', '📖', '📚', '🔖', '📓'][Math.floor(Math.random() * 6)]}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className={`relative z-10 text-center max-w-2xl mx-auto p-8 bg-black bg-opacity-90 border-4 border-dashed border-pink-500 ${glitch ? 'animate-glitch' : ''}`}>
        {/* Animated title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-400 animate-pulse">
          BLOG ZONE
        </h1>
        <h2 className="text-3xl md:text-4xl mb-8 text-yellow-300 neon-text">
          (Under Construction)
        </h2>
        
        {/* Construction animation */}
        <div className="mx-auto mb-8 w-48 h-48 bg-pink-500 flex items-center justify-center animate-spin-slow">
          <div className="text-4xl">👩‍💻</div>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-800 rounded-full h-6 mb-8 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-pink-500 to-purple-600 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-lg text-pink-300 mb-2">{progress}% BLOG-IFIED</p>
        
        {/* Coming soon message */}
        <div className="bg-black border-2 border-yellow-400 p-4 mb-8 rotate-1">
          <p className="text-xl text-yellow-300 mb-2">🚧 COMING SOON 🚧</p>
          <p className="text-lg text-white">
            While you wait, <span className="text-pink-400 font-bold">drop me a message!</span>
          </p>
        </div>
        
        {/* Message form */}
        <form onSubmit={handleSubmit} className="mt-6 p-4 bg-purple-900 border-2 border-dashed border-cyan-400 -rotate-1">
          {submitted ? (
            <div className="text-green-400 text-lg mb-4">
              ✨ Thanks for your message! ✨
            </div>
          ) : (
            <>
              <p className="text-cyan-300 mb-2">DROP ME A MESSAGE!</p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
                className="w-full px-4 py-2 bg-black text-white border border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500 mb-3"
                rows="4"
                required
              />
              <button 
                type="submit" 
                className="px-6 py-2 bg-pink-600 text-white font-bold hover:bg-pink-700 transition-colors"
              >
                SEND
              </button>
            </>
          )}
          <p className="text-xs text-gray-400 mt-2">(Messages are encrypted with 128-bit SSL)</p>
        </form>
        
        {/* Visitor counter */}
        <div className="absolute -bottom-4 -right-4 bg-black text-green-400 font-mono px-2 py-1 border border-green-400 text-sm">
          I LOVE YOU #{Math.floor(10000 + Math.random() * 90000)} TIMES MORE
        </div>
      </div>
      
      {/* Best viewed in */}
      <div className="absolute bottom-4 left-4 text-yellow-300 text-sm bg-black bg-opacity-70 px-2 py-1 border border-dashed border-yellow-400">
        MESSAGES BEST SENT IN NETSCAPE NAVIGATOR
      </div>
    </div>
  );
}
