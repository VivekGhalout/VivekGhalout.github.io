import React, { useState } from 'react'
import './Navbar.css'
import Vivek_Ghalout_Resume from "../../assets/Vivek_Ghalout_Resume.pdf"
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { MdWorkOutline } from 'react-icons/md';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { AiOutlineDownload } from 'react-icons/ai';

function Navbar() {

  const handleDownload = () => {
    window.open(Vivek_Ghalout_Resume, '_blank');
  };

  const[activeNav, setActiveNav] = useState('#')

  return (
    <nav id="nav-menu">
      <a href="#home" className='nav-link home'  onClick={() => setActiveNav('#')} id={activeNav === "#" ? 'active' : ""}><AiOutlineHome/></a>
      <a href="#about" className='nav-link about' onClick={() => setActiveNav('#about')} id={activeNav === "#about" ? 'active' : ""}><AiOutlineUser/></a>
      <a href="#skills" className='nav-link skills' onClick={() => setActiveNav('#skills')} id={activeNav === "#skills" ? 'active' : ""}><HiOutlineLightBulb/></a>
      <a href="#projects" className='nav-link projects' onClick={() => setActiveNav('#projects')} id={activeNav === "#projects" ? 'active' : ""}><MdWorkOutline/></a>
      <a href="#contact" className='nav-link contact' onClick={() => setActiveNav('#contact')} id={activeNav === "#contact" ? 'active' : ""}><BiMessageSquareAdd/></a>
      <a href={Vivek_Ghalout_Resume} onClick={handleDownload} download className='nav-link resume' id="resume-link-2"><AiOutlineDownload/></a>
    </nav>
  )
}

export default Navbar