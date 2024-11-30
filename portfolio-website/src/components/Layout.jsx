import React, { useState, useEffect } from "react";
import IonIcon from '@reacticons/ionicons';
import MediaQuery from 'react-responsive';
import { Outlet, Link } from "react-router-dom";

import githublogo from '/src/assets/githublogo.png';
import linkedinlogo from '/src/assets/linkedinlogo.png';
import logo from  '/src/assets/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();
function Layout() {
  
  const [isOpen, setIsOpen] = useState(false); //is open is a state variable that tracks whether the hamburger menu was open or closed, usestate(false) means the menu is closed by default

  const toggleMenu = () => {
    setIsOpen(!isOpen); //this toggles the state between opened and closed menu. If isOpen is true (menu is open), then clicking it will make it false (menu is closed), and vice versa
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { //this is used to detect when the window size is under 1024, then sets the menu as false, AKA closed.
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize); //this adds an event listener to execute the actual function
    

    return () => window.removeEventListener("resize", handleResize); 
  }, []);


    return(
        <>
        <header>
          <nav className="py-4">

            <div className="px-10 mx-auto flex justify-between items-center">
            <Link to ="/"><img src={logo} alt="Logo" className="w-20"/></Link>

            <MediaQuery minWidth={769}>
            <div className="text-black flex space-x-8 font-ubuntumono md:flex"  data-aos="fade-down">
                <Link to ="/about" className="text-2xl hover:underline">About</Link>
                <Link to ="/projects" className="text-2xl hover:underline">Projects</Link>
                <a href="#contact" className="text-2xl hover:underline">Resume</a>
            </div>
            </MediaQuery>

            <MediaQuery maxWidth={768}>

            <button className="text-black "  onClick={() => setIsOpen(!isOpen)}> {/* on click toggles the state variable*/}
            <IonIcon name="menu" style={{ fontSize: 24, color: 'black' }}></IonIcon>
            </button>
            </MediaQuery>
            </div>
            
            {isOpen && (
              <div className="flex justify-center mt-4">
            <div className="text-black flex flex-col items-center space-y-2">
                <Link to ="/about" className="text-lg hover:underline" onClick={toggleMenu}>About</Link>
                <Link to ="/projects" className="text-lg hover:underline" onClick={toggleMenu}>Projects</Link>
                <a href="#contact" className="text-lg hover:underline" onClick={toggleMenu}>Resume</a>
            </div>
            </div>
            )}
  
            </nav>
        </header>
        <main>
            {/* This is where the child routes of <Layout> will be rendered when the page changes*/}
            <Outlet />
        </main>
        <MediaQuery minWidth={769}>
        <footer className="py-4 ">
      <div className="container max-w-screen-lg mx-auto flex justify-between items-center border-t border-black pt-2 font-ubuntumono ">
        <span className="text-2xl text-black">Jose Alejandro Orola</span>
    
        <div className="flex space-x-4 justify-center">
            <a href="https://github.com/jorola0411" target="_blank">
              <img src={githublogo} alt="GitHub Logo" className="w-10 h-10" />
            </a>
            <a href="https://linkedin.com/in/jose-orola" target="_blank">
            <img src={linkedinlogo} alt="Linkedin Logo" className="w-10 h-10" />
            </a>
          </div>

        <span className="text-2xl text-black ">jorola0411@gmail.com</span>

      </div>
    </footer>
    </MediaQuery>

    <MediaQuery maxWidth={768}>
              
    <footer className="p-4">
      <div className="container mx-auto flex justify-between items-center border-t border-black pt-2 font-ubuntumono">
        <span className="text-md text-black">Jose Alejandro Orola</span>
    
        <div className="flex space-x-4 justify-center">
            <a href="https://github.com/jorola0411" target="_blank">
            <img src={githublogo} alt="GitHub Logo" className="w-10 h-10" />
            </a>
            <a href="https://linkedin.com/in/jose-orola" target="_blank">
            <img src={linkedinlogo} alt="Linkedin Logo" className="w-10 h-10" />
            </a>
          </div>

        <span className="text-md text-black">jorola0411@gmail.com</span>

      </div>
    </footer>
      </MediaQuery>
        </>
    );
}

export default Layout;