import { useEffect, useState, useRef } from "react";

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
      { threshold: 0.1 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer ref={footerRef} className="w-full select-none bg-white">
      <div
        className={`relative bg-[url('/footer.png')] bg-cover bg-top w-full transition-opacity duration-1000 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-10 md:gap-6 items-start justify-between px-10 md:px-16 lg:px-20 pt-16 pb-0 font-montserrat text-black max-w-[1500px] mx-auto">
          <div
            className={`flex flex-col gap-6 w-full md:w-[30%] transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-[70px]"
            }`}
          >
            <h2 className="font-pirata text-6xl md:text-7xl text-black leading-none drop-shadow-sm">
              Rhetorica '26
            </h2>

            <div className="flex flex-col gap-4">
              <p className="font-semibold text-sm md:text-[15px] text-black leading-relaxed">
                Annual Literary Festival of <br />
                Techno International New Town
              </p>
              <p className="font-bold text-sm md:text-[15px] text-black mt-2">
                Organised by LITWITS
              </p>
            </div>
          </div>

          <div
            className={`flex flex-col gap-2.5 transition-all duration-1000 delay-100 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[50px]"
            }`}
          >
            <h3 className="font-bold text-base md:text-[17px] mb-2 text-black">
              Quick Links
            </h3>
            {[
              { label: "About", id: "about" },
              { label: "'26 Edition", id: "edition" },
              { label: "Countdown", id: "countdown" },
              { label: "Events", id: "events" },
              { label: "Collaborations", id: "collaborations" },
              { label: "Map", id: "map" },
            ].map((link, i) => (
              <span
                key={i}
                onClick={() => smoothScrollTo(link.id)}
                className="cursor-pointer text-sm md:text-[15px] text-black hover:underline transition-colors duration-200"
              >
                {link.label}
              </span>
            ))}
          </div>

          <div
            className={`flex flex-col gap-2.5 transition-all duration-1000 delay-200 ease-out transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[50px]"
            }`}
          >
            <h3 className="font-bold text-base md:text-[17px] mb-2 text-black">
              Documents
            </h3>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1CvgcmPsVR3iD6pAS5vtTb4SdltDbcF8g/view?usp=sharing"
              className="text-sm md:text-[15px] text-black hover:underline transition-colors duration-200"
            >
              Brochure
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1p0fV_mpq7S6asz9_II6afLCLMbQOeE8g/view?usp=sharing"
              className="text-sm md:text-[15px] text-black hover:underline transition-colors duration-200"
            >
              Sponsorship Deck
            </a>
          </div>

          <div
            className={`flex flex-col gap-4 w-full md:w-auto transition-all duration-1000 ease-out transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-[70px]"
            }`}
          >
            <h3 className="font-bold text-base md:text-[17px] text-black">
              Follow us on Social Media
            </h3>
            <div className="flex gap-3 items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/rhetorica.tint"
                className="text-black hover:text-pink-600 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/litwits.tint"
                className="text-black hover:text-pink-600 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/TINT.Literary.Club.Litwits"
                className="text-black hover:text-blue-600 transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>

            <div className="flex flex-col gap-2 mt-2">
              <a
                href="mailto:rhetorica.tint@gmail.com"
                className="flex gap-2 items-center text-xs md:text-sm text-black hover:underline font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                rhetorica.tint@gmail.com
              </a>
              <a
                href="mailto:literary.club@tict.edu.in"
                className="flex gap-2 items-center text-xs md:text-sm text-black hover:underline font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                literary.club@tict.edu.in
              </a>
            </div>
          </div>
        </div>

        <div className="h-[320px] md:h-[400px] pointer-events-none" />
      </div>

      <div
        className={`flex px-4 text-xs items-center flex-col pb-6 pt-4 justify-center font-montserrat text-center md:text-sm text-black bg-white transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="font-semibold">
          Built with ❤️ by{" "}
          <a
            href="https://github.com/Aa5hut0sh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Ashutosh
          </a>
        </p>
        <p className="mt-1 text-[11px] font-bold tracking-wide">
          An initiative by LITWITS & Rhetorica Organising Committee
        </p>
      </div>
    </footer>
  );
}
