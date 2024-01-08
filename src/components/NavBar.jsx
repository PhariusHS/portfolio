import React from "react";
import { useState, useRef, useEffect  } from "react";
import gsap from "gsap"; // <-- import GSAP
import Logo from "../assets/pictures/Logo.png"
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa"; import { MdMenu } from "react-icons/md"; import { FiArrowUpRight } from "react-icons/fi";
import { useLanguage } from "../contexts/LanguageContext";

//Guardar LI->
//<li className=" flex justify-center items-center px-1 mx-4 hover:bg-seagull-700 hover:cursor-pointer transition border-b-2 border-slate-800 hover:rounded-lg  hover:border-seagull-400 hover:text-seagull-400">
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const { language } = useLanguage(); //getting language from context

  const handleClick = () =>{
    setIsOpen(!isOpen); //Manejo del estado de el menu de la navbar
  }

  useEffect(() => {
    const contentElement = contentRef.current;

    if (contentElement) {
      if (isOpen) {
        gsap.to(contentElement, { autoAlpha: 1, duration: 0.13, ease: "power2.inOut" });
      } else {
        gsap.to(contentElement, { autoAlpha: 0, duration: 0.13, ease: "power2.inOut" });
      }
    }
  }, [isOpen]);


  const content = <> {/*Menu  */}
       <div ref={contentRef} className="md:hidden block absolute top-14 w-full left-0 right-0 bg-seagull-400 transition rounded-b-3xl" style={{ opacity: 0, pointerEvents: isOpen ? "auto" : "none" }}>
        <ul   className="text-center px-20 pt-4 pb-32 ">
          <Link spy={true} smooth={true} onClick={handleClick} to="about">
            <li className="my-4 py-4 border-b border-pizazz-800 hover:bg-seagull-900 hover:rounded-lg ">
            {language === "english" ? "About me" : "Sobre mi"}
            </li>
          </Link>
          <Link spy={true} smooth={true} onClick={handleClick} to="projects">
            <li className="my-4 py-4 border-b border-pizazz-800 hover:bg-seagull-900 hover:rounded-lg">
            {language === "english" ? "Projects" : "Proyectos"}
            </li>
          </Link>
          <Link spy={true} smooth={true} onClick={handleClick} to="contact">
            <li className="my-4 py-4 border-b border-pizazz-800 hover:bg-seagull-900 hover:rounded-lg">
            {language === "english" ? "Contacts" : "Contactos"}
            </li>
          </Link>
          <li className="flex flex-row items-center justify-between">
           <a  href="https://www.linkedin.com/in/luca-ponteprimo-013a9b274/" target="_blank" className="pl-6">LinkedIn</a> <FiArrowUpRight className="text-pizazz-700"/>    
          </li>
          <li className="flex flex-row items-center justify-between">
           <a  href="https://github.com/PhariusHS" target="_blank" className="pl-6">GitHub</a> <FiArrowUpRight className="text-pizazz-700"/>    
          </li>
          <li className="flex flex-row items-center justify-between">
           <a  href="mailto:lucaponteprimo04@gmail.com" target="_blank" className="pl-6">Email</a> <FiArrowUpRight className="text-pizazz-700"/>    
          </li>

          

        </ul>
      </div>
    </>;


  return (
    <nav className="w-full"> {/* navBar*/}
      <div className="h-10vh w-full flex justify-between z-50 text lg:py-2 pl-5">
        <div className="flex items-center flex-1 ">
          <span className=""><img src={Logo} width={100} height={100} alt="" /></span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mx-5 text-[14px]">
              <Link spy={true} smooth={true} to="about">
                <li className=" flex justify-center items-center px-1 mx-4   hover:cursor-pointer hover:border-b-pizazz-900 border-transparent border-b-2   transition duration-300  hover:border-pizazz-600 hover:text-pizazz-600">
                    {language === "english" ? "About me" : "Sobre mi"}
                </li>
              </Link>
              <Link spy={true} smooth={true} to="projects">
                <li className=" flex justify-center items-center px-1 mx-4  hover:cursor-pointer hover:border-b-pizazz-900 border-transparent border-b-2  transition duration-300   hover:border-pizazz-600 hover:text-pizazz-600">
                {language === "english" ? "Projects" : "Proyectos"}
                </li>
              </Link>
              <Link spy={true} smooth={true} to="contact">
                <li className=" flex justify-center items-center px-1 mx-4  hover:cursor-pointer hover:border-b-pizazz-900 border-transparent border-b-2 transition duration-300    hover:border-pizazz-600 hover:text-pizazz-600">
                {language === "english" ? "Contacts" : "Contactos"}
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{isOpen && content}</div>

        <button className="block md:hidden transition px-2 " onClick={handleClick}>
          {isOpen ? <FaTimes /> : <MdMenu/>}
          </button>
      </div>
    </nav>
  );
}

export default NavBar;
