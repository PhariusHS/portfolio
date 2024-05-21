import React from "react";
import ProjectContainer from "../components/ProjectContainer";
import JuegoDelGatoIMG from "../assets/pictures/JuegoDelGato.png";
import CoinTrackerIMG from "../assets/pictures/CoinTrackerIMG.jpeg";
import { useLanguage } from "../contexts/LanguageContext";

function Projects() {
  const { language } = useLanguage(); //getting language from context

  return (
    <section id="projects">
      <div className="flex flex-col justify-center items-center mt-[20rem] md:mt-[10rem] ">
        <h1
          className="flex flex-col items-center justify-center font-extrabold bg-clip-text
        md:text-4xl text-2xl text-transparent text-center
        w-max bg-gradient-to-l from-hopbush-500 to bg-medium-purple-700 my-10 pb-5 "
        >
          {language === "english" ? "My projects" : "Mis proyectos"}
        </h1>

        <ProjectContainer
          title={
            language === "english" ? "'El juego del gato'" : "El juego del gato"
          }
          image={JuegoDelGatoIMG}
          type={["HTML", "CSS", "JS", "UX", "UI"]}
          parrafo1={
            language === "english"
              ? "I performed a fundamental role as the lead developer in the project 'El Juego del Gato' for Cordoba's Education ministry, focusing on promoting mathematical skills in children through a playful approach."
              : 'Este fue mi primer proyecto basado en las solicitudes de un tercero, se nos pidió realizar una representación virtual de un juego ya inventado, "El juego del gato".'
          }
          parrafo2={
            language === "english"
              ? "I have led my team on the design and development of the game board, incorporating key features such as validation and coloring of squares, as well as implementing validation logic to determine the winner. These features have been crucial in ensuring an intuitive and satisfying user experience."
              : "Desempeñé principalmente la tarea de implementar el funcionamiento lógico del juego, incluyendo la detección de los números seleccionados, el coloreado de cada casilla segun la multiplicación de los numeros seleccionados, el sistema de turnos y la detección del fin del juego."
            }
          fecha="05/2023 - 08/2023"
          link="https://phariushs.github.io/FullStack/Frontend/primerpag.html"
          link2="https://github.com/PhariusHS/FullStack"
        />

        <ProjectContainer
          title={language === "english" ? "CoinTracker" : "CoinTracker"}
          image={CoinTrackerIMG}
          type={["REACT", "NODEJS", "JS", "MONGODB", "EXPRESS", "UI"]}
          parrafo1={
            language === "english"
              ? "A little native expense management app, primarily aimed at practicing my backend skills. "
              : "Una pequeña app native de gestión de gastos, orientada principalmente a practicar mis habilidades de backend."
          }
          parrafo2={
            language === "english"
              ? "Development of a basic REST API, as well as an authentication system with JWT and expense filtering by date."
              : "Desarrollo de una API REST básica, además de un sistema de autenticación con JWT, un sistema de rutas protegidas y filtrado de gastos por mes."
          }
          fecha="08/2023 - 12/2023"
          link="https://github.com/PhariusHS/sistemaGestion"
          style="hidden"
        />
      </div>
    </section>
  );
}

export default Projects;
