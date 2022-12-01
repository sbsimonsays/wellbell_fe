import React from 'react'
import {Link} from "react-router-dom"

function NewUser() {
  return (
    <div>
        <img></img>
        <h2>Create a WellNess Profile</h2>
        <form>
            <input type="text" required placeholder="Email"></input>
            <br/>
            <input type="text" required placeholder="Password"></input>
            <br/>
            <input type="text" required placeholder="Re-Enter Password"></input>
            <br/>
            <Link to="newuserintake"><button>Next</button></Link>
        </form>
    </div>
  )
}

export default NewUser