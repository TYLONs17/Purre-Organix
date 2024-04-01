"use client"

import React, { useState, useContext } from "react"
import { ShoppingContext } from "../../context/ShoppingContext"
import { FaShoppingCart } from "react-icons/fa"
import Image from "next/image"


export default function CartIcon () {
    const { cartOpen, toggleCartOpen } = useContext(ShoppingContext)

    return (
        <div onClick={toggleCartOpen}>
            <FaShoppingCart className="mr-1 text-2xl text-green-600 " />
            Cart
        </div>
    )
}