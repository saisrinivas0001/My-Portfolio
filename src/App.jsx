import React from 'react'
import HomePage from './components/pages/homepage/HomePage'
import About from './components/pages/about/About'
import Projects from './components/pages/projects/Projects'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='main'></div>
      <Header/>
      
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App