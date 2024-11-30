import React from "react";
import MediaQuery from "react-responsive";
import jose from '/src/assets/jose.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();

function AboutMe(){
  return(
      <>
      <MediaQuery minWidth={769}>
      <div className="flex items-center justify-center ">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

          <div className="md:col-span-3 space-y-4">
            <h1 className=" text-3xl font-bold">
              Hi, I'm Jose!
            </h1>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <p data-aos="zoom-in">
              I'm a Front-end developer and UI/UX designer  currently residing in Vancouver, BC.
            </p>
            <p data-aos="zoom-in">
              I've always loved analyzing the nuances behind many things. Whether it be media, art, UI, or just about anything, I've found joy in how design influences the perception and interaction of people.
            </p>
            <p data-aos="zoom-in">
              Wanting to embrace my creative side, I took on the New Media Design and Web Development Course at BCIT.
            </p>
            <p data-aos="zoom-in">
              From there, my goal is to create solutions that are made with passion and aesthetically pleasing.
            </p>
          </div>
          
              <div className="flex justify-center md:justify-end">
                <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center" data-aos="flip-left">
                  <img src={jose} className="mb-2 rounded-sm object-cover w-full h-64"/>
                  <p className="mt-2 font-medium">Jao</p>
                </div>
              </div>
    
        </div>
        </div>      
              <div className="w-full bg-beige-200 py-10 mt-10">
                <div className="max-w-screen-lg mx-auto space-y-4 p-4">
                  <h1 className=" text-3xl font-bold">
                  When I’m not working, I’m most likely..
                  </h1>
                  <hr className="border-t-2 border-black  mt-2 mb-4" />
               

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"> {/* grid-col-4 sets the grids, and col span sets how much of the div element covers the grid. In this case, since I have 4 polaroids, they all span the column once.*/}
             
                <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1" data-aos="flip-left">
                   <p className="text-9xl flex items-center justify-center h-64 bg-light-grey">🎧</p> 
                  <p className="mt-2 font-medium">Listening to music </p>
                  </div>
      
                
              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1" data-aos="flip-left">
                
                   <p className="text-9xl flex items-center justify-center h-64 bg-light-grey">🎮</p> 
                  <p className="mt-2 font-medium ">Gaming </p>
                </div>
              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1" data-aos="flip-left">
                
                   <p className="text-9xl flex items-center justify-center h-64 bg-light-grey">🏋️</p> 
                  <p className="mt-2 font-medium ">Going to the gym</p>
                </div>
              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1" data-aos="flip-left" >
                
                   <p className="text-9xl flex items-center justify-center h-64 bg-light-grey">✍️</p> 
                  <p className="mt-2 font-medium">Writing</p>
                  </div>
                </div>
                </div>
                </div>
                </MediaQuery>

                <MediaQuery maxWidth={768}>
        <div className="flex flex-col items-center p-4 space-y-8">

          <div className="space-y-4 text-center">
            <h1 className="text-2xl font-bold">Hi, I'm Jose!</h1>
            <hr className="border-t-2 border-black mx-auto w-1/2 mt-2 mb-4" />
            <p className="text-base">
              I'm a UI/UX designer and Front-end developer currently residing in Vancouver, BC.
            </p>
            <p className="text-sm">
              I've always loved analyzing the nuances behind many things. Whether it be media, art, UI, or just about
              anything, I've found joy in how design influences the perception and interaction of people.
            </p>
            <p className="text-sm">
              Wanting to embrace my creative side, I took on the New Media Design and Web Development Course at BCIT.
            </p>
            <p className="text-sm">
              From there, my goal is to create solutions that are made with passion and aesthetically pleasing.
            </p>
          </div>

  
          <div className="flex justify-center">
            <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center">
              <img
                src="src/assets/jose.jpg"
                className="mb-2 rounded-sm object-cover w-48 h-48"
                alt="Jose"
              />
              <p className="mt-2 font-medium">Jao</p>
            </div>
          </div>

   
          <div className="w-full bg-beige-200 py-6">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-center">When I’m not working, I’m most likely..</h1>
              <hr className="border-t-2 border-black mx-auto w-1/2 mt-2 mb-4" />
              <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1 ">
                
                   <p className="text-4xl flex items-center justify-center h-32 bg-light-grey">📝</p> 
                  <p className="mt-2 font-medium">Listening to music </p>
                </div>
              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1 ">
                
                   <p className="text-4xl flex items-center justify-center h-32 bg-light-grey">🎮</p> 
                  <p className="mt-2 font-medium">Gaming </p>
                </div>
              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1 ">
                
                   <p className="text-4xl flex items-center justify-center h-32 bg-light-grey">🏋️</p> 
                  <p className="mt-2 font-medium">Going to the gym</p>
                </div>
              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1 ">
                
                   <p className="text-4xl flex items-center justify-center h-32 bg-light-grey">✍️</p> 
                  <p className="mt-2 font-medium">Writing</p>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </MediaQuery>
                </>
      
       
      

  )
}

export default AboutMe;