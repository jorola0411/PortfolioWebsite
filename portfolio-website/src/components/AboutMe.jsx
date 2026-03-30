import { useEffect } from 'react'
import { motion } from "motion/react";
import { Helmet } from 'react-helmet-async';

import jose from '../assets/jose.jpg'

export default function AboutMe() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>

      <Helmet>
        <title>About Me - Jose Orola | Digital Designer & Dev</title>

        <link rel="canonical" href="https://joseorola.ca/about" />

        <meta name="description" content="Learn more about his tool stack, history, values and mission of Digital Designer & Developer Jose Orola." />
        <meta name="keywords" content="Jose, UI/UX Designer, Front-End Developer, Design, Web Development, User Interface Designer, User Experience Designer, Portfolio, SEO, Tech Stack, Vancouver, Surrey" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Me - Jose Orola | Digital Designer & Dev" />
        <meta property="og:description" content="Learn more about his tool stack, history, values and mission of Digital Designer & Developer Jose Orola." />
        <meta property="og:url" content="https://joseorola.ca/about" />

        <meta name="twitter:title" content="About Me - Jose Orola | Digital Designer & Dev" />
        <meta name="twitter:description" content="Learn more about his tool stack, history, values and mission of Digital Designer & Developer Jose Orola." />
        <meta name="twitter:url" content="https://joseorola.ca/about" />
      </Helmet>


      <motion.div initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        <section aria-label="About Jose" className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
          <div className='col-span-1  order-last md:order-first'>
            <h1 className='font-bold text-lg pb-8'>Hey again!</h1>

            <p className='pb-8'>I’m Jose, digital developer with a focus on front-end development and interaction design.</p>
            <p className='pb-8'>Growing up in a digital world and being drawn to many creative properties like art, music, or philosophy, It’s taught me that interaction and how people perceive things is the essence of how we think and do. Today, I take into account everything down to the smallest detail and decision, to make products that are fun, easy to use, and intuitive.</p>
            <p className='pb-8'>Outside of development, I’m more than often listening to the new music releases, playing Deadlock, or hitting new records at the gym.</p>

          </div>

          <div className='col-span-1 order-first md:order-last'>
            <div className="flex items-center justify-center">

              <img
                src={jose}
                alt="Picture of Jose Orola smiling and wearing a white polo t-shirt in front of a neutral background"
                className="w-72 h-80 object-cover rounded-lg shadow-2xl"
              />

            </div>
          </div>
        </section>

        <section aria-label="Tech Stack" className="flex flex-col md:flex-row gap-6 mb-8">
          <div className='flex flex-col flex-1'>
            <h2 className='text-lg mb-2 font-semibold'>Tech Stack</h2>
            <div className="px-8 py-4  h-full border rounded-lg border-coffee dark:border-cream bg-snow dark:bg-shadowgray">
              <ul className='list-disc'>
                <li>Adobe Creative Cloud (Photoshop, Illustrator, InDesign)</li>
                <li>Figma</li>
                <li>Canva</li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col flex-1 '>
            <h2 className='text-lg mb-2 font-semibold'>Development Tools </h2>
            <div className="px-8 py-4 border rounded-lg border-coffee dark:border-cream bg-snow dark:bg-shadowgray">
              <ul className='list-disc'>
                <li>HTML5</li>
                <li>CSS & Tailwind CSS</li>
                <li>JavaScript</li>
                <li>Python</li>
                <li>SQL</li>
                <li>React.js</li>
                <li>Express.js</li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col flex-1'>
            <h1 className='text-lg mb-2 font-semibold'>Platforms</h1>
            <div className="px-8 py-4 h-full border rounded-lg border-coffee dark:border-cream bg-snow dark:bg-shadowgray">
              <ul className='list-disc'>
                <li>Microsoft Office (Word, Excel, Powerpoint)</li>
                <li>Wordpress</li>
                <li>Squarespace</li>
              </ul>
            </div>
          </div>

        </section>

      </motion.div>
    </>
  )
}