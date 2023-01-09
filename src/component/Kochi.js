import React from 'react'
import { useNavigate } from 'react-router-dom'

function Kochi() {
  const navigate=useNavigate()
  return (
    <div>
      <h2>This the related places for you search of house in Kochi</h2>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Kochi