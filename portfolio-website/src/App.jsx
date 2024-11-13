import { React } from 'react'
import {Routes, Route} from "react-router-dom";

import Layout from './components/Layout';
import Home from './components/Home'
import AboutMe from './components/AboutMe';
import './App.css'



function App() {

  return (
    <Routes>

    <Route path="/" element={ <Layout /> }>
    <Route index element={ <Home /> }/>
    <Route path="about" element={ <AboutMe />} />

    </Route>
    </Routes>
  )
}

export default App;