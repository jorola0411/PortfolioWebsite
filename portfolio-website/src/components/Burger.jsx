import React, { useEffect } from 'react';
import burgerhero from '/src/assets/burgerhero.jpg';
import burgerwf from '/src/assets/burgerwireframe.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();

function Burger() {

  useEffect(() => {
    AOS.init({
      duration: 300, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  return (
    <>

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Jao's Burgers - Jose Orola </title>

      <meta name="description" content="Jao's Burgers is a project that involved creating fictional website for mobile, tablet, and desktop formats. It was also my first time creating a website that responds to different screen sizes." />

      <meta name="keywords" content="Jose, UI/UX Designer, Front-End Developer, Vancouver, Design, Web Development, User Interface Designer, User Experience Designer, Portfolio, HTML, CCS, responsive, mobile-first" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Jao's Burgers - Jose Orola" />
      <meta property="og:description" content="Jao's Burgers is a project that involved creating fictional website for mobile, tablet, and desktop formats. It was also my first time creating a website that responds to different screen sizes." />
      <meta property="og:url" content="https://joseorola.ca/projects/burger" />

      <meta name="twitter:title" content="Jao's Burgers - Jose Orola" />
      <meta name="twitter:description" content="Jao's Burgers is a project that involved creating fictional website for mobile, tablet, and desktop formats. It was also my first time creating a website that responds to different screen sizes." />
      <meta name="twitter:url" content="https://joseorola.ca/projects/burger" />

      <div className="items-center justify-center sm:px-4">
        <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div className="md:col-span-4 mb-4">
            <h1 className="sm:text-xl md:text-4xl font-bold text-center" data-aos="fade-down"> Jao's Burgers</h1>
            <h2 className="sm:text-md md:text-xl font-semibold text-center" data-aos="fade-down">Front-End Development</h2>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <img src={burgerhero} alt="Burger Hero" description="Hero image for the Burger project, which showcases mockups of the project" className=" mx-auto rounded"></img>
          </div>

          <div className="md:col-span-4 space-y-6" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Overview</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <p className="sm:text-sm md:text-lg ">
                This project involved in creating fictional website for mobile,
                tablet, and desktop formats. It was also my first time creating
                a website that responds to different screen sizes.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Project Goals</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <ul className="list-disc list-inside pl-4 sm:text-sm md:text-lg ">
                <li>
                  Creating a website responsive across desktop, tablet, and
                  mobile
                </li>
                <li>Learning the fundamentals of responsive design</li>
                <li>Applying responsive design techniques</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Wireframing</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <img src={burgerwf} alt="Burger Wireframe" className="w-96 mx-auto rounded" description="Wireframe detailing the layout of the pages in the project, specifically the mobile, tablet, and desktop formats of the project."></img>
              <p className="sm:text-sm md:text-lg  py-2">
                First, I created high fidelity wireframes with the topic of a
                burger restaurant in mind; I looked at other restaurants for
                reference on designing, as well as taking to account my current
                skill level of coding, and finalized the design above.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Challenges</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <p className="sm:text-sm md:text-lg  py-2">
                Some challenges I had was using grids. I had trouble
                understanding the different grid terms, such as template-column
                and column-span. This project was the first time using Media
                Queries as well, so I had to figure out what lines of code
                needed changing rather than copy and pasting the same code for
                the media queries, as to not repeat redundent code.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Takeaways</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <p className="sm:text-sm md:text-lg ">
                I learned many things from this project, such as understanding
                the relation of CSS grid/flexbox and how to use them properly in
                responsivenes, as well as how to use media queries properly. As
                well as a mental note for the future; to start mobile first then
                work your way up. Using grids and flexbox to your advantage is
                incredibly helpful and makes the media queries easier to manage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Burger