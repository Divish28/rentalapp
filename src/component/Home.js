import React from 'react'
import './home.css'

function Home() {
  return (
    <div className='LocationSearch'>
        <h1 id='homepageHeading'>Welcome</h1>
        <select name='Location' placeholder='Select Location'>
            <option value={"Select"} >--Select City--</option>
            <option value={"chennai"}> Chennai</option>
            <option value={"Bengaluru"}>Bengaluru</option>
            <option value={"Mubmai"}>Mumbai</option>
            <option value={"Delhi"}>Delhi</option>
            <option value={"Kochi"}>Kochi</option>
        </select>
        <input className='areaSearch' type={"search"} placeholder="Enter Locality" />
        <input className='areaSearchButton' type={'submit'} value="search"/>
    </div>
  )
}

export default Home