import React, { useState, useContext, useEffect } from "react";
import NavLogo from "../Shared/NavLogo";
import "./UserLogin.css";
import womanWithFlowers from "../../public/WomanWithFlowers.jpg";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function UserLogin({ setExistingUser, existingUser }) {
  const [firebaseCredentials, setFirebaseCredentials] = useState({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState([]);
  const { signIn, user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // const getUser = () => {
  //   axios
  //   .get(`${API}/users/${uid}`)
  //   .then(res => setExistingUser(res.data.payload))
  // };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  const handleTextChange = (e) => {
    setFirebaseCredentials({
      ...firebaseCredentials,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = () => {
    signIn(firebaseCredentials);
    // .then((res) => {
    //   return axios.get(`${API}/users/${user.uid}`);
    // })
    // .then((res) => {
    //   debugger
    //   if (res.data?.payload?.user_id) {
    //     setExistingUser(res.data.payload);
    //     navigate("/dashboard");
    //   } else {
    //     setLoginErrors([
    //       ...loginErrors,
    //       "NOT ABLE TO AUTHENTICATE - TRY AGAIN",
    //     ]);
    //     logOut();
    //   }
    // });
    // getUser();
  };

  return (
    <div className="login-main">
      <NavLogo />
      <div className="login-wrapper">
        <div className="login-left">
          <form className="login-form">
            <div className="form-item-wrapper">
              <h2>Login to WellBell</h2>
            </div>
            <input
              onChange={handleTextChange}
              id="email"
              value={firebaseCredentials.email}
              required
              placeholder="Email"
              type="text"
            />
            <input
              onChange={handleTextChange}
              id="password"
              value={firebaseCredentials.password}
              required
              placeholder="Password"
              type="password"
            />
            <div className="form-button-wrapper">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
        <div className="login-right">{/* <img src={womanWithFlowers}/> */}</div>
      </div>
    </div>
  );
}

export default UserLogin;
