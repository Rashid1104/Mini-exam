import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from "react-router"
import axios from 'axios'

const Details = () => {
  const DB_URL = "http://localhost:8080"
  const [clother, setClother] = useState([])
  const { id } = useParams()


  const getClother = async () => {
    const res = await axios(`${DB_URL}/clothers/${id}`)
    setClother(res.data.clother)
    console.log(res.data.clother);

  }
  useEffect(() => {
    if (id) {
      getClother()
    }

  }, [])


  return (
    <>
      <div className="ocontainer">
        <div className="row">
          <div className="col-6">
            <img src={clother.imageUrl} alt="" />
          </div>
          <div className="col-6">
            <h3 className='text-name'>{clother.name}</h3>
            <p className='text-name'>{clother.description}</p>
            <span className='text-price'>$ {clother.price}</span>
            <button><NavLink to={'/'}>Go Back</NavLink></button>
          </div>
        </div>
      </div>


    </>
  )
}

export default Details