import { useRef, useEffect } from "react";
import gsap from "gsap"; // <-- import GSAP
import { useGSAP } from "@gsap/react";
import picture from "../assets/pictures/Picture.jfif";
import vector1 from "../assets/pictures/Vector1.png";
import Resume_Ponteprimo_Luca from "../assets/pictures/Resume_Ponteprimo_Luca.pdf"
import CV_Ponteprimo_Luca from "../assets/pictures/CV_Ponteprimo_Luca.pdf"
import { LinkedIn, CV } from "../components/SVG/SVGS";
import { useLanguage } from "../contexts/LanguageContext";

function About() {
  const { language } = useLanguage(); //getting language from context

  const aboutAnimation = useRef();
  useGSAP(
    () => {
      gsap.fromTo(".about", { y: 100 }, { y: 0, duration: 1.5 }); //Animación de ascendiente textos about
      gsap.fromTo(".aboutLate", { y: 100 }, { y: 0, duration: 1.7 }); //Animación de ascendiente mas lenta de textos about
    },
    { scope: aboutAnimation }
  );

  useEffect(() => {
    const glowAndScale = gsap.timeline({ repeat: -1, yoyo: true });

    glowAndScale.to(".glow-text", {
      scale: 1.1,
      duration: 1,
      ease: "power2.inOut",
    });

    return () => {
      glowAndScale.kill();
    };
  }, []);

  return (
    <section
      id="about"
      className="  h-screen pt-12 pb-20 relative md:pt-10 md:pb-28  flex flex-col col-auto"
    >
      <article className=" md:mx-auto max-w-3xl px-5 relative  z-[1] flex flex-col ">
        <h1
          className="font-extrabold max-w-3xl bg-clip-text
      md:text-7xl text-4xl text-transparent font-heading  text-center
      w-fit bg-gradient-to-r from-seagull-600 to bg-pizazz-700 glow-text"
        >
          {language === "english"
            ? "Turning difficult ideas into simple realities."
            : " Convirtiendo ideas dificiles en realidades sencillas."}{" "}
          {/* Tittle */}
        </h1>

        <div className="relative flex py-10 items-center">
          <div className="flex-grow border-t-2 border-gray-400 drop-shadow-glow dark:text-white"></div>
        </div>
      </article>

      <section
        ref={aboutAnimation}
        className="px-3  h-screen  pb-20 relative md:pb-28  flex flex-col columns-1  md:flex-row items-center justify-center  "
      >
        <article className="flex flex-col mx-auto md:items-left items-center md:flex-col md:mx-10 order-2 md:order-1 mt-8 md:pr-16 ">
          <div className="flex flex-col md:pr-32 ">
            <h2
              className={
                language === "english"
                  ? " font-extrabold  max-w-full bg-clip-text sm:text-4xl text-2xl text-transparent  my-1  w-max bg-gradient-to-l from-seagull-600 to bg-pizazz-700 about"
                  : "font-extrabold  max-w-full bg-clip-text sm:text-4xl text-2xl text-transparent  mt-8  w-max bg-gradient-to-l from-seagull-600 to bg-pizazz-700 about"
              }
            >
              {" "}
              {/*About me title*/}
              {language === "english" ? "About me" : " Sobre mi"}
            </h2>
          </div>

          <div className="flex flex-col mx-auto md:items-left items-right aboutLate mt-6">
            <p className="md:text-left text-center font-bold text-sm md:max-w-lg max-w-xl md:pr-16 dark:text-seagull-50">
              {" "}
              {/* About me 1 */}
              {language === "english"
                ? "Hello! I am Luca Ponteprimo, a junior full-stack web developer and programming technician. I am a young enthusiast for challenges, teamwork, and the exciting process of project development."
                : " ¡Hola! Soy Luca Ponteprimo, un desarrollador web full-stack junior, técnico en programación y un joven entusiasta de los desafíos, el trabajo en equipo y el emocionante proceso de desarrollo de proyectos."}
            </p>

            <p className="md:text-left text-center font-bold text-sm md:max-w-lg max-w-xl md:pr-12 pt-5 dark:text-seagull-50">
              {" "}
              {/*About me 2 */}
              {language === "english"
                ? " My proactive approach and solution-oriented mindset have allowed me to acquire and refine key skills in the web development world."
                : " Mi enfoque proactivo y mi mentalidad orientada a soluciones me han permitido adquirir y perfeccionar habilidades clave en el mundo    del desarrollo web."}
            </p>
          </div>

          <div className="flex flex-row md:pr-72 py-5 about dark:text-seagull-50 z-10">
            {/* Resume and LinkedIn buttons */}

            <a
              href={language === "english" ? Resume_Ponteprimo_Luca : CV_Ponteprimo_Luca}
              target="_blank"
              download={language === "english" ? "Resume_Ponteprimo_Luca.pdf" : "CV_Ponteprimo_Luca.pdf"}
              className={
                language === "english"
                  ? "border-seagull-900 hover:bg-seagull-800 border-2 py-1 px-3 rounded-xl mr-1 ml-5 flex items-center hover:cursor-pointer"
                  : "border-seagull-900 hover:bg-seagull-800 border-2 py-1 px-3 rounded-xl mr-2 flex items-center hover:cursor-pointer"
              }
            >
              <CV width={25} height={25} className="mr-1 " fill="#fff" />
              <CV width={25} height={25} className="mr-1 dark:hidden absolute" fill="#000" />
              {language === "english" ? "Resume" : "CV"}
            </a>

            <a
              href="https://www.linkedin.com/in/luca-ponteprimo-013a9b274/"
              target="_blank"
              className="border-seagull-900 hover:bg-seagull-800 border-2 py-1 px-3 rounded-xl mx-2 flex items-center hover:cursor-pointer"
            >
              <LinkedIn width={25} height={25} className="mr-1 " fill="#fff" />
              <LinkedIn width={25} height={25} className="mr-1 dark:hidden absolute" fill="#000" /> LinkedIn
            </a>
          </div>
        </article>

        <div className="absolute hidden md:flex flex-row justify-center items-center -z-0 ">
          <img src={vector1} className="" alt="" />
        </div>

        <article className="flex justify-start items-start order-1 md:order-2 md:mt-6">
          {" "}
          {/* Picture of me */}
          <img
            className="  rounded-full  max-w-xs max-h-60 align-middle border-none  about"
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
