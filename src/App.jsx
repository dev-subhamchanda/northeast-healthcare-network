import React, { useRef, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Doctors from './components/Doctor'
import Testimonials from './components/Testimonial'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

const ScrollToSection = ({ sectionRefs }) => {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname.replace('/', '')
    const section = sectionRefs[path || 'hero'] // default to hero
    section?.current?.scrollIntoView({ behavior: 'smooth' })
  }, [location.pathname, sectionRefs])

  return null
}

const MainPage = () => {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const doctorsRef = useRef(null)
  const testimonialsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const sectionRefs = {
    hero: heroRef,
    services: servicesRef,
    doctors: doctorsRef,
    testimonials: testimonialsRef,
    about: aboutRef,
    contact: contactRef,
  }

  return (
    <>
      <Navbar sectionRefs={sectionRefs} />
      <ScrollToSection sectionRefs={sectionRefs} />
      <div ref={heroRef}><Hero /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={doctorsRef}><Doctors /></div>
      <div ref={testimonialsRef}><Testimonials /></div>
      <div ref={aboutRef}><About /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer />
    </>
  )
}

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/services" element={<MainPage />} />
      <Route path="/doctors" element={<MainPage />} />
      <Route path="/testimonials" element={<MainPage />} />
      <Route path="/about" element={<MainPage />} />
      <Route path="/contact" element={<MainPage />} />
    </Routes>
  </Router>
)

export default App
