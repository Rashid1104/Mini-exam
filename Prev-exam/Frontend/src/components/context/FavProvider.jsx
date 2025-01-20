import React, { createContext, useState } from 'react'
import Swal from 'sweetalert2'

export const FavContext = createContext()
const FavProvider = ({children}) => {
  const [favorite, setFavorite] = useState([])

  const ToggleFav = (clock)=>{
    const idx = favorite.findIndex((q)=>q._id === clock._id)
    if (idx === -1) {
      setFavorite([...favorite,{...clock}])
    }else{
      setFavorite([...favorite].filter((q)=>q._id !== clock._id))
    }

  }
  const ClearFav = ()=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        setFavorite([])
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <FavContext.Provider value={{favorite,ClearFav,ToggleFav}}>{children}</FavContext.Provider>
  )
}

export default FavProvider