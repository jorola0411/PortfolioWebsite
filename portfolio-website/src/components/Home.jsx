import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init(); // we have to initialize aos in the code or else the animations won't work
import homepolaroid from '/src/assets/homepolaroid.jpg'; //I imported these images because this is the only fix (so far) for my images to show on the web 
import featuredproject1 from '/src/assets/featuredprojects1.jpg';
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


      <div className="flex flex-col items-center justify-center sm:px-4">
        <div className="max-w-[80%] mx-auto grid grid-cols-1  sm:grid-cols-4 md:grid-cols-4 items-start pt-10">

          <div className="container mx-auto pt-10 sm:col-span-2 md:col-span-3 flex-grow mt-10">
            <h1 className="md:text-5xl sm:text-2xl" data-aos="fade-left">
              Hello,I'm<span className="bg-gradient-to-r from-beige-300 to-beige-500 bg-clip-text text-transparent font-bold"> Jose</span>. {/*text-transparent is needed for the gradient to show up*/}
            </h1>

            <p className="md:text-2xl sm:text-md mt-5 max-w-3xl" data-aos="fade-right">
              I'm a <span className="bg-gradient-to-r from-beige-400 to-beige-500 bg-clip-text text-transparent font-bold">UI/UX designer</span> and <span className="bg-gradient-to-r from-beige-400 to-beige-500 bg-clip-text text-transparent font-bold">Front-End developer</span> located in the expensive city of Vancouver, BC. My aim is to create passionate and meaningful solutions with my clients/company.
            </p>
          </div>

          <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center sm:col-span-2 md:col-span-1 " data-aos="flip-left">
            <img src={homepolaroid} className="relative rounded-sm object-cover w-full h-80" alt="Jose Home Polaroid" description="Small picture featuring me, as a quick visual introduction beside the written description." />
            <p className="mt-2">Hi there!</p>
          </div>

          <div className="mx-auto space-y-2  mt-10 sm:col-span-4 md:col-span-4">
            <h2 className="md:text-4xl sm:text-2xl text-center">Featured Projects</h2>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <Link to="projects/lelem" className="relative group">
              <img src={featuredproject1} alt="Lelem Natural Park" className="border rounded-3xl mt-5 transition duration-300 ease-in-out" data-aos="flip-right" data-aos-anchor-placement="top-bottom" description="CTA that leads the user to one of my projects, Lelem Natural Park, a collaborative and front-end development project." />

              <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition duration-300 text-black bg-gradient-to-t from-beige-50 via-transparent to-transparent"> {/* group-hover allow the parent element that was defined with group to be fully opaque when hovered, and via transparent is the middle of the gradient being transparent,and from-beige-50/ to transparent starts and ends the gradient*/}
                <div className="p-5 text-center">
                  <h1 className="text-3xl">Lelem Natural Park</h1>
                  <p className="text-md mt-2">Front End Development & team collaboration</p>
                </div>
              </div>
            </Link>

            <Link to="projects/styles" className="relative group">
              <img src={featuredproject2} alt="Styles" className=" rounded-3xl mt-5 transition duration-300 ease-in-out" data-aos="flip-right" data-aos-anchor-placement="top-bottom" description="CTA that leads the user to one of my projects, Styles, a UI/UX focused project." />
              <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition duration-300 text-black bg-gradient-to-t from-beige-50 via-transparent to-transparent">
                <div className="p-5 text-center">
                  <h1 className="text-3xl">styles by jao</h1>
                  <p className="text-md mt-2">UI/UX development</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home