import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faEye, faBrain, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import baby from '../assets/baby.jpg'
import wrapped from '../assets/wrapped.jpg'
import favoritegame from '../assets/favoritegame.png'
import asher from '../assets/asher.jpg'
import concert from '../assets/concert.jpg'
import html from '../assets/HTML5.svg'
import tailwind from '../assets/tailwind.svg'
import js from '../assets/jslogo.svg'
import reactlogo from '../assets/React-icon.svg'
import figma from '../assets/Figma-logo.svg'


gsap.registerPlugin(ScrollTrigger, TextPlugin);



export default function AboutMe() {

  const jose1Ref = useRef(null);
  const jose2Ref = useRef(null);
  const [flip1, setFlip1] = useState(true);
  const [flip2, setFlip2] = useState(true);
  const [flip3, setFlip3] = useState(true);
  const sectionsRef = useRef([]);
  const paragraphs = [
    "you want me to be honest?",
    "coding is weird. bugs happen, languages are complicated, and sometimes, debugging takes longer than it needs to be. and it's frustrating at times.",
    "but it's that exact reason why i do it. when it works, it's like seeing all the pieces fit together like a puzzle.",
    "i code because it's an outlet that brings my ideas to life. it's a long process at times, but understanding the logic, connecting code together, and creating something, it's rewarding.",
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
          ease: "power2.out",
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

  const skills = [

    { name: "HTML", img: html },
    { name: "Tailwind", img: tailwind },
    { name: "JavaScript", img: js },
    { name: "React", img: reactlogo },
    { name: "Figma", img: figma },
  ];

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
    gsap.from(jose1Ref.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: jose1Ref.current,
        start: "top 80%",
      },
    });

    gsap.from(jose2Ref.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: jose2Ref.current,
        start: "top 80%",
      },
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


      <section className="h-screen flex flex-col justify-center  sm:px-4">
        <div>
          <div className='mx-auto flex items-center justify-between max-w-[75%]'>

            <div className="relative group flex flex-col items-center">
              <button className="sm:text-sm md:text-lg lg:text-8xl xl:text-3xl  cursor-pointer  transition duration-200 gap-10" onClick={() => scrollToSection(jose1Ref)}>
                Jose
              </button>
              <span className="absolute top-full w-60  lg:text-2xl mt-2 text-md  opacity-0 group-hover:opacity-100 transition-opacity z-10 text-center pointer-events-none">
                the one you want to hire.
              </span>
            </div>
            <h1 className='text-center lg:text-2xl'> I want to learn more about...</h1>
            <div className="relative group flex flex-col items-center">
              <button className="sm:text-sm md:text-lg lg:text-8xl xl:text-3xl cursor-pointer transition duration-200" onClick={() => scrollToSection(jose2Ref)}>
                Jao
              </button>
              <span className=" lg:text-2xl absolute top-full w-60 mt-2 text-md  opacity-0 group-hover:opacity-100 transition-opacity z-10 text-center pointer-events-none">
                the one outside of work.
              </span>
            </div>
          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer">

          <FontAwesomeIcon icon={faChevronDown} className=" hover:text-beige-500 transition animate-bounce text-5xl" onClick={() => scrollToSection(jose1Ref)} />
        </div>
      </section>


      <section
        ref={jose1Ref}
        id="jose"
        className="w-full bg-beige-200 py-10 mt-10"
      >
        <div className='grid grid-cols-3 mx-auto gap-5 max-w-[80%]'>
          <h1 className='text-8xl text-center col-span-3 mb-10'>hello, i'm jose.</h1>
          <h2 className='text-4xl text-center col-span-3'> the tldr:</h2>

          <ul className='col-span-2 list-disc  pl-4 justify-center flex flex-col'>
            <li className='lg:text-xl mb-5'>i'm approaching my final semester as a <a href="https://www.bcit.ca/programs/new-media-design-and-web-development-diploma-full-time-6525dipma/" className='hover:underline' target='_blank'>New Media Design & Web Development student at BCIT. </a></li>
            <li className='lg:text-xl mb-5'>as a child, i loved interacting and discovering new things. newest pieces of technology, latest video game and music releases, new ways to digitally interact, my environment has shaped me into who i am now, and i'm here as a designer. </li>
            <li className='lg:text-xl mb-5'>understanding why things are the way they are have been a core component of myself since i was a child, and has let me adapt, make intuitive designs, and be mindful of the world around me.  </li>
            <li className='lg:text-xl mb-5'>i find joy in coding and designing because its a gateway for me to create something satisfying. everything comes together.</li>
          </ul>
          <img src={baby} className='col-span-1' />




        </div>

        <div className="lg:max-w-[75%] mx-auto  p-4">

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6 mb-5">
            <h1 className='text-center text-8xl col-span-5 mb-5'>here's what i (usually) work with.</h1>
            {skills.map((skill) => (
              <div>
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-32 h-32 justify-center items-center mx-auto"
                />
                <p className="text-center mt-2  text-2xl">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-3 mx-auto px-4 gap-5 lg:max-w-[75%]'>
          <h1 className='text-center text-8xl col-span-3 mb-5'>values</h1>

          <motion.div
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip1 ? 0 : 180 }}

          >

            <motion.div
              transition={{ duration: 0.7 }}
              animate={{ rotateY: flip1 ? 0 : 180 }}
              className="card cursor-pointer"

            >
              <button onClick={() => setFlip1((prevState) => !prevState)} className='cursor-pointer'>
                <motion.div
                  transition={{ duration: 0.7 }}
                  animate={{ rotateY: flip1 ? 0 : 180 }}
                  className="front"
                >

                  <h1 className='text-center text-5xl mx-auto justify-center'>intuitiveness.</h1>
                  <FontAwesomeIcon icon={faEye} className='text-5xl mt-5' />
                </motion.div>

                <motion.div
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: flip1 ? 180 : 0 }}
                  transition={{ duration: 0.7 }}
                  className="back"
                >
                  <p className='text-lg'>
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
          >

            <motion.div
              transition={{ duration: 0.7 }}
              animate={{ rotateY: flip2 ? 0 : 180 }}
              className="card"
            >
              <button onClick={() => setFlip2((prevState) => !prevState)} className='cursor-pointer'>
                <motion.div
                  transition={{ duration: 0.7 }}
                  animate={{ rotateY: flip2 ? 0 : 180 }}
                  className="front"
                >
                  <h1 className='text-center text-5xl col-span-3'>adaptability.</h1>
                  <FontAwesomeIcon icon={faBrain} className='text-5xl mt-5' />
                </motion.div>
                <motion.div
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: flip2 ? 180 : 0 }}
                  transition={{ duration: 0.7 }}
                  className="back"
                >

                  <p className='text-lg px-3'>
                    i will always be willing to hear what you have in store for me, and i'll cater my approaches to your needs. a win win for the both of us.
                  </p>
                </motion.div>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            transition={{ duration: 0.7 }}
            animate={{ rotateY: flip3 ? 0 : 180 }}
          >

            <motion.div
              transition={{ duration: 0.7 }}
              animate={{ rotateY: flip3 ? 0 : 180 }}
              className="card"
            >
              <button onClick={() => setFlip3((prevState) => !prevState)} className='cursor-pointer'>
                <motion.div
                  transition={{ duration: 0.7 }}
                  animate={{ rotateY: flip3 ? 0 : 180 }}
                  className="front"
                >
                  <h1 className='text-center text-5xl col-span-3'>having fun.</h1>
                  <FontAwesomeIcon icon={faFaceSmile} className='text-5xl mt-5' />
                </motion.div>
                <motion.div
                  initial={{ rotateY: 180 }}
                  animate={{ rotateY: flip3 ? 180 : 0 }}
                  transition={{ duration: 0.7 }}
                  className="back"
                >
                  <p className='text-lg px-3'>unconventional, the idea of code coming together excites me.
                    you have an idea because it excites you and you want to see it realized.
                    the process is challenging, but let's captialize on that and enjoy ourselves. </p>
                </motion.div>
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div>
          <section className="min-h-screen flex items-center justify-center">
            <h1 className="text-8xl text-center ">
              question is, why front end development specifically?
            </h1>
          </section>
          {paragraphs.map((text, i) => (
            <section
              key={i}
              ref={(el) => (sectionsRef.current[i] = el)}
              className="min-h-screen flex items-center justify-center"
            >
              <p className="text-center text-6xl max-w-[80%] leading-tight"></p>
            </section>
          ))}
        </div>

      </section >

      <section ref={jose2Ref} id="jose2" >
        <div className="py-10 mt-10">
          <h1 className='text-8xl text-center'> hello, im jao.</h1>
          <h2 className='text-center text-5xl'>jao is a nickname ive had since childhood, the intials of my full name.</h2>
          <h3 className='text-center text-5xl'>here's more random tidbits about me.</h3>
        </div>
        <div className='flex max-w-[70%] mx-auto items-center justify-center'>
          <div className='grid grid-cols-6 mx-auto gap-5 '>
            <div className="col-span-3 group relative">
              <img src={favoritegame} className=' rounded-lg' />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white text-center rounded-lg">
                <h3 className="text-4xl">if you like rpgs, play this game.</h3>
              </div>
            </div>
            <div className='flex col-span-1 bg-beige-200 rounded-lg  shadow'>
              <h1 className='flex text-4xl justify-center items-center px-3'>listening and analyzing music</h1>
            </div>

            <div className='col-span-2 bg-beige-200 rounded-lg  text-lg shadow flex flex-col justify-center items-center px-3'>
              <p>I am a avid music lover and listener, and I listen to music a little too much.</p>
              <br />
              <p>I'm always open to exploring new genres and listening to the latest releases.</p>
              <br />
              <p>send me your playlist and lets chat about that one artist you don't understand the hype for.</p>
            </div>

            <div className='flex col-span-3 bg-beige-200 rounded-lg  shadow'>
              <h1 className=' flex text-4xl justify-center items-center px-3'>achievement hunting in video games </h1>
            </div>
            <div className='bg-beige-200 col-span-3 rounded-lg text-lg shadow flex flex-col justify-center items-center px-3'>
              <p>if I feel it, I play video games to help me wind down after a long day, or wind up if I'm playing Marvel Rivals.</p>
              <p>video games are an avid part of my life,  tell me about a game you know and i *might* just know about it.</p>
            </div>
            <div className="col-span-2 group relative w-full h-full">
              <img src={asher} className='w-full h-full object-cover rounded-lg' />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white text-center rounded-lg">
                <h3 className="text-4xl">thats my corgi, asher.</h3>
                <p className="text-2xl">he will bark at any loud noise and pull sneak attacks on you.</p>
                <p className="text-2xl">he's pretty cool.</p>
              </div>
            </div>
            <div className="col-span-2 group relative">
              <img src={wrapped} className='"w-full  object-cover rounded-lg' />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white text-center rounded-lg">
                <h3 className="text-4xl">do you know how much 120,509 minutes is?</h3>
                <p className="text-2xl">there's 525600 minutes in 1 year.</p>
                <p className="text-2xl">doing some math, ive spent around 4 months of 2024 listening to music nonstop.</p>
                <p className="text-2xl">yikes.</p>
              </div>
            </div>

            <div className="col-span-2 group relative">
              <img src={concert} className='"w-full  object-cover rounded-lg' />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center text-white text-center rounded-lg">
                <h3 className="text-4xl">i like to go concerts! (pictured; NIKI)</h3>
                <p className="text-xl">my goal for 2026 is to attend 1 concert per month if possible. as well as just going to more concerts in general.</p>
                <p className="text-xl">some artists i've been to live are:</p>

                <ul className='col-span-2 list-disc flex flex-col'>
                  <li className='lg:text-xl'>kendrick lamar in 2017</li>
                  <li className='lg:text-xl'>backstreet boys in 2019</li>
                  <li className='lg:text-xl'> tyler, the creator in 2022</li>
                  <li className='lg:text-xl'>nier orchestra, niki, kiss of life in 2024</li>
                  <li className='lg:text-xl'>and soon, artms in 2025</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section >

    </>
  )
}