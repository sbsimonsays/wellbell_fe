import React from 'react'
import {Link} from "react-router-dom"

function NewUser() {
  return (
    <div>
        <img></img>
        <h2>Create a WellNess Profile</h2>
        <form>
            <label>Email: </label>
            <input type="text" required placeholder="Email"></input>
            <br/>
            <label>Password: </label>
            <input type="text" required placeholder="Password"></input>
            <br/>
            <label>Re-Enter Password: </label>
            <input type="text" required placeholder="Re-Enter Password"></input>
            <br/>
            <Link to="/userintake"><button>Next</button></Link>
        </form>
    </div>
  )
}

export default NewUser