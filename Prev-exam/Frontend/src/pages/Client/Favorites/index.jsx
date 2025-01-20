import React, { useContext } from 'react'
import { FavContext } from '../../../components/context/FavProvider'
import { FaInfo } from "react-icons/fa6";
import {NavLink} from "react-router-dom"
import { FaHeart } from "react-icons/fa";

const Favorite = () => {
  const {favorite,ToggleFav,ClearFav} = useContext(FavContext)
  console.log(favorite);
  

  return (
    <div>
      <div className="container">
        <button className='btn' onClick={()=>{ClearFav()}}>Clear All</button>
        <div className="row">
          {favorite.length > 0 ? favorite.map((c)=>{
             return <div className="col-4" key={c._id}>
             <img src={c.img} alt={c.name} width={300}/>
             <h1>{c.name}</h1>
             <span>$ {c.price}</span>
             <div className="buttons">
                 <button className='btn'><NavLink to={`details/${c._id}`}><FaInfo/></NavLink></button>
                 <button className='btn'
                 style={{color: favorite.find((q)=>q._id === c._id) ? "red": "black"}}
                  onClick={() => {ToggleFav(c)}}><FaHeart/></button>
             </div>
         </div>
          }) : <h2>No Favorites</h2>}
        </div>
      </div>
    </div>
  )
}

export default Favorite