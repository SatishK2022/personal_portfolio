import React from "react";
import profile from "../../public/satish1.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Body() {
  return (
    <section id="#" className="pt-2 sm:pt-4 md:pt-0 flex items-center justify-center flex-col-reverse gap-5 md:gap-0 md:flex-row h-screen md:h-[90vh] w-full bg-gray-50 px-5 py-5 sm:px-6 lg:px-28">
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-5 md:gap-8">
        <h2 className="text-3xl sm:text-4xl text-center md:text-left md:text-6xl font-bold text-zinc-800">
          Front-End React Developer 👋
        </h2>
        <p className="text-base md:text-lg text-center md:text-left text-zinc-800 md:w-[90%]">
          Hi, I'm Satish Kumar. A passionate Front-end React Developer based in
          Delhi, India. 📍
        </p>
        <div className="flex items-center gap-3">
          <a
            className="text-zinc-700 hover:text-blue-600 transition-all duration-200 ease-in"
            href="https://www.linkedin.com/in/satish-kumar-6585b0257"
            target="_blank"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            className="text-zinc-700 hover:text-black transition-all duration-200 ease-in"
            href="http://www.github.com/satishk2022"
            target="_blank"
          >
            <FaGithub size={30} />
          </a>
          <a
            className="text-zinc-700 hover:text-pink-600 transition-all duration-200 ease-in"
            href="http://www.instagram.com/its_satishkumar"
            target="_blank"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img className="w-52 sm:w-80 md:w-2/3 rounded-full" src={profile} alt="profile image" />
      </div>
    </section>
  );
}

export default Body;
