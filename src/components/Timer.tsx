import React, { useState, useEffect, useRef } from 'react';

export default function Timer() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Time remaining state strings
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  useEffect(() => {
    // Scroll Animation Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // --- Countdown Logic ---
    // NOTE: The original text states "20th Jan 2026". You can adjust this target 
    // timestamp to a future date to test active countdown changes locally!
    const targetDate = new Date('January 20, 2027 00:00:00').getTime();

    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      // Pad with leading zeros for visual uniformity
      setTimeLeft({
        days: d < 10 ? `0${d}` : `${d}`,
        hours: h < 10 ? `0${h}` : `${h}`,
        minutes: m < 10 ? `0${m}` : `${m}`,
        seconds: s < 10 ? `0${s}` : `${s}`,
      });
    };

    // Run once immediately, then mount interval track
    calculateTimeRemaining();
    const intervalId = setInterval(calculateTimeRemaining, 1000);

    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, []);

  const timeBlocks = [
    { value: timeLeft.days, label: 'DAYS' },
    { value: timeLeft.hours, label: 'HOURS' },
    { value: timeLeft.minutes, label: 'MINUTES' },
    { value: timeLeft.seconds, label: 'SECONDS' },
  ];

  return (
    <div
      ref={containerRef}
      className={`px-5 w-full flex justify-center transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'
      }`}
    >
      {/* Frosted Container Card */}
      <div className="border w-full border-black/10 bg-slate-100/80 backdrop-blur-xl shadow-2xl p-6 px-5 md:px-20 rounded-3xl md:w-[700px] gap-6 flex flex-col items-center">
        
        {/* Header Event Date Info */}
        <div className="flex font-montserrat flex-col items-center justify-center text-black">
          <span className="text-xs font-medium tracking-widest text-black/60">BEGINS ON</span>
          <h2 className="font-bold md:text-2xl tracking-wide font-montserrat mt-1">
            20TH JAN 2026
          </h2>
        </div>

        {/* Counter Digital Grid Container */}
        <div className="flex justify-between w-full gap-2 md:gap-4 select-none">
          {timeBlocks.map((block, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center bg-white/40 border border-white/60 rounded-2xl w-1/4 py-3 md:py-5 shadow-sm min-w-[65px]"
            >
              {/* Number displaying gothic typeface font-pirata */}
              <span className="text-3xl md:text-7xl font-pirata text-black tabular-nums transition-all duration-300">
                {block.value}
              </span>
              {/* Timing Unit Labels */}
              <span className="font-montserrat text-[8px] md:text-xs font-semibold opacity-70 tracking-wider mt-1">
                {block.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}