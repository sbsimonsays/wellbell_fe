
import './App.css';
import { useState, useEffect } from 'react';
import socketIO from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { retrieveToken, onMessageListener } from "../src/Firebase/firebase.js"
import { toast } from "react-toastify";
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

import Bells from './Components/Bells';
import { UserProvider } from './Providers/UserProvider';
// import messaging  from "../src/Firebase/firebase-messaging-sw"
// import firebase from "../src/Firebase/firebase"
// import { retrieveToken } from "../src/Firebase/firebase";

const socket = socketIO.connect("http://localhost:1236");
function App() {
  const [bells, setBells] = useState([]);
  useEffect(() => {
    //👉🏻Logs the device token to the console
    retrieveToken();
    //👉🏻Listen and logs the push messages from the server.
    onMessageListener()
      .then((payload) => {
        console.log("From Message", payload);
      })
      .catch((err) => console.log("failed: ", err));

    socket.on("sendBells", (bells) => {
      setBells(bells);
    });
    //Listens for the notification from the server
    socket.on("notification", (data) => {
      toast.success(` It's time for ${data.title}`);
    });
  }, []);
  return (
   
    // <UserProvider>
      <Router>
        <SideNav />
        {/* <LandingPage /> */}
        <Routes>
          <Route path="/" element={<LandingPage socket = { socket }/>}/>
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
  //  </UserProvider>
 
  );
}

export default App;


