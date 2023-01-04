import React from 'react'

function Signup() {
  return (
    <div>
        <form>
            <fieldset>
                <label>Username</label>
                <input type={"text"} />
                <label>email</label>
                <input type={"email"}/>
                <label>Mobile Number</label>
                <input type={"text"}/>
            </fieldset>
        </form>
    </div>
  )
}

export default Signup