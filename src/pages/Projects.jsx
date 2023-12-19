import React from "react";
import ProjectContainer from "../components/ProjectContainer";
import JuegoDelGato from "../assets/pictures/JuegoDelGato.png";

function Projects() {
  return (
    <section id="projects" className="h-screen ">
      <ProjectContainer
        image={JuegoDelGato}
        type={["Claro", "si", "todos los dias"]}
      />
    </section>
  );
}

export default Projects;
