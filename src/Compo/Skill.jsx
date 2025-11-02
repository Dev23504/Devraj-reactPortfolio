import React from "react";
import HTML from '../image/html.png';
import CSS from "../image/css.png";
import JavaScript from "../image/javascript.png";
import JSX from "../image/JSX.png";
import Tailwind from "../image/tailwind.png";
import Bootstrap from "../image/bootstrap-logo.png";
import MongoDB from '../image/mongo.jpg'
import Express from '../image/expressJs.jpg'
import ReactImg from "../image/react.png";
import NodeJS from "../image/nodeJS.jpg";
import GitHub from "../image/github.png";
import PostMan from "../image/postman.jpg";

const Skills = () => {
  return (
    <div
      name="skills" id="skill"
      className="bg-[#1a1a1a]  w-full  max-h-full text-gray-200  pt-14  "
    >
        
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
         <br></br><br></br>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-center py-8">
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 h-auto pt-4">
            <img
              className="mx-auto w-20 contrast-125"
              src={HTML}
              alt="Html Icon"
            />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-125"
              src={CSS}
              alt="CSS Icon"
            />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-150"
              src={JavaScript}
              alt="JavaScript Icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
         
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-200"
              src={Tailwind}
              alt="Tailwind Icon"
            />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-200"
              src={Bootstrap}
              alt="Bootstrap Icon"
            />
            <p className="my-4">Bootstrap</p>
          </div>
         
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-200"
              src={ReactImg}
              alt="ReactImg Icon"
            />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-200"
              src={JSX}
              alt="ReactImg Icon"
            />
            <p className="my-4">JSX</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-200"
              src={NodeJS}
              alt="Nextjs Icon"
            />
            <p className="my-4">Node JS</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-200"
              src={Express}
              alt="Nextjs Icon"
            />
            <p className="my-4">Express JS</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-200"
              src={MongoDB}
              alt="Nextjs Icon"
            />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-200"
              src={GitHub}
              alt="GitHub Icon"
            />
            <p className="my-4">GitHub</p>
          </div>
          
          <div className="shadow-md shadow-[#040c14] hover:scale-110 duration-300 pt-4">
            <img
              className="mx-auto w-20 contrast-200"
              src={PostMan}
              alt="ReactImg Icon"
            />
            <p className="my-4">PostMan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
