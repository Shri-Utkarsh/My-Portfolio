import React from "react";

const Model = ({isModalOpen, closeModal}) => {
  if(!isModalOpen) {
    return null;
  }

  const Skills = ({ skill }) => {
    return (
      <p className="border rounded-2xl py-2 px-3 inline-block m-1">{skill}</p>
    );
  };

  return (
    <div className="mx-12 pointer-events-auto fixed inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out">

        <div className="bg-[#20292C] max-w-[1200px]  rounded-3xl mx-auto my-10 p-8 flex 900px:flex-row flex-col justify-between items-center transform transition-all duration-500 ease-in-out scale-95 opacity-0 animate-popup">
      <div className="900px:max-w-[400px]">
      <button onClick={closeModal} className="text-2xl absolute top-4 right-9 bg-[#3B494F] h-8 w-8 flex items-center justify-center rounded-full duration-300 hover:rotate-180" >×</button>
        <h1 className="text-4xl text-center text-[#19BBC9]">ABOUT ME</h1>
        <p className="my-4">
          I am Utkarsh Srivastava a Web Developer, i use to create modern
          designs and create wesites that attracts visitors to stay for ever.
          technologies and tools i use to create websites{" "}
        </p>

        <Skills skill="JavaScript" />
        <Skills skill="React.js" />
        <Skills skill="Redux" />
        <Skills skill="Node.js" />
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Tailwind" />
        <Skills skill="Bootstrap" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Figma" />
        <Skills skill="Firebase" />

        <div>
          <h1 className="text-4xl text-center text-[#19BBC9] mt-8 mb-16">MERN STACK</h1>
          <div className="flex justify-center gap-12 items-center">
            <div className="flex flex-col items-center text-4xl text-[#47A248] gap-6 relative group cursor-pointer">
              <img src="/mongodb.svg" alt=""  />
              <h1>M</h1>
              <p className="text-sm text-black absolute top-0 opacity-0 group-hover:-top-12 group-hover:opacity-100 bg-[#47A248] px-4 py-2 rounded-3xl transition-all duration-200">
                MongoDB
              </p>
            </div>
            <div className="flex flex-col items-center text-4xl gap-6 relative group cursor-pointer">
              <img
                src="/expressjs.svg"
                alt=""
             
              />
              <h1>E</h1>
              <p className="text-sm text-black absolute top-0 opacity-0 group-hover:-top-12 group-hover:opacity-100 bg-white px-4 py-2 rounded-3xl transition-all duration-200">
                ExpressJS
              </p>
            </div>
            <div className="flex flex-col items-center text-4xl text-[#61dafb] gap-6 relative group cursor-pointer">
              <img src="/react.svg" alt="" />
              <h1>R</h1>
              <p className="text-sm text-black absolute top-0 opacity-0 group-hover:-top-12 group-hover:opacity-100 bg-[#61dafb] px-4 py-2 rounded-3xl transition-all duration-200">
                React
              </p>
            </div>
            <div className="flex flex-col items-center text-4xl text-[#8cc84b] gap-6 relative group cursor-pointer">
              <img src="/nextjs.svg" alt="" />
              <h1>N</h1>
              <p className="text-sm text-black absolute top-0 opacity-0 group-hover:-top-12 group-hover:opacity-100 bg-[#8cc84b] px-4 py-2 rounded-3xl transition-all duration-200">
                NextJS
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[500px] hidden md:block ">
        <img src="/about_img.png" alt="" />
      </div>
    </div>
    </div>
  );
};

export default Model;
