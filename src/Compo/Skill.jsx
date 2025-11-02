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
      name="skills"
      id="skill"
      className="bg-[#fdf6e3] w-full max-h-full text-gray-900 pt-14"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <br />
          <br />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-center py-8">
          {[
            { img: HTML, name: "HTML" },
            { img: CSS, name: "CSS" },
            { img: JavaScript, name: "JavaScript" },
            { img: Tailwind, name: "Tailwind" },
            { img: Bootstrap, name: "Bootstrap" },
            { img: ReactImg, name: "React" },
            { img: JSX, name: "JSX" },
            { img: NodeJS, name: "Node JS" },
            { img: Express, name: "Express JS" },
            { img: MongoDB, name: "MongoDB" },
            { img: GitHub, name: "GitHub" },
            { img: PostMan, name: "PostMan" },
          ].map((skill, i) => (
            <div
              key={i}
              className="shadow-md shadow-gray-400 hover:scale-110 duration-300 bg-white rounded-xl pt-4"
            >
              <img className="mx-auto w-20" src={skill.img} alt={skill.name} />
              <p className="my-4 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
