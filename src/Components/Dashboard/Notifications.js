import React from 'react'
import DashNav from './DashNav'
import "./Notifications.css"
import salad from "../../public/salad.png" 
import yoga from "../../public/yoga-stance.png"
import spa from "../../public/spa.png"

function Notifications() {
  return (
    <div className='bells-page'>
      <DashNav/>
      <div className='bells-main'>
        <div className='bells-title'>
        <h1>User's Recent WellBells</h1>
        </div>
        <div className='recent-bells'>
        <div className='bells-left'>
          <div className='single-bell-left-wrapper'>
        <div className='single-bell-left-one'>
  
        <div className='type-image'>
        <img  alt="nutritional-img" src={salad}/>
        </div>
        <div className='type-text'>
       <h6>Incomplete</h6>
        <h2>Drink Water!</h2>
        <h4>64oz of water are optimal</h4>
        </div> 

        </div>
        <div className='single-bell-left-two'>
        <div className='type-image'>
        <img  alt="nutritional-img" src={yoga}/>
        </div>
        <div className='type-text'>
       <h6>Incomplete</h6>
        <h2>Dance to Your Favorite Song!</h2>
        <h4>Dancing can get the blood flowing</h4>
        </div> 
          </div>
          <div className='single-bell-left-three'>
          <div className='type-image'>
        <img  alt="nutritional-img" src={spa}/>
        </div>
        <div className='type-text'>
       <h6>Incomplete</h6>
        <h2>Call or text someone you love</h2>
        <h4>Knowing someone is listening makes you feel appreciated</h4>
        </div> 
          </div>
          </div>
        </div>
        <div className='bells-right'>
        <div className='single-bell-right-wrapper'>
        <div className='single-bell-right-one'>
        <div className='type-image'>
        <img  alt="nutritional-img" src={salad}/>
        </div>
        <div className='type-text'>
       <h6>Incomplete</h6>
        <h2>Drink Water!</h2>
        <h4>64oz of water are optimal</h4>
        </div> 
        </div>
        <div className='single-bell-right-two'>
        <div className='type-image'>
        <img  alt="nutritional-img" src={salad}/>
        </div>
        <div className='type-text'>
       <h6>Incomplete</h6>
        <h2>Drink Water!</h2>
        <h4>64oz of water are optimal</h4>
        </div> 
          </div>
          <div className='single-bell-right-three'>
          <div className='type-image'>
        <img  alt="nutritional-img" src={salad}/>
        </div>
        <div className='type-text'>
       <h6>Incomplete</h6>
        <h2>Drink Water!</h2>
        <h4>64oz of water are optimal</h4>
        </div> 
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Notifications