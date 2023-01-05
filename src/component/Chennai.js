import axios, { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

function Chennai() {
  const url="https://mocki.io/v1/28351689-b570-4d2f-8681-7362e905f434"
  const[location,setlocation]=useState(null);
  const[error,setError]=useState(null);

  useEffect(()=>{
    axios.get(url).then(res=>{setlocation(res.data)}).catch(error=>{
      setError(error)
    })
  },[])
  
  // const loc=()=>{
  //   return location.map(House=>{
  //     return(
  //       <h4>{House.Type}</h4>
  //     )
  //   })
  // }

  if(error) return `Error:${error.message}`
  if(!location) return null

  return (
    <div>
      {location}
        <h1>Related properties for your search In Chennai</h1>
    </div>
  )
}

export default Chennai