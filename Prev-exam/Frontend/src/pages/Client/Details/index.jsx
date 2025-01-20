import React, { useEffect, useState } from 'react'
import axios from "axios"
import { FaInfo } from "react-icons/fa6";
import {NavLink, useParams} from "react-router-dom"
import { FaHeart } from "react-icons/fa";

const Details = () => {
  const [clock, setClock] = useState(null)
  const DB_URL = "http://localhost:8080"
  const {id} = useParams()

  const getClock = async () =>{
    try {
        const res = await axios(`${DB_URL}/clocks/${id}`)
        setClock(res.data.clock)
    } catch (error) {
        console.log(error);
        
    }
}
useEffect(() => {
  if (id) {
    getClock()
  }
  

}, [id])
  return (
    <div>
  <div className="container">
 
    {clock && (
      <div className="row">
         <div className="col-6">
<img src={clock.img} alt={clock.name} />
      </div>
      <div className="col-6">
        <h2>{clock.name}</h2>
        <span>$ {clock.price}</span>
        <div>
          <button className='btn'><NavLink to={"/"}>Go Back</NavLink></button>
        </div>

      </div>
      </div>
     
    )}
  </div>
    </div>
  )
}

export default Details