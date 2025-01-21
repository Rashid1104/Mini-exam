import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoIosInformationCircle } from "react-icons/io";
import { IoBagAdd } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import axios from 'axios';
import { FavContext } from '../../../components/context/FavProvider';
import Basket from '../Basket';
import { BasketContext } from '../../../components/context/BasketProvider';
import "./index.css"

const Home = () => {
  const [arrives, setArrives] = useState([])
  const DB_URL = "http://localhost:8080"

  const { favorite, ToggleFav } = useContext(FavContext)
  const { AddToBasket } = useContext(BasketContext)
  return (
    <div>
      <div className="sec-1">
        <div className="img-logo">
          <div className="div">
            <p className="p-text">Winter Fasion
            </p>
            <h1 className='h1-text'>Fashion Collection 2019</h1>
            <button className='btn-shop-now'>Shop Now</button>
          </div>

        </div>
      </div>
      <div className="sec-2">
        <div className="row">
          <div className="col-4 img-1 img-all">
            <button className="in-img">Shop for Male</button>
          </div>
          <div className="col-4 img-2 img-all">
            <button className="in-img">Shop for Male</button>
          </div>
          <div className="col-4 img-all img-3">
            <button className="in-img">Shop for Male</button>
          </div>
        </div>
      </div>
      <div className="sec-3">
        <div className="container">
          <div className="row">
            {arrives ? arrives.map((a) => {
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
    </div>
  )
}

export default Home