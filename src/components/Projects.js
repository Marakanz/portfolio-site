import React from "react";
import { projects } from "./data";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="text-3xl md:text-5xl text-center font-bold my-5 text-teal-300 drop-shadow-lg">
        My Projects
      </h1>
      <div className="grid w-4/5 md:grid-cols-2 gap-5">
        {projects.map((item) => (
          <div className="project-item">
            <a href={item.url} className="text-3xl my-3 font-bold text-white hover:text-teal-300">
              {item.name}
            </a>
            <div className="text-gray-400">
              <p>{item.desc}</p>
              <div className="flex mt-3 flex-wrap">
                {item.tools.map((tool) => (
                  <span className="m-2"> {tool} </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
