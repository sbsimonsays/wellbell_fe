import React, { useState, useContext, useEffect } from 'react'
import NavLogo from '../Shared/NavLogo'
import "./UserLogin.css"
import womanWithFlowers from "../../public/WomanWithFlowers.jpg"
import {AuthContext} from "../../context/AuthContext"
import { useNavigate } from 'react-router-dom'
// import axios from "axios";
// const API = process.env.REACT_APP_API_URL


function UserLogin() {
  const [ existingUser, setExistingUser ] = useState({
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
  const { signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  // const getUser = () => {
  //   axios
  //   .get(`${API}/users/${uid}`)
  //   .then(res => setExistingUser(res.data.payload))
  // }
  const handleTextChange = (e) => {
    setExistingUser({...existingUser, [e.target.id]: e.target.value})
     }
  const handleSubmit =() => {
    signIn(existingUser);
    // getUser();
  }
  useEffect(()=>{
    // setExistingUser(user);
    if(user){
      navigate("/dashboard");
    }
  },[user])

  return (

    <div className='login-main'>
        <NavLogo />
        <div className='login-wrapper'>
          <div className='login-left'>
            <form className='login-form'>
              <div className='form-item-wrapper'>
              <h2>Login to WellBell</h2>
              </div>
              <input onChange={handleTextChange} id="email" value={existingUser.email} required placeholder="Email" type="text" />
              <input onChange={handleTextChange} id="password" value={existingUser.password} placeholder="Password"  type="password"/>
              <div className='form-button-wrapper'>
              <button onClick={(e) => {e.preventDefault(); handleSubmit()}}>Sign In</button>
              </div>
            </form>
          </div>
          <div className='login-right'>
            {/* <img src={womanWithFlowers}/> */}
          </div>
        </div>
    </div>
  )
}

export default UserLogin

//if theres a user, navigate to dashboard