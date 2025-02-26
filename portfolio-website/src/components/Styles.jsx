import React, { useEffect } from 'react';
import stylemockup from '/src/assets/stylemockup.jpg';
import emap from '/src/assets/empathymap.png';
import figma from '/src/assets/Figma-logo.svg';
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
        <div className="w-full bg-beige-200 py-10 mt-10 mb-10 ">
          <h1 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-center" data-aos="fade-down"> styles by jao</h1>
          <hr className="max-w-[80%] border-t-2 border-black mt-2 mb-4 mx-auto" />
          <div className='flex gap-4 justify-center mb-3'>

            <button className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl bg-beige-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-200 gap-10"> <a href="https://www.figma.com/design/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=435-5900&t=GSqSsiB1dNSTdMgr-1" target="blank">
              Wireframes
            </a></button>

            <button className="sm:text-sm md:text-lg lg:text-lg xl:text-3xl bg-beige-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-200"> <a href="https://www.figma.com/proto/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=435-5900&t=GSqSsiB1dNSTdMgr-1" target="blank">
              Prototype
            </a></button>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8 mx-auto">

            <div className='col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1'>
              <h2 className='text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>Technologies</h2>
              <hr className="sm:max-w-[50%] max-w-[25%] border-t-2 border-black mt-2 mb-4 mx-auto" />
              <div className="relative flex justify-center items-center ">
                <img src={figma} alt="css3" className="mb-2 rounded-sm object-contain sm:h-12 md:h-16 lg:h-24 xl:h-36" />
              </div>
            </div>

            <div className='col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1'>
              <h2 className='text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>Overview</h2>
              <hr className="sm:max-w-[50%] max-w-[25%] border-t-2 border-black mt-2 mb-4 mx-auto" />
              <p className="text-center sm:text-sm md:text-lg lg:text-xl xl:text-2xl"> Styles is a company that provides a mobile clothing shopping experience.
                Focusing on streetwear, Styles also allows the users to “try on” their clothes before buying.</p>
            </div>

            <div className='col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1'>
              <h2 className='text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>Timeframe</h2>
              <hr className="sm:max-w-[50%] lg:max-w-[25%] border-t-2 border-black mt-2 mb-4 mx-auto" />
              <p className='text-center sm:text-sm md:text-lg lg:text-xl xl:text-2xl'> 16 hours</p>
            </div>

          </div>
        </div>
        <img src={stylemockup} alt="Style Hero" description="This showcases various screencaps from Figma, in phone mockups." className="mx-auto w-70 mb-10 "></img>


        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8 mx-auto max-w-[90%] mb-10">
          <div className='col-span-1 sm:col-span-3 md:col-span-2'>
            <img src={emap} alt="Empathy Map" description="An empathy map assists the designer to see how the user feels or things while using an app. This image showcases the empathy map in this project." className="w-70 mx-auto"></img>
          </div>

          <div className='col-span-1 sm:col-span-3 md:col-span-1'>
            <h2 className='text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>Empathy Map</h2>
            <hr className="border-t-2 border-black mt-2 mb-4" />

            <p className="sm:text-sm md:text-lg lg:text-lg xl:text-2xl mb-3">Empathy maps helps the designer see how the user feels or thinks when using the app. It helps the designer by focusing on the user needs. In this case, it highlights various concerns regarding if clothes match, app usability, and highlights of the app.</p>
          </div>

        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mx-auto max-w-[90%] mb-10">

          <div className='col-span-1 sm:col-span-3 md:col-span-1'>
            <h2 className='text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl'>Challenges</h2>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <p className="sm:text-sm md:text-lg lg:text-lg xl:text-2xl mb-3">
              Some challenges I had was trying to making the app design intuitive for the user, as well as trying to figure out how the virtual try on feature would look.
              I also struggled a bit trying to find the visual identity for the app, but I eventually chose a modern and sleek look, with polaroids as the buttons.
            </p>
          </div>

          <div className='col-span-1 sm:col-span-3 md:col-span-1'>
            <h2 className='text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl'>Takeaways</h2>
            <hr className="border-t-2 border-black mt-2 mb-4" />

            <p className="sm:text-sm md:text-lg lg:text-lg xl:text-2xl mb-3">
              This project has only piqued my interest in UI/UX design further, as I enjoyed creating the UI and designing the app.
              Seeing it fully come together at the end made me satisfied of my own work. I also learned how important things like user personas, empathy maps, and user testing are for developing a prototype,
              because the users are the reason we create an app, and making sure its to their sastifaction is the utmost priority. I also understood how many steps of the process relate to each other,
              as well as how they make the app creation process easier.
            </p>

          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-8 mx-auto max-w-[90%] mb-10">
          <div className='col-span-1 sm:col-span-3 md:col-span-2 sm:order-2'>
            <div className="flex justify-center">
              <iframe
                className="w-full max-w-[400px] aspect-[9/16] rounded-lg shadow-md"
                src="https://embed.figma.com/proto/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=481-3383&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=481%3A3295&starting-point-node-id=481%3A3383&embed-host=share"
                allowFullscreen
              ></iframe>
            </div>
          </div>

          <div className='col-span-1 sm:col-span-3 md:col-span-1 sm:order-1'>
            <h2 className='text-center sm:text-xl md:text-2xl lg:text-2xl xl:text-4xl'>Prototype</h2>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <p className="sm:text-sm md:text-lg lg:text-lg xl:text-2xl mb-3"> This is a prototype for the app, users can try on the virtual try on feature, as well as browse tops, and make a purchase.</p>
          </div>
        </div>
      </div>

    </>
  );
}

export default Styles;
