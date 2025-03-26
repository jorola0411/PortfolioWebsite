import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faEye, faBrain, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

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
    "coding is weird. things don't work like how you want it to, languages are complicated, and sometimes, debugging takes longer than it needs to be. and it's just. so. frustrating at times.",
    "but it's that exact reason why i do it. when it works, it's like seeing all the pieces fit together like a puzzle.",
    "i code because it's an outlet that brings my ideas to life. it's a long process at times, but once you understand the logic, connecting code together, and creating something, it's rewarding.",
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


      <section className="h-screen flex flex-col items-center justify-center sm:px-4">
        <div>
          <h1 className='text-center lg:text-8xl mb-5'>about me.</h1>
          <h2 className='text-center lg:text-7xl mb-5'> but which one?</h2>
          <h3 className='text-center lg:text-2xl mb-5'> I want to learn more about...</h3>

          <div className='mx-auto flex items-center justify-between max-w-[50%]'>

            <div className="relative group flex flex-col items-center">
              <button className="sm:text-sm md:text-lg lg:text-3xl xl:text-3xl  cursor-pointer  transition duration-200 gap-10" onClick={() => scrollToSection(jose1Ref)}>
                Jose
              </button>
              <span className="absolute top-full w-60 mt-2 text-md text-black opacity-0 group-hover:opacity-100 transition-opacity z-10 text-center pointer-events-none">
                the one you would want to hire.
              </span>
            </div>

            <div className="relative group flex flex-col items-center">
              <button className="sm:text-sm md:text-lg lg:text-3xl xl:text-3xl cursor-pointer transition duration-200" onClick={() => scrollToSection(jose2Ref)}>
                Jao
              </button>
              <span className="absolute top-full w-60 mt-2 text-md text-black opacity-0 group-hover:opacity-100 transition-opacity z-10 text-center pointer-events-none">
                the one you would want to hang out with.
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


        <div className="max-w-[80%] mx-auto space-y-8 p-4">

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-6">
            <h1 className='text-center text-8xl col-span-5 mb-5'>here's what i (usually) work with.</h1>
            {skills.map((skill) => (
              <div>
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-32 h-32 justify-center items-center mx-auto"
                />
                <p className="text-center mt-2 text-base font-medium">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='grid grid-cols-3 mx-auto px-4 gap-5 lg:max-w-7xl'>
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
              <p className="text-center text-6xl max-w-5xl leading-tight"></p>
            </section>
          ))}
        </div>

      </section >

      <section ref={jose2Ref} id="jose2" >
        <div className="py-10 mt-10">
          <h1 className='text-8xl text-center'> the fun side.</h1>
        </div>
        <div className='grid grid-cols-3 mx-auto px-5'>
          <div className='col-span-3'>
            <h1 className='text-center text-5xl'>outside of work, I'm most likely doing 1 of 3 things.</h1>
          </div>

          <div className='col-span-3'>
            <h1>listening and analyzing music</h1>
            <p>I am a avid music lover and listener, and I listen to music a little too much.</p>
            <p>I'm always open to exploring new genres and listening to the latest releases.</p>
            <p>send me your playlist sometime?</p>

          </div>

          <div className='col-span-3'>
            <h1>achievement hunting in video games (or just gaming in general)</h1>
            <p>i love getting virtual achievements that won't amount to anything in real life! wow!</p>
            <p>if I feel it, I play video games to help me wind down after a long day, or wind up if I'm playing Marvel Rivals.</p>
            <p>video games are an avid part of my life, tell me about a game you know and i *might* just know about it.</p>
          </div>

          <div className='col-span-3'>
            <h1>Lifting heavy objects and complain about the pain</h1>
            <p>i like to lift weights.</p>
            <p>that's it.</p>
            <p>i like doing deadlifts.</p>
            <p>if you know good leg workouts tell me about it.</p>
          </div>

          <div className='col-span-3'>
            <h1 className='text-center text-5xl'>the other stuff.</h1>
          </div>
          <div className='col-span-3'>
            <h1>i have a corgi</h1>
            <p>his name is asher, and hes a very happy dog.</p>
          </div>


        </div>
      </section>
    </>
  )
}