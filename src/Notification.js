import React from 'react'
import {retrieveToken} from "../src/Firebase/firebase"


export default function Notification() {
    retrieveToken();
  return (
    <div>Notification</div>
  )
}
