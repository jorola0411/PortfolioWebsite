import { useNavigate } from 'react-router-dom'
import jose from '../assets/jose.jpg'

export default function AboutMe({showBackButton = true }) {
  const navigate = useNavigate()
  return (
    <>
      <div className="p-8 bg-offwhite dark:bg-shadowgray  text-caviar dark:text-offwhite border-x dark:border-cream">

        {showBackButton && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-4 sm:h-4 md:h-8 md:w-8 lg:w-10 lg:h-10 xl:h-32 xl:w-32 hover:scale-110 transition-transform ease-in-out fill-caviar dark:fill-offwhite cursor-pointer"
            viewBox="0 0 640 640"
              onClick={() => navigate(-1)}
          >
            <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" />
          </svg>
        )}

        <div className='grid grid-cols-2 gap-8'>
          <div className='col-span-1'>
            <h1 className='font-bold text-3xl pb-8'>Hey again! It's Jose.</h1>
            <h1 className='font-semibold text-2xl pb-2'>My Philosophy</h1>
            <p className='pb-8'>I believe that design should always be intuitive - experiences that serves the user in an easy manner. I want to respect the user's time, and not overcomplicate a certain process just because we can. Aesthetics & visual designs pull the user in; but how it works keep them in. It's always about the user first.</p>
            <h1 className='font-semibold text-2xl pb-2'>My Journey</h1>
            <p>My interest UI/UX design and web development first started when I studied cyberscurity at BCIT. Coding in a way that helps users and solving problems for them in a digital world. Thinking critically about design systems and user centric design transitioned well into BCIT's New Media Design & Web Development program. From there, the program has taught me everything I need to know on making clean designs that work exactly as users expect them to. </p>


          </div>

          <div className='col-span-1 '>
            <div className="relative max-w-3xl mx-auto h-96 flex items-center justify-center">
         
              <img
                src={jose}
                alt=""
                className="absolute left-0 w-64 h-72 object-cover rounded-lg -rotate-12 shadow-lg"
              />

              <img
                src={jose}
                alt=""
                className="relative z-10 w-72 h-80 object-cover rounded-lg shadow-2xl"
              />

              <img
                src={jose}
                alt=""
                className="absolute right-0 w-64 h-72 object-cover rounded-lg rotate-12 shadow-lg"
              />
            </div>

          </div>
          <div className='col-span-2'>
            <h1 className='font-semibold text-2xl text-center'>Outside of code</h1>
            <hr className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 mx-auto justify-between items-end border-t  sm:pt-4 mt-4 border-caviar dark:border-offwhite text-caviar dark:text-offwhite"/>
            <p className='pb-6'>When I'm not adding tailwind css properties, you'll catch me:</p>

            <ul className="space-y-4">
              <li>Hitting new PRs at the gym</li>
              <li>Listening to the latest music releases</li>
              <li>Winding down playing Deadlock or Marvel Rivals</li>
              <li>Thinking and studying philosophy</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  )
}