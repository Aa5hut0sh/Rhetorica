import { useEffect, useState, useRef } from 'react';

export default function Stats() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statsData = [
    { value: '140+', label: 'Participants' },
    { value: '5+', label: 'Events' },
    { value: '8+', label: 'Brands Partnerships' },
    { value: '35+', label: 'Colleges' },
  ];

  return (
    <section
      id="edition"
      ref={sectionRef}
      className="relative min-h-[50vh] overflow-hidden isolate select-none"
    >
      <div className="absolute inset-0 bg-[url('/blur-bg.png')] bg-cover bg-center -z-10 pointer-events-none" />

      <div className="relative px-5 py-20 md:p-20 flex flex-col md:flex-row justify-between font-poppins gap-10 items-center">
        
        <div
          className={`flex flex-col items-center w-full md:items-start px-4 md:px-0 md:w-[55%] gap-5 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[70px]'
          }`}
        >
          <h2 className="font-semibold text-2xl md:text-3xl font-poppins text-black">
            Our 26' Edition
          </h2>
          <p className="font-poppins text-lg md:text-2xl leading-relaxed text-center md:text-start text-black">
            This year, we’re organising Rhetorica on a bigger and grander scale, 
            having received registrations from over 35+ Colleges across West Bengal, 
            with over 140+ participants having registered for our multiple events 
            across the two days of our event. We’ve also obtained various brand 
            partnerships across diverse industries.
          </p>
        </div>

        <div
          className={`border border-black/20 md:w-1/3 bg-black/5 backdrop-blur-md rounded-2xl grid grid-cols-2 grid-rows-2 gap-6 p-6 transition-opacity duration-1000 ease-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {statsData.map((stat, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 150}ms` }}
              className={`flex flex-col items-center justify-center gap-1 transition-all duration-700 ease-out transform ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-80'
              }`}
            >
              <span className="font-bold text-4xl md:text-5xl font-montserrat text-black">
                {stat.value}
              </span>
              <span className="font-light text-sm md:text-base text-center text-black/70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}