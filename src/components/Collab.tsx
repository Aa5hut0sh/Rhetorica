import  { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

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
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const brandLogos = [
    { src: "https://rhetorica.tint.edu.in/brands/3.svg", isJpg: false },
    { src: "https://rhetorica.tint.edu.in/brands/4.svg", isJpg: false },
    { src: "https://rhetorica.tint.edu.in/brands/5.svg", isJpg: false },
    { src: "https://rhetorica.tint.edu.in/brands/6.svg", isJpg: false },
    { src: "https://rhetorica.tint.edu.in/brands/7.svg", isJpg: false },
    { src: "https://rhetorica.tint.edu.in/brands/8.svg", isJpg: false },
    { src: "https://rhetorica.tint.edu.in/brands/9.svg", isJpg: false },
    { src: "https://rhetorica.tint.edu.in/brands/10.jpg", isJpg: true },
  ];

  const continuousTickerLogos = [...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <section
      ref={sectionRef}
      id="collaborations"
      className={`flex flex-col items-center px-5 pt-12 pb-4 transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="font-pirata text-5xl md:text-6xl text-black">
        Collaborations
      </h2>

      <div className="w-full mt-10 max-w-7xl overflow-hidden relative">
        <Swiper
          modules={[Autoplay]}
          grabCursor={true}
          loop={true}
          speed={800}
          spaceBetween={60}
          slidesPerView={2}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 60 },
            768: { slidesPerView: 4, spaceBetween: 80 },
            1024: { slidesPerView: 5, spaceBetween: 100 },
          }}
          className="w-full"
        >
          {continuousTickerLogos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center h-32 md:h-40"
            >
              <img
                src={logo.src}
                alt="Partner Logo"
                loading="lazy"
                className={`object-contain h-24 md:h-28 lg:h-28 w-auto transition-transform duration-300  ${
                  logo.isJpg ? "rounded-md" : ""
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
