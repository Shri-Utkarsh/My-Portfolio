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
       

        <div className="flex justify-between items-center mt-40 mr-8">
          <div className="w-[200px] md:w-[300px] lg:w-[400px] pointer-events-none z-[1]">
            <img className="w-full" src="/try3.svg" alt="" />
          </div>
         
          <div className="z-[1] pointer-events-none">
            <h1 className="text-xl md:text-3xl lg:text-5xl text-nowrap ">Utkarsh Srivastava</h1>
            <p className="text-sm md:text-2xl lg:text-4xl leading-[30px] md:leading-[50px] lg:leading-[70px]">Web <span className="text-[#19BBC9]">Developer</span></p>


            <div className="flex flex-col place-items-start gap-3 md:gap-7">
            <button className="button pointer-events-auto"><a href="/Utkarsh_Resume.pdf" download={"Utkarsh_Resume.pdf"}>Resume</a></button>
            <button className="button pointer-events-auto " onClick={openModal}>About Me</button>
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
        <FaLongArrowAltDown className="text-[#19BBC9] h-[7rem] animate-bounce"/>
         
        </div>

      </div>
      <div ref={scrollToRef}>
        
      </div>
    </>
  );
};

export default Hero;
