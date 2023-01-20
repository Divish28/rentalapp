import React from 'react'
import { useNavigate } from 'react-router-dom'

function Mumbai() {
  const navigate=useNavigate()
  return (
    <div>
      <h2>This the related places for your search in Mumbai</h2>
      <button onClick={()=>navigate('/')}>Go Back</button>
    </div>
  )
}

export default Mumbai