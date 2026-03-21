import { Link } from 'react-router-dom'

import ccoffeetitle from "../assets/ccoffeetitle.webp"
import charismatitle from "../assets/charismatitle.webp"

export default function Home() {

  const projects = [

    { id: 1, name: 'C Coffee', description: 'Transforming the digital presence to attract corporate clients', tags: ["SquareSpace", "UI/UX"], img: ccoffeetitle, path: '/ccoffee' },
    { id: 2, name: 'Charisma Cafe', description: 'How might we improve a cafes marketability?', tags: ["Case Study", "UI/UX"], img: charismatitle, path: '/charismacafe' },

  ];

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

      <div>

        <section className='flex-row mx-auto text-center'>
          <h1 className='md:text-lg mb-8'>
            Hello, I'm Jose; <span className='font-medium'>Digital Developer.</span>
          </h1>
          <h2 className='sm:text-xl md:text-3xl mb-8 font-medium'>
            Design & Dev in one.
            <br />
            Let's create something together.
              </h2>
            <p className='md:text-lg'>
            Currently freelancing.
            </p>
        
        </section>


        <section className='md:max-w-11/12 mx-auto mb-8'>

          <div className='grid md:grid-cols-2 gap-4 mt-10'>
            {projects.map((project) => (
              <div key={project.id} className='sm:col-span-1 md:col-span-1 group transition ease-in-out'>
                <Link
                  to={project.path}

                  className="h-full hover:cursor-pointer border rounded-lg overflow-hidden flex flex-col bg-snow dark:bg-shadowgray border-coffee dark:border-cream"
                >
                  <img
                    src={project.img}
                    alt={project.name}
                   
                  />

                  <div className='flex justify-between gap-8 p-4'>
                    <div className='flex-grow'>
                      <div className='flex gap-2 pb-2'>
                        {project.tags.map((tag, index) => (
                          <span key={index} className='sm:text-sm md:text-sm lg:text-md xl:text-3xl sm:p-1 md:p-1 lg:p-1 border rounded-sm bg-snow dark:bg-shadowgray border-coffee dark:border-cream'>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h4 className="sm:text-lg md:text-xl font-semibold">
                        {project.name}
                      </h4>
                      <p className="mb-1 font-light">
                        {project.description}
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="items-center rotate-[145deg] w-8 h-8 flex-shrink-0 group-hover:rotate-[180deg] transition-transform ease-in-out fill-caviar dark:fill-offwhite cursor-pointer"
                      viewBox="0 0 640 640">
                      <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" />
                    </svg>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

      </div>

    </>
  )
}