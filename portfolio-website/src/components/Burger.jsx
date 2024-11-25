import React from "react";
import MediaQuery from "react-responsive";


function Burger(){
    return(
        <>
        <MediaQuery minWidth={769}>
        <div className="items-center justify-center ">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              
        <div className="md:col-span-4 space-y-2">
        <h1 className="font-karma text-3xl font-bold text-center text-4xl">Jao's Burgers</h1>
        <h2 className="font-karma text-3xl font-semibold text-center text-xl">Front-End Development</h2>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <img src="../src/assets/burgerhero.jpg" alt="Burger Hero" className="w-96 mx-auto"></img>
            </div>
          
            <div className="md:col-span-4 space-y-6">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="font-karma text-2xl font-bold">Overview</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <p className="font-ubuntu text-gray-700">
                                    This project involved in creating fictional website for mobile, tablet, and desktop formats. It was also my first time creating a website that responds to different screen sizes.
                                </p>
                            </div>
                        </div>

                       
                        <div className="md:col-span-4 space-y-6">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="font-karma text-2xl font-bold">Project Goals</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <ul className="list-disc list-inside pl-4 font-ubuntu">
                                        <li>Creating a website responsive across desktop, tablet, and mobile</li>
                                        <li>Learning the fundamentals of responsive design</li>
                                        <li>Applying responsive design techniques</li>
                                    </ul>
                            </div>
                        </div>

                        
                       
                        
                        <div className="md:col-span-4 space-y-6">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="font-karma text-2xl font-bold">Wireframing</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <img src="../src/assets/burgerwireframe.png" alt="Burger Wireframe" className="w-96 mx-auto"></img>
                                <p className="font-ubuntu py-2">
                                First, I created high fidelity wireframes with the topic of a burger restaurant in mind; I looked at other restaurants for reference on designing,
                                as well as taking to account my current skill level of coding, and finalized the design above.
                                </p>
                            </div>
                        </div>




                        <div className="md:col-span-4 space-y-6">
                            <div  className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="font-karma text-2xl font-bold">Takeaways</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <p className="font-ubuntu">
                                    I learned many things from this project,
                                    such as understanding the relation of CSS grid/flexbox and how to use them properly in responsivenes, as well as how to use media queries properly. 
                                    As well as a mental note for the future; to start mobile first then work your way up.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>
        </>
    )
}

export default Burger