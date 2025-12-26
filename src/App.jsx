import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Master from './programs/Master';
import Expermential from './programs/Expermential';
import Practium from './programs/Practium';
function App() {


  return (
    <Router>
      <div className="flex flex-col min-h-screen  ">
        <Navbar />
        <main className="flex-1 ">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs/>} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/master" element={<Master />} />
              <Route path="/expermential" element={<Expermential />} />
              <Route path="/practium" element={<Practium />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
