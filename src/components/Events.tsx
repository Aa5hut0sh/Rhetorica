import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

// Import Swiper core styles natively
import 'swiper/css';
import 'swiper/css/effect-coverflow';

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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Defined list of flagship events from the site markup
  const festivalEvents: EventItem[] = [
    { title: ['Baak', 'Bitorko'], subtitle: 'Debate Competition' },
    { title: ['Khône', 'Kotha'], subtitle: 'Extempore Competition' },
    { title: ['Antaraal'], subtitle: 'Poetry Competitions' },
    { title: ['Akshorbongo'], subtitle: 'Creative Writing Competition' },
  ];

  // We duplicate the array locally to ensure Swiper has plenty of slides for a seamless infinite loop track
  const loopedEvents = [...festivalEvents, ...festivalEvents, ...festivalEvents];

  return (
    <div
      ref={sectionRef}
      className={`bg-[#EFE0BE] py-16 transition-all duration-1000 ease-out transform select-none ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[100px]'
      }`}
    >
      {/* Section Title */}
      <div className="flex w-full items-center justify-center font-pirata text-5xl mb-10 text-black">
        Events
      </div>

      {/* Swiper Carousel Mounting Container */}
      <div className="w-full px-4 overflow-hidden">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 60,
            modifier: 2,
            slideShadows: false,
          }}
          className="w-full !overflow-visible"
        >
          {loopedEvents.map((event, index) => (
            <SwiperSlide 
              key={index} 
              className="!w-[300px] md:!w-[380px] flex justify-center mx-4"
            >
              <div className="flex flex-col items-center gap-4 justify-center pb-4">
                
                {/* Event Frame Card Stack */}
                <div className="relative h-[420px] w-[280px] md:h-[500px] md:w-[350px] overflow-hidden rounded-xl shadow-md group">
                  {/* Layer 1: Solid base background fill matching section */}
                  <div className="absolute inset-0 bg-[#EFE0BE]" />
                  
                  {/* Layer 2: Inside dynamic graphic asset view */}
                  <div className="absolute top-8 left-6 right-6 bottom-0 overflow-hidden rounded-md">
                    <img
                      alt="event background graphic"
                      src="/event-section.png"
                      className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Layer 3: Overlaying Dynamic Native Type text layout */}
                  <div className="absolute inset-0 flex items-center justify-center mb-16 z-10 pointer-events-none">
                    <h3 className="font-pirata text-3xl md:text-4xl leading-tight text-center text-black">
                      {event.title.map((line, i) => (
                        <span key={i} className="block">{line}</span>
                      ))}
                    </h3>
                  </div>

                  {/* Layer 4: The classic aesthetic custom outer structural frame */}
                  <img
                    alt="window decorative framing outline"
                    src="/window.png"
                    className="absolute inset-0 object-cover w-full h-full z-20 pointer-events-none"
                  />
                </div>

                {/* Event Descriptive Label Tag */}
                <h4 className="font-montserrat font-semibold text-sm md:text-base text-black/80 tracking-wide text-center">
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