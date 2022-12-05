import React from 'react'
import "./DashNav.css"
import logo from "../../public/wellbell.png"
import { useNavigate } from "react-router-dom"



function DashNav() {
  const navigate =  useNavigate() 
  return (
    <div className='dash-nav-main'>

    <img onClick={()=>navigate("/dashboard")} src={logo} className="logo"/>
    <span className='user-dash-greeting'>Welcome User!</span>
    <i onClick={()=>navigate("/dashboard/profile")} className="dash-icon fa-solid fa-house"></i>
    <i onClick={()=>navigate("/dashboard/bells")} className="dash-icon fa-regular fa-bell"></i>
    <i onClick={()=>navigate("/dashboard/rewards")} className="dash-icon fa-solid fa-award"></i>
    <i onClick={()=>navigate("/about")} className="dash-icon-info fa-solid fa-circle-info"></i>
    </div>
  )
}

export default DashNav