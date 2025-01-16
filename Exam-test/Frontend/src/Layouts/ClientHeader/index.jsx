import React from 'react'
import { NavLink } from "react-router-dom"
import "./index.css"

const ClientHeader = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                    <NavLink to={"/contacts"}>Contacts</NavLink>
                </li>
                <li>
                    <NavLink to={"/wishlist"}>Favorite</NavLink>
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