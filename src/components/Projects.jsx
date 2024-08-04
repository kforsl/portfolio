import ProjectCard from "./ProjectCard";
import { project } from "../data/data";
import { useEffect, useState } from "react";
import Title from "./Title";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(project);
  }, []);

  return (
    <section id="projects" className="mx-auto mb-10 max-w-1000 py-10">
      <Title title={"Projekt"} />

      <section className="flex flex-col gap-8">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              project={project}
              index={index}
              key={project.projectName}
            />
          );
        })}
      </section>
    </section>
  );
}

export default Projects;
