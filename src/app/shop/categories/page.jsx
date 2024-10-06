'use client'

import CategoriesListings from "../../../components/shop/CategoriesListings"
import ProductList from "../../../components/shop/ProductList"
// import ProductCard from "../../../components/shop/ProductCard"
import { FaSprayCanSparkles } from "react-icons/fa6"
import { GiHealing, GiMeal, GiPill, GiHerbsBundle } from "react-icons/gi"
import { MdOutlineFastfood } from "react-icons/md"

import { useState } from "react"


export default function Categories () {
    const [category, setCategory] = useState('')
    const [searchTerm, setSearchTerm] = useState('') 

    const handleCategoryClick = (categoryName) => {
        setCategory(categoryName)

        // Scroll to ProductList section
        const productListElement = document.getElementById("productList")
        if (productListElement) {
            productListElement.scrollIntoView({ behavior: "smooth" })
        }


    }

    // const productListRef = useRef() 
    
    // // Scroll to product list section
    // const handleScrollToProducts = () => {
    //     if (productListRef.current) {
    //     productListRef.current.scrollIntoView({ behavior: "smooth" })
    //     }
    // }


    return (
        <main className="px-4 py-8 md:px-8 lg:px-16">
            <section className=" bg-green-200 bg-opacity-10 rounded-2xl shadow-md p-8">
                {/*  Title  */}
                <div className="pt-8">
                    <h1 className="text-center text-2xl font-bold">All Products</h1>
                </div>

                {/*  Tab Menu  */}
                <div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-6 justify-center ">
                    <div className="relative group">
                        <button onClick={() => handleCategoryClick('Skin & Beauty')} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-transform duration-400 ease-in-out transform hover:scale-3d hover:scale-110 hover:bg-opacity-30 dark:hover:bg-green-900 hover:bg-green-200 rounded-full hover:shadow-md hover:translateZ-0 ">
                            <FaSprayCanSparkles className="text-4xl"/> Skin & Beauty
                        </button>

                        {/* Tooltip */}
                        <div className="absolute bottom-full opacity-0 group-hover:opacity-90 transition-opacity duration-300 bg-gray-800 px-1 text-white text-sm rounded-lg shadow-lg">
                            100+ Products
                        </div>
                    </div>

                    <div className="relative group">
                        <button onClick={() => handleCategoryClick('Health')} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-transform duration-400 ease-in-out transform hover:scale-3d hover:scale-110 hover:bg-opacity-30 dark:hover:bg-green-900 hover:bg-green-200 rounded-full hover:shadow-md hover:translateZ-0 ">
                            <GiHealing className="text-4xl"/>
                            <span>Health</span>
                        </button>

                        {/* Tooltip */}
                        <div className="absolute bottom-full opacity-0 group-hover:opacity-90 transition-opacity duration-300 bg-gray-800 px-1 text-white text-sm rounded-lg shadow-lg">
                            200+ Products
                        </div>
                    </div>

                    <div className="relative group">
                        <button onClick={() => handleCategoryClick('Snacks & Drinks')} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-transform duration-400 ease-in-out transform hover:scale-3d hover:scale-110 hover:bg-opacity-30 dark:hover:bg-green-900 hover:bg-green-200 rounded-full hover:shadow-md hover:translateZ-0 ">
                            <MdOutlineFastfood className="text-4xl"/>
                            <span>Snacks & Drinks</span>
                        </button>

                        {/* Tooltip */}
                        <div className="absolute bottom-full opacity-0 group-hover:opacity-90 transition-opacity duration-300 bg-gray-800 px-1 text-white text-sm rounded-lg shadow-lg">
                            300+ Products
                        </div>
                    </div>

                    <div className="relative group">
                        <button onClick={() => handleCategoryClick('Food Pantry')} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-transform duration-400 ease-in-out transform hover:scale-3d hover:scale-110 hover:bg-opacity-30 dark:hover:bg-green-900 hover:bg-green-200 rounded-full hover:shadow-md hover:translateZ-0 ">
                            <GiMeal className="text-4xl"/>
                            <span>Food Pantry</span>
                        </button>

                        {/* Tooltip */}
                        <div className="absolute bottom-full opacity-0 group-hover:opacity-90 transition-opacity duration-300 bg-gray-800 px-1 text-white text-sm rounded-lg shadow-lg">
                            400+ Products
                        </div>
                    </div>

                    <div className="relative group">
                        <button onClick={() => handleCategoryClick('Super Foods')} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-transform duration-400 ease-in-out transform hover:scale-3d hover:scale-110 hover:bg-opacity-30 dark:hover:bg-green-900 hover:bg-green-200 rounded-full hover:shadow-md hover:translateZ-0 ">
                        <GiPill className="text-4xl"/>
                        <span>Super Foods</span>
                        </button>

                        {/* Tooltip */}
                        <div className="absolute bottom-full opacity-0 group-hover:opacity-90 transition-opacity duration-300 bg-gray-800 px-1 text-white text-sm rounded-lg shadow-lg">
                            400+ Products
                        </div>
                    </div>

                    <div className="relative group">
                        <button onClick={() => handleCategoryClick('Plants & Herbs')} className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-transform duration-400 ease-in-out transform hover:scale-3d hover:scale-110 hover:bg-opacity-30 dark:hover:bg-green-900 hover:bg-green-200 rounded-full hover:shadow-md hover:translateZ-0 ">
                        <GiHerbsBundle className="text-4xl"/>
                        <span>Plants & Herbs</span>
                        </button>

                        {/* Tooltip */}
                        <div className="absolute bottom-full opacity-0 group-hover:opacity-90 transition-opacity duration-300 bg-gray-800 px-2 py-1 text-white text-sm rounded-lg shadow-lg">
                            400+ Products
                        </div>
                    </div>

                </div>

                

                    

                
                {/*  Categories & Checkout  */}
                <CategoriesListings setCategory={setCategory} setSearchTerm={setSearchTerm}/>

                <hr className="my-4 border-green-300 dark:border-green-800" />

                {/* Product List */}
                <div className="flex justify-center items-center h-full" id="productList">
                    <div className="text-4xl p-1 text-green-200 dark:text-green-950 text-outline-dark-green dark:text-outline-dark-green" >
                        Showing {category ? `Products in ${category}` : 'All Products'}
                    </div>
                </div>

                <hr className="my-4 border-green-300 dark:border-green-800" />
                
                <ProductList category={category} searchTerm={searchTerm} />

                
            </section>
        </main>
    )
}