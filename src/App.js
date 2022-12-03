
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Notification from './Modals/Notification';
import SideNav from './Components/SideNav';
// import Login from './Pages/Login';
import UserAccount from './Pages/UserAccount';
import About from './Pages/About';
import Rewards from './Pages/Rewards';
import SetReminders from './Pages/SetReminders';
import Protected from './Components/Protected';
import { AuthContextProvider } from './context/AuthContext';
import FourOFour from './Pages/FourOFour';
import HomePage from './Components/Home/HomePage';
import LoginPage from './Components/Login/ExistingUserLogin';

// import messaging  from "../src/Firebase/firebase-messaging-sw";


function App() {
  return (
   
    <AuthContextProvider>
      <Router>
        {/* <SideNav /> */}
     
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/rewards" element={<Rewards/>}/>
          <Route path="/setreminder" element={<SetReminders/>}/>
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
