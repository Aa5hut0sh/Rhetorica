import React, { useEffect, useState } from 'react';

export default function Hero() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="home"
      className={`relative min-h-screen h-screen bg-[url('/bg-image-mobile.png')] md:bg-[url('/bg-image.png')] bg-bottom bg-cover p-5 md:p-10 transition-opacity duration-1000 ease-out ${
        animated ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="absolute top-5 right-5 z-50">
        <div
          className={`p-3 bg-white/70 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-700 ease-out ${
            animated ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="rotate-180 text-black"
          >
            <path
              d="M4 5L16 5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M4 12L20 12"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d="M4 19L12 19"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center mt-20 min-h-full">
        <h1
          className={`text-black font-pirata text-8xl md:text-9xl text-center select-none transition-all duration-1000 ease-out transform ${
            animated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          Rhetorica
        </h1>
      </div>
    </div>
  );
}
