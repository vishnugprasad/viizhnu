import React from 'react'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import Nav from './component/nav/Nav'
import About from './component/about/About'
import Experience from './component/experience/Experience'
import Services from './component/services/Services'
import Portfolio from './component/portfolio/Portfolio'
import Testimonial from './component/testimonial/Testimonial'
import Contact from './component/contact/Contact'


const App = () => {
  return (
    <>
    <Header></Header>
    <Nav></Nav>
    <About></About>
    <Experience></Experience>
    <Services></Services>
    <Portfolio></Portfolio>
    <Testimonial></Testimonial>
    <Contact></Contact>
    <Footer></Footer>

    </>
  )
}

export default App