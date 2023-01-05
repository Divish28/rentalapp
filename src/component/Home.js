import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import homepic from './House.jpg'

function Home() {
  
  function display(){
    const city=document.getElementById('#City')
    const disp=document.getElementById("#Error-Display")
    if (city="Chennai") {

      return(<Link to='/Chennai'/>)
      
    } 
    else if(city="Mumbai"){
      return(<Link to='/Mumbai'/>)
    }
    else if(city="Bengaluru"){
      return(<Link to='/Bengaluru'/>)
    }
    else if(city="Delhi"){
      return (<Link to='/Delhi'/>)
    }
    else if(city="Kochi"){
      return (<Link to="/Kochi"/>)
    }
    else {

      return(disp.textContent("Enter Correct Number"))
    }

  }

  return (
    <>
    <div className='LocationSearch'>
        <h1 id='homepageHeading'>Welcome</h1>
        <select id='City' name='Location' placeholder='Select Location'>
            <option value={"Select"} >--Select City--</option>
            <option value={"Chennai"}> Chennai</option>
            <option value={"Bengaluru"}>Bengaluru</option>
            <option value={"Mubmai"}>Mumbai</option>
            <option value={"Delhi"}>Delhi</option>
            <option value={"Kochi"}>Kochi</option>
        </select>
        <input className='areaSearch' type={"search"} placeholder="Enter Locality" />
        <input className='areaSearchButton' type={'submit'} value="search"/>
    </div>
    <div id='Error-Display'>
      <h1></h1>
    </div>
    <div>
      <img src={homepic}/>
    </div>
    </>
  )
}

export default Home