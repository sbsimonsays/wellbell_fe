// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js"
);
// import { initializeApp } from "firebase/app";
// import { getMessaging, onMessage } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing the generated config
firebase.initializeApp({
  apiKey: "AIzaSyAcbAgHcLYHOuMElmDL-Fh2GxG2EdjizeY",
  authDomain: "wellbell-fe767.firebaseapp.com",
  projectId: "wellbell-fe767",
  storageBucket: "wellbell-fe767.appspot.com",
  messagingSenderId: "241475391234",
  appId: "1:241475391234:web:8bba110c6ced34f3a13c1b",
  measurementId: "G-0S78BRPC6T",
});

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Notification.requestPermission().then((permission) => {
//   if (permission === "granted") {
//     console.log("Notification permission granted.");
//   }})
messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
  return true;
});
