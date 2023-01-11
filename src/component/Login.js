import axios from 'axios'
import React, { useState } from 'react'
import { json, NavLink } from 'react-router-dom'
import './Css/Login.css'

const Login=()=> {

  const[userName,setUsername]=useState("")
  const[password,setPassword]=useState("")

  const loginVerify=(e)=>{
    e.preventDefault()
    if(validate()){
      axios.get("http://localhost:3000/user"+ userName).then((res)=>{
        return res.json()
      }).then(()=>{
      })
    }
  }
  const validate=()=>{
    let result=true
    if(userName === "" || userName === null){
      result=false
      alert("enter email and password")
    }
    if(password === "" || password === null){
      result=false
      // alert("enter valid password")
    }
  }
  return (
    <div>
      <h1 className='Login-Heading'>Login</h1>
        <form className='Login-form' onSubmit={loginVerify}>
                <label id='Login-username-label' >Email:</label>
                <input id='Login-username-input' value={userName} onChange={e=>setUsername(e.target.value)}  type="email" placeholder='E-mail' />
                <label id='Login-password-label'>Password:</label>
                <input id='Login-password-input' value={password} onChange={e=>setPassword(e.target.value)}  type="password" placeholder='Password' ></input>
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