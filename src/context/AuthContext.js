import { useContext, createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../Firebase/firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider);
    signInWithRedirect(auth, provider)
  };

  const logOut = () => {
      signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      //backend can key into uid from current user
      console.log('User', currentUser)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};









// -from notes

// import React, { useEffect, useState, createContext } from "react";
// import { auth } from "../Firebase/firebase";

// // create context and initialize with null
// export const UserContext = createContext(null);

// export const UserProvider = (props) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       if (user) {
//         const { email, displayName, photoURL, uid } = user;
//         setUser({ email, displayName, photoURL, uid });
//       } else {
//         setUser(null);
//       }
//     });
//   }, []);

//   return (
//     <UserContext.Provider value={user}>
//       <div>{props.children}</div>
//     </UserContext.Provider>
//   );
// };

