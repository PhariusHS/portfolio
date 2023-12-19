
import NavBar from "./components/NavBar";
import About from "./pages/About";
import TechStack from "./components/TechStack";
import Projects from "./pages/Projects";

function App() {


  return (
    <>
      <header className="bg-seagull-300  w-full sticky top-0 z-[20] mx-auto flex border-b items-center lg:py-4 ">
        <NavBar />
      </header>

      <main className="w-full">
        <About />

        <TechStack/>

        <Projects/>

      </main>
    </>
  );
}

export default App;
