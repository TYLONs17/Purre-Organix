"use client"

import Link from 'next/link'
import Image from 'next/image'

import { IoTrashBinSharp } from 'react-icons/io5'

import { useContext } from 'react'
import { ShoppingContext } from '../../context/ShoppingContext'

export default function ConfirmOrder({ placeOrder }) {
  const { cartItems, calculateTotal, userData, removeFromCart } = useContext(ShoppingContext)

  return (
    <div className="p-4 dark:bg-green-900 bg-green-200 bg-opacity-40 dark:bg-opacity-40 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Order Confirmation</h2>

      {/* Order Summary */}
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Order Summary</h3>
        <ul className="space-y-4">
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between">
                <div className="relative">
                    <button onClick={() => removeFromCart(item.id)} className="absolute left-0 text-2xl text-red-500 hover:text-red-700 hover:scale-120 hover:shadow-lg transition ease-in-out duration-500">
                        <IoTrashBinSharp />
                    </button>
                    <Image width={500} height={500} className="h-20 w-20 object-cover rounded" src={item.imageUrl} alt={item.title} />
                </div>
              <div className="text-gray-700">{item.title}</div>
              <div className="text-gray-700">R{item.price} x {item.quantity}</div>
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-300 mt-4 pt-2 flex justify-between">
          <span className="font-bold">Total:</span>
          <span className="font-bold">R {calculateTotal()}</span>
        </div>
      </div>

      {/* User Information */}
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Contact Information</h3>
        <div className="text-gray-700">
          <p>Name: {userData.firstName} {userData.lastName}</p>
          <p>Email: {userData.email}</p>
          <p>Phone: {userData.phone}</p>
        </div>
      </div>

      {/* Shipping Information */}
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Shipping Information</h3>
        {userData.pickupOption ? (
          <p className="text-gray-700">Pickup Option: Store Pickup</p>
        ) : (
          <div className="text-gray-700">
            <p>Street: {userData.streetName}</p>
            <p>City: {userData.townCity}</p>
            <p>State: {userData.state}</p>
            <p>Zip Code: {userData.zipCode}</p>
            <p>Country: {userData.country}</p>
          </div>
        )}
      </div>

      {/* Payment Information */}
      <div className="mb-6">
        <h3 className="text-xl font-medium mb-2">Payment Information</h3>
        <div className="text-gray-700">
          <p>Payment Method: {userData.paymentMethod}</p>
          {userData.paymentMethod === 'Credit Card' && (
            <>
              <p>Card Number: **** **** **** {userData.cardNumber.slice(-4)}</p>
              <p>Expiry Date: {userData.expiryDate}</p>
            </>
          )}
        </div>
      </div>

      {/* Back and Confirm Order Buttons */}
      <div className="mt-6 flex justify-between">
        {/* Back Button */}
        {/* <Link href="/shop/checkout"> */}
            <button onClick={placeOrder} className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500 focus:outline-none" >
            Back
            </button>
        {/* </Link> */}

        {/* Confirm Order Button */}
        <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500 focus:outline-none" >
          Confirm Order
        </button>
      </div>

    </div>
  )
}
