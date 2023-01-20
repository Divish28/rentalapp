import React, { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'



const Navbar=()=> {
  const navigate = useNavigate()

  // useEffect(()=>{
  //   let emailid=sessionStorage.getItem('email');
  //   if(emailid==="" || emailid === null){
  //     navigate("./Login")
  //   }
  // })

  return (
    <div>
        <nav id='homepage-navbar'>  
            <NavLink to={"Home"} >Home</NavLink>
            <NavLink to={"HouseList"}>Listing</NavLink>
            {/* <NavLink to={"Chennai"}>Chennai</NavLink>
            <NavLink to={"Mumbai"}>Mumbai</NavLink>
            <NavLink to={"Delhi"}>Delhi</NavLink>
            <NavLink to={"Kochi"}>Kochi</NavLink> */}
            <NavLink to={"Login"}>Login</NavLink>
            <NavLink to={"Signup"}>Signup</NavLink>
        </nav>
    </div>
  )
}

export default Navbar