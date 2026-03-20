import { Routes, Route, } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import CCoffee from './components/CCoffee'
import Charismacafe from './components/CharismaCafe'
import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Layout /> }>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/ccoffee" element={<CCoffee />} />
        <Route path="/charismacafe" element={<Charismacafe/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App