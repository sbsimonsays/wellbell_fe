import React, { useState, useContext, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DashNav from "./DashNav";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { onMessageListener } from "../../Firebase/firebase";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Dashboard/Modal.css";

import yoga from "../../public/yoga-stance.png";
import salad from "../../public/salad.png";
import spa from "../../public/spa.png";
import { retrieveToken } from "../../Firebase/firebase";

import "./Profile.css";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Modal from "./Modal";

const API = process.env.REACT_APP_API_URL;

const messagingAPI =
  "https://us-central1-wellbell-4a40d.cloudfunctions.net/sendNotification";
const testingAPI = process.env.REACT_APP_TESTING_API_URL;

function Profile({ existingUser, setExistingUser }) {
  const [userPreferences, setUserPreferences] = useState(null);
  const [message, setMessage] = useState(null);
  const [show, setShow] = useState(false);
  const { user } = useContext(AuthContext);
  const [FCMToken, setFCMToken] = useState(null);
  const messaging = getMessaging();
  const navigate = useNavigate();

  onMessageListener()
    .then((payload) => {
      setShow(true);
      toast(payload.notification.body, {
        icon: "🔔 ",
        data: {
          title: payload.notification.body,
          text: "We are here again with another article",
        },
      });
    })
    .catch((err) => console.log("failed: ", err));

  // const handleClick = (event) => {
  //   // axios
  //   //   // .get(`${messagingAPI}?token=${FCMToken}`)
  //   //   .get(`${testingAPI}?token=${FCMToken}`)

  //   //   .then((res) => {
  //   //     console.log(res);
  //   //   })
  //   //   .catch((e) => {
  //   //     console.log(e);
  //   //   });
  //   event.preventDefault()
  //   onMessageListener()
  // };

  const showToast = () => {
    toast("Reach for a Healthy Treat!", {
      icon: "🔔 ",
      data: {
        title: "Reach for a Healthy Treat!",
        text: "We are here again with another article",
      },
    });
    const audio = new Audio(
      "https://drive.google.com/uc?export=download&id=1M95VOpto1cQ4FQHzNBaLf0WFQglrtWi7"
    );
    audio.play();
  };

  useEffect(() => {
    if (!user) {
      alert("No user, re-routing to the login page!");
      navigate("/login");
    } else {
      retrieveToken().then((res) => {
        setFCMToken(res);
      });

      if (!existingUser.email) {
        axios
          .get(`${API}/users/${user.uid}`)
          .then((res) => setExistingUser(res.data.payload));
      }
    }
  }, [user]);

  Chart.defaults.font.size = 17;
  Chart.defaults.font.family = "DM Sans, sans-serif";
  Chart.defaults.borderColor = "rgba(0, 0, 0, 0.561)";

  const data = {
    labels: ["Physical", "Nutritional", "Self-Care"],
    datasets: [
      {
        data: [
          existingUser.physicalpoints,
          existingUser.nutritionalpoints,
          existingUser.selfcarepoints,
        ],
        label: "Wellness Points",
        borderColor: "#ff3333",
        backgroundColor: "#6ce5e8",
        fill: true,
      },
    ],
  };

  return (
    <div className="profile-page">
      <DashNav existingUser={existingUser} setExistingUser={setExistingUser} />
      <div className="profile-main">
        <div className="profile-title">
          <h1>{existingUser.firstname}'s Profile</h1>
        </div>
        <div className="profile-info">
          <div className="user-info">
            <div className="user-profile-left">
              <div className="user-details">
                <img className="user-photo" src={existingUser.photourl} />
                <div className="details-list">
                  <h5>
                    <b>First Name:</b> {existingUser.firstname}
                  </h5>
                  <h5>
                    <b>Last Name:</b> {existingUser.lastname}
                  </h5>
                  <h5>
                    <b>Username:</b> {existingUser.username}
                  </h5>
                  <h5>
                    <b>Email:</b> {existingUser.email}
                  </h5>
                </div>
              </div>
              <div>
                <ToastContainer
                  position="top-center"
                  className="Toastify__toast-container"
                />
              </div>
              <div className="reminder-type-blocks">
                <h2>Your WellBell Preferences</h2>
                <div className="reminder-cards">
                  <div
                    onClick={showToast}
                    id="reminder-physical"
                    className={
                      existingUser.physicalpreferences === true
                        ? "solid"
                        : "transparent"
                    }
                  >
                    <h5>Physical </h5>
                    <img className="physical" alt="self-care-img" src={yoga} />
                  </div>
                  <div
                    id="reminder-self-care"
                    className={
                      existingUser.mentalpreferences === true
                        ? "solid"
                        : "transparent"
                    }
                  >
                    <h5>Self-Care</h5>
                    <img className="selfcare" alt="self-care-img" src={spa} />
                  </div>
                  <div
                    id="reminder-nutrition"
                    className={
                      existingUser.nutritionalpreferences === true
                        ? "solid"
                        : "transparent"
                    }
                  >
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
          <div className="points-bars">
            {/* <Modal message={message} /> */}
            <Bar
              type="bar"
              width={130}
              height={65}
              options={{
                title: {
                  display: true,
                  text: "Wellness Points",
                },
                legend: {
                  display: true, //Is the legend shown?
                  position: "top", //Position of the legend.
                },
              }}
              data={data}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
