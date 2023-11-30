import React, { useEffect, useState } from "react";

function About() {

  return (
    <section id="about" className="pt-12 pb-20 md:pt-24 md:pb-28 relative ">
      <div className=" w- mx-auto max-w-screen-sm px-5 relative z-[1] flex flex-col items-center gap-5">
      <h1
        className="font-extrabold  max-w-full bg-clip-text
        sm:text-6xl text-4xl text-transparent font-heading leading-tight text-center
         w-max bg-gradient-to-r from-seagull-600 to bg-pizazz-700
        "
      >
        Convirtiendo ideas, en realidades
      </h1>
      <h2
        className="font-extrabold  max-w-full bg-clip-text
        sm:text-8xl text-7xl text-transparent
         w-max bg-gradient-to-l from-seagull-600 to bg-pizazz-700"
      >

         DEV

      </h2>
      </div>
    </section>
  );
}

export default About;
