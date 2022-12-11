import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Notification from './Modals/Notification';
import UserAccount from "./Pages/UserAccount";
import About from "../src/Components/Dashboard/About";
import Protected from "./Components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import UserLogin from "./Components/Login/UserLogin";
import SignUp from "./Components/Login/SignUp";
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
    firstname: "",
    lastname: "",
    physicalpoints: 0,
    nutritionalpoints: 0,
    selfcarepoints: 0,
    physicalpreferences: "",
    nutritionalpreferences: "",
    mentalpreferences: "",
    photourl: "",
  });

  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <UserLogin
                existingUser={existingUser}
                setExistingUser={setExistingUser}
              />
            }
          />
          <Route path="/signup" element={<SignUp />} />

          <Route
            path="/dashboard"
            element={
              <Profile
                existingUser={existingUser}
                setExistingUser={setExistingUser}
              />
            }
          />
          <Route
            exact
            path="/dashboard/bells"
            element={
              <Notifications
                existingUser={existingUser}
                setExistingUser={setExistingUser}
              />
            }
          />
          <Route
            exact
            path="/dashboard/about"
            element={
              <About
                existingUser={existingUser}
                setExistingUser={setExistingUser}
              />
            }
          />
          <Route
            exact
            path="/dashboard/rewards"
            element={
              <Rewards
                existingUser={existingUser}
                setExistingUser={setExistingUser}
              />
            }
          />

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

//DO NOT REFRESH
