import React, { useEffect, useState, useRef } from 'react';

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
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Exact location URL coordinates for TINT on Google Maps
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3475908681285!2d88.47311107604581!3d22.566103333481267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02753051515151%3A0x6bd79fbf9a76de77!2sTechno%20International%20New%20Town!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";
  const directMapLink = "https://maps.app.goo.gl/9ZpZ6h7kH6K6U56M9";

  return (
    <section
      ref={sectionRef}
      id="map"
      className="px-6 md:px-20 flex flex-col lg:flex-row items-center lg:items-start my-24 justify-center gap-10 lg:gap-20 max-w-7xl mx-auto"
    >
      
      {/* Left Box: The Map Iframe Component Card */}
      <div
        className={`w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-black/5 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <iframe
          src={googleMapsUrl}
          title="Techno International New Town Campus Map Location"
          className="w-full h-64 md:h-80 border-0 block"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Right Box: Logistical Information Guide text */}
      <div
        className={`flex font-poppins flex-col w-full lg:w-[45%] gap-6 transition-all duration-1000 delay-150 ease-out transform ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-black leading-tight">
          Techno International New Town
        </h2>
        
        <p className="text-black/70 font-medium leading-relaxed">
          1/1, Service Rd, DG Block(Newtown), Action Area I, Newtown, Chakpachuria, West Bengal 700156
        </p>

        {/* Transit Distance Guide Indicators */}
        <div className="flex flex-col gap-3 border-t border-black/10 pt-4">
          <h3 className="font-montserrat font-bold text-sm uppercase tracking-wider text-black/40">
            Proximity Guide:
          </h3>
          <ul className="space-y-2 text-black/80 font-medium">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">a.</span>
              <span>15 mins from Netaji Subhash Chandra Bose International Airport.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">b.</span>
              <span>2 mins from Biswa Bangla Gate.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">c.</span>
              <span>4 mins from Ecospace Business Park.</span>
            </li>
          </ul>
        </div>

        {/* Direct Vector CTA Trigger Button */}
        <div className="pt-2">
          <a
            href={directMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white bg-green-600 hover:bg-green-700 active:scale-98 shadow-md hover:shadow-lg transition-all duration-200 px-5 py-3 cursor-pointer group"
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