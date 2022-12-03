import React from 'react'
import {Link} from 'react-router-dom'


function HomePage() {
  return (
    <div className='landing-page' >
    <img src='../wellbell.png' alt='logo' width='200' height='10%'></img>

    <h1>Helping you take care of you - anywhere, anytime</h1>

    <div>WellBell is a digital application designed to help you unplug from your daily grind and reconnect with your wellbeing</div>

<div>
<img src='../freelan.webp' alt='wfh' width='75%' heigh='5px'></img>
</div>

    <Link to='/newuser'>
    <button className='start_button'>Get Started</button>
    </Link>
    <br/>
    <Link to='/login'>
    <button className='login_button'>Login</button>
    </Link>
    </div>
  )
}

export default HomePage 