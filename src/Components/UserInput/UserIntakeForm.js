import React, {useState, useEffect } from "react";
import axios from "axios"

function UserIntakeForm() {

const[reminderType, setReminderType]= useState("")
const [toggle, setToggle] = useState(false);

const handleClick = (e) => {
  e.preventDefault();
  setReminderType(e.target.value)
  setToggle(!toggle);
}

const resetRadioState = () => {
  setReminderType('');
}


  return (
    <div>
        <h2>Continue Your Wellness Profile</h2>
        <form >
            {/* <p>Select a Username</p>
            <input type="text" required placeholder="Username"></input>
            <br/> */}

            <p>Select the type of reminders you wish to receive</p>
            <input type="radio"  id="physical" onChange={handleClick} checked={toggle} value="physical"></input>
            <label htmlFor="physical">Physical Wellness</label>

            <input type="radio" id="nutrition" onChange={handleClick} checked={reminderType === "Nutrition"} value="nutrition"></input>
            <label htmlFor="nutrition">Nutritional Wellness</label>

            <input type="radio"  id="mental" onChange={handleClick} checked={reminderType === "Mental Wellness"} value="mental"></input>
            <label htmlFor="mental">Mental Wellness</label>

        <button  type="reset"
          onClick={resetRadioState}>RESET</button>
            <p>{reminderType}</p>
        </form>
    </div>
  )
}

export default UserIntakeForm