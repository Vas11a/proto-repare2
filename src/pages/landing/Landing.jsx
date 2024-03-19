import React from 'react'
import Navbar from './nav/Navbar'
import Banner from './banner/Banner'
import About from './about/About'
import Contacts from './contacts/Contacts'
import Reviews from './reviews/Reviews'
import Footer from './footer/Footer'
import { Routes, Route } from 'react-router-dom'

export default function Landing() {
  
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Banner/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
        </Routes>
        <Footer/>
    </>
  )
}
