import React, { createContext, useContext, useState } from 'react'

export const FavContext = createContext();

const FavProvider = ({ children }) => {
    const [favorite, setFavorite] = useState([])

    

    const ToggleFav = (arivalls) => {
        const idx = favorite.findIndex((q) => q._id === arivalls._id)
        if (idx === -1) {
            setFavorite([...favorite, { ...arivalls }])
        } else {
            setFavorite([...favorite].filter((q) => q._id !== arivalls._id))
        }

    }
    const ClearAllFav = () => {
        setFavorite([]); 
      };
    return (
        <FavContext.Provider value={{ favorite, ToggleFav,ClearAllFav }}>{children}</FavContext.Provider>
    )
}

export default FavProvider