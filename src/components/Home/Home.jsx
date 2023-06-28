import './Home.css';
import Typewriter from "typewriter-effect";
import ME from "../../assets/me2.png"
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import React, { useEffect } from 'react'
import AOS from 'aos'
import Vivek_Ghalout_Resume from "../../assets/Vivek_Ghalout_Resume.pdf"

function Home() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  const handleDownload = () => {
    window.open(Vivek_Ghalout_Resume, '_blank');
  };

  return (
    <header id='home' className='container'>
      <div className='home-main-div'>
        <div className='container header_conrainer' data-aos="fade-right" data-aos-duration="2000">
          <h5>Hello 👋, I'm</h5>
          <h1 id="user-detail-name">Vivek Kumar Ghalout</h1>
          <h5 className='text-light'>
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("I Do Frontend.")
                  .pause(2000)
                  .deleteAll()
                  .typeString("I Do Backend.")
                  .pause(2000)
                  .deleteAll()
                  .start();
              }}
            />
          </h5>
          {/* <CTA /> */}
          <div className='cta'>
            <a href={Vivek_Ghalout_Resume} download className='btn' id="resume-link-2 resume-button-2" onClick={handleDownload}>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
          <div className='header_socials'>
            <a href="https://www.linkedin.com/in/vivek-kumar-ghalout-a655551a1/" target='_blank' id="contact-linkedin"><BsLinkedin /></a>
            <a href="https://github.com/VivekGhalout" target='_blank' id="contact-github"><FaGithub /></a>
          </div>
        </div>
        <div className="me" data-aos="fade-left" data-aos-duration="2000">
          <img src={ME} alt="my-img" className='home-img'/>
        </div>
      </div>
    </header>
  )
}

export default Home