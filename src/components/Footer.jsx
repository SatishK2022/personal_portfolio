import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full px-5 py-5 sm:px-6 lg:px-8 bg-slate-700 text-white gap-5 md:gap-0 flex flex-col md:flex-row items-center justify-between">
      <div>
        <p className="text-lg md:text-xl font-semibold">Copyright @ 2024 All rights reserved</p>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://www.linkedin.com/in/satish-kumar-6585b0257" target="_blank"><FaLinkedin size={30} /></a>
        <a href="http://www.github.com/satishk2022" target="_blank"><FaGithub size={30} /></a>
        <a href="http://www.instagram.com/its_satishkumar" target="_blank"><FaInstagram size={30} /></a>
      </div>
    </div>
  );
}

export default Footer;
