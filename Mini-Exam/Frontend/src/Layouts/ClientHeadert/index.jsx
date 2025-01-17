import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const ClientHeader = () => {
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
                    <FaShoppingCart /><sup className='sup'>0</sup>


                </div>
            </div>

            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contacts"}>Contacts</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/basket"}>Basket</NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default ClientHeader