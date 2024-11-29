import { React } from 'react'
import {Routes, Route} from "react-router-dom";

import Layout from './components/Layout';
import Home from './components/Home'
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Styles from './components/Styles';
import Lelem from './components/Lelem';
import Poster from './components/Poster';
import Burger from './components/Burger';
import './App.css'




function App() {

  return (
    <Routes>

    <Route path="/" element={ <Layout /> }>
    <Route index element={ <Home /> }/>
    <Route path="about" element={ <AboutMe />} />
    <Route path="projects" element={ <Projects />} />
    <Route path="projects/styles" element={ <Styles />} />
    <Route path="projects/lelem" element={ <Lelem />} />
    <Route path="projects/poster" element={ <Poster />} />
    <Route path="projects/burger" element={ <Burger />} />

    </Route>
    </Routes>
  )
}

export default App;