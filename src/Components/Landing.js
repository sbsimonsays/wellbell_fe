import React from "react";
import {Link} from "react-router-dom";

function Landing() {
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl text-gray-700 font-bold mb-5">Be Well</h1>
      <h2>Helping you take care of you</h2>
      <p className="text-gray-500 text-lg">What type of reminder would help you today?</p>
      <button>Physical</button>
      <button>Nutrition</button>
      <button>Selfcare</button>
      <Link to="/login">Continue</Link>
     {/* <button>
      <Link to ="/Login">Continue</Link>
      </button> */}
    </div>
    //Hidden until one above is clicked//
    //should be a link to login page
    //login page will be static for all three buttons
  );
}

export default Landing;
