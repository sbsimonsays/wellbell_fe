import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Notification from './Modals/Notification';
import SideNav from "./Components/SideNav";
// import Login from './Pages/Login';
import UserAccount from "./Pages/UserAccount";
import About from "./Pages/About";
import Header from "./Components/Header";
// import Rewards from './Pages/Rewards';
import SetReminders from "./Pages/SetReminders";
import Protected from "./Components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import LoginPage from "./Components/Login/ExistingUserLogin";
import UserLogin from "./Components/Login/UserLogin";
import SignUp from "./Components/Login/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Dashboard/Profile";
import Rewards from "./Components/Dashboard/Rewards";
import Notifications from "./Components/Dashboard/Notifications";
import { useState } from "react";
import React from "react";

// import messaging  from "../src/Firebase/firebase-messaging-sw";

function App() {
  const [existingUser, setExistingUser] = useState({
    user_id: "",
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    physicalpoints: 0,
    nutritionalpoints: 0,
    selfcarepoints: 0,
    physicalpreferences: "",
    nutritionalpreferences: "",
    mentalpreferences: "",
    image: "",
  });

// Give existingUser as a prop
// Take the data, define inside of AuthContext, pass in auth provider, existinguser, set existing user -> use authcontext to obtain existinguser
// Do for signup component -> simple post request instead of .get -> same process as before -> create user in database 

  return (
    <AuthContextProvider>
      <Router>
        {/* <SideNav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <UserLogin
                existingUser={existingUser}
                setExistingUser={setExistingUser}
              />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Profile />} />
          <Route exact path="/dashboard/bells" element={<Notifications />} />
          <Route exact path="/dashboard/rewards" element={<Rewards />} />
          {/* <Route path="/rewards" element={<Rewards/>}/> */}
          <Route path="/setreminder" element={<SetReminders />} />
          <Route path="*" element={<FourOFour />} />
          <Route
            path="/useraccount"
            element={
              <Protected>
                <UserAccount />
              </Protected>
            }
          />
          {/* <Notification/> */}
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
