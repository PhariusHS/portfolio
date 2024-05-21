import { useState, useEffect } from "react";
import { DarkMode, LightMode } from "./SVG/SVGS";

function ThemeButton({}) {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
   
    } else {
      setTheme("light");
 
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = (e) => {
    e.preventDefault();
    setTheme(theme === "dark" ? "light" : "dark");
    
  };

  return (
    <>
      <div className="flex flex-row items-center mx-5">
        <button  className="mr-10 flex border-2 rounded-xl  overflow-hidden dark:border-medium-purple-500">
          {theme === "dark" && (
            <>
              
              <DarkMode
                onClick={e => {e.preventDefault()}}
                width={25}
                height={25}
                fill="#fff"
                className="border-r-2 border-medium-purple-500  hover:cursor-auto"
              />

           

              <LightMode
                onClick={handleChangeTheme}
                width={25}
                height={25}
                fill="#a9a9a9"
                stroke="#a9a9a9"
                className="hover:bg-[#d3d3d3]"
              />
            </>
          )}
          {theme === "light" && (
            <>
              
              
              <DarkMode
              onClick={handleChangeTheme}
               
                width={25}
                height={25}
                fill="#a9a9a9"
                className="hover:bg-[#d3d3d3]  border-r-2 "
              />

              <LightMode
                 onClick={e => {e.preventDefault()}}
                width={25}
                height={25}
                fill="#000"
                stroke="#000"
                className="hover:cursor-auto dark:hover:bg-white"
              />
            </>
          )}
        </button>
      </div>
    </>
  );
}

export default ThemeButton;
