import React, { useEffect } from 'react'
import './Projects.css'
import nyk1 from '../../assets/nykaa1.png'
import nyk2 from '../../assets/nykaa2.png'
import fab1 from '../../assets/faballey1.png'
import fab2 from '../../assets/faballey2.png'
import adv1 from '../../assets/adventour1.png'
import adv2 from '../../assets/adventour2.png'
import { AiFillHtml5 } from 'react-icons/ai';
import { SiJavascript } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { FaBootstrap } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';
import { BsLightningCharge } from 'react-icons/bs';
import AOS from 'aos'

const proData = [
  {
    id: 1,
    image1: nyk1,
    image2: nyk2,
    title: "Nykaa",
    discription: "Nykaa is India's leading online beauty and wellness destination, providing a wide range of cosmetic and skincare products.",
    tech_stack: ["JavaScript,", "HTML,", "CSS,", "Bootstrap"],
    github: "https://github.com/VivekGhalout/Construct-Week-Project-/tree/main/Nykaa",
    live: "https://nykaa-clone-x4n7-git-main-ghalout.vercel.app/"
  },
  {
    id: 2,
    image1: fab2,
    image2: fab1,
    title: "Faballey",
    discription: "Faballey is an e-commerce website that deals in women's clothing it is mainly famous for Western-style dresses.",
    tech_stack: ["JavaScript,", "HTML,", "CSS,", "Bootstrap"],
    github: "https://github.com/VivekGhalout/Unit-5-Construct-Week-Project",
    live: "https://faballey-clone-six.vercel.app/"
  },
  {
    id: 3,
    image1: adv2,
    image2: adv1,
    title: "Adventour",
    discription: "Adventour is a online platform that offering travel packages and seamless booking services for various destinations worldwide.",
    tech_stack: ["React,", " Redux,", " JavaScript,", " HTML,", " CSS"],
    github: "https://github.com/Bharat-Shaw/Adventour/tree/main/adventour-app",
    live: "https://adventour-app.vercel.app/"
  }

]



function Projects() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <section id='projects' data-aos="fade-up" data-aos-duration="1000">
      <h5 data-aos="fade-up" data-aos-duration="1000">My Recent Work</h5>
      <h2 data-aos="fade-up" data-aos-duration="1000">Projects</h2>

      <div className="container projects_container" data-aos="fade-up" data-aos-duration="1000">
        {
          proData.map((ele) => {
            return (
              <article className='projects_item project-card' data-aos="zoom-in" data-aos-duration="1000">
                <div className="projects_item-image">
                  <img src={ele.image1} alt="img1" className='top-img'/>
                  <img src={ele.image2} alt="img2" />
                </div>
                <h3 className='project-title'>{ele.title}</h3>
                <h5 className='project-description'>{ele.discription}</h5>
                <div className='project-tech-stack'>
                  {ele.tech_stack.map((tech) => {
                    return (<p>{tech}</p>)
                  })}
                </div>
                <div className="projects_item-btns">
                  <a href={ele.github} target='_blank' className='btn project-github-link'>Github</a>
                  <a href={ele.live} target='_blank' className='btn btn-primary project-deployed-link'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Projects