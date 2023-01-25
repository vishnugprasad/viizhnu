import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'


const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href='https://linkedin.com' target = "_blank"><BsLinkedin/></a>
        <a href='https://github.com/vishnugprasad' target = "_blank"><FaGithub/></a>
        <a href='https://www.instagram.com/blockchain.unchained/' target = "_blank"><FiInstagram/></a>


    </div>
  )
}

export default HeaderSocial