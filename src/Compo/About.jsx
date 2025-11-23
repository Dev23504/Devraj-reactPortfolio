import React from "react";
import devimage from "../image/Devrajs.jpeg";
import PDF from "../resume/Devraj Singh front-end.pdf";

const About = () => {
  return (
    <div
      id="about"
      name="about"
      className="bg-[#fdf6e3] w-full py-20 px-6 sm:px-10 text-gray-800"
    >
      {/* Main Container */}
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center gap-12">
        
        {/* Left: Image */}
        <div className="flex justify-center sm:justify-start w-full sm:w-1/3">
          <div className="relative group">
            <img
              src={devimage}
              alt="Devraj Singh"
              className="rounded-[20px] border-4 border-blue-600 shadow-lg 
                         w-64 h-80 sm:w-80 sm:h-[380px] object-cover object-center 
                         transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-[20px] bg-blue-400 opacity-0 
                            group-hover:opacity-20 blur-2xl transition-all duration-500"></div>
          </div>
        </div>

        {/* Right: About Content */}
        <div className="sm:w-2/3 text-center sm:text-left">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">
            About Me
          </h1>

          <h3 className="text-2xl font-semibold text-blue-600 mb-4">
            MERN Stack Developer
          </h3>

          <p className="text-lg text-gray-700 leading-relaxed">
            I am a passionate <span className="font-semibold">MERN Stack Developer</span> focused on 
            creating modern, user-friendly, and efficient web applications.  
            I have experience with <span className="font-semibold">MongoDB, Express.js, React.js, and Node.js</span> — 
            as well as strong frontend knowledge of <span className="font-semibold">HTML, CSS, JavaScript, TailwindCSS,</span> and 
            <span className="font-semibold"> Bootstrap.</span>
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mt-3">
            I’m constantly learning new technologies and love working on projects that
            challenge me to grow. My goal is to build creative, responsive, and scalable
            web experiences that make a real impact.
          </p>

          {/* Resume Button */}
          <div className="mt-8">
            <a href={PDF} target="_blank" rel="noopener noreferrer">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md 
                hover:bg-blue-700 hover:scale-105 transition duration-300"
              >
                View Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
