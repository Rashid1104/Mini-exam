import React, { createContext, useContext, useState, useEffect } from 'react'
import Swal from 'sweetalert2'

export const BasketContext = createContext([])

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([])

  const AddToBasket = (arivall)  =>{
    setBasket((bas)=>{
      const idx = basket.findIndex((q)=>q._id === arivall._id)

      if (idx === -1) {
        return [...bas,{...arivall,quantity: 1}]
      }
      bas[idx].quantity++
      return [...bas]
    })

console.log(basket);

  }
  const removeFromBasket = (arivall) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        setBasket((item)=> item.filter((q)=>q._id !== arivall._id))
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });   
  
  }
  const IncBasket = (arivall) =>{
    setBasket((item)=>{
      const found = item.find((q)=>q._id === arivall._id)
      found.quantity++
      return [...item]
    })
  }
  const DecrBasket = (arivall) =>{
    setBasket((item)=>{
      const found = item.find((q)=>q._id === arivall._id)
      found.quantity--
      if (found.quantity === 0) {
        return item.filter((q)=>q._id !== arivall._id)
      }
      return [...item]
    })
  }

  const ClearBasket =() =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
      setBasket([])
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });   
  }

  const calPrice = () =>{
    return basket.reduce((sum,curr)=> sum + curr.price * curr.quantity,0).toFixed(2)
  }
  return (
    <BasketContext.Provider value={{basket,AddToBasket,removeFromBasket,IncBasket,DecrBasket,ClearBasket,calPrice}}>{children}</BasketContext.Provider>
  )
}

export default BasketProvider