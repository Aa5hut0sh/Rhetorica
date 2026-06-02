import React, { useEffect, useState, useRef } from "react";

export default function Map() {
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
      { threshold: 0.15 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const googleMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.721473215579!2d88.48704257507714!3d22.55113947950664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a020b267a3cdc13%3A0xb3b21d652126f40!2sTechno%20International%20New%20Town%20(TINT)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
  const directMapLink = "https://maps.app.goo.gl/YourDirectLinkHere";

  return (
    <section
      ref={sectionRef}
      id="map"
      className="px-6 md:px-10 lg:px-12 pt-10 pb-20 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 max-w-[1200px] mx-auto w-full"
    >
      <div
        className={`w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-sm border border-gray-200 transition-all duration-1000 ease-out transform ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <iframe
          src={googleMapsUrl}
          title="Techno International New Town Campus Map"
          className="w-full h-72 md:h-[340px] border-0 block"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div
        className={`flex flex-col w-full lg:w-1/2 gap-4 lg:gap-5 transition-all duration-1000 delay-150 ease-out transform ${
          isVisible
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[50px]"
        }`}
      >
        <h2 className="text-2xl md:text-[28px] font-montserrat font-bold text-black tracking-tight">
          Techno International New Town
        </h2>

        <p className="text-black/80 font-montserrat font-medium text-[15px] leading-relaxed pr-0 lg:pr-4">
          1/1, Service Rd, DG Block(Newtown), Action Area I, Newtown,
          Chakpachuria, West Bengal 700156
        </p>

        <div className="flex flex-col gap-2 mt-1">
          <h3 className="font-montserrat font-semibold text-[15px] text-black">
            Guide:
          </h3>
          <ul className="space-y-0.5 text-black/80 font-montserrat font-medium text-[15px]">
            <li>
              a. 15 mins from Netaji Subhash Chandra Bose International Airport.
            </li>
            <li>b. 2 mins from Biswa Bangla Gate.</li>
            <li>c. 4 mins from Ecospace Business Park.</li>
          </ul>
        </div>

        <div className="pt-3">
          <a
            href={directMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full rounded-lg text-[15px] font-semibold text-white bg-[#0ba34c] hover:bg-[#098b40] transition-colors duration-200 px-5 py-3 cursor-pointer group"
          >
            <span>View on Google Maps</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:translate-x-1 transition-transform duration-200"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
