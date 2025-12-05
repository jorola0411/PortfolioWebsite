import React from 'react';

import html from '../assets/HTML5.svg'
import css from '../assets/CSS3_logo.svg'
import tailwind from '../assets/tailwind.svg'
import javascript from '../assets/javascript.svg'
import reactlogo from '../assets/React-icon.svg'
import figma from '../assets/Figma-logo.svg'
import photoshop from '../assets/photoshop.svg'
import illustrator from '../assets/illustrator.svg'
import aftereffects from '../assets/aftereffects.svg'
import wordpress from '../assets/wordpress.svg'
import squarespace from '../assets/squarespace.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import resume from '../assets/resume.svg'

export default function Home() {

  const techstack = [
    { name: "Photoshop", img: photoshop },
    { name: "Illustrator", img: illustrator },
    { name: "After Effects", img: aftereffects },
    { name: "Figma", img: figma },
    { name: "WordPress", img: wordpress },
    { name: "SquareSpace", img: squarespace },
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: javascript },
    { name: "TailwindCSS", img: tailwind },
    { name: "React", img: reactlogo },
  ];

  const projects = [
    { id: 1, name: 'OLGC Young Adults Ministry', tags: ['WordPress', 'UI/UX Design'], description: 'Lorem ipsum', img: "https://placehold.co/600x400" },
    { id: 2, name: 'Smart Beginnings Childcare Center', tags: ['WordPress', 'UI/UX Design'], description: 'Lorem ipsum', img: "https://placehold.co/600x400" },
    { id: 3, name: 'C Coffee', tags: ['WordPress', 'UI/UX Design'], description: 'Lorem ipsum', img: "https://placehold.co/600x400" },
    { id: 4, name: 'Coming Soon', tags: ['Coming Soon'], description: 'Lorem ipsum', img: "https://placehold.co/600x400" },
  ]
  return (
    <>

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Jose Orola | Web Developer</title>

      <meta name="description" content="Hello, I'm Jose. I'm a UI/UX designer and Front-End developer located in the expensive city of Vancouver, BC. My aim is to create passionate and meaningful solutions with my clients/company." />

      <meta name="keywords" content="Jose, UI/UX Designer, Front-End Developer, Vancouver, Design, Web Development, User Interface Designer, User Experience Designer, Portfolio" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Jose - UI/UX Designer & Front-End Developer" />
      <meta property="og:description" content="I'm Jose, a UI/UX designer and front-end developer based in Vancouver, BC. I create passionate and meaningful solutions with my clients." />
      <meta property="og:url" content="https://joseorola.ca/" />

      <meta name="twitter:title" content="Jose - UI/UX Designer & Front-End Developer" />
      <meta name="twitter:description" content="Explore the portfolio of Jose, a UI/UX designer and front-end developer, featuring projects like Lelem Natural Park and Styles." />
      <meta name="twitter:url" content="https://joseorola.ca/" />


      <div className="min-h-screen p-8 bg-offwhite dark:bg-caviar">
        <div className='grid grid-cols-2 gap-4 mb-16'>
          <div className='col-span-1'>
            <h1 className="md:text-7xl font-bold mb-2">
              Jose Orola
            </h1>
            <h2 className='md:text-[32px] mb-2'>
              Web Developer
            </h2>
            <h3 className='md:text-md mb-2'>
              I bridge the gap between design and code to create user experiences that makes life easier with precision and intuition.
              <br></br>
              Currently freelancing.
            </h3>
            <div className="flex sm:space-x-4">
              <a href="https://github.com/jorola0411" target="_blank">
                <img src={github} alt="GitHub Logo" description="custom logo, used for the user to click to GitHub." className="sm:w-4 sm:h-4 md:h-6 md:w-16 lg:w-10 lg:h-10 xl:h-32 xl:w-32 hover:scale-110 transition ease-in-out" />
              </a>
              <a href="https://linkedin.com/in/jose-orola" target="_blank">
                <img src={linkedin} alt="Linkedin Logo" description="custom logo, used for the user to click to LinkedIn." className="sm:w-4 sm:h-4 md:h-6 md:w-16 lg:w-10 lg:h-10 xl:h-32 xl:w-32 hover:scale-110 transition ease-in-out" />
              </a>
              <a href="/joseorolaresume.pdf" target="_blank">
                <img src={resume} alt="Resume" description="custom logo, used for the user to click to Instagram." className="sm:w-4 sm:h-4 md:h-6 md:w-16 lg:w-10 lg:h-10 xl:h-32 xl:w-32 hover:scale-110 transition ease-in-out" />
              </a>
            </div>
          </div>

          <div className='bg-gray-200 rounded-lg col-span-1'>
            <div className="p-4 flex flex-col justify-between col-span-1">
              <h1 className='md:text-[32px] col-span-1 mx-auto mb-2'>Tech Stack</h1>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-4 ">
                {techstack.map((techstack) => (
                  <div className='sm:col-span-1 md:col-span-1'>
                    <img
                      src={techstack.img}
                      alt={techstack.name}
                      className="sm:w-4 sm:h-4 md:h-6 md:w-16 lg:w-10 lg:h-10 xl:h-32 xl:w-32 justify-center items-center mx-auto"
                    />
                    <p className="text-center mt-2 ">
                      {techstack.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <work>
          <div className='grid grid-cols-4 gap-4'>

            {projects.map((projects) => (
              <div className="bg-gray-200 rounded-lg  flex flex-col justify-between hover:shadow-lg transition col-span-1 group">
                <div className='sm:col-span-1 md:col-span-1'>
                  <img
                    src={projects.img}
                    alt={projects.name}
                    className="w-full justify-center items-center mx-auto object-cover rounded-t-lg"
                  />
                  <div className='px-2'>
                    <p className="mt-2 text-2xl font-medium">
                      {projects.name}
                    </p>
                    <p className="mt-2">
                      {projects.tags}
                    </p>
                    <p className="my-2">
                      {projects.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </work>

        <footer>
          <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 mx-auto justify-between items-end border-t border-black sm:pt-8 mt-4">
            <div className='col-span-1 sm:col-span-4 md:col-span-1 sm:text-left sm:py-3 md:py-0'>
              <p className=" md:text-left"><a href="mailto:jorola0411@gmail.com" className="hover:underline">jorola0411@gmail.com</a></p>
            </div>

            <div className='col-span-1 sm:col-span-4 md:col-span-1 sm:py-3 md:py-0'>
              <div className="flex sm:space-x-3 lg:space-x-5 sm:justify-left md:justify-center">
                <p>Need something more traditional? Click me.</p>
              </div>
            </div>

            <div className='col-span-1 sm:col-span-4 md:col-span-1 flex flex-col sm:text-left md:items-end sm:py-3 md:py-0'>
              <p>coded with react</p>
            </div>
          </div>
        </footer>

      </div>

    </>
  )
}