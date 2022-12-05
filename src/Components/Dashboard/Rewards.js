import React from "react";
import DashNav from "../Dashboard/DashNav";
import RewardsComp from "../Rewards/RewardsComp";

import "./Rewards.css";

function Rewards() {
  return (
    <div className="rewards-page">
      {/* <DashNav /> */}
      <div className="rewards-main">
        <RewardsComp />
      </div>
    </div>
  );
}

export default Rewards;
