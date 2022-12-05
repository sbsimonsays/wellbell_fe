import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
// import SideNav from "./SideNav";

const API = process.env.REACT_APP_API_URL;

function RewardsComp() {
  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState([]);
  console.log(user);

  useEffect(() => {
    axios
      .get(`${API}users/YNWTla5dkzVnleNytVIH93DYFNf1`)
      .then((res) => {
        if (res.data.payload) {
          setCurrentUser(res.data.payload);
        }
      })
      .catch((err) => console.log(err));
  }, [API]);

  return (
    <div className="sidebar">
      <img src="../wellbell.png" alt="logo" width="200" height="10%"></img>


      <div className="points">
        {/* - interpolate user's name into the h1 tag for rewards */}
        {/* <h1>Rewards</h1> */}

        {/* - ppoints from backend in slide bar */}
        <p>Points until next reward: {currentUser.physicalpoints}</p>

        {/* - npoints from backend in slide bar */}
        <p>Points until next reward: {currentUser.nutritionalpoints}</p>

        {/* - scpoints from backend in slide bar */}
        <p>Points until next reward: {currentUser.selfcarepoints}</p>
        <p>{currentUser.}</p>
      </div>


    </div>
  );
}

export default RewardsComp;
