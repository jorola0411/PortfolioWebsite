import { useCallback, useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { Helmet } from 'react-helmet-async';

import ccoffeehome from "../assets/ccoffeehome.webp"
import beforeImg from "../assets/ccoffeehomebefore.webp";
import afterImg from "../assets/ccoffeehomeafter.webp";
import ccoffeeia from "../assets/ccoffeeia.webp";
import responsivenessccoffee from "../assets/responsivenessccoffee.webp";
import ccoffeedonate from "../assets/ccoffeedonate.webp";

export default function Ccoffee() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const [split, setSplit] = useState(50);
  const [panY, setPanY] = useState(0);
  const drag = useRef(false);
  const wrapperRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const height = isMobile ? 280 : 600;
  const maxPan = imageHeight - height;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onMouseDown = useCallback((e) => {
    drag.current = true;
    e.preventDefault();

  }, []);

  const onMouseMove = useCallback((e) => {
    if (!drag.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    setSplit(Math.max(0, Math.min(100, pct)));
  }, [])

  const onMouseUp = useCallback(() => {
    drag.current = false;
  }, [])

  const onWheel = useCallback((e) => {
    e.preventDefault();
    setPanY((prev) => Math.max(-maxPan, Math.min(0, prev - e.deltaY * 0.5)));
  }, [maxPan]);

  const onTouchMove = useCallback((e) => {
    const rect = wrapperRef.current.getBoundingClientRect();
    const pct = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSplit(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    wrapper.addEventListener("wheel", onWheel, { passive: false }); // add this

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      wrapper.removeEventListener("wheel", onWheel); // and clean it up
    };
  }, [onMouseMove, onMouseUp, onWheel]);
  return (
    <>

      <Helmet>
        <title>CCoffee Redesign — Jose Orola | UX Case Study</title>

        <link rel="canonical" href="https://joseorola.ca/ccoffee" />

        <meta name="description" content="Client work focusing on a website redesign, content overhaul and SEO improvement. Repositioned towards B2B clients." />
        <meta name="keywords" content="B2B, ccoffee, UX Design, UI Design, Content Writing, Marketing, Brand Identity" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="CCoffee Redesign — Jose Orola | UX Case Study" />
        <meta property="og:description" content="Client work focusing on a website redesign, content overhaul and SEO improvement. Repositioned towards B2B clients." />
        <meta property="og:url" content="https://joseorola.ca/ccoffee" />

        <meta name="twitter:title" content="CCoffee Redesign — Jose | UX Case Study" />
        <meta name="twitter:description" content="Client work focusing on a website redesign, content overhaul and SEO improvement. Repositioned towards B2B clients." />
        <meta name="twitter:url" content="https://joseorola.ca/ccoffee" />
      </Helmet>

      <motion.div className="flexbox justify-center items-center mx-auto md:max-w-9/12" initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>

        <section aria-label="Project Overview" className="md:max-w-9/12 mx-auto">

          <h1 className="font-bold sm:text-2xl md:text-3xl text-center ">C Coffee</h1>
          <p className="text-lg text-center mb-2">Repositioning a social enterprise towards B2B clients</p>
          <hr className="mb-8 md:max-w-8/12 mx-auto" />

          <div className='flex flex-col md:flex-row sm:gap-10 md:gap-20 justify-center mb-20'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Tools</h3>
              <ul>
                <li>SquareSpace</li>
                <li>Figma</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
                <li>AI</li>
              </ul>
            </div>
            <div className='col-span-1'>
              <h3 className='text-lg font-semibold mb-2'> Role</h3>

              <ul>
                <li>UI/UX Designer</li>
                <li>Visual Designer</li>
                <li>Web Developer</li>
              </ul>
            </div>
            <div className='col-span-1'>
              <h3 className='text-lg font-semibold mb-2'> Timeline</h3>
              <p> 4 Weeks, April 2025</p>
            </div>
          </div>
        </section>


        <img src={ccoffeehome} alt="An image of the C Coffee home page. It features their hero image, with a `Shop Now` CTA." className="mb-8 rounded-lg border" />
        <section aria-label="Company Overview" className="mb-20">
          <h2 className='sm:text-xl md:text-2xl font-bold mb-2 '>Company Overview</h2>
          <p>C Coffee is a B2B orientated social enterprise company coffee company that fund's children's education with every coffee purchase. Every coffee bag purchased provides month of schooling for a child in developing countries.</p>
        </section>

        <section aria-label="Website Audit" className="mb-20">
          <h2 className='sm:text-xl md:text-2xl font-bold mb-2'>Website Audit & Underlying Problems</h2>
          <ul className="list-disc">
            <li>Lack of meaningful CTA and visual layout</li>
            <li>Search engine visibility is low</li>
            <li>Content did not align with clients goals (B2B focus, communication of Social Impact)</li>
          </ul>
        </section>

        <section aria-label="Redesign Goals" className="mb-20">
          <h2 className='sm:text-xl md:text-2xl font-bold mb-2'>Redesign Goals</h2>
          <ul className="list-disc">
            <li>More organized CTA and visual layout/hierarchy</li>
            <li>Focus B2B first, B2C second</li>
            <li>Communicate Social Impact</li>
          </ul>
        </section>

        <section aria-label="Research" className="mb-20">
          <h2 className='sm:text-xl md:text-2xl font-bold mb-2 '>Research</h2>
          <p className="mb-10">Through competitive analysis, other websites offered intuitive ordering process, clear navigation, and clear content that conveys their purpose in a B2B space and social enterprise circle.</p>
          <figure>
            <img src={ccoffeeia} alt="An image featuring the Sitemap and Information Architecture of C Coffee." className="mb-2 rounded-lg border" />
            <p>Based on client needs and content to be included, I restructured the website content and sitemap to be more focused and organized for the type of customer; B2C, B2B, and socially inclined users.</p>
          </figure>
        </section>






        <section aria-label="SEO and Responsiveness" className="mb-20">
          <figure>
          <img src={responsivenessccoffee} alt="An image featuring various screencaps of the mobile view for C Coffee. From left to right: A mobile view of the home page, a mobile view of the social impact page featuring an infographic showing how 1 coffee bag purchase is enough to fund 1 month of education for a child, a mobile view of the shop page, and a mobile view of the Brazil & Ethiopia product page." className="mb-8 rounded-lg  border" />
          </figure>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="col-span-1">
              <h2 className='text-xl font-bold mb-2'>Improved SEO</h2>
              <p className="max-w-[90%]">All website pages, images, and content initially had no SEO implemented. I optimized images, gave them alt text and important keywords both in content and meta tags for each page and created mobile responsiveness, boosting visibility.</p>
            </div>

            <div className="col-span-1">
              <h2 className='text-xl font-bold mb-2 '>Improved Responsiveness</h2>
              <p className="max-w-[90%]">While most of the users are desktop based, I implemented mobile best practices and organized the content, layout, and elements to work across mobile devices and different desktop sizes.</p>
            </div>

          </div>
        </section>

        <section className="mb-20 overflow-hidden w-full">
          <h2 className='sm:text-xl md:text-2xl font-bold mb-2'>Design</h2>

          <div ref={wrapperRef} onMouseDown={onMouseDown} onTouchMove={onTouchMove} className="relative overflow-hidden rounded-lg mb-8 border" style={{ height }}>

            <img src={afterImg} alt="An image showing C Coffee's new home page after the redesign. It features a new color palette, a new visual layout and structure."
              draggable="false"
              style={{ top: panY }}
              onLoad={(e) => setImageHeight(e.target.offsetHeight)}
              className="absolute left-0 w-full h-auto" />

            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}>

              <img src={beforeImg} alt="An image showing C Coffee's old home page prior the redesign."
                draggable="false"
                style={{ top: panY }}
                onLoad={(e) => setImageHeight(e.target.offsetHeight)}
                className="absolute left-0 w-full h-auto" />

              <div className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none" style={{ left: `${split}%`, transform: "translateX(-50%)" }}>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md">

                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5 4L2 8L5 12M11 4L14 8L11 12" stroke="#555"
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" />
                  </svg>
                </div>
              </div>
            </div>


          </div>
          <img src={ccoffeedonate} className="rounded-lg border" alt="An image showing the donate page for C Coffee. It features the donate form in the middle of the page, with an image of a child writing on his notebook on the left of the form, and an image of a person brewing coffee in a cup on the right." />
        </section>

        <section aria-label="Reflection" className="mb-20">
          <h2 className='sm:text-xl md:text-2xl font-bold mb-2'>Reflection</h2>
          <p className="mb-2">Since this was my first experience working with a client, this project has shown me the real time importance of SEO editing, scannable content, and a clear website structure can affect brand visibility and readability.</p>

          <p className="mb-10">Designing for a B2B is often built on credibility and details for their brand, compared to B2C, which focuses on engaging visuals and the emotional aspect of things.</p>
        </section>
      </motion.div >

    </>
  )
}