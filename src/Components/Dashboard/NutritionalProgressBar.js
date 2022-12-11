import React from 'react'
import ".././Dashboard/NutritionalProgressBar.css";

export default function NutritionalProgressBar({progress}) {
    // const stylesObj = {

    //         height: '100%',
    //         width: progress,
    //         background-color: '#6ce5e8',
    //         border-radius:' inherit',
     
    //   };
  return (
    <div className="container">
    <div
      className="nbar"
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
