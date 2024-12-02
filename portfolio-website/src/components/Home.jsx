import React from "react";
import MediaQuery from 'react-responsive';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init(); // we have to initialize aos in the code or else the animations won't work
import homepolaroid from '/src/assets/homepolaroid.jpg'; //I imported these images because this is the only fix (so far) for my images to show on the web 
import featuredproject1 from '/src/assets/featuredprojects1.jpg';
import featuredproject2 from '/src/assets/featuredprojects2.jpg';
import {  Link } from "react-router-dom";

import "../App.css";


function Home(){

    return(
      <>
      <MediaQuery minWidth={769}> {/*react responsive is a package that allows media queries in react and without using it in a traditional css **IMPORTANT NOTE** at the time of commenting and handing this assignment in, I just found out that react-responsive is not really needed since tailwind is already responsive with sm/md/lg, and I will change this on my actual portfolio in the future, but I'll leave it in due to time constraints.*/}
        <div className="flex flex-col  items-center justify-center ">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4  items-start pt-10">
        <div className="container mx-auto pt-10 md:col-span-3 flex-grow mt-10">
       
        
          <h1 className="text-5xl" data-aos="fade-left">
          Hello,I'm<span className="bg-gradient-to-r from-beige-300 to-beige-500 bg-clip-text text-transparent font-bold"> Jose</span>. {/*text-transparent is needed for the gradient to show up*/}
          </h1>
        
          <p className="text-2xl mt-5 max-w-3xl" data-aos="fade-right">
            I'm a UI/UX designer and front-end developer located in the expensive city of Vancouver, BC. My aim is to create passionate and meaningful solutions with my clients/company.
          </p>
          </div>
          <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1" data-aos="flip-left">
                
                <img src={homepolaroid} className="rounded-sm object-cover w-full h-80 "/>
                  <p className="mt-2">Hi there!</p>
                </div>
          
          <div className="mx-auto space-y-2 max-w-screen-lg mt-10 md:col-span-4">
          <h2 className="text-3xl text-center">Featured Projects</h2>
          <hr className="border-t-2 border-black  mt-2 mb-4" />
          <Link to="projects/lelem" className="relative group">
          <img src={featuredproject1} alt="Lelem Natural Park" className="border rounded-3xl mt-5 transition duration-300 ease-in-out" data-aos="flip-right"/>
          <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition duration-300 text-black bg-gradient-to-t from-beige-50 via-transparent to-transparent"> {/* group-hover allow the parent element that was defined with group to be fully opaque when hovered, and via transparent is the middle of the gradient being transparent,and from-beige-50/ to transparent starts and ends the gradient*/}
            <div className="p-5 text-center">
              <h1 className="text-3xl">Lelem Natural Park</h1>
              <p className="text-md mt-2">Front End Development & team collaboration</p>
            </div>
          </div>
          </Link>
          
          <Link to ="projects/styles" className="relative group">
          <img src={featuredproject2} alt="Styles" className=" rounded-3xl mt-5 transition duration-300 ease-in-out" data-aos="flip-right" />
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
    </MediaQuery> 

  <MediaQuery maxWidth={768}>
  <div className="flex flex-col items-center justify-center ">
        <div className="max-w-screen-lg mx-auto grid grid-cols-4 items-start pt-10">
        <div className="pt-10 col-span-2 flex-grow mt-10">
          <h1 className="text-2xl" data-aos="fade-left">
          Hello,I'm<span class="bg-gradient-to-r from-beige-300 to-beige-500 bg-clip-text text-transparent font-bold"> Jose</span>.
          </h1>
          
          <p className="text-md mt-5 " data-aos="fade-right"> {/* data-aos=fade-right allows for the animation to happen*/}
            I'm a UI/UX designer and front-end developer located in the expensive city of Vancouver, BC. My aim is to create passionate and meaningful solutions with my clients/company.
          </p>
          </div>
          <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center col-span-2" data-aos="flip-left">
                <img src={homepolaroid} alt="Jose" className="rounded-sm object-cover w-full h-80 "/>
                  <p className="mt-2">Hi there!</p>
                </div>
                </div>
                
          <div className="mx-auto space-y-2 max-w-screen-lg mt-10">
          <h2 className="text-3xl text-center">Featured Projects</h2>
          <hr className="border-t-2 border-black  mt-2 mb-4" />

          <Link to="projects/lelem" className="relative group">
          <img src={featuredproject1} alt="Lelem Natural Park" className="border rounded-3xl mt-5 transition duration-300 ease-in-out group-hover:scale-105" data-aos="flip-right"/>
          <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black bg-gradient-to-t from-beige-50 via-transparent to-transparent">
            <div className="p-5 text-center">
              <h1 className="text-xl">Lelem Natural Park</h1>
              <p className="text-sm mt-2">Front End Development & team collaboration</p>
            </div>
          </div>
          </Link>
          
          <Link to ="projects/styles" className="relative group w-full">
          <img src={featuredproject2} alt="Styles" className="border rounded-3xl mt-5 transition duration-300 ease-in-out group-hover:scale-105" data-aos="flip-right" />
          <div className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black bg-gradient-to-t from-beige-50 via-transparent to-transparent">
            <div className="p-5 text-center">
              <h1 className="text-xl">styles by jao</h1>
              <p className="text-sm mt-2">UI/UX development</p>
            </div>
          </div>
          </Link>
          </div>
    </div>

    </MediaQuery>
    </>
    )
}

export default Home