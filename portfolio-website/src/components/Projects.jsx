import React from "react";
import { Link } from "react-router-dom";
import featuredproject1 from '/src/assets/featuredprojects1.jpg';
import featuredproject2 from '/src/assets/featuredprojects2.jpg';
import featuredproject3 from '/src/assets/featuredprojects3.jpg';
import featuredproject4 from '/src/assets/featuredprojects4.jpg';
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
        <div className="w-full py-10 mt-20 mb-20">
          <div className=" mx-auto space-y-4 ">
            <h1 className="text-6xl font-bold text-center" data-aos="fade-down">
              PROJECTS
            </h1>


            <div className=" mx-auto grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4  pt-10">
              <div className="sm:col-span-2 md:col-span-2 gap-4 mb-10">
                <Link to="lelem">
                  <img src={featuredproject1} alt="Lelem Natural Park" data-aos="flip-right" data-aos-anchor-placement="top-bottom" description="CTA that leads the user to one of my projects, Lelem Natural Park, a collaborative and front-end development project." />
                </Link>
              </div>

              <div className="p-5 text-center sm:col-span-2 md:col-span-2 flex flex-col justify-center mb-10">
                <h1 className='text-3xl mb-5'>Lelem Natural Park</h1>
                <div className='flex justify-center gap-10 mb-5 '>
                  <p className='px-4 py-2 border border-black rounded-full'>JAVASCRIPT</p>
                  <p className='px-4 py-2 border border-black rounded-full'>HTML</p>
                  <p className='px-4 py-2 border border-black rounded-full'>CSS</p>
                </div>
                <p> A fictional zoo focusing on front-end development.</p>
              </div>

              <div className="p-5 text-center md:col-span-2 flex flex-col justify-center mb-10">
                <h1 className="text-3xl mb-5">styles by jao</h1>
                <div className='flex justify-center gap-10 mb-5'>
                  <p className='px-4 py-2 border border-black rounded-full'>UI</p>
                  <p className='px-4 py-2 border border-black rounded-full'>UX</p>
                </div>
                <p className="text-md mt-2">Virtually try on clothes and browse in styles, a streetwear store app.</p>
              </div>

              <div className="sm:col-span-4 md:col-span-2 gap-4 mb-10">
                <Link to="styles" className="relative group">
                  <img src={featuredproject2} alt="Styles" data-aos="flip-right" data-aos-anchor-placement="top-bottom" description="CTA that leads the user to one of my projects, Styles, a UI/UX focused project." />
                </Link>
              </div>
              <div className="sm:col-span-2 md:col-span-2 gap-4 mb-10">
                <Link to="monster">
                  <img src={featuredproject4} alt="Lelem Natural Park" data-aos="flip-right" data-aos-anchor-placement="top-bottom" description="CTA that leads the user to one of my projects, Lelem Natural Park, a collaborative and front-end development project." />
                </Link>
              </div>

              <div className="p-5 text-center sm:col-span-2 md:col-span-2 flex flex-col justify-center mb-10">
                <h1 className='text-3xl mb-5'>Monster Hunter API project</h1>
                <div className='flex justify-center gap-10 mb-5 '>
                  <p className='px-4 py-2 border border-black rounded-full'>JAVASCRIPT</p>
                  <p className='px-4 py-2 border border-black rounded-full'>REACT</p>
                  <p className='px-4 py-2 border border-black rounded-full'>API</p>
                </div>
                <p>Search and favorite items using the Monster Hunter API.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project
