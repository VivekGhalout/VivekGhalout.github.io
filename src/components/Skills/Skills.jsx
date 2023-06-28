import React, { useEffect } from 'react'
import './Skills.css'
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { FaBootstrap } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import AOS from 'aos'

function Skills() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])


  return (
    <section id='skills'>
      <h5 data-aos="fade-up" data-aos-duration="2000">What Skills I Have</h5>
      <h2 data-aos="fade-up" data-aos-duration="2000">My Skills</h2>

      <div className="container skills_container">
        <div className="skills_frontend" data-aos="zoom-in-right" data-aos-duration="2000">
          <h2>Frontend Development</h2>
          <div className="skills_content">
            <article className='skills_details skills-card'>
              <SiJavascript className='skills-card-img' />
              <div>
                <h4 className='skills-card-name'>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills_details skills-card'>
              <FaReact className='skills-card-img' />
              <div>
                <h4 className='skills-card-name'>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills_details skills-card'>
              <SiRedux className='skills-card-img' />
              <div>
                <h4 className='skills-card-name'>Redux</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills_details skills-card'>
              <AiFillHtml5 className='skills-card-img' />
              <div>
                <h4 className='skills-card-name'>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills_details skills-card'>
              <DiCss3 className='skills-card-img' />
              <div>
                <h4 className='skills-card-name'>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills_details skills-card'>
              <FaBootstrap className='skills-card-img' />
              <div>
                <h4 className='skills-card-name'>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skills_backend" data-aos="zoom-in-left" data-aos-duration="2000">
          <h2>Backend Development</h2>
          <div className="skills_content">
            <article className='skills_details skills-card'>
              <FaNodeJs className='skills-card-img' />
              <div>
                <h4 className='skills-card-name'>Node.js</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills_details skills-card'>
              <SiMongodb className='skills-card-img' />
              <div>
                <h4 className='skills-card-name'>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills_details skills-card'>
              <SiExpress className='skills-card-img' />
              <div>
                <h4 className='skills-card-name'>Express</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='skills_details skills-card'>
              <FaJava className='skills-card-img' />
              <div>
                <h4 className='skills-card-name'>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* <article className='skills_details skills-card'>
              <SiJavascript className='skills-card-img' />
              <div>
                <h4 className='skills-card-name'>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> */}
          </div>
        </div>
      </div>

    </section>
  )
}

export default Skills