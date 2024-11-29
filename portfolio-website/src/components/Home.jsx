import React from "react";
import MediaQuery from 'react-responsive';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import {  Link } from "react-router-dom";

import "../App.css";


function Home(){

    return(
      
      <MediaQuery minWidth={1024}>
        <div className="flex flex-col  items-center justify-center ">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4  items-start pt-10">
        <div className="container mx-auto  md:col-span-3 flex-grow">
       
        
          <h1 className="text-5xl" data-aos="fade-left">
          Hello,I'm<span class="bg-gradient-to-r from-beige-300 to-beige-500 bg-clip-text text-transparent font-bold"> Jose</span>.
          </h1>
        
          <p className="text-2xl mt-5 max-w-3xl " data-aos="fade-right">
            I'm a UI/UX designer and front-end developer located in the expensive city of Vancouver, BC. My aim is to create passionate and meaningful solutions with my clients/company.
          </p>
          </div>
          
          <div className="mx-auto space-y-2 max-w-screen-lg mt-20 md:col-span-4">
          <h2 className="text-3xl text-center">Featured Projects and experimenting lol</h2>
          <hr className="border-t-2 border-black  mt-2 mb-4" />
          </div>

         
          
        
          
      
    </div>
    </div>
    </MediaQuery> 

    )
}

export default Home