import React from 'react'
import {Link} from "react-router-dom"

function SideNav() {
  return (
    <div>
        <Link to="/">reminders</Link>
        <Link to="">rewards</Link>
        <Link to="">about</Link>
        <Link to="">progress</Link>
    </div>
  )
}

export default SideNav

//progress will be hidden
//progress will include wellness check stats/graph