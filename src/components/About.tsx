
import React, { useEffect, useState, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="flex flex-col md:flex-row px-6 md:px-20 justify-between items-center md:items-start gap-10 md:gap-20 my-20 min-h-[40vh]"
    >
      <h2
        className={`font-pirata text-5xl transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[70px]'
        }`}
      >
        About
      </h2>

      <div
        className={`font-montserrat font-medium text-base text-center md:text-start md:text-xl md:max-w-[70%] text-black/70 leading-relaxed transition-all duration-1000 delay-200 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <p>
          Rhetorica '26 is the Fifth Edition of the Annual Literary 
          Festival of Techno International New Town, organised by 
           LITWITS, the Literary Club of Techno International New Town. 
          Scheduled for 20th and 21st January 2026, the festival features a diverse 
          lineup of events including debate, poetry, storytelling, and creative writing 
          — creating a platform where voices rise, ideas clash, and the transformative 
          power of words takes center stage. Whether you're a seasoned performer or a 
          first-time participant, Rhetorica is where the literary community comes alive.
        </p>
      </div>
    </section>
  );
}