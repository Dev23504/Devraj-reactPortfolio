import React, { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Close menu on scroll / route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav className="bg-[#fdf6e3] border-b border-gray-300 p-4 text-gray-800 fixed w-full z-50 top-0 shadow-md backdrop-blur-md">
      <div className="mx-auto flex w-5/6 items-center justify-between">
        {/* Left Menu (Desktop) */}
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

        {/* Right Menu (Desktop) */}
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

        {/* Mobile Toggle Button */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-3xl focus:outline-none text-blue-700"
          >
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#fdf6e3] flex flex-col items-center justify-center space-y-8 text-2xl font-semibold text-gray-800 z-40 transition-all duration-300">
          <AnchorLink href="#home" onClick={closeMobileMenu} className="hover:text-blue-600">
            Home
          </AnchorLink>
          <AnchorLink href="#about" onClick={closeMobileMenu} className="hover:text-blue-600">
            About
          </AnchorLink>
          <AnchorLink href="#skill" onClick={closeMobileMenu} className="hover:text-blue-600">
            Skill
          </AnchorLink>
          <AnchorLink href="#project" onClick={closeMobileMenu} className="hover:text-blue-600">
            Project
          </AnchorLink>
          <AnchorLink href="#contact" onClick={closeMobileMenu} className="hover:text-blue-600">
            Contact
          </AnchorLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
