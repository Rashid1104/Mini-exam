import React, { useEffect, useState } from 'react'
import axios from "axios"
import Grid from '@mui/material/Grid2';
import { FaInfo } from "react-icons/fa6";
import "./index.css"
import { NavLink } from 'react-router-dom'

const Clothers = () => {
    const [clothers, setClothers] = useState([])
    const DB_URL = "http://localhost:8080"

    const getClothers = async () => {
        const res = await axios(`${DB_URL}/clothers`)
        setClothers(res.data.clothers)
        console.log(res.data.clothers);

    }
    useEffect(() => {
        getClothers()
    }, [])
    return (
        <div className='Clothers'>
            <h1 className='logo-clothers'>Featured Products</h1>
            <div className='black-squire'>
                <Grid container spacing={2}>
                    {clothers.length > 0 && clothers.map((c) => {
                        return <Grid size={4}>

                            <img src={c.imageUrl} alt="" width={300} />
                            <div className="texts">

                                <h5 className='text-name'>{c.name}</h5>
                                <p className='text-name'>{c.description}</p>
                                <span className='text-price'>$ {c.price}</span>
                                <div className='btns'>
                                    <button className='btn'>
                                        Add to Cart
                                    </button>
                                    <button className='info-btn'><NavLink to={`/details/${c._id}`}><FaInfo /></NavLink></button>
                                </div>


                            </div>
                        </Grid>
                    })}
                </Grid>
            </div>
            {/* #A5F3EB */}
        </div>
    )
}

export default Clothers