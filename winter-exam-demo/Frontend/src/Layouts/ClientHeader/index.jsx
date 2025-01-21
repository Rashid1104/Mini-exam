import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FavContext } from '../../components/context/FavProvider'
import { IoSearch } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { BasketContext } from '../../components/context/BasketProvider';
import "./index.css"

const ClientHeader = () => {
    const { favorite } = useContext(FavContext)
    const { basket } = useContext(BasketContext)
    return (
        <header className='header'>
            <div className="logo">
                <img src="https://preview.colorlib.com/theme/winter/img/logo.png.webp" alt="" />
            </div>
            <div className="nav">
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/favorite"}>Favorite <sup>{favorite.length}</sup></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/shop"}>Shop</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="new">
                <button className='btn'><NavLink to={"/basket"}><FaBasketShopping /></NavLink><span>{basket.reduce((sum, curr) => sum + curr.quantity, 0)}</span></button>
                <button className='btn'><IoSearch /></button>
            </div>
        </header>
    )
}

export default ClientHeader