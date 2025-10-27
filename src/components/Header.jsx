import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between h-16 w-10/12 mx-auto bg-[rgba(0,0,0,0.2)] px-5 items-center rounded-2xl">
      <a href="/">
        <img
          src="https://res.cloudinary.com/dttah6xlw/image/upload/v1761536264/CT_logo_oioga6.svg"
          alt="CT Training Centre"
        />
      </a>
      <div className="text-white flex gap-2.5">
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
