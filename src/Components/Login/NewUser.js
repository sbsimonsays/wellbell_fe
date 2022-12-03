import React from 'react'
import {Link} from "react-router-dom"

function NewUser() {
  return (
    <section>
        <h1 className="text-3xl text-center mt-g  text-teal-800 font-bold">Create a WellNess Profile</h1>
        <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto '>
            <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
               <img src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMGZvcm0lMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60" alt="working from home"
               className='w-full rounded-2xl'/>
            </div>
            <div className=" text-teal-800 w-full md:w-[67%] lg:w-[40%] lg:ml-20">
        <form>
            <label>Email: </label>
            <input type="email" required 
            placeholder="Email"
            value="email"
            className="mb-6 w-full px-4 py-2 text-xl text-teal-800 bg-orange-50 border-orange-300 rounded transition ease-in-out"
            />
          
            <label>Password: </label>
            <input type="text" required 
            value="password"
            placeholder="Password"
            className="mb-6 w-full px-4 py-2 text-xl text-teal-800 bg-orange-50 border-orange-300 rounded transition ease-in-out"/>
           
            <label>Re-Enter Password: </label>
            <input type="text" required placeholder="Re-Enter Password"
            className="mb-6 w-full px-4 py-2 text-xl text-teal-800 bg-orange-50 border-orange-300 rounded transition ease-in-out"/>
        
            <Link to="/userintake">
              <button class='bg-orange-500 text-teal-800 font-bold py-2 px-4 rounded-full'>Next</button></Link>
        </form>
        </div>
        </div>
    </section>
  )
}

export default NewUser