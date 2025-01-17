import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const AdminHeader = () => {
    return (
        <header>
            <div className="logo">
                <div className="input">
                    <input type="search" placeholder='Search' />
                </div>
                <div className='Shoppers'>
                    <h3>Shoppers</h3>
                </div>
                <div className="icons">
                    <FaUser />
                    <FaRegHeart />
                    <FaShoppingCart /> 


                </div>
            </div>

            <div className='nav'>
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/admin"}>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin/add"}>Add Clothers</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin/table"}>Table Clothers</NavLink>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default AdminHeader