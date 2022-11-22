
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notification from './Modals/Notification';
import Landing from './Pages/Login';
import SideNav from './Components/SideNav';
import Login from './Pages/Login';
import SetReminders from './Pages/SetReminders';
import CurrentReminders from './Pages/CurrentReminders';
import "./App.css";
// import messaging  from "../src/Firebase/firebase-messaging-sw"
// import firebase from "../src/Firebase/firebase"
// import { retrieveToken } from "../src/Firebase/firebase";
import Notification from "./Notification";

function App() {
  return (
    <div>
      <Router>
      <SideNav/>
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/setreminder" element={<SetReminders/>}/>
      <Route path="/currentreminders" element={<CurrentReminders/>}/>
   <Notification/>
   </Routes>
   </Router>
  </div>
  );
}

export default App;
