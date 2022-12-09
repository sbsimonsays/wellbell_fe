import React from "react";
import ".././Dashboard/ProgressBar.css";

const ProgressBar = ({ progress }) => {
  progress = 40;
  return (
    <div className="container">
      <div
        className="bar"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span className="label">{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
