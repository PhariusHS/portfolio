import {useContext, createContext, useState, useEffect} from 'react'


export const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("No se encontro el provider");
  }
  return context;
};



function LanguageProvider({children}) {
    
    const [language, setLanguage] = useState("english")

    const handleChangeLanguage = (e) => {
       
        e.preventDefault()
        setLanguage(language === "spanish" ? "english" : "spanish")
    }

 
    


  return (
    <LanguageContext.Provider
        value={{
            language,
            handleChangeLanguage,
        }}
    
    >
    {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider