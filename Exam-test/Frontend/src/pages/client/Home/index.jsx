import React, { useEffect, useState } from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInfo } from "react-icons/fa6";
import "./index.css"
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [dishes, setDishes] = useState([])
  const DB_URL = "http://localhost:8080"

  const getDishes = async () =>{
    try {
      const res = await axios(`${DB_URL}/dishes`)
      setDishes(res.data.dishes)
      console.log(res.data.dishes);
      
    } catch (error) {
      console.log(error.message);
      
    }
  }
  useEffect(() => {
    getDishes()
  
  }, [])
  
  return (
    <div>
      <div className="container">
        <div className="row all-dishes">
          {
            dishes.length > 0 && dishes.map((d)=>{
              return <div className="col-6 dishes" key={d._id}>
                <div className="img">
                  <img src={d.img} alt={d.name} width={80}/>
                </div>
                <div className="texts">
                  <h3>{d.name}</h3>
                  <p>{d.description}</p>
                </div>
                <div className="price">
                 <h2> ${d.price}</h2>
                 <NavLink to={`details/${d._id}`}><FaInfo/></NavLink>
                </div>
              </div>
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Home