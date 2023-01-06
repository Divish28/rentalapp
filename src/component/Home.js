import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Css/home.css'
import homepic from './Images/House.jpg'

const Home=()=> {
  const options=["Chennai","Bengaluru","Kochi","Mumbai","Delhi"]
  const navigate=useNavigate()
  const [location,setLocation]=useState(options[0])
  const submit=(e)=>{
    e.preventDefault()
    navigate(location)
    console.log(location)
  }
  // const pages= (e)=>{
  //   e.preventDefault()
  //   setLocation(()=>{
  //       location=e.target.value
  //   })
  //   console.log("display")
  // }

  return (
    <>

    <div className='LocationSearch'>
        <h1 id='homepageHeading'>Welcome</h1>
        <form className='city-from' onSubmit={submit}>
          <select value={location} onChange={(e)=>setLocation(e.target.value)}>
            {options.map((value)=>(<option value={value} key={value}>{value}</option>))}
          </select>
        <input name='Locality' className='areaSearch' type="search" placeholder="Enter Locality" />
        <input className='areaSearchButton' type='submit' value="search"/>
        </form>
    </div>
    <div>
      <img src={homepic} alt='Home' />
    </div>
    </>
  )
}

export default Home