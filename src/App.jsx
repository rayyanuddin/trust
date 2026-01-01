import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
import PgDiploma from './programs/PgDiploma';
import Chuk from './activity/Chuk';
import Labs from './programs/Labs';
import Coporate from './programs/Coporate';
import Elabs from './aprogram/Elabs';
import Future from './activity/Future';
import Wbl from './activity/Wbl';
import Centre from './project/Centre';
import Fiip from './aprogram/Fiip';
import Mepz from './project/Mepz';
import Acts from './project/Acts';
function App() {


  return (
    <Router>
      <div className="flex flex-col min-h-screen  ">
        <Navbar />
        <main className="flex-1 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/master" element={<Master />} />
            <Route path="/expermential" element={<Expermential />} />
            <Route path="/practium" element={<Practium />} />
            <Route path="/pgdiploma" element={<PgDiploma />} />
            <Route path="/chuk" element={<Chuk />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/coporate" element={<Coporate />} />
            <Route path="/elabs" element={<Elabs />} />
            <Route path="/future" element={<Future />} />
            <Route path="/wbl" element={<Wbl />} />
            <Route path="/centre" element={<Centre />} />
            <Route path="/fiip" element={<Fiip />} />
              <Route path="/mepz" element={<Mepz/>} />
                 <Route path="/acts" element={<Acts/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
