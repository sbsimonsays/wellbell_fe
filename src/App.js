
import './App.css';
// import messaging  from "../src/Firebase/firebase-messaging-sw"
// import firebase from "../src/Firebase/firebase"
import {retrieveToken} from "../src/Firebase/firebase"
import Notification from './Notification';

function App() {

//   const [isTokenFound, setTokenFound] = useState(false);
// retrieveToken(setTokenFound);
  
  return (
    
    <div>
    {/* {isTokenFound ? <p>Notification permission enabled 👍🏻 </p>: <p> Need notification permission ❗️ </p>
    } */}

   <h1>Welcome to WellBell!</h1>
   <Notification/>
  </div>
  );
}

export default App;
