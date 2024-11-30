import React from "react";
import MediaQuery from "react-responsive";
import mockuphero from '/src/assets/mockuphero.jpg';
import original from '/src/assets/originalposter.jpg';
import redesign from '/src/assets/newposter.jpg';

function Poster() {
    return (
        <>
            <MediaQuery minWidth={769}>
                <div className="items-center justify-center  min-h-screen">
                    <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start p-6">
                    
                        <div className="md:col-span-4 mb-8">
                        <h1 className="font-bold text-center text-4xl">Poster Redesign</h1>
        <h2 className="font-semibold text-center text-xl">Graphic Design and Branding</h2>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <img src={mockuphero} alt="Mockup Hero" className="w-96 mx-auto"></img>
            </div>       
                     

                   
                        <div className="md:col-span-4 space-y-6">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="text-2xl font-bold">Overview</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <p className="text-gray-700">
                                    This project involved redesigning and enhancing an advertisement while retaining the
                                    original message.
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-4 space-y-6">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="text-2xl font-bold">Original Ad</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <p className="text-gray-700">
                                The original ad had the main message on in a straightforward matter, however, many areas needed improvement like a lack of visuals, more striking typography, and a lack of hierarchy makes the main message somewhat confusing.

                                </p>
                                <div className="mt-4">
                                    <h2 className="text-lg font-bold">Redesign Goals:</h2>
                                    <ul className="list-disc list-inside pl-4">
                                        <li>Add visuals and colors to enhance the poster</li>
                                        <li>Reflect the brand's identity</li>
                                        <li>Enhance the main message of the poster</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-4">
                            <h1 className="text-2xl font-bold">Before and After</h1>
                            <hr className="border-t-2 border-black mt-2 mb-4" />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative overflow-hidden rounded-lg shadow-md">
                                <img src={original} alt="Original Poster"className="w-full h-full object-cover"></img>
                
                                    <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                                        <span className="text-white text-xl">Original</span>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-lg shadow-md">
                                <img src={redesign} alt="New Poster"className="w-full h-full object-cover"></img>
                                    <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                                        <span className="text-white text-xl">Redesign</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="md:col-span-4 space-y-6">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="text-2xl font-bold">Creative Process</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <p className="text-gray-700">
                                Every asset was created in Photoshop, and I chose to replicate the Snellen Chart using the Courier Std Bold, and added a blur effect to add perspective. I added the Snellen Chart to align with the message of eye exams, and added eyeglasses from Adobe Stock to frame the message as the focus of the poster. Finally, I added a blue gradient for color and to make the poster pop out more.
                                </p>
                            </div>
                        </div>

                      
                        <div className="md:col-span-4 space-y-6">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="text-2xl font-bold">Challenges and Solutions</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <p className="text-gray-700">
                                    Key challenges included maintaining simplicity while ensuring the design aligned with
                                    the brand's identity. The removal of unnecessary subtitles allowed the focus to stay
                                    on essential details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
                <div className="p-4 space-y-6">
                  
                    <div className="text-center">
                        <h1 className="text-3xl font-bold">Poster Redesign</h1>
                        <h2 className="text-lg font-semibold mt-1">Graphic Design and Branding</h2>
                        <hr className="border-t-2 border-black mt-2 mb-4" />
                        <img src={mockuphero} alt="Mockup Hero" className="w-full mx-auto rounded-lg"></img>
                    </div>

                 
                    <div  className="bg-beige-100 rounded-lg shadow-lg p-4">
                        <h1 className="text-xl font-bold">Overview</h1>
                        <hr className="border-t-2 border-black mt-2 mb-4" />
                        <p className="text-gray-700">
                            This project involved redesigning and enhancing an advertisement while retaining the original
                            message.
                        </p>
                    </div>

                   
                    <div  className="bg-beige-100 rounded-lg shadow-lg p-4">
                        <h1 className="text-xl font-bold">Original Ad</h1>
                        <hr className="border-t-2 border-black mt-2 mb-4" />
                        <p className="text-gray-700">
                            The original ad had a straightforward message but lacked visuals, hierarchy, and impactful
                            typography.
                        </p>
                    </div>

                 
                    <div>
                        <h1 className="text-xl font-bold text-center">Before and After</h1>
                        <hr className="border-t-2 border-black mt-2 mb-4" />
                        <div className="grid grid-cols-1 gap-4">
                            <div className="relative overflow-hidden rounded-lg shadow-md">
                                 <img src={original} alt="Original Poster" className="w-full"></img>
                                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                                    <span className="text-white text-lg">Original</span>
                                </div>
                            </div>
                            <div className="relative overflow-hidden rounded-lg shadow-md">
                                  <img src={redesign} alt="New Poster"className="w-full"></img>
                                <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                                    <span className="text-white  text-lg">Redesign</span>
                                </div>
                            </div>

                            <div className="space-y-4">
        <div className="bg-beige-100 rounded-lg shadow-md p-4">
            <h1 className="text-xl font-bold">Creative Process</h1>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <p className="text-gray-700">
                Every asset was created in Photoshop, and I chose to replicate the Snellen Chart using the Courier Std Bold, and added a blur effect to add perspective. I added the Snellen Chart to align with the message of eye exams, and added eyeglasses from Adobe Stock to frame the message as the focus of the poster. Finally, I added a blue gradient for color and to make the poster pop out more.
            </p>
        </div>
    </div>

    <div className="space-y-4">
        <div className="bg-beige-100 rounded-lg shadow-md p-4">
            <h1 className="text-xl font-bold">Challenges and Solutions</h1>
            <hr className="border-t-2 border-black mt-2 mb-4" />
            <p className="text-gray-700">
                Key challenges included maintaining simplicity while ensuring the design aligned with the brand's identity. The removal of unnecessary subtitles allowed the focus to stay on essential details.
            </p>
        </div>
    </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </>
    );
}

export default Poster;
