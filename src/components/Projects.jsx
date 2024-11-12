import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: "/projects/project1 GDG Dashboard.png",
      link: "https://github.com/Shri-Utkarsh/GDG_Admin_Panel",
      description: "A dashboard project for GDG community management.",
    },
    {
      id: 2,
      image: "/projects/project2 marketing_website.png",
      link: "https://dabigmedia.netlify.app/",
      description: "A marketing website built for a media company.",
    },
    {
      id: 3,
      image: "/projects/rest country api.png",
      link: "https://county-project-api.netlify.app/",
      description: "Rest country api project.",
    },
    {
      id: 4,
      image: "/projects/project3 old portfolio.png",
      link: "https://portfolioutkarshsrivastava.netlify.app/#portfolio",
      description: "My old portfolio showcasing previous small projects.",
    },
    {
      id: 5,
      image: "/projects/project4 contact app.png",
      link: "https://github.com/Shri-Utkarsh/Contact-us-with-firebase",
      description: "A simple contact app with firebase.",
    },
    {
      id: 6,
      image: "/projects/project5 expence  app.png",
      link: "https://github.com/Shri-Utkarsh/Simple-expence-form",
      description: "A simple expense tracking app.",
    },
    {
      id: 7,
      image: "/projects/project6 dice game.png",
      link: "https://github.com/Shri-Utkarsh/Dice-Game",
      description: "A dice game.",
    },
    {
      id: 8,
      image: "/projects/project7 multi page form.png",
      link: "https://github.com/Shri-Utkarsh/Multi-page-form",
      description: "Multi-page form.",
    },
  ];

  return (
    <div
      className="p-8 my-40 relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/projects/wave.svg')",
      }}
      id="projects"
    >
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div> {/* Dark overlay for readability */}
      
      <h1 className="relative text-5xl text-[#19BBC9] text-center mb-10 z-10">Projects</h1>
      <div className="relative grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full h-[400px] rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </a>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-opacity-75 bg-custom-gradient text-white text-center z-10">
              <p className="text-sm sm:text-base lg:text-lg">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
