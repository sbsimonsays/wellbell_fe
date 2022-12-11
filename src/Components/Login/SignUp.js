import React, { useState, useContext, useEffect } from "react";
import NavLogo from "../Shared/NavLogo";
import "./SignUp.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SignUp() {
  const [formPage, setFormPage] = useState(true);
  const [newUser, setNewUser] = useState({
    email: "",
    username: "",
    firstname: "",
    lastname: "",
    physicalpoints: 0,
    nutritionalpoints: 0,
    selfcarepoints: 0,
    physicalpreferences: false,
    nutritionalpreferences: false,
    mentalpreferences: false,
    photoURL: "",
  });

  const { createUser, user, setSignUpDetails } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleTextChange = (e) => {
    setNewUser({ ...newUser, [e.target.id]: e.target.value });
  };
  const addUser = (newUser) => {
    axios
      .post(`${API}/users`, newUser)
      .then((res) => setNewUser(res.payload.value));
  };
  const handleSubmit = () => {
    // setSignUpDetails(newUser)
    createUser(newUser);
    // navigate("/dashboard");
    // setNewUser(newUser);
  };

  const [check, setCheck] = useState(false);

  useEffect(() => {
    // console.log(user)
    if (user) {
      navigate("/dashboard");
    }
  }, [user]);

  return (
    <div className="signup-main">
      <NavLogo />
      <div className="signup-wrapper">
        <div className="signup-left" />
        <div className="signup-right">
          <form className="signup-form">
            {formPage ? (
              <>
                <div className="signup-item-wrapper">
                  <h2>Sign Up for WellBell</h2>
                </div>
                <input
                  onChange={handleTextChange}
                  id="email"
                  value={newUser.email}
                  required
                  placeholder="Email"
                  type="text"
                />
                <input
                  onChange={handleTextChange}
                  id="password"
                  value={newUser.password}
                  required
                  placeholder="Password"
                  type="password"
                />
                <div className="form-button-wrapper">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setFormPage(false);
                    }}
                  >
                    Next
                  </button>
                </div>
                <div className="nav-dots">
                  <div className="dot-one" />
                  <div className="dot-two" />
                </div>
              </>
            ) : (
              <>
                <div className="signup-item-wrapper">
                  <h2>Create A Wellness Profile</h2>
                </div>
                <span className="signup-info">Add a username</span>
                <input
                  onChange={handleTextChange}
                  id="username"
                  value={newUser.username}
                  placeholder="username"
                  type="text"
                  required
                />
                <span className="signup-info">First name</span>
                <input
                  onChange={handleTextChange}
                  id="firstname"
                  value={newUser.firstname}
                  placeholder="First name"
                  type="text"
                  required
                />
                <span className="signup-info">Last name</span>
                <input
                  onChange={handleTextChange}
                  id="lastname"
                  value={newUser.lastname}
                  placeholder="Last name"
                  type="text"
                  required
                />
                <span className="signup-info">Photo URL</span>
                <input
                  onChange={handleTextChange}
                  id="photourl"
                  value={newUser.photourl}
                  placeholder="Add Image"
                  type="text"
                />

                <span className="signup-info">
                  Select the types of reminders you wish to receive
                </span>
                <div className="signup-checkboxes">
                  <div>
                    <input
                      type="checkbox"
                      value={newUser.physicalwellness === check ? true : false}
                      onChange={(e) => setCheck(e.target.checked)}
                      name="physical"
                    />
                    <label htmlFor="physical">Physical Wellness</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      value={
                        newUser.nutritionalwellness === check ? true : false
                      }
                      onChange={(e) => setCheck(e.target.checked)}
                      name="nutritional"
                    />
                    <label htmlFor="nutritional">Nutritional Wellness</label>
                  </div>
                </div>
                <div className="signup-checkboxes-two">
                  <div>
                    <input
                      type="checkbox"
                      value={newUser.mentalwellness === check ? true : false}
                      onChange={(e) => setCheck(e.target.checked)}
                      name="mental"
                    />
                    <label htmlFor="mental">Mental Wellness</label>
                  </div>
                </div>
                <div className="double-button-wrapper">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setFormPage(true);
                    }}
                  >
                    Go Back
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    Get Started
                  </button>
                </div>
                <div className="nav-dots">
                  <div className="dot-two" />
                  <div className="dot-one" />
                </div>
              </>
            )}
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

//if theres a user navigate to dashboard
