import React from "react";
import MediaQuery from "react-responsive";
import jose from '/src/assets/jose.jpg';
import leil from '/src/assets/leil.jpg';
import yurino from '/src/assets/yurino.jpg';
import denis from '/src/assets/denis.jpg';
import sam from '/src/assets/samantha.jpg';
import lelemhero from '/src/assets/lelemhero.jpg';
import sitemap from '/src/assets/lelemsitemap.png';
import schedule from '/src/assets/sprintschedule.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function Lelem() {
  return (
    <>
    <MediaQuery minWidth={769}>
    <div className="items-center justify-center ">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
              
        <div className="md:col-span-5 mb-8">
        <h1 className="font-bold text-center text-3xl" data-aos="fade-down">Lelem Natural Park</h1>
        <h2 className="text-xl font-semibold text-center " data-aos="fade-down">Front-End Development</h2>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <img src={lelemhero} alt="Lelem Hero" className="w-96 mx-auto"></img>
            </div>       
                     
            <div className="md:col-span-5 space-y-6" data-aos="flip-right">
                <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                    <h1 className=" text-2xl font-bold">Overview</h1>
                    <hr className="border-t-2 border-black mt-2 mb-4" />
                    <p className="text-gray-700">
                        This project involved creating a website for a fictional organization for a client, and to showcase proper usage of the Agile project management methodology.
                    </p>
                </div>
            </div>

            <div className="md:col-span-5 space-y-6"    >
                <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                <h1 className="text-2xl font-bold">Team and Roles</h1>
                <hr className="border-t-2 border-black mt-2 mb-4" />

              <div className="grid grid-cols-5 gap-6">
              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1" data-aos="flip-right">
              <img src={jose} className="mb-2 rounded-sm object-cover w-full h-64"/>
                  <p className="mt-2 font-medium">Jose Orola</p>
                  <p>Web Developer & UI Designer</p>
                </div>

              <a href="https://karleilvillareal.ca/" target="_blank">
              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1 " data-aos="flip-right">
              <img src={leil} className="mb-2 rounded-sm object-cover w-full h-64"/>
                  <p className="mt-2 font-medium">Karleil Villareal </p>
                  <p>Web Developer & UI Designer</p>
              </div>
              </a>

              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1 " data-aos="flip-right">
              <img src={yurino} className="mb-2 rounded-sm object-cover w-full h-64"/>
                  <p className="mt-2 font-medium">Yurino Murakami </p>
                  <p>Graphic and UI Designer</p>
              </div>

              <a href="https://denisgurcu.com/" target="_blank">
              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1 " data-aos="flip-right">
              <img src={denis} className="mb-2 rounded-sm object-cover w-full h-64"/>
              <p className="mt-2 font-medium">Denis Gurcu</p>
              <p>Graphic Designer</p>
              </div>
              </a>

              <a href="https://samanthaluk.ca/" target="_blank">
              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-1 " data-aos="flip-right">
              <img src={sam} className="mb-2 rounded-sm object-cover w-full h-64"/>
                  <p className="mt-2 font-medium">Samantha Luk </p>
                  <p>Content Writer</p>
              </div>
              </a>
              </div>
                </div>
            </div>
           
                        <div className="md:col-span-5 space-y-6" data-aos="flip-right">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="text-2xl font-bold">Role duties</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <span className="font-semibold "> Along with another front end developer, we were tasked with:</span>
                                <ul className="list-disc list-inside pl-4">
                                  <li>Designing the UI along with medium fidelity wireframes and sitemap</li>
                                  <li>Coding of fade-in animations using keyframes</li>
                                  <li>Basic javascript for the slide show and donate and ticket button functionality</li>
                                  <li>Collaborating with the graphic designers to align with branding and styling</li>
                                </ul>
                                <img src={sitemap}/>
                            </div>
                        </div>

            <div className="md:col-span-5 space-y-6" data-aos="flip-right">
                <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                    <h1 className=" text-2xl font-bold">Agile process</h1>
                    <hr className="border-t-2 border-black mt-2 mb-4" />
                    <p>
                        This was the first time using the methology, and it proved useful for everyone in the team, I felt that having weekly goals and deadlines meant I could spread my work evenly and focus on smaller goals while making good progress on the project.
                    </p>
                    <img src={schedule}/>
                </div>
            </div>

            <div className="md:col-span-5 space-y-6" data-aos="flip-right">
                <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                    <h1 className=" text-2xl font-bold">Team Dynamic</h1>
                    <hr className="border-t-2 border-black mt-2 mb-4" />
                    <span>
                       Working with group members was a unique experience as it changed the way how i approached coding:
                    </span>
                    <ul className="list-disc list-inside pl-4">
                        <li>Working with the graphic designers and see how they would approach building a website</li>
                        <li>I would constantly ask for feedback on the UI design from the designers and adjust accordingly</li>
                        <li>I had to code in respect of my own skill level and the other members skill level</li>
                    </ul>
                </div>
            </div>
            
            <div className="md:col-span-5 space-y-6" data-aos="flip-right">
                <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                    <h1 className=" text-2xl font-bold">Takeaways</h1>
                    <hr className="border-t-2 border-black mt-2 mb-4" />
                    <p className="mb-3">Working in a team environment was rewarding and unique. The biggest takeaway I got from this project was communication. Communication is the utmost priority for the team and client, as visions and ideas will clash, or the need to let someone know if theres a problem or not. </p>
                   <p>It was also a good opportunity to work with multiple web developers and see how different it would be coding alone VS with multiple people.</p>
                </div>
            </div>
          
            </div>
            </div>
        
            </MediaQuery>
    </>
  )
}

export default Lelem;
