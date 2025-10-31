import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import React from "react";

const navigationLinks = [
  {
    title: "Courses",
    items: [
      { name: "Web Development", link: "" },
      { name: "Data Science", link: "" },
      { name: "Mobile Development", link: "" },
      { name: "Cloud Computing", link: "" },
      { name: "Cybersecurity", link: "" },
      { name: "AI & Machine Learning", link: "" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About Us", link: "" },
      { name: "Careers", link: "" },
      { name: "Press Kit", link: "" },
      { name: "Blog", link: "" },
      { name: "Partners", link: "" },
      { name: "Affiliates", link: "" },
    ],
  },
  {
    title: "Resources",
    items: [
      { name: "Documentation", link: "" },
      { name: "Help Center", link: "" },
      { name: "Community", link: "" },
      { name: "Student Stories", link: "" },
      { name: "Webinars", link: "" },
      { name: "Downloads", link: "" },
    ],
  },
  {
    title: "Legal",
    items: [
      { name: "Terms of Service", link: "" },
      { name: "Privacy Policy", link: "" },
      { name: "Cookie Policy", link: "" },
      { name: "Accessibility", link: "" },
      { name: "Licenses", link: "" },
      { name: "Sitemap", link: "" },
    ],
  },
];

const footerLinks = [
  { icon: <FaFacebookF size={24} />, color: "hover:text-blue-400", link: "#" },
  { icon: <FaInstagram size={24} />, color: "hover:text-pink-500", link: "#" },
  { icon: <FaTwitter size={24} />, color: "hover:text-blue-400", link: "#" },
  { icon: <FaYoutube size={24} />, color: "hover:text-red-500", link: "#" },
  { icon: <ImWhatsapp size={24} />, color: "hover:text-green-400", link: "#" },
];

const Footer = () => {
  return (
    <footer className="text-gray-400 md:py-10 md:px-20 bg-black/70">
      <main className="flex flex-col gap-5 pb-10 mx-8 border-b-2 md:mx-0 md:flex-row">
        <div className="flex-1 p-4 md:pb-0">
          <a href="/">
            <img
              src="https://res.cloudinary.com/dttah6xlw/image/upload/v1761536264/CT_logo_oioga6.svg"
              alt="CT Training Centre"
            />
          </a>
          <p className="my-4 max-[350px]:text-xs md:w-5/6">
            Empowering the next generation of tech professionals through
            world-class education and mentorship.
          </p>
          <ul className="space-y-5 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={20} />
              contact.cttcpkr@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={20} />
              +91 987 876 7665
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={20} />
              Bank Colony, Pakur (816107)
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-4 md:justify-evenly flex-2">
          {navigationLinks.map((menu, index) => (
            <div key={index} className="flex flex-col">
              <span className="mb-2.5 text-lg text-white">{menu.title}</span>
              <ul>
                {menu.items.map((point, i) => (
                  <li key={i} className="mb-3.5 text-sm">
                    <Link to={point.link} className="hover:text-white">
                      {point.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <div className="flex flex-col items-center gap-6 pt-10 text-center md:justify-between md:gap-0 md:flex-row">
        <p>© 2025 CT Training Centre. All rights reserved.</p>
        <span>
          Developed by
          <Link
            to="https://www.imabubakar.xyz"
            className="mx-3 font-medium duration-300 ease-in-out text-amber-400 hover:tracking-widest"
          >
            Abu Bakar
          </Link>
          with ❤️
        </span>
        <nav className="flex flex-wrap gap-5 pb-10 md:flex-nowrap md:pb-0">
          {footerLinks.map((items, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-8 h-8 p-5 rounded-full bg-white/10 hover:bg-white/10"
            >
              <Link className={items.color} to={items.link}>
                {items.icon}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
