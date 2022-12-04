import React, { useState, useContext, useEffect } from 'react'
import NavLogo from '../Shared/NavLogo'
import "./UserLogin.css"
import womanWithFlowers from "../../public/WomanWithFlowers.jpg"
import {AuthContext} from "../../context/AuthContext"
import { useNavigate } from 'react-router-dom'


function UserLogin() {
  const [ existingUser, setExistingUser ] = useState({
    username:"user123",
    email:"user123@pursuit.org",
    password: "ladida",
    ppoints:0,
    npoints:0,
    scpoints:0
  })
  const { signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit =() => {
    signIn(existingUser);
  }
  useEffect(()=>{
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
              <input placeholder="Username" type="text"/>
              <input placeholder="Password"  type="password"/>
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