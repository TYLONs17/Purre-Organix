"use client"

import { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingContext } from '../../context/ShoppingContext'

import { IoTrashBinSharp } from 'react-icons/io5'

export default function CheckoutList() {
  const { cartItems, incrementItemQuantity, decrementItemQuantity, calculateSubtotal, shipmentCost, discountAmount, calculateTotal, removeFromCart, clearCart } = useContext(ShoppingContext)

  return (
    <div className="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2">
      <div className="flex justify-center">
        <div className="rounded-md max-w-md w-full px-4 py-3 dark:bg-green-800 bg-green-300">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">Order total ({cartItems.length})</h3>
            
            <Link href="/shop/categories#productList" className="flex items-center justify-center px-3 py-2 bg-slate-800 text-white text-sm uppercase font-medium rounded hover:bg-slate-950 focus:outline-none focus:bg-blue-950">
                <span>Back to Shop</span>
                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M3 12h18m0 0l-6-6m6 6l-6 6"></path>
                </svg>
            </Link>
          </div>

          <div className="mt-4 max-h-[22em] overflow-y-auto pr-4">
            {cartItems.map((product) => (
              <div key={product.id} className="flex justify-between mt-6 hover:shadow-lg">
                <div className="flex">
                  <div className="relative">
                      <button onClick={() => removeFromCart(product.id)} className="absolute left-0 text-2xl text-red-500 hover:text-red-700 hover:scale-120 hover:shadow-lg transition ease-in-out duration-500">
                          <IoTrashBinSharp />
                      </button>
                      <Image width={500} height={500} className="h-20 w-20 object-cover rounded" src={product.imageUrl} alt={product.title} />
                  </div>
                  <div className="mx-3">
                    <h3 className="text-sm">{product.title}</h3>
                    <div className="flex items-center mt-2">
                      <button onClick={() => incrementItemQuantity(product.id)} className="focus:outline-none">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </button>
                      <span className="mx-2">{product.quantity}</span>
                      <button onClick={() => decrementItemQuantity(product.id)} className="focus:outline-none">
                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <p>
                  R {product.price} <span className="opacity-50 italic text-sm">{product.variant}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <form className="flex items-center justify-center">
              <input className="form-input w-48 bg-opacity-10 border-2 rounded-lg p-2" type="text" placeholder="Add promocode" />
              <button className="ml-3 flex items-center px-3 py-2 bg-checkout-background text-white text-sm uppercase font-medium rounded hover:bg-checkout-accent focus:outline-none focus:bg-checkout-accent">
                <span>Apply</span>
              </button>
            </form>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span>Subtotal: R {calculateSubtotal()}</span>
            <span>Shipping: R {shipmentCost}</span>
            <span>Discount: -R {discountAmount}</span>
          </div>

          <a className="flex items-center justify-center mt-4 px-3 py-2 bg-checkout-background text-white text-sm uppercase font-medium rounded hover:bg-checkout-accent focus:outline-none focus:bg-checkout-accent">
            <span>Place Order (R {calculateTotal()})</span>
            <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>

        </div>
      </div>
    </div>
  )
}
