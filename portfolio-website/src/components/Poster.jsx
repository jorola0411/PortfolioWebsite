import React from "react";
import MediaQuery from "react-responsive";

function Poster() {
    return(
        <>
        <MediaQuery minWidth={1024}>
        <div className="items-center justify-center ">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
              
        <div className="md:col-span-4 space-y-2">
        <h1 className="font-karma text-3xl font-bold text-center text-4xl">Poster Redesign</h1>
        <h2 className="font-karma text-3xl font-semibold text-center text-xl">Graphic Design</h2>
            <hr className="border-t-2 border-black  mt-2 mb-4" />
            </div>
            </div>
            </div>
        </MediaQuery>
        </>
    )
}

export default Poster