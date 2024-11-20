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
            <p className="font-ubuntu">This project focused on improving an advertisement to better show the intent of the advertisement, as well as not losing the main message of the advertisement. In this case, the ad was an eye exam ad from Eyes Inspire, a local optomitrist.</p>
            <h1 className="font-karma text-3xl font-bold">Original Ad</h1>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <p className="font-ubuntu">The original ad felt bland to me, with not much visual aspects. I liked that it was straight forward with its message, but the lack of striking visuals and didn't give Eyes Inspire an identity.</p>
            <p className="text-lg">
      <span className="font-bold ">Redesign Goals:</span>

      <ul className="list-disc list-inside pl-4 font-ubuntu">
        <li>a visual design more related to eye exams and the message</li>
        <li>more color, images and typography to make the poster stand out</li>
        <li>align it with the brand's indentity.</li>
      </ul>
    </p>
            <h1 className="font-karma text-3xl font-bold">Design Process</h1>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <p className="font-ubuntu">To reflect that the advertisement is for eye exams, I chose to create a Snellen Chart, a chart used in an eye exams. For the Snellen Chart font choice, Courier Std Bold was chosen because it is the font that resembles the most the font used in the chart, it was used for further association to the chart and recognition towards the chart. 
Then, the Snellen Chart was created with the addition of the blur effect to showcase the “out of focus” idea and place it near the top of the poster for the perspective. 
 </p>
            
            </div>
            </div>
            </div>
        </MediaQuery>
        </>
    )
}

export default Poster