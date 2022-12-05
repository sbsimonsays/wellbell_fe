import React, { useState, useContext, useEffect } from "react";
import NavLogo from "../Shared/NavLogo";
import "./SignUp.css";
import {AuthContext} from "../../context/AuthContext"
import { useNavigate } from "react-router-dom"
function SignUp() {
  const [formPage, setFormPage] = useState(true);
  const [newUser, setNewUser] = useState({
    username:"user1234",
    email:"user1243@gmail.com",
    password: "ladida",
    firstName:"",
    lastName: "", 
    
  })

  
  const {createUser, user} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit =() => {
    createUser(newUser) 
  }
  useEffect(()=>{
    if(user){
    navigate("/dashboard") 
    }

  },[user])

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
                <span className="signup-info">Select the types of reminders you wish to receive</span>
                

                <div className="signup-checkboxes">
                  <div>
                  <input type="checkbox" name="physical"/>
                  <label for="physical">Physical Wellness</label>
                  </div>
                  <div>
                  <input type="checkbox" name="nutritional"/>
                  <label for="nutritional">Nutritional Wellness</label>
                  </div>
                </div>
                <div className="signup-checkboxes-two">
                  <div>
                  <input type="checkbox" name="mental"/>
                  <label for="mental">Mental Wellness</label>
                  </div>
                </div>
                <div className="double-button-wrapper">
                  <button onClick={(e) => {e.preventDefault();setFormPage(true)}}>Go Back</button>
                  <button onClick={(e) => {e.preventDefault(); handleSubmit()}}>Get Started</button>
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


//if theres a user navigate to dashboard
