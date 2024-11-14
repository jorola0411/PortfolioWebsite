import React from "react";
import MediaQuery from "react-responsive";

function Styles(){
    return(
        <>
        <MediaQuery minWidth={1024}>
        <div className="items-center justify-center ">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              
        <div className="md:col-span-3 space-y-2">
        <h1 className="font-karma text-3xl font-bold">styles by jao</h1>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <img src="../src/assets/stylemockup.jpg" alt="hello" className="w-96 mx-auto"></img>
         
            <h1 className="font-karma text-3xl font-bold">Overview</h1>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <p className="font-ubuntu">Styles is a company that provides a mobile clothing shopping experience. Focusing on streetwear, Styles also allows the users to “try on” their clothes before buying,</p>
            
            <p className="text-lg leading-relaxed mb-2 font-ubuntu">
          <span className="font-bold">Duration:</span> 14 hours
        </p>
        <p className="text-lg mb-2 font-ubuntu">
          <span className="font-bold">Role:</span> UI/UX Designer
        </p>
        <p className="text-lg">
          <span className="font-bold ">Tools:</span>
          <ul className="list-disc list-inside pl-4 font-ubuntu">
            <li>Figma (user flow, wireframing and prototype)</li>
            <li>Moqups (Empathy Map)</li>
          </ul>
          </p>

          <h1 className="font-karma text-3xl font-bold">User Persona & Scenario</h1>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <p className="font-ubuntu">Since styles is a streetwear clothing store app, I created a persona who was looking for an app that provides stylish clothing, and something that could assist them in creating outfits.</p>
            <img src="../src/assets/userpersona.png" alt="hello" className="h-70 mx-auto"></img>
            <p className="font-ubuntu">Matthew Thompson, a 23-year-old graphic designer living in Vancouver, BC, leads a hectic life balancing his job, social activities, and personal projects. With a growing interest in streetwear fashion, Matthew often finds himself frustrated with the limited time he has to curate stylish outfits that reflect his personality outside of work. His mornings are rushed, leaving him with no time to choose his clothes, and ends up creating outfits that don’t match. Matthew wants to effortlessly maintain a trendy and cohesive look without sacrificing too much of his precious time.</p>
            <p className="font-ubuntu">Discovering the “styles,” app that promises to simplify his fashion choices, Matthew eagerly explores its features. He is thrilled to find personalized outfit recommendations based on his previous purchases and style preferences, saving him the hassle of mix-and-matching. With just a few taps, Matthew can now put together stylish outfits in minutes, freeing up his time to focus on his career and enjoy his newly found fashion sense.</p>

            <h1 className="font-karma text-3xl font-bold">Empathy Map</h1>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <p className="font-ubuntu">Empathy maps helps the designer see how the user feels or thinks when using the app. It helps the designer by focusing on the user needs. In this case, it highlights various concerns regarding if clothes match, app usability, and highlights of the app.</p>
            <img src="../src/assets/empathymap.png" alt="hello" className="w-70 mx-auto"></img>

            
            <h1 className="font-karma text-3xl font-bold">Wireframes & Prototype</h1>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-200"> <a href="https://www.figma.com/design/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=435-5900&t=GSqSsiB1dNSTdMgr-1" target="blank">
                Wireframe
                </a></button>

            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-200"> <a href="https://www.figma.com/proto/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=435-5900&t=GSqSsiB1dNSTdMgr-1" target="blank">
                Prototype
                </a></button>

            </div>
                </div>
              </div>
        </MediaQuery>
   
        </>
    )
}

export default Styles;