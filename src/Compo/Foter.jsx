import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

const Foter = () => {
  return (
    <footer className="bg-[#fdf6e4] border-t border-gray-300 p-4" style={{ cursor: 'default' }}>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <p className="text-gray-700 text-center w-full sm:w-auto font-light">
          © 2024 <span className="font-medium text-blue-700">Devraj Singh</span>. All rights reserved.
        </p>

        <div className="text-gray-700 flex justify-around sm:w-[250px] w-full text-2xl">
          <a
            href="mailto:devrajsinghsisodiya72@gmail.com"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 hover:text-blue-600 cursor-pointer"
          >
            <IoIosMail />
          </a>
          <a
            href="https://linkedin.com/in/devraj-singh-b53b04284"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 hover:text-blue-600 cursor-pointer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Dev23504"
            target="_blank"
            rel="noopener noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 hover:text-blue-600 cursor-pointer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Foter;
