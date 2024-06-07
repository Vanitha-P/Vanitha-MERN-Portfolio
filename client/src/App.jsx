import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contacts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";
/* Animation on Scroll Package */
import Aos from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    Aos.init({
      duration:1800,
      offset: 100,
      disable: "mobile"
    }, [])
  })
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Skills/>
      <About/>
      <Work/>
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;