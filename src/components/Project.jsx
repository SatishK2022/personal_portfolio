import React from "react";
import { FaShareSquare, FaGithub } from "react-icons/fa";

function Project({
  name,
  description,
  tech,
  codeLink,
  liveLink,
  image,
  className = "",
}) {

    console.log(className)
  return (
    <div className={`${className} w-full flex flex-col md:flex-row py-10 md:py-0 gap-4 md:gap-0`}>
      <div className="w-full md:w-3/5 flex items-center justify-center">
        <img className="md:h-2/3 object-contain rounded-xl" src={image} />
      </div>
      <div className="w-full md:w-2/5 flex flex-col items-center justify-center gap-5">
        <h3 className="text-xl md:text-2xl text-center font-bold text-zinc-800">
          {name}
        </h3>
        <p className="md:w-[80%] text-base md:text-lg text-zinc-600 text-center">
          {description}
        </p>
        <div className="w-full flex items-center justify-center gap-10 font-bold uppercase text-zinc-800">
          <p>{tech[0]}</p>
          <p>{tech[1]}</p>
          <p>{tech[2]}</p>
        </div>
        <div className="w-full flex items-center justify-center gap-10 font-bold">
          <a
            className="flex items-center gap-3 bg-zinc-600 hover:bg-zinc-950 shadow-md hover:shadow-xl text-white px-5 py-2 rounded-md transition-all duration-200 ease-in"
            href={codeLink}
            target="_blank"
          >
            Code <FaGithub size={20}/>
          </a>
          <a
            className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 shadow-md hover:shadow-xl text-white px-5 py-2 rounded-md transition-all duration-200 ease-in"
            href={liveLink}
            target="_blank"
          >
            Live Demo <FaShareSquare size={20}/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
