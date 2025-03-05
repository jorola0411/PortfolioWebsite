import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init(); // we have to initialize aos in the code or else the animations won't work
import featuredproject4 from '/src/assets/featuredprojects4.jpg';
import featuredproject2 from '/src/assets/featuredprojects2.jpg';
import { Link } from "react-router-dom";

import "../App.css";


function Home() {

  useEffect(() => {
    AOS.init({
      duration: 300, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Easing function
    });
  }, []);
  return (
    <>

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />


      <title>Jose Orola - UI/UX Designer & Front-End Developer</title>

      <meta name="description" content="Hello, I'm Jose. I'm a UI/UX designer and Front-End developer located in the expensive city of Vancouver, BC. My aim is to create passionate and meaningful solutions with my clients/company." />

      <meta name="keywords" content="Jose, UI/UX Designer, Front-End Developer, Vancouver, Design, Web Development, User Interface Designer, User Experience Designer, Portfolio" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Jose - UI/UX Designer & Front-End Developer" />
      <meta property="og:description" content="I'm Jose, a UI/UX designer and front-end developer based in Vancouver, BC. I create passionate and meaningful solutions with my clients." />
      <meta property="og:url" content="https://joseorola.ca/" />

      <meta name="twitter:title" content="Jose - UI/UX Designer & Front-End Developer" />
      <meta name="twitter:description" content="Explore the portfolio of Jose, a UI/UX designer and front-end developer, featuring projects like Lelem Natural Park and Styles." />
      <meta name="twitter:url" content="https://joseorola.ca/" />



      <div className="max-w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 md:pt-10">

        <div className="container mx-auto pt-10 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 md:mt-10">
          <h1 className="sm:text-2xl md:text-7xl lg:text-7xl xl:text-9xl mb-10" data-aos="fade-left">
            Need a<span className="bg-beige-500 bg-clip-text text-transparent font-bold font-style: italic"> Front-end Developer</span> & <span className="bg-beige-500 bg-clip-text text-transparent font-bold font-style: italic"> UI Designer</span>? {/*text-transparent is needed for the gradient to show up*/}
          </h1>

          <p className="sm:text-xl md:text-4xl md:text-4xl xl:text-5xl mt-5" data-aos="fade-right">
            I'm <span className="bg-beige-500 bg-clip-text text-transparent font-bold">Jose</span>, and I’m looking forward to be working with you.
          </p>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:col-span-4 xl:col-span-4 pt-10 ">
        <div className="mx-auto space-y-2 mt-10 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 mb-10">
          <h2 className="sm:text-2xl md:text-4xl lg:text-4xl xl:text-6xl text-center">Featured Works</h2>
          <hr className="border-t-2 border-black mt-2 " />
        </div>


        <div className="sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2 gap-4">
          <Link to="projects/monster">
            <img src={featuredproject4} className="xl:w-full xl:h-auto" alt="Lelem Natural Park" data-aos="flip-right" data-aos-anchor-placement="top-bottom" description="CTA that leads the user to one of my projects, Lelem Natural Park, a collaborative and front-end development project." />
          </Link>
        </div>

        <div className="p-5 text-center sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col justify-center mb-10">
          <h1 className='sm:text-xl md:text-3xl lg:text-3xl xl:text-6xl mb-5'>Monster Hunter API project</h1>
          <div className='flex justify-center gap-10 mb-5 '>
            <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>JAVASCRIPT</p>
            <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>REACT</p>
            <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>API</p>
          </div>
          <p className='sm:text-sm md:text-sm lg:text-lg xl:text-4xl'>Search and favorite items using the Monster Hunter API.</p>
        </div>

        <div className="p-5 text-center sm:col-span-4 md:col-span-2 flex flex-col justify-center sm:order-2 md:order-1">
          <h1 className="sm:text-xl md:text-3xl lg:text-3xl xl:text-6xl mb-5">styles by jao</h1>
          <div className='flex justify-center gap-10 mb-5'>
            <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>UI</p>
            <p className='sm:text-sm md:text-sm lg:text-lg xl:text-3xl sm:px-1 sm:py-1 md:px-2 md:py-2 lg:px-4 lg:py-2 border border-black rounded-full'>UX</p>
          </div>
          <p className="sm:text-sm md:text-sm lg:text-lg xl:text-4xl mt-2">Virtually try on clothes and browse in styles, a streetwear store app.</p>
        </div>

        <div className="sm:col-span-4 md:col-span-2 gap-4 sm:order-1 md:order-2">
          <Link to="projects/styles" className="relative group">
            <img src={featuredproject2} className="xl:w-full xl:h-auto" alt="Styles" data-aos="flip-right" data-aos-anchor-placement="top-bottom" description="CTA that leads the user to one of my projects, Styles, a UI/UX focused project." />
          </Link>
        </div>
      </div>

    </>
  )
}

export default Home