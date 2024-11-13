import React from "react";
import MediaQuery from 'react-responsive'

function Projects(){
    return(
    <div>
    <h1>Device Test!</h1>
    <MediaQuery minWidth={1224}>
      <p>You are a desktop or laptop</p>
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
