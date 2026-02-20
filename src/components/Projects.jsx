import React from "react";

const Projects = () => {
  const projects = [

    {
      id: 9,
      image: "/projects/chat_app.png",
      link: "https://cipherlink-puce.vercel.app/",
      description: "Built an anonymous, end-to-end encrypted chat application with Zero Knowledge architecture.",
    },

    {
      id: 2,
      image: "/projects/lumina_e-com.png",
      link: "https://e-com-liard-seven.vercel.app/",
      description: `full-stack e-commerce application using React, Node.js, Express,
and MongoDB.`,
    },

    {
      id: 4,
      image: "/projects/rolin.png",
      link: "https://rolinn.netlify.app/",
      description: "premium high-performance restaurant UI using React.js.",
    },

    {
      id: 1,
      image: "/projects/project1 GDG Dashboard.png",
      link: "https://github.com/Shri-Utkarsh/GDG_Admin_Panel",
      description: "A dashboard project for GDG community management.",
    },


    {
      id: 3,
      image: "/projects/rest country api.png",
      link: "https://county-project-api.netlify.app/",
      description: "Rest country api project.",
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
      className="p-8 my-40 relative bg-cover bg-center"
      style={{
        backgroundImage: "url('/projects/wave.svg')",
      }}
      id="projects"
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div> {/* Dark overlay for readability */}

      <h1 className="relative text-5xl font-bold text-[#19BBC9] text-center mb-16 z-10 tracking-tight">
        Featured Projects
      </h1>

      <div className="relative grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 z-10 max-w-[1200px] mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative w-full h-[400px] rounded-2xl shadow-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:shadow-[#19BBC9]/20"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Better Overlay with Glassmorphism */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 p-4 rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm sm:text-base lg:text-lg text-white font-medium mb-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#19BBC9] text-sm font-bold">
                    <span>View Project</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
