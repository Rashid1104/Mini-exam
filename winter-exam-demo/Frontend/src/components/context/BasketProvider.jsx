import React, { createContext, useState } from 'react'
import Swal from 'sweetalert2'

export const BasketContext = createContext([])
const BasketProvider = ({ children }) => {
    const [basket, setbasket] = useState([])


    const ClearAllBasket = () => {
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
                setbasket([])
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    const ClearAInBasket = (arrives) => {
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
                setbasket((item) => item.filter((q) => q._id !== arrives._id))             
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    const AddToBasket = (arrives) => {
        setbasket((bas) => {
            const idx = basket.findIndex((q) => q._id === arrives._id)
            if (idx === -1) {
                return [...bas, { ...arrives, quantity: 1 }]
            }
            bas[idx].quantity++
            return [...bas]

        })
    }

    const IncToBasket = (arrives) => {
        setbasket((item) => {
            const found = item.find((q) => q._id === arrives._id)
            found.quantity++
            return [...item]

        })

    }
    const DecToBasket = (arrives) => {
        setbasket((item) => {
            const found = item.find((q) => q._id === arrives._id)
            if (found.quantity === 0) {
                return [...item].filter((q) => q._id !== arrives._id)
            }
            found.quantity--
            return [...item]

        })

    }

    const AllPrice = () => {
        return basket.reduce((sum, curr) => sum + curr.price * curr.quantity, 0).toFixed(2)
    }
    return (
        <BasketContext.Provider value={{ basket, AddToBasket, ClearAllBasket, ClearAInBasket, IncToBasket, AllPrice, DecToBasket }}>{children}</BasketContext.Provider>
    )
}

export default BasketProvider