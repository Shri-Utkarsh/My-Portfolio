import React, { useEffect, useRef, useState } from "react";

const Skills = ({ name, x, y, animate }) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full text-[#19BBC9] md:text-white md:bg-custom-gradient text-xl md:text-2xl md:px-4 md:py-2 cursor-pointer absolute transition duration-300 ${
        animate ? 'animate-skill' : ''
      }`}
      style={{
        transform: `translate(${x}, ${y})`,
        opacity: 0,
        "--target-transform": `translate(${x}, ${y})`,
      }}
    >
      {name}
    </div>
  );
};

const Page3 = () => {
  const [isInView, setIsInView] = useState(false);
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect(); // Disconnect to prevent re-triggering
          }
        });
      },
      { threshold: 0.2 }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div id="skills" ref={pageRef}>
      <h2 className="font-bold text-8xl w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <div className="flex items-center justify-center rounded-full md:font-semibold bg-custom-gradient text-xl md:text-2xl px-2 md:px-4 md:py-2 cursor-pointer animate-pulse">
          Web
        </div>
        <Skills name="HTML" x="-25vw" y="2vw" animate={isInView} />
        <Skills name="CSS" x="-5vw" y="-10vw" animate={isInView} />
        <Skills name="JavaScript" x="20vw" y="6vw" animate={isInView} />
        <Skills name="ReactJS" x="0vw" y="12vw" animate={isInView} />
        <Skills name="Java" x="-20vw" y="-15vw" animate={isInView} />
        <Skills name="NextJS" x="15vw" y="-12vw" animate={isInView} />
        <Skills name="Web Design" x="32vw" y="-5vw" animate={isInView} />
        <Skills name="Figma" x="0vw" y="-20vw" animate={isInView} />
        <Skills name="Firebase" x="-25vw" y="18vw" animate={isInView} />
        <Skills name="Tailwind CSS" x="18vw" y="18vw" animate={isInView} />
      </div>

      <style>
        {`
          @keyframes spreadFromCenter {
            from {
              transform: translate(0, 0);
              opacity: 0;
            }
            to {
              transform: var(--target-transform);
              opacity: 1;
            }
          }
          .animate-skill {
            animation: spreadFromCenter 1.5s ease forwards;
          }
        `}
      </style>
    </div>
  );
};

export default Page3;
