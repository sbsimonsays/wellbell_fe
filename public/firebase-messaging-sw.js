// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.0/firebase-messaging-compat.js');
// import { initializeApp } from "firebase/app";
// import { getMessaging, onMessage } from "firebase/messaging/sw";

// Initialize the Firebase app in the service worker by passing the generated config
firebase.initializeApp( {
    apiKey: "AIzaSyCtYb0I4aPnZKPbB4bbQ0VB7rpHZqha06s",
    authDomain: "wellbell-4a40d.firebaseapp.com",
    projectId: "wellbell-4a40d",
    storageBucket: "wellbell-4a40d.appspot.com",
    messagingSenderId: "33154837166",
    appId: "1:33154837166:web:cffc47a7ec9154036edb3f",
    measurementId: "G-5YXH5XPXZ7"
});



// Retrieve firebase messaging
const messaging = firebase.messaging()

// Notification.requestPermission().then((permission) => {
//   if (permission === "granted") {
//     console.log("Notification permission granted.");
//   }})
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
 // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});