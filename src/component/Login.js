import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Css/Login.css'

const Login=()=> {

  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")

  const loginVerify=(e)=>{
    e.preventDefault()
    if(validate()){
      fetch("http://localhost:3000/Login"+ username).then((res)=>{
        return res.json()
      }).then(()=>{
        
      })
    }
  }
  const validate=()=>{
    let result=true
    if(username === "" || username === null){
      result=false
    }
    if(password === "" || password === null){
      result=false
    }
  }
  return (
    <div>
      <h1 className='Login-Heading'>Login</h1>
        <form className='Login-form' onSubmit={loginVerify}>
                <label id='Login-username-label' >Username:</label>
                <input id='Login-username-input' value={username} onChange={e=>setUsername(e.target.value)}  type="email" />
                <label id='Login-password-label'>Password:</label>
                <input id='Login-password-input' value={password} onChange={e=>setPassword(e.target.value)}  type="password" ></input>
                <button>Submit</button>
                {/* <input id='login-submit-button'type={"submit"} value="Submit" /> */}
        </form>
        <div className="New-user">
          <NavLink to={"/Signup"}>New User?</NavLink>
        </div>
    </div>
  )
}

export default Login