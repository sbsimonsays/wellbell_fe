import React from 'react'

function Bells( { bells }) {
  return (
    <div>
      <h2>Upcoming Bells</h2>
            <ul>
                {bells?.map((bell) => (
                    <li key={bell.title}>
                        {bell.title} - {bell.hour} : {bell.minute}
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default Bells


            