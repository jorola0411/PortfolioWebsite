import React from "react";
import MediaQuery from "react-responsive";



function Lelem() {
  return (
    <>
    <MediaQuery minWidth={1024}>
    <div className="items-center justify-center ">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              
        <div className="md:col-span-4 mb-8">
                        <h1 className="font-karma text-3xl font-bold text-center text-4xl">Lelem Natural Park</h1>
        <h2 className="font-karma text-3xl font-semibold text-center text-xl">Front-End Development</h2>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <img src="../src/assets/lelemhero.jpg" alt="hello" className="w-96 mx-auto"></img>
            </div>       
                     
            <div className="md:col-span-4 space-y-6">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="font-karma text-2xl font-bold">Overview</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <p className="font-ubuntu text-gray-700">
                                    This project involved redesigning and enhancing an advertisement while retaining the
                                    original message.
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-4 space-y-6">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="font-karma text-2xl font-bold">Team and Roles</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                                <div className="space-y-4">



    <ul className="list-disc list-inside pl-4 font-ubuntu">
      <li>Jose Orola - web developer</li>
      <li>Karleil Villareal - web developer</li>
      <li>Yurino Murakami - graphic designer</li>
      <li>Denis Gurcu - graphic designer</li>
      <li>Samantha Luk- content writer</li>
    </ul>
</div>
                          
                                </div>
                            </div>
           


                        <div className="md:col-span-4 space-y-6">
                            <div className="bg-beige-100 rounded-lg shadow-lg p-6">
                                <h1 className="font-karma text-2xl font-bold">Role</h1>
                                <hr className="border-t-2 border-black mt-2 mb-4" />
                       
                                <p>
                                <span className="font-semibold "> Along with another front end developer, we were tasked with:</span>
                                <ul className="list-disc list-inside pl-4 font-ubuntu">
                                  <li>Designing the UI along with medium fidelity wireframes</li>
                                  <li>Coding of fade-in animations using keyframes</li>
                                  <li>Basic javascript for the slide show and donate and ticket button functionality</li>
                                  <li>Collaborating with the graphic designers to align with branding and styling</li>
                                </ul>
                                 </p>
                            </div>
                        </div>

          
            </div>
            </div>
        
            </MediaQuery>
    </>
  )
}

export default Lelem;
