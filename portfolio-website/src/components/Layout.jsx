import React from "react";
//import the link and the outlet components
import { Outlet, Link } from "react-router-dom";

function Layout() {

    return(
        <>
        <header>
          <nav className="py-4">

            <div className="px-10 mx-auto flex justify-between items-center">
            <Link to ="/"><img src="src/assets/logo.png" alt="Jao's Books" className="w-20"/></Link>


            <div className="text-black flex space-x-8 font-karma font-semibold">
                <Link to ="/about" className="hover:underline">About</Link>
                <Link to ="/projects" className="hover:underline">Projects</Link>
                <a href="#contact" className="hover:underline">Resume</a>
            </div>

            </div>
            </nav>
        </header>
        <main>
            {/* Thisis where the child routes of <Layout> will be rendered when the page changes*/}
            <Outlet />
        </main>
        <footer className="py-4">
      <div className="container mx-auto flex justify-between items-center border-t border-black pt-2 font-karma">
        <span className="text-black">Jose Alejandro Orola</span>
    
        <div className="flex space-x-4 justify-center">
            <a href="https://github.com/jorola0411" target="_blank">
              <img src="./src/assets/githublogo.png" alt="GitHub Logo" className="w-10 h-10" />
            </a>
            <a href="https://linkedin.com/in/jose-orola" target="_blank">
            <img src="./src/assets/linkedinlogo.png" alt="Linkedin Logo" className="w-10 h-10" />
            </a>
          </div>

        <span className="text-black font-karma">jorola0411@gmail.com</span>

      </div>
    </footer>
        
        </>
    );
}

export default Layout;