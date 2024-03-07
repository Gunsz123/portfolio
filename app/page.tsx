import About from "./components/About";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./components/ui/tracing-beam";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <TracingBeam>
      <div>
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>
    </TracingBeam>
  );
}
