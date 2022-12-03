import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
import SideNav from "./SideNav";

function ExistingUserLogin() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/useraccount");
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
      <div>
        {/* <a href="/about"> */}
        <img src="../wellbell.png" alt="logo" width="350" height="100"></img>
        <h1>Login to WellBell</h1>
        {/* <h3 className="text-4xl font-bold text-purple-600">Logo</h3> */}
        {/* </a> */}
        <h2>Be Well ... Helping You Take Care of You</h2>
        <br />
      </div>

      <div>
        <img src="../loginpic.jpeg" alt="logo" width="50%" height="200px"></img>
      </div>

      <br />
      <div className="signin">
        <form>
          <label htmlFor="username">Username</label>
          <input text='text' placeholder="Username"></input>
          <br />
          <label htmlFor="password">Password</label>
          <input type='text' placeholder="Password"></input>
          <br/>
          <br/>
{/* - Where does Get started button GO?????????????????????????????????????????????? */}
          <Link to='/currentReminders'>
            <button>Submit</button>
          </Link>
        </form>
      </div>
      <br/>
          <br/>

          <Link to='/'>
            <button>Return Home</button>
          </Link>

      <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
        <div className="my-6 space-y-2">
          <button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-2 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
            onClick={handleGoogleSignIn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>
      </div>
      <img></img>
    </div>
  );
}

export default ExistingUserLogin;
