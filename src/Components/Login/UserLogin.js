import React from 'react'
import NavLogo from '../Shared/NavLogo'
import "./UserLogin.css"
import womanWithFlowers from "../../public/WomanWithFlowers.jpg"
function UserLogin() {
  return (
    <div className='login-main'>
        <NavLogo />
        <div className='login-wrapper'>
          <div className='login-left'>
            <form className='login-form'>
              <h2>Login to WellBell</h2>
              <input type="text"/>
              <input type="password"/>
              
              <button>Sign In</button>
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