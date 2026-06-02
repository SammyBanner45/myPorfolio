import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaPython,
  FaReact,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const tech = [
  { name: "Java", Icon: FaJava },
  { name: "Python", Icon: FaPython },
  { name: "JavaScript", Icon: FaJsSquare },
  { name: "React", Icon: FaReact },
  { name: "HTML5", Icon: FaHtml5 },
  { name: "CSS3", Icon: FaCss3Alt },
];

export default function TechStack() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const moveDistance = track.scrollWidth + window.innerWidth;

      gsap.fromTo(
        track,
        {
          x: window.innerWidth * 0.6,
        },
        {
          x: -(track.scrollWidth - window.innerWidth * 0.8),
          ease: "none",

          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${moveDistance * 2}`,
            scrub: 1,
            pin: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
  <section
    ref={sectionRef}
    id="tech"
    className="relative min-h-screen overflow-hidden bg-[#000000]"
  >
  <div className="mx-auto mb-16 h-px max-w-xl bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_22px_#00f5ff]" />
    {/* Background Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,171,62,0.08),transparent_60%)]" />

    <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
      {/* Heading */}
      <div className="mb-24">
        <p className="uppercase tracking-[0.4em] text-[cyan] text-sm mb-4">
          Skills & Technologies
        </p>

        <h2 className="text-7xl md:text-9xl font-black text-white">
          TECH STACK
        </h2>

        <p className="mt-4 text-[#cccccc]/60 uppercase tracking-[0.3em] text-sm">
          Technologies I build with
        </p>
      </div>

      {/* Track Area */}
      <div className="relative h-[320px] flex items-center overflow-hidden">
        
        {/* Horizontal Line */}
        <div className="absolute left-0 right-0 h-[2px] bg-[#d1ab3e]/25" />

        {/* Moving Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-16 w-max"
        >
          {/* Start Circle */}
          <div
            className="
              h-5 w-5
              rounded-full
              border-2 border-[#d1ab3e]
              bg-[#050508]
              shadow-[0_0_10px_rgba(209,171,62,1)]
              shrink-0
            "
          />

          {/* Tech Cards */}
          {tech.map(({ name, Icon }) => (
            <div
              key={name}
              className="
                h-32 w-32
                flex flex-col items-center justify-center
                rounded-2xl
                bg-[#000000]/85
                border border-[#d1ab3e]/30
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-2
                hover:border-[#d1ab3e]
                hover:shadow-[0_0_35px_rgba(209,171,62,0.45)]
              "
            >
              <Icon
                className="text-5xl text-[#d1ab3e]"
                // style={{
                //   filter:
                //     "drop-shadow(0 0 10px rgba(209,171,62,0.9)) drop-shadow(0 0 20px rgba(209,171,62,0.6))",
                // }}
              />

              <span
                className="
                  mt-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-[#cccccc]
                "
              >
                {name}
              </span>
            </div>
          ))}

          {/* End Circle */}
          <div
            className="
              h-5 w-5
              rounded-full
              border-2 border-[#d1ab3e]
              bg-[#050508]
              shadow-[0_0_20px_rgba(209,171,62,1)]
              shrink-0
            "
          />
        </div>
      </div>
    </div>
  <div
  className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[50vw] h-[1px]"
  style={{
    background:
      "linear-gradient(to right, transparent, #22d3ee 25%, #d1ab3e 50%, #22d3ee 75%, transparent)",
  }}
/>
  </section>
);}