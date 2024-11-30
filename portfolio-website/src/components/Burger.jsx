import React from "react";
import MediaQuery from "react-responsive";
import burgerhero from '/src/assets/burgerhero.jpg';
import burgerwf from '/src/assets/burgerwireframe.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
// ..
AOS.init(); 
function Burger(){
    return(
        <>
        <MediaQuery minWidth={769}>
        <div className="items-center justify-center ">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              
        <div className="md:col-span-4 space-y-2">
        <h1 className=" text-3xl font-bold text-center text-4xl" data-aos="fade-down">Jao's Burgers</h1>
        <h2 className="font-semibold text-center text-xl"  data-aos="fade-down">Front-End Development</h2>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <img src={burgerhero} alt="Burger Hero" className="w-96 mx-auto rounded"></img>
            </div>
          
            <div className="md:col-span-4 space-y-6" data-aos="flip-right">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="text-2xl font-bold">Overview</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <p>
                                    This project involved in creating fictional website for mobile, tablet, and desktop formats. It was also my first time creating a website that responds to different screen sizes.
                                </p>
                            </div>
                        </div>

                       
                        <div className="md:col-span-4 space-y-6" data-aos="flip-right">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="text-2xl font-bold">Project Goals</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <ul className="list-disc list-inside pl-4">
                                        <li>Creating a website responsive across desktop, tablet, and mobile</li>
                                        <li>Learning the fundamentals of responsive design</li>
                                        <li>Applying responsive design techniques</li>
                                    </ul>
                            </div>
                        </div>

                        
                       
                        
                        <div className="md:col-span-4 space-y-6" data-aos="flip-right">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="text-2xl font-bold">Wireframing</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <img src={burgerwf} alt="Burger Wireframe" className="w-96 mx-auto rounded"></img>
                                <p className="py-2">
                                First, I created high fidelity wireframes with the topic of a burger restaurant in mind; I looked at other restaurants for reference on designing,
                                as well as taking to account my current skill level of coding, and finalized the design above.
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-4 space-y-6" data-aos="flip-right">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="text-2xl font-bold">Challenges</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <p className="py-2">
                                Some challenges I had was using grids. I had trouble understanding the different grid terms, such as template-column and column-span. 
                                This project was the first time using Media Queries as well, so I had to figure out what lines of code needed changing rather than copy and pasting the same code for the media queries, as to not repeat redundent code.
                                </p>
                            </div>
                        </div>




                        <div className="md:col-span-4 space-y-6" data-aos="flip-right">
                            <div  className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className=" text-2xl font-bold">Takeaways</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <p>
                                    I learned many things from this project,
                                    such as understanding the relation of CSS grid/flexbox and how to use them properly in responsivenes, as well as how to use media queries properly. 
                                    As well as a mental note for the future; to start mobile first then work your way up.
                                    Using grids and flexbox to your advantage is incredibly helpful and makes the media queries easier to manage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MediaQuery>

        <MediaQuery maxWidth={768}>
        <div className="items-center justify-center  min-h-screen p-4" data-aos="flip-right">
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-2xl font-bold text-center">Jao's Burgers</h1>
                            <h2 className="text-md font-semibold text-center">Front-End Development</h2>
                            <hr className="border-t-2 border-black mt-2 mb-4" />
                            <img src={burgerhero} alt="Burger Hero" className="w-96 mx-auto rounded"></img>
                        </div>

                        <div className="space-y-6" data-aos="flip-right">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="text-xl font-bold">Overview</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <p className="text-sm">
                                    This project involved in creating fictional website for mobile, tablet, and desktop formats. It was also my first time creating a website that responds to different screen sizes.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6" data-aos="flip-right">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6" data-aos="flip-right">
                                <h1 className="text-xl font-bold">Project Goals</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <ul className="list-disc list-inside pl-4 text-sm">
                                        <li>Creating a website responsive across desktop, tablet, and mobile</li>
                                        <li>Learning the fundamentals of responsive design</li>
                                        <li>Applying responsive design techniques</li>
                                    </ul>
                            </div>
                        </div>

                        <div className="space-y-6" data-aos="flip-right">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6" data-aos="flip-right">
                                <h1 className="text-xl font-bold">Wireframing</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <img src={burgerhero} alt="Burger Hero" className="w-96 mx-auto rounded"></img>
                                <p className="py-2 text-sm">
                                First, I created high fidelity wireframes with the topic of a burger restaurant in mind; I looked at other restaurants for reference on designing,
                                as well as taking to account my current skill level of coding, and finalized the design above.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6" data-aos="flip-right">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6" data-aos="flip-right">
                                <h1 className="text-xl font-bold">Challenges</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <p className="py-2 text-sm">
                                Some challenges I had was using grids. I had trouble understanding the different grid terms, such as template-column and column-span. 
                                This project was the first time using Media Queries as well, so I had to figure out what lines of code needed changing rather than copy and pasting the same code for the media queries, as to not repeat redundent code.
                                </p>
                            </div>
                        </div>

                        <div className=" space-y-6" data-aos="flip-right">
                            <div  className="bg-beige-100 rounded-lg shadow-lg p-6" data-aos="flip-right">
                                <h1 className="text-xl font-bold">Takeaways</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <p className="text-sm">
                                    I learned many things from this project,
                                    such as understanding the relation of CSS grid/flexbox and how to use them properly in responsivenes, as well as how to use media queries properly. 
                                    As well as a mental note for the future; to start mobile first then work your way up.
                                    Using grids and flexbox to your advantage is incredibly helpful and makes the media queries easier to manage.
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