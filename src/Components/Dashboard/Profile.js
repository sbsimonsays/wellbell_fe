import React from 'react'
import DashNav from './DashNav'


import "./Profile.css"


function Profile() {
  return (

    <div className='profile-page'>
      <DashNav />
    <div className='profile-main'>
        <h1>User Profile</h1>
    </div>
    </div>
  )
}

export default Profile