import React from 'react';
import {Link, NavLink} from "react-router-dom";
import { UserAuth } from '../context/AuthContext';

const SideNav = () => {
  const { user, logOut } = UserAuth()
  const handleLogOut = async () => {
    try{
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <nav>
      <div className='flex justify-between bg-gray-200 w-full p-4'>
      <img src='../wellbell.png' alt='logo' width='200' height='10%'></img>
        <NavLink className="nav-link" to="/CurrentReminders">
          reminders</NavLink>
        <NavLink className="nav-link" to="/Rewards">rewards</NavLink>
        <NavLink className="nav-link" to="/About">about</NavLink>
        {/* <Link to="">progress</Link> */}
        {user?.displayName ? (
        <button onClick={handleLogOut}>Logout</button>
      ) : (
        <Link to='/Login'>Log in</Link>
      )}
        </div>

    </nav>
  )
}

export default SideNav

//progress will be hidden
//progress will include wellness check stats/graph