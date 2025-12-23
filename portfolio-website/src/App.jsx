import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import OLGC from './components/OLGCYA'
import SBCC from './components/SBCC'
import CCoffee from './components/CCoffee'

import './App.css'

function App() {

  const location = useLocation()
  const background = location.state?.background

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/about" element={
            <div className="fixed inset-0 bg-black/15 backdrop-blur-sm z-10 flex items-center justify-center px-16">
              <AboutMe />
            </div>
          } />
          <Route path="/olgc" element={
            <div className="fixed inset-0 bg-black/15 backdrop-blur-sm z-10 flex items-center justify-center px-16">
              <OLGC />
            </div>
          } />
          <Route path="/sbcc" element={
            <div className="fixed inset-0 bg-black/15 backdrop-blur-sm z-10 flex items-center justify-center px-16">
              <SBCC />
            </div>
          } />
          <Route path="/ccoffee" element={
            <div className="fixed inset-0 bg-black/15 backdrop-blur-sm z-10  px-16 overflow-y-auto">
              <CCoffee />
            </div>
          } />

        </Routes>
      )}
    </>
  )
}

export default App