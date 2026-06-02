import React, { useEffect, useState, useRef } from 'react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

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

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="w-full select-none">
      {/* Main Footer Info Block */}
      <div
        className={`relative bg-[url('/footer.png')] bg-cover md:bg-bottom min-h-[120vh] md:min-h-0 md:h-[450px] flex flex-col md:flex-row gap-8 md:gap-10 items-start md:justify-between p-10 md:p-16 md:px-20 font-medium font-montserrat text-black transition-opacity duration-1000 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Left Branding Block */}
        <div
          className={`flex flex-col gap-3 md:gap-4 w-full md:w-1/3 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-[70px]'
          }`}
        >
          <h2 className="font-pirata text-5xl md:text-6xl text-black">Rhetorica '26</h2>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-black/40 to-transparent" />
          <p className="font-semibold text-sm md:text-base text-black/80 leading-relaxed">
            Annual Literary Festival of <br />
            Techno International New Town
          </p>
          <p className="font-bold text-xs uppercase tracking-wider text-green-700">
            Organised by LITWITS
          </p>
        </div>

        {/* Quick Links Nav Matrix */}
        <div
          className={`flex flex-col gap-2 transition-all duration-1000 delay-100 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'
          }`}
        >
          <h3 className="font-bold text-sm md:text-lg mb-2 text-black border-b border-black/10 pb-1">
            Quick Links
          </h3>
          {[
            { label: 'About', id: 'about' },
            { label: "‘26 Edition", id: 'edition' },
            { label: 'Countdown', id: 'countdown' },
            { label: 'Events', id: 'events' },
            { label: 'Collaborations', id: 'collaborations' },
            { label: 'Map', id: 'map' },
          ].map((link, i) => (
            <span
              key={i}
              onClick={() => smoothScrollTo(link.id)}
              className="cursor-pointer text-xs md:text-base text-black/70 hover:text-black hover:underline transition-colors duration-250"
            >
              {link.label}
            </span>
          ))}
        </div>

        {/* Documents Hosted Links */}
        <div
          className={`flex flex-col gap-2 transition-all duration-1000 delay-200 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[50px]'
          }`}
        >
          <h3 className="font-bold text-sm md:text-lg mb-2 text-black border-b border-black/10 pb-1">
            Documents
          </h3>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1CvgcmPsVR3iD6pAS5vtTb4SdltDbcF8g/view?usp=sharing"
            className="cursor-pointer text-xs md:text-base text-black/70 hover:text-black hover:underline transition-colors duration-250"
          >
            Brochure
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1p0fV_mpq7S6asz9_II6afLCLMbQOeE8g/view?usp=sharing"
            className="cursor-pointer text-xs md:text-base text-black/70 hover:text-black hover:underline transition-colors duration-250"
          >
            Sponsorship Deck
          </a>
        </div>

        {/* Social Framework Targets */}
        <div
          className={`flex flex-col gap-3 w-full md:w-auto transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[70px]'
          }`}
        >
          <h3 className="font-bold text-sm md:text-lg text-black">Follow us on Social Media</h3>
          <div className="flex gap-3 items-center">
            {/* Instagram: Rhetorica */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/rhetorica.tint"
              className="hover:text-pink-600 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            {/* Instagram: Litwits */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/litwits.tint"
              className="hover:text-pink-600 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            {/* Facebook: Litwits Official */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/TINT.Literary.Club.Litwits"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
          </div>

          <div className="h-px w-full bg-black/10 my-1" />
          
          {/* Email Outboxes */}
          <div className="space-y-1.5 flex flex-col">
            <a href="mailto:rhetorica.tint@gmail.com" className="flex gap-2 items-center text-xs text-black/70 hover:text-black font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>rhetorica.tint@gmail.com</span>
            </a>
            <a href="mailto:literary.club@tict.edu.in" className="flex gap-2 items-center text-xs text-black/70 hover:text-black font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>literary.club@tict.edu.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Engineering Attributes Row */}
      <div
        className={`flex px-4 text-xs items-center flex-col pb-8 pt-4 justify-center font-semibold font-montserrat text-center md:text-sm text-black/40 border-t border-black/5 bg-white transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-black/60 font-medium">
          Built with ❤️ by{' '}
          <a href="https://sidahq.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-bold">
            SIDA Technologies
          </a>
        </p>
        <p className="mt-2 text-[11px] font-medium tracking-wide">
          An initiative by LITWITS & Rhetorica Organising Committee
        </p>
      </div>
    </footer>
  );
}