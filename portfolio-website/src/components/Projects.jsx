import React from "react";
import MediaQuery from 'react-responsive';
import { Link } from "react-router-dom";

function Projects(){
    return(
    <div>
    <h1>Device Test!</h1>
    <MediaQuery minWidth={1024}>
    <Link to="styles">Project 1</Link>
      <MediaQuery minWidth={1824}>
        <p>You also have a huge screen</p>
      </MediaQuery>
    </MediaQuery>
    <MediaQuery maxWidth={768}>
        <p className="text-xs">this is mobile!</p>
      </MediaQuery>
    <MediaQuery minResolution="2dppx">
      {/* You can also use a function (render prop) as a child */}
      {(matches) =>
        matches ? <p>You are retina</p> : <p>You are not retina</p>
      }
    </MediaQuery>
  </div>
)
}

export default Projects
