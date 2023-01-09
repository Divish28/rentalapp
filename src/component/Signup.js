import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Css/Signup.css'

const Signup =()=> {

  const[username,setUsername]=useState("")
  const[email,setEmail]=useState("")
  const[MobileNumber,setMobileNumber]=useState("")
  const[Password,setPassword]=useState("")


  const handlesubmit=(e)=>{
    e.preventDefault()


  }

  return (
    <div>
       <h1 className='Signup-Heading'>Signup</h1>
        <form className='Signup-form' onSubmit={handlesubmit}>
                <label >Username:</label>
                <input value="username" type="text" />
                <label>E-mail:</label>
                <input type="email"/>
                <label>Mobile Number:</label>
                <input type="text"/>
                <label>Password:</label>
                <input type="password"/>
                <input id='signup-submit' type="submit"/>
        </form>
        <div className='Existing-user'>
            <NavLink to={'/Login'}>Existing user</NavLink>
        </div>
    </div>
  )
}

export default Signup