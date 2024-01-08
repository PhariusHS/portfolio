import React from "react";
import { Email, GitHub, LinkedIn } from "./SVG/SVGS";
import { useLanguage } from "../contexts/LanguageContext";

function Footer() {
  
  const { language } = useLanguage(); //getting language from context
  return (
    <footer id="contact" className=" bg-medium-purple-950  text-hopbush-300 border-t-2 border-hopbush-500 relative w-full flex flex-col bottom-0 z-10 items-center h-32">
        <article>
           {language==="english" ?" Contact me:" : "Contactame: "}
        </article>
      <article className=" w-full  flex flex-row mx-auto justify-center items-center">
        <a
          href="mailto:lucaponteprimo04@gmail.com"
          target="_blank"
          className="mx-3 hover:h-20 mb-4"
        >
     
          <Email width={50} height={50} />  
        </a>
        <a
          href="https://www.linkedin.com/in/luca-ponteprimo-013a9b274/ "
          target="_blank"
          className="mx-3 hover:h-20 mb-4"
        >
          <LinkedIn width={40} height={40} fill="#eeb3df" />
        </a>
        <a
          href="https://github.com/PhariusHS "
          target="_blank"
          className="mx-3 hover:h-20 mb-4"
        >
         
          <GitHub width={50} height={55} fill="#eeb3df" />
        </a>
      </article>
    </footer>
  );
}

export default Footer;
