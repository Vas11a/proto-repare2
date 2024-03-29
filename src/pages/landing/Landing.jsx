import React from 'react'
import Navbar from './nav/Navbar'
import Banner from './banner/Banner'
import About from './about/About'
import Contacts from './contacts/Contacts'
import Reviews from './reviews/Reviews'
import Footer from './footer/Footer'
import { Routes, Route } from 'react-router-dom'
import CommingSoon from './CommingSoon'

export default function Landing() {
  
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Banner/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/reviews" element={<CommingSoon/>}/>
          <Route path="/tracking" element={<CommingSoon/>}/>
        </Routes>
        <Footer/>
    </>
  )
}
