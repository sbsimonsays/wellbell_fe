import React from 'react'
import RemindersForm from '../Components/RemindersForm'
import WellnessForm from '../Components/WellnessForm'


function setReminders() {
  return (
    <div>
        <WellnessForm />
        <RemindersForm/>
    </div>
  )
}

export default setReminders;