import React, { useState, useContext, useEffect } from "react";
import {Routes, Route, Navigate} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

import DashNav from './DashNav'
// import Profile from "../Dashboard/Profile.js"
// import Notifications from './Notifications.js
// import Rewards from "./Rewards.js"
import "./Dashboard.css"

function Dashboard() {
  const {user} = useContext(AuthContext);
  const navigate = useNavigate()
  
  useEffect(()=>{
    if(!user){
      navigate("/login")
    }

  },[user])
  return (
    <div className='dashboard'>
      <DashNav />
        {/* <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/bells" element={<Notifications/>} />
          <Route path="/rewards" element={<Rewards/>} />
        </Routes> */}
    </div>
  )
}

export default Dashboard

//