import "./Hero.css";
import { FiArrowDown } from "react-icons/fi";

export default function Hero() {
  const scrollToIntro = () => {
    const intro = document.getElementById("intro");

    if (intro) {
      intro.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero-section">
        <div className="corner-glow-wrapper">
        <div className="corner-glow top-left"></div>
        <div className="corner-glow top-right"></div>
        </div>

      {/* Background Glows */}
      <div className="hero-cyan-glow" />
      <div className="hero-gold-glow" />

      {/* Rings */}
      <div className="ring ring-1" />
      <div className="ring ring-2" />
      <div className="ring ring-3" />

      {/* Particles */}
      <div className="particle particle-1" />
      <div className="particle particle-2" />
      <div className="particle particle-3" />
      <div className="particle particle-4" />
      <div className="particle particle-5" />
      <div className="particle particle-6" />

      {/* Center */}
      <div className="hero-content">
        <h1
  className="
    text-[80px]
    md:text-[120px]
    font-black
    tracking-[-0.03em]
    select-none
  "
  style={{
    background:
      "linear-gradient(90deg, #22d3ee 0%, #ffffff 50%, #d1ab3e 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",

    filter:
      "drop-shadow(0 0 10px rgba(255,255,255,0.5)) drop-shadow(0 0 25px rgba(34,211,238,0.25)) drop-shadow(0 0 25px rgba(209,171,62,0.15))",
  }}
>
  SB
</h1>
         
      </div>

      {/* Scroll Button */}
      <button
        className="scroll-button"
        onClick={scrollToIntro}
      >
        <FiArrowDown size={24} />
        <span>Scroll In</span>
      </button>
    </section>
  );
}