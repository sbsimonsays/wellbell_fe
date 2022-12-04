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
        console.log(userCredential);
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
  const { email, password } = user;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
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
      if (user) {
        // if onAuthStateChanged emits a user - set it state
        const { email, displayName, photoURL, uid } = user;
        setUser({ email, displayName, photoURL, uid });
      } else {
        setUser(null);
      }
    });
    // const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    //   setUser(currentUser);
    //   //backend can key into uid from current user
    //   console.log('User', currentUser)
    // });
    // return () => {
    //   unsubscribe();
    // };
  }, []);

  return (
    <AuthContext.Provider value={{ createUser, signIn, logOut, user }}>
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
