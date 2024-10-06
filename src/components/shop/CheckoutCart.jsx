"use client"

import Image from 'next/image'
import Link from 'next/link'

import { useContext } from 'react'
import { ShoppingContext } from '../../context/ShoppingContext'

import { AiOutlineClear } from "react-icons/ai"
import { IoTrashBinSharp } from "react-icons/io5"


export default function CheckoutCart({appRightRef, appRightHideRef}) {
  const { cartItems, incrementItemQuantity, decrementItemQuantity, calculateSubtotal, shipmentCost, discountAmount, calculateTotal, removeFromCart, clearCart } = useContext(ShoppingContext)

  const handleStartShopping = () => {
    // Scroll to ProductList section
    const productListElement = document.getElementById("productList")
    if (productListElement) {
        productListElement.scrollIntoView({ behavior: "smooth" })
    }
  }

    return (
        <div ref={appRightRef} className="app-right dark:bg-green-700 bg-green-400 rounded-3xl">
            <button ref={appRightHideRef} className="app-right-hide">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x" viewBox="0 0 24 24">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
            <div className="app-right-content">
                {cartItems.length > 0 ? (
                    <ul className="product-list ">
                        {/* <li className="product-list-item fadeIn">
                            <div className="product-img-wrapper">
                                <Image width={500} height={500} className="product-image" src="https://images.unsplash.com/photo-1542282910-7337bcfea235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9yZ2FuaWMlMjBkcmlua3N8ZW58MHx8MHx8fDA%3D" alt="Product Image" />
                            </div>
                            <div className="product-list-itemContent">
                                <div className="product-info">
                                    <h2 className="product-info-header">
                                        Royal Red berry
                                    </h2>
                                    <p className="product-info-subheader">
                                        R 38 <span className="product-color">delux</span>
                                    </p>
                                </div>  
                                <div className="product-amount-wrapper">
                                    <button className="product-amount-button increase">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-up" viewBox="0 0 24 24">
                                            <path d="M18 15l-6-6-6 6" />
                                        </svg>
                                    </button>
                                    <span className="product-amount">2</span>
                                    <button className="product-amount-button decrease">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </li> */}
                        {cartItems.map((item ) => (
                            console.log(item),
                            <li key={`${item.id}`} className="product-list-item fadeIn">
                                <div className='relative'>
                                    <button onClick={() => removeFromCart(item.id)} className="product-remove-button">
                                        <IoTrashBinSharp />
                                    </button>
                                    <div className="product-img-wrapper ">
                                        <Image width={1000} height={1000} className="product-image" src={item.imageUrl} alt={item.altText} />
                                    </div>
                                </div>
                                
                                <div className="product-list-itemContent">
                                    <div className="product-info">
                                        <h2 className="product-info-header md:w-[160px] truncate">
                                            {item.title}
                                        </h2>
                                        <p className="product-info-subheader">
                                            R {item.price.toFixed(2)} <span className="product-color">{item.variant}</span>
                                        </p>
                                    </div>
                                    <div className="product-amount-wrapper">
                                        <button onClick={() => incrementItemQuantity(item.id)} className="product-amount-button increase">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up" viewBox="0 0 24 24">
                                            <path d="M18 15l-6-6-6 6" />
                                            </svg>
                                        </button>
                                        <span className="product-amount">{item.quantity}</span>
                                        <button onClick={() => decrementItemQuantity(item.id)} className="product-amount-button decrease">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                </ul>
                ) : (
                    <div className="flex flex-col items-center justify-center p-4 mb-4 rounded-lg shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 h-16 text-gray-400 mb-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18M4 7h16M5 11h14M6 15h12M7 19h10" />
                        </svg>
                        <h2 className="text-3xl text-center font-semibold text-gray-700 dark:text-slate-300 mb-2">Looks like Your cart is empty</h2>
                        <p className="text-lg text-center text-gray-500 dark:text-gray-400 mb-4">You haven&apos;t added any items to the cart yet.</p>
                        <button onClick={handleStartShopping} className="px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-950 transition">
                            Start Shopping
                        </button>
                    </div>
                )}

                { cartItems.length > 0 ? 
                    <div className="mt-4 flex justify-center items-center">
                        <button onClick={clearCart} className="clear-cart-button text-red-700 flex justify-center items-center gap-2">
                            <AiOutlineClear /> <span className='text-center'>Clear Cart</span>  <AiOutlineClear />
                        </button>
                    </div>
                : null }
                
                <div className="product-details fadeIn">
                    <div className="product-details-line">
                        <span className="product-details-text">Sub Total</span>
                        <span className="product-details-text amount">R {calculateSubtotal()}</span>
                    </div>
                    <div className="product-details-line">
                        <span className="product-details-text">Shipment</span>
                        <a href="#" className="product-details-link">Check details</a>
                        <span className="product-details-text amount">R {shipmentCost}</span>
                    </div>
                    <div className="product-details-line">
                        <span className="product-details-text">Discount</span>
                        <a href="#" className="product-details-link">Remove</a>
                        <span className="product-details-text amount">R -{discountAmount}</span>
                    </div>
                    <div className="product-details-summary">
                        <span className="product-details-text">Total</span>
                        <span className="product-details-text amount">R {calculateTotal()}</span>
                    </div>
                </div>
            </div>
            
            <Link
                href="/shop/checkout" className={`checkout-link ${cartItems.length === 0 ? 'opacity-90 cursor-not-allowed' : ''}`}
                onClick={(e) => {
                    if (cartItems.length === 0) {
                        e.preventDefault() // Prevent navigation if cart is empty
                    }
                }}
            >
                <button className="checkout-button" disabled={cartItems.length === 0}>
                    Checkout Payment
                </button>
            </Link>
                
            
        </div>
    )
}