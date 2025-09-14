import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


import Home from './routes/Home'
import About from './routes/About'
import Events from './routes/Events'
import Workshop from './routes/Workshop'
import Payment from './routes/Payment'
import Schedule from './routes/Schedule'
import Gallery from './routes/Gallery'
import Contact from './routes/Contact'
import FAQ from './routes/FAQ'
export default function App(){
return (
<div className="d-flex flex-column min-vh-100">
<Navbar />


<main className="container my-4 flex-grow-1">
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/about" element={<About/>} />
<Route path="/events" element={<Events/>} />
<Route path="/workshop" element={<Workshop/>} />
<Route path="/payment" element={<Payment/>} />
<Route path="/schedule" element={<Schedule/>} />
<Route path="/gallery" element={<Gallery/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/faq" element={<FAQ/>} />
</Routes>
</main>


<Footer />
</div>
)
}