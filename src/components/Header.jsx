import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HamMenu from "./Menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "relative pb-1 text-blue-400 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300"
      : "relative pb-1 text-white/80 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full";

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
        <div onClick={toggleMenu} className="z-50 rounded-lg">
          <HamMenu isOpen={isOpen} />
        </div>
      </div>

      {/* Overlay + Animated Menu */}
      <div
        className={`absolute top-16 left-0 w-full h-screen bg-black/70 backdrop-blur-sm flex flex-col items-end z-40 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Click outside to close */}
        <div
          className="absolute inset-0"
          onClick={closeMenu}
          onTouchStart={closeMenu}
          onTouchEnd={closeMenu}
        ></div>

        {/* Sliding Menu */}
        <div
          className={`relative z-50 w-3/4 h-full px-10 py-4 bg-black flex flex-col gap-5 text-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <NavLink to="/" className={linkClasses} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/courses" className={linkClasses} onClick={closeMenu}>
            Courses
          </NavLink>
          <NavLink to="/blog" className={linkClasses} onClick={closeMenu}>
            Blog
          </NavLink>
          <NavLink to="/news" className={linkClasses} onClick={closeMenu}>
            News
          </NavLink>
          <NavLink to="/about-us" className={linkClasses} onClick={closeMenu}>
            About Us
          </NavLink>
          <NavLink to="/contact" className={linkClasses} onClick={closeMenu}>
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
