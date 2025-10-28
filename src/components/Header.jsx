import React from "react";
import { NavLink } from "react-router-dom";

const linkClasses = ({ isActive }) =>
  isActive
    ? "relative pb-1 text-blue-400 font-semibold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300"
    : "relative pb-1 text-white/80 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full";

const Header = () => {
  return (
    <header className="z-50 flex items-center justify-between h-16 px-5 bg-black/50 rounded-2xl">
      <NavLink to="/">
        <img
          src="https://res.cloudinary.com/dttah6xlw/image/upload/v1761536264/CT_logo_oioga6.svg"
          alt="CT Training Centre"
        />
      </NavLink>

      <nav className="flex gap-6 font-medium">
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
    </header>
  );
};

export default Header;
