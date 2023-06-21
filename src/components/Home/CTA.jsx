import React from 'react'
import Vivek_Ghalout_Resume from "../../assets/Vivek_Ghalout_Resume.pdf"

function CTA() {

  const handleDownload = () => {
    window.open(Vivek_Ghalout_Resume, '_blank');
  };
  return (
    <div className='cta' id="nav-menu">
        <a href={Vivek_Ghalout_Resume} download className='btn' id="resume-link-2 resume-button-2" onClick={handleDownload} >Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
    
  )
}

export default CTA