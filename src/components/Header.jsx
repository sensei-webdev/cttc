import { Menu } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";

const Header = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? "relative pb-1 text-blue-400 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300"
      : "relative pb-1 text-white/80 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full";

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative z-50 flex items-center justify-between h-16 px-5 bg-black/50">
      {/* Logo */}
      <NavLink to="/">
        <img
          src="https://res.cloudinary.com/dttah6xlw/image/upload/v1761536264/CT_logo_oioga6.svg"
          alt="CT Training Centre"
        />
      </NavLink>

      {/* Desktop Nav */}
      <nav className="hidden gap-6 font-medium md:flex">
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>
        <NavLink to="/courses" className={linkClasses}>
          Courses
        </NavLink>
        <NavLink to="/blog" className={linkClasses}>
          Blog
        </NavLink>
        <NavLink to="/news" className={linkClasses}>
          News
        </NavLink>
        <NavLink to="/about-us" className={linkClasses}>
          About Us
        </NavLink>
        <NavLink to="/contact" className={linkClasses}>
          Contact
        </NavLink>
      </nav>

      {/* Mobile Menu Button */}
      <div className="inline-flex md:hidden">
        <span
          className="p-2 rounded-lg cursor-pointer bg-white/20"
          onClick={toggleMenu}
        >
          <Menu size={28} />
        </span>
      </div>

      {/* Overlay + Animated Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-sm flex flex-col items-end z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay (click outside to close) */}
        <div
          className="absolute inset-0"
          onClick={toggleMenu}
          onTouchStart={toggleMenu}
          onTouchEnd={toggleMenu}
        ></div>

        {/* Sliding Menu */}
        <div
          className={`relative z-50 w-3/4 h-full px-10 py-4 bg-black flex flex-col gap-5 text-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex pb-6 border-b border-gray-600">
            <span
              className="p-2 ml-auto bg-white/20 rounded-2xl"
              onClick={toggleMenu}
            >
              <RiMenu3Fill size={28} className="inline-flex" />
            </span>
          </div>
          <NavLink to="/" className={linkClasses} onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/courses" className={linkClasses} onClick={toggleMenu}>
            Courses
          </NavLink>
          <NavLink to="/blog" className={linkClasses} onClick={toggleMenu}>
            Blog
          </NavLink>
          <NavLink to="/news" className={linkClasses} onClick={toggleMenu}>
            News
          </NavLink>
          <NavLink to="/about-us" className={linkClasses} onClick={toggleMenu}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={linkClasses} onClick={toggleMenu}>
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
