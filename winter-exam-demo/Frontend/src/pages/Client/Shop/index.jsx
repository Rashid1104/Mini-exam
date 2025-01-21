import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosInformationCircle } from "react-icons/io";
import { IoBagAdd } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import axios from 'axios';
import { FavContext } from '../../../components/context/FavProvider';
import Basket from '../Basket';
import { BasketContext } from '../../../components/context/BasketProvider';

const Shop = () => {
  const [arrives, setArrives] = useState([])
  const [arrivesCopy, setArrivesCopy] = useState([])
  const [SearchQuery, setSearchQuery] = useState("")
  const DB_URL = "http://localhost:8080"

  const { favorite, ToggleFav } = useContext(FavContext)
  const { AddToBasket } = useContext(BasketContext)

  const getArrives = async () => {
    try {
      const res = await axios(`${DB_URL}/arrives`)
      setArrives(res.data.arrives)
      setArrivesCopy(res.data.arrives)
      console.log(res.data.arrives)
    } catch (error) {

    }
  }
  const ToggleSelect = async (e) => {
    let SortedArrives = null
    const change = e.target.value
    if (change === "asc") {
      SortedArrives = [...arrives].toSorted((a, b) => a.price - b.price)
    } else if (change === "desc") {
      SortedArrives = [...arrives].toSorted((a, b) => b.price - a.price)
    } else {
      SortedArrives = [...arrivesCopy]
    }
    setArrives([...SortedArrives])
  }
  const FilteredArrives = arrives.filter((a) => a.name.toLowerCase().includes(SearchQuery.toLowerCase().trim()))
  useEffect(() => {
    getArrives()

  }, [])

  return (
    <div>
      <div className="container">
        <div className="col-4">
          <input type="search" placeholder="Search..." onChange={(q) => { setSearchQuery(q.target.value) }} />
        </div>
        <div className="col-4">
          <select name="" id="" onChange={ToggleSelect}>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
            <option value="default">DEFAULT</option>
          </select>
        </div>
        <div className="row">
          {arrives ? FilteredArrives.map((a) => {
            return <div className="col-4" key={a._id}>
              <div className="img">
                <img src={a.img} alt={a.name} width={300} />
                <div className="texts">
                  <p>{a.brand}</p>
                  <h2>{a.name}</h2>
                  <span>$ {a.price}</span>
                  <div className="other">
                    <button className='btn'>,<NavLink to={`details/${a._id}`}><IoIosInformationCircle /></NavLink></button>
                    <button className='btn'
                      style={{ color: favorite.find((q) => q._id === a._id) ? "red" : "" }}
                      onClick={() => { ToggleFav(a) }}><FaHeart /></button>
                    <button className='btn'
                      onClick={() => { AddToBasket(a) }}
                    ><IoBagAdd /></button>
                  </div>
                </div>
              </div>
            </div>
          }) : <h>Loading...</h>}
        </div>
      </div>
    </div>
  )
}

export default Shop