import React, { useEffect, useState } from 'react'


const Nav = () => {
    let[state,setState] = useState();
    
    useEffect(()=>{
        document.querySelector("body").className = state
    
    },[state])

    const getData = () =>{
        if(state == "light-theme"){
            setState("dark-theme")
        }
        else{
            setState("light-theme")
            
        }
    }
  return (
   <>
   <nav>
    <div className="logo">
        <h2>Ecommerce</h2>
    </div>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
        <li onClick={getData}>{state === "light-theme"? <i style={{color: "blue" , fontWeight:"bold" , fontSize:"25px"}} className="fa-regular fa-moon"></i>: <i  style={{color: "yellow" , fontWeight:"bold" , fontSize:"25px"}} className="fa-regular fa-sun"></i>}
        </li>
    </ul>
   </nav>
   </>
  )
}

export default Nav