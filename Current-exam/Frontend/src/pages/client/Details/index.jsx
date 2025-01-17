import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import "./index.css"

const Details = () => {
    const [arivall, setArivall] = useState(null)
    const DB_URL = "http://localhost:8080"
    const { id } = useParams()

    const getArivall = async () => {
        try {
            const res = await axios(`${DB_URL}/arivalls/${id}`)
            setArivall(res.data.Arivall)
            console.log(res.data.Arivall);

        } catch (error) {
            console.log(error.message);

        }
    }
    useEffect(() => {
        if (id) {
            getArivall()
        }
    }, [id])

    return (
        <div>
            <Helmet>
                <title>Nmaew</title>

            </Helmet>
            {
                arivall && (
                    <div className="row details">
                        <div className="col-6">
                            <img src={arivall.img} alt={arivall.name} width={500} />
                        </div>
                        <div className="col-6 right">
                            <h2>{arivall.name}</h2>
                            <span>{arivall.oldPrice ? <span className='old-price'>${arivall.oldPrice}</span> : ""}  ${arivall.price}</span>
                            <button className='btn'><NavLink to={"/"}>Go Back</NavLink></button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Details