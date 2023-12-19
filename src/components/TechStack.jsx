import React from "react";
import TechContainer from "./TechContainer";

function TechStack() {
  return (
    <section className="flex flex-col mx-5 items-center justify-center mb-96 mt-20">
      <div className="flex items-center justify-center">
        <h1>Mis tecnologias actuales</h1>
      </div>
      <TechContainer />
    </section>
  );
}

export default TechStack;
