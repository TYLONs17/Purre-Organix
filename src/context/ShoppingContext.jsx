"use client"

import React, { createContext, useState } from 'react'

export const ShoppingContext = createContext()

export const ShoppingProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    // User data for checkout flow
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        pickupOption: false,
        deliveryMethod: 'delivery',
        streetName: '',
        townCity: '',
        state: '',
        zipCode: '',
        country: '',
        paymentMethod: '',
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    })

    // Checkout step tracking
    const [activeStep, setActiveStep] = useState(1)

    // Handle input change for checkout form
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    // Set delivery method (storePickUp or delivery)
    const setDeliveryMethod = (method) => {
        setUserData(prevData => ({
            ...prevData,
            deliveryMethod: method,
            pickupOption: method === 'storePickUp'
        }))
    }

    // Validate each step of the checkout process
    const isStepComplete = (step) => {
        switch (step) {
            case 1:
                return userData.firstName && userData.lastName && userData.email && userData.phone
            case 2:
                return userData.deliveryMethod === 'storePickUp' || (userData.streetName && userData.townCity && userData.state && userData.zipCode && userData.country)
            case 3:
                return userData.paymentMethod && userData.cardNumber && userData.expiryDate && userData.cvv
            default:
                return false
        }
    }

    // Toggle cart visibility
    const toggleCartOpen = () => {
        setCartOpen(!cartOpen)
    }

    // Add product to cart
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id)
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            } else {
                return [...prevItems, { ...product, quantity: 1 }]
            }
        })
    }

    // Remove product from cart
    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId))
    }

    // Update item quantity
    const updateCartItemQuantity = (productId, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map(item =>
                item.id === productId
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        )
    }

    // Increment quantity
    const incrementItemQuantity = (productId) => {
        const item = cartItems.find(item => item.id === productId)
        if (item) {
            updateCartItemQuantity(productId, item.quantity + 1)
        }
    }

    // Decrement quantity
    const decrementItemQuantity = (productId) => {
        const item = cartItems.find(item => item.id === productId)
        if (item && item.quantity > 1) {
            updateCartItemQuantity(productId, item.quantity - 1)
        }
    }

    // Calculate subtotal
    const calculateSubtotal = () => {
        return cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2) 
    }

    // Define a fixed shipment cost
    const shipmentCost = 23.00

    // Calculate discount 
    const discountAmount = 10.00 

    // Calculate total price including shipment and discount
    const calculateTotal = () => {
        const subtotal = parseFloat(calculateSubtotal())
        const total = (subtotal + shipmentCost - discountAmount).toFixed(2)
        return total > 0 ? total : '0.00'
    }

    // Clear cart
    const clearCart = () => {
        setCartItems([])
    }

    // Define the value for the shopping context
    const shoppingContextValues = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        incrementItemQuantity,
        decrementItemQuantity,
        calculateSubtotal,
        shipmentCost,
        discountAmount,
        calculateTotal,
        clearCart,
        toggleCartOpen,
        cartOpen,
        userData,
        handleInputChange,
        isStepComplete,
        setDeliveryMethod,
        activeStep,
        setActiveStep,
    }

    return (
        <ShoppingContext.Provider value={shoppingContextValues}>
            {children}
        </ShoppingContext.Provider>
    )
}
