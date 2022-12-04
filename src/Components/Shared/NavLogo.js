import React from 'react'
import logo from "../../public/wellbell.png"
import "./NavLogo.css"

function NavLogo() {
  return (
    <div className='nav-logo'>
        <img src={logo}/>
    </div>
  )
}

export default NavLogo