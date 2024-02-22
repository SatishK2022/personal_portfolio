import React from "react";
import Project from "./Project";
import portfolio from "../assets/portfolio.png";
import hotelGo from "../assets/hotelgo.png";
import pokedex from "../assets/pokedex.png";

function Projects() {
  const projects = [
    {
      name: "Personal Portfolio",
      description:
        "A Personal Portfolio Website is an online platform that showcases information about the developer. The website provides an interface that displays details about the Developer and the skills that the developer possesses.",
      tech: ["React", "Tailwind"],
      codeLink: "https://github.com/SatishK2022/personal_portfolio",
      liveLink: "http://satish-dev.vercel.app",
      image: portfolio,
      style: "flex-col md:flex-row",
    },
    {
      name: "Pokedex",
      description:
        "A Pokedex Website is an online platform that enables users to search for Pokémon. The website provides an interface for searching and accessing details about each Pokémon.",
      tech: ["React", "Tailwind"],
      codeLink: "https://github.com/SatishK2022/pokeDex",
      liveLink: "https://pokedex-satishk2022.vercel.app",
      image: pokedex,
      style: "flex-col md:flex-row-reverse ",
    },
    {
      name: "Hotel Go",
      description:
        "An online hotel booking website enables users to book hotels and resorts. Users can log in, sign up, and view available accommodations.",
      tech: ["React", "Tailwind", "Redux"],
      codeLink: "https://github.com/SatishK2022/hotel-booking-website",
      liveLink: "https://hotelgo1.vercel.app",
      image: hotelGo,
      style: "flex-col md:flex-row",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full flex flex-col items-center justify-center px-5 pt-20 md:py-20 sm:px-6 lg:px-10"
    >
      <p className="text-lg md:text-xl uppercase font-bold text-blue-500">
        Projects
      </p>
      <h2 className="text-base md:text-lg text-center font-semibold text-zinc-700">
        Each Project is a Unique piece of development... 🤠
      </h2>

      <div>
        {projects && projects.length ? (
          projects.map((project) => (
            <div key={project.name}>
              <Project
                name={project.name}
                description={project.description}
                image={project.image}
                codeLink={project.codeLink}
                liveLink={project.liveLink}
                tech={project.tech}
                className={project.style}
              />
            </div>
          ))
        ) : (
          <p className="text-2xl md:text-3xl text-center font-bold text-zinc-800">
            New Projects are Comming Soon...🤠
          </p>
        )}
      </div>
    </section>
  );
}

export default Projects;
