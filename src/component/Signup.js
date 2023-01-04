import React from 'react'
import { NavLink } from 'react-router-dom'

function Signup() {
  return (
    <div>
        <form>
            <fieldset>
                <label >Username</label>
                <input type={"text"} />
                <label>email</label>
                <input type={"email"}/>
                <label>Mobile Number</label>
                <input type={"text"}/>
                <input type={"submit"}/>
            </fieldset>
        </form>
        <NavLink to={'/Login'}>Existing user</NavLink>
    </div>
  )
}

export default Signup