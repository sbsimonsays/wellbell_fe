import React, { useState, useContext, useEffect } from "react";
import NavLogo from "../Shared/NavLogo";
import "./SignUp.css";
import {AuthContext} from "../../context/AuthContext"
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL
function SignUp() {
  const [formPage, setFormPage] = useState(true);
  const [newUser, setNewUser] = useState({
     email:"", 
     username:"", 
     password:"",
     firstname:"", 
     lastname:"", 
     physicalpoints:0, 
     nutritionalpoints:0, 
     selfcarepoints:0, 
     physicalpreferences:"",
    nutritionalpreferences:"", 
    mentalpreferences:""
  })

  
  const {createUser, user} = useContext(AuthContext);
  const navigate = useNavigate();

  
  const handleTextChange = (e) => {
 setNewUser({...newUser, [e.target.id]: e.target.value})
  }
  const addUser = (newUser) => {
    axios
    .post(`${API}/users`, newUser)
    .then(res => setNewUser(res.payload.value))
  }
  const handleSubmit =() => {
    addUser(newUser)
    createUser(newUser);
    navigate("/dashboard");
    console.log(newUser)
    
    // setNewUser(newUser);
  }
  useEffect(()=>{
    // console.log(user)
    if(user){
    navigate("/dashboard") 
    }

  },[])
 

  return (
    <div className="signup-main">
      <NavLogo />
      <div className="signup-wrapper">
        <div className="signup-left" />
        <div className="signup-right">
          <form className="signup-form">
            {/* {newUser.email ? newUser.email : "no user"}
            {newUser.password ? newUser.password : "no pword"}
            {newUser.username ? newUser.username : "no username"} */}
            {formPage ? (
              <>
                <div className="signup-item-wrapper">
                  <h2>Sign Up for WellBell</h2>
                </div>
                <input onChange= {handleTextChange} id= "email" value={newUser.email} required placeholder="Email" type="text" />
                <input onChange= {handleTextChange} id= "password" value={newUser.password} required placeholder="Password" type="password" />
                {/* <input id= "re-password" placeholder="Re-Enter Password" type="password" /> */}
                <div className="form-button-wrapper">
                  <button 
                  onClick={(e) => {e.preventDefault();setFormPage(false)}}>Next</button>
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
                <span className="signup-info">Add a username</span>
                <input onChange= {handleTextChange} id="username" value={newUser.username} placeholder="username" type="text" />
                <span className="signup-info">First name</span>
                <input onChange= {handleTextChange} id="firstname" value={newUser.firstname} placeholder="First name" type="text" />
                <span className="signup-info">Last name</span>
                <input onChange= {handleTextChange} id="lastname" value={newUser.lastname} placeholder="Last name" type="text" />
                <span className="signup-info">Select the types of reminders you wish to receive</span>
                

                <div className="signup-checkboxes">
                  <div>
                  <input type="checkbox" name="physical"/>
                  <label htmlFor="physical">Physical Wellness</label>
                  </div>
                  <div>
                  <input type="checkbox" name="nutritional"/>
                  <label htmlFor="nutritional">Nutritional Wellness</label>
                  </div>
                </div>
                <div className="signup-checkboxes-two">
                  <div>
                  <input type="checkbox" name="mental"/>
                  <label htmlFor="mental">Mental Wellness</label>
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
