import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

interface EventItem {
  title: string[];
  subtitle: string;
}

export default function Events() {
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
      { threshold: 0.02 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const festivalEvents: EventItem[] = [
    { title: ["Baak", "Bitorko"], subtitle: "Debate Competition" },
    { title: ["Khône", "Kotha"], subtitle: "Extempore Competition" },
    { title: ["Antaraal"], subtitle: "Poetry Competitions" },
    { title: ["Akshorbongo"], subtitle: "Creative Writing Competition" },
  ];

  const loopedEvents = [
    ...festivalEvents,
    ...festivalEvents,
    ...festivalEvents,
  ];

  return (
    <div
      id="events"
      ref={sectionRef}
      className={`bg-[#EFE0BE] py-16 transition-all duration-700 ease-out transform select-none overflow-hidden ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[70px]"
      }`}
    >
      <div className="flex w-full items-center justify-center font-pirata text-5xl mb-12 text-black">
        Events
      </div>

      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1.2}
          spaceBetween={300}
          speed={2000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 45,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2.2,
              spaceBetween: 28,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="!px-6 md:!px-12"
        >
          {loopedEvents.map((event, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center py-4"
            >
              <div className="flex flex-col items-center gap-4 justify-center w-full">
                <div className="relative h-[410px] w-[270px] md:h-[510px] md:w-[340px] mx-auto overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-[#EFE0BE]" />

                  <div className="absolute top-[38px] left-[26px] right-[26px] bottom-0 overflow-hidden rounded-md">
                    <img
                      alt="event background graphic"
                      src="/event-section.png"
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center mb-24 z-10 pointer-events-none">
                    <h3 className="font-pirata text-3xl md:text-4xl leading-tight text-center text-black tracking-wide">
                      {event.title.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                  </div>

                  <img
                    alt="window decorative framing outline"
                    src="/window.png"
                    className="absolute inset-0 object-cover w-full h-full z-20 pointer-events-none"
                  />
                </div>

                <h4 className="font-montserrat font-bold text-sm md:text-sm text-black tracking-wide text-center mt-2">
                  {event.subtitle}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
