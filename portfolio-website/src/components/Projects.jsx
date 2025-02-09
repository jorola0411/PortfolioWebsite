import React from "react";
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
// ..
AOS.init();


function Project() {
  return (
    <>

      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>Projects - Jose Orola </title>

      <meta name="description" content="Project page featuring various projects by Jose Orola, a UI/UX Designer and Front-End Developer based in Vancouver, BC." />

      <meta name="keywords" content="Jose, UI/UX Designer, Front-End Developer, Vancouver, Design, Web Development, User Interface Designer, User Experience Designer, Portfolio" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Projects - Jose Orola" />
      <meta property="og:description" content="Projects created by Jose Orola, a UI/UX Designer and Front-End Developer based in Vancouver, BC." />
      <meta property="og:url" content="https://joseorola.ca/" />

      <meta name="twitter:title" content="Projects - Jose Orola" />
      <meta name="twitter:description" content="Projects created by Jose Orola, a UI/UX Designer and Front-End Developer based in Vancouver, BC." />
      <meta name="twitter:url" content="https://joseorola.ca/" />

      <div className="items-center justify-center">
        <div className="w-full bg-beige-200 py-10 mt-20 mb-20">
          <div className="max-w-[80%] mx-auto space-y-4 p-4">
            <h1 className="text-3xl font-bold text-center" data-aos="fade-down">
              Projects
            </h1>
            <hr className="border-t-2 border-black  mt-2 mb-4" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              
              <button>
                <Link to="styles">
                 Styles, by Jao
                </Link>
              </button>
              <button>
                <Link to="lelem">
                  Lelem Natural Park
                </Link>
              </button>
              <button>
                <Link to="burger">
                  Jao's Burgers
                </Link>
              </button>
              <button>
                <Link to="monster">
                  Monster Hunter API project
                </Link>
              </button>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project
