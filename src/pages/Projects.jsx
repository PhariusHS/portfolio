import React from "react";
import ProjectContainer from "../components/ProjectContainer";
import JuegoDelGatoIMG from "../assets/pictures/JuegoDelGato.png";
import RestockApp from "../assets/pictures/RestockApp.png"
import { useLanguage } from "../contexts/LanguageContext";

function Projects() {
  const { language } = useLanguage(); //getting language from context

  return (
    <section id="projects">
      <div className="flex flex-col justify-center items-center  ">

        {/* Titulo */}
        <h1
          className="flex flex-col items-center justify-center font-extrabold bg-clip-text
        md:text-6xl text-4xl text-transparent text-center
        w-max bg-gradient-to-l from-hopbush-500 to bg-medium-purple-700 my-20 pb-5 "
        >
          {language === "english" ? "My projects" : "Mis proyectos"}
        </h1>

        {/* Container  1*/}
        <ProjectContainer
          title={
            language === "english" ? "Cat's game" : "El juego del gato"
          }
          image={JuegoDelGatoIMG}
          type={["HTML", "CSS", "JS", "UX", "UI"]}
          parrafo1={
            language === "english"
              ? 'This was my first project based on third-party requests. We were asked to create a virtual representation of an already invented game, "El juego del gato" (Cat´s Game)".'
              : 'Este fue mi primer proyecto basado en las solicitudes de un tercero, se nos pidió realizar una representación virtual de un juego ya inventado, "El juego del gato".'
          }
          parrafo2={
            language === "english"
              ? "I primarily took on the task of implementing the game's logical functionality, including detecting the selected numbers, coloring each cell according to the multiplication of the selected numbers, the turn system, and detecting the end of the game."
              : "Desempeñé principalmente la tarea de implementar el funcionamiento lógico del juego, incluyendo la detección de los números seleccionados, el coloreado de cada casilla segun la multiplicación de los numeros seleccionados, el sistema de turnos y la detección del fin del juego."
          }
          fecha="05/2023 - 08/2023"
          link="https://github.com/PhariusHS/FullStack"
          link2="https://phariushs.github.io/FullStack/Frontend/primerpag.html"
        />

        {/* Container  2*/}
        <ProjectContainer
          title={language === "english" ? "RestockApp" : "RestockApp"}
          image={RestockApp}
          type={["JAVA", "SPRING", "POSTGRESQL", "API", "JWT"]}
          parrafo1={
            language === "english"
              ? "Backend API for a business to seamlessly connect their centers with the warehouse, optimizing restock efficiency and inventory management."
              : "API backend para que una empresa conecte sus centros con el almacén, optimizando la gestión de inventario y la eficiencia del restock."
          }
          parrafo2={
            language === "english"
              ? "The app ensures efficient restocking by linking establishments to their inventories. Restock requests are validated against available stock, preventing over-ordering. Once processed, the inventory updates automatically, maintaining accurate stock levels."
              : "La aplicación garantiza un restock eficiente al vincular los establecimientos con sus inventarios. Las solicitudes se validan según el stock disponible, evitando sobrepedidos. Una vez procesadas, el inventario se actualiza automáticamente, manteniendo niveles precisos."
          }
          fecha="08/2023 - 12/2023"
          link="https://github.com/PhariusHS/InventoryAppJava"
          style="hidden"
        />
      </div>
    </section>
  );
}

export default Projects;
