import React from "react";

function Skills() {
  const skills = [
    {
      name: "Html",
      src: "https://skillicons.dev/icons?i=html",
    },
    {
      name: "Css",
      src: "https://skillicons.dev/icons?i=css",
    },
    {
      name: "JavaScript",
      src: "https://skillicons.dev/icons?i=javascript",
    },
    {
      name: "React",
      src: "https://skillicons.dev/icons?i=react",
    },
    {
      name: "Tailwind Css",
      src: "https://skillicons.dev/icons?i=tailwind",
    },
    {
      name: "Github",
      src: "https://skillicons.dev/icons?i=github",
    },
  ];

  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center justify-center bg-gray-50 px-5 py-20 md:py-20 sm:px-6 lg:px-20"
    >
      <p className="text-lg md:text-xl uppercase font-bold text-blue-500">skills</p>
      <h2 className="text-2xl md:text-3xl text-center mb-5 md:mb-10 md:text-left font-bold text-zinc-800">
        Skills that make me shine! ✨
      </h2>
      <div className="w-full flex flex-wrap flex-col md:flex-row justify-evenly gap-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="md:w-[15%] flex flex-row md:flex-col  items-center p-5 border-2 transition-all duration-200 ease-in border-white hover:border-blue-500 rounded-lg gap-5 bg-white shadow hover:shadow-xl"
          >
            <img className="w-10 md:w-1/3" src={skill.src} alt={skill.name} />
            <p className="uppercase font-bold text-zinc-800">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
