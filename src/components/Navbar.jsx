import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
      setIsVisible(false);
    } else {
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
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[600px] z-50 transition-all duration-500 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
      }`}>
      <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl flex justify-around items-center p-2 shadow-2xl">
        {[
          { id: 'home', label: 'Home' },
          { id: 'about', label: 'About' },
          { id: 'skills', label: 'Service' },
          { id: 'projects', label: 'Projects' },
          { id: 'contact', label: 'Contact' }
        ].map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`px-4 py-2 rounded-xl text-sm sm:text-base font-medium transition-all duration-300 ${activeLink === link.id
                ? 'bg-[#19BBC9] text-white shadow-lg shadow-[#19BBC9]/30'
                : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            onClick={() => handleLinkClick(link.id)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>


  );
};

export default Navbar;
