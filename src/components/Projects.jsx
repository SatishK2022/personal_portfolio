import React from "react";
import Project from "./Project";
import about from "../assets/about.jpg";

function Projects() {
  const projects = [
    {
      name: "Car Rental 🚗",
      description:
        "A Car Rental Website is an online platform that allows users to rent cars for personal or business use. The Website provides an interface for searching, comparing, and reserving cars.",
      tech: ["React", "Tailwind"],
      codeLink: "#",
      liveLink: "http://satish-dev.vercel.app/",
      image: about,
      style: "flex-col md:flex-row"
    },
    {
      name: "Pokedex",
      description:
        "A Pokedex Website is an online platform that allows users to search for the pokemon. The Website provides an interface for searching and details of the pokemon.",
      tech: ["React", "Tailwind"],
      codeLink: "#",
      liveLink: "http://satish-dev.vercel.app/",
      image: about,
      style: "flex-col md:flex-row-reverse "
    },
    {
      name: "E-Learning Platform 📟",
      description:
        "A E-learning Website is an online platform that allows students to use it for Studying. The Website provides an interface for course search, login , and enroll",
      tech: ["React", "Tailwind", "Redux"],
      codeLink: "#",
      liveLink: "http://satish-dev.vercel.app/",
      image: about,
      style: "flex-col md:flex-row"
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
