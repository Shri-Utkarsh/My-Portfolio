import React, { useEffect, useState } from "react";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;

        if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
            setIsVisible(false);
        }else {
            setIsVisible(true);
        }

        setPrevScrollPos(currentScrollPos);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [prevScrollPos]);

// ----------------------------------------------------------------------------------------------------------

const [activeLink, setActiveLink] = useState('home'); // Track the active link

const handleLinkClick = (link) => {
  setActiveLink(link); // Update the active link when a link is clicked
};

  return (
    <nav className={`max-w-[1850px] fixed top-2 w-full z-50 flex justify-center transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-[8rem]"
    }`}>
      <div className="relative w-[300px] sm:w-[520px] h-[40px] sm:h-[50px] backdrop-blur-lg bg-[#0b0d29]/10 border border-[#181a38] rounded-lg flex justify-center items-center sm:gap-4 mt-3 p-1">
        <a
          href="#home"
          className={`inline-block text-sm sm:text-2xl p-2 rounded-lg z-10 ${activeLink === 'home' ? 'bg-custom-gradient' : ''}`}
          onClick={() => handleLinkClick('home')}
        >
          Home
        </a>
        <a
          href="#about"
          className={`inline-block text-sm sm:text-2xl p-2 rounded-lg z-10 ${activeLink === 'about' ? 'bg-custom-gradient' : ''}`}
          onClick={() => handleLinkClick('about')}
        >
          About
        </a>
        <a
          href="#skills"
          className={`inline-block text-sm sm:text-2xl p-2 rounded-lg z-10 ${activeLink === 'skills' ? 'bg-custom-gradient' : ''}`}
          onClick={() => handleLinkClick('skills')}
        >
          Service
        </a>
        <a
          href="#projects"
          className={`inline-block text-sm sm:text-2xl p-2 rounded-lg z-10 ${activeLink === 'projects' ? 'bg-custom-gradient' : ''}`}
          onClick={() => handleLinkClick('projects')}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={`inline-block text-sm sm:text-2xl p-2 rounded-lg z-10 ${activeLink === 'contact' ? 'bg-custom-gradient' : ''}`}
          onClick={() => handleLinkClick('contact')}
        >
          Contact
        </a>
      
      </div>
    </nav>

    
  );
};

export default Navbar;
