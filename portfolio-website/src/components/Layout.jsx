import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";
import githublogo from '/src/assets/githublogo.png';
import linkedinlogo from '/src/assets/linkedinlogo.png';
import instagramlogo from '/src/assets/instagramlogo.png';
import newlogo from '/src/assets/newlogo.png';

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
        <nav className="py-5">
          <div className="md:px-16 mx-auto flex justify-between items-center">

            <Link to="/">
              <img src={newlogo} alt="Logo" description="JAO, with the A being orange and J & O being black." className="sm:w-12 md:w-20 xl:w-40" />
            </Link>


            <div className="hidden md:flex justify-between gap-10 font-dmsans" >

              <div className="relative group cursor-pointer flex flex-col items-center">
                <Link to="/about" className="text-lg md:text-2xl xl:text-5xl hover:underline">about</Link>
                <span className="absolute top-full w-60 mt-2 lg:text-lg xl:text-3xl opacity-0 group-hover:opacity-100 transition-opacity z-10 text-center pointer-events-none">
                  curious about me? i'm flattered.
                </span>
              </div>

              <div className="relative group cursor-pointer flex flex-col items-center">
                <Link to="/projects" className="text-lg md:text-2xl xl:text-5xl hover:underline">works</Link>
                <span className="absolute top-full w-60 mt-2 lg:text-lg xl:text-3xl opacity-0 group-hover:opacity-100 transition-opacity z-10 text-center pointer-events-none">
                  the reason you're here.
                </span>
              </div>

              <div className="relative group cursor-pointer flex flex-col items-center">
                <a href="/newresume.pdf" className="text-lg md:text-2xl xl:text-5xl hover:underline" target="_blank">resume</a>
                <span className="absolute top-full w-50 mt-2 lg:text-lg xl:text-3xl opacity-0 group-hover:opacity-100 transition-opacity z-10 text-center pointer-events-none">
                  me, in one page.
                </span>
              </div>
              </div>

          


            <button
              className={`md:hidden transition-transform duration-300  ${isOpen ? "rotate-180" : "rotate-0"}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} style={{ fontSize: 20, }} />

            </button>
          </div>

            <div className={`flex md:hidden justify-end  transition-all duration-300 ease-in-out transform ${isOpen ? "opacity-100" : "opacity-0"}`}>
              <div className="flex flex-col items-end text-right space-y-2 px-5 font-dmsans">
                <Link
                  to="/about"
                  className="text-lg"
                  onClick={toggleMenu}
                >
                  about.
                </Link>
                <Link
                  to="/projects"
                  className="text-lg"
                  onClick={toggleMenu}
                >
                  works.
                </Link>
                <a
                  href="/newresume.pdf"
                  className="text-lg"
                  onClick={toggleMenu}
                >
                  resume.
                </a>
               
              </div>
            </div>
 
        </nav>
      </header>
      <main>
        <Outlet />
      </main>


      <footer>
        <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 mx-auto justify-between items-end border-t border-black px-16 py-10">
          <div className='col-span-1 sm:col-span-4 md:col-span-2 sm:text-center'>

            <p className="text-md md:text-md lg:text-xl xl:text-3xl md:text-left">just say hi.</p>
            <p className="text-md md:text-md lg:text-xl xl:text-3xl md:text-left hover:underline"><a href="mailto:hello@joseorola.ca">hello@joseorola.ca</a></p>
          </div>

          <div className='col-span-1 sm:col-span-4 md:col-span-1'>

            <div className="flex lg:space-x-5 justify-center">
              <a href="https://github.com/jorola0411" target="_blank">
                <img src={githublogo} alt="GitHub Logo" description="custom logo, used for the user to click to GitHub." className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-12 lg:h-12 xl:w-18 xl:h-18 hover:scale-110 transition ease-in-out" />
              </a>
              <a href="https://linkedin.com/in/jose-orola" target="_blank">
                <img src={linkedinlogo} alt="Linkedin Logo" description="custom logo, used for the user to click to LinkedIn." className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-12 lg:h-12  xl:w-18 xl:h-18 hover:scale-110 transition ease-in-out" />
              </a>
              <a href="https://www.instagram.com/jose.orola/" target="_blank">
                <img src={instagramlogo} alt="Instagram Logo" description="custom logo, used for the user to click to Instagram." className="sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-12 lg:h-12 xl:w-18 xl:h-18 hover:scale-110 transition ease-in-out" />
              </a>
            </div>
          </div>

          <div className='col-span-1 sm:col-span-4 md:col-span-2 flex flex-col sm:items-center sm:text-center md:items-end'>
            <p className="sm:text-sm md:text-md lg:text-xl xl:text-3xl">coded with react by yours truly.</p>
            <p className="sm:text-sm md:text-md lg:text-xl xl:text-3xl md:text-right">most likely listening to the latest <a href="https://open.spotify.com/album/0hJloArA2Kb9xNBIv34osS?si=2nvN98rGTW-z_L7L769SvA" target="_blank" className="hover:underline">kpop</a>, <a href="https://open.spotify.com/album/7vp2iMEQzhNX4sEIUbHpiJ?si=JmkdjAhwSe-A7dgxeGBf4g" target="_blank" className="hover:underline">rnb</a>, and <a href="https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP?si=6wc2Xxd0RgaEVl5yaHMKig" target="_blank" className="hover:underline">rap</a> releases.</p>
          </div>
        </div>
      </footer>
    </>
  );

}

export default Layout;