import React, { useContext, useEffect, useState } from "react";
import DashNav from "./DashNav";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Notifications.css";
import salad from "../../public/salad.png";
import yoga from "../../public/yoga-stance.png";
import spa from "../../public/spa.png";
import Modal from "./Modal";

//add list
//add button simulates adding to ^list

const API = process.env.REACT_APP_API_URL;

function Notifications({ existingUser, setExistingUser }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [bells, setBells] = useState([]);

  useEffect(() => {
    if (!user) {
      alert("No user, re-routing to the login page!");
      navigate("/login");
    } else {
      if (!existingUser) {
        axios
          .all(axios.get(`${API}/users/${user.uid}`), axios.get(`${API}/bells`))
          .then(
            axios.spread(function (userResponse, bellsResponse) {
              setExistingUser(userResponse.data.payload);
              setBells(bellsResponse.data.payload);
            })
          )
          .catch((err) => console.err);
      }
    }
  }, []);

  // useEffect(() => {
  //   if (!user) {
  //     alert("No user, re-routing to the login page!");
  //     navigate("/login");
  //   } else {
  //     if (!existingUser) {
  //       axios
  //         .get(`${API}/users/${user.uid}`)
  //         .then((res) => setExistingUser(res.data.payload));
  //     }
  //   };

  //   axios
  //     .get(`${API}/bells`)
  //     .then((res) => {
  //       setBells(res.data.payload);
  //       console.log(bells);
  //     })
  //     .catch((err) => console.err);
  // }, [user], [bells]);

  // useEffect(() => {
  //   if (!user) {
  //     alert("No user, re-routing to the login page!");
  //     navigate("/login");
  //   } else {
  //     if (!existingUser) {
  //       axios
  //         .get(`${API}/users/${user.uid}`)
  //         .then((res) => setExistingUser(res.data.payload));
  //     }
  //   }
  // }, [user]);

  return (
    <div className="bells-page">
      <DashNav existingUser={existingUser} setExistingUser={setExistingUser} />
      <div className="bells-main">
        <div className="bells-title">
          <h1>{existingUser.firstname}'s Recent WellBells</h1>
          {console.log(existingUser)}
        </div>
        <div className="recent-bells">
          {console.log(bells)}
          <div className="bells-left">
            <div className="single-bell-left-wrapper">
              <div className="single-bell-left-one">
                <div className="type-image">
                  <img alt="nutritional-img" src={salad} />
                </div>
                <div className="type-text">
                  <h6 className="incomplete">Incomplete</h6>
                  <h2>Drink 8oz of Water</h2>
                  <h4>Most of the human body is water -</h4>
                  <h4>with an average of roughly 60%</h4>
                </div>
              </div>
              <div className="single-bell-left-two">
                <div className="type-image">
                  <img alt="physical-img" src={yoga} />
                </div>
                <div className="type-text">
                  <h6 className="incomplete">Incomplete</h6>
                  <h2>Dance to Your Favorite Song!</h2>
                  <h4>Dancing boosts cardiovascular health</h4>
                </div>
              </div>
              <div className="single-bell-left-three">
                <div className="type-image">
                  <img alt="nutritional-img" src={salad} />
                </div>
                <div className="type-text">
                  <h6 className="complete">Complete</h6>
                  <h2>Reach for a Healthy Treat</h2>
                  <h4>Sugarly snacks increase your risk for diabetes</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="bells-right">
            <div className="single-bell-right-wrapper">
              <div className="single-bell-right-one">
                <div className="type-image">
                  <img alt="physical-img" src={yoga} />
                </div>
                <div className="type-text">
                  <h6 className="complete">Complete</h6>
                  <h2>Stand Up and Stretch Your Body</h2>
                  <h4>Stretching increases blood flow to your muscles</h4>
                </div>
              </div>
              <div className="single-bell-right-two">
                <div className="type-image">
                  <img alt="nutritional-img" src={salad} />
                </div>
                <div className="type-text">
                  <h6 className="incomplete">Incomplete</h6>
                  <h2>Take your Multi-Vitamins</h2>
                  <h4>
                    Vitamin D can be produced in the skin from the sun’s energy
                  </h4>
                </div>
              </div>
              <div className="single-bell-right-three">
                <div className="type-image">
                  <img alt="physical-img" src={yoga} />
                </div>
                <div className="type-text">
                  <h6 className="complete">Complete</h6>
                  <h2>Take One Deep Belly Breath!</h2>
                  <h4>Belly breathing stimulates the relaxation response </h4>
                  <h4>targeting your parasympathetic nervous system</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
