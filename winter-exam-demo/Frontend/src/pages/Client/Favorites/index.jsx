import React, { useContext } from 'react'
import { FavContext } from '../../../components/context/FavProvider'
import { NavLink } from 'react-router-dom'
import { IoIosInformationCircle } from "react-icons/io";
import { IoBagAdd } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

const Favorite = () => {
  const { favorite, ToggleFav, ClearAll } = useContext(FavContext)
  console.log(favorite);

  return (
    <div>
      <div className="container">
        <div className="col-4">
          <button className='btn' onClick={ClearAll}>Clear all</button>
        </div>
        <div className="row">
          {favorite ? favorite.map((a) => {
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
                    <button className='btn'><IoBagAdd /></button>
                  </div>
                </div>
              </div>
            </div>
          }) : <h>No Favorite!!!</h>}
        </div>
      </div>
    </div>
  )
}

export default Favorite