import  { useEffect, useState } from "react";

export default function Hero() {
  const [animated, setAnimated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "’26 Edition", id: "edition" },
    { label: "Countdown", id: "countdown" },
    { label: "Events", id: "events" },
    { label: "Collaborations", id: "collaborations" },
    { label: "Map", id: "map" },
  ];

  return (
    <div
      id="home"
      className={`relative w-full h-screen bg-[url('/bg-image-mobile.png')] md:bg-[url('/bg-image.png')] bg-bottom bg-cover p-5 md:p-10 transition-opacity duration-1000 ease-out ${
        animated ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="absolute inset-0 flex flex-col items-center mt-30  pointer-events-none z-10">
        <h1
          className={`text-black font-pirata text-8xl md:text-9xl text-center select-none transition-all duration-1000 ease-out transform pointer-events-auto ${
            animated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          }`}
        >
          Rhetorica
        </h1>
      </div>

      <div className="fixed top-4 right-4 z-[9999]  pointer-events-auto">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(true);
          }}
          className={`p-2 bg-white/80 rounded-full flex items-center justify-center cursor-pointer shadow-md border-0 outline-none transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1) ${
            isMenuOpen
              ? "scale-0 opacity-0 pointer-events-none"
              : "scale-100 opacity-100"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            className="rotate-180 text-black"
          >
            <path
              d="M4 5L16 5"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
            <path
              d="M4 12L20 12"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
            <path
              d="M4 19L12 19"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1"
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed top-4 right-4 z-[9999] w-48 bg-[#f0f4f8]/95 backdrop-blur-md rounded-2xl p-4 pt-11 border border-white/20 origin-top-right transition-all duration-500 cubic-bezier(0.25, 1, 0.5, 1) ${
          isMenuOpen
            ? "scale-100 opacity-100 pointer-events-auto"
            : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(false);
          }}
          className="absolute top-3 right-3 text-black hover:scale-110 active:scale-95 transition-transform duration-200 border-0 bg-transparent outline-none cursor-pointer"
        >
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
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <nav className="flex flex-col gap-2.5">
          {navLinks.map((link, idx) => (
            <span
              key={idx}
              onClick={() => handleScrollTo(link.id)}
              style={{
                transitionDelay: isMenuOpen ? `${idx * 50}ms` : "0ms",
              }}
              className={`font-poppins text-sm font-medium text-black cursor-pointer text-left select-none hover:text-black/50 block py-0.5 transform transition-all duration-500 ease-out ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-8 opacity-0"
              }`}
            >
              {link.label}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
