import React from 'react'
import logo from "../../public/wellbell.png"
import "./NavLogo.css"
import {useNavigate} from "react-router-dom"

function NavLogo() {
  const navigate = useNavigate()
  return (
    <div className='nav-logo'>
        <img onClick={()=>navigate("/")} src={logo}/>
    </div>
  )
}

export default NavLogo