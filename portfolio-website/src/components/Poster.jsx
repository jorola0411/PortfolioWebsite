import React from "react";
import MediaQuery from "react-responsive";

function Poster() {
    return(
        <>
        <MediaQuery minWidth={1024}>
        <div className="items-center justify-center ">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              
        <div className="md:col-span-4 space-y-2">
        <h1 className="font-karma text-3xl font-bold text-center text-4xl">Poster Redesign</h1>
        <h2 className="font-karma text-3xl font-semibold text-center text-xl">Graphic Design</h2>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <h1 className="font-karma text-3xl font-bold">Overview</h1>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <p className="font-ubuntu">This project involved redesigning and enhancing an advertisement while retaining the original message.</p>
            <h1 className="font-karma text-3xl font-bold">Original Ad</h1>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <p className="font-ubuntu">The original ad had the main message on in a straightforward matter, however, many areas needed improvement like a lack of visuals, more striking typography, and a lack of hierarchy makes the main message somewhat confusing.
            </p>
            <p className="text-lg">
      <span className="font-bold ">Redesign Goals:</span>

      <ul className="list-disc list-inside pl-4 font-ubuntu">
        <li>Add more color or some kind of visual image related to the message</li>
        <li>Make the poster reflect the brand’s identity</li>
        <li>Make the main message clearer if possible</li>
      </ul>
    </p>
            <h1 className="font-karma text-3xl font-bold">Creative Process:</h1>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <p className="font-ubuntu">For the font, I chose Courier Std Bold as it closely resembles the font used in the Snellen Chart. I chose it because it was a font that is associated with the chart, and the chart is associated with eye exams, maintaining brand consistency and relation. 
 </p>
       <p className="font-ubuntu">The chart itself was made with a blur effect to make the illusion that it’s out of focus, and placed it near the top of the  poster for perspective.
       </p>    
       <p className="font-ubuntu">Then I added an eyeglasses picture (From adobe stock) as well as the main message of “Eye Exams Here” in the middle, with the glasses surrounding the message. By having the message in the middle, as well as the glasses surrounding the message and making the message clear. It adds onto the emphasis that the glasses make the message the “focus” of the poster.
       </p>    
       <p className="font-ubuntu">I added a blue background on the chart to make the whole poster pop out more, and the eyes inspire logo on the bottom to retain brand identity.</p>    
            </div>
            </div>
            </div>
        </MediaQuery>
        </>
    )
}

export default Poster