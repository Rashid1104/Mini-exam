import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Details = () => {
    const DB_URL = "http://localhost:8080"
    const [arrive, setArrive] = useState(null)
    const { id } = useParams()

    const getArrive = async () => {
        try {
            const res = await axios(`${DB_URL}/arrives/${id}`)
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
                            <h2>{arrive.name}</h2>
                            <span>$ {arrive.price}</span>
                            <button><NavLink to={"/"}>Go Back</NavLink></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Details