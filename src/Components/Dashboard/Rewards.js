import React from 'react'
import DashNav from './DashNav'
import bbandb from "../../public/bbandb.png"
import cliffbar from "../../public/cliffbar.png"
import planetfitness from "../../public/planetfitness.png"
import sephora from "../../public/sephora.jpeg"
import smartwater from "../../public/smartwater.webp"
import wholefoods from "../../public/wholefoods.png"
import ProgressBar from './ProgressBar'
import "./Rewards.css"

function Rewards() {

  return (

    <div className='rewards-page'>
      <DashNav />
      <div className='rewards-main'>
      <div className="profile-title">
          <h1>User's Rewards</h1>
        </div>
        <div className='rewards-info'>
    <div className='progress-bars'>
      <div className='physical-progress'>
      <ProgressBar progress={50}/>
      </div>
      <div className='nutritional-progress'>
      <ProgressBar progress={50}/>
      </div>
      <div className='self-care-progress'>
      <ProgressBar progress={50}/>
      </div>
    </div>
    <div  className='partners'>
      
<div className='partner-circles'>
  <div className='partner-circles-text'>
      <h5>In Partnership With </h5>
  </div>

  <div className='partner-images'>
<img className='partner-logo' src={bbandb}/>
<img className='partner-logo' src={cliffbar}/>
<img className='partner-logo' src={planetfitness}/>
<img className='partner-logo' src={smartwater}/>
<img className='partner-logo' src={sephora}/>
<img className='partner-logo' src={wholefoods}/>
  </div>

</div>

      </div>
        </div>
      </div>
    </div>
  )
}

export default Rewards