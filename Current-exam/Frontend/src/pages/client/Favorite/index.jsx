import React, { useContext, useState } from 'react'
import { FavContext } from '../../../components/Context/FavProvider'
import { NavLink } from 'react-router-dom';
import { IoMdInformationCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

const Favorite = () => {
  const { favorite, toggleFav } = useContext(FavContext)
  console.log(favorite);

  const { ToggleFav, ClearAllFav } = useContext(FavContext)


  return (
    <div>
      <div className="container">
        <div className="row" >
          <button className="btn" onClick={ClearAllFav}>Clear All Favorites</button>
          {favorite.length > 0 && favorite.map((a) => {
            return <div className="col-2 arivalls" key={a._id}>
              <img src={a.img} alt={a.name} width={200} />
              <div className="texts">
                <p className='name'>{a.name}</p>
                <span>{a.oldPrice ? <span className='old-price'>${a.oldPrice}</span> : ""} ${a.price}</span>
              </div>
              <div className="icons">
                <button className='btn'><NavLink to={`details/${a._id}`}><IoMdInformationCircle /></NavLink></button>
                <button className='btn'><FaHeart onClick={() => { ToggleFav(a) }} /></button>
              </div>
            </div>




          })}
        </div>
      </div>
    </div>
  )
}

export default Favorite