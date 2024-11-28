import React from "react";
import MediaQuery from "react-responsive";


function Styles() {
    return (
        <>
            <MediaQuery minWidth={769}>
                <div className="items-center justify-center min-h-screen">
                    <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start p-6">
                    
                        <div className="md:col-span-4 mb-8">
                        <h1 className="text-center text-4xl">styles by jao</h1>
        <h2 className=" text-center text-xl">Mobile and UI/UX design</h2>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <img src="../src/assets/stylemockup.jpg" alt="hello" className="w-96 mx-auto"></img>
            </div>       
                     

                   
                        <div className="md:col-span-4 space-y-6">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="text-2xl font-bold">Overview</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

<div className="space-y-4">
  <p>
    Styles is a company that provides a mobile clothing shopping experience. 
    Focusing on streetwear, Styles also allows the users to “try on” their clothes before buying.
  </p>
  <button className="bg-beige-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-200"> <a href="https://www.figma.com/design/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=435-5900&t=GSqSsiB1dNSTdMgr-1" target="blank">
              Wireframe
              </a></button>

          <button className="bg-beige-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-200"> <a href="https://www.figma.com/proto/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=435-5900&t=GSqSsiB1dNSTdMgr-1" target="blank">
              Prototype
              </a></button>
</div>


<div className="space-y-4">
<p className="text-lg leading-relaxed">
    <span className="font-bold">Duration:</span> 14 hours
  </p>
  <p className="text-lg">
    <span className="font-bold">Role:</span> UI/UX Designer
  </p>
  <p className="text-lg">
    <span className="font-bold ">Tools:</span>
    <ul className="list-disc list-inside pl-4">
      <li>Figma (user flow, wireframing and prototype)</li>
      <li>Moqups (Empathy Map)</li>
    </ul>
  </p>
</div>
</div>
</div>
</div>

                        <div className="md:col-span-4 space-y-6">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="text-2xl font-bold">User Persona & Scenario</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="col-span-2">
            <img src="../src/assets/userpersona.jpg" alt="UserPersona"></img>
            </div>
            <div className="col-span-1">
            <p className="mb-3">Matthew Thompson, a 23-year-old graphic designer living in Vancouver, BC, leads a hectic life balancing his job, social activities, and personal projects. With a growing interest in streetwear fashion, Matthew often finds himself frustrated with the limited time he has to curate stylish outfits that reflect his personality outside of work. His mornings are rushed, leaving him with no time to choose his clothes, and ends up creating outfits that don’t match. Matthew wants to effortlessly maintain a trendy and cohesive look without sacrificing too much of his precious time.</p>
            <p>Discovering the “styles,” app that promises to simplify his fashion choices, Matthew eagerly explores its features. He is thrilled to find personalized outfit recommendations based on his previous purchases and style preferences, saving him the hassle of mix-and-matching. With just a few taps, Matthew can now put together stylish outfits in minutes, freeing up his time to focus on his career and enjoy his newly found fashion sense.</p>
        </div>
            </div>
                            </div>
                        </div>
                        <div className="md:col-span-4 space-y-6">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="text-2xl font-bold">Empathy Map</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <p>Empathy maps helps the designer see how the user feels or thinks when using the app. It helps the designer by focusing on the user needs. In this case, it highlights various concerns regarding if clothes match, app usability, and highlights of the app.</p>
                                <img src="../src/assets/empathymap.png" alt="hello" className="w-70 mx-auto"></img>
                            </div>
                        </div>                   
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
                <div className="items-center justify-center  min-h-screen p-4">
                    <div className="space-y-8">
                        {/* Header */}
                        <div>
                            <h1 className="text-2xl font-bold text-center">styles by jao</h1>
                            <h2 className="text-md font-semibold text-center">Mobile and UI/UX design</h2>
                            <hr className="border-t-2 border-black mt-2 mb-4" />
                            <img src="../src/assets/stylemockup.jpg" alt="style mockup" className="w-full mx-auto rounded" />
                        </div>

                        {/* Overview Section */}
                        <div className="bg-beige-100 rounded-lg shadow-lg p-4">
                            <h1 className="text-xl font-bold">Overview</h1>
                            <hr className="border-t-2 border-black mt-2 mb-4" />
                            <p className=" mb-4">
                                Styles is a company that provides a mobile clothing shopping experience. Focusing on
                                streetwear, Styles also allows the users to “try on” their clothes before buying.
                            </p>
                            <div className="space-y-4">
                                <button className="bg-beige-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-200">
                                    <a
                                        href="https://www.figma.com/design/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=435-5900&t=GSqSsiB1dNSTdMgr-1"
                                        target="blank"
                                    >
                                        Wireframe
                                    </a>
                                </button>
                                <button className="bg-beige-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition duration-200">
                                    <a
                                        href="https://www.figma.com/proto/c1Wm6EOGfye2l1I9eW3v6X/Clothing-store-WireFrame?node-id=435-5900&t=GSqSsiB1dNSTdMgr-1"
                                        target="blank"
                                    >
                                        Prototype
                                    </a>
                                </button>
                                <div className="space-y-4">
  <p className="text-base sm:text-lg leading-relaxed">
    <span className="font-bold">Duration:</span> 14 hours
  </p>
  <p className="text-base sm:text-lg">
    <span className="font-bold">Role:</span> UI/UX Designer
  </p>
  <p className="text-base sm:text-lg">
    <span className="font-bold">Tools:</span>
    <ul className="list-disc list-inside pl-4 space-y-2">
      <li>Figma (user flow, wireframing, and prototype)</li>
      <li>Moqups (Empathy Map)</li>
    </ul>
  </p>
</div>
 
                            </div>
                        </div>
                        <div className="md:col-span-4 space-y-6">
  <div className="bg-beige-100 rounded-lg shadow-lg p-6">
    <h1 className="text-xl sm:text-2xl font-bold">
      User Persona & Scenario
    </h1>
    <hr className="border-t-2 border-black mt-2 mb-4" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-start">

    <div className="col-span-1">
        <p className="leading-relaxed mb-4">
          Matthew Thompson, a 23-year-old graphic designer living in Vancouver,
          BC, leads a hectic life balancing his job, social activities, and
          personal projects. With a growing interest in streetwear fashion,
          Matthew often finds himself frustrated with the limited time he has
          to curate stylish outfits that reflect his personality outside of
          work. His mornings are rushed, leaving him with no time to choose his
          clothes, and he ends up creating outfits that don’t match. Matthew
          wants to effortlessly maintain a trendy and cohesive look without
          sacrificing too much of his precious time.
        </p>
        <p className="leading-relaxed">
          Discovering the “styles” app that promises to simplify his fashion
          choices, Matthew eagerly explores its features. He is thrilled to
          find personalized outfit recommendations based on his previous
          purchases and style preferences, saving him the hassle of
          mix-and-matching. With just a few taps, Matthew can now put together
          stylish outfits in minutes, freeing up his time to focus on his career
          and enjoy his newly found fashion sense.
        </p>
      </div>
      <div className="col-span-1 md:col-span-2">
        <img
          src="../src/assets/userpersona.jpg"
          alt="User Persona"
          className="w-full rounded-lg"
        />
      </div>


    
    </div>
  </div>
</div>

                        <div  className="bg-beige-100 rounded-lg shadow-lg p-4">
                        <h1 className="text-xl font-bold">Empathy Map</h1>
                        <hr className="border-t-2 border-black mt-2 mb-4" />

                                <p>Empathy maps helps the designer see how the user feels or thinks when using the app. It helps the designer by focusing on the user needs. In this case, it highlights various concerns regarding if clothes match, app usability, and highlights of the app.</p>
                                <img src="../src/assets/empathymap.png" alt="hello" className="w-35 mx-auto"></img>
                            </div>
                    </div>
                </div>
            </MediaQuery>
        </>
    );
}

export default Styles;
