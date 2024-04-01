"use client"

import React, { createContext, useState } from 'react'

export const ShoppingContext = createContext()
export const CartContext = createContext()

export const ShoppingProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const toggleCartOpen = () => {
        setCartOpen(!cartOpen)
    }

    // Define the value for the shopping context
    const shoppingContextValues = {
        cartItems,
        setCartItems,
        // Add any other values or functions you want to expose to consumers of the shopping context
    }

    
    return (
        <ShoppingContext.Provider value={{shoppingContextValues, cartOpen, toggleCartOpen }}>
            {children}
        </ShoppingContext.Provider>
    )
}