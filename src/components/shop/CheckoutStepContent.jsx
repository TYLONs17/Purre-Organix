"use client"

import { useContext } from 'react'
import { ShoppingContext } from '../../context/ShoppingContext'



export default function CheckoutStepContent ({activeStep}) {
    const { userData, handleInputChange, deliveryMethod, setDeliveryMethod, } = useContext(ShoppingContext)

    switch (activeStep) {
        case 1:
            return (
                // {/* for customer details (name, email, phone, address) */}
                <fieldset className="p-4 dark:bg-green-700 bg-green-400 shadow rounded-lg">
                    <legend className="text-lg font-semibold ">Contact Details</legend>
                    <section className="space-y-4 mt-4">
                        <label className="block">
                            <span className="">First Name:</span>
                            <input onChange={handleInputChange} value={userData.firstName} type="text" name="firstName" placeholder="Enter your first name" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label>
                        <label className="block">
                            <span className="">Last Name:</span>
                            <input onChange={handleInputChange} value={userData.lastName} type="text" name="lastName" placeholder="Enter your last name" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label>
                        <label className="block">
                            <span className="">Email:</span>
                            <input onChange={handleInputChange} value={userData.email} type="email" name="email" placeholder="Enter your email" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label>
                        <label className="block">
                            <span className="">Phone:</span>
                            <input onChange={handleInputChange} value={userData.phone} type="tel" name="phone" placeholder="Enter your phone number" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label>
                    </section>
                </fieldset>
            )
        case 2:
            return (
                // {/* for delivery method (delivery method, delivery address, delivery date) */}
                <fieldset>
                    <div>
                        <h4 className="text-sm  font-medium">Delivery method</h4>
                        <div className="mt-6">
                            <button type="button" value="storePickUp" onClick={() => {setDeliveryMethod('storePickUp')}} className={`${userData.deliveryMethod === "storePickUp"? "border-green-500 bg-green-700 bg-opacity-30": "opacity-30 dark:border-green-700 border-green-400"} flex items-center justify-between w-full rounded-md border-2 p-4 focus:outline-none`}>
                                <label className="flex items-center">
                                    <input type="radio" name="deliveryMethod" value="storePickUp" checked={userData.deliveryMethod === "storePickUp"} onChange={() => setDeliveryMethod('storePickUp')} className="form-radio h-5 w-5 text-green-600 "/>
                                    <span className="ml-2 text-sm ">Store Pick Up</span>
                                </label>

                                <span className=" text-sm ">
                                    <span className="line-through">R 8</span> free
                                </span>
                            </button>
                            <button type="button" value="delivery" onClick={() => setDeliveryMethod('delivery')} className={`${userData.deliveryMethod === "delivery" ? "border-green-500 bg-green-700 bg-opacity-30" : "opacity-30 dark:border-green-700 border-green-400"} mt-4 flex items-center justify-between w-full rounded-md border-2 p-4 focus:outline-none`}>
                                <label className="flex items-center">
                                    <input type="radio" name="deliveryMethod" value="delivery" checked={userData.deliveryMethod === "delivery"} onChange={() => setDeliveryMethod('delivery')} className="form-radio h-5 w-5 text-green-600"/>
                                    <span className="ml-2 text-sm ">Delivery</span>
                                </label>

                                <span className=" text-sm">R 26</span>
                            </button>
                        </div>
                    </div>

                    <fieldset className={`${deliveryMethod === 'delivery'? '' : 'opacity-10'} p-4 dark:bg-green-700 bg-green-400 shadow rounded-lg`}>
                        <legend className="">Delivery address</legend>
                        <div className="mt-2 ">
                            <label className="block">
                                <span className="">Street Name:</span>
                                <input onChange={handleInputChange} value={userData.streetName} type="text" name="streetName" placeholder="Enter your street name" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                            <label className="block">
                                <span className="">Town/City:</span>
                                <input onChange={handleInputChange} value={userData.townCity} type="text" name="townCity" placeholder="Enter your town or city" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                            <label className="block">
                                <span className="">State:</span>
                                <input onChange={handleInputChange} value={userData.state} type="text" name="state" placeholder="Enter your state" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                            <label className="block">
                                <span className="">Zip Code:</span>
                                <input onChange={handleInputChange} value={userData.zipCode} type="text" name="zipCode" placeholder="Enter your zip code" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                            <label className="block">
                                <span className="">Country:</span>
                                <input onChange={handleInputChange} value={userData.country} type="text" name="country" placeholder="Enter your country" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                        </div>
                    </fieldset>
                </fieldset> 
            )
        case 3:
            return (
                // {/* for payment method (payment selection and card input fields) */}
                <fieldset className="p-4 dark:bg-green-700 bg-green-400 shadow rounded-lg">
                    <legend className="text-lg font-semibold">Payment Method</legend>
                    <section className="space-y-4 mt-4">
                        <label className="block">
                            <span className="">Payment Method:</span>
                            <select onChange={handleInputChange} value={userData.paymentMethod} name="paymentMethod" className="mt-1 p-1 text-center text-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                <option value="creditCard">Credit Card</option>
                                <option value="debitCard">Debit Card</option>
                                <option value="paypal">PayPal</option>
                            </select>
                        </label>
                        <label className="block">
                            <span className="">Card Number:</span>
                            <input onChange={handleInputChange} value={userData.cardNumber} type="text" name="cardNumber" placeholder="Enter your card number" className="mt-1 p-1 text-center text-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label>
                        <label className="block">
                            <span className="">Expiry Date:</span>
                            <input onChange={handleInputChange} value={userData.expiryDate} type="date" name="expiryDate" className="mt-1 p-1 text-center text-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label>
                        <label className="block">
                            <span className="">CVV:</span>
                            <input onChange={handleInputChange} value={userData.cvv} type="text" name="cvv" placeholder="Enter your CVV" className="mt-1 p-1 text-center text-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label>
                    </section>
                </fieldset>
            )   
        default:
            return null
    }
}