import React from "react";
import {Link} from "react-router-dom"

function Landing() {
  return (
    <div>
      <h1>Be Well</h1>
      <h2>Helping you take care of you</h2>
      <p>What type of reminder would help you today?</p>
      <button>Physical</button>
      <button>Nutrition</button>
      <button>Selfcare</button>
      <Link><button>Continue</button></Link>
    </div>
    //Hidden until one above is clicked//
    //should be a link to login page
    //login page will be static for all three buttons
  );
}

export default Landing;
