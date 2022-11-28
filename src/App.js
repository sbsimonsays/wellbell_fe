
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Notification from './Modals/Notification';
import LandingPage from './Pages/LandingPage';
import FourOFour from './Pages/FourOFour';
import SideNav from './Components/SideNav';
import Login from './Pages/Login';
import { LoggedInPage } from './Pages/LoggedInPage';
import AboutPage from './Pages/AboutPage';
import RewardsPage from './Pages/RewardsPage';
import SetReminders from './Pages/SetReminders';
import CurrentReminders from './Pages/CurrentReminders'
import { UserProvider } from './Providers/UserProvider';
// import messaging  from "../src/Firebase/firebase-messaging-sw"
// import firebase from "../src/Firebase/firebase"
// import { retrieveToken } from "../src/Firebase/firebase";


function App() {
  return (
   <>
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
   </>
  );
}

export default App;
