import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper basic core styles
import 'swiper/css';

export default function Collab() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Map out the asset IDs from the original project source (brands 3 to 10)
  const brandLogos = [
    { src: '/brands/3.svg', isJpg: false },
    { src: '/brands/4.svg', isJpg: false },
    { src: '/brands/5.svg', isJpg: false },
    { src: '/brands/6.svg', isJpg: false },
    { src: '/brands/7.svg', isJpg: false },
    { src: '/brands/8.svg', isJpg: false },
    { src: '/brands/9.svg', isJpg: false },
    { src: '/brands/10.jpg', isJpg: true }, // The original code highlights 10 as a distinct JPG item
  ];

  // Tripling the array parameters ensures Swiper has an abundant queue length for seamless loop connections
  const continuousTickerLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section
      ref={sectionRef}
      id="collaborations"
      className={`flex flex-col items-center px-5 py-12 transition-all duration-1000 ease-out transform select-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'
      }`}
    >
      {/* Structural Title Tag */}
      <h2 className="font-pirata text-4xl md:text-5xl text-black">
        Collaborations
      </h2>

      {/* Infinite Scrolling Ticker Frame */}
      <div className="w-full mt-10 max-w-7xl overflow-hidden relative">
        {/* Soft edge masking hints to fade the logos out gracefully at both container view edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block" />

        <Swiper
          modules={[Autoplay]}
          loop={true}
          spaceBetween={40}
          slidesPerView={2}
          allowTouchMove={false} // Maintains a locked, automated structural speed pace
          speed={3000} // Continuous flow configuration speed rate
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 50 },
            768: { slidesPerView: 4, spaceBetween: 60 },
            1024: { slidesPerView: 5, spaceBetween: 70 },
          }}
          className="w-full clean-ticker-linear"
        >
          {continuousTickerLogos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center h-24"
            >
              <img
                alt="Partner Brand Logo"
                src={logo.src}
                loading="lazy"
                className={`object-contain max-h-16 w-32 filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${
                  logo.isJpg ? 'rounded-md shadow-xs' : ''
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}