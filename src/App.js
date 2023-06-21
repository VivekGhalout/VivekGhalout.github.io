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

function App() {

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
      <Github/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
