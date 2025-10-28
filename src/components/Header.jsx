import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between h-16 bg-black/50 px-5 items-center rounded-2xl z-50">
      <a href="/">
        <img
          src="https://res.cloudinary.com/dttah6xlw/image/upload/v1761536264/CT_logo_oioga6.svg"
          alt="CT Training Centre"
        />
      </a>
      <div className="text-white flex gap-6 font-medium">
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Blog</a>
        <a href="#">News</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>
    </header>
  );
};

export default Header;
