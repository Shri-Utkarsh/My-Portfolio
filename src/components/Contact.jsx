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
    <div className="relative overflow-hidden py-24" id="contact">
      <div className="absolute inset-0 -z-10">
        <img
          src="/hacker png.png"
          alt=""
          className="w-full h-full object-cover scale-110 blur-sm"
        />
       
      </div>

      <div className="relative max-w-[800px] border border-white/10 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#19BBC9] mb-4 tracking-tight">Let's Connect</h1>
        <p className="text-white/60 text-center mb-10 max-w-md mx-auto">
          Currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi!
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-8 text-3xl mb-12">
          {[
            { icon: <FaInstagram />, href: "https://www.instagram.com/utkarshsrivastava1422/profilecard/?igsh=MTFvMWpyamp2cnkyaA%3D%3D" },
            { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/utkarsh-srivastava-1749b828b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
            { icon: <FaGithub />, href: "https://github.com/Shri-Utkarsh" },
            { icon: <BiLogoGmail />, href: "mailto:utkarshsrivastava1422@gmail.com" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-[#19BBC9] transition-all duration-300 hover:scale-125"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-white/5 border border-white/10 w-full p-4 rounded-xl focus:outline-none focus:border-[#19BBC9] transition-colors"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="bg-white/5 border border-white/10 w-full p-4 rounded-xl focus:outline-none focus:border-[#19BBC9] transition-colors"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            required
            className="bg-white/5 border border-white/10 w-full p-4 rounded-xl focus:outline-none focus:border-[#19BBC9] transition-colors resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-[#19BBC9] hover:bg-[#15aab9] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg shadow-[#19BBC9]/20 flex items-center justify-center gap-2 group"
          >
            Send Message
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
          </button>
          <span className="text-center mt-4 text-[#19BBC9] font-medium">{result}</span>
        </form>
      </div>
    </div>
  );

};

export default Contact;
