import React, { useContext, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoIosInformationCircle } from "react-icons/io";
import { IoBagAdd } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import axios from 'axios';
import { FavContext } from '../../../components/context/FavProvider';
import Basket from '../Basket';
import { BasketContext } from '../../../components/context/BasketProvider';
import "./index.css"
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Home = () => {
  const [arrives, setArrives] = useState([])
  const DB_URL = "http://localhost:8080"

  const { favorite, ToggleFav } = useContext(FavContext)
  const { AddToBasket } = useContext(BasketContext)

  const getArrives = async () => {
    try {
      const res = await axios(`${DB_URL}/arrives`)
      setArrives(res.data.arrives)
      console.log(res.data.arrives)
    } catch (error) {

    }
  }

  useEffect(() => {
    getArrives()

  }, [])
  return (
    <div>
      <div className="sec-1">
        <div className="img-logo">
          <div className="col-6">
            <p className="p-text">Winter Fasion
            </p>
            <h1 className='h1-text'>Fashion Collection 2019</h1>
            <button className='btn-shop-now'>Shop Now</button>
          </div>

        </div>
      </div>
      <div className="sec-2">
        <div className="gugu">
          <div className="col-sm-6 col-md-4 img-1 img-all">
            <button className="in-img"><h1>Shop for Male</h1></button>
          </div>
          <div className="col-sm-6 col-md-4 img-2 img-all">
            <button className="in-img"><h1>Shop for Male</h1></button>
          </div>
          <div className="col-sm-6 col-md-4 img-all img-3">
            <button className="in-img"><h1>Shop for Male</h1></button>
          </div>
        </div>
      </div>
      <div className="sec-3">
        <div className="container">
          <div className="row">
            {arrives ? arrives.map((a) => {
              return <div className="col-sm-6 col-md-4" key={a._id}>
                <div className="img">
                  <img src={a.img} alt={a.name} width={280} />            
                </div>
                <div className="texts">
                    <p className='p-cart'>{a.brand}</p>
                    <h2 className='h2-cart'>{a.name}</h2>
                    <span className='price-cart'>$ {a.price}</span>
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
            }) : <h>Loading...</h>}
          </div>
        </div>
      </div>
      <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Column 1: Categories */}
          <div className="col-md-3">
            <h5>Category</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-light text-decoration-none">Male</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Female</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Shoes</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Fashion</Link></li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="col-md-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><Link to="#" className="text-light text-decoration-none">About</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">News</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">FAQ</Link></li>
              <li><Link to="#" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Address */}
          <div className="col-md-3">
            <h5>Address</h5>
            <p>200, Green block, New York</p>
            <p>+10 456 267 1678</p>
            <p>
              <a href="mailto:Contact89@Winter.Com" className="text-primary text-decoration-none">
                Contact89@Winter.Com
              </a>
            </p>
          </div>

          {/* Column 4: Newsletter */}
          <div className="col-md-3">
            <h5>Newsletter</h5>
            <form className="d-flex">
              <input type="email" className="form-control me-2" placeholder="Email Address" />
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-4">
          <a href="#" className="text-light mx-2 fs-4"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-light mx-2 fs-4"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-light mx-2 fs-4"><i className="fab fa-instagram"></i></a>
        </div>

        {/* Copyright */}
        <div className="text-center mt-3">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} All rights reserved | This template is made with ❤️ by
            <a href="https://colorlib.com" className="text-primary text-decoration-none"> Colorlib</a>
          </p>
        </div>
      </div>
    </footer>

    </div>
  )
}

export default Home