import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Login.css'
function Login() {
  return (
    <div>
        <form>
          <fieldset>
                <label id='Login-username-label' >Username:</label>
                <input id='Login-username-input' type={"email"} required/>
                <label id='Login-password-label'>Password:</label>
                <input id='Login-password-input' type={"password"} required></input>
                <input id='login-submit-button'type={"submit"} value="Submit" />
          </fieldset>
        </form>
        <NavLink to={"/Signup"}>New User?</NavLink>
    </div>
  )
}

export default Login