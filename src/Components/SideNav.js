import React from 'react';
import {Link, NavLink} from "react-router-dom";

function SideNav() {
  return (
    <nav>
      <div>
        <NavLink className="nav-link" to="/CurrentReminders">
          reminders</NavLink>
        <NavLink className="nav-link" to="/Rewards">rewards</NavLink>
        <NavLink className="nav-link" to="/About">about</NavLink>
        {/* <Link to="">progress</Link> */}
        </div>
    </nav>
  )
}

export default SideNav

//progress will be hidden
//progress will include wellness check stats/graph