import React from "react";
import MediaQuery from "react-responsive";



function Lelem() {
  return (
    <>
    <MediaQuery minWidth={1024}>
    <div className="items-center justify-center ">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              
        <div className="md:col-span-3 space-y-2">
        <h1 className="font-karma text-3xl font-bold">Lelem Natural Park</h1>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <p>Lelem Natural Park was a group project in my Project Management class during my time in New Media and Web Development at BCIT. It focused on the Agile metholodgy as well as working with group members in a fictional client setting. </p>
        <h1 className="font-karma text-3xl font-bold">Role & Team</h1>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <p>Jose Orola - web developer</p>
            <p>Karleil Villareal - web developer</p>
            <p>Denis Gurcu - graphic designer</p>
            <p>Yurino Murakami - graphic designer</p>
            <p>Samantha Luk- content writer</p>
        <h1 className="font-karma text-3xl font-bold">Project Goals</h1>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            <p>The goal of the project was to create a website for a fictional organization for a client, and to showcase proper usage of the Agile project management methodology. </p>
            </div>
            </div>
            </div>
            </MediaQuery>
    </>
  )
}

export default Lelem;
