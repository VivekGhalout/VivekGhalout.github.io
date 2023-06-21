import React, { useEffect } from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import AOS from 'aos'

function About() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <section id='about' data-aos="fade-up" data-aos-duration="2000" className='about section'>
      <h5 data-aos="fade-up" data-aos-duration="2000">Get To Know</h5>
      <h2 data-aos="fade-up" data-aos-duration="2000">About Me</h2>

      <div className='container about_container' data-aos="fade-up" data-aos-duration="2000">
        <div className='about_me' data-aos="flip-left" data-aos-duration="2000">
          <div className='about_me-image'>
            <img src={ME} alt="About Img" />
          </div>
        </div>

        <div className="about_content" data-aos="fade-up" data-aos-duration="2000">
          {/* <div className="about_cards">
            <article>

            </article>
          </div> */}
          <p>Hello 👋, I'm Vivek Kumar Ghalout, a dedicated full stack web developer proficient in
            <span> React.js, JavaScript, HTML, CSS, Redux, Node.js, and Express</span> have a strong grasp of database technologies such as <span>MongoDB</span>.
            With a deep understanding of <span>front-end development</span> and <span>back-end systems</span>,
            I design and implement highly interactive and responsive web applications.
            My strong <span>problem-solving</span> abilities enable me to tackle challenges efficiently,
            while my passion for continuous learning ensures I stay up-to-date with the latest industry trends.
            I have experience leading teams, fostering a collaborative environment to achieve exceptional results.
            Let's build something extraordinary together!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About