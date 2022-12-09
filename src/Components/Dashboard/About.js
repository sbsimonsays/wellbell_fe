import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DashNav from "./DashNav";
import "./About.css";

import jede from "../../public/jede.jpeg"
import john from "../../public/john.jpeg"
import kim from "../../public/kim.jpeg"
import spencer from "../../public/spencer2.jpeg"
import zane from "../../public/zane3.jpeg"

import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;


export default function About({ existingUser, setExistingUser }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      if (!existingUser.email) {
        axios
          .get(`${API}/users/${user.uid}`)
          .then((res) => setExistingUser(res.data.payload));
      }
    }
  }, [user]);
  return (

    <div className='about-page'>
         <DashNav existingUser={existingUser} setExistingUser={setExistingUser} />
    <div className='about-main'>
<div className='about-title'>
<h1>About WellBell</h1>
</div>
       <div className='about-info'>
<div className='our-mission'>
  <div className='our-mission-text'>
<h3>Our Mission</h3>
<h5>WellBell was designed with remote workers in mind!  As easy as it may be to work from the comfort of your home
it is just as easy to neglect your wellbeing while doing so. According to the American Psychiatric Association, the majority of  employees working from home have reported experiencing negative mental health impacts. WellBell is here to step in and help you take care of you with daily physical, nutritional and self care reminders! </h5>
<h3>Our Team</h3>
  </div>
</div>
<div className='our-team'>
  <div className='our-team-faces'>
    <img alt="jede" src={jede}/>
    <img alt="kim" src={kim}/>
    <img alt="john" src={john}/>
    <img alt="spencer" src={spencer}/>
    <img alt="zane" src={zane}/>
  </div>
</div>
       </div>
    </div>
    </div>
  );
}
