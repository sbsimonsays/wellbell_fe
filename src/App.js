import "./App.css";
// import messaging  from "../src/Firebase/firebase-messaging-sw"
// import firebase from "../src/Firebase/firebase"
// import { retrieveToken } from "../src/Firebase/firebase";
import Notification from "./Notification";

function App() {
  return (
    <div>
      <h1>Welcome to WellBell!</h1>
      <Notification />
    </div>
  );
}

export default App;
