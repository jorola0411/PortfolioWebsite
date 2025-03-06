import { React } from 'react'
import {Routes, Route} from "react-router-dom";

import Layout from './components/Layout';
import Home from './components/Home'
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Styles from './components/Styles';
import Lelem from './components/Lelem';
import Monster from './components/Monster';
import GoFish from './components/GoFish';
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
    <Route path="projects/monster" element={ <Monster />} />
    <Route path="projects/gofish" element={ <GoFish/>} />

    </Route>
    </Routes>
  )
}

export default App;