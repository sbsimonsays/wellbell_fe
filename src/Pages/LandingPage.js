import React from "react";
import Landing from "../Components/Landing";



function LandingPage( { socket }) {
  return (
    <div>
      <Landing socket={ socket }/>
     
    </div>
    //Hidden until one above is clicked//
    //should be a link to login page
    //login page will be static for all three buttons
  );
}

export default LandingPage;
