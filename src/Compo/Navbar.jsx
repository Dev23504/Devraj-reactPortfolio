import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen)
  const closeMobileMenu = () => setMobileMenuOpen(false)

  const { pathname } = useLocation()
  useState(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <nav
      className='bg-[#fdf6e4] border-b border-gray-300 p-4 text-gray-800 fixed w-full z-20 top-0 shadow-sm backdrop-blur-md'
      style={{ cursor: 'default' }}
    >
      <div className='mx-auto flex w-5/6 items-center justify-between'>
        {/* Left Menu */}
        <div className='hidden sm:flex space-x-6 text-sm font-medium'>
          <AnchorLink href='#home' className='hover:text-blue-600 transition'>
            Home
          </AnchorLink>
          <AnchorLink href='#about' className='hover:text-blue-600 transition'>
            About
          </AnchorLink>
        </div>

        {/* Center Logo */}
        <div className='text-2xl sm:text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent'>
          <AnchorLink href='#home'>Devraj Singh</AnchorLink>
        </div>

        {/* Right Menu */}
        <div className='hidden sm:flex space-x-6 text-sm font-medium'>
          <AnchorLink href='#skill' className='hover:text-blue-600 transition'>
            Skill
          </AnchorLink>
          <AnchorLink href='#project' className='hover:text-blue-600 transition'>
            Project
          </AnchorLink>
          <AnchorLink href='#contact' className='hover:text-blue-600 transition'>
            Contact
          </AnchorLink>
        </div>

        {/* Mobile Menu Button */}
        <div className='sm:hidden'>
          <button
            onClick={toggleMobileMenu}
            className='text-2xl focus:outline-none'
          >
            {isMobileMenuOpen ? '✖︎' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden fixed top-0 left-0 w-full h-full bg-white text-gray-800 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'flex flex-col items-center justify-center'
              : 'hidden'
          }`}
        >
          <button
            onClick={closeMobileMenu}
            className='text-2xl absolute top-5 right-5 focus:outline-none'
          >
            ✖︎
          </button>

          <ul className='font-semibold text-2xl space-y-6'>
            <li>
              <AnchorLink href='#home' onClick={closeMobileMenu} className='hover:text-blue-600'>
                Home
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href='#about' onClick={closeMobileMenu} className='hover:text-blue-600'>
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href='#skill' onClick={closeMobileMenu} className='hover:text-blue-600'>
                Skill
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href='#project' onClick={closeMobileMenu} className='hover:text-blue-600'>
                Project
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href='#contact' onClick={closeMobileMenu} className='hover:text-blue-600'>
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
