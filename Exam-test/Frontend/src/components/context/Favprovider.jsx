import React from 'react'
import { Children } from 'react';
import { createContext } from 'react';
import { useState } from 'react'

export const Favcontext = createContext(null);

const Favprovider = ({ children }) => {
    const [favorite, setFavorite] = useState([])

    const toggleFav = (dish) => {
        const idx = favorite.findIndex((q) => q._id === dish._id)
        if (idx === -1) {
            setFavorite([...favorite, { ...dish }])
        } else {
            setFavorite([...favorite.filter((q) => q._id !== dish._id)])
        }
    }
    return (
        <Favcontext.Provider value={{ favorite, toggleFav }}
        > {children}</Favcontext.Provider>
    )
}

export default Favprovider