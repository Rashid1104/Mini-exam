import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import { FaInfo } from "react-icons/fa6";
import {NavLink} from "react-router-dom"
import { FaHeart } from "react-icons/fa";
import { FavContext } from '../../../components/context/FavProvider';
import "./index.css"
import { BasketContext } from '../../../components/context/BasketProvider';
import { FaShoppingBasket } from "react-icons/fa";

const Oclocks = () => {
    const [clocks, setClocks] = useState([])
    const [clocksCopy, setClocksCopy] = useState([])
    const [SearchQuery, setSearchQuery] = useState("")
    const DB_URL = "http://localhost:8080"

    const { ToggleFav,favorite } = useContext(FavContext)
    const {AddToBasket , basket} = useContext(BasketContext)
    console.log(basket);
    
    console.log(favorite);
    

    const getClocks = async () =>{
        try {
            const res = await axios(`${DB_URL}/clocks`)
            setClocks(res.data.clocks)
            setClocksCopy(res.data.clocks)
            console.log(res.data.clocks);
        } catch (error) {
            console.log(error);
            
        }
    }
    const ChangeToggle = (e) =>{
        let SortedClocks = null;
        const change = e.target.value
        if (change === "asc") {
            SortedClocks = [...clocks].toSorted((a,b)=>a.price - b.price)
        }else if(change === "desc"){
            SortedClocks = [...clocks].toSorted((a,b)=>b.price - a.price)

        }else{
            SortedClocks = [...clocksCopy]
        }
        setClocks([...SortedClocks])
    }
    const FilteredClocks = clocks.filter((a)=>a.name.toLowerCase().includes(SearchQuery.toLowerCase().trim()))
useEffect(() => {
    getClocks()

}, [])

  return (
    <div>
        <div className="container">
        <div className="row">
            <div className="col-4">
                <input type="search" placeholder='Search...' onChange={(e)=>setSearchQuery(e.target.value)}/>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
                <select name="" id="" onChange={ChangeToggle}>
                    <option value="asc">ASC</option>
                    <option value="desc">DESC</option>
                    <option value="default">DEFAULT</option>
                </select>
            </div>
        </div>
            <div className="row">
                {clocks.length > 0 && FilteredClocks.map((c)=>{
                    return <div className="col-4" key={c._id}>
                        <div className="img">
                        <img src={c.img} alt={c.name} width={300}/>
                        </div>
                        <h1>{c.name}</h1>
                        <span>{c.price}</span>
                        <div className="buttons">
                            <button className='btn'><NavLink to={`details/${c._id}`}><FaInfo/></NavLink></button>
                            <button className='btn'
                             style={{color: favorite.find((q)=>q._id === c._id) ? "red": "black"}}
                             onClick={() => {ToggleFav(c)}}><FaHeart/></button>
                             <button className='btn'
                             onClick={()=>{AddToBasket(c)}}
                             ><FaShoppingBasket/></button>
                        </div>
                    </div>
                })}

            </div>
        </div>
    </div>
  )
}

export default Oclocks