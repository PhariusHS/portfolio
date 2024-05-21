import NavBar from "./components/NavBar";
import About from "./pages/About";
import TechStack from "./components/TechStack";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
import LanguageButton from "./components/LanguageButton";
import LanguageProvider from "./contexts/LanguageContext";
import ThemeButton from "./components/ThemeButton";


function App() {
 

  return (
    <LanguageProvider>
    
      <>
        <header className=" dark:bg-smoothDark dark:text-white w-full sticky top-0 z-[20] mx-auto flex border-b items-center lg:py-4 font-Montserrat">
          <NavBar />
        </header>

        <main className="w-full pb-[10rem]  dark:bg-smoothDark">
          <About />

          <Projects />

          <TechStack />

        </main>

        <Footer />
      </>

    </LanguageProvider>
  );
}

export default App;
