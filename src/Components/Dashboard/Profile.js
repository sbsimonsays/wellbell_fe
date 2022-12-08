import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DashNav from "./DashNav";
import yoga from "../../public/yoga-stance.png";
import salad from "../../public/salad.png";
import spa from "../../public/spa.png";

import "./Profile.css";

const API = process.env.REACT_APP_API_URL;

function Profile() {
  const [userPreferences, setUserPreferences] = useState({
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    physicalpoints: 0,
    nutritionalpoints: 0,
    selfcarepoints: 0,
    physicalpreferences: null,
    nutritionalpreferences: null,
    mentalpreferences: null,
    photourl: ''
  });

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      alert("No user, re-routing to the login page!");
      navigate("/login");
    } else {
      if (userPreferences) {
        axios
          .get(`${API}/users/YNWTla5dkzVnleNytVIH93DYFNf1`)
          .then((res) => setUserPreferences(res.data.payload));
      }
    }
  }, [user]);

  return (
    <div className="profile-page">
      <DashNav />
      <div className="profile-main">
        <div className="profile-title">
          <h1>
            {userPreferences.firstname} {userPreferences.lastname}'s Profile
          </h1>
        </div>
        <div className="user-info">
          <div className="user-profile-left">
            <div className="user-details">
              <img
                className="user-photo"
                src={userPreferences.photourl}
              />
              <div className="details-list">
                <h5>First Name: {userPreferences.firstname}</h5>
                <h5>Last Name: {userPreferences.lastname}</h5>
                <h5>Username: {userPreferences.username}</h5>
                <h5>Email: {userPreferences.email}</h5>
              </div>
            </div>
            <div className="reminder-type-blocks">
              <h2>Your WellBell Preferences</h2>
              <div className="reminder-cards">
                <div
                  id="reminder-physical"
                  className={
                    userPreferences.physicalpreferences === true
                      ? "solid"
                      : "transparent"}>
                  <h5>Physical</h5>
                  <img className="physical" alt="self-care-img" src={yoga} />
                </div>
                <div
                  id="reminder-self-care"
                  className={
                    userPreferences.mentalpreferences === true
                      ? "solid"
                      : "transparent"}>
                  <h5>Self-Care</h5>
                  <img className="selfcare" alt="self-care-img" src={spa} />
                </div>
                <div
                  id="reminder-nutrition"
                  className={
                    userPreferences.nutritionalpreferences === true
                      ? "solid"
                      : "transparent"}>
                  <h5>Nutritional</h5>
                  <img
                    className="nutritional"
                    alt="self-care-img"
                    src={salad}
                  />
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
