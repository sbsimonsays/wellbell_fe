
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Notification from './Modals/Notification';
import SideNav from './Components/SideNav';
import LandingPage from './Pages/LandingPage';
// import Login from './Pages/Login';
import UserAccount from './Pages/UserAccount';
import About from './Pages/About';
import Header from './Components/Header';
import Rewards from './Pages/Rewards';
import SetReminders from './Pages/SetReminders';
import CurrentReminders from './Pages/CurrentReminders';
import Protected from './Components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import FourOFour from './Pages/FourOFour';
import Home from './Pages/Home';
import ExistingUserLogin from './Components/Login/ExistingUserLogin';
import NewUser from './Components/Login/NewUser';
import UserIntakeForm from './Components/UserInput/UserIntakeForm';

// import messaging  from "../src/Firebase/firebase-messaging-sw";


function App() {
  return (
 
    <AuthContextProvider>
      <Router>
        {/* <SideNav /> */}
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<ExistingUserLogin/>}/>
          <Route path="/newuser" element={< NewUser/>}/>
          <Route path="/userintake" element={< UserIntakeForm/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/rewards" element={<Rewards/>}/>
          <Route path="/setreminder" element={<SetReminders/>}/>
          <Route path="/currentreminders" element={<CurrentReminders/>}/>
          <Route path="*" element={<FourOFour/>}/>
          <Route
            path='/useraccount'
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
