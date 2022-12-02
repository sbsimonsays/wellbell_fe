import React from 'react'

function UserIntakeForm() {
  return (
    <div>
        <h2>Continue Your Wellness Profile</h2>
        <form>
            <p>Select a Username</p>
            <input type="text" required placeholder="Username"></input>
            <br/>
            <p>Select the types of reminders you wish to receive</p>
            <input type="radio" id="physical" value="physical"></input>
            <label for="physical">Physical Wellness</label>
            <input type="radio" id="nutrition" value="nutrition"></input>
            <label for="nutrition">Nutritional Wellness</label>
            <input type="radio" id="mental" value="mental"></input>
            <label for="mental">Mental Wellness</label>
        </form>
    </div>
  )
}

export default UserIntakeForm