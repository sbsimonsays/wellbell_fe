import React from "react";
import DashNav from "./DashNav";
import yoga from "../../public/yoga-stance.png" 
import salad from "../../public/salad.png" 
import spa from "../../public/spa.png" 

import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">
      <DashNav />
      <div className="profile-main">
        <div className="profile-title">
          <h1>User's Profile</h1>
        </div>
        <div className="user-info">
          <div className="user-profile-left">
            <div className="user-details">
            <img className="user-photo" src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg"/>
              <div className="details-list">
              <h5>First Name:</h5>
              <h5>Last Name:</h5>
              <h5>Username:</h5>
              <h5>Email:</h5>
              </div>
            </div>
          <div className="reminder-type-blocks">
            <h2>Your WellBell Types</h2>
            <div className="reminder-cards">
            <div className="reminder-physical">
              <h5>Physical</h5>
              <span>Currently Selected</span>
              <img alt="physical-img" src={yoga}/>
            </div>
            <div className="reminder-self-care">
            <h5>Self-Care</h5>
            <span>Currently Selected</span>
            <img alt="self-care-img" src={spa}/>
            </div>
            <div className="reminder-nutrition">
            <h5>Nutritional</h5>
            <span>Currently Selected</span>
            <img alt="nutrition-img" src={salad}/>
            </div>
          </div>
            </div>
          </div>
        </div>
        <div className="points-bars"></div>
      </div>
    </div>
  );
}

export default Profile;
