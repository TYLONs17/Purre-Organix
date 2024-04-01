"use client"

import "./CategoriesListings.css"
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'


export default function CategoriesListings () {
    const [ isOpen, setIsOpen ] = useState(false)
    const categories = ['Category 1', 'Category 2', 'Category 3']

    const actionButtonRef = useRef()
    const appRightRef = useRef()
    const appLeftRef = useRef()
    const appRightHideRef = useRef()

    useEffect(() => {
        const listItems = document.querySelectorAll('.fadeIn')
        const productBoxes = document.querySelectorAll('.product-box')

        listItems.forEach((listItem, index) => {
            listItem.style.animationDelay = `${index * 0.2}s`
        })

        productBoxes.forEach((productBox, index) => {
            productBox.style.animationDelay = `${index * 0.1}s`
        })

        actionButtonRef.current.addEventListener('click', () => {
            appRightRef.current.classList.add('isOpen')
            appLeftRef.current.classList.add('hide')
        })

        appRightHideRef.current.addEventListener('click', () => {
            appRightRef.current.classList.remove('isOpen')
            appLeftRef.current.classList.remove('hide')
        })
    }, [])

    return (
        <section className="section-body ">
            <div className="app-container dark:bg-green-900 bg-green-200 rounded-3xl">
                <div ref={appLeftRef} className="app-left ">
                    <div className="app-header">
                        <div className="app-filter-wrapper">
                            <button className="filter-dropdown-button">
                                <select name="categories" id="categories" className="appearence-none bg-transparent ">
                                    <option value="">All </option>
                                    <option value="Skin & Beauty">Skin & Beauty</option>
                                    <option value="Food Pantry">Food Pantry</option>
                                    <option value="Tea">Tea</option>
                                    <option value="Snacks">Snacks</option>
                                    <option value="Health">Health</option>
                                    <option value="Super Foods">Super Foods</option>
                                    <option value="Drinks">Drinks</option>
                                    <option value="Plants">Plants</option>
                                    <option value="Herbs">Herbs</option>
                                </select>
                                
                            </button>
                            <input className="filter-search-input" type="text" placeholder="Search..."/>
                        </div>
                        <button ref={actionButtonRef} className="action-button active rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-bag">
                                <defs />
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
                            </svg>
                        </button>
                    </div>

                    <div className="app-left-content">
                        <div className="app-left-content-header">
                            <h1 className="content-title">Discover <span>the best</span></h1>
                            <a href="#" className="content-link underline hover:underline-offset-4 ">See More</a>
                        </div>
                        <div className="app-content-field">
                            <div className="product-box medium">
                                <Image width={500} height={500} className="product-box-image" src="https://images.unsplash.com/photo-1603274737277-f43f54446c7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2tpbiUyMCUyNiUyMGJlYXV0eSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3Dunsplash.com/photos/silver-and-black-tube-type-vape-beside-silver-spoon-and-silver-spoon-9l7r-n1zt-Y" alt="Product"/>
                                <div className="product-box-details dark:bg-green-800 bg-green-200 p-2 rounded-xl">Skin & Beauty <span>55</span></div>
                            </div>         
                            <div className="product-boxes">
                                <div className="product-box-wrapper three">
                                    <div className="product-box medium">
                                        <Image width={500} height={500} className="product-box-image" src="https://images.unsplash.com/photo-1514237487632-b60bc844a47d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEZvb2QlMjBQYW50cnl8ZW58MHx8MHx8fDA%3D" alt="Product"/>
                                        <div className="product-box-details dark:bg-green-800 bg-green-200 p-2 rounded-xl">Food Pantry <span>55</span></div>
                                    </div>
                                    <div className="product-box medium">
                                        <Image width={500} height={500} className="product-box-image" src="https://images.unsplash.com/photo-1504382103100-db7e92322d39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fG1lZGljaW5hbCUyMGhlcmJzfGVufDB8fDB8fHww" alt="Product"/>
                                        <div className="product-box-details dark:bg-green-800 bg-green-200 p-2 rounded-xl">Tea <span>45</span></div>
                                    </div>
                                    <div className="product-box medium">
                                        <Image width={500} height={500} className="product-box-image" src="https://images.unsplash.com/photo-1626202372726-a643f438c997?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fG9yZ2FuaWMlMjBkZXNzZXJ0fGVufDB8fDB8fHww" alt="Product"/>
                                        <div className="product-box-details dark:bg-green-800 bg-green-200 p-2 rounded-xl">Snacks <span>25</span></div>
                                    </div>
                                </div>
                                <div className="product-box-wrapper two">
                                    <div className="product-box medium">
                                        <Image width={500} height={500} className="product-box-image" src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                                        <div className="product-box-details dark:bg-green-800 bg-green-200 p-2 rounded-xl">Health <span>55</span></div>
                                    </div>
                                    <div className="product-box medium">
                                        <Image width={500} height={500} className="product-box-image" src="https://images.unsplash.com/photo-1622484907128-8d408d905d3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3JnYW5pYyUyMHBvd2RlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                                        <div className="product-box-details dark:bg-green-800 bg-green-200 p-2 rounded-xl">Super Foods <span>105</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="app-content-field second">
                            <div className="product-box-wrapper three">
                                <div className="product-box medium">
                                    <Image width={500} height={500} className="product-box-image" src="https://images.unsplash.com/photo-1557753478-d111aef068be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGhlYWx0aHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                                    <div className="product-box-details dark:bg-green-800 bg-green-200 p-2 rounded-xl">Drinks <span>35</span></div>
                                </div>
                                <div className="product-box medium">
                                    <Image width={500} height={500} className="product-box-image" src="https://images.unsplash.com/photo-1453904300235-0f2f60b15b5d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1233&q=80" alt="Product"/>
                                    <div className="product-box-details dark:bg-green-800 bg-green-200 p-2 rounded-xl">plants <span>25</span></div>
                                </div>
                                <div className="product-box medium">
                                    <Image width={500} height={500} className="product-box-image" src="https://images.unsplash.com/photo-1532092367580-3bd5bc78dd9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlcmJhbHxlbnwwfHwwfHx8MA%3D%3D" alt="Product"/>
                                    <div className="product-box-details dark:bg-green-800 bg-green-200 p-2 rounded-xl">Herbs <span>25</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div ref={appRightRef} className="app-right dark:bg-green-700 bg-green-400 rounded-3xl">
                    <button ref={appRightHideRef} className="app-right-hide">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x" viewBox="0 0 24 24">
                            <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                    </button>
                    <div className="app-right-content">
                        <ul className="product-list">
                            <li className="product-list-item fadeIn">
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
                            </li>
                            <li className="product-list-item fadeIn">
                                <div className="product-img-wrapper">
                                    <Image width={500} height={500} className="product-image" src="https://images.unsplash.com/photo-1560526860-1f0e56046c85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3JnYW5pYyUyMGRyaW5rc3xlbnwwfHwwfHx8MA%3D%" alt="product"/>
                                </div>
                                <div className="product-list-itemContent">
                                    <div className="product-info">
                                        <h2 className="product-info-header ">
                                            Orange & Cherry mix
                                        </h2>
                                        <p className="product-info-subheader">
                                            R 35 <span className="product-color">special</span>
                                        </p>
                                    </div>
                                    <div className="product-amount-wrapper">
                                        <button className="product-amount-button increase">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-up" viewBox="0 0 24 24">
                                                <path d="M18 15l-6-6-6 6" />
                                            </svg>
                                        </button>
                                        <span className="product-amount">1</span>
                                        <button className="product-amount-button decrease">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </li>
                            <li className="product-list-item fadeIn">
                                <div className="product-img-wrapper">
                                    <Image width={500} height={500} className="product-image" src="https://images.unsplash.com/photo-1543648973-1eb94629e7a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG9yZ2FuaWMlMjBkcmlua3N8ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1543648973-1eb94629e7a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG9yZ2FuaWMlMjBkcmlua3N8ZW58MHx8MHx8fDA%3D" alt="Product Image" />
                                </div>
                                <div className="product-list-itemContent">
                                    <div className="product-info">
                                        <h2 className="product-info-header">
                                            Avocado smoothie
                                        </h2>
                                        <p className="product-info-subheader">
                                            R 32 <span className="product-color">special</span>
                                        </p>
                                    </div>
                                    <div className="product-amount-wrapper">
                                        <button className="product-amount-button increase">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-up" viewBox="0 0 24 24">
                                                <path d="M18 15l-6-6-6 6" />
                                            </svg>
                                        </button>
                                        <span className="product-amount">1</span>
                                        <button className="product-amount-button decrease">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-chevron-down" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="product-details fadeIn">
                            <div className="product-details-line">
                                <span className="product-details-text">Sub Total</span>
                                <span className="product-details-text amount">R 143.00</span>
                            </div>
                            <div className="product-details-line">
                                <span className="product-details-text">Shipment</span>
                                <a href="#" className="product-details-link">Check details</a>
                                <span className="product-details-text amount">R 23.00</span>
                            </div>
                            <div className="product-details-line">
                                <span className="product-details-text">Discount</span>
                                <a href="#" className="product-details-link">Remove</a>
                                <span className="product-details-text amount">R -10.00</span>
                            </div>
                            <div className="product-details-summary">
                                <span className="product-details-text">Total</span>
                                <span className="product-details-text amount">R 156.00</span>
                            </div>
                        </div>
                    </div>
                    <button className="checkout-button">Checkout Payment</button>
                </div>
            </div>
        </section>
    )
}