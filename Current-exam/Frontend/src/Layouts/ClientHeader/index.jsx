import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./index.css";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"; 
import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { BasketContext } from '../../components/Context/BasketProvider';
import { FavContext } from '../../components/Context/FavProvider';
import { IoMenu } from "react-icons/io5";

const ClientHeader = () => {
    const { basket } = useContext(BasketContext);
    const { favorite } = useContext(FavContext);
    
    const [menu, setMenu] = useState(false)
    
    return (
        <header className='header'>
            <div className="logo">
                <h3>COLOSHOP</h3>
            </div>

            <div className="nav">
                <nav>
                    <ul>
                        <li>
                            <NavLink to={"/"} className={"logo-nav"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/favorite"} className={"logo-nav"}>Favorites <sup>{favorite.length}</sup></NavLink>
                        </li>
                        <li>
                            <NavLink to={"/shop"} className={"logo-nav"}>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contacts"} className={"logo-nav"}>Contacts</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="other">
                <button className='btn'><IoSearch /></button>
                <button className='btn'><FaUser /></button>
                <button className='btn-cart'>
                    <NavLink to={"/basket"}><FaShoppingCart /></NavLink>
                    <sup>{basket.reduce((sum, curr) => sum + curr.quantity, 0)}</sup>
                </button>
            </div>
        </header>
    );
}

export default ClientHeader;
