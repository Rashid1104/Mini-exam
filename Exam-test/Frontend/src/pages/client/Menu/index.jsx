import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaInfo } from "react-icons/fa6";
import "./index.css"
import { NavLink } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { FavContext } from '../../../components/context/Favprovider';

const Menu = () => {
  const [dishes, setDishes] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [dishesCopy, setDishesCopy] = useState("")
  const DB_URL = "http://localhost:8080"

  const { ToggleFav } = useContext(FavContext)
  const getDishes = async () =>{
    try {
      const res = await axios(`${DB_URL}/dishes`)
      setDishes(res.data.dishes)
      setDishesCopy(res.data.dishes)
      console.log(res.data.dishes);
      
    } catch (error) {
      console.log(error.message);
      
    }
  }
  useEffect(() => {
    getDishes()
  
  }, [])

 const changeHandlle = (e) =>{
  let sortedDishes = null;
  let change = e.target.value;
  console.log(change);
  
  if (change === "asc") {
    sortedDishes = [...dishes].toSorted((a,b)=> a.price - b.price)
  }else if(change === "desc"){
    sortedDishes = [...dishes].toSorted((a,b)=> b.price - a.price)
  }else{
    sortedDishes = [...dishesCopy]
  }

  setDishes([...sortedDishes])
 }
const filteredDishes = dishes.filter((d) => d.name.toLowerCase().includes(searchQuery.toLowerCase().trim()))
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <input type="search" placeholder='search...' onChange={(e)=> setSearchQuery(e.target.value)}/>
          </div>
          <div className="col-3"></div>
          <div className="col-3">
            <select name="" id="" onChange={changeHandlle}>
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
              <option value="default">Default</option>
            </select>
          </div>
        </div>
        <div className="row all-dishes">
          {
            dishes.length > 0 && filteredDishes.map((d)=>{
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
                 
                </div>
                <div className="icons">
                <button className='btn'><NavLink to={`details/${d._id}`}><FaInfo/></NavLink></button>
                <button className='btn' onClick={() => { ToggleFav(d)}}><FaHeart /></button>
                </div>
              </div>
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Menu