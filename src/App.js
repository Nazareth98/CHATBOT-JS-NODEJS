import "./Styles/main.scss";
import Header from "./Components/Header/index";
import Home from "./Components/Home";
import FloatIcons from "./Components/FloatIcons";
import About from "./Components/About";
import Projects from "./Components/Projects";
import OtherProjects from "./Components/OthesProjects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import mobile from "./Hooks/useMedia";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    mobile &&
      AOS.init({
        mirror: true,
        once: true,
        easing: "ease",
        placement: "top-center",
        offset: 150,
        disable: "phone",
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <FloatIcons />
      <Home />
      <About />
      <Projects />
      <OtherProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
