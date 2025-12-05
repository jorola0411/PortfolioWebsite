import { React } from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './components/Home'
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<AboutMe />} />
      <Route path="projects" element={<Projects />} />
    </Routes>
  )
}

export default App;