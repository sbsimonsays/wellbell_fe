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
    <div>
      <h1>Be Well</h1>
      <h2>Helping you take care of you</h2>
      <p>What type of reminder would help you today?</p>
      <button>Physical</button>
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
