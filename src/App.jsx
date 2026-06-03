import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Contact from "./components/contact";
import Tech from "./components/techstack";
import Project from "./components/projects"
import { gsap } from "gsap";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <Intro/>
      <Tech/>
      <Project/>
      <Contact/>
    </div>
  );
}