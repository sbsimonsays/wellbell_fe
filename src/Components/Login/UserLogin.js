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
              <div className='form-item-wrapper'>
              <h2>Login to WellBell</h2>
              </div>
              <input placeholder="Username" type="text"/>
              <input placeholder="Password"  type="password"/>
              <div className='form-button-wrapper'>
              <button>Sign In</button>
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