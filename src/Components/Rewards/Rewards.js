import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react'
// import Reward from ''
import axios from 'axios'
import SideNav from './SideNav';

const API = process.env.REACT_APP_API_URL;

function Rewards() {

  const [rewards, setRewards] = useState([])

useEffect(() =>{
  axios
  .get(`${API}/bells`)
  .then((res) => setRewards)
})


  return (

    <div className='sidebar'>
        <img src='../wellbell.png' alt='logo' width='200' height='10%'></img>
        <Link to='/'>
          <button>Home</button>
        </Link>
    <div>
<SideNav/>
    </div>


    <div className='points'>
    {/* - interpolate user's name into the h1 tag for rewards */}
    {/* <h1>${user} Rewards</h1> */}

{/* - ppoints from backend in slide bar */}
<p>Points until next reward</p>
<p>rewards.ppoints</p>


{/* - npoints from backend in slide bar */}
<p>Points until next reward</p>
<p>rewards.npoints</p>

{/* - scpoints from backend in slide bar */}
<p>Points until next reward</p>
<p>rewards.scpoints</p>

    </div>
    

<div className='reward-carosel'>
<h2>In Partnership with</h2>
    <img src='../rewards1.png' alt='planet fitness'>Planet Fitness</img>
    <img src='../rewards2.png' alt='fresh direct'>Fresh Direct</img>
    <img src='../rewards3.jpeg' alt='spa castle'>Spa Castle</img>
    <img src='../rewards4.png' alt='planet fitness'>Nike</img>
    <img src='../rewards5.png' alt='whole foods'>Whole Foods</img>
</div>
    

    </div>
  )
}

export default Rewards