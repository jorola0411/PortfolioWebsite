import { useCallback, useRef, useState, useEffect } from "react";
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


  const height = 600;

  const [imageHeight, setImageHeight] = useState(0);
  const maxPan = imageHeight - 600;

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


      <div className="flexbox justify-center items-center mx-auto max-w-9/12">
        <section className="max-w-9/12 mx-auto">

          <h1 className="font-bold text-3xl text-center ">C Coffee</h1>
          <p className="text-lg text-center mb-2">Repositioning a social enterprise towards B2B clients</p>
          <hr className="mb-8 max-w-8/12 mx-auto" />
          <div className='flex flex-wrap gap-20 justify-center mb-20'>
            <div className='col-span-1 items-center'>
              <h2 className='text-lg font-semibold mb-2'>Tools</h2>
              <ul>
                <li>SquareSpace</li>
                <li>Figma</li>
                <li>Illustrator</li>
                <li>Photoshop</li>
                <li>AI</li>
              </ul>
            </div>
            <div className='col-span-1'>
              <h2 className='text-lg font-semibold mb-2'> Role</h2>

              <ul>
                <li>UI/UX Designer</li>
                <li>Visual Designer</li>
                <li>Web Developer</li>
              </ul>
            </div>
            <div className='col-span-1'>
              <h2 className='text-lg font-semibold mb-2'> Timeline</h2>
              <p> 4 Weeks, April 2025</p>
            </div>
          </div>
        </section>


        <img src="src/assets/ccoffeehome.webp" alt="" className="mb-8 rounded-lg border" />
        <section className="mb-20">
          <h2 className='text-2xl font-bold mb-2 '>Company Overview</h2>
          <p>C Coffee is a B2B orientated social enterprise company coffee company that fund's children's education with every coffee purchase. Every coffee bag purchased provides month of schooling for a child in developing countries.</p>
        </section>

        <section className="mb-20">
          <h2 className='text-2xl font-bold mb-2'>Website Audit & Underlying Problems</h2>
          <ul className="list-disc">
            <li>Lack of meaningful CTA and visual layout</li>
            <li>Search engine visibility is low</li>
            <li>Content did not align with clients goals (B2B focus, communication of Social Impact)</li>
          </ul>
        </section>


        <section className="mb-20">
          <h2 className='text-2xl font-bold mb-2 '>Research</h2>
          <p className="mb-10">Through competitive analysis, other websites offered intuitive ordering process, clear navigation, and clear content that conveys their purpose in a B2B space and social enterprise circle.</p>
          <img src={ccoffeeia} alt="" className="mb-2 rounded-lg border" />
          <p>Based on client needs and content to be included, I restructured the website content and sitemap to be more focused and organized for the type of customer; B2C, B2B, and socially inclined users.</p>
        </section>

        <section className="mb-20">
          <h2 className='text-2xl font-bold mb-2'>Redesign Goals</h2>
          <ul className="list-disc">
            <li>More organized CTA and visual layout/hierarchy</li>
            <li>Focus B2B first, B2C second</li>
            <li>Communicate Social Impact</li>
          </ul>
        </section>




        <section className="mb-20">
          <div className="grid grid-cols-2 gap-6">
            <img src={responsivenessccoffee} alt="" className="mb-2 rounded-lg col-span-2 border" />
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
          <h2 className='text-2xl font-bold mb-2'>Design</h2>

          <div ref={wrapperRef} onMouseDown={onMouseDown} className="relative overflow-hidden rounded-lg mb-8 border" style={{ height: height }}>

            <img src={afterImg} alt="ccoffeehomepageafter"
              draggable="false"
              style={{ top: panY }}
              onLoad={(e) => setImageHeight(e.target.offsetHeight)}
              className="absolute left-0 w-full h-auto" />

            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}>

              <img src={beforeImg} alt="ccoffeehomepagebefore"
                draggable="false"
                style={{ top: panY }}
                onLoad={(e) => setImageHeight(e.target.offsetHeight)}
                className="absolute left-0 w-full h-auto" />

              <div className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none" style={{ left: `${split}%`, transform: "translateX(-50%)" }}>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md">

                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5 4L2 8L5 12M11 4L14 8L11 12" stroke="#555"
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>


          </div>
          <img src={ccoffeedonate} className="rounded-lg border" alt="" />
        </section>

        <section className="mb-20">
          <h2 className='text-2xl font-bold mb-2 '>Reflection</h2>
          <p className="mb-2">Since this was my first experience working with a client, this project has shown me the real time importance of SEO editing, scannable content, and a clear website structure can affect brand visibility and readability.</p>

          <p className="mb-10">Designing for a B2B is often built on credibility and details for their brand, compared to B2C, which focuses on engaging visuals and the emotional aspect of things.</p>
        </section>
      </div >

    </>
  )
}