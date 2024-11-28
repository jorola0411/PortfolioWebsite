import React from "react";
import MediaQuery from 'react-responsive';

import {  Link } from "react-router-dom";

import "../App.css";


function Home(){

    return(
      
      <MediaQuery minWidth={1024}>
        <div className="flex flex-col  items-center justify-center ">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4  items-start pt-10">
        <div className="container mx-auto  md:col-span-3 flex-grow">
       

          <h1 className="text-5xl   text-gray-800 font-ubuntumono">
          Hello,I'm<span class="bg-gradient-to-r from-beige-300 to-beige-500 bg-clip-text text-transparent font-bold"> Jose</span>. :)
          </h1>
       
          <p className="text-2xl text-gray-700 mt-4 max-w-2xl  font-ubuntu  ">
            I'm a UI/UX designer and front-end developer located in the expensive city of Vancouver, BC. My aim is to create passionate and meaningful solutions with my clients/company.
          </p>
          </div>
          
          <div className="mx-auto space-y-2 max-w-screen-lg mt-20 md:col-span-4">
          <h2 className="font-ubuntumono text-3xl text-center">Featured Works</h2>
          <hr className="border-t-2 border-black  mt-2 mb-4" />
          </div>

         
          
        
          
      
    </div>
    </div>
    </MediaQuery> 

    )
}

export default Home