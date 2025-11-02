import React from "react";
import devimage from "../image/devraj.jpg";
import PDF from "../resume/Devraj Singh front-end.pdf";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="bg-[#fdf6e3] w-full h-full text-gray-800 overflow-hidden py-16"
    >
      <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="max-w-[1000px] w-full px-6 sm:px-20">
          <div className="text-left mb-8">
            <h1 className="text-4xl font-bold text-blue-700">Introduction</h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={devimage}
                className="rounded-3xl shadow-lg w-60 h-60 object-cover"
                alt="Devraj Singh"
              />
            </div>

            {/* About Text */}
            <div className="sm:flex-1">
              <h3 className="text-2xl font-semibold text-blue-600 mb-3">
                MERN Stack Developer
              </h3>
              <p className="leading-relaxed text-gray-700">
                I am a beginner MERN stack developer looking for opportunities to
                grow my skills. I have knowledge of MongoDB, Express.js, React.js,
                and Node.js, along with HTML, CSS, JavaScript, and TailwindCSS /
                Bootstrap. I am continuously learning and improving my development
                skills to build efficient and user-friendly web applications.
              </p>
              <p className="leading-relaxed text-gray-700 mt-3">
                If you are looking for a motivated and dedicated MERN stack developer,
                I am available for opportunities and excited to contribute to
                real-world projects that help me expand my experience and knowledge.
              </p>

              {/* Resume Button */}
              <div className="mt-6">
                <a href={PDF} target="_blank" rel="noopener noreferrer">
                  <button
                    className="text-white bg-blue-600 px-5 py-2 rounded-lg shadow hover:bg-blue-700 
                    transition duration-300"
                  >
                    View Resume
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
