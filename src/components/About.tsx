import { useEffect, useState, useRef } from "react";

export default function About() {
  const [revealProgress, setRevealProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const aboutText =
    "Rhetorica '26 is the Fifth Edition of the Annual Literary Festival of " +
    "Techno International New Town, organised by LITWITS, the Literary Club " +
    "of Techno International New Town. Scheduled for 20th and 21st January " +
    "2026, the festival features a diverse lineup of events including " +
    "debate, poetry, storytelling, and creative writing — creating a " +
    "platform where voices rise, ideas clash, and the transformative power " +
    "of words takes center stage. Whether you're a seasoned performer or a " +
    "first-time participant, Rhetorica is where the literary community " +
    "comes alive.";

  const words = aboutText.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startTracking = viewportHeight * 0.85;
      const endTracking = viewportHeight * 0.1;

      const totalRange = startTracking - endTracking;
      const currentProgress = (startTracking - rect.top) / totalRange;

      const clampedProgress = Math.max(0, Math.min(1, currentProgress));
      setRevealProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="flex flex-col md:flex-row items-start px-6 md:px-16 lg:px-20 gap-6 md:gap-12 mt-20"
    >
      <div className="w-full md:w-[140px] shrink-0">
        <h2 className="font-pirata text-5xl md:text-6xl text-black select-none">
          About
        </h2>
      </div>

      <div className="flex-1">
        <p className="font-montserrat text-base font-semibold md:text-xl leading-relaxed text-left select-none">
          {words.map((word, idx) => {
            const wordStartThreshold = idx / words.length;

            const wordProgress = Math.max(
              0,
              Math.min(1, (revealProgress * 1.15 - wordStartThreshold) * 6),
            );

            const r = Math.round(156 * (1 - wordProgress));
            const g = Math.round(163 * (1 - wordProgress));
            const b = Math.round(175 * (1 - wordProgress));

            return (
              <span
                key={idx}
                style={{
                  color: `rgb(${r}, ${g}, ${b})`,
                  transition: "color 0.15s ease-out",
                }}
                className="inline transition-colors duration-150"
              >
                {word}{" "}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
