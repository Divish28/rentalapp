import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { json, Navigate, NavLink, useNavigate } from 'react-router-dom'
import './Css/Login.css'
import Home from './Home'
 
const Login=()=> {

  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const navigate=useNavigate()

  useEffect(()=>{
    sessionStorage.clear()
  })

  const loginverify = (e) =>{
    if(validate()){
      e.preventDefault()
      // console.log("process ")
      axios.get("http://localhost:8000/user?email"+email).then((res)=>{
        return res.data
      }).then((resp)=>{
        if (Object.keys(resp).length===0){
          alert("Enter valid username")
        }
        else{
          if(resp.password === password){
            alert("login sucessful")
            sessionStorage("email",email)
            navigate(Home)
          }
          else{
            console.log(resp.data)
            alert("enter correct password")
          }
        }
      }).catch((err)=>{
        alert("Login failed "+err)
      })
    }
  }

  // const loginverify=(e)=>{
  //   e.preventDefault()
  //   if((validate)=>{
  //     let result=true
  //     if(email === "" || email === null ){
  //       result=false
  //       alert("enter Mail")
  //     }
  //     if(password === "" || password === null){
  //       result=false
  //       alert("enter password")
  //     }
  //   }){
  //     console.log("proceed")
  //   }
  // }

  // const loginverify = (e)=>{
  //   e.preventDefault()
  //   if((validate)=>{
  //   let result=true
  //   if(email === "" || email === null){
  //     result=false
  //     alert('enter email')
  //   }
  //   if(password === "" || password === null){
  //     result=false
  //     alert("Enter password")
  //   }  

  //   ){
  //     console.log("proceed")
  //     axios.get("http://localhost:8000/user/"+userName").then((res)=>{
  //       return res.json()
  //     }).then((resp)=>{
  //       if(Object.keys(resp).length===0){
  //         alert("Enter Valid username")
  //       }
  //       else{
  //         if(resp.password===password){
  //           alert("Login Sucessful")
  //           navigate("./Home")
  //         }
  //         else{
  //           alert("enter Valid password")
  //         }
  //       }
  //     }).catch((err)=>{
  //       alert("login failed"+err)
  //     })
  //   }
  // }

  const validate = () => {
    let result = true;
    if (email === '' || email === null) {
            result = false;
            alert("Invalid Username");
    }
    if (password === '' || password === null) {
            result = false;
            alert("Invalid Password");
    }
    return result;
}



  return (
    <div>
      <h1 className='Login-Heading'>Login</h1>
        <form className='Login-form' onSubmit={loginverify}>
                <label id='Login-username-label' >Email:</label>
                <input id='Login-username-input' value={email} onChange={(e)=>setEmail(e.target.value)}  type="text" placeholder='E-mail' />
                <label id='Login-password-label'>Password:</label>
                <input id='Login-password-input' value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder='Password' ></input>
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