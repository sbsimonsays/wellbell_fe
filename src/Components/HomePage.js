import React from "react";
import { Link } from "react-router-dom";
import "../Components/HomePage.css";
import logo from  "../public/wellbell.png"
import {useNavigate} from "react-router-dom"

function HomePage() {
  const navigate = useNavigate()
  return (
    <div className="main-display">
      <div className="main-left">
        <div className="logo-bar">
          <img src={logo}/>
        </div>
        <div className="text-wrapper">
        <h1>{`Helping you take`}</h1> 
        <h1>{`care of you -`}</h1> 
        <h1>{`anywhere, anytime`}</h1>
        <h3 className="tagline-text">
          WellBell is a digital application designed to help you unplug from
          your daily grind and reconnect with your wellbeing
        </h3>
        <div className="home-buttons">
          <button onClick={()=>navigate("/signup")}>Get Started</button>
          <button onClick={()=>navigate("/login")}>Login</button>
        </div>
        </div>

      </div>
      <div className="main-right">
      </div>
    </div>
  );
}

export default HomePage;
