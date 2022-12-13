import React, { useContext, useEffect } from "react";
import DashNav from "./DashNav";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import bbandb from "../../public/bbandb.png";
import cliffbar from "../../public/cliffbar.png";
import pfitness from "../../public/pfitness.png";
import sephora from "../../public/sephora.jpeg";
import smartwater from "../../public/smartwater.webp";
import wholefoods from "../../public/wholefoods.png";
import SelfCareProgressBar from "./SelfCareProgressBar";
import NutritionalProgressBar from "./NutritionalProgressBar";
import PhysicalProgressBar from "./PhysicalProgressBar";
import "./Rewards.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Dashboard/Modal.css";

const API = process.env.REACT_APP_API_URL;

function Rewards({ existingUser, setExistingUser }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      alert("No user, re-routing to the login page!");
      navigate("/login");
    } else {
      if (!existingUser.email) {
        axios
          .get(`${API}/users/${user.uid}`)
          .then((res) => setExistingUser(res.data.payload));
      }
    }
  }, [user]);

  const showToast = () => {
    toast("Take One Deep Belly Breath!"
,  {
        icon: "🔔 ",
      data: {
        title: "Reach for a Healthy Treat!"
,
        text: "We are here again with another article",
      },
    });
    const audio = new Audio('https://drive.google.com/uc?export=download&id=1M95VOpto1cQ4FQHzNBaLf0WFQglrtWi7');
    audio.play();
  };

  return (
    <div className="rewards-page">
      <DashNav existingUser={existingUser} setExistingUser={setExistingUser} />
      <div className="rewards-main">
        <div className="profile-title">
          <h1>{existingUser.firstname}'s Rewards</h1>
        </div>

        <div className='rewards-info'>
    <div className='progress-bars'>
      <div className='physical-progress' onClick={showToast}>
      <div> <ToastContainer position="top-center" className='Toastify__toast-container'/></div>
        <div className='progress-info'>
          <h2>Physical Points:</h2>
      <PhysicalProgressBar className= "physicalbar" progress={existingUser.physicalpoints}/>
      <h5>Points Untill Your Next Reward:</h5>
      <h4>{100 - existingUser.physicalpoints}</h4>
        </div>
      </div>
      <div className='nutritional-progress'>
        <div className='progress-info'>
          <h2>Nutritional Points:</h2>
      <NutritionalProgressBar className= "nutritionalbar" progress={existingUser.nutritionalpoints}/>
      <h5>Points Untill Your Next Reward:</h5>
      <h4>{100 - existingUser.nutritionalpoints}</h4>
        </div>
      </div>
      <div className='self-care-progress'>
        <div className='progress-info'>
          <h2>Self-Care Points:</h2>
      <SelfCareProgressBar className= "selfcarebar" progress={existingUser.selfcarepoints}/>
      <h5>Points Untill Your Next Reward:</h5>
      <h4>{100 - existingUser.selfcarepoints}</h4>
        </div>
      </div>
    </div>
    <div  className='partners'>
      
<div className='partner-circles'>
  <div className='partner-circles-text'>
      <h5>In Partnership With </h5>
  </div>

  <div className='partner-images'>
<img className='partner-logo' src={bbandb}/>
<img className='partner-logo' src={cliffbar}/>
<img className='partner-logo' src={pfitness}/>
<img className='partner-logo' src={smartwater}/>
<img className='partner-logo' src={sephora}/>
<img className='partner-logo' src={wholefoods}/>
  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rewards;
