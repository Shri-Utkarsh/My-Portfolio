import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaCodepen, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fcf070ba-53f6-4c44-8455-25c0a0477e77");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="relative overflow-hidden my-10" id="contact">
      <img
        src="/hacker png.png"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="relative max-w-[1200px] bg-[#20292C]/30 backdrop-blur-md rounded-2xl shadow-lg p-8 mx-auto flex flex-col justify-center items-center my-24">
        <h1 className="text-4xl text-center text-[#19BBC9] my-6 ">Let's Connect</h1>
        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://www.instagram.com/utkarshsrivastava1422/profilecard/?igsh=MTFvMWpyamp2cnkyaA%3D%3D" target="blank" className="hover:text-[#19BBC9] transition-all duration-300 hover:scale-125"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/utkarsh-srivastava-1749b828b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank" className="hover:text-[#19BBC9] transition-all duration-300 hover:scale-125"><FaLinkedinIn /></a>
          <a href="https://github.com/Shri-Utkarsh" target="blank" className="hover:text-[#19BBC9] transition-all duration-300 hover:scale-125"><FaGithub /></a>
          <a href="mailto:utkarshsrivastava1422@gmail.com" target="blank" className="hover:text-[#19BBC9] transition-all duration-300 hover:scale-125"><BiLogoGmail /></a>
        </div>
        {/* Form */}
        <div className="my-8 max-w-[900px] w-full"> {/* Added w-full here */}
          <form
            onSubmit={onSubmit}
            className="flex flex-col items-center"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="bg-[#3b494f50] w-full mb-4 p-2 rounded" // Ensure full width
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="bg-[#3b494f50] w-full mb-4 p-2 rounded" // Ensure full width
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="bg-[#3b494f50] w-full mb-4 p-2 rounded" // Ensure full width
            ></textarea>
            <button
              type="submit"
              className="bg-custom-gradient p-2 rounded w-32" // You can keep this width
            >
              Submit Form
            </button>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
  
};

export default Contact;
