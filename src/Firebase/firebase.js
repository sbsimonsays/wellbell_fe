// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// import { getAnalytics } from "firebase/analytics";
// import { getMessaging } from "firebase/messaging/sw";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtYb0I4aPnZKPbB4bbQ0VB7rpHZqha06s",
  authDomain: "wellbell-4a40d.firebaseapp.com",
  projectId: "wellbell-4a40d",
  storageBucket: "wellbell-4a40d.appspot.com",
  messagingSenderId: "33154837166",
  appId: "1:33154837166:web:cffc47a7ec9154036edb3f",
  measurementId: "G-5YXH5XPXZ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const messaging = getMessaging(app);

export const retrieveToken = () => {
    return getToken(messaging, {vapidKey: 'BP2vnUBO-X6Aw6KNtsS9Pst64XUuK_Pdscd70wrrylC_-g-oGW7nABQ6P-Mdr32jBL8isvGGB4Hn2MSb73DzwVk'}).then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        // shows on the UI that permission is required 
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // catch error while creating client token
    });
  }

// Add the public key generated from the console here.
// messaging.getToken({vapidKey: "BP2vnUBO-X6Aw6KNtsS9Pst64XUuK_Pdscd70wrrylC_-g-oGW7nABQ6P-Mdr32jBL8isvGGB4Hn2MSb73DzwVk"});

// function requestPermission() {
//     console.log('Requesting permission...');
//     Notification.requestPermission().then((permission) => {
//       if (permission === 'granted') {
//         console.log('Notification permission granted.');

// module.exports = { messaging }

// export default messaging