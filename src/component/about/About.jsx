import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id = "about">
      <h5> Get to Know</h5>
      <h2> About Me</h2>

      <div className='container about__container'>
        {/* image */}
        <div className='about__me'> 
        <div className='about__me-image'>
          <img src = {ME} alt = "About Image"/>

        </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 1+ years Working </small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small> ---- </small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small> 30+ </small>
            </article>
            
          </div>
          <p> Full Stack Developer and Blockchain Development Enthusiast with experience in creating and 
            implementing cutting-edge solutions. Passionate about blockchain technology and its potential 
            to revolutionize business operations. Produce daily content on blockchain development to educate 
            and inform others about this exciting field. Skilled in a variety of programming languages and 
            frameworks, including JavaScript, React, CSS , Rust and Solidity. Proven ability to deliver 
            high-quality, secure, and efficient software on time. Always eager to learn new 
            technologies and skills to stay ahead of the curve.
             </p>
             <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About