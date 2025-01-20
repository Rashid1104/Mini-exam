import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const AdminHeader = () => {
    return (
        <header className='header'>
            <div className="logo">
                <h3>COLOSHOP</h3>
            </div>
            <div className="nav">
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/admin/"} className={"logo-nav"}>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin/add"} className={"logo-nav"}>ADD Arivall</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/admin/table"} className={"logo-nav"}>Table</NavLink>
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

export default AdminHeader