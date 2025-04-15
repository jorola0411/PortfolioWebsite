import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init(); // we have to initialize aos in the code or else the animations won't work
import featuredproject4 from '/src/assets/featuredprojects4.jpg';
import featuredproject2 from '/src/assets/featuredprojects2.jpg';
import { Link } from "react-router-dom";

import { gsap } from "gsap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 300, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Easing function
    });
  }, []);


  const featuredRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    gsap.from(featuredRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: featuredRef.current,
        start: "top 80%",
      },
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



      <div className=" grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 ">

        <div className="md:px-16 md:h-screen lg:h-screen container mx-auto sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4  flex  flex-col justify-center ">
        <h1 className="sm:text-2xl md:text-7xl lg:text-9xl xl:text-9xl mb-10" data-aos="fade-right">
           hi. i'm <span className="bg-beige-500 bg-clip-text text-transparent font-bold">Jose Orola</span>.
          </h1>
          <h2 className=" sm:text-xl md:text-6xl xl:text-5xl mt-5" data-aos="fade-left">
          and i'm your <span className="bg-beige-500 bg-clip-text text-transparent font-bold "> Web Developer</span> & <span className="bg-beige-500 bg-clip-text text-transparent font-bold"> Web Designer</span>. {/*text-transparent is needed for the gradient to show up*/}
          </h2>


        </div>

        <div className="max-md:hidden absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer">
         
          <FontAwesomeIcon icon={faChevronDown} className=" hover:text-beige-500 transition animate-bounce text-5xl" onClick={() => scrollToSection(featuredRef)} />
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:col-span-4 xl:col-span-4 pt-10 overflow-x-hidden">
        <div className="mx-auto space-y-2 mt-10 sm:col-span-4 md:col-span-4 lg:col-span-4 xl:col-span-4 mb-10">
          <h2 className="sm:text-2xl md:text-4xl lg:text-4xl xl:text-6xl text-center" ref={featuredRef}
            id="feature">featured work</h2>
          <hr className="border-t-2 border-black mt-2 " />
        </div>


        <div className="sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2 gap-4">
          <Link to="projects/monster">
            <img src={featuredproject4} className="xl:w-full xl:h-auto" alt="Monster Hunter API project" data-aos="fade-right" data-aos-anchor-placement="top-bottom" description="CTA that leads the user to one of my projects, Lelem Natural Park, a collaborative and front-end development project." />
          </Link>
        </div>

        <div className="md:pl-3 lg:p-5 sm:col-span-4 md:col-span-2 lg:col-span-2 xl:col-span-2 flex flex-col justify-center" data-aos="fade-right">
          <h1 className='sm:text-xl md:text-md lg:text-3xl xl:text-6xl mb-5 sm:px-5 md:px-0'>Monster Hunter World database</h1>
          <p className='sm:text-sm md:text-sm lg:text-lg xl:text-4xl mb-5 sm:px-5 md:px-0'>search and favorite items using the Monster Hunter API.</p>
          <div className='flex gap-5 sm:mb-5 sm:px-5 md:px-0'>
            <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border rounded-sm border-black bg-beige-100'>HTML</p>
            <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border rounded-sm border-black bg-beige-100'>CSS</p>
            <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border rounded-sm border-black bg-beige-100'>JAVASCRIPT</p>
            <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border rounded-sm border-black bg-beige-100'>REACT</p>
            <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border rounded-sm border-black bg-beige-100'>API</p>
          </div>

        </div>

        <div className="md:pr-3 lg:p-5 sm:col-span-4 md:col-span-2 flex flex-col justify-center sm:order-2 md:order-1" data-aos="fade-left">
          <h1 className="sm:text-xl md:text-md lg:text-3xl xl:text-6xl mb-5 sm:text-left md:text-right lg:text-right sm:px-5 md:px-0">styles by jao</h1>
          <p className="sm:text-sm md:text-sm lg:text-lg xl:text-4xl mb-5 sm:text-left md:text-right lg:text-right sm:px-5 md:px-0">virtually try on clothes and browse in styles, a streetwear store app.</p>
          <div className='flex gap-5 sm:mb-5 sm:justify-start md:justify-end lg:justify-end sm:px-5 md:px-0'>
            <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border rounded-sm border-black bg-beige-100'>UI</p>
            <p className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border rounded-sm border-black bg-beige-100'>UX</p>
          </div>
        </div>

        <div className="sm:col-span-4 md:col-span-2 gap-4 sm:order-1 md:order-2">
          <Link to="projects/styles" className="relative group">
            <img src={featuredproject2} className="xl:w-full xl:h-auto" alt="Styles" data-aos="fade-left" data-aos-anchor-placement="top-bottom" description="CTA that leads the user to one of my projects, Styles, a UI/UX focused project." />
          </Link>
        </div>
      </div>

    </>
  )
}

export default Home