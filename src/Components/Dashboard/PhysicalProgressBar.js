import React from 'react'
import ".././Dashboard/PhysicalProgressBar.css";

export default function PhysicalProgressBar({progress}) {
  return (
    <div className="container">
    <div
      className="pbar"
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
