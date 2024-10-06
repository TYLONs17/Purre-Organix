"use client"

import Image from "next/image"
import { useContext } from "react"
import { ShoppingContext } from "../../context/ShoppingContext"

export default function ProductCard({ id, imageUrl, altText, title, description, price, rating, variant }) {
    const { addToCart } = useContext(ShoppingContext)
  
    const handleAddToCart = () => {
        const newCartItem = { id, title, price, imageUrl, altText, quantity: 1, variant }
        addToCart(newCartItem)
    }

    return (
        <div className="relative transition-all duration-300 ease-in-out">
            <article className="rounded-xl bg-white dark:bg-green-700 p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 w-78 h-96">
                <a href="#">
                    <div className="relative flex items-end overflow-hidden rounded-xl h-40">
                        <Image className="" width={1000} height={1000} src={imageUrl} alt={altText} />
                        <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-green-100 dark:bg-green-800 p-2 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="ml-1 text-sm text-green-900 dark:text-green-200">{rating}</span>
                        </div>
                    </div>

                    <div className="mt-1 p-2">
                        <h2 className="text-green-950 dark:text-green-100 text-lg font-semibold line-clamp-2 overflow-hidden text-ellipsis">
                            {title}
                        </h2>
                        <p className="mt-1 text-sm text-green-700 dark:text-green-300 line-clamp-2 overflow-hidden text-ellipsis">
                            {description}
                        </p>
                        <div className="mt-3 flex items-end justify-between">
                            <p className="text-lg font-bold text-green-500 dark:text-green-300">R{price}</p> 

                            <div onClick={handleAddToCart} className="flex items-center space-x-1.5 rounded-lg bg-green-500 px-4 py-1.5 text-white duration-100 hover:bg-green-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4 w-4">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg>
                                <button className="text-sm">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </a>
            </article>
        </div>
    )
}
