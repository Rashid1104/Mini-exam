import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const ClientHeader = () => {
    return (
        <header className='header'>
            <div className="logo">
                <h3>COLOSHOP</h3>
            </div>
            <div className="nav">
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/favorite"}>Favorites</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/shop"}>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contacts"}>contacts</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="other">
                <button className='btn'><IoSearch /></button>
                <button className='btn'><FaUser /></button>
                <button className='btn-cart'><NavLink to={"/basket"}><FaShoppingCart /></NavLink></button>


            </div>
        </header>
    )
}

export default ClientHeader