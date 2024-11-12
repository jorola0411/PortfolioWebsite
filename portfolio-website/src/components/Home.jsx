import React from "react";
function Home(){

    return(
        <div className="min-h-screen">
        <main className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-semibold text-gray-800 font-karma ">
            Hello, my name is <span className="text-black font-bold ">Jose</span>. :)
          </h1>
          </div>
          <p className="text-2xl text-gray-700 mt-4 max-w-2xl mx-auto font-ubuntu ">
            I'm a UI/UX designer and front-end developer located in the expensive city of Vancouver, BC. My aim is to create passionate and meaningful solutions with my clients/company.
          </p>

          <h2 className="font-semibold text-3xl font-karma text-center py-12">Featured Works</h2>
    
      </main>
    </div>
        
    )
}

export default Home