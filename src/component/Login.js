import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Css/Login.css'
function Login() {
  return (
    <div>
      <h1 className='Login-Heading'>Login</h1>
        <form className='Login-form'>
                <label id='Login-username-label' >Username:</label>
                <input id='Login-username-input' type={"email"} required/>
                <label id='Login-password-label'>Password:</label>
                <input id='Login-password-input' type={"password"} required></input>
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