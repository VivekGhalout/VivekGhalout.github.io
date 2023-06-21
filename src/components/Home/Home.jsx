import './Home.css';
import Typewriter from "typewriter-effect";
import CTA from './CTA';
import ME from "../../assets/me2.png"
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import React, { useEffect } from 'react'
import AOS from 'aos'

function Home() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

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
          <CTA />
          <div className='header_socials'>
            <a href="https://www.linkedin.com/in/vivek-kumar-ghalout-a655551a1/" target='_blank'><BsLinkedin /></a>
            <a href="https://github.com/VivekGhalout" target='_blank'><FaGithub /></a>
          </div>
        </div>
        <div className="me " data-aos="fade-left" data-aos-duration="2000">
          <img src={ME} alt="my-img" />
        </div>
      </div>
    </header>
  )
}

export default Home