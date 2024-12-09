import React from "react";
import jose from '/src/assets/jose.jpg';
import AOS from 'aos';
import { motion } from "framer-motion";
import 'aos/dist/aos.css'; 
// ..
AOS.init();

function AboutMe(){
  return(
      <>
      
      <div className="flex items-center justify-center sm:px-4">
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

            <div className="md:col-span-3 space-y-4">
              <h1 className="sm:text-2xl md:text-3xl font-bold">
                Hi, I'm Jose!
              </h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <p className="sm:text-md" data-aos="zoom-in">
                I'm a Front-end developer and UI/UX designer  currently residing in Vancouver, BC.
              </p>
              <p className="sm:text-md" data-aos="zoom-in">
                I've always loved analyzing the nuances behind many things. Whether it be media, art, UI, or just about anything, I've found joy in how design influences the perception and interaction of people.
              </p>
              <p className="sm:text-md" data-aos="zoom-in">
                Wanting to embrace my creative side, I took on the New Media Design and Web Development Course at BCIT.
              </p>
              <p className="sm:text-md" data-aos="zoom-in">
                From there, my goal is to create solutions that are made with passion and aesthetically pleasing.
              </p>
            </div>
            
                <div className="flex justify-center md:justify-end">
                  <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center" data-aos="flip-left">
                    <img src={jose} alt="Jose" className="mb-2 rounded-sm object-cover w-full h-64"/>
                    <p className="mt-2 font-medium">Jao</p>
                  </div>
                </div>
      
          </div>
      </div>  

      <div className="w-full bg-beige-200 py-10 mt-10">
        <div className="max-w-screen-lg mx-auto space-y-4 p-4">
          <h1 className="sm:text-2xl md:text-3xl font-bold">
          When I’m not working, I’m most likely..
          </h1>
          <hr className="border-t-2 border-black  mt-2 mb-4" />
        

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"> {/* grid-col-4 sets the grids, and col span sets how much of the div element covers the grid. In this case, since I have 4 polaroids, they all span the column once.*/}
          
          <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1 group" data-aos="flip-left">
            <div className="relative">
              <p className="text-9xl flex items-center justify-center h-64 bg-light-grey">🎧</p> 
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-left text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
              <p className="md:text-md sm:text-sm">Music has helps me focus on my work and relax when things are hectic. In my current rotation, I'm playing some DPR Ian, Kendrick Lamar, and kpop.</p>
              </div>
              </div>
            <p className="mt-2 font-medium">Listening to music </p>
          </div>
            
          <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1 group" data-aos="flip-left">
            <div className="relative">
              <p className="text-9xl flex items-center justify-center h-64 bg-light-grey">🎮</p> 
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-left text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
              <p className="md:text-md sm:text-sm">I've been a avid gamer since I was 4, and it's been a huge influence in my life. I love the design of various aspects of video games as a whole, and from a UI perspective, video games offer more than enough ways to show interesting ways to implement UI for the user.</p>
              </div>
            </div>
            <p className="mt-2 font-medium">Gaming </p>
          </div>

          <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1 group" data-aos="flip-left">
            <div className="relative">
              <p className="text-9xl flex items-center justify-center h-64 bg-light-grey">🏋️</p> 
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-left text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
              <p className="md:text-md sm:text-sm">In my free time, I also love going to the gym, as it keeps my physical body active, and also acts as mental therapy. Got to keep both the mind and body healthy!</p>
              </div>
            </div>
            <p className="mt-2 font-medium ">Going to the gym</p>
          </div>

          <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1 group" data-aos="flip-left" >
            <div className="relative">
              <p className="text-9xl flex items-center justify-center h-64 bg-light-grey">✍️</p> 
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-left text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
              <p className="md:text-md sm:text-sm"> While not as often, sometimes I write! If I have</p>
              </div>
            </div>
            <p className="mt-2 font-medium">Writing</p>
          </div>
      </div>
      </div>
      </div>
      </> 
  )
}

export default AboutMe;