import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocial from './HeaderSocial'

const Header = ()=> {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I am </h5>
        <h1> Vishnu G Prasad </h1>
        <h5 className="text-light"> Fullstack Developer</h5>
        <CTA></CTA>
        <HeaderSocial></HeaderSocial>
        <div className='me'>
          <img src = {ME} alt = "me"/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header