import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FiBook} from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'



const Nav = ()=> {
  const [activeNav, setActiveNav] = useState("#")
  return (
   <nav>
    <a href="#" className ={activeNav === '#' ? 'active' : ''}><AiOutlineHome/> </a>
    <a href='#about' onClick={()=>setActiveNav("#about")}  className ={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/> </a>
    <a href='#experience'><FiBook/> </a>
    <a href='#services'><RiServiceLine/> </a>
    <a href='#contact'><AiOutlineMessage/> </a>

   </nav>
  )
}

export default Nav