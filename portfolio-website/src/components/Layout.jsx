import React, { useState, useEffect } from "react";
import IonIcon from '@reacticons/ionicons';
import MediaQuery from 'react-responsive';
import { Outlet, Link } from "react-router-dom";

function Layout() {
  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    

    return () => window.removeEventListener("resize", handleResize);
  }, []);


    return(
        <>
        <header>
          <nav className="py-4">

            <div className="px-10 mx-auto flex justify-between items-center">
            <Link to ="/"><img src="../src/assets/logo.png" alt="Logo" className="w-20"/></Link>

            <MediaQuery minWidth={1024}>
            <div className="text-black flex space-x-8 font-karma font-semibold md:flex">
                <Link to ="/about" className="text-2xl hover:underline">About</Link>
                <Link to ="/projects" className="text-2xl hover:underline">Projects</Link>
                <a href="#contact" className="text-2xl hover:underline">Resume</a>
            </div>
            </MediaQuery>

            <MediaQuery maxWidth={1023}>

            <button className="text-black "  onClick={() => setIsOpen(!isOpen)}>
            <IonIcon name="menu" style={{ fontSize: 24, color: 'black' }}></IonIcon>
            </button>
            </MediaQuery>
            </div>
            
            {isOpen && (
              <div className="flex justify-center mt-4">
            <div className="text-black flex flex-col items-center space-y-2 font-karma font-semibold">
                <Link to ="/about" className="text-lg hover:underline" onClick={toggleMenu}>About</Link>
                <Link to ="/projects" className="text-lg hover:underline" onClick={toggleMenu}>Projects</Link>
                <a href="#contact" className="text-lg hover:underline" onClick={toggleMenu}>Resume</a>
            </div>
            </div>
            )}
  
            </nav>
        </header>
        <main>
            {/* Thisis where the child routes of <Layout> will be rendered when the page changes*/}
            <Outlet />
        </main>
        <footer className="py-4">
      <div className="container max-w-screen-lg mx-auto flex justify-between items-center border-t border-black pt-2 font-karma">
        <span className="text-2xl text-black">Jose Alejandro Orola</span>
    
        <div className="flex space-x-4 justify-center">
            <a href="https://github.com/jorola0411" target="_blank">
              <img src="../src/assets/githublogo.png" alt="GitHub Logo" className="w-10 h-10" />
            </a>
            <a href="https://linkedin.com/in/jose-orola" target="_blank">
            <img src="../src/assets/linkedinlogo.png" alt="Linkedin Logo" className="w-10 h-10" />
            </a>
          </div>

        <span className="text-2xl text-black font-karma">jorola0411@gmail.com</span>

      </div>
    </footer>
        
        </>
    );
}

export default Layout;