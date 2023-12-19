
import picture from "../assets/pictures/Picture.jfif"

function About() {
  return (
    <section
      id="about"
      className="  h-screen pt-12 pb-20 relative md:pt-10 md:pb-28  flex flex-col col-auto"
    >
      <article className=" md:mx-auto max-w-screen-sm px-5 relative  z-[1] flex flex-col ">
        <h1
          className="font-extrabold  max-w-full bg-clip-text
        sm:text-7xl text-4xl text-transparent font-heading leading-tight text-center
         w-max bg-gradient-to-r from-seagull-600 to bg-pizazz-700
        "
        >
          Convirtiendo ideas dificiles, en realidades sencillas.
        </h1>

        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t-2 border-gray-400"></div>
        </div>
      </article>

      <section className="px-3  h-screen  pb-20 relative md:pb-28  flex flex-col columns-1  md:flex-row items-center justify-center ">
        <article className="flex flex-col mx-auto md:items-left items-center md:flex-col md:mx-10 order-2 md:order-1 mt-5 ">
          <div className="flex flex-col ">
            <h2
              className="font-extrabold  max-w-full bg-clip-text
        sm:text-4xl text-2xl text-transparent text-center my-4
         w-max bg-gradient-to-l from-seagull-600 to bg-pizazz-700"
            >
              Sobre mi
            </h2>
      
          </div>

          <div className="flex flex-col mx-auto md:items-left items-right ">
            <p className="md:text-left text-center font-bold text-sm pt-6 ">
              Hola, soy Luca Ponteprimo, un desarrollador web fullstack.
            </p>

            <p className="md:text-left text-center font-bold text-sm md:max-w-lg max-w-xl">
              Soy un joven enamorado de los retos, el trabajo en equipo y el
              emocionante proceso de desarrollo de proyectos. Mi enfoque
              proactivo y mi mentalidad orientada a soluciones me han permitido
              adquirir y perfeccionar habilidades clave en el mundo del
              desarrollo web.
            </p>
          </div>
        </article>

        <article className="flex justify-start items-start order-1 md:order-2 md:mt-10">
          <img
            className="  rounded-full  max-w-xs max-h-60 align-middle border-none  "
            src={picture}
            alt="My Picture"
            width={250}
            height={250}
          />
        </article>
      </section>
    </section>
  );
}

export default About;
