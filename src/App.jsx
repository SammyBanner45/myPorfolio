// import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Tech from "./components/techstack";
import { gsap } from "gsap";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      {/* <Hero /> */}
      <Intro/>
      <Tech/>
    </div>
  );
}