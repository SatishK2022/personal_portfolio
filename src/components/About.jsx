import React from "react";
import about from "../assets/about.jpg";

function About() {
  return (
    <section
      id="about"
      className="w-full h-screen flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0 px-5 py-5 sm:px-6 lg:px-16"
    >
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img className="w-4/5 object-contain rounded-md" src={about} alt="profile image" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-3">
        <p className="text-lg md:text-xl uppercase font-bold text-blue-500">About Me</p>
        <h3 className="md:w-[80%] text-2xl md:text-3xl text-center md:text-left font-bold text-zinc-800">Front-end Developer based in Delhi, India 📍</h3>
        <p className="text-base md:text-lg text-zinc-600 text-center md:text-left">
          Hey, my name is Satish, and I'm a Frontend Developer. My passion is to
          create and develop a clean and user friendly website for my users.
        </p>
        <p className="text-base md:text-lg text-center md:text-left text-zinc-600">
          Currently, My main stack is React Js in combination with Tailwind
          CSS and Redux.
        </p>
      </div>
    </section>
  );
}

export default About;
