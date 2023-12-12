import React, { useEffect, useState } from "react";
import picture from "../assets/Picture.jfif";

function About() {
  return (
    <section
      id="about"
      className="  h-screen pt-12 pb-20 relative md:pt-24 md:pb-28  flex flex-col col-auto"
    >
      <article className=" md:mx-auto max-w-screen-sm px-5 relative  z-[1] flex flex-col my-4 ">
        <h1
          className="font-extrabold  max-w-full bg-clip-text
        sm:text-6xl text-4xl text-transparent font-heading leading-tight text-center
         w-max bg-gradient-to-r from-seagull-600 to bg-pizazz-700
        "
        >
          Convirtiendo ideas dificiles, en realidades sencillas.
        </h1>
        
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t-2 border-gray-400"></div>
        </div>
      </article>




        
      <section className="px-5  h-screen pt-4 pb-20 relative md:pt-16 md:pb-28  flex flex-col  md:flex-row items-center justify-center ">
      
        <article className="flex flex-row mx-auto items-center md:flex-col md:mx-10 order-2 md:order-1">
          <h2
            className="font-extrabold  max-w-full bg-clip-text
        sm:text-4xl text-2xl text-transparent text-center my-4
         w-max bg-gradient-to-l from-seagull-600 to bg-pizazz-700"
          >
            Luca Ponteprimo
          </h2>

          <p className="text-right font-bold text-sm">
            Hola, soy Luca Ponteprimo, un desarrollador web fullstack
          </p>
        </article>

        <article className="flex justify-start items-start order-1 md:order-2">
          <img
            className="  rounded-2xl max-w-xs max-h-60 align-middle border-none  "
            src={picture}
            alt="My Picture"
            width={400}
            height={400}
          />
        </article>
      </section>



    </section>
  );
}

export default About;
