import React from 'react'
import ".././Dashboard/SelfCareProgressBar.css";

export default function SelfCareProgressBar({ progress }) {
  return (
    <div className="container">
      <div
        className="sbar"
        style={{width: `${progress}%`}}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-width={progress}
      >
        <span className="label">{`${progress}%`}</span>
      </div>
    </div>
  )
}
