import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import { IoMdInformationCircle } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import "./index.css"
import { NavLink } from 'react-router-dom';
import { IoBagHandle } from "react-icons/io5";
import { FavContext } from '../../../components/Context/FavProvider';
import { BasketContext } from '../../../components/Context/BasketProvider';

const Shop = () => {
    const [arivalls, setArivalls] = useState([])
    const [arivallsCopy, setArivallsCopy] = useState([])
    const [searchQuery, setSearchQuery] = useState("")
    const DB_URL = "http://localhost:8080"

    const { ToggleFav,favorite } = useContext(FavContext)
    const {AddToBasket} = useContext(BasketContext)

    const getArivalls = async () => {
        try {
            const res = await axios(`${DB_URL}/arivalls`)
            setArivalls(res.data.Arivalls)
            setArivallsCopy(res.data.Arivalls)
            console.log(res.data);

        } catch (error) {
            console.log(error.message);

        }
    }
    const handleChange = (e) => {
        let sortedArivalls = null;
        console.log(e.target.value);
        if (e.target.value === "asc") {
            sortedArivalls = [...arivalls].toSorted((a, b) => a.price - b.price)
        } else if (e.target.value === "desc") {
            sortedArivalls = [...arivalls].toSorted((a, b) => b.price - a.price)
        } else {
            sortedArivalls = [...arivallsCopy]
        }
        setArivalls([...sortedArivalls])
    }
    const filteredArivalls = arivalls.filter((a) => a.name.toLowerCase().includes(searchQuery.toLowerCase().trim()))

    useEffect(() => {
        getArivalls()
    }, [])

    return (
        <div>
            <div className="container">
               <div className="row">
                <div className="col-4">
                    <input type="search" placeholder='Search...' className = "search" onChange={(e) => setSearchQuery(e.target.value)}/>
                </div>
                <div className="col-4"></div>
                <div className="col-4">
                <select name="" id="" onChange={handleChange}>
                    <option value="asc">ASC</option>
                    <option value="desc">DESC</option>
                    <option value="default">DEFAULT</option>
                </select>
                </div>
               </div>
                <div className="row arivalls-row">
                    {arivalls.length > 0 && filteredArivalls.map((a) => {
                        return <div className="col-2 arivalls" key={a._id}>
                            <img src={a.img} alt={a.name} width={180} />
                            <div className="texts">
                                <p className='name'>{a.name}</p>
                                <span>{a.oldPrice ? <span className='old-price'>${a.oldPrice}</span> : ""} ${a.price}</span>
                            </div>
                            <div className="icons">
                                <button className='btn'><NavLink to={`details/${a._id}`}><IoMdInformationCircle /></NavLink></button>
                                <button
                                    className='btn'
                                    style={{ color: favorite.find((q) => q._id === a._id) ? "#ff4d4f" : "#8c8c8c" }}
                                    onClick={() => { ToggleFav(a) }}
                                >
                                    <FaHeart />
                                </button>
                                <button 
                                 className='btn'
                                onClick={()=>{AddToBasket(a)}}
                                ><IoBagHandle/></button>
                            </div>
                        </div>




                    })}
                </div>
            </div>

        </div>
    )
}

export default Shop