import React from 'react'
import {Link} from 'react-router-dom'


function HomePage() {
  return (
    <section>
    <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto ' >
    {/* <img src='../wellbell-teal.png' alt='logo' width='300' height='10%'></img> */}

    <h1>Helping you take care of you - anywhere, anytime</h1>

    <p>WellBell is a digital application designed to help you unplug from your daily grind and reconnect with your wellbeing</p>
    </div>

<div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto '>
<div 
    className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
     <img src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMGZvcm0lMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60" 
    alt="working from home"
    className='w-full rounded-2xl mb-6'
    />
            

<div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
    <Link to='/newuser'>
    <button  className=" mb-6 w-full px-4 py-2 text-xl text-teal-800 bg-orange-50 border-orange-300 rounded-full transition ease-in-out">Get Started</button>
    </Link>
    <br/>
    <Link to='/login'>
    <button  className=" mb-6 w-full px-4 py-2 text-xl text-teal-800 bg-orange-50 border-orange-300 rounded-full transition ease-in-out">Login</button>
    </Link>
    </div>
    </div>
    </div>
    </section>
  )
}

export default HomePage 