"use client"

import { useContext } from "react"
import { ShoppingContext } from "../../context/ShoppingContext"

import Link from "next/link"
import Image from "next/image"

import { IoTrashBinSharp } from "react-icons/io5"
import { AiOutlineClear } from "react-icons/ai"

export default function CartSlideIn() {
    const { cartOpen, toggleCartOpen, cartItems, incrementItemQuantity, decrementItemQuantity, calculateSubtotal, shipmentCost, discountAmount, calculateTotal, removeFromCart, clearCart } = useContext(ShoppingContext) 

    return (
        <div className={`${cartOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'} z-50 fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto dark:bg-green-950 bg-green-200 border-l-2 md:border-l-4 border-green-950 dark:border-green-400 rounded-l-xl shadow-md md:shadow-lg dark:shadow-green-300 shadow-green-800`}>
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium ">Your cart</h3>
                <button onClick={toggleCartOpen} className="focus:outline-none">
                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <hr className="my-3 border-2 border-green-600" />

            <div className="max-h-[440px] overflow-y-auto">
                {cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between mt-6 hover:shadow-left-top-bottom-lg">
                            <div className="flex">
                                <div className="relative">
                                    <button onClick={() => removeFromCart(item.id)} className="absolute text-red-500 hover:text-red-700 hover:scale-120 hover:shadow-lg transition ease-in-out duration-500">
                                        <IoTrashBinSharp />
                                    </button>
                                    <Image width={500} height={500} className="h-20 w-20 object-cover rounded" src={item.imageUrl} alt={item.title} />
                                </div>
                                <div className="mx-3">
                                    <h3 className="text-sm md:w-[140px] truncate">{item.title}</h3>
                                    <div className="flex items-center mt-6">
                                        <button onClick={() => incrementItemQuantity(item.id)} className="focus:outline-none">
                                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </button>
                                        <span className=" mx-2">{item.quantity}</span>
                                        <button onClick={() => decrementItemQuantity(item.id)} className="focus:outline-none">
                                            <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </button>
                                        <p className="ml-4">
                                            R {item.price.toFixed(2)} <span className="opacity-50 italic text-sm">{item.type}</span>
                                        </p>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col gap-4  mb-4">
                        <p className="mt-6 text-center">Your cart is empty.</p>
                        <Link href={'/shop'} className="px-6 py-3 bg-slate-900 text-white text-center rounded-lg hover:bg-slate-950 transition">Start Shopping </Link>
                    </div>
                )}
            </div>

            { cartItems.length > 0 ? 
                <div className=" flex justify-center items-center">
                    <button onClick={clearCart} className="clear-cart-button text-red-700 flex justify-center items-center gap-2 hover:shadow-lg">
                        <AiOutlineClear /> <span className='text-center'>Clear Cart</span>  <AiOutlineClear />
                    </button>
                </div>
            : null }

            <div className="mt-2">
                <form className="flex items-center justify-center">
                    <input className="form-input w-48 bg-opacity-10 border-2 rounded-lg p-2" type="text" placeholder="Add promocode" />
                    <button className="ml-3 flex items-center px-3 py-2 bg-checkout-background text-white text-sm uppercase font-medium rounded hover:bg-checkout-accent focus:outline-none focus:bg-checkout-accent">
                        <span>Apply</span>
                    </button>
                </form>
            </div>

            <div className="flex items-center justify-between mt-4">
                <div>
                    <span>Subtotal:</span>
                    <p className="text-center">R {calculateSubtotal()}</p>
                </div>
                <div>
                    <span>Shipping:</span>
                    <p className="text-center">R {shipmentCost}</p>
                </div>
                <div>
                    <span>Discount:</span>
                    <p className="text-center">-R {discountAmount}</p>
                </div>
            </div>

            <a className="flex items-center justify-center mt-4 px-3 py-2 bg-checkout-background text-white text-sm uppercase font-medium rounded hover:bg-checkout-accent focus:outline-none focus:bg-checkout-accent">
                <span>Checkout</span>
                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </a>
        </div>
    )
}
