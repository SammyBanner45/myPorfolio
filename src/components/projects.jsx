import projects from "../data/projects.json";
import "./projects.css";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiGithub,
} from "react-icons/fi";


export default function FeaturedProjects() {
  // =========================
  // STATE
  // =========================

  const [activeIndex, setActiveIndex] = useState(0);

  // =========================
  // REFS
  // =========================

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const detailRef = useRef(null);

  // Stores animation direction
  const directionRef = useRef(1);

  // =========================
  // NAVIGATION FUNCTIONS
  // =========================

  const selectProject = (index) => {
    if (index === activeIndex) return;

    directionRef.current = index > activeIndex ? 1 : -1;
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    directionRef.current = -1;

    setActiveIndex((current) =>
      (current - 1 + projects.length) % projects.length
    );
  };

  const goToNext = () => {
    directionRef.current = 1;

    setActiveIndex((current) =>
      (current + 1) % projects.length
    );
  };

  // =========================
  // KEYBOARD CONTROLS
  // =========================

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // =========================
  // CARD ANIMATIONS
  // =========================

  useEffect(() => {
    const cards = gsap.utils.toArray(
      ".line-project-card",
      trackRef.current
    );

    const CARD_SPACING = 260;

    cards.forEach((card, index) => {
      const offset = index - activeIndex;
      const distance = Math.abs(offset);

      gsap.to(card, {
        x: offset * CARD_SPACING,

        scale: index === activeIndex ? 1 : 0.8,

        opacity: index === activeIndex ? 1 : 0.35,

        zIndex:
          index === activeIndex
            ? 10
            : 5 - distance,

        duration: 0.7,

        ease: "power3.inOut",
      });
    });

    gsap.fromTo(
      detailRef.current,

      {
        x: directionRef.current * 40,
        opacity: 0,
      },

      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      }
    );
  }, [activeIndex]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative overflow-hidden py-25 mb-0 bg-[#000000]"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,171,62,0.08),transparent_65%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* ========================= */}
        {/* SECTION HEADER */}
        {/* ========================= */}

        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-300">
              Featured Work
            </p>

            <h2 className="text-6xl md:text-8xl font-black text-[#ffffff]">
              PROJECTS
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4">
            <button
              className="project-arrow-button"
              onClick={goToPrevious}
            >
              <FiArrowLeft />
            </button>

            <span className="text-sm font-bold tracking-[0.25em] text-[#cccccc]">
              {String(activeIndex + 1).padStart(2, "0")}
              {" / "}
              {String(projects.length).padStart(2, "0")}
            </span>

            <button
              className="project-arrow-button"
              onClick={goToNext}
            >
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* ========================= */}
        {/* PROJECT CAROUSEL */}
        {/* ========================= */}

        <div
          ref={trackRef}
          className="relative mx-auto h-[500px] max-w-6xl"
        >
          {projects.map((project, index) => {
            const isActive =
              index === activeIndex;

            return (
              <article
                key={project.title}
                className={`line-project-card ${
                  isActive ? "active" : ""
                }`}
                onClick={() =>
                  selectProject(index)
                }
              >
                {/* ========================= */}
                {/* IMAGE */}
                {/* ========================= */}

                <div className="line-project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>

                {/* ========================= */}
                {/* CONTENT */}
                {/* ========================= */}

                <div
                  ref={
                    isActive
                      ? detailRef
                      : null
                  }
                  className="line-project-content"
                >
                  <p className="project-category">
                    {project.category}
                  </p>

                  <h3 className="project-title">
                    {project.title}
                  </h3>

                  <p className="project-description">
                    {project.desc}
                  </p>

                  {/* Links */}
                  <div
                    style={{
                      marginTop: "auto",
                      display: "flex",
                      gap: "12px",
                    }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-icon-link"
                    >
                      <FiGithub />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-icon-link"
                    >
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

    </section>
  );
}