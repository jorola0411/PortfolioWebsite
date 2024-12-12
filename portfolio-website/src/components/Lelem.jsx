import React, { useEffect } from 'react';
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
// ..
AOS.init();

function Lelem() {
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

      <title>Lelem Natural Park - Jose Orola </title>

      <meta name="description" content="Lelem Natural Park is a project that involved creating a website for a fictional
                organization for a client, and to showcase proper usage of the
                Agile project management methodology." />

      <meta name="keywords" content="Jose, UI/UX Designer, Front-End Developer, Vancouver, Design, Web Development, User Interface Designer, User Experience Designer, Portfolio, Agile, Agile Methology, Team, Collab, client, Project Management" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Lelem Natural Park - Jose Orola" />
      <meta property="og:description" content="Lelem Natural Park is a project that involved creating a website for a fictional
                organization for a client, and to showcase proper usage of the
                Agile project management methodology." />
      <meta property="og:url" content="https://joseorola.ca/projects/lelem" />

      <meta name="twitter:title" content="ALelem Natural Park - Jose Orola" />
      <meta name="twitter:description" content="Lelem Natural Park is a project that involved creating a website for a fictional
                organization for a client, and to showcase proper usage of the
                Agile project management methodology." />
      <meta name="twitter:url" content="https://joseorola.ca/projects/lelem" />

      <div className="items-center justify-center sm:px-4">
        <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="sm:col-span-5 md:col-span-5 mb-4">
            <h1 className="sm:text-xl md:text-4xl font-bold text-center" data-aos="fade-down"> Lelem Natural Park</h1>
            <h2 className="sm:text-md md:text-xl font-semibold text-center" data-aos="fade-down">Front-End Development</h2>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <a href="https://github.com/jorola0411/projectmanagement.git" target="_blank"><img src={lelemhero} alt="Lelem Hero" description="This is the hero image for the Lelem project, which showcases the website in laptop mockups" className=" mx-auto"></img></a>
          </div>

          <div className="sm:col-span-5 md:col-span-5 space-y-6" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Overview</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <p className="sm:text-sm md:text-lg ">
                This project involved creating a website for a fictional
                organization for a client, and to showcase proper usage of the
                Agile project management methodology.
              </p>
            </div>
          </div>

          <div className="sm:col-span-5 md:col-span-5 space-y-6">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="tsm:text-xl md:text-2xl font-bold">Team and Roles</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">

                <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center sm:col-span-1 md:col-span-1" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
                  <img src={jose} alt="Jose Orola" description="Polaroid style button and photo for the team members." className="mb-2 rounded-sm object-cover w-full h-64" />
                  <p className="mt-2 font-medium">Jose Orola</p>
                  <p>Web Developer & UI Designer</p>
                </div>

                <a href="https://karleilvillareal.ca/" target="_blank">
                  <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center sm:col-span-1 md:col-span-1" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
                    <img src={leil} alt="Karleil Villareal" description="Polaroid style button and photo for the team members." className="mb-2 rounded-sm object-cover w-full h-64" />
                    <p className="mt-2 font-medium">Karleil Villareal </p>
                    <p>Web Developer & UI Designer</p>
                  </div>
                </a>

                <a href="https://lilyzvillage.ca/" target="_blank">
                  <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center sm:col-span-1 md:col-span-1" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
                    <img src={yurino} alt="Yurino Murakami" description="Polaroid style button and photo for the team members." className="mb-2 rounded-sm object-cover w-full h-64" />
                    <p className="mt-2 font-medium">Yurino Murakami </p>
                    <p>Graphic and UI Designer</p>
                  </div>
                </a>

                <a href="https://denisgurcu.com/" target="_blank">
                  <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center sm:col-span-1 md:col-span-1" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
                    <img src={denis} alt="Denis Gurcu" description="Polaroid style button and photo for the team members." className="mb-2 rounded-sm object-cover w-full h-64" />
                    <p className="mt-2 font-medium">Denis Gurcu</p>
                    <p>Graphic Designer</p>
                  </div>
                </a>

                <a href="https://samanthaluk.ca/" target="_blank">
                  <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center sm:col-span-1 md:col-span-1" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
                    <img src={sam} alt="Sam Luk" description="Polaroid style button and photo for the team members." className="mb-2 rounded-sm object-cover w-full h-64" />
                    <p className="mt-2 font-medium">Samantha Luk </p>
                    <p>Content Writer</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="sm:col-span-5 md:col-span-5 space-y-6" data-aos="flip-right" data-aos-anchor-placement="top-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Role duties</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <span className="sm:text-sm md:text-lg  font-semibold">
                Along with another front end developer, we were tasked with:
              </span>
              <ul className="sm:text-sm md:text-lg  list-disc list-inside pl-4">
                <li>
                  Designing the UI along with medium fidelity wireframes and
                  sitemap
                </li>
                <li>Coding of fade-in animations using keyframes</li>
                <li>
                  Basic javascript for the slide show and donate and ticket
                  button functionality
                </li>
                <li>
                  Collaborating with the graphic designers to align with
                  branding and styling
                </li>
              </ul>
              <img src={sitemap} alt="Lelem Sitemap" description="The sitemap details the potential pages of the website." />
            </div>
          </div>

          <div className="sm:col-span-5 md:col-span-5 space-y-6" data-aos="flip-right" data-aos-anchor-placement="center-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Agile process</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <p className="sm:text-sm md:text-lg ">
                This was the first time using the methology, and it proved
                useful for everyone in the team, I felt that having weekly goals
                and deadlines meant I could spread my work evenly and focus on
                smaller goals while making good progress on the project.
              </p>
              <img src={schedule} alt="Sprint Schedule" description="This showcases the sprint schedule, which details how we divided the work, and showing what's included in the agile process." />
            </div>
          </div>

          <div className="sm:col-span-5 md:col-span-5 space-y-6" data-aos="flip-right" data-aos-anchor-placement="center-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Team Dynamic</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <span className="sm:text-sm md:text-lg ">
                Working with group members was a unique experience as it changed
                the way how i approached coding:
              </span>
              <ul className="sm:text-sm md:text-lg  list-disc list-inside pl-4">
                <li>
                  Working with the graphic designers and see how they would
                  approach building a website
                </li>
                <li>
                  I would constantly ask for feedback on the UI design from the
                  designers and adjust accordingly
                </li>
                <li>
                  I had to code in respect of my own skill level and the other
                  members skill level
                </li>
              </ul>
            </div>
          </div>

          <div className="sm:col-span-5 md:col-span-5 space-y-6" data-aos="flip-right" data-aos-anchor-placement="center-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Challenges</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <p className="sm:text-sm md:text-lg  mb-3">
                Some challenges I had during this project was the coding. In combination of some last minute changes or requests from the design team, I felt a bigger weight on my shoulders just to fulfill the designers requests.
                It was also hard because this was the first project where I coded with another person, and I had to get adjusted to how they code and communicate with them on who should do what,
                as well as getting the code to work before the next sprints started. I also had to make sure if a certain section was okay by the design team or my fellow coder. Communication was nescessary.
              </p>

            </div>
          </div>

          <div className="sm:col-span-5 md:col-span-5 space-y-6" data-aos="flip-right" data-aos-anchor-placement="center-bottom">
            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
              <h1 className="sm:text-xl md:text-2xl font-bold">Takeaways</h1>
              <hr className="border-t-2 border-black mt-2 mb-4" />
              <p className="sm:text-sm md:text-lg mb-3">
                Working in a team environment was rewarding and unique. The
                biggest takeaway I got from this project was communication.
                Communication is the utmost priority for the team and client, as
                visions and ideas will clash, or the need to let someone know if
                theres a problem or not.
              </p>
              <p>
                It was also a good opportunity to work with multiple web
                developers and see how different it would be coding alone VS
                with multiple people.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Lelem;
