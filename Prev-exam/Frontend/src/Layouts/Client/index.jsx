import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { BasketContext } from '../../components/context/BasketProvider'
import { FavContext } from '../../components/context/FavProvider'

const ClientHeader = () => {
    const {basket} = useContext(BasketContext)
    const {favorite} = useContext(FavContext)
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/favorite"}>Favorites <sup>{favorite.length}</sup></NavLink>
                </li>
                <li>
                    <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to={"/oclocks"}>Oclocks</NavLink>
                </li>
                <li>
                    <NavLink to={"/basket"}>basket <sup>{basket.reduce((sum,curr)=>sum + curr.quantity,0)}</sup></NavLink>
                </li>
            </ul>

        </nav>
    </header>
  )
}

export default ClientHeader