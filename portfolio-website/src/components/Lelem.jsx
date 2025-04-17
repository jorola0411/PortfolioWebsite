import React, { useEffect, useState, useRef } from 'react';
import jose from '/src/assets/jose.jpg';
import leil from '/src/assets/leil.jpg';
import yurino from '/src/assets/yurino.jpg';
import denis from '/src/assets/denis.jpg';
import sam from '/src/assets/samantha.jpg';
import sitemap from '/src/assets/lelemsitemap.png';
import schedule from '/src/assets/sprintschedule.png';
import jslogo from '/src/assets/jslogo.svg';
import html from '/src/assets/HTML5.svg';
import css from '/src/assets/CSS3_logo.svg';
import { gsap } from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

AOS.init();

export default function Lelem() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const slides = [
    { src: sitemap, alt: "Site Map" },
    { src: schedule, alt: "schedule" }
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

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Lelem Natural Park - Jose Orola </title>

      <meta name="description" content="Lelem Natural Park is a project that involved creating a website for a fictional
                organization for a client, and to showcase proper usage of the
                Agile project management methodology." />

      <meta name="keywords" content="Jose, UI/UX Designer, Front-End Developer, Vancouver, Design, Web Development, User Interface Designer, User Experience Designer, Portfolio, Agile, Agile Methology, Team, Collab, client, Project Management" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Lelem Natural Park - Jose Orola" />
      <meta property="og:description" content="Lelem Natural Park is a project that involved creating a website for a fictional
                organization for a client, and to showcase proper usage of the
                Agile project management methodology." />
      <meta property="og:url" content="https://joseorola.ca/projects/lelem" />

      <meta name="twitter:title" content="ALelem Natural Park - Jose Orola" />
      <meta name="twitter:description" content="Lelem Natural Park is a project that involved creating a website for a fictional
                organization for a client, and to showcase proper usage of the
                Agile project management methodology." />
      <meta name="twitter:url" content="https://joseorola.ca/projects/lelem" />

      <section className="relative w-full bg-beige-100 lg:py-10 lg:mt-10 mb-10 p-5">
        <h1 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-center" data-aos="fade-down"> Lelem Natural Park</h1>
        <hr className="max-w-[80%] border-t-2 border-black mt-2 mb-4 mx-auto" />
        <div className='flex gap-4 justify-center mb-3'>

          <button className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl bg-beige-500 text-white px-6 py-2 hover:bg-orange-600 transition duration-200 gap-10 rounded-sm hover:scale-110 ease-in-out" data-aos="fade-right"> <a href="https://github.com/jorola0411/projectmanagement.git" target="_blank">
            GitHub
          </a></button>

          <button className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl bg-beige-500 text-white px-6 py-2 hover:bg-orange-600 transition duration-200 rounded-sm hover:scale-110 ease-in-out" data-aos="fade-left"> <a href="https://lelemnaturalpark.joseorola.ca/" target="_blank">
            Live Website
          </a></button>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto">

          <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'>
            <h2 className='font-semibold text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>technologies</h2>
            <hr className="max-w-[25%] border-t-2 border-black mt-2 mb-4 mx-auto" />
            <div className="relative flex justify-center items-center gap-4">
              <img src={html} alt="html logo" className="mb-2 rounded-xs object-contain sm:h-12 md:h-14 lg:h-16 xl:h-36" />
              <img src={css} alt="css3 logo" className="mb-2 rounded-xs object-contain sm:h-12 md:h-14 lg:h-16 xl:h-36" />
              <img src={jslogo} alt="javascript logo" className="mb-2 rounded-xs object-contain sm:h-12 md:h-14 lg:h-16 xl:h-36" />
            </div>
          </div>

          <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'>
            <h2 className='font-semibold text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>overview</h2>
            <hr className="max-w-[25%] border-t-2 border-black mt-2 mb-4 mx-auto" />
            <p className="text-left sm:text-md md:text-lg lg:text-xl xl:text-2xl px-5"> lelem natural park is a fictional website for a fictional client to showcase team collaboration and web development.</p>
          </div>

          <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1'>
            <h2 className='font-semibold text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>timeframe</h2>
            <hr className="max-w-[25%] border-t-2 border-black mt-2 mb-4 mx-auto" />
            <p className='text-center sm:text-md md:text-lg lg:text-xl xl:text-2xl'>28 hours</p>
          </div>

        </div>
        <div className="max-w-[80%] mx-auto">
          <h1 className="sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl font-bold text-left mt-5"> the tldr;</h1>
          <ul className='list-disc list-outside'>
            <li className="sm:text-md md:text-xl lg:text-xl xl:text-2xl"> <span className='font-semibold'>why:</span> this project involved creating a website for a fictional
              organization for a client, and to work under the
              agile project management methodology. </li>
            <li className="sm:text-md md:text-xl lg:text-xl xl:text-2xl"> <span className='font-semibold'>challenges:</span> scope creep occured, and designing the website that fits within the designers vision.</li>
            <li className="sm:text-md md:text-xl lg:text-xl xl:text-2xl"> <span className='font-semibold'>solutions:</span> properly defining the goal of our project, as well as constant communication with the designers on how the website looks. </li>
          </ul>
        </div>
      </section>




      <div className="sm:col-span-5 md:col-span-5 lg:grid-cols-5 xl:grid-cols-5 space-y-6 mb-10 bg-beige-200" ref={detailsRef}>
        <div className="p-6 max-w-[80%] mx-auto">
          <h1 className="sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl font-bold">team and roles</h1>
          <hr className="border-t-2 border-black mt-2 mb-4" />

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6">

            <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center sm:col-span-1 md:col-span-1" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
              <img src={jose} alt="Jose Orola" description="Polaroid style button and photo for the team members." className="mb-2 rounded-xs object-cover w-full h-64" />
              <p className="mt-2 font-medium sm:text-md md:text-lg lg:text-xl xl:text-3xl">Jose Orola</p>
              <p className="sm:text-sm md:text-md lg:text-lg xl:text-xl">web developer & ui designer</p>
            </div>

            <a href="https://karleilvillareal.ca/" target="_blank">
              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center sm:col-span-1 md:col-span-1 cursor-pointer hover:scale-102 transition-transform duration-200" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
                <img src={leil} alt="Karleil Villareal" description="Polaroid style button and photo for the team members." className="mb-2 rounded-xs object-cover w-full h-64" />
                <p className="mt-2 font-medium sm:text-md md:text-lg lg:text-xl xl:text-3xl">Karleil Villareal </p>
                <p className="sm:text-sm md:text-md lg:text-lg xl:text-xl">web developer & ui designer</p>
              </div>
            </a>

            <a href="https://lilyzvillage.ca/" target="_blank">
              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center sm:col-span-1 md:col-span-1 cursor-pointer hover:scale-102 transition-transform duration-200" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
                <img src={yurino} alt="Yurino Murakami" description="Polaroid style button and photo for the team members." className="mb-2 rounded-xs object-cover w-full h-64" />
                <p className="mt-2 font-medium sm:text-md md:text-lg lg:text-xl xl:text-3xl">Yurino Murakami </p>
                <p className="sm:text-sm md:text-md lg:text-lg xl:text-xl">graphic and ui designer</p>
              </div>
            </a>

            <a href="https://denisgurcu.com/" target="_blank">
              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center sm:col-span-1 md:col-span-1 cursor-pointer hover:scale-102 transition-transform duration-200" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
                <img src={denis} alt="Denis Gurcu" description="Polaroid style button and photo for the team members." className="mb-2 rounded-xs object-cover w-full h-64" />
                <p className="mt-2 font-medium sm:text-md md:text-lg lg:text-xl xl:text-3xl">Denis Gurcu</p>
                <p className="sm:text-sm md:text-md lg:text-lg xl:text-xl">graphic designer</p>
              </div>
            </a>

            <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center sm:col-span-1 md:col-span-1" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
              <img src={sam} alt="Sam Luk" description="Polaroid style button and photo for the team members." className="mb-2 rounded-xs object-cover w-full h-64" />
              <p className="mt-2 font-medium sm:text-md md:text-lg lg:text-xl xl:text-3xl">Samantha Luk </p>
              <p className="sm:text-sm md:text-md lg:text-lg xl:text-xl">content writer</p>
            </div>
          </div>
        </div>
      </div>

      <section className='p-10 bg-beige-200 mt-10'>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8 mx-auto max-w-[80%] mb-10">

          <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-1 p-3 sm:order-2 md:order-2 lg:order-1'>
            <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl'>role duties</h2>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <span className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold">
              along with another front end developer, we were tasked with:
            </span>
            <ul className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl list-disc list-inside pl-4">
              <li>
                designing the UI along with medium fidelity wireframes and
                sitemap
              </li>
              <li>coding of fade-in animations using keyframes</li>
              <li>
                basic javascript for the slide show and donate and ticket
                button functionality
              </li>
              <li>
                collaborating with the graphic designers to align with
                branding and styling
              </li>
            </ul>

          </div>
          <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-3 xl:col-span-2 sm:order-1 md:order-1 lg:order-2'>
            <img src={sitemap} alt="Lelem Sitemap" description="The sitemap details the potential pages of the website." className='shadow-lg cursor-pointer hover:scale-102 transition-transform duration-200' onClick={() => { setIndex(0); setOpen(true); }} />
          </div>
        </div>
      </section>

      <section className='p-10 bg-beige-200 mt-10'>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-8 mx-auto max-w-[80%] mb-10">
          <div className='col-span-1 sm:col-span-3 md:col-span-1 lg:col-span-1 xl:col-span-1  p-3 sm:order-2 md:order-2 lg:order-1'>
            <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl'>agile process</h2>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <p className='mb-5 sm:text-sm md:text-lg lg:text-xl xl:text-2xl'>this was the first time using the methology, and it proved
              useful for everyone in the team, I felt that having weekly goals
              and deadlines meant I could spread my work evenly and focus on
              smaller goals while making good progress on the project.</p>
          </div>

          <div className='col-span-1 sm:col-span-3 md:col-span-3 lg:col-span-1 xl:col-span-2 sm:order-1 md:order-1 lg:order-2'>
            <img src={schedule} alt="Sprint Schedule" description="This showcases the sprint schedule, which details how we divided the work, and showing what's included in the agile process." className='shadow-lg mx-auto cursor-pointer hover:scale-102 transition-transform duration-200' onClick={() => { setIndex(1); setOpen(true); }} />
          </div>
        </div>
      </section>

      <section className='p-10 bg-beige-200 mt-10'>
        <div className='p-3 max-w-[80%] mx-auto  mb-10'>
          <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl'>team dynamic</h2>
          <hr className="border-t-2 border-black mt-2 mb-4" />
          <span className="ssm:text-sm md:text-lg lg:text-lg xl:text-2xl">
            working with group members was a unique experience as it changed
            the way how i approached coding:
          </span>
          <ul className="sm:text-sm md:text-lg lg:text-lg xl:text-2xl list-disc list-inside pl-4">
            <li>
              working with the graphic designers and see how they would
              approach building a website
            </li>
            <li>
              i would constantly ask for feedback on the UI design from the
              designers and adjust accordingly
            </li>
            <li>
              i had to code in respect of my own skill level and the other
              members skill level
            </li>
          </ul>
        </div>
      </section>

      <section className='p-10 bg-beige-200 mt-10'>
        <div className='mb-10 max-w-[80%] mx-auto p-3'>
          <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl'>challenges</h2>
          <hr className="border-t-2 border-black mt-2 mb-4" />
          <p className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-3">
            some challenges I had during this project was the coding.</p>
          <p className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-3"> in combination of some last minute changes or requests from the design team, I felt a bigger weight on my shoulders just to fulfill the designers requests.   </p>

          <p className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-3"> it was also hard because this was the first project where I coded with another person, and I had to get adjusted to how they code and communicate with them on who should do what,
            as well as getting the code to work before the next sprints started.    </p>

          <p className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-3"> i also had to make sure if a certain section was okay by the design team or my fellow coder. Communication was nescessary.
          </p>
        </div>
      </section>


      <section className='p-10 bg-beige-200 mt-10'>
        <div className='mb-10 max-w-[80%] mx-auto p-3'>
          <h2 className='font-semibold sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl'>takeaways</h2>
          <hr className="border-t-2 border-black mt-2 mb-4" />
          <p className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-3">
            working in a team environment was rewarding and unique. The
            biggest takeaway I got from this project was communication.
            Communication is the utmost priority for the team and client, as
            visions and ideas will clash, or the need to let someone know if
            theres a problem or not.
          </p>
          <p className="sm:text-sm md:text-lg lg:text-xl xl:text-2xl">
            it was also a good opportunity to work with multiple web
            developers and see how different it would be coding alone VS
            with multiple people.
          </p>
        </div>
        <Lightbox open={open} close={() => setOpen(false)} slides={slides} index={index} />
      </section>



    </>
  );
}