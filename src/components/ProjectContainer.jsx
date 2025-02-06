import React from "react";
import { GitHub, Link } from "./SVG/SVGS";
import LinkButton from "./LinkButton";

function ProjectContainer({
  image,
  title,
  parrafo1,
  parrafo2,
  type,
  link,
  link2,
}) {
  return (
    <div className="flex flex-col gap-y-16">
      <article className="flex flex-col space-x-0 space-y-8 group md:flex-row md:space-x-8 md:space-y-0 mb-20">
        <div className="w-full md:w-1/2">
          <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-xl md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-gray-800 lg:hover:border-gray-700 lg:hover:bg-gray-800/50">
            <img
              alt="Casillero juego del gato"
              className="object-cover object-top w-[34rem] h-[24rem] max-w-[100%] max-h-[33%]  transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105 rounded-2xl"
              loading="lazy"
              src={image}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 md:max-w-lg">
          <h3 className="text-4xl pb-5 mb-3 ml-3 font-bold text-gray dark:text-gray-100">
            {title}
          </h3>

          <div className="flex flex-wrap mt-2">
            <ul className="flex flex-row mb-2 gap-x-2">
              {type.map((tipo, index) => (
                <li key={index} className="ml-2">
                  <span
                    className={`flex gap-x-2 rounded-full text-xs py-1  px-2 border-2 dark:text-gray-400`}
                  >
                    {tipo}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-2 text-gray-700 dark:text-gray-200 px-3">
              {parrafo1}
            </div>
            <div className="mt-2 text-gray-700 dark:text-gray-200 px-3">
              {parrafo2}
            </div>
            <footer className="ml-3 flex  w-full items-center justify-center md:items-end md:justify-start mt-4 gap-x-4">
              {link && (
                <LinkButton href={link} children={"code"}>
                  <GitHub className="h-10 w-20" fill="#fff" />
                  
                </LinkButton>
              )}
              {link2 && (
                <LinkButton href={link2}>
                  <Link className="h-10 w-20" stroke="#fff"/>
                </LinkButton>
              )}
            </footer>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProjectContainer;
