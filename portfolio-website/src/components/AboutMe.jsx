import React, { useState, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faBrain, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import baby from '../assets/baby.jpg'
import wrapped from '../assets/wrapped.jpg'
import asher from '../assets/asher.jpg'
import concert from '../assets/concert.jpg'
import html from '../assets/HTML5.svg'
import css from '../assets/CSS3_logo.svg'
import tailwind from '../assets/tailwind.svg'
import js from '../assets/jslogo.svg'
import reactlogo from '../assets/React-icon.svg'
import figma from '../assets/Figma-logo.svg'
import photoshop from '../assets/photoshop.svg'
import illustrator from '../assets/illustrator.svg'
import aftereffects from '../assets/aftereffects.svg'
import python from '../assets/python.svg'

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function AboutMe() {

  const [flip1, setFlip1] = useState(true);
  const [flip2, setFlip2] = useState(true);
  const [flip3, setFlip3] = useState(true);
  const sectionsRef = useRef([]);
  const paragraphs = [
    "coding is weird. bugs happen, languages are complicated, and sometimes, debugging takes longer than it needs to be. and it's frustrating at times.",
    "but the frustration is worth it; when it works, it's like seeing all the pieces fit together like a puzzle.",
    "i code because it's an outlet that brings my ideas to life. understanding the logic, connecting code together, and creating something, it's rewarding.",
  ];
  useEffect(() => {
    sectionsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el.querySelector("p"),
        { opacity: 0, y: 50, text: "" },
        {
          opacity: 1,
          y: 0,
          text: paragraphs[index],
          ease: "none",
          duration: 1.5,
          scrollTrigger: {
            trigger: el,
            start: "top center",

            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const mainskills = [

    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "Tailwind", img: tailwind },
    { name: "JavaScript", img: js },
    { name: "React", img: reactlogo },
    { name: "Figma", img: figma },
  ];
  const otherskills = [

    { name: "Photoshop", img: photoshop },
    { name: "Illustrator", img: illustrator },
    { name: "After Effects", img: aftereffects },
    { name: "Python", img: python },

  ];

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





      <section className="w-full bg-beige-200 py-10 lg:mt-15">
        <div className='grid sm:grid-cols-3 lg:grid-cols-3 mx-auto gap-5 max-w-[80%]'>
          <h1 className='sm:text-5xl lg:text-8xl xl:text-9xl text-center col-span-3 lg:mb-10' data-aos="fade-down">hello again, i'm <span className='font-bold text-beige-500'>Jose</span>.</h1>
          <h2 className='sm:text-2xl lg:text-5xl xl:text-6xl text-center col-span-3' data-aos="fade-down"> the tldr:</h2>

          <ul className='sm:col-span-3 lg:col-span-2 list-disc pl-4 justify-center flex flex-col' data-aos="fade-right">
            <li className='sm:text-md md:text-lg lg:text-xl xl:text-3xl mb-5'>as a child, i loved interacting and discovering new things. newest pieces of technology, latest video game and music releases, new ways to digitally interact, my environment has shaped me into who i am now, and i'm here as a designer. </li>
            <li className='sm:text-md md:text-lg lg:text-xl xl:text-3xl mb-5'>understanding why things are the way they are have been a core component of myself since i was a child, and has let me adapt, make intuitive designs, and be mindful of the world around me.  </li>
            <li className='sm:text-md md:text-lg lg:text-xl xl:text-3xl mb-5'>i work with html, css/tailwind, javascript, and react. </li>
            <li className='sm:text-md md:text-lg lg:text-xl xl:text-3xl mb-5'>i find joy in coding and designing because its a gateway for me to create something satisfying. everything comes together.</li>
          </ul>
          <img src={baby} className='sm:col-span-3 lg:col-span-1' data-aos="fade-left" />

        </div>
      </section >

      <section className="w-full bg-beige-200 py-10 lg:mt-15">
        <div className="lg:max-w-[75%] mx-auto  p-4">

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-4 mt-6 mb-5">
            <h1 className='text-center sm:text-5xl lg:text-8xl  xl:text-9xl sm:col-span-2 md:col-span-6 lg:col-span-6 mb-5'>here's what i (usually) work with.</h1>
            {mainskills.map((mainskills) => (
              <div className='sm:col-span-1 md:col-span-1'>
                <img
                  src={mainskills.img}
                  alt={mainskills.name}
                  className="sm:w-18 sm:h-18 md:h-24 md:w-24 lg:w-32 lg:h-32 xl:h-48 xl:w-48 justify-center items-center mx-auto"
                />
                <p className="text-center mt-2 sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
                  {mainskills.name}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 mb-5">
            <h1 className='text-center sm:text-3xl lg:text-5xl xl:text-6xl sm:col-span-2 md:col-span-6 lg:col-span-6 mb-5'>while not as much, i work with these as well.</h1>
            {otherskills.map((otherskills) => (
              <div className='sm:col-span-1 md:col-span-1'>
                <img
                  src={otherskills.img}
                  alt={otherskills.name}
                  className="sm:w-12 sm:h-12 md:h-12 md:w-12 lg:w-16 lg:h-16 xl:h-24 xl:w-24 justify-center items-center mx-auto"
                />
                <p className="text-center mt-2 sm:text-lg md:text-xl lg:text-2xl xl:text-4xl">
                  {otherskills.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </section>

      <section className="w-full bg-beige-200 py-10 lg:mt-15">
        <div className='grid sm:grid-cols-3  md:grid-cols-3 mx-auto px-4 gap-5 lg:max-w-[75%]'>
          <h1 className='text-center sm:text-5xl lg:text-8xl xl:text-9xl col-span-3'>values</h1>
          <h2 className='text-center sm:text-xl lg:text-2xl xl:text-3xl col-span-3 mb-5'>(click the cards!)</h2>

          <motion.div
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip1 ? 0 : 180 }}
            className="sm:col-span-3 md:col-span-1"
          >

            <motion.div
              transition={{ duration: 0.7 }}
              animate={{ rotateY: flip1 ? 0 : 180 }}
              className="card shadow-xl"

            >
              <button onClick={() => setFlip1((prevState) => !prevState)} className='cursor-pointer'>
                <motion.div
                  transition={{ duration: 0.7 }}
                  animate={{ rotateY: flip1 ? 0 : 180 }}
                  className="front"
                >

                  <h1 className='text-center sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl mx-auto justify-center'>intuitiveness.</h1>
                  <FontAwesomeIcon icon={faEye} className='sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl mt-5' />
                </motion.div>

                <motion.div
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: flip1 ? 180 : 0 }}
                  transition={{ duration: 0.7 }}
                  className="back"
                >
                  <p className='md:text-md sm:px-3 md:px-3 lg:text-lg xl:text-3xl'>
                    the best designs are the one you don't notice, correct?
                    i will make it my priority for *everything* to make sense.
                  </p>
                </motion.div>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip2 ? 0 : 180 }}
            className="sm:col-span-3 md:col-span-1"
          >

            <motion.div
              transition={{ duration: 0.7 }}
              animate={{ rotateY: flip2 ? 0 : 180 }}
              className="card shadow-xl"
            >
              <button onClick={() => setFlip2((prevState) => !prevState)} className='cursor-pointer'>
                <motion.div
                  transition={{ duration: 0.7 }}
                  animate={{ rotateY: flip2 ? 0 : 180 }}
                  className="front"
                >
                  <h1 className='text-center sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl col-span-3'>adaptability.</h1>
                  <FontAwesomeIcon icon={faBrain} className='sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl mt-5' />
                </motion.div>
                <motion.div
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: flip2 ? 180 : 0 }}
                  transition={{ duration: 0.7 }}
                  className="back"
                >

                  <p className='md:text-md sm:px-3 md:px-3 lg:text-lg xl:text-3xl px-3'>
                    i will always be willing to hear what you have in store for me, and i'll cater my approaches to your needs. a win win for the both of us.
                  </p>
                </motion.div>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip3 ? 0 : 180 }}
            className="sm:col-span-3 md:col-span-1"
          >

            <motion.div
              transition={{ duration: 0.7 }}
              animate={{ rotateY: flip3 ? 0 : 180 }}
              className="card shadow-2xl"
            >
              <button onClick={() => setFlip3((prevState) => !prevState)} className='cursor-pointer'>
                <motion.div
                  transition={{ duration: 0.7 }}
                  animate={{ rotateY: flip3 ? 0 : 180 }}
                  className="front "
                >
                  <h1 className='text-center sm:text-xl md:text-2xl lg:text-5xl xl:text-6xl col-span-3'>having fun.</h1>
                  <FontAwesomeIcon icon={faFaceSmile} className='sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl mt-5' />
                </motion.div>
                <motion.div
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: flip3 ? 180 : 0 }}
                  transition={{ duration: 0.7 }}
                  className="back"
                >
                  <p className='md:text-sm sm:px-3 md:px-3 lg:text-lg xl:text-3xl'>enjoying what I do allows me to work to the best of my ability. being professional is very important, but we could relax a bit from time to time. </p>
                </motion.div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>


      <div className='bg-beige-200 py-10 lg:mt-15'>
        <section className="min-h-screen flex items-center ">
          <h1 className="sm:text-2xl md:text-3xl lg:text-6xl xl:text-8xl sm:px-3 lg:px-10">
            question is, why front end development specifically?
          </h1>
        </section>
        {paragraphs.map((text, i) => (
          <section
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            className="min-h-screen flex items-center "
          >
            <p className=" sm:text-xl md:text-2xl lg:text-5xl xl:text-7xl  leading-tight sm:px-3 lg:px-10"></p>
          </section>
        ))}
      </div>


      <section>
        <div className='w-[90%] sm:max-w-[90%] lg:max-w-[75%] mx-auto'>

          <div className="py-6 md:py-8 lg:py-10 mt-4 md:mt-6 lg:mt-10">
            <h1 className=' sm:text-5xl lg:text-7xl xl:text-8xl text-center'>
              here's <span className='font-bold text-beige-500'>me</span> outside of work.
            </h1>
            <h2 className='text-center text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-3 md:mb-5'>
              (hover or tap the images & emojis!)
            </h2>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-4 lg:gap-2 mb-5'>

            <div className="w-full lg:row-span-2 group relative">
              <img src={asher} className='w-full h-full object-cover rounded-lg' alt="My corgi Asher" />
              <div className="absolute inset-0 bg-beige-200 bg-opacity-25 opacity-0 group-hover:opacity-95 active:opacity-95 transition duration-300 p-4 sm:p-3 md:p-6 lg:p-8 flex flex-col justify-center items-left text-black rounded-lg">
                <h3 className="text-xl md:text-xl lg:text-3xl mb-2 sm:mb-3">thats my corgi, Asher.</h3>
                <p className="text-base md:text-lg lg:text-xl mb-2 sm:mb-3">he will bark at any loud noise and pull sneak attacks on you.</p>
                <p className="text-base md:text-lg lg:text-xl">he'll try his best to distract me from my work as much as possible.</p>
              </div>
            </div>

            <div className='p-4 sm:p-3 bg-beige-200 rounded-lg shadow sm:col-auto lg:col-span-2 lg:col-start-2 lg:row-start-1'>
              <h1 className='text-2xl md:text-2xl lg:text-4xl xl:text-5xl mb-3'>listening and analyzing music</h1>
              <p className='text-base sm:text-sm md:text-lg lg:text-xl xl:text-3xl mb-2 lg:mb-4'>I am an avid music lover and listener, and I listen to music a little too much.</p>
              <p className='text-base sm:text-sm md:text-lg lg:text-xl xl:text-3xl mb-2 lg:mb-4'>I'm always open to exploring new genres and listening to the latest releases.</p>
              <p className='text-base sm:text-sm md:text-lg lg:text-xl xl:text-3xl'>send me your playlist and lets chat about that one artist you don't understand the hype for.</p>
            </div>

            <div className="aspect-square sm:aspect-auto sm:col-auto lg:col-start-2 lg:row-start-2 group relative">
              <div className='text-8xl sm:text-7xl lg:text-9xl flex items-center justify-center h-full bg-beige-100 rounded-lg'>🚶</div>
              <div className="absolute inset-0 bg-beige-200 bg-opacity-25 opacity-0 group-hover:opacity-95 active:opacity-95 transition duration-300 p-4 sm:p-3 lg:p-8 flex flex-col justify-center items-left text-black rounded-lg">
                <p className="text-base sm:text-sm md:text-md lg:text-xl">i like to go on nature walks! snapping pics and enjoying nature is very relaxing off work.</p>
              </div>
            </div>

            <div className="aspect-square sm:aspect-auto lg:row-span-2 lg:col-start-3 lg:row-start-2 group relative">
              <img src={concert} className='w-full h-full object-cover rounded-lg' alt="NIKI concert" />
              <div className="absolute inset-0 bg-beige-200 bg-opacity-25 opacity-0 group-hover:opacity-95 active:opacity-95 transition duration-300 p-4 sm:p-3 md:p-6 lg:p-8 flex flex-col justify-center items-left text-black rounded-lg">
                <h3 className="text-xl md:text-xl lg:text-3xl mb-2 sm:mb-3">i like to go concerts!</h3>
                <p className="text-base md:text-lg lg:text-xl mb-2 sm:mb-3">my goal for 2026 is to attend 1 concert per month!</p>
                <p className="text-base md:text-lg lg:text-xl mb-1">i've seen them live:</p>
                <ul className='list-disc pl-5 md:p-3'>
                  <li className='text-base sm:text-sm md:text-lg lg:text-xl'>Kendrick Lamar in 2017</li>
                  <li className='text-base sm:text-sm md:text-lg lg:text-xl'>Backstreet Boys in 2019</li>
                  <li className='text-base sm:text-sm md:text-lg lg:text-xl'>Tyler, the Creator in 2022</li>
                  <li className='text-base sm:text-sm md:text-lg lg:text-xl'>Nier orchestra, NIKI (pictured), Kiss of Life in 2024</li>
                  <li className='text-base sm:text-sm md:text-lg lg:text-xl'>ARTMS in 2025</li>
                </ul>
              </div>
            </div>

            <div className="aspect-square sm:aspect-auto lg:row-span-2 lg:col-start-4 lg:row-start-1 group relative">
              <img src={wrapped} className='w-full h-full object-cover rounded-lg' alt="Spotify wrapped" />
              <div className="absolute inset-0 bg-beige-200 bg-opacity-25 opacity-0 group-hover:opacity-95 active:opacity-95 transition duration-300 p-4 sm:p-3 md:p-6 lg:p-8 flex flex-col justify-center items-left text-black rounded-lg">
                <h3 className="text-xl md:text-xl lg:text-3xl mb-2 sm:mb-3">do you know how much 120,509 minutes is?</h3>
                <p className="text-base md:text-lg lg:text-xl mb-2 sm:mb-3">there's 525600 minutes in 1 year.</p>
                <p className="text-base md:text-lg lg:text-xl">doing some math, ive spent around 4 months of 2024 listening to music nonstop.</p>
              </div>
            </div>

            <div className='p-4 sm:p-3 bg-beige-200 rounded-lg shadow sm:col-auto lg:col-span-2 lg:col-start-1 lg:row-start-3'>
              <h1 className='text-2xl md:text-2xl lg:text-4xl xl:text-5xl mb-3'>relaxing in video games</h1>
              <p className='text-base sm:text-sm md:text-lg lg:text-xl xl:text-3xl mb-2 lg:mb-4'>if I feel it, I play video games to help me wind down after a long day, or wind up if I'm playing Marvel Rivals.</p>
              <p className='text-base sm:text-sm md:text-lg lg:text-xl xl:text-3xl'>video games are an avid part of my life, so let's talk about our favorite games together.</p>
            </div>

            <div className="aspect-square sm:aspect-auto lg:col-start-4 lg:row-start-3 sm:col-span-2 group relative">
              <div className='text-8xl sm:text-7xl lg:text-9xl flex items-center justify-center sm:h-32 md:h-full bg-beige-100 rounded-lg'>💪</div>
              <div className="absolute inset-0 bg-beige-200 bg-opacity-25 opacity-0 group-hover:opacity-95 active:opacity-95 transition duration-300 p-4 sm:p-3 lg:p-8 flex flex-col justify-center items-left text-black rounded-lg">
                <p className="text-base sm:text-sm md:text-lg lg:text-xl">i also weight lift to keep the body active. send me leg workouts!</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}