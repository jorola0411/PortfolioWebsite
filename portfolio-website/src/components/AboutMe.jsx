import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
gsap.registerPlugin(ScrollTrigger);



export default function AboutMe() {

  const joseRef = useRef(null);
  const jaoRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    gsap.from(joseRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: joseRef.current,
        start: "top 80%",
      },
    });

    gsap.from(jaoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: jaoRef.current,
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
          <h1 className='text-center lg:text-8xl mb-5'>about me, huh.</h1>
          <h2 className='text-center lg:text-7xl mb-5'> but which one?</h2>
          <h3 className='text-center lg:text-2xl mb-5'> I want to learn more about...</h3>

          <div className='mx-auto flex items-center justify-between max-w-[50%]'>

            <div className="relative group flex flex-col items-center">
              <button className="sm:text-sm md:text-lg lg:text-3xl xl:text-3xl  cursor-pointer  transition duration-200 gap-10" onClick={() => scrollToSection(joseRef)}>
                Jose
              </button>
              <span className="absolute top-full w-60 mt-2 text-md text-black opacity-0 group-hover:opacity-100 transition-opacity z-10 text-center pointer-events-none">
                the one you would want to hire.
              </span>
            </div>

            <div className="relative group flex flex-col items-center">
              <button className="sm:text-sm md:text-lg lg:text-3xl xl:text-3xl cursor-pointer transition duration-200" onClick={() => scrollToSection(jaoRef)}>
                Jao
              </button>
              <span className="absolute top-full w-60 mt-2 text-md text-black opacity-0 group-hover:opacity-100 transition-opacity z-10 text-center pointer-events-none">
                the one you would want to hang out with.
              </span>
            </div>
          </div>

        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer">

          <FontAwesomeIcon icon={faChevronDown} className=" hover:text-beige-500 transition animate-bounce text-5xl" onClick={() => scrollToSection(joseRef)} />
        </div>
      </section>


      <section
        ref={joseRef}
        id="jose"
        className="w-full bg-beige-200 py-10 mt-10"
      >

        <div className='grid grid-cols-3 mx-auto'>
          <h1 className='text-center text-8xl col-span-3'>values</h1>
        <div className='col-span-1 text-center'>
        <h1 className='text-center text-5xl col-span-3'>intuitiveness</h1>
        <p className='text-center text-lg'>
          the best designs are the one you don't notice, correct?
          i will make it my priority for *everything* to make sense.
        </p>
        </div>
        <div className='col-span-1 text-center'>
        <h1 className='text-center text-5xl col-span-3'>adaptability</h1>
        <p className='text-center text-lg'> 
          i will always be willing to hear what you have in store for me, and i'll cater my approaches to your needs. a win win for the both of us.
         
        </p>
        </div>
        <div className='col-span-1 text-center'>
        <h1 className='text-center text-5xl col-span-3'>having fun.</h1>
        <p>unconventional, the idea of code coming together excites me.
          you have an idea because it excites you and you want to see it realized. 
          the process is challenging, but let's captialize on that and enjoy ourselves. </p>
        </div>


        
        </div>

        <div className=" mx-auto space-y-4 p-4">
          <h1 className=" text-8xl  text-center">
            why front end development specifically?
          </h1>
          <p className='text-center'> you want me to be honest?</p>
          <p className='text-center'> coding is weird. things don't work like how you want it to, languages are complicated, and sometimes, debugging takes longer than it needs to be. and its just. so. frustrating at times.</p>
          <p className='text-center'> but its that exact reason why i do it. when it works, its like seeing all the pieces fit together like a puzzle. </p>
          <p className='text-center'> i code because its an outlet that brings my ideas to life. its a long process at times, but once you understand the logic, connecting code together, and creating something, its rewarding. </p>
        </div>

        

        <div className="max-w-[80%] mx-auto space-y-4 p-4">
          <h1 className="sm:text-2xl md:text-3xl font-bold">
           here's what i usually work with.
          </h1>
          <hr className="border-t-2 border-black  mt-2 mb-4" />
          <p>javascript</p>
          <p>html</p>
          <p>tailwind css</p>
          <p>react</p>
          <p>javascript</p>
          <p>figma</p>
        </div>

      </section>

      <section ref={jaoRef} id="jao" >
        <div className=" bg-beige-200 py-10 mt-10">
              
        <h1 className='text-8xl text-center'> now let's talk about jao. (also me.)</h1>

        </div>
        <div className='grid grid-cols-2 mx-auto'>
          <div className='col-span-1'>
            <h1 className=''></h1>
          </div>
        </div>
      </section>
    </>
  )
}