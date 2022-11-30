
import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import socketIO from "socket.io-client";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import axios from "axios"
//👉🏻 Import the functions from the Firebase.js file
import { retrieveToken, onMessageListener } from "../src/Firebase/firebase.js"


// import Notification from './Modals/Notification';
import LandingPage from './Pages/LandingPage';
import FourOFour from './Pages/FourOFour';
import SideNav from './Components/SideNav';
import Login from './Pages/Login';
import { LoggedInPage } from './Pages/LoggedInPage';
import AboutPage from './Pages/AboutPage';
import RewardsPage from './Pages/RewardsPage';
import SetReminders from './Pages/SetReminders';
import CurrentReminders from './Pages/CurrentReminders';
import { UserProvider } from './Providers/UserProvider';
// import messaging  from "../src/Firebase/firebase-messaging-sw"
// import firebase from "../src/Firebase/firebase"


const socket = socketIO.connect("http://localhost:1236");
const API = process.env.REACT_APP_API_URL;

function App() {

  const [bell, setBells] = useState([]);
  const [bellNotification, setBellNotification] = useState([]);

    useEffect(() => {
      retrieveToken();
      onMessageListener()
      axios.get(`${API}/bells`)
      .then((res, payload) => {
        setBells(res.data.payload)
        console.log("From Message", payload);
        // console.log(bells)
        })
      .catch(err => console.log("failed: ", err));
    //👉🏻Listen and logs the push messages from the server.
      socket.on("sendBells", (bells) => {
        setBells(bells);
      });
      //Listens for the notification from the server
      socket.on("notification", (data) => {
        toast.success(` It's time for ${data.title}`);
      });
    }, [])
  return (
    
   
    <UserProvider>
      <Router>
        <SideNav />
        {/* <LandingPage /> */}
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/loggedInPage" element={<LoggedInPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/rewards" element={<RewardsPage/>}/>
          <Route path="/setreminder" element={<SetReminders/>}/>
          <Route path="/currentreminders" element={<CurrentReminders/>}/>
          <Route path="*" element={<FourOFour/>}/>

      {/* <Notification/> */}
        </Routes>
      </Router>
   </UserProvider>
 
  );
}

export default App;
