import React, { useEffect, useState} from 'react'
import Notification from './Notifcation'

function NotificationList() {

    //we gotta grab the notifcations from the db and set them to userNotifications

    const [userNotifications, setUserNotifcations] = useState([1,2,3,4,5,6]);
    
    const handleClick = () => {
        userNotifications.push("new notification")
    }

  return (
    <div> 
       {userNotifications.map((notification, i) => <Notification notifcation={notification} userNotifications={userNotifications} i={i}/>)} 
       <button>Add Notification</button>
    </div>
  )
}

export default NotificationList