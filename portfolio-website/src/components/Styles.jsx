import React, { useEffect } from 'react';
import stylemockup from '/src/assets/stylemockup.jpg';
import upersona from '/src/assets/userpersona.png';
import emap from '/src/assets/empathymap.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();
function Styles() {

  useEffect(() => {
    AOS.init({
      duration: 300, // Duration of animation in milliseconds
      easing: 'ease-in-out', // Easing function
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

      <div className="items-center justify-center min-h-screen">
        <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

          <div className="md:col-span-4 mb-4">
            <h1 className="sm:text-xl md:text-4xl text-center" data-aos="fade-down">styles by jao</h1>
            <h2 className="sm:text-md md:text-xl text-center" data-aos="fade-down">Mobile and UI/UX design</h2>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <img src={stylemockup} alt="Style Hero" description="This showcases various screencaps from Figma, in phone mockups." className="mx-auto"></img>
          </div>

          <div className="md:col-span-4 space-y-6" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Overview</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                <div className="space-y-4">
                  <p className="sm:text-sm md:text-lg ">
                    Styles is a company that provides a mobile clothing shopping experience.
                    Focusing on streetwear, Styles also allows the users to “try on” their clothes before buying.
                  </p>
                  <div className="flex gap-4">
                    <button className="sm:text-sm md:text-lg  bg-beige-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-200 gap-10"> <a href="https://www.figma.com/design/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=435-5900&t=GSqSsiB1dNSTdMgr-1" target="blank">
                      Wireframe
                    </a></button>

                    <button className="sm:text-sm md:text-lg  bg-beige-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-200"> <a href="https://www.figma.com/proto/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=435-5900&t=GSqSsiB1dNSTdMgr-1" target="blank">
                      Prototype
                    </a></button>
                  </div>
                </div>

                <div className="space-y-4" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
                  <p className="sm:text-sm md:text-lg  leading-relaxed">
                    <span className="font-bold">Duration:</span> 14 hours
                  </p>
                  <p className="sm:text-sm md:text-lg ">
                    <span className="font-bold">Role:</span> UI/UX Designer
                  </p>
                  <p className="sm:text-sm md:text-lg ">
                    <span className="font-bold ">Tools:</span>
                    <ul className="sm:text-sm md:text-lg  list-disc list-inside pl-4">
                      <li>Figma (user flow, wireframing and prototype)</li>
                      <li>Moqups (Empathy Map)</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">User Persona & Scenario</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="col-span-2">
                  <img src={upersona} alt="User Persona" description="This is the user persona used for the project, and details a potential user that would use styles." className='w-full h-auto object-cover rounded-lg'></img>
                </div>
                <div className="col-span-1">
                  <p className="sm:text-sm md:text-lg  mb-3">Matthew Thompson, a 23-year-old graphic designer living in Vancouver, BC, leads a hectic life balancing his job, social activities, and personal projects. With a growing interest in streetwear fashion, Matthew often finds himself frustrated with the limited time he has to curate stylish outfits that reflect his personality outside of work. His mornings are rushed, leaving him with no time to choose his clothes, and ends up creating outfits that don’t match. Matthew wants to effortlessly maintain a trendy and cohesive look without sacrificing too much of his precious time.</p>
                  <p className="sm:text-sm md:text-lg  mb-3">Discovering the “styles,” app that promises to simplify his fashion choices, Matthew eagerly explores its features. He is thrilled to find personalized outfit recommendations based on his previous purchases and style preferences, saving him the hassle of mix-and-matching. With just a few taps, Matthew can now put together stylish outfits in minutes, freeing up his time to focus on his career and enjoy his newly found fashion sense.</p>
                  <p className="sm:text-sm md:text-lg  mb-3">User Personas are important because</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 space-y-6" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Empathy Map</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <p className="sm:text-sm md:text-lg ">Empathy maps helps the designer see how the user feels or thinks when using the app. It helps the designer by focusing on the user needs. In this case, it highlights various concerns regarding if clothes match, app usability, and highlights of the app.</p>
              <img src={emap} alt="Empathy Map" description="An empathy map assists the designer to see how the user feels or things while using an app. This image showcases the empathy map in this project." className="w-70 mx-auto"></img>
            </div>
          </div>


          <div className="md:col-span-4 space-y-6" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Challenges</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <p className="sm:text-sm md:text-lg  py-2">
                Some challenges I had was trying to making the app design intuitive for the user, as well as trying to figure out how the virtual try on feature would look.
                I also struggled a bit trying to find the visual identity for the app, but I eventually chose a modern and sleek look, with polaroids as the buttons.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Takeaways</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <p className="sm:text-sm md:text-lg ">
                This project has only piqued my interest in UI/UX design further, as I enjoyed creating the UI and designing the app.
                Seeing it fully come together at the end made me satisfied of my own work. I also learned how important things like user personas, empathy maps, and user testing are for developing a prototype,
                because the users are the reason we create an app, and making sure its to their sastifaction is the utmost priority. I also understood how many steps of the process relate to each other,
                as well as how they make the app creation process easier.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Prototype</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4 items-start">
                <div className="flex justify-center">
                  <iframe
                    className="w-full max-w-[400px] aspect-[9/16] rounded-lg shadow-md"
                    src="https://embed.figma.com/proto/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=481-3383&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=481%3A3295&starting-point-node-id=481%3A3383&embed-host=share"
                    allowFullscreen
                  ></iframe>
                </div>
                <div>
                  <p className="text-sm md:text-lg text-center mb-3">
                    This is a prototype for the app, users can try on the virtual try on feature, as well as browse tops, and make a purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>


    </>
  );
}

export default Styles;
