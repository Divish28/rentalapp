import React from 'react'
import { NavLink } from 'react-router-dom'
import './Css/Signup.css'

function Signup() {
  return (
    <div>
       <h1 className='Signup-Heading'>Signup</h1>
        <form className='Signup-form'>
                <label >Username:</label>
                <input type={"text"} />
                <label>E-mail:</label>
                <input type={"email"}/>
                <label>Mobile Number:</label>
                <input type={"text"}/>
                <button className='Signup-Submit-Button'>Submit</button>
        </form>
        <div className='Existing-user'>
            <NavLink to={'/Login'}>Existing user</NavLink>
        </div>
    </div>
  )
}

export default Signup