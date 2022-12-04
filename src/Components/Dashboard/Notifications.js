import React from 'react'
import DashNav from './DashNav'
import "./Notifications.css"

function Notifications() {
  return (
    <div className='bells-page'>
      <DashNav/>
      <div className='bells-main'>
        <h1>Notifications List</h1>
      </div>
    </div>
  )
}

export default Notifications