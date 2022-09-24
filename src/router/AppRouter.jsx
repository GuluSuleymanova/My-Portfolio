import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import About from '../components/Pages/About'
import Contact from '../components/Pages/Contact'
import Home from '../components/Pages/Home'
import Portfolio from '../components/Pages/Portfolio/Portfolio'
import Particle from '../components/Particles/Particle'



const AppRouter = () => {
  return (
    <div className="main-content">
    <Router>
       <Particle/> 
      <Header/>
      <Routes>
      <Route end  path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='portfolio' element={<Portfolio/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
    </div>
  )
}

export default AppRouter