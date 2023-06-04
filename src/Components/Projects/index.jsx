import "../../Styles/Components/projects.scss";
import SectionHeader from "../Components/SectionHeader/index";
import React from "react";
import ProjectsItems from "./projectsItems";

const Projects = () => {
  return (
    <article id="projects" className="container projects-container">
      <SectionHeader id="02." title="Principais Projetos" />
      <ProjectsItems />
    </article>
  );
};

export default Projects;
