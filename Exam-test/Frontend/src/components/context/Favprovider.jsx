import React from 'react'
import { Children } from 'react';
import { createContext } from 'react';
import { useState } from 'react'

export const FavContext = createContext()

const Favprovider = ({ children }) => {
    const [favorite, setFavorite] = useState([])

    const ToggleFav = (dish) =>{
        const idx = favorite.findIndex((q)=>q._id === dish._id)
        if (idx === -1) {
            setFavorite([...favorite,{...dish}])
        }else{
            setFavorite([...favorite].filter((q)=>q._id !== dish._id))
        }
    }
    const ClearAll = () =>{
        setFavorite([])
    }
    return (
        <FavContext.Provider value={{favorite, ToggleFav, ClearAll}}> {children}</FavContext.Provider>
        
    )
}

export default Favprovider