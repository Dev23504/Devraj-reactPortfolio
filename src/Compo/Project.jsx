import React from "react";
import { data } from "../Compo/constact";

const Project = () => {
  const project = data;

  return (
    <div
      id="project"
      name="work"
      className="bg-[#fdf6e3] w-full text-gray-900 py-20"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center px-4">
        {/* Heading */}
        <div className="pb-8 text-center">
          <p className="text-4xl font-extrabold inline border-b-4 border-pink-500">
            Projects
          </p>
          <p className="pt-4 text-lg text-gray-700 max-w-[700px] mx-auto">
            Here are some of my MERN stack and frontend projects that showcase
            my skills in building modern, responsive, and user-friendly web
            applications.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {project.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              {/* Project Image */}
              <div
                className="h-52 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 text-center text-white transition duration-300">
                  <h3 className="text-2xl font-bold mb-3 drop-shadow-md">
                    {item.name}
                  </h3>
                  <a href={item.live} target="_blank" rel="noreferrer">
                    <button className="px-5 py-2 bg-white text-gray-800 font-semibold rounded-lg shadow hover:bg-pink-500 hover:text-white transition duration-300">
                      Live Demo
                    </button>
                  </a>
                </div>
              </div>

              {/* Bottom Card Text */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">
                  {item.desc || "A creative web project built using modern web technologies."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
