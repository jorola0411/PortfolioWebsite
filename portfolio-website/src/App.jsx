import { React } from 'react'
import {Routes, Route} from "react-router-dom";

import Layout from './components/Layout';
import Home from './components/Home'
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Styles from './components/Styles';
import './App.css'



function App() {

  return (
    <Routes>

    <Route path="/" element={ <Layout /> }>
    <Route index element={ <Home /> }/>
    <Route path="about" element={ <AboutMe />} />
    <Route path="projects" element={ <Projects />} />
    <Route path="projects/styles" element={ <Styles />} />

    </Route>
    </Routes>
  )
}

export default App;