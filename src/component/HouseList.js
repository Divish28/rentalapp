import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import HouseData from './HouseData'
import React, { useEffect, useState } from 'react'

const HouseList = () => {

  const [list, setList] = useState(HouseData)
  console.log(list)

  // const [filter,setFilter]=useState([])
  // const [loading,setLoading]=useState([])

  // useEffect(()=>{
  //     const getHouses = async ()=>{
  //         setLoading(true)
  //         const response = await axios.get()
  //     }
  //     getHouses()
  // },[])

  return (
    <div >
      {/* className='container mt-3' */}
      <h1 className='text-center'>List of House for rent</h1>
      <div className='row'>
        {
          list.map((element, id) => {
            return (
              <>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={element.addimg} />
                  <Card.Body>
                    <Card.Title>{element.city}</Card.Title>
                    <Card.Text>
                      {element.category}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </>
            )
          })
        }
      </div>
    </div>
  )
}

export default HouseList