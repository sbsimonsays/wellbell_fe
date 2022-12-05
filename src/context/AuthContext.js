import { useContext, createContext, useEffect, useState } from "react";
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
import { auth } from "../Firebase/firebase";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const createUser = (user) => {
    console.log(user);
    const { email, password } = user;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
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
        // Grab email and password from back-end -> Create user with email and password = function needs email with auth
        // Pass on email and password to firebase -> records username = if authenticated, will sign them in
        // Information from auth -> needs to be stored in backend and must find a way to retrieve saved data via front-end
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const signIn = (user) => {
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
    auth.onAuthStateChanged((user) => {
      // console.log("auth changed!", user)
      if (user) {
        //***** */
        // WHEN WE GET A USER FROM FIREBASE WE HAVE A UID TO QUERY OUR DB
        // fire a query to your backend => get the users preferences =>
        // then setUser with that value  && the current values we are passing
        // if onAuthStateChanged emits a user - set it state
        //***** */
        const { email, displayName, photoURL, uid } = user;
        setUser({ email, displayName, photoURL, uid });
      } else {
        setUser(null);
      }
    });
  }, []);

  // AuthContext.js:89 -> axios .post (once we get user id) -> send it towards users backend table

  // onAuthStateChanged -> continuously listens
  // If state of user changes, callback function will fire automatically (firebase is listening) -> go into callback

  // If (user) update state with all info from firebase -> axios .post request alongside “sign up”

  // else setState to null

  // User from firebase -> setUser provides context -> AuthContext value = user with {signIn, logOut} = either null and

  // Anytime communicating with google -> fire auth variable ->

  // When logged in as user -> ask if we can send push notifications; yes = firebase token, token exists until user clears cashe/data

  // Once given token, we fire messages to that token
  // Frequency

  //if theres a user --> query db????? and spread info into useState
  return (
    <AuthContext.Provider value={{ createUser, signIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
