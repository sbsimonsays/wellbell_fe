import React, { useState } from "react";
import NavLogo from "../Shared/NavLogo";
import "./SignUp.css";
function SignUp() {
  const [formPage, setFormPage] = useState(true);
  const [newUser, setNewUser] = useState({
    username:"",
    email:"",
    ppoints:0,
    npoints:0,
    scpoints:0
  })

  return (
    <div className="signup-main">
      <NavLogo />
      <div className="signup-wrapper">
        <div className="signup-left" />
        <div className="signup-right">
          <form className="signup-form">
            {formPage ? (
              <>
                <div className="signup-item-wrapper">
                  <h2>Sign Up for WellBell</h2>
                </div>
                <input placeholder="Email" type="text" />
                <input placeholder="Password" type="password" />
                <input placeholder="Re-Enter Password" type="password" />
                <div className="form-button-wrapper">
                  <button onClick={(e) => {e.preventDefault();setFormPage(false)}}>Next</button>
                </div>
                <div className="nav-dots">
                  <div className="dot-one" />
                  <div className="dot-two" />
                </div>
              </>
            ) : (
              <>
                <div className="signup-item-wrapper">
                  <h2>Create A Wellness Profile</h2>
                </div>
                <span className="signup-info">Select a username</span>
                <input placeholder="Username" type="text" />
                <div className="signup-checkboxes"></div>
                <div className="double-button-wrapper">
                  <button onClick={(e) => {e.preventDefault();setFormPage(true)}}>Go Back</button>
                  <button>Get Started</button>
                </div>
                <div className="nav-dots">
                  <div className="dot-two" />
                  <div className="dot-one" />
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
