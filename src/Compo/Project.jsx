import React from "react";
import { data } from "../Compo/constact";

const Project = () => {
  
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div id="project"
      name="work"
      className=" md:h-[] text-gray-300  pt-96 sm:pt-0 size-3 bg-[#1a1a1a] w-full h-full "
    >   
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center ">
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-4 text-lg">
            Unveil the magic behind captivating user experiences – each project
            is a testament to my dedication to transforming ideas into
            interactive realities that resonate.
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})`,backgroundSize:'cover' }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 duration-300">
                <span className="text-2xl font bold text-black">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                          bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
