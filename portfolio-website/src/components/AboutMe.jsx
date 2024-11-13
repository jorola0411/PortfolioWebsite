import React from "react";

function AboutMe(){
  return(
    
      <div className="items-center justify-center ">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              
          <div className="md:col-span-2 space-y-4">
            <h1 className="font-karma text-3xl font-bold">
              Hi, I'm Jose!
            </h1>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <p className="font-ubuntu">
              I'm a UI/UX designer and Front-end developer currently residing in Vancouver, BC.
            </p>
            <p className="font-ubuntu">
              I've always loved analyzing the nuances behind many things. Whether it be media, art, UI, or just about anything, I've found joy in how design influences the perception and interaction of people.
            </p>
            <p className="font-ubuntu">
              Wanting to embrace my creative side, I took on the New Media Design and Web Development Course at BCIT.
            </p>
            <p className="font-ubuntu">
              From there, my goal is to create solutions that are made with passion and aesthetically pleasing.
            </p>
          </div>

              <div className="flex justify-center md:justify-end">
                <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center ">
                  <img
                    src="src/assets/jose.jpg"
                    className="mb-2 rounded-sm object-cover w-full h-64"
                  />
                  <p className="mt-2 font-medium font-ubuntu">Jao</p>
                </div>
              </div>
              <div className="md:col-span-3 space-y-2">
                <h1 className="font-karma text-3xl font-bold">
                When I’m not working, I’m most likely..
                </h1>
                <hr className="border-t-2 border-black  mt-2 mb-4" />
              </div>
              
              <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center ">
                
                   <p className=" text-5xl mb-2 rounded-sm object-cover w-full h-64">📝</p> 
                  <p className="mt-2 font-medium font-ubuntu">Jao</p>
                </div>
        </div>
      </div>

  )
}

export default AboutMe;