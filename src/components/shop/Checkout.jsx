"use client"

import React, { useState, useContext, useMemo  } from 'react'
import Image from 'next/image'
import { ShoppingContext } from '../../context/ShoppingContext'

export default function Checkout () {
    const [ deliveryMethod, setDeliveryMethod ] = useState('storePickUp')
    const [ activeStep, setActiveStep ] = useState(1)

    // const { ShoppingContextValues } = useContext(ShoppingContext)

    const handleDeliveryMethodChange = (event) => {
        setDeliveryMethod(event.target.value)
    }

    const handleStepChange = (step) => {
        setActiveStep(step)
    }

    
    return (
        <section className="text-center ">
            <div className="bg-green-200 bg-opacity-10 rounded-2xl shadow-md p-8 pt-2 mx-4 ">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Checkout</h3>
                <div className="flex flex-col lg:flex-row mt-8">
                    <div className="w-full lg:w-1/2 order-2 p-2 dark:bg-green-800 bg-green-300 rounded-lg flex flex-col items-center ">
                        <div className="flex items-center">
                            <button onClick={() => handleStepChange(1)} className="flex text-sm text-green-500 focus:outline-none">
                                <span className="flex items-center justify-center text-white bg-green-500 rounded-full h-5 w-5 mr-2">1</span> Contacts
                            </button>
                            <button onClick={() => handleStepChange(2)} disabled={activeStep < 1} className="flex text-sm  ml-8 focus:outline-none font-bold">
                                <span className="flex items-center justify-center border-2 border-green-500 rounded-full h-5 w-5 mr-2">2</span> Shipping
                            </button>
                            <button onClick={() => handleStepChange(3)} disabled={activeStep < 2} className="flex text-sm  ml-8 focus:outline-none opacity-50">
                                <span className="flex items-center justify-center border-2 border-gray-500 rounded-full h-5 w-5 mr-2">3</span> Payments
                            </button>
                        </div>
                        <form className="mt-8 lg:w-3/4">

                            {/* for checkout step content */}
                            <RenderStepContent deliveryMethod={deliveryMethod} activeStep={activeStep} handleDeliveryMethodChange={handleDeliveryMethodChange}/>  
                            {/* end checkout step content */}

                            <div className="flex items-center justify-between mt-8">
                                <button type="button" disabled={activeStep === 1} onClick={() => handleStepChange(activeStep -1)} className={`${activeStep === 1? 'opacity-10' : ''} flex items-center  text-sm font-medium rounded hover:underline focus:outline-none`}>
                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                                    <span className="mx-2">{activeStep === 1 ? 'Back to cart' : 'Back step'}</span>
                                </button>
                                <button type="button" onClick={() => handleStepChange(activeStep + 1)} className="flex items-center px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500">
                                    <span>{activeStep === 3 ? 'Place Order' : 'Next step'}</span>
                                    <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </button>   
                            </div>
                        </form>
                    </div>


                    {/* Right Content */}
                    <div className="w-full mb-8 flex-shrink-0 order-1 lg:w-1/2 lg:mb-0 lg:order-2">
                        <div className="flex justify-center">
                            <div className="rounded-md max-w-md w-full px-4 py-3 dark:bg-green-800 bg-green-300">
                                <div className="flex items-center justify-between">
                                    <h3 className=" font-medium">Order total (3)</h3>
                                    <span className=" text-sm">Edit</span>
                                </div>
                                <div className="flex justify-between mt-6">
                                    <div className="flex">
                                        <Image width={500} height={500} className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1542282910-7337bcfea235?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG9yZ2FuaWMlMjBkcmlua3N8ZW58MHx8MHx8fDA%3D" alt="Product Image"/>
                                        <div className="mx-3">
                                            <h3 className="text-sm ">Royal Red berry</h3>
                                            <div className="flex items-center mt-2">
                                                <button className="focus:outline-none focus:">
                                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                </button>
                                                <span className=" mx-2">2</span>
                                                <button className="focus:outline-none focus:">
                                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="">
                                        R 38 <span className="opacity-50 italic text-sm">delux</span>
                                    </p>
                                </div>
                                <div className="flex justify-between mt-6">
                                    <div className="flex">
                                        <Image width={500} height={500} className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1560526860-1f0e56046c85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3JnYW5pYyUyMGRyaW5rc3xlbnwwfHwwfHx8MA%3D%" alt="Product Image"/>
                                        <div className="mx-3">
                                            <h3 className="text-sm ">Orange & Cherry mix</h3>
                                            <div className="flex items-center mt-2">
                                                <button className="focus:outline-none focus:">
                                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                </button>
                                                <span className=" mx-2">1</span>
                                                <button className="focus:outline-none focus:">
                                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="">
                                        R 35 <span className="opacity-50 italic text-sm">special</span>
                                    </p>
                                </div>
                                <div className="flex justify-between mt-6">
                                    <div className="flex">
                                        <Image width={500} height={500} className="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1543648973-1eb94629e7a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG9yZ2FuaWMlMjBkcmlua3N8ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1543648973-1eb94629e7a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG9yZ2FuaWMlMjBkcmlua3N8ZW58MHx8MHx8fDA%3D" alt="Product Image"/>
                                        <div className="mx-3">
                                            <h3 className="text-sm ">Avocado smoothie</h3>
                                            <div className="flex items-center mt-2">
                                                <button className="focus:outline-none focus:">
                                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                </button>
                                                <span className=" mx-2">1</span>
                                                <button className="focus:outline-none focus:">
                                                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="">
                                        R 32 <span className="opacity-50 italic text-sm">special</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}






const RenderStepContent = ({deliveryMethod,activeStep, handleDeliveryMethodChange}) => {
    switch (activeStep) {
        case 1:
            return (
                // {/* for customer details (name, email, phone, address) */}
                <fieldset className="p-4 dark:bg-green-700 bg-green-400 shadow rounded-lg">
                    <legend className="text-lg font-semibold ">Contact Details</legend>
                    <section className="space-y-4 mt-4">
                        <label className="block">
                            <span className="">First Name:</span>
                            <input type="text" name="firstName" placeholder="Enter your first name" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label>
                        <label className="block">
                            <span className="">Last Name:</span>
                            <input type="text" name="lastName" placeholder="Enter your last name" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label>
                        <label className="block">
                            <span className="">Email:</span>
                            <input type="email" name="email" placeholder="Enter your email" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label>
                        <label className="block">
                            <span className="">Phone:</span>
                            <input type="tel" name="phone" placeholder="Enter your phone number" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label>
                        {/* <label className="block">
                            <span className="">Address:</span>
                            <input type="text" name="address" placeholder="Enter your address" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        </label> */}
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
                            <button type="button" value="storePickUp" onClick={handleDeliveryMethodChange} className={`${deliveryMethod === "storePickUp"? "border-green-500 bg-green-700 bg-opacity-30": "opacity-30 dark:border-green-700 border-green-400"} flex items-center justify-between w-full rounded-md border-2 p-4 focus:outline-none`}>
                                <label className="flex items-center">
                                    <input type="radio" name="deliveryMethod" value="storePickUp" checked={deliveryMethod === "storePickUp"} onChange={handleDeliveryMethodChange} className="form-radio h-5 w-5 text-green-600 "/>
                                    <span className="ml-2 text-sm ">Store Pick Up</span>
                                </label>

                                <span className=" text-sm ">
                                    <span className="line-through">R 8</span> free
                                </span>
                            </button>
                            <button type="button" value="delivery" onClick={handleDeliveryMethodChange} className={`${deliveryMethod === "delivery" ? "border-green-500 bg-green-700 bg-opacity-30" : "opacity-30 dark:border-green-700 border-green-400"} mt-4 flex items-center justify-between w-full rounded-md border-2 p-4 focus:outline-none`}>
                                <label className="flex items-center">
                                    <input type="radio" name="deliveryMethod" value="delivery" checked={deliveryMethod === "delivery"} onChange={handleDeliveryMethodChange} className="form-radio h-5 w-5 text-green-600"/>
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
                                <input type="text" name="streetName" placeholder="Enter your street name" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                            <label className="block">
                                <span className="">Town/City:</span>
                                <input type="text" name="townCity" placeholder="Enter your town or city" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                            <label className="block">
                                <span className="">State:</span>
                                <input type="text" name="state" placeholder="Enter your state" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                            <label className="block">
                                <span className="">Zip Code:</span>
                                <input type="text" name="zipCode" placeholder="Enter your zip code" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                            <label className="block">
                                <span className="">Country:</span>
                                <input type="text" name="country" placeholder="Enter your country" required className="mt-1 p-1 text-center block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
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
                                <select name="paymentMethod" className="mt-1 p-1 text-center text-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <option value="creditCard">Credit Card</option>
                                    <option value="debitCard">Debit Card</option>
                                    <option value="paypal">PayPal</option>
                                </select>
                            </label>
                            <label className="block">
                                <span className="">Card Number:</span>
                                <input type="text" name="cardNumber" placeholder="Enter your card number" className="mt-1 p-1 text-center text-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                            <label className="block">
                                <span className="">Expiry Date:</span>
                                <input type="date" name="expiryDate" className="mt-1 p-1 text-center text-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                            <label className="block">
                                <span className="">CVV:</span>
                                <input type="text" name="cvv" placeholder="Enter your CVV" className="mt-1 p-1 text-center text-gray-400 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </label>
                        </section>
                    </fieldset>
                )   
        default:
            return null
    }
}