import React from "react";
import stylemockup from '/src/assets/stylemockup.jpg';
import upersona from '/src/assets/userpersona.png';
import emap from '/src/assets/empathymap.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();
function Styles() {
  return (
    <>

      <div className="items-center justify-center min-h-screen">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start p-6">

          <div className="md:col-span-4 mb-8">
            <h1 className="sm:text-xl md:text-4xl text-center" data-aos="fade-down">styles by jao</h1>
            <h2 className="sm:text-md md:text-xl text-center" data-aos="fade-down">Mobile and UI/UX design</h2>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <img src={stylemockup} alt="Style Hero" description="This showcases various screencaps from Figma, in phone mockups." className="w-96 mx-auto"></img>
          </div>

          <div className="md:col-span-4 space-y-6" data-aos="flip-right">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Overview</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                <div className="space-y-4">
                  <p className="sm:text-sm md:text-base">
                    Styles is a company that provides a mobile clothing shopping experience.
                    Focusing on streetwear, Styles also allows the users to “try on” their clothes before buying.
                  </p>
                  <button className="sm:text-sm md:text-base bg-beige-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-200"> <a href="https://www.figma.com/design/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=435-5900&t=GSqSsiB1dNSTdMgr-1" target="blank">
                    Wireframe
                  </a></button>

                  <button className="sm:text-sm md:text-base bg-beige-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-200"> <a href="https://www.figma.com/proto/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=435-5900&t=GSqSsiB1dNSTdMgr-1" target="blank">
                    Prototype
                  </a></button>
                </div>


                <div className="space-y-4" data-aos="flip-right">
                  <p className="sm:text-sm md:text-base leading-relaxed">
                    <span className="font-bold">Duration:</span> 14 hours
                  </p>
                  <p className="sm:text-sm md:text-base">
                    <span className="font-bold">Role:</span> UI/UX Designer
                  </p>
                  <p className="sm:text-sm md:text-base">
                    <span className="font-bold ">Tools:</span>
                    <ul className="sm:text-sm md:text-base list-disc list-inside pl-4">
                      <li>Figma (user flow, wireframing and prototype)</li>
                      <li>Moqups (Empathy Map)</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 space-y-6" data-aos="flip-right">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">User Persona & Scenario</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="col-span-2">
                  <img src={upersona} alt="User Persona" description="This is the user persona used for the project, and details a potential user that would use styles."></img>
                </div>
                <div className="col-span-1">
                  <p className="sm:text-sm md:text-base mb-3">Matthew Thompson, a 23-year-old graphic designer living in Vancouver, BC, leads a hectic life balancing his job, social activities, and personal projects. With a growing interest in streetwear fashion, Matthew often finds himself frustrated with the limited time he has to curate stylish outfits that reflect his personality outside of work. His mornings are rushed, leaving him with no time to choose his clothes, and ends up creating outfits that don’t match. Matthew wants to effortlessly maintain a trendy and cohesive look without sacrificing too much of his precious time.</p>
                  <p className="sm:text-sm md:text-base mb-3">Discovering the “styles,” app that promises to simplify his fashion choices, Matthew eagerly explores its features. He is thrilled to find personalized outfit recommendations based on his previous purchases and style preferences, saving him the hassle of mix-and-matching. With just a few taps, Matthew can now put together stylish outfits in minutes, freeing up his time to focus on his career and enjoy his newly found fashion sense.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 space-y-6">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Empathy Map</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <p className="sm:text-sm md:text-base">Empathy maps helps the designer see how the user feels or thinks when using the app. It helps the designer by focusing on the user needs. In this case, it highlights various concerns regarding if clothes match, app usability, and highlights of the app.</p>
              <img src={emap} alt="Empathy Map" description="An empathy map assists the designer to see how the user feels or things while using an app. This image showcases the empathy map in this project." className="w-70 mx-auto"></img>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Styles;
