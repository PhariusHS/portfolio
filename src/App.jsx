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
        <header className="bg-seagull-500  w-full sticky top-0 z-[20] mx-auto flex border-b items-center lg:py-4 ">
          <NavBar />
        </header>

        <aside className="flex flex-row justify-between dark:bg-smoothDark">
        <LanguageButton />
        <ThemeButton />
        </aside>

        <main className="w-full pb-[60rem] md:pb-[30rem] dark:bg-smoothDark">
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
