import React from "react";
import { GitHub, Link } from "./SVG/SVGS";

function ProjectContainer(props) {
  return (
    <article className="md:mx-10 mb-8 w-auto h-auto bg-opacity-70 border-2 border-hopbush-300 rounded-3xl shadow-2xl flex flex-col items-center overflow-hidden">
      <div className="bg-medium-purple-700 dark:bg-medium-purple-900 w-full h-96 flex flex-col items-center pb-8 ">
        <header className="py-5">
          <h1 className="text-center font-bold uppercase text-3xl text-hopbush-200 ">
            {props.title}
          </h1>
        </header>

        <div className="mx-auto px-2  py-2 bg-hopbush-600 object-cover rounded-sm">
          <img
            src={props.image}
            className="w-full max-w-sm h-60 md:h-56"
            alt="Imagen ilustrativa"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center mt-3">
        {props.type.map((tipo, index) => (
          <h2
            key={index}
            className="mt-3 mx-2 md:mx-1 px-3 rounded-xl border-hopbush-400 border-solid border-2 p-1 text-xs md:text-sm dark:text-white"
          >
            {tipo}
          </h2>
        ))}
      </div>

      <div className="w-full py-3">
        <div className="flex-grow border-b-2 border-hopbush-300 drop-shadow-glow"></div>
      </div>

      <div className="mx-5 mt-3 pb-10  dark:text-white">
        <p className="text-sm md:text-base max-w-md my-2">{props.parrafo1}</p>
        <p className="text-sm md:text-base max-w-md my-2">{props.parrafo2}</p>
      </div>

      <time className="mb-3 dark:text-white">{props.fecha}</time>

      <div className="w-full justify-center items-center overflow-hidden flex flex-row">
        <a href={props.link} target="_blank" className={props.style}>
          <Link
            width={50}
            height={50}
            className="mx-3 mb-2 dark:hidden hover:bg-gray rounded-3xl hover:h-10"
          />
          <Link
            width={50}
            height={50}
            fill="#121212"
            stroke="#fff"
            className="mx-3 mb-2 hover:bg-gray rounded-3xl hover:h-10 hidden dark:inline"
          />
        </a>

        <a href={props.link2} target="_blank">
          <GitHub
            width={50}
            height={50}
            className="mx-3 mb-2 dark:hidden hover:bg-gray rounded-3xl hover:h-10"
          />
          <GitHub
            width={50}
            height={50}
            fill="#fff"
            stroke="#121212"
            className="mx-3 mb-2 hover:bg-gray rounded-3xl hover:h-10 hidden dark:inline"
          />
        </a>
      </div>
    </article>
  );
}

export default ProjectContainer;
