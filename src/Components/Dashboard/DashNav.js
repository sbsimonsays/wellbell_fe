import React, { useEffect, useContext } from "react";
import "./DashNav.css";
import logo from "../../public/wellbell.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function DashNav() {
  const { logOut, user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <div className="dash-nav-main">
      <img onClick={() => navigate("/dashboard")} src={logo} className="logo" />
      <span className="user-dash-greeting">Welcome {user?.email || "no user"}!</span>
      <i
        onClick={() => navigate("/dashboard")}
        className="dash-icon fa-solid fa-house"
      ></i>
      <i
        onClick={() => navigate("/dashboard/bells")}
        className="dash-icon fa-regular fa-bell"
      ></i>
      <i
        onClick={() => navigate("/dashboard/rewards")}
        className="dash-icon fa-solid fa-award"
      ></i>
      <i
        onClick={() => navigate("/about")}
        className="dash-icon-info fa-solid fa-circle-info"
      ></i>
      <i onClick={logOut} className="dash-icon fa fa-sign-out" aria-hidden="true"></i>
    </div>
  );
}

export default DashNav;
