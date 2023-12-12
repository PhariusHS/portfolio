import { useState } from "react";
import NavBar from "./components/NavBar";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="bg-seagull-300  w-full sticky top-0 z-[20] mx-auto flex border-b items-center lg:py-5 ">
        <NavBar />
      </header>

      <main className="w-full">
        <About />
      </main>
    </>
  );
}

export default App;
