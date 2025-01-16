import React, { useEffect, useState } from 'react'
import axios from "axios"
import { NavLink, useParams } from 'react-router-dom'
import "./index.css"

const Details = () => {
  const [dish, setDish] = useState(null)
  const {id} = useParams()
  const DB_URL = "http://localhost:8080"

  const getDishes = async () =>{
    try {
      const res = await axios.get(`${DB_URL}/dishes/${id}`)
      setDish(res.data.dish)
      console.log(res.data);
      console.log(res.data.dish);
      
    } catch (error) {
      console.log(error.message);
      
    }
  }
  useEffect(() => {
    if (id) {
  getDishes()     
    }
   
  
  }, [id])
  return (
    <div>
      <div className="container">      
      {dish && (
        <div className="row details-dish" key={dish._id}>
        <div className="col-6 image">
        <img src={dish.img} alt={dish.name}/>
        </div>
        <div className="col-6">
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
        <h2> ${dish.price}</h2>
       <button className='btn'> <NavLink to={`/`}>Go Back</NavLink></button>
        </div>
      </div>
      )}
      </div>
    </div>
  )
}

export default Details