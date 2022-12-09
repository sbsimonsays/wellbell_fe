import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Bells from "./Bells";
import { ToastContainer } from "react-toastify";
// import {Link} from "react-router-dom"

function Landing({socket, bells}) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //sends the event details via Socket.io
    socket.emit("newEvent", { hour, minute, title });
    //👇🏻 shows toast notifications
    toast.success(`${title} is successfully added!`);
    setHour("");
    setMinute("");
    setTitle("");}
    
  return (
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <h1 className="text-3xl text-gray-700 font-bold mb-5">Be Well</h1>
      <h2>Helping you take care of you</h2>
      <p className="text-gray-500 text-lg">What type of reminder would help you today?</p>
      <div>
        <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full p-2 space-x-4 border rounded-lg focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
              </svg>
              <p>Physical</p>
            </button>
            </div>
      <button>Nutrition</button>
      <button>Selfcare</button>
     <button>Continue</button>
     <button>Any Message</button>
     <br/>
     <br/>
  
        <form onSubmit={handleSubmit}>
          <div className="title__container">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="hour">Select Hour</label>
            <input
              type="number"
              min={0}
              max={23}
              name="hour"
              id="hour"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="minute">Select Minute</label>
            <input
              type="number"
              min={0}
              max={59}
              name="minute"
              id="minute"
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
              required
            />
          </div>
          <button>Submit</button>
        </form>
        <Bells bells= { bells }/>
        <ToastContainer />



    </div>
    //Hidden until one above is clicked//
    //should be a link to login page
    //login page will be static for all three buttons
  );
}


export default Landing;
