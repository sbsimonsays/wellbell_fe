import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Notification from './Modals/Notification';
// import SideNav from "./Components/SideNav";
// import Login from './Pages/Login';
import UserAccount from "./Pages/UserAccount";
import About from "./Pages/About";
// import Header from "./Components/Header";
// import Rewards from './Pages/Rewards';
import SetReminders from "./Pages/SetReminders";
import Protected from "./Components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
// import LoginPage from "./Components/Login/ExistingUserLogin";
import UserLogin from "./Components/Login/UserLogin";
import SignUp from "./Components/Login/SignUp";
// import Dashboard from "./Components/Dashboard/Dashboard";
import Profile from "./Components/Dashboard/Profile";
import Rewards from "./Components/Dashboard/Rewards";
import Notifications from "./Components/Dashboard/Notifications";
// import RewardsComp from "./Components/Rewards/RewardsComp";

// import messaging  from "../src/Firebase/firebase-messaging-sw";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        {/* <SideNav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/dashboard" element={<Dashboard/>}/> */}
          <Route exact path="/dashboard" element={<Profile />} />
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
    // </AuthContextProvider>
  );
}

export default App;
