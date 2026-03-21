import { useEffect } from 'react'
import jose from '../assets/jose.jpg'

export default function AboutMe() {

   useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-8'>
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
              alt=""
              className="w-72 h-80 object-cover rounded-lg shadow-2xl"
            />

          </div>
        </div>
      </section>

      <section class="flex flex-col md:flex-row gap-6 mb-8">
        <div className='flex flex-col flex-1'> 
          <h1 className='text-lg mb-2 font-semibold'>Tech Stack</h1>
          <div className="px-8 py-4  h-full justify-between  border rounded-lg border-coffee dark:border-cream bg-snow dark:bg-shadowgray">
            <ul className='list-disc'>
              <li>Adobe Creative Cloud (Photoshop, Illustrator, InDesign)</li>
              <li>Figma</li>
              <li>Canva</li>
            </ul>

          </div>
        </div>
        <div className='flex flex-col flex-1 '>
          <h1 className='text-lg mb-2 font-semibold'>Development Tools </h1>
          <div className="px-8 py-4 justify-between border rounded-lg border-coffee dark:border-cream bg-snow dark:bg-shadowgray">
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
          <div className="px-8 py-4 h-full justify-between  border rounded-lg border-coffee dark:border-cream bg-snow dark:bg-shadowgray">
            <ul className='list-disc'>
              <li>Microsoft Office (Word, Excel, Powerpoint)</li>
              <li>Wordpress</li>
              <li>Squarespace</li>
            </ul>


          </div>
        </div>
        
      </section>


    </>
  )
}