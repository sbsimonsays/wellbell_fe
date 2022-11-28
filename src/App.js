
import './App.css';
import socketIO from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Notification from './Modals/Notification';
import LandingPage from './Pages/LandingPage';
import FourOFour from './Pages/FourOFour';
import SideNav from './Components/SideNav';
import Login from './Pages/Login';
import SetReminders from './Pages/SetReminders';
import CurrentReminders from './Pages/CurrentReminders';

import Bells from './Components/Bells';
import { UserProvider } from './Providers/UserProvider';
// import messaging  from "../src/Firebase/firebase-messaging-sw"
// import firebase from "../src/Firebase/firebase"
// import { retrieveToken } from "../src/Firebase/firebase";

const socket = socketIO.connect("http://localhost:1236");
function App() {
  return (
   
    <UserProvider>
      <Router>
      <SideNav/>
        <Routes>
          <Route path="/" element={<LandingPage socket = { socket }/>}/>
          <Route path="/login" element={<Login/>}/>
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
