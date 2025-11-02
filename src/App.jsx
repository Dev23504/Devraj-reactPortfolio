import React from 'react';
import Navbar from './Compo/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Compo/Home';
import './App.css'
import About from './Compo/About';
import Skill from './Compo/Skill';
import Project from './Compo/Project';
import Contact from './Compo/Contact';





function App() {
 

  return (
    <>
    
   <BrowserRouter>
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
  
   </BrowserRouter>
 
    
    </>
  )
}

export default App
