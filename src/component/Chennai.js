// import React, { useEffect, useState } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Chennai() {
  const navigate=useNavigate()
  const[location,setLocation]=useState("")
  // const url="https://mocki.io/v1/21356917-7681-4858-a074-7e9be61376a4"
  // const[location,setlocation]=useState(null);
  // const[error,setError]=useState(null);

  // useEffect(()=>{
  //   axios.get(url).then(res=>{setlocation(res.data)}).catch(error=>{
  //     setError(error)
  //   })
  // },[])
  
  // const loc=()=>{
  //   return location.map(House=>{
  //     return(
  //       <h4>{House.Type}</h4>
  //     )
  //   })
  // }

  // if(error) return `Error:${error.message}`
  // if(!location) return null

  return (
    <div>
        <h1>This is the Related properties for your search In Chennai</h1>
        <form>
          <input type="text" placeholder="Search Locality" />
        </form>
        <button onClick={()=>navigate(-1)} >Back</button>
    </div>
  )
}

export default Chennai