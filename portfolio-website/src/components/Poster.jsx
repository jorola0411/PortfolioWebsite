import React from "react";
import posterhero from '/src/assets/posterhero.jpg';
import original from '/src/assets/originalposter.jpg';
import redesign from '/src/assets/newposter.jpg';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init(); 

function Poster() {
    return (
      <>
        <div className="items-center justify-center  min-h-screen">
          <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start p-6">
            <div className="md:col-span-4 mb-8">
              <h1 className="sm:text-xl md:text-4xl font-bold text-center" data-aos="fade-down">Poster Redesign</h1>
              <h2 className="sm:text-md md:text-xl font-semibold text-center" data-aos="fade-down">Graphic Design and Branding</h2>
              <hr className="border-t-2 border-black  mt-2 mb-4" />
              <img
                src={posterhero}
                alt="Poster Hero"
                description="This is the hero image for the poster project, which shows the redesigned poster in a mockup."
                className="w-96 mx-auto"
              ></img>
            </div>
  
            <div className="md:col-span-4 space-y-6" data-aos="flip-right">
              <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                <h1 className="sm:text-xl md:text-2xl font-bold">Overview</h1>
                <hr className="border-t-2 border-black mt-2 mb-4" />
                <p className="sm:text-sm md:text-base">
                  This project involved redesigning and enhancing an advertisement
                  while retaining the original message.
                </p>
              </div>
            </div>
  
            <div className="md:col-span-4 space-y-6" data-aos="flip-right">
              <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                <h1 className="sm:text-xl md:text-2xl font-bold">Original Ad</h1>
                <hr className="border-t-2 border-black mt-2 mb-4" />
                <p className="sm:text-sm md:text-base">
                  The original ad had the main message on in a straightforward
                  matter, however, many areas needed improvement like a lack of
                  visuals, more striking typography, and a lack of hierarchy makes
                  the main message somewhat confusing.
                </p>
                <div className="mt-4" data-aos="flip-right">
                  <h2 className="text-lg font-bold">Redesign Goals:</h2>
                  <ul className="sm:text-sm md:text-base list-disc list-inside pl-4">
                    <li>Add visuals and colors to enhance the poster</li>
                    <li>Reflect the brand's identity</li>
                    <li>Enhance the main message of the poster</li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div className="md:col-span-4" data-aos="flip-right">
              <h1 className="sm:text-xl md:text-2xl font-bold">Before and After</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                  <img src={original}alt="Original Poster" description="This is the original poster of Eyes Inspire, in Metrotown." className="w-full h-full object-cover"></img>
  
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl">Original</span>
                  </div>
                </div>
  
                <div className="relative overflow-hidden rounded-lg shadow-md group">
                  <img src={redesign} alt="New Poster" description="This is the redesigned poster of Eyes Inspire, mocked up in place of the original poster." className="w-full h-full object-cover"></img>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xl">Redesign</span>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="md:col-span-4 space-y-6" data-aos="flip-right">
              <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                <h1 className="sm:text-xl md:text-2xl font-bold">Creative Process</h1>
                <hr className="border-t-2 border-black mt-2 mb-4" />
                <p className="sm:text-sm md:text-base">
                  Every asset was created in Photoshop, and I chose to replicate
                  the Snellen Chart using the Courier Std Bold, and added a blur
                  effect to add perspective. I added the Snellen Chart to align
                  with the message of eye exams, and added eyeglasses from Adobe
                  Stock to frame the message as the focus of the poster. Finally,
                  I added a blue gradient for color and to make the poster pop out
                  more.
                </p>
              </div>
            </div>
  
            <div className="md:col-span-4 space-y-6" data-aos="flip-right">
              <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                <h1 className="sm:text-xl md:text-2xl font-bold">Challenges and Solutions</h1>
                <hr className="border-t-2 border-black mt-2 mb-4" />
                <p className="sm:text-sm md:text-base">
                  Key challenges included maintaining simplicity while ensuring
                  the design aligned with the brand's identity. The removal of
                  unnecessary subtitles allowed the focus to stay on essential
                  details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  

export default Poster;
