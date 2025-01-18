import React, { useContext, useEffect, useState } from 'react'
import "../Home/index.css"
import axios from "axios"
import { IoMdInformationCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { FavContext } from '../../../components/Context/FavProvider';


const Home = () => {
  const [arivalls, setArivalls] = useState([])
  const DB_URL = "http://localhost:8080"

  const { ToggleFav } = useContext(FavContext)

  const getArivalls = async () => {
    try {
      const res = await axios(`${DB_URL}/arivalls`)
      setArivalls(res.data.Arivalls)
      console.log(res.data);

    } catch (error) {
      console.log(error.message);

    }
  }

  useEffect(() => {
    getArivalls()
  }, [])

  return (
    <div>
      <div className="logo-img">
        <div className="container text-in-img">
          <div className="col-6 shop-items">
            <p>Spring / Summer Collection 2017</p>
            <h1 className='h1-texts'>Get up to 30% Off New Arrivals</h1>
            <button className='shop-btn'>SHOP NOW</button>
          </div>


        </div>
      </div>
    {/* <div className="container">
      <div className="row">
        <div className="col-6">
        <p>Spring / Summer Collection 2017</p>
            <h1 className='h1-texts'>Get up to 30% Off New Arrivals</h1>
            <button className='shop-btn'>SHOP NOW</button>
        </div>
        <div className="col-6">
        <img src="https://preview.colorlib.com/theme/timezone/assets/img/hero/watch.png.webp" alt="" />
        </div>
      </div>
    </div> */}
      <div className="sec-2">
        <div className="container">
          <div className="row agusha">
            <div className="col-md-4 col-6 background-img-1" >
              <button className='button'><h1>WOMEN'S</h1></button>


            </div>
            <div className="col-md-4 col-6 background-img-2">
              <button className='button'><h1>ACCESSORIES'S</h1>
              </button>
            </div>
            <div className="col-md-4 col-6 background-img-3">
              <button className='button'><h1>MENS'S</h1></button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row arivalls-row">
          {arivalls.length > 0 && arivalls.map((a) => {
            return <div className="col-2 arivalls" key={a._id}>
              <img src={a.img} alt={a.name} width={200} />
              <div className="texts">
                <p className='name'>{a.name}</p>
                <span>{a.oldPrice ? <span className='old-price'>${a.oldPrice}</span> : ""} ${a.price}</span>
              </div>
              <div className="icons">
                <button className='btn'><NavLink to={`details/${a._id}`}><IoMdInformationCircle /></NavLink></button>
                <button
                  className='btn'
                  onClick={() => { ToggleFav(a) }}
                >
                  <FaHeart />
                </button>
              </div>
            </div>




          })}
        </div>
      </div>
      <div className="sec-3">
        <div className="container">
          <h1 className="texts">Latest Blogs</h1>
          <div className="row">
            <div className="col-md-4 col-6" >
              <img src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg.webp" alt="" />
            </div>
            <div className="col-md-4 col-6">
              <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg.webp" alt="" />
            </div>
            <div className="col-md-4 col-6">
              <img src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="sec-4">
        <div className="left-part">
          <h1>Newsletter
          </h1>
          <p>Subscribe to our newsletter and get 20% off your first purchase<</p>
        </div>
        <div className="right-part">
          <input type="email" placeholder="Your Email"/>
        </div>
      </div> */}
    </div>
  )
}

export default Home