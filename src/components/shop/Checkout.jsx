"use client"

import Image from 'next/image'

import CheckoutStepContent from './CheckoutStepContent'
import CheckoutList from './CheckoutList'
import ConfirmOrder from './ConfirmOrder'

import { useState, useContext, useEffect, useCallback } from 'react'
import { ShoppingContext } from '../../context/ShoppingContext'

export default function Checkout () {
    const [activeStep, setActiveStep] = useState(1)
    const { cartItems, totalPrice, userData, setUserData } = useContext(ShoppingContext)
    const [completedSteps, setCompletedSteps] = useState({ contacts: false, shipping: false, payment: false })
    const [showConfirOrder, setShowConfirmOrder] = useState(false)

    
    const validateStep = useCallback((step) => {
        switch (step) {
            case 1: // Validate contacts
                return userData.firstName && userData.lastName && userData.email && userData.phone
            case 2: // Validate shipping
                return userData.pickupOption || (userData.streetName && userData.townCity && userData.state && userData.zipCode && userData.country)
            case 3: // Payments validation
                return userData.paymentMethod && userData.cardNumber && userData.expiryDate && userData.cvv
            default:
                return false
        }
    }, [userData])

    useEffect(() => {
        // Update step completion statuses based on validations
        setCompletedSteps({
            contacts: validateStep(1),
            shipping: validateStep(2),
            payment: validateStep(3),
        })
    }, [userData, validateStep])

    const handleStepChange = (step) => {
        // Allow changing to a step only if the current step is validated
        if (step === 1 || (step === 2 && completedSteps.contacts) || (step === 3 && completedSteps.shipping)) {
            setActiveStep(step)
        }
    }
    
    const handleFormChange = (field, value) => {
        setUserData({
            ...userData,
            [field]: value
        })
    }
    

    const placeOrder = () => {
        // console.log("Order placed!", cartItems, totalPrice, userData)
        setShowConfirmOrder(!showConfirOrder)
    }


    return (
        <section className="text-center ">
            <div className="bg-green-200 bg-opacity-10 rounded-2xl shadow-md p-8 pt-2 mx-4 ">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Checkout</h3>
                
                {showConfirOrder? (<ConfirmOrder placeOrder={placeOrder} />) :
                    <div className="flex flex-col lg:flex-row mt-8">
                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 order-2 p-2 dark:bg-green-800 bg-green-300 rounded-lg flex flex-col items-center ">
                            <div className="flex items-center">
                                {/* Contacts Step */}
                                <button onClick={() => handleStepChange(1)} className={`flex text-sm focus:outline-none relative ${activeStep === 1 ? 'text-green-800 dark:text-green-100 font-bold' : 'text-green-500'}`}>
                                    <span className={`flex items-center justify-center ${activeStep > 1 || completedSteps.contacts ? 'bg-green-500 text-white' : 'bg-gray-200 text-green-500'} rounded-full h-5 w-5 mr-2`}>
                                        {completedSteps.contacts ? '✓' : '1'}
                                    </span> 
                                    Contacts
                                    {activeStep === 1 && <span className="absolute top-6 left-0 right-0 border-b-2 border-green-500 transform transition duration-1000 ease-in-out"></span>}
                                </button>

                                {/* Shipping Step */}
                                <button onClick={() => handleStepChange(2)} disabled={!completedSteps.contacts} className={`flex text-sm ml-8 focus:outline-none relative ${activeStep === 2 ? 'text-green-800 dark:text-green-100 font-bold' : completedSteps.contacts ? 'text-green-500' : 'opacity-50'}`}>
                                    <span className={`flex items-center justify-center ${activeStep > 2 || completedSteps.shipping ? 'bg-green-500 text-white' : 'bg-gray-200 text-green-500'} rounded-full h-5 w-5 mr-2`}>
                                        {completedSteps.shipping ? '✓' : '2'}
                                    </span> 
                                    Shipping
                                    {activeStep === 2 && <span className="absolute top-6 left-0 right-0 border-b-2 border-green-500 transform transition duration-500 ease-out"></span>}
                                </button>

                                {/* Payments Step */}
                                <button onClick={() => handleStepChange(3)} disabled={!completedSteps.shipping} className={`flex text-sm ml-8 focus:outline-none relative ${activeStep === 3 ? 'text-green-800 dark:text-green-100 font-bold' : 'opacity-50'}`}>
                                    <span className={`flex items-center justify-center ${completedSteps.payment ? 'bg-green-500 text-white' : 'bg-gray-200 text-green-500'} rounded-full h-5 w-5 mr-2`}>
                                        {completedSteps.payment ? '✓' : '3'}
                                    </span> 
                                    Payments
                                    {activeStep === 3 && <span className="absolute top-6 left-0 right-0 border-b-2 border-green-500 transform transition duration-500 ease-out"></span>}
                                </button>
                            </div>

                            <form className="mt-8 lg:w-3/4">
                                {/* Checkout step content */}
                                <CheckoutStepContent 
                                    activeStep={activeStep} 
                                    onFormChange={handleFormChange} 
                                    userData={userData} 
                                    deliveryMethod={userData.deliveryMethod}  
                                    setDeliveryMethod={(method) => handleFormChange('deliveryMethod', method)}  
                                />  
                                

                                <div className="flex items-center justify-between mt-8">
                                    <button type="button" disabled={activeStep === 1} onClick={() => handleStepChange(activeStep - 1)} className={`${activeStep === 1 ? 'opacity-10' : ''} flex items-center text-sm font-medium rounded hover:underline focus:outline-none`}>
                                        <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
                                        <span className="mx-2">{activeStep === 1 ? 'Back to cart' : 'Back step'}</span>
                                    </button>
                                    <button type="button" onClick={() => activeStep < 3 ? handleStepChange(activeStep + 1) : placeOrder()} className={` flex items-center px-3 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500`}>
                                        <span>{activeStep === 3 ? 'Place Order' : 'Next step'}</span>
                                        <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </button>   
                                </div>
                            </form>
                        </div>

                        {/* Right Content */}
                        <CheckoutList cartItems={cartItems} totalPrice={totalPrice} />
                    </div>
                 }
            </div>
        </section>
    )
}
