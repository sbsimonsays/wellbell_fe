import DashNav from "./DashNav";
import "./Dashboard.css";

const API = process.env.REACT_APP_API_URL;

// import Profile from "../Dashboard/Profile.js"
// import Notifications from './Notifications.js
// import Rewards from "./Rewards.js"

function Dashboard() {
  return (
    <div className="dashboard">
      <DashNav />

      {/* <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/bells" element={<Notifications/>} />
          <Route path="/rewards" element={<Rewards/>} />
        </Routes> */}
    </div>
  );
}

export default Dashboard;
