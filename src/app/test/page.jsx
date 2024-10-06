"use client"

import react from 'react'
import ProductList from '../../components/shop/ProductList'
import Checkout from '../../components/shop/Checkout'

export default function Test() {
    // fetch('https://dummyjson.com/products')
    // .then(res => res.json())
    // .then(console.log)


    return (
        <div className="bg-green-600 bg-opacity-10 rounded-2xl shadow-md p-8">
            {/* <ProductList /> */}
            {/* <Checkout /> */}

            <button onClick={() => fetch('https://dummyjson.com/products/food').then(res => res.json()).then(console.log)}> Click this</button>


        </div>
    )
}