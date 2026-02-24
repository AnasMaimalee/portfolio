import { useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import OpenSource from "./components/sections/OpenSource";
import Education from "./components/sections/Education";
import QuickRequest from "./components/sections/QuickRequest";

export default function App() {

  useEffect(() => {
    fetch("https://proudly-gage-eur-dogs.trycloudflare.com/api/track-visitor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }).catch(() => {
      // silently fail — analytics should never break UI
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <OpenSource />
        <Education />
        <QuickRequest />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
