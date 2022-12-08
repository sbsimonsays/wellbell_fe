import React from 'react'

function Notification({userNotifications, notification, i}) {
  return (
    <div>
        <button onClick={() => userNotifications.delete(i)}>Mark as Complete</button>
        <h3>Notification message {notification}</h3>
        <p>Notifcation type</p>
        <p>Notification funfact</p>
        <p></p>
    </div>
  )
}

export default Notification