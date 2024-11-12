import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Projects from "./components/Projects";

const App = () => {
  const comp = useRef(null);
  const [introComplete, setIntroComplete] = useState(false);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1,
        ease: "power2.out", // Easing added for smoother animation
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
          ease: "power2.out",
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          stagger: 0.5,
          ease: "power2.in",
        })
        .to("#intro-slider", {
          xPercent: "100",
          duration: 1,
          ease: "power2.in",
          onComplete: () => {
            // Hide intro-slider after animation
            setIntroComplete(true);
          }
        });
        
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      {/* Conditionally render intro-slider */}
      {!introComplete && (
        <div
          id="intro-slider"
          className="h-screen p-10 bg-intro-custom-gradient fixed top-0 left-0 font-spaceGrotesk z-50 w-full flex flex-col justify-center items-center gap-10"
          style={{ willChange: "transform" }} // Optimization for smoother animations
        >
          <h1 className="text-4xl md:text-5xl lg:text-8xl" id="title-1">
            Web Developer
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-8xl" id="title-2">
            Web Designer
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-8xl" id="title-3">
            Freelancer
          </h1>
        </div>
      )}

      {/* Main Content */}
      <div className="relative">
        <Navbar />
        <Hero />
        <Page2 />
        <Page3 />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
