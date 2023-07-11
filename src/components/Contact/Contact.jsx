import React, { useEffect } from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import AOS from 'aos'

function Contact() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sz3w3yp', 'template_478qj0r', form.current, '0tjuFfFZGElotejXu')
      
    e.target.reset();
  };

  return (
    <section id='contact' data-aos="fade-up" data-aos-duration="1000">
      <h5 data-aos="fade-up" data-aos-duration="1000">Get In Touch</h5>
      <h2 data-aos="fade-up" data-aos-duration="1000">Contact Me</h2>

      <div className="container contact_container" data-aos="fade-up" data-aos-duration="1000">
        <div className="contact_options">
          <article className='contact_option' data-aos="zoom-in-right" data-aos-duration="1000" id="contact-email">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>vivek.ghalout@gmail.com</h5>
            <a href="mailto:vivek.ghalout@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact_option' data-aos="zoom-in-right" data-aos-duration="1000" id="contact-phone">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+917830368708</h5>
            <a href="https://api.whatsapp.com/send?phone=7830368708" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} data-aos="zoom-in-left" data-aos-duration="1000">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact