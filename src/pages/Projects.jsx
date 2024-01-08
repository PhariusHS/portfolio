import React from "react";
import ProjectContainer from "../components/ProjectContainer";
import JuegoDelGato from "../assets/pictures/JuegoDelGato.png";
import TRESOL from "../assets/pictures/TRESOL.PNG";
import { useLanguage } from "../contexts/LanguageContext";

function Projects() {
  const { language } = useLanguage(); //getting language from context

  return (
    <section
      id="projects"
      className="h-screen mb-96 mx-auto md:mb-24 w-[90%] justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center ">
        <h1
          className="flex flex-col items-center justify-center font-extrabold bg-clip-text
        md:text-4xl text-2xl text-transparent text-center
        w-max bg-gradient-to-l from-hopbush-500 to bg-medium-purple-700 my-10 pb-5 "
        >
          {language === "english" ? "My projects" : "Mis proyectos"}
        </h1>

        <div className="flex md:flex-row flex-col ">
          <ProjectContainer
            title={ language === "english" ?"'El juego del gato'" :"El juego del gato"}
            image={JuegoDelGato}
            type={["HTML", "CSS", "JS", "UX", "UI"]}
            parrafo1={
              language === "english"
                ? "I performed a fundamental role as the lead developer in the project 'El Juego del Gato' for Cordoba's Education ministry, focusing on promoting mathematical skills in children through a playful approach."
                : 'Desempeñé un papel fundamental como desarrollador principal en el proyecto "El Juego del Gato" para el Ministerio de Educación de Córdoba, centrándome en la promoción de habilidades matemáticas en niños a través de un enfoque lúdico.'
            }
            parrafo2={
              language === "english"
                ? "I have led my team on the design and development of the game board, incorporating key features such as validation and coloring of squares, as well as implementing validation logic to determine the winner. These features have been crucial in ensuring an intuitive and satisfying user experience."
                : "He liderado a mi equipo de trabajo en el diseño y desarrollo del tablero del juego, incorporando funcionalidades clave como la validación y el coloreado de casillas, así como la implementación de la lógica de validación para determinar al ganador. Estas características han sido fundamentales para garantizar una experiencia de usuario intuitiva y satisfactoria."
            }
            fecha="05/2023 - 08/2023"
            link='https://phariushs.github.io/FullStack/Frontend/primerpag.html'
            link2='https://github.com/PhariusHS/FullStack'
          />

          <ProjectContainer
            title={ language === "english" ?"Managment system" :"Gestor de producción"}
            image={TRESOL}
            type={["REACT", "NODEJS", "JS", "MONGODB", "EXPRESS", "UI"]}
            parrafo1={
              language === "english"
                ? "I designed and developed a comprehensive order and production management system as part of a team of three independent professionals, providing freelance development services. Unfortunately, the project had to be canceled due to budget constraints and a lack of funds for its continuation."
                : "Junto a mi equipo diseñamos y desarrollamos un sistema completo de gestión de pedidos y producción, ofreciendo servicios de desarrollo freelance.  Lamentablemente, el proyecto tuvo que ser cancelado cuando llevabamos un 50% terminado debido a restricciones presupuestarias y la falta de fondos para su continuación."
            }
            parrafo2={
              language === "english"
                ? "Despite the project's cancellation, the experience was invaluable for my professional development. I learned and understood what the developer process is like, facing challenges and acquiring skills that have been fundamental to my growth as a developer."
                : "A pesar de la cancelación del proyecto, la experiencia fue invaluable para mi desarrollo profesional. Aprendí y entendi como es el proceso de un desarrollador, enfrentándome a desafíos y adquiriendo habilidades que han sido fundamentales para mi crecimiento como desarrollador."
            }
            fecha="08/2023 - 12/2023"
            link="https://github.com/PhariusHS/sistemaGestion"
            style="hidden"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
