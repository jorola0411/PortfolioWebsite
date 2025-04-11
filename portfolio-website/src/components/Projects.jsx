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
        <div className="w-full md:mt-10 lg:mt-20 ">
          <div className=" mx-auto  ">
            <h1 className="sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-center" data-aos="fade-down">
              works
            </h1>



            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-col-4 pt-10 overflow-x-hidden">

              <div className="sm:p-5 md:pl-5 lg:p-5 sm:col-span-4 md:col-span-2 flex flex-col justify-center sm:order-2 md:order-2 lg:order-2 xl:order-2" data-aos="fade-left">
                <h1 className="sm:text-xl md:text-md lg:text-3xl xl:text-7xl">Go Fish!</h1>
                <p className='sm:text-sm md:text-sm lg:text-lg xl:text-4xl sm:mb-5 lg:my-5'>play go fish and win against the CPU!</p>
                <div className='flex gap-5 sm:mb-5 md:mb-0'>
                  <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border border-black rounded-sm bg-beige-100'>HTML</p>
                  <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border border-black rounded-sm bg-beige-100'>CSS</p>
                  <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border border-black rounded-sm bg-beige-100'>JAVASCRIPT</p>
                  <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border border-black rounded-sm bg-beige-100'>REACT</p>
                  <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border border-black rounded-sm bg-beige-100'>RESTfulAPI</p>
                </div>
              </div>

              <div className="sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2 sm:order-1 md:order-1 lg:order-1 xl:order-1 xl:mb-0" data-aos="fade-left">
                <Link to="gofish" >
                  <img src={gofish} alt="Go Fish project" className="xl:w-full xl:h-auto" description="CTA that leads the user to one of my projects, Styles, a UI/UX focused project." />
                </Link>
              </div>

              <div className="sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2 gap-4 sm:order-7 md:order-8 lg:order-8 xl:order-8" data-aos="fade-right">
                <Link to="lelem">
                  <img src={featuredproject1} className="xl:w-full xl:h-auto" alt="Lelem Natural Park project" description="CTA that leads the user to one of my projects, Lelem Natural Park, a collaborative and front-end development project." />
                </Link>
              </div>

              <div className="sm:p-5 md:pr-5 lg:p-5 sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col justify-center  sm:order-8 md:order-7 lg:order-7 xl:order-7" data-aos="fade-right">
                <h1 className='sm:text-xl md:text-md lg:text-3xl xl:text-7xl sm:text-left md:text-right lg:text-right'>Lelem Natural Park</h1>
                <p className='sm:text-sm md:text-sm lg:text-lg xl:text-4xl sm:mb-5 lg:my-5 sm:text-left md:text-right lg:text-right'> a fictional zoo focusing on front-end development and agile methology.</p>
                <div className='flex gap-5 sm:mb-5 md:mb-0 sm:justify-start md:justify-end lg:justify-end'>
                  <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border border-black rounded-sm bg-beige-100'>HTML</p>
                  <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border border-black rounded-sm bg-beige-100'>CSS</p>
                  <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border border-black rounded-sm bg-beige-100'>JAVASCRIPT</p>
                </div>
              </div>

              <div className="sm:p-5 md:pl-5 lg:p-5 text-center sm:col-span-4 md:col-span-2 flex flex-col justify-center  sm:order-6 md:order-6 lg:order-6 xl:order-6 sm:text-left" data-aos="fade-left">
                <h1 className="sm:text-xl md:text-md lg:text-3xl xl:text-7xl">styles by jao</h1>
                <p className='sm:text-sm md:text-sm lg:text-lg xl:text-4xl sm:mb-5 lg:my-5'>virtually try on clothes and browse in styles, a streetwear store app.</p>
                <div className='flex justify-center gap-5 sm:mb-5 md:mb-0 sm:justify-start '>
                  <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border border-black rounded-sm bg-beige-100'>UI</p>
                  <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border border-black rounded-sm bg-beige-100'>UX</p>
                </div>
              </div>

              <div className="sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2 sm:order-5 md:order-5 lg:order-5 xl:order-5" data-aos="fade-left">
                <Link to="styles" >
                  <img src={featuredproject2} alt="Styles project" className="xl:w-full xl:h-auto" description="CTA that leads the user to one of my projects, Styles, a UI/UX focused project." />
                </Link>
              </div>

              <div className="sm:col-span-4 md:col-span-2 gap-4  sm:order-3 md:order-4 lg:order-4 xl:order-4" data-aos="fade-right">
                <Link to="monster">
                  <img src={featuredproject4} className="xl:w-full xl:h-auto" alt="Monster Hunter API project" description="CTA that leads the user to one of my projects, Monster Hunter API, a front-end development project." />
                </Link>
              </div>

              <div className="sm:p-5 md:pr-5 lg:p-5 sm:col-span-4 md:col-span-2 flex flex-col justify-center sm:order-4 md:order-3 lg:order-3 xl:order-3" data-aos="fade-right">
                <h1 className='sm:text-xl md:text-md lg:text-3xl xl:text-7xl sm:text-left md:text-right lg:text-right'>Monster Hunter World database</h1>
                <p className='sm:text-sm md:text-sm lg:text-lg xl:text-4xl sm:mb-5 lg:my-5 sm:text-left md:text-right lg:text-right'>search and favorite items using the Monster Hunter API.</p>
                <div className='flex gap-5 sm:mb-5 md:mb-0 sm:justify-start md:justify-end lg:justify-end'>
                  <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border border-black rounded-sm bg-beige-100'>HTML</p>
                  <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border border-black rounded-sm bg-beige-100'>CSS</p>
                  <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border border-black rounded-sm bg-beige-100'>JAVASCRIPT</p>
                  <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border border-black rounded-sm bg-beige-100'>REACT</p>
                  <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border border-black rounded-sm bg-beige-100'>RESTfulAPI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project
