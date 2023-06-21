import React from 'react'
import './Footer.css'
// import { FaTwitter } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="footer">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <ul className="social-icon">
        {/* <li className="social-icon__item"><a className="social-icon__link" href="#">
          <FaTwitter/>
        </a></li> */}
        <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/in/vivek-kumar-ghalout-a655551a1/" target='_blank'>
          <BsLinkedin/>
        </a></li>
        <li className="social-icon__item"><a className="social-icon__link" href="https://github.com/VivekGhalout" target='_blank'>
          <FaGithub/>
        </a></li>
      </ul>
      {/* <ul className="menu">
        <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
        <li className="menu__item"><a className="menu__link" href="#">About</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Skills</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Projects</a></li>
        <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>

      </ul> */}
      <p>&copy;2023 Vivek Kumar Ghalout | All Rights Reserved</p>
    </footer>
  )
}

export default Footer