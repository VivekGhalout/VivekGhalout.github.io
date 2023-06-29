import './App.css';
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import { Github } from './components/Github/Github';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

function App() {

  const particlesInit = useCallback(main => {
    loadFull(main);
  }, [])

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <div className="App">
      <Home />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Github />
      <Contact />
      <Footer />
      <Particles options={particlesOptions} init={particlesInit}/>
    </div>
  );
}

export default App;
