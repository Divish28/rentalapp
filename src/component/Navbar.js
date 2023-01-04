import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav id='homepage-navbar'>  
            <NavLink to={"Home"} >Home</NavLink>
            <NavLink to={"Login"}>Login</NavLink>
            <NavLink to={"Signup"}>Signup</NavLink>
        </nav>
    </div>
  )
}

export default Navbar