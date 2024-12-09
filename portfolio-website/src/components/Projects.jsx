import React from "react";
import { Link } from "react-router-dom";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import spolaroid from '/src/assets/stylespolaroid.png';
import lpolaroid from '/src/assets/lelempolaroid.png';
import bpolaroid from '/src/assets/burgerpolaroid.png';
import ppolaroid from '/src/assets/redesignpolaroid.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init();

const tilt = { //This contains the tilt settings as well as defining the tilt when we use it for the images later on
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.2,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          500,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           'y',   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

function Project() {
  return (
    <>
      <div className="items-center justify-center">
        <div className="w-full bg-beige-200 py-10 mt-20 mb-20">
          <div className="max-w-screen-lg mx-auto space-y-4 p-4">
            <h1 className="text-3xl font-bold text-center" data-aos="fade-down">
              Projects
            </h1>
            <hr className="border-t-2 border-black  mt-2 mb-4" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="group flex flex-col items-center" data-aos="flip-left">
                <Tilt options={tilt} style={{ height: 240, width: 190 }}>
                  <Link to="styles">
                    <motion.button
                      initial={{ "--x": "100%", scale: 1 }} //using framer motion, this is the animation that plays for the "shine" effect on the polaroids; this is the settings part.
                      animate={{ "--x": "-100%" }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 1,
                        type: "spring",
                        stiffness: 20,
                        damping: 15,
                        mass: 2,
                        scale: {
                          type: "spring",
                          stiffness: 10,
                          damping: 5,
                          mass: 0.1,
                        },
                      }}
                      className="rounded-md relative radial-gradient"> {/* this class is essential, and without the radial-gradient, it nulls the animation useless, as well as radial gradient containing the css settings in app.css. No radial gradient, no animation and no visual effects.*/}
                      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask ">
                        <img src={spolaroid} alt="Styles Polaroid" description="Polaroid button to navigate to the Styles Project"></img>
                      </span>
                      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                    </motion.button>{" "}
                    {/* I had trouble setting the button, link, and tilt, because earlier, I had motion.button wrapped around tilt, and not the other way around, and the buttons didn't work the way I had it before.*/}
                  </Link>
                </Tilt>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center mt-10">
                  <h2 className="font-semibold text-lg">Styles, by Jao</h2>
                  <p className="text-sm">
                    UI/UX focused project on a niche app idea.
                  </p>
                </div>
              </div>

              <div className="group flex flex-col items-center" data-aos="flip-left">
                <Tilt options={tilt} style={{ height: 240, width: 190 }}>
                  <Link to="lelem">
                    <motion.button
                      initial={{ "--x": "100%", scale: 1 }}
                      animate={{ "--x": "-100%" }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 1,
                        type: "spring",
                        stiffness: 20,
                        damping: 15,
                        mass: 2,
                        scale: {
                          type: "spring",
                          stiffness: 10,
                          damping: 5,
                          mass: 0.1,
                        },
                      }}
                      className=" rounded-md relative radial-gradient">
                      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask ">
                        <img src={lpolaroid} alt="Lelem Polaroid" description="Polaroid button to navigate to the Lelem Project"></img>
                      </span>
                      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                    </motion.button>
                  </Link>
                </Tilt>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center mt-10">
                  <h2 className="font-semibold text-lg">Lelem Natural Park</h2>
                  <p className="text-sm">
                    A fictional zoo focusing on front-end development.
                  </p>
                </div>
              </div>

              <div className="group flex flex-col items-center" data-aos="flip-left">
                <Tilt options={tilt} style={{ height: 240, width: 190 }}>
                  <Link to="burger">
                    <motion.button
                      initial={{ "--x": "100%", scale: 1 }}
                      animate={{ "--x": "-100%" }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 1,
                        type: "spring",
                        stiffness: 20,
                        damping: 15,
                        mass: 2,
                        scale: {
                          type: "spring",
                          stiffness: 10,
                          damping: 5,
                          mass: 0.1,
                        },
                      }}
                      className=" rounded-md relative radial-gradient">
                      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask ">
                        <img src={bpolaroid} alt="Burger Polaroid" description="Polaroid button to navigate to the Burger Project"></img>
                      </span>
                      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                    </motion.button>
                  </Link>
                </Tilt>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center mt-10">
                  <h2 className="font-semibold text-lg">Jao's Burgers</h2>
                  <p className="text-sm">Responsive website focused on learning responsiveness.</p>
                </div>
              </div>

              <div className="group flex flex-col items-center" data-aos="flip-left">
                <Tilt options={tilt} style={{ height: 240, width: 190 }}>
                  <Link to="poster">
                    <motion.button
                      initial={{ "--x": "100%", scale: 1 }}
                      animate={{ "--x": "-100%" }}
                      whileTap={{ scale: 0.97 }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        repeatDelay: 1,
                        type: "spring",
                        stiffness: 20,
                        damping: 15,
                        mass: 2,
                        scale: {
                          type: "spring",
                          stiffness: 10,
                          damping: 5,
                          mass: 0.1,
                        },
                      }}
                      className=" rounded-md relative radial-gradient">
                      <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask ">
                        <img src={ppolaroid} alt="Redesign Polaroid" description="Polaroid button to navigate to the Redesign Project"></img>
                      </span>
                      <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                    </motion.button>
                  </Link>
                </Tilt>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center mt-10">
                  <h2 className="font-semibold text-lg">Poster Redesign</h2>
                  <p className="text-sm">Visual redesign retaining the ad's original message.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project
