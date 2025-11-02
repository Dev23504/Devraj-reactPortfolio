import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav
      className="bg-[#fdf6e3] border-b border-gray-300 p-4 text-gray-800 fixed w-full z-20 top-0 shadow-md backdrop-blur-sm"
      style={{ cursor: "default" }}
    >
      <div className="mx-auto flex w-5/6 items-center justify-between">
        {/* Left Menu */}
        <div className="hidden sm:flex space-x-6 text-sm font-medium">
          <AnchorLink href="#home" className="hover:text-blue-600 transition">
            Home
          </AnchorLink>
          <AnchorLink href="#about" className="hover:text-blue-600 transition">
            About
          </AnchorLink>
        </div>

        {/* Center Logo */}
        <div className="text-2xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
          <AnchorLink href="#home">Devraj Singh</AnchorLink>
        </div>

        {/* Right Menu */}
        <div className="hidden sm:flex space-x-6 text-sm font-medium">
          <AnchorLink href="#skill" className="hover:text-blue-600 transition">
            Skill
          </AnchorLink>
          <AnchorLink href="#project" className="hover:text-blue-600 transition">
            Project
          </AnchorLink>
          <AnchorLink href="#contact" className="hover:text-blue-600 transition">
            Contact
          </AnchorLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? "✖︎" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Full Screen) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#fdf6e3] text-gray-800 transition-all duration-300 ease-in-out transform ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100 flex flex-col items-center justify-center"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={closeMobileMenu}
          className="text-3xl absolute top-6 right-6 focus:outline-none"
        >
          ✖︎
        </button>

        <ul className="font-semibold text-2xl space-y-8 text-center">
          <li>
            <AnchorLink
              href="#home"
              onClick={closeMobileMenu}
              className="hover:text-blue-600 transition"
            >
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#about"
              onClick={closeMobileMenu}
              className="hover:text-blue-600 transition"
            >
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#skill"
              onClick={closeMobileMenu}
              className="hover:text-blue-600 transition"
            >
              Skill
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#project"
              onClick={closeMobileMenu}
              className="hover:text-blue-600 transition"
            >
              Project
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              href="#contact"
              onClick={closeMobileMenu}
              className="hover:text-blue-600 transition"
            >
              Contact
            </AnchorLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
