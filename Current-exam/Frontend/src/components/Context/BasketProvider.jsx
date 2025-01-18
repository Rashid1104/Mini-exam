import React, { createContext, useContext, useState, useEffect } from 'react'

export const BasketContext = createContext()

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([])

useEffect(() => {
  const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
  setBasket(storedBasket)

}, [])



  const AddToBasket = (arivall)  =>{
    const updateBasket = [...basket];
    const idx = updateBasket.findIndex((q)=> q._id === arivall._id)

    if (idx >= 0) {
      updateBasket[idx].quantity += 1;
      
    }else{
      updateBasket.push({...arivall,quantity: 0})
    }

  }
  const removeFromBasket = (id) =>{
    setBasket((item)=> item.filter((q)=>q._id !== id))
  }
  const IncBasket = (id) =>{
    setBasket((item)=> item.filter((q)=>q._id === id ? {...q,quantity: q.quantity + 1}: q))
  }
  const DecrBasket = (id) =>{
    setBasket((item)=> item.filter((q)=>(q._id === id && item.quantity > 1) ? {...q,quantity: q.quantity - 1}: q))
  }
  return (
    <BasketContext.Provider value={{basket,AddToBasket,removeFromBasket,IncBasket,DecrBasket}}>{children}</BasketContext.Provider>
  )
}

export default BasketProvider