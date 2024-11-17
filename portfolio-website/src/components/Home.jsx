import React from "react";
function Home(){

    return(
        <div className="min-h-screen flex items-center justify-center ">
        <main className="container mx-auto flex-grow">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-gray-800 font-karma ">
            Hello, my name is <span className="text-black font-bold ">Jose</span>. :)
          </h1>
          </div>
          <p className="text-2xl text-gray-700 mt-4 max-w-2xl mx-auto font-ubuntu  ">
            I'm a UI/UX designer and front-end developer located in the expensive city of Vancouver, BC. My aim is to create passionate and meaningful solutions with my clients/company.
          </p>

          
          <div className="mx-auto space-y-2 max-w-screen-lg mt-20 ">
          <h2 className="font-karma text-3xl font-bold">Featured Works</h2>
          <hr className="border-t-2 border-black  mt-2 mb-4" />
          </div>

          <div className="max-w-screen-lg mx-auto grid grid-cols-4 lg:grid-cols-4 gap-8 items-start">

      
          
          <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-2 ">
                
                <p className="text-9xl flex items-center justify-center h-64 bg-light-grey">📝</p> 
               <p className="mt-2 font-medium font-ubuntu">styles - UI/UX</p>
             </div>
          
          <div className="bg-white p-2 shadow-lg rounded-md border border-gray-200 text-center md:col-span-2 ">
                
                <p className="text-9xl flex items-center justify-center h-64 bg-light-grey">📝</p> 
               <p className="mt-2 font-medium font-ubuntu">styles - UI/UX</p>
             </div>

          
          </div>
          
        
          
      </main>
    </div>
        
    )
}

export default Home