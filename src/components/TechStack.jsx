import React from "react";
import TechContainer from "./TechContainer";
import { useLanguage } from "../contexts/LanguageContext";


function TechStack() {
  const { language } = useLanguage(); //getting language from context 
  
  return (
    <section className="flex flex-col mx-10 md:mx-32 items-center justify-center mt-52 dark:bg-medium-purple-800 rounded-md ">
      <div className="flex items-center justify-center py-5 ">
        <h1 className="font-extrabold md:text-4xl text-2xl text-center dark:text-white">{language === "english" ? "Technology stack" : "Conjunto de tecnologias"}</h1>
      </div>
      <TechContainer />
    </section>
  );
}

export default TechStack;
