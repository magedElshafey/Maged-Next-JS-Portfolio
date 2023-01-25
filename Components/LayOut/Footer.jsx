import React from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white p-4 text-center">
      <h4>All right reservied &#169;Maged Elshafey</h4>
      <div className="flex gap-6 my-4 justify-center items-center">
        <a
          href="https://www.facebook.com/maged.mahmoud.1829/"
          target="_blank"
          className=" duration-300 hover:scale-105"
        >
          <FaFacebook size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/maged-elshafey"
          target="_blank"
          className=" duration-300 hover:scale-105"
        >
          <FaLinkedinIn size={30} />
        </a>
        <a
          href="https://github.com/magedElshafey"
          target="_blank"
          className=" duration-300 hover:scale-105"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.instagram.com/maged_el_shaf3y/"
          target="_blank"
          className=" duration-300 hover:scale-105"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
