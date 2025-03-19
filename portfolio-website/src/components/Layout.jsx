import React, { useState, useEffect } from "react";
import IonIcon from '@reacticons/ionicons';
import { Outlet, Link } from "react-router-dom";
import githublogo from '/src/assets/githublogo.png';
import linkedinlogo from '/src/assets/linkedinlogo.png';
import instagramlogo from '/src/assets/instagramlogo.png';
import newlogo from '/src/assets/newlogo.png';
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
              <img src={newlogo} alt="Logo" description="JAO, with the A being orange and J & O being black." className="sm:w-12 md:w-20 xl:w-40  " />
            </Link>


            <div className="hidden md:flex text-black space-x-8 font-ubuntumono" data-aos="fade-down">
              <Link to="/about" className="text-lg md:text-2xl xl:text-5xl hover:underline">About</Link>
              <Link to="/projects" className="text-lg md:text-2xl xl:text-5xl hover:underline">Works</Link>
              <a href="/newresume.pdf" className="text-lg md:text-2xl xl:text-5xl hover:underline" target="_blank">Resume</a>
            </div>


            <button
              className="text-black md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IonIcon name="menu" style={{ fontSize: 24, color: 'black' }}></IonIcon>
            </button>
          </div>


          {isOpen && (
            <div className="flex md:hidden justify-end mt-4">
              <div className="text-black flex flex-col items-end text-right space-y-2 px-5 font-ubuntumono">
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
                  Works
                </Link>
                <a
                  href="/resume.pdf"
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
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 mx-auto justify-between items-end border-t border-black p-5 mt-5 font-ubuntumono">
          <div className='col-span-1 sm:col-span-4 md:col-span-1 sm:text-center'>
            <p className="text-md md:text-xl xl:text-4xl text-black md:text-left">You’ve made it to the bottom so you know...</p>
            <p className="text-md md:text-3xl xl:text-6xl text-black md:text-left md:mb-10 ">Let’s work <span className="bg-gradient-to-r from-beige-300 to-beige-500 bg-clip-text text-transparent font-bold">together!</span></p>
            <p className="text-md md:text-xl xl:text-4xl text-black md:text-left">hello@joseorola.ca</p>
          </div>

          <div className='col-span-1 sm:col-span-4 md:col-span-1'>

            <div className="flex space-x-4 justify-center">
              <a href="https://github.com/jorola0411" target="_blank">
                <img src={githublogo} alt="GitHub Logo" description="custom logo, used for the user to click to GitHub." className="sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-24 xl:h-24" />
              </a>
              <a href="https://linkedin.com/in/jose-orola" target="_blank">
                <img src={linkedinlogo} alt="Linkedin Logo" description="custom logo, used for the user to click to LinkedIn." className="sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-24 xl:h-24" />
              </a>
              <a href="https://www.instagram.com/jose.orola/" target="_blank">
                <img src={instagramlogo} alt="Instagram Logo" description="custom logo, used for the user to click to Instagram." className="sm:w-8 sm:h-8 md:w-10 md:h-10 xl:w-24 xl:h-24" />
              </a>
            </div>
          </div>

          <div className='col-span-1 sm:col-span-4 md:col-span-1 flex flex-col sm:items-center sm:text-center md:items-end'>
            <img src={newlogo} alt="Logo" description="JAO, with the A being orange and J & O being black." className="sm:mt-5  sm:w-16 md:w-24 xl:w-36 mb-5 " />

            <p className="sm:text-sm md:text-lg lg:text-xl xl:text-4xl text-black">Made in React</p>
            <p className="sm:text-sm md:text-lg lg:text-xl xl:text-4xl text-black">Jose Alejandro Orola | 2025</p>
          </div>
        </div>
      </footer>
    </>
  );

}

export default Layout;