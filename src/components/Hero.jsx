import { FaLongArrowAltDown } from "react-icons/fa";
import HireMe from "./HireMe";
import { useRef, useState } from "react";
import Model from "./Model";

const Hero = () => {

  // Create a ref for the section to scroll to
  const scrollToRef = useRef(null);

  // Scroll to the desired section
  const handleScroll = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Modal function
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div id="home" className="mt-24 max-w-[1200px] mx-auto relative z-[1] pointer-events-none">

        <h1 className=" flex justify-center text-2xl tracking-widest text-[#19BBC9] mb-2">
          PORTFOLIO
        </h1>
        <h1 className="z-[1] pointer-events-none flex justify-center text-sm sm:text-xl ">
          Dynamic Web Magic with React.js
        </h1>


        <div className="flex flex-col md:flex-row justify-between items-center mt-24 md:mt-40 px-6">
          <div className="w-[280px] md:w-[350px] lg:w-[450px] pointer-events-none z-[1] mb-10 md:mb-0">
            <img className="w-full animate-float drop-shadow-[0_0_30px_rgba(25,187,201,0.3)]" src="/try3.svg" alt="Hero Illustration" />
          </div>

          <div className="z-[1] pointer-events-none text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-2">Utkarsh Srivastava</h1>
            <p className="text-xl md:text-3xl lg:text-5xl font-light mb-8">
              Web <span className="text-[#19BBC9] font-semibold">Developer</span>
            </p>

            <div className="flex flex-col md:flex-row place-items-center md:place-items-start gap-4 md:gap-6">
              <button className="button pointer-events-auto shadow-xl hover:shadow-[#19BBC9]/20 transition-all duration-300">
                <a href="/Utkarsh_Resume.pdf" download={"Utkarsh_Resume.pdf"}>Resume</a>
              </button>
              <button className="button pointer-events-auto shadow-xl hover:shadow-[#19BBC9]/20 transition-all duration-300" onClick={openModal}>
                About Me
              </button>
              <Model isModalOpen={isModalOpen} closeModal={closeModal} />
            </div>
          </div>
        </div>
        <HireMe />

        <div className="flex justify-center flex-col items-center">
          <button onClick={handleScroll}
            className="py-2 px-5 rounded bg-custom-gradient hover:scale-110 ease-in duration-100 pointer-events-auto"
          >
            Click to Scroll
          </button>
          <FaLongArrowAltDown className="text-[#19BBC9] h-[7rem] animate-bounce" />

        </div>

      </div>
      <div ref={scrollToRef}>

      </div>
    </>
  );
};

export default Hero;
