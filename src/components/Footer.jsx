import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="/">
          <img
            src="https://res.cloudinary.com/dttah6xlw/image/upload/v1761536264/CT_logo_oioga6.svg"
            alt="CT Training Centre"
          />
        </a>
        <p>
          Empowering the next generation of tech professionals through world-class education and mentorship.
        </p>
        <ul>
          <li>
            <Mail/>contact.cttcpkr@gmail.com
          </li>
          <li>
            <Phone/>+91 987 876 7665
          </li>
          <li>
            <MapPin/>Bank Colony, Pakur, Jharkhand, 816107
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
