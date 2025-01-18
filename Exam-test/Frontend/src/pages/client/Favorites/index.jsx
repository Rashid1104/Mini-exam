import React, { useContext } from 'react'
import { FavContext } from '../../../components/context/Favprovider'
import { FaHeart } from "react-icons/fa";
import { FaInfo } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


const Favorite = () => {
  const {favorite, ToggleFav, ClearAll} = useContext(FavContext)
  console.log(favorite);
  
  return (
    <div>
      <div className="container">
        <div className="row">
           <div className="col-6">
           <button className='btn' onClick={ClearAll}>Clear All</button>
           {
            favorite.length > 0 && favorite.map((d)=>{
              return <div className="col-3">
                <div className="img-fav">
                  <img src={d.img} alt={d.name} width={200}/>
                </div>
                <div className="text">
                  <h3>{d.name}</h3>
                  <p>{d.description}</p>
                </div>
                <div className="price-fav">
                 <h2> ${d.price}</h2>
                <div className="buttons">
                  <button className='btn'><NavLink to={`details/${d._id}`}><FaInfo/></NavLink></button>
                  <button className='btn' onClick={() =>{ ToggleFav(d)}}><FaHeart /></button>
                </div>
                </div>
              </div>
            })
           }
           </div>
        </div>
      </div>
    </div>
  )
}

export default Favorite