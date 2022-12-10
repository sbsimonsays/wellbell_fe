import { useContext, createContext, useEffect, useState } from "react";
import { getMessaging, getToken } from "firebase/messaging";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { auth, retrieveToken } from "../Firebase/firebase";

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signUpDetails, setSignUpDetails] = useState(null);
  const messaging = getMessaging();

  const auth = getAuth();

  const createUser = (valuesFromSignUpForm) => {
       // setUser(valuesFromSignUpForm);
       // console.log(valuesFromSignUpForm);
    const { email, password } = valuesFromSignUpForm;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        const combinedObj = { ...valuesFromSignUpForm };
        combinedObj.user_id = uid;
        // gets firebase messaging token
        // FCMToken is the address of our Push Notification
        let FCMToken;

        console.log("Requesting permission...");
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            FCMToken = retrieveToken();
            console.log("Notification permission granted.");
          }
        });

        combinedObj.FCMToken = FCMToken;
        /* 
          we need to update the backend schema to include a key of FCMToken which stores destination for firebase notifications
          need to change seed values to have an FCMToken 
          get Our FCM tokens and add to seed : 
          jede 's -  eUm_HUZD4MQzcdxEAFAlqm:APA91bHVdxHVk3Vgnf2Ywr8Qj85nU283KWFP9kGxVw6pdyVqZ8tQik6IaIUcya6Jc6NXWktNu0dSC1ts79IRCULTNKPDNI2a_kbxwa9EzCLIoi_ZQ2S0rwz8-eNhYu0CgpTuJ90n3FO1
        */

        axios.post(`${API}/users`, combinedObj);
        //**** */
        // POSSIBLE RACE CONDITION HERE WITH FIREBASE AUTH SIGNING IN BEFORE THE USER INFO SAVED
        // after we sign a user  UP we need to POST the users sign up info
        // to our DB
        //**** */
        // console.log(userCredential);
        // setUser(userCredential.user);
        // ...

        // COMPONENT -> AUTHCONTEXTPROVIDER -> INFO VIA USESTATE

        // GETTING ALL INFO FROM FIREBASE -> USESTATE USEEFFECT functions

        // FIREBASE-> GET TOKEN GET MESSAGING onMESSAGE

        // Authentication -> grabbing getAuth data

        // Export auth -> get authentication with app (initialized with firebaseConfig authentication)

        // App -> If we want authentication -> Save to a variable with (app) -> Similar to message

        // Firing getAuth = connecting us to the instance of useState

        // Pass entire user object

        // Grab email and password from back-end -> Create user with email and password = function needs email with auth ->

        // Pass on email and password to firebase -> records username = if authenticated, will sign them in

        // AuthContext.js:22 -> axios .post (once we get user id) -> send it towards users backend table

        // onAuthStateChanged -> continuously listens
        // If state of user changes, callback function will fire automatically (firebase is listening) -> go into callback

        // If (user) update state with all info from firebase -> axios .post request alongside “sign up”

        // else setState to null

        // User from firebase -> setUser provides context -> AuthContext value = user with {signIn, logOut} = either null and

        // Anytime communicating with google -> fire auth variable
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const signIn = async (user) => {
    
    // console.log(user)
    const { email, password } = user;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Signed in
        const user = userCredential.user;

        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  //query db and save to context somehow^^^^
  //could also be done within useEffect

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider);
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {

    
        // axios
        // .get(`${API}/users/${firebaseUser.uid}`)
        // .then(res =>{

        // })
        // .catch(err => {
        // console.log(err);

        // })
        //***** */
        // WHEN WE GET A USER FROM FIREBASE WE HAVE A UID TO QUERY OUR DB
        // fire a query to your backend => get the users preferences =>
        // then setUser with that value  && the current values we are passing
        // if onAuthStateChanged emits a user - set it state
        //***** */
        const { email, displayName, photoURL, uid } = firebaseUser;
        setUser({ email, displayName, photoURL, uid });
      } else {
        setUser(null);
      }
    });
  }, []);
  console.log(user);

  //if theres a user --> query db????? and spread info into useState
  return (
    <AuthContext.Provider
      value={{ createUser, signIn, logOut, user, setSignUpDetails }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
