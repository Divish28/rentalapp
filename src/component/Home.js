import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Css/home.css'
import homepic from './Images/House.jpg'

const Home=()=> {
  const city=["Chennai","Bengaluru","Kochi","Mumbai","Delhi"]
  const navigate=useNavigate()
  const [location,setLocation]=useState(city[0])

  const submit=(e)=>{
    e.preventDefault()
    navigate(location)
    // console.log(location)
  }

  return (
    <>

    <div className='LocationSearch'>
        <h1 id='homepageHeading'>Welcome</h1>
        <form className='city-from' onSubmit={submit}>
          <select value={location} onChange={(e)=>setLocation(e.target.value)}>
            {city.map((value)=>(<option value={value} key={value}>{value}</option>))}
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