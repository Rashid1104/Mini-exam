import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from "axios"
import "./index.css"

const Details = () => {
    const DB_URL = "http://localhost:8080"
    const [arrive, setArrive] = useState(null)
    const { id } = useParams()

    const getArrive = async () => {
        try {
            const res = await axios.get(`${DB_URL}/arrives/${id}`)
            setArrive(res.data.arrive)
            console.log(res.data.arrive)
        } catch (error) {

        }
    }

    useEffect(() => {

        if (id) {
            getArrive()
        }
    }, [id])

    return (
        <div>
            <div className="container">

                {arrive && (
                    <div className="row details">
                        <div className="col-6">
                            <img src={arrive.img} alt={arrive.name} width={400} />
                        </div>
                        <div className="col-6">
                            <p>{arrive.brand}</p>
                            <h2 className='nigga'>{arrive.name}</h2>
                            <h3 className='price-details'>Price: ${arrive.price}</h3>
                            <div>
                            <button className='go-home'><NavLink to={"/"}>Go Back</NavLink></button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Details