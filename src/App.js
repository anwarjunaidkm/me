import { About } from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";

function App() {
  const [loadig, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loadig === false ? (
        <div>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
        </div>
      ) : (
        <div className="flex  items-center justify-center bg-[#0a192f] h-screen w-full">
          {" "}
          <ReactLoading className="" type="bubbles" color="#ffff" />
        </div>
      )}
    </>
  );
}

export default App;
