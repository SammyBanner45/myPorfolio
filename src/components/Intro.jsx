import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profImage from "./prof.jpeg";

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

export default function Intro() {
  // Entire section reference
  const sectionRef = useRef(null);

  // Heading reference
  const headingRef = useRef(null);

  // Paragraph reference
  const copyRef = useRef(null);

  // Profile image & decorative backgrounds reference
  const profileRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = headingRef.current.querySelectorAll(".letter");

      gsap.from(letters, {
        opacity: 0,
        y: 100,
        rotateX: -90,
        stagger: 0.03,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(copyRef.current, {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: copyRef.current,
          start: "top 80%",
        },
      });

      // Stagger animation for the background elements and the profile card
      gsap.from(profileRef.current.children, {
        opacity: 0,
        scale: 0.6,
        y: 30,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="intro"
      ref={sectionRef}
      className="min-h-screen bg-[#000000] flex items-center justify-center px-8"
      style={{ perspective: "1000px" }}
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left */}
        <div>
          <p className="uppercase tracking-[0.4em] text-cyan-300 text-sm mb-6">
            B.TECH in CSE(AI & ML)
          </p>

          <h1
            ref={headingRef}
            className="font-black text-white leading-none select-none"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="inline-block mr-4 text-4xl md:text-6xl">
              {"SAMBUDDHA".split("").map((char, index) => (
                <span
                  key={index}
                  className="letter inline-block origin-bottom"
                >
                  {char}
                </span>
              ))}
            </span>
            <span className="block text-[#d1ab3e] text-6xl md:text-8xl">
              {"BANERJEE".split("").map((char, index) => (
                <span
                  key={index}
                  className="letter inline-block origin-bottom"
                >
                  {char}
                </span>
              ))}
            </span>
          </h1>

          <p
            ref={copyRef}
            className="mt-8 max-w-lg text-[#cccccc] text-lg leading-relaxed"
          >
            Computer Science student, frontend enthusiast, and lifelong learner. I'm interested in building clean, interactive web experiences while constantly exploring new technologies and improving my craft one project at a time.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="px-8 py-4 rounded-xl bg-[#d1ab3e] text-[#001848] font-bold transition hover:scale-105">
              Education
            </button>
            <button className="px-8 py-4 rounded-xl border border-[#d1ab3e]/50 text-white transition hover:bg-[#d1ab3e]/10">
              Newton School of Technology
              (B.Tech)
            </button>
            <button className="px-8 py-4 rounded-xl border border-[#d1ab3e]/50 text-white transition hover:bg-[#d1ab3e]/10">
              Delhi Public School DURGAPUR 
              (HS)
            </button>
             <button className="px-8 py-4 rounded-xl border border-[#d1ab3e]/50 text-white transition hover:bg-[#d1ab3e]/10">
              Gitaram Academy
              (till 10th)
            </button>
          </div>
        </div>

        {/* Right */}
        <div
          ref={profileRef}
          className="relative flex items-center justify-center"
        >
          
          <div className="absolute h-80 w-80 rounded-full bg-[#d1ab3e]/20 blur-3xl" />

          <div className="absolute h-64 w-64 rounded-full border border-[#d1ab3e]/30" />

          <div className="absolute h-96 w-96 rounded-full border border-[#cccccc]/10" />

          <div className="h-72 w-72 rounded-3xl border border-[#d1ab3e]/30 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(209,171,62,0.15)] flex items-center justify-center overflow-hidden">
            <img
              src={profImage}
              alt="Sambuddha Banerjee"
              className="h-full w-full object-cover select-none"
            />
          </div>

        </div>

      </div>
    </section>
  );
}