import React, { useEffect, useState, useRef } from 'react';
import stylemockup from '/src/assets/stylemockup.jpg';
import emap from '/src/assets/empathymap.png';
import figma from '/src/assets/Figma-logo.svg';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { gsap } from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
export default function Styles() {

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const slides = [
    { src: stylemockup, alt: "stylemockup" },
    { src: emap, alt: "empathy map" }
  ];
  useEffect(() => {
    AOS.init({
      duration: 300, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const detailsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    gsap.from(detailsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: detailsRef.current,
        start: "top 80%",
      },
    });
  }, []);
  return (
    <>

      <meta name="description" content="Styles is a company that provides a mobile clothing shopping experience. Focusing on streetwear, Styles also allows the users to “try on” their clothes before buying." />

      <meta name="keywords" content="Jose, UI/UX Designer, Front-End Developer, Vancouver, Design, Web Development, User Interface Designer, User Experience Designer, Portfolio, UI Case Study, Figma, mockup, empathy map" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="styles by jao - Jose Orola" />
      <meta property="og:description" content="Styles is a company that provides a mobile clothing shopping experience. Focusing on streetwear, Styles also allows the users to “try on” their clothes before buying." />
      <meta property="og:url" content="https://joseorola.ca/projects/styles" />

      <meta name="twitter:title" content="styles by jao - Jose Orola" />
      <meta name="twitter:description" content="Styles is a company that provides a mobile clothing shopping experience. Focusing on streetwear, Styles also allows the users to “try on” their clothes before buying." />
      <meta name="twitter:url" content="https://joseorola.ca/projects/styles" />

      <section className="relative w-full bg-beige-100 lg:py-10 lg:mt-10 mb-10 p-5">
        <h1 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-center" data-aos="fade-down">styles by jao</h1>
        <hr className="max-w-[80%] border-t-2 border-black mt-2 mb-4 mx-auto" />
        <div className='flex gap-4 justify-center mb-3'>

          <button className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl bg-beige-500 text-white px-6 py-2 hover:bg-orange-600 transition duration-200 gap-10 rounded-sm hover:scale-110 ease-in-out" data-aos="fade-right"> <a href="https://www.figma.com/design/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=435-5900&t=GSqSsiB1dNSTdMgr-1" target="_blank">
            Wireframes
          </a></button>

          <button className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl bg-beige-500 text-white px-6 py-2 hover:bg-orange-600 transition duration-200 rounded-sm hover:scale-110 ease-in-out" data-aos="fade-left"> <a href="https://www.figma.com/proto/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=435-5900&t=GSqSsiB1dNSTdMgr-1" target="_blank">
            Prototype
          </a></button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto">

          <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'>
            <h2 className='font-semibold text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>software</h2>
            <hr className="sm:max-w-[50%] md:max-w-[25%] border-t-2 border-black mt-2 mb-2 mx-auto" />
            <div className="relative flex justify-center items-center ">
              <img src={figma} alt="figma logo" className="mb-2 object-contain sm:h-12 md:h-14 lg:h-16 xl:h-36" />
            </div>
          </div>

          <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'>
            <h2 className='font-semibold text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>overview</h2>
            <hr className="sm:max-w-[50%] md:max-w-[25%] border-t-2 border-black mt-2 mb-2 mx-auto" />
            <p className="text-left sm:text-md md:text-lg lg:text-xl xl:text-2xl ">styles is an e-commerce mobile platform that allows users to fit themselves virtually to ensure they have the correct clothing sizes before checkout.</p>
          </div>

          <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'>
            <h2 className='font-semibold text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>timeframe</h2>
            <hr className="sm:max-w-[50%] md:max-w-[25%] border-t-2 border-black mt-2 mb-2 mx-auto" />
            <p className='text-center sm:text-md md:text-lg lg:text-xl xl:text-2xl'>2 weeks</p>
          </div>
        </div>



        <div className="max-w-[80%] mx-auto">
          <h1 className="sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl font-bold text-left mt-5"> the tldr;</h1>
          <ul className='list-disc list-outside'>
            <li className="sm:text-md md:text-xl lg:text-xl xl:text-2xl"> <span className='font-semibold'>key features:</span> input your height and weight for accurate "virtual fitting" to ensure the user has the correct clothing size. personalized clothing recommendations </li>
            <li className="sm:text-md md:text-xl lg:text-xl xl:text-2xl"> <span className='font-semibold'>why:</span> online shopping loses the physical experience of trying out clothes; this leads to increased returns and poor user experience.  </li>
            <li className="sm:text-md md:text-xl lg:text-xl xl:text-2xl"> <span className='font-semibold'>problems:</span> high return rates, poor user experience, incorrect size expectations, limited personalized features</li>
            <li className="sm:text-md md:text-xl lg:text-xl xl:text-2xl"> <span className='font-semibold'>solutions:</span> implementation of a virtual try on feature would enhance user experience and personalization, and ensure that the items they buy are the correct sizes.</li>
          </ul>
        </div>

      </section>

      <section className='p-10 bg-beige-200 mt-10'>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-8 mx-auto max-w-[80%]">
          <div className='col-span-1 sm:col-span-3 md:col-span-1'>
            <img src={emap} alt="Empathy Map" description="An empathy map assists the designer to see how the user feels or things while using an app. This image showcases the empathy map in this project." className="shadow-lg  mx-auto cursor-pointer hover:scale-102 transition-transform duration-200" onClick={() => { setIndex(1); setOpen(true); }}></img>
          </div>

          <div className='col-span-1 sm:col-span-3 md:col-span-1 flex-col flex justify-center'>
            <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>empathy map</h2>
            <hr className="border-t-2 border-black mt-2 mb-4" />

            <p className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl">empathy maps helps the designer see how the user feels or thinks when using the app. It helps the designer by focusing on the user needs. In this case, it highlights various concerns regarding if clothes match, app usability, and highlights of the app.</p>
          </div>

        </div>
      </section>

      <section className='p-10 bg-beige-200 mt-10'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mx-auto max-w-[80%]">
          <div className='col-span-1 sm:col-span-3 md:col-span-2'>


            <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>challenges</h2>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <p className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-3">
              some challenges I had was trying to making the app design intuitive for the user, as well as trying to figure out how the virtual try on feature would look.
              I also struggled a bit trying to find the visual identity for the app, but I eventually chose a modern and sleek look, with polaroids as the buttons.
            </p>
          </div>
        </div>
      </section>

      <section className='p-10 bg-beige-200 mt-10'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mx-auto max-w-[80%]">
          <div className='col-span-1 sm:col-span-3 md:col-span-2'>
            <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl'>takeaways</h2>
            <hr className="border-t-2 border-black mt-2 mb-4" />

            <p className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-3">
              this project has only piqued my interest in UI/UX design further, as I enjoyed creating the UI and designing the app.
              Seeing it fully come together at the end made me satisfied of my own work. I also learned how important things like user personas, empathy maps, and user testing are for developing a prototype,
              because the users are the reason we create an app, and making sure its to their sastifaction is the utmost priority. I also understood how many steps of the process relate to each other,
              as well as how they make the app creation process easier.
            </p>

          </div>
        </div>
      </section>

      <section className='p-10 bg-beige-200 mt-10'>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-2 gap-8 mx-auto max-w-[90%] mb-10">
          <div className='col-span-1 sm:col-span-3 md:col-span-1 sm:order-1'>
            <div className="flex justify-center">
              <iframe
                className="w-full max-w-[400px] aspect-9/16 rounded-lg shadow-md"
                src="https://embed.figma.com/proto/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=481-3383&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=481%3A3295&starting-point-node-id=481%3A3383&embed-host=share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className='col-span-1 sm:col-span-3 md:col-span-1 sm:order-2 flex-col flex justify-center'>
            <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl'>prototype</h2>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <p className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl "> this is a prototype for the app, users can try on the virtual try on feature, as well as browse tops, and make a purchase.</p>

            <img src={stylemockup} alt="Style Hero" description="This showcases various screencaps from Figma, in phone mockups." className="mx-auto shadow-lg cursor-pointer hover:scale-102 transition-transform duration-200 mt-10" onClick={() => { setIndex(0); setOpen(true); }} />

          </div>

        </div>
      </section>
      <Lightbox open={open} close={() => setOpen(false)} slides={slides} index={index} />

    </>
  );
}