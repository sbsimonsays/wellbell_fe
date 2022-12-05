import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
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
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

 const signIn =(user) => {
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
  }
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