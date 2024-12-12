import React, { useState, useEffect } from "react";
import IonIcon from '@reacticons/ionicons';
import { Outlet, Link } from "react-router-dom";
import githublogo from '/src/assets/githublogo.png';
import linkedinlogo from '/src/assets/linkedinlogo.png';
import logo from '/src/assets/logo.png';
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


  return (
    <>
      <header>
        <nav className="py-4">
          <div className="px-4 md:px-10 mx-auto flex justify-between items-center">

            <Link to="/">
              <img src={logo} alt="Logo" description="The logo depicts a sun, over a bridge with chains as it's handle bars."className="w-10 md:w-20" />
            </Link>


            <div className="hidden md:flex text-black space-x-8 font-ubuntumono" data-aos="fade-down">
              <Link to="/about" className="text-lg md:text-2xl hover:underline">About</Link>
              <Link to="/projects" className="text-lg md:text-2xl hover:underline">Projects</Link>
              <a href="#contact" className="text-lg md:text-2xl hover:underline">Resume</a>
            </div>


            <button
              className="text-black md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IonIcon name="menu" style={{ fontSize: 24, color: 'black' }}></IonIcon>
            </button>
          </div>


          {isOpen && (
            <div className="flex md:hidden justify-center mt-4">
              <div className="text-black flex flex-col items-center space-y-2 font-ubuntumono">
                <Link
                  to="/about"
                  className="text-lg hover:underline"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  to="/projects"
                  className="text-lg hover:underline"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
                <a
                  href="#contact"
                  className="text-lg hover:underline"
                  onClick={toggleMenu}
                >
                  Resume
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>

        <Outlet />
      </main>


      <footer>
        <div className="container max-w-[80%] mx-auto flex justify-between items-center border-t border-black p-3 mt-5 font-ubuntumono">
          <span className="text-md md:text-2xl text-black">Jose Alejandro Orola</span>

          <div className="flex space-x-4 justify-center">
            <a href="https://github.com/jorola0411" target="_blank">
              <img src={githublogo} alt="GitHub Logo"description="custom logo, used for the user to click to GitHub."  className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a href="https://linkedin.com/in/jose-orola" target="_blank">
              <img src={linkedinlogo} alt="Linkedin Logo" description="custom logo, used for the user to click to LinkedIn."className="w-8 h-8 md:w-10 md:h-10" />
            </a>
          </div>

          <span className="text-md md:text-2xl text-black">jorola0411@gmail.com</span>
        </div>
      </footer>
    </>
  );

}

export default Layout;