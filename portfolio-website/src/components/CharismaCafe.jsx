import { useEffect } from "react";
import { motion } from "motion/react";
import { Helmet } from 'react-helmet-async';

import charismahome from "../assets/charismahome.webp"
import brandguide1 from "../assets/charismabrandguide1.webp"
import brandguide2 from "../assets/charismabrandguide2.webp"
import hificharismadesktop1 from "../assets/desktopcharisma1.webp"
import hificharismadesktop2 from "../assets/desktopcharisma2.webp"

export default function CharismaCafe() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>

      <Helmet>
        <title>Charisma Cafe | a 2026 FLUI Design Jam Case Study</title>

        <link rel="canonical" href="https://joseorola.ca/charismacafe" />

        <meta name="description" content="FLUI Design Jam 2026 challenge. Redesigning homepage, menus, and event pages for a social clubhouse & cafe." />
        <meta name="keywords" content="Case Study, Prototype, Hi-Fi Wireframes, Lo-Fi Wireframes, Redesign, Content Writing, User Research, User Interface" />

        <meta property="og:type" content="article" />
        <meta property="og:title" content="Charisma Cafe | a 2026 FLUI Design Jam Case Study" />
        <meta property="og:description" content="FLUI Design Jam 2026 challenge. Redesigning homepage, menus, and event pages for a social clubhouse & cafe." />
        <meta property="og:url" content="https://joseorola.ca/charismacafe" />

        <meta name="twitter:title" content="Charisma Cafe | a 2026 FLUI Design Jam Case Study" />
        <meta name="twitter:description" content="FLUI Design Jam 2026 challenge. Redesigning homepage, menus, and event pages for a social clubhouse & cafe." />
        <meta name="twitter:url" content="https://joseorola.ca/charismacafe" />
      </Helmet>

      <motion.div className="flexbox justify-center items-center mx-auto max-w-9/12" initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        <section aria-label="Project Overview" className="md:max-w-9/12 mx-auto">

          <h1 className="font-bold sm:text-2xl md:text-3xl text-center ">Charisma Cafe</h1>
          <p className="text-lg text-center mb-2">FLUI Design Jam 2026 challenge</p>
          <hr className="mb-8 md:max-w-8/12 mx-auto" />
          <div className='flex flex-col md:flex-row sm:gap-10 md:gap-20 justify-center mb-20'>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Team</h3>
              <ul>
                <li>Jose Orola</li>
                <li>Yurino Murakami</li>
                <li>Rose Nguyen</li>
                <li>Olivia Fong</li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-2'>Tools</h3>
              <p>Figma</p>
            </div>

            <div>
              <h3 className='text-lg font-semibold mb-2'> Role</h3>

              <ul>
                <li>UX Designer</li>
                <li>UX Researcher</li>
                <li>Content Writer</li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-2'> Timeline</h3>
              <p> 3 days, February 2026</p>
            </div>
          </div>
        </section>


        <img src={charismahome} alt="An image of the redesigned Charisma Cafe home page. it features a new navigation bar, logo, and hero banner with a catering and online order CTAs." className="mb-8 rounded-lg border" />
        <section aria-label="Overview" className="mb-20">
          <h2 className='sm:text-xl md:text-2xl font-bold mb-2 '>Overview</h2>
          <p>Charisma Cafe is a social club house known for their award-winning cheesecakes, late-night comfort food, and social events.</p>
        </section>

        <section aria-label="Challenges and Goals" className="mb-20">
          <h2 className='sm:text-xl md:text-2xl font-bold mb-2 '>Challenges & Goals</h2>
          <p className="mb-4">Within a 3 day timeline and deadline, our challenge and goal was to redesign Charisma Cafe in line with the clients goals and needs. After an interview with the client, we concluded that there were 3 key areas in improving Charisma Cafe.</p>
          <ul className="list-decimal">
            <li>Brand realignment towards an oven event space over cafe</li>
            <li>Focus B2B first, B2C second</li>
            <li>Streamline key users flows such as pre ordering and event pages into few screens possible</li>
          </ul>
        </section>

        <section aria-label="User Survey" className="mb-20">
          <h2 className='sm:text-xl md:text-2xl font-bold mb-2'>User Survey</h2>
          <p className="mb-4">After reviewing 20 participants, a common consensus is that they found the layout confusing, a lack of clear readability, and overall, the website feels overwhelming.  </p>

          <div className="flex flex-col gap-6">
            {[
              `"The landing page is extremely busy."`,
              `"The events icon are too big and it is confusing to scroll through all of them"`,
              `"Overall UI feels overwhelming, too much going on, not enough unity between elements (kind of looks like "patchwork" of different designs put together if that makes sense)."`
            ].map((quote, i) => (
              <blockquote
                key={i}
                className="px-4 py-2 gap-2 h-full flex items-center border rounded-lg border-coffee dark:border-cream bg-snow dark:bg-shadowgray"
              >
                <svg
                  aria-hidden="true"
                  className="w-16 h-16 flex-shrink-0 fill-caviar dark:fill-offwhite"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 15.503A5.041 5.041 0 1 0 16 5.42a5.041 5.041 0 0 0 0 10.083zm0 2.215c-6.703 0-11 3.699-11 5.5v3.363h22v-3.363c0-2.178-4.068-5.5-11-5.5z" />
                </svg>
                <p>{quote}</p>
              </blockquote>
            ))}
          </div>
        </section>


        <section aria-label="Style Guide" className="mb-20">
          <h2 className='sm:text-xl md:text-2xl font-bold mb-2'>Style Guide</h2>

          <figure className="mb-8">
            <img src={brandguide1} alt="An image showing the style guide created for the Charisma Cafe redesign. It features the moodboard consisting of orange and warm colors, and a revised company logo." className="mb-2 rounded-lg border" />
            <p>We decided to go for a warm and comfortable approach for the colors and feel of the cafe, since the client emphasized the aspect of social gatherings and events often.</p>
          </figure>

          <figure className="mb-8">
            <img src={brandguide2} alt="An image showing the 2nd style guide created for the Charisma Cafe redesign. It features imagery of the cafe, such as food and the interior, textures used throughout the website, the warm color palette, details about accessibility, the typography used for the website, and the icons used throughout the website." className="mb-2 rounded-lg border" />
            <p>The client specified we keep the orange for their brand. Since users felt that the colors added to the overwhelmingness of the home page and others, we decided to reduce the amount of colors and go for a beige centered color palette, while keeping the orange for the warm tones. For the fonts, we decided on fonts that look friendly yet professional. </p>
          </figure>

        </section>

        <section aria-label="Hi Fi Desktop" className="mb-20">
          <h2 className='sm:text-xl md:text-2xl font-bold mb-2'>Hi Fi Desktop</h2>
          <figure className="mb-8">
          <img src={hificharismadesktop1} alt="An image showing Hi Fi Wireframes of the home page and event detail page created in Figma. " className="mb-2 rounded-lg border" />
          <p className="mb-8"> With a new hero banner and tagline, we made it clear on how Charisma wants to portray themselves. We also changed the navigation bar to be more simple, and grouped options depending on the users. Event gatherers on the left, and food lovers on the right.</p>
          <p className="mb-8"> With the old event detail page, It displays events twice, once as cards and again in a calendar below, creating unnecessary repetition. The event detail page buries information in a long single column scroll and the RSVP flow redirects to a separate checkout page with a countdown timer, adding unnecessary steps to mostly free events.
            On the new version we designed, we streamlined info, separated content into a two grid layout for readability.</p>
          </figure>
          <figure className="mb-8">
          <img src={hificharismadesktop2} alt="An image showing Hi Fi Wireframes of the menu and event page created in Figma." className="mb-2 rounded-lg border" />
          <p className="mb-8"> We improved the menu screen to be more readable, and made it clear what items are a signature dish. For desktop users, we added an option to view a photo of the item if they hover over the item name.</p>
          <p className="mb-8"> For the event page, we improved upon it by including only the nescessary info of each event at a glance, as put it in a grid for easy scanability and readability.</p>
        </figure>
        </section>

        <section aria-label="Prototype" className="mb-20">
          <h2 className='sm:text-xl md:text-2xl font-bold mb-2'>Prototype</h2>

          <div className="w-full mb-8 rounded-lg overflow-hidden border">
            <iframe title="Charisma Cafe desktop prototype" src="https://embed.figma.com/proto/25yu3eyob8CHKhw2sJMKIe/FLUI-Hackathon--26?page-id=1%3A2&node-id=335-1535&p=f&viewport=572%2C293%2C0.08&scaling=scale-down&content-scaling=fixed&starting-point-node-id=335%3A1535&embed-host=share" allowfullscreen className="w-full h-[300px] md:h-[850px]"></iframe>
          </div>

          <div className="w-full max-w-[400px] mx-auto rounded-lg overflow-hidden border">
            <iframe title="Charisma Cafe mobile prototype" src="https://embed.figma.com/proto/25yu3eyob8CHKhw2sJMKIe/FLUI-Hackathon--26?page-id=459%3A3860&node-id=459-3862&p=f&viewport=572%2C293%2C0.08&scaling=scale-down&content-scaling=fixed&starting-point-node-id=459%3A3862&embed-host=share" allowfullscreen className="w-full h-[600px] md:h-[950px]"></iframe>
          </div>
        </section>

        <section aria-label="Reflection" className="mb-20">
          <h2 className='sm:text-xl md:text-2xl font-bold mb-2 '>Reflection</h2>
          <p className="mb-2 ">Despite the time constraints, our team did a job well done under the 3 day period. What I (not the team) would've done differently is spend a little bit more time on user research rather than jump to the UI development quickly and communicate better with the team on what needs to be. Regardless, this event was a good learning opportunity and showcases our adaptabilty and able to work under pressure with tight deadlines. </p>
        </section>
      </motion.div >

    </>
  )
}