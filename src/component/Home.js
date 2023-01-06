import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import './Css/home.css'
import homepic from './Images/House.jpg'

const Home=()=> {
  
  const [location,setLocation]=useState(null)
  
  

  const pages= (e)=>{
    e.preventDefault()
    console.log("display")
  }

  return (
    <>

    <div className='LocationSearch'>
        <h1 id='homepageHeading'>Welcome</h1>
        <form className='city-from' onSubmit={pages}>
        <select onChange={(e)=>{console.log(e)}} id='City' name='Location' placeholder='Select Location'>
            <option value={"Select"} >--Select City--</option>
            <option value={"Chennai"}> Chennai</option>
            <option value={"Bengaluru"}>Bengaluru</option>
            <option value={"Mubmai"}>Mumbai</option>
            <option value={"Delhi"}>Delhi</option>
            <option value={"Kochi"}>Kochi</option>
        </select>
        <input name='Locality' className='areaSearch' type="search" placeholder="Enter Locality" />
        <input className='areaSearchButton' type='submit' value="search"/>
        </form>

    </div>
    <div id='Error-Navigate'>
      <h1></h1>
    </div>
    <div>
      {/* <img src={homepic}/> */}
    </div>
    </>
  )
}

export default Home