import React from "react";
import { Link } from "react-router-dom";
import featuredproject1 from '/src/assets/featuredprojects1.jpg';
import featuredproject2 from '/src/assets/featuredprojects2.jpg';
import featuredproject4 from '/src/assets/featuredprojects4.jpg';
import gofish from '/src/assets/gofish.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();


function Project() {
  return (
    <>

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Projects - Jose Orola </title>

      <meta name="description" content="Project page featuring various projects by Jose Orola, a UI/UX Designer and Front-End Developer based in Vancouver, BC." />

      <meta name="keywords" content="Jose, UI/UX Designer, Front-End Developer, Vancouver, Design, Web Development, User Interface Designer, User Experience Designer, Portfolio" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Projects - Jose Orola" />
      <meta property="og:description" content="Projects created by Jose Orola, a UI/UX Designer and Front-End Developer based in Vancouver, BC." />
      <meta property="og:url" content="https://joseorola.ca/" />

      <meta name="twitter:title" content="Projects - Jose Orola" />
      <meta name="twitter:description" content="Projects created by Jose Orola, a UI/UX Designer and Front-End Developer based in Vancouver, BC." />
      <meta name="twitter:url" content="https://joseorola.ca/" />

      <div className="items-center justify-center">
        <div className="w-full md:mt-10 lg:py-5 lg:mt-20 lg:mb-15">
          <div className=" mx-auto space-y-4 ">
            <h1 className="sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-center" data-aos="fade-down">
              WORKS
            </h1>

            

            <div className=" grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-col-4 pt-10">

            <div className="text-center sm:col-span-4 md:col-span-2 flex flex-col justify-center lg:mb-10 sm:order-2 md:order-1 lg:order-1 xl:order-1">
                <h1 className="sm:text-xl md:text-2xl lg:text-3xl xl:text-7xl sm:mb-3 md:mb-3 lg:mb-5 sm:mt-5">Go Fish!</h1>
                <div className='flex justify-center sm:gap-3 sm:mb-3 md:gap-10 md:mb-3 lg:mb-5'>
                  <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-3 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>JAVASCRIPT</p>
                  <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>REACT</p>
                  <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>API</p>
                </div>
                <p className='sm:text-sm md:text-sm lg:text-lg xl:text-4xl sm:mb-5'>Play Go Fish and win against the CPU!</p>
              </div>

              <div className="sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2 sm:order-1 md:order-2 lg:order-2 xl:order-2 xl:mb-0">
                <Link to="gofish" >
                  <img src={gofish} alt="Styles" className="xl:w-full xl:h-auto" description="CTA that leads the user to one of my projects, Styles, a UI/UX focused project." />
                </Link>
              </div>

              <div className="sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2 gap-4 sm:order-3 md:order-3 lg:order-3 xl:order-3 ">
                <Link to="lelem">
                  <img src={featuredproject1} className="xl:w-full xl:h-auto" alt="Lelem Natural Park" description="CTA that leads the user to one of my projects, Lelem Natural Park, a collaborative and front-end development project." />
                </Link>
              </div>

              <div className="text-center sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col justify-center lg:mb-10 sm:order-4 md:order-4 lg:order-4">
                <h1 className='sm:text-xl md:text-2xl lg:text-3xl xl:text-7xl sm:mb-3 md:mb-3 lg:mb-5 sm:mt-5'>Lelem Natural Park</h1>
                <div className='flex justify-center md:gap-10 sm:gap-3 sm:mb-3 md:mb-3 lg:mb-5'>
                  <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>JAVASCRIPT</p>
                  <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>HTML</p>
                  <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>CSS</p>
                </div>
                <p className='sm:text-sm md:text-sm lg:text-lg xl:text-4xl sm:mb-5'> A fictional zoo focusing on front-end development and Agile Methology.</p>
              </div>

              <div className="text-center sm:col-span-4 md:col-span-2 flex flex-col justify-center lg:mb-10 sm:order-6 md:order-5 lg:order-5 xl:order-5">
                <h1 className="sm:text-xl md:text-2xl lg:text-3xl xl:text-7xl sm:mb-3 md:mb-3 lg:mb-5 sm:mt-5">styles by jao</h1>
                <div className='flex justify-center sm:gap-3 sm:mb-3 md:gap-10 md:mb-3 lg:mb-5'>
                  <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-3 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>UI</p>
                  <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>UX</p>
                </div>
                <p className='sm:text-sm md:text-sm lg:text-lg xl:text-4xl sm:mb-5'>Virtually try on clothes and browse in styles, a streetwear store app.</p>
              </div>

              <div className="sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2 sm:order-5 md:order-6 lg:order-6 xl:order-6 xl:mb-0">
                <Link to="styles" >
                  <img src={featuredproject2} alt="Styles" className="xl:w-full xl:h-auto" description="CTA that leads the user to one of my projects, Styles, a UI/UX focused project." />
                </Link>
              </div>

              <div className="sm:col-span-4 md:col-span-2 gap-4 sm:mb-5 md:mb-10 sm:order-7 md:order-7 lg:order-7 xl:order-7">
                <Link to="monster">
                  <img src={featuredproject4} className="xl:w-full xl:h-auto" alt="Monster Hunter API project" description="CTA that leads the user to one of my projects, Monster Hunter API, a front-end development project." />
                </Link>
              </div>

              <div className=" text-center sm:col-span-4 md:col-span-2 flex flex-col justify-center md:mb-10 sm:order-8 md:order-8 lg:order-8 xl:order-8">
                <h1 className='sm:text-xl md:text-2xl lg:text-3xl xl:text-7xl sm:mb-3 md:mb-3 lg:mb-5'>Monster Hunter API project</h1>
                <div className='flex justify-center sm:gap-3 sm:mb-3 md:gap-10 md:mb-3 lg:mb-5'>
                  <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>JAVASCRIPT</p>
                  <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>REACT</p>
                  <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>API</p>
                </div>
                <p className='sm:text-sm md:text-sm lg:text-lg xl:text-4xl'>Search and favorite items using the Monster Hunter API.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project
