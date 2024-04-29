import React, { useState } from 'react'

const Conditional_eventHandling = () => {
    const[isLoggedIn,setIsLoggedIn]=useState(false);
    const handleLogout=()=>{
        setIsLoggedIn(true)

    }
    const handleLogin=()=>{
         setIsLoggedIn(false)
    }
  return (
    <div>
        {
            isLoggedIn ? (
                <div>
                <h1>welcome!!</h1>
                <button onClick={handleLogout}>Logout</button>
                </div>
            ):(
                <div>
            <h1>Please Login</h1>
            <button onClick={handleLogin}>Login</button>
            </div>
            )
        }
      
    </div>
  )
};

export default Conditional_eventHandling
