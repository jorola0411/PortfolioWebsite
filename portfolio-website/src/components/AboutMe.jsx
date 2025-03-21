import React, { useEffect } from 'react';
import jose from '/src/assets/jose.jpg';
import css3 from '/src/assets/CSS3_logo.svg';
import reactlogo from '/src/assets/React-icon.svg';
import figma from '/src/assets/Figma-logo.svg';
import jslogo from '/src/assets/jslogo.svg';
import html5 from '/src/assets/HTML5.svg';
import python from '/src/assets/python.svg';
import illustrator from '/src/assets/illustrator.svg';
import photoshop from '/src/assets/photoshop.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();

function AboutMe() {

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

      <title>About Me - Jose Orola </title>

      <meta name="description" content="I'm a Front-end developer and UI/UX designer currently residing in Vancouver, BC.
        I've always loved analyzing the nuances behind many things. Whether it be media, art, UI, or just about anything, I've found joy in how design influences the perception and interaction of people.
        Wanting to embrace my creative side, I took on the New Media Design and Web Development Course at BCIT.
        From there, my goal is to create solutions that are made with passion and aesthetically pleasing." />

      <meta name="keywords" content="Jose, UI/UX Designer, Front-End Developer, Vancouver, Design, Web Development, User Interface Designer, User Experience Designer, Portfolio" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="About Me - Jose Orola" />
      <meta property="og:description" content="I'm Jose, a UI/UX designer and front-end developer based in Vancouver, BC. I create passionate and meaningful solutions with my clients." />
      <meta property="og:url" content="https://joseorola.ca/about" />

      <meta name="twitter:title" content="About Me - Jose Orola" />
      <meta name="twitter:description" content="Learn more about Jose Orola, a UI/UX designer and front-end developer based in Vancouver, BC. Learn more about his hobbies, and why he's persuing the industry." />
      <meta name="twitter:url" content="https://joseorola.ca/about" />


      <div className="flex items-center justify-center sm:px-4">
        <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

          <div className="md:col-span-3 space-y-4">
            <h1 className="sm:text-2xl md:text-3xl font-bold">
              Hi, I'm Jose!
            </h1>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <p className="sm:text-md md:text-lg xl:text-2xl" data-aos="zoom-in">
              I'm a Front-end developer and UI/UX designer currently residing in Vancouver, BC.
            </p>
            <p className="sm:text-md md:text-lg xl:text-2xl" data-aos="zoom-in">
              I've always loved analyzing the nuances behind many things. Whether it be media, art, UI, or just about anything, I've found joy in how design influences the perception and interaction of people.
            </p>
            <p className="sm:text-md md:text-lg xl:text-2xl" data-aos="zoom-in">
              Wanting to embrace my creative side, I took on the New Media Design and Web Development Course at BCIT.
            </p>
            <p className="sm:text-md md:text-lg xl:text-2xl" data-aos="zoom-in">
              From there, my goal is to create solutions that are made with passion and aesthetically pleasing.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center" data-aos="flip-left" data-aos-anchor-placement="top-bottom">
              <img src={jose} alt="Jose" className="mb-2 rounded-sm object-cover w-full h-64" />
              <p className="mt-2 font-medium">Jao</p>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full bg-beige-200 py-10 mt-10">
        <div className="max-w-[80%] mx-auto space-y-4 p-4">
          <h1 className="sm:text-2xl md:text-3xl font-bold">
            When I’m not working, I’m most likely..
          </h1>
          <hr className="border-t-2 border-black  mt-2 mb-4" />


          <div className="grid sm:grid-rows-3  md:grid-rows-none md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4"> {/* grid-col-4 sets the grids, and col span sets how much of the div element covers the grid. In this case, since I have 4 polaroids, they all span the column once.*/}

            <div className="text-center sm:row-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 group" data-aos="flip-left" data-aos-anchor-placement="top-bottom">
              <div className="relative">
                <p className="sm:text-6xl md:text-7xl lg:text-9xl xl:text-9xl flex items-center justify-center sm:h-32 lg:h-64 bg-light-grey">🎧</p>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-left text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
                  <p className="md:text-md sm:text-sm xl:text-2xl">Music helps me focus on my work and relax when things are hectic. In my current rotation, I'm playing some DPR Ian, Kendrick Lamar, and kpop.</p>
                </div>
              </div>
              <p className="sm:text-sm md:text-md lg:text-md xl:text-2xl mt-2 font-medium">Listening to music </p>
            </div>

            <div className="text-center sm:row-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 group" data-aos="flip-left" data-aos-anchor-placement="top-bottom" >
              <div className="relative">
                <p className="sm:text-6xl md:text-7xl lg:text-9xl xl:text-9xl flex items-center justify-center sm:h-32 lg:h-64 bg-light-grey">🎮</p>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-left text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
                  <p className="md:text-md sm:text-sm xl:text-2xl">I've been a avid gamer since I was 4, and it's been a huge influence in my life. I love the design of various aspects of video games as a whole, and from a UI perspective, video games offer many creative ways to implement UI for the user.</p>
                </div>
              </div>
              <p className="sm:text-sm md:text-md lg:text-md xl:text-2xl mt-2 font-medium">Gaming </p>
            </div>

            <div className="sm:row-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1 group" data-aos="flip-left" data-aos-anchor-placement="top-bottom">
              <div className="relative">
                <p className="sm:text-6xl md:text-7xl lg:text-9xl xl:text-9xl flex items-center justify-center sm:h-32  lg:h-64 bg-light-grey">🏋️</p>
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-left text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
                  <p className="md:text-md sm:text-sm xl:text-2xl">In my free time, I also love going to the gym, as it keeps my physical body active, and also acts as mental therapy. Got to keep both the mind and body healthy!</p>
                </div>
              </div>
              <p className="sm:text-sm md:text-md lg:text-md xl:text-2xl mt-2 font-medium text-center">Going to the gym</p>
            </div>

          </div>
        </div>

      </div>
      <div className="w-full bg-beige-200 py-10 mt-10">
        <div className="max-w-[80%] mx-auto space-y-4 p-4">
          <h1 className="sm:text-2xl md:text-3xl font-bold">
            Tools
          </h1>
          <hr className="border-t-2 border-black  mt-2 mb-4" />

          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4"> {/* grid-col-4 sets the grids, and col span sets how much of the div element covers the grid. In this case, since I have 4 polaroids, they all span the column once.*/}

            <div className="text-center md:col-span-1 group" data-aos="flip-left" data-aos-anchor-placement="top-bottom" >
              <div className="relative flex justify-center items-center">
                <img src={html5} alt="html5 logo" className="mb-2 rounded-sm object-contain sm:h-24 md:h-32 lg:h-32 xl:h-48" />
              </div>
              <p className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl mt-2 font-medium">HTML5</p>
            </div>

            <div className="text-center md:col-span-1 group" data-aos="flip-left" data-aos-anchor-placement="top-bottom">
              <div className="relative flex justify-center items-center">
                <img src={css3} alt="css3 logo" className="mb-2 rounded-sm object-contain sm:h-24 md:h-32 lg:h-32 xl:h-48" />
              </div>
              <p className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl mt-2 font-medium">CSS</p>
            </div>

            <div className="text-center md:col-span-1 group" data-aos="flip-left" data-aos-anchor-placement="top-bottom">
              <div className="relative flex justify-center items-center">
                <img src={jslogo} alt="javascript logo" className="mb-2 rounded-sm object-contain sm:h-24 md:h-32 lg:h-32 xl:h-48" />
              </div>
              <p className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl mt-2 font-medium">Javascript </p>
            </div>

            <div className="text-center md:col-span-1 group" data-aos="flip-left" data-aos-anchor-placement="top-bottom" >
              <div className="relative flex justify-center items-center">
                <img src={reactlogo} alt="react logo" className="mb-2 rounded-sm object-contain sm:h-24 md:h-32 lg:h-32 xl:h-48" />
              </div>
              <p className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl mt-2 font-medium">React.js </p>
            </div>

            <div className="text-center md:col-span-1 group" data-aos="flip-left" data-aos-anchor-placement="top-bottom">
              <div className="relative flex justify-center items-center">
                <img src={figma} alt="figma logo" className="mb-2 rounded-sm object-contain sm:h-24 md:h-32 lg:h-32 xl:h-48" />
              </div>
              <p className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl mt-2 font-medium">Figma</p>
            </div>

            <div className="text-center md:col-span-1 group" data-aos="flip-left" data-aos-anchor-placement="top-bottom">
              <div className="relative flex justify-center items-center">
                <img src={python} alt="python logo" className="mb-2 rounded-sm object-contain sm:h-24 md:h-32 lg:h-32 xl:h-48" />
              </div>
              <p className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl mt-2 font-medium">Python</p>
            </div>

            <div className="text-center md:col-span-1 group" data-aos="flip-left" data-aos-anchor-placement="top-bottom">
              <div className="relative flex justify-center items-center">
                <img src={illustrator} alt="illustrator logo" className="mb-2 rounded-sm object-contain sm:h-24 md:h-32 lg:h-32 xl:h-48" />
              </div>
              <p className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl mt-2 font-medium">Adobe Illustrator</p>
            </div>

            <div className="text-center md:col-span-1 group" data-aos="flip-left" data-aos-anchor-placement="top-bottom">
              <div className="relative flex justify-center items-center">
                <img src={photoshop} alt="photoshop logo" className="mb-2 rounded-sm object-contain sm:h-24 md:h-32 lg:h-32 xl:h-48" />
              </div>
              <p className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl mt-2 font-medium">Adobe Photoshop</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe;