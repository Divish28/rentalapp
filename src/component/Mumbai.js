import React from 'react'
import { useNavigate } from 'react-router-dom'

function Mumbai() {
  const navigate=useNavigate()
  return (
    <div>
      <h2>This the related places for you search of house in Mumbai</h2>
      <button onClick={()=>navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Mumbai