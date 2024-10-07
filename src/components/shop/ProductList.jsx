"use client"

import Image from "next/image"
import ProductCard from "./ProductCard"
import { productData } from "./productData"
import { useState, useEffect } from "react" 


export default function ProductList({ addToCart, category, searchTerm }) {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [currentPage, setCurrentPage] = useState(1) 
    const itemsPerPage = 10 

    const openPopup = (product) => {
        // setSelectedProduct(product)z
    }

    const closePopup = () => {
        setSelectedProduct(null)
    }

    const handleConfirmAddToCart = () => {
        if (selectedProduct) {
            addToCart(selectedProduct)
        }
        closePopup()
    }

    const filteredProducts = productData.filter((product) => {
        const matchesCategory = category === "" || product.category === category
        const matchesSearch =
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    // Reset page to 1 when category or search term changes
    useEffect(() => {
        setCurrentPage(1)
    }, [category, searchTerm])

    // Pagination
    const indexOfLastProduct = currentPage * itemsPerPage
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <section className="py-10 bg-green-100 dark:bg-green-800 rounded-3xl">
            <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                
                {currentProducts.map((product, index) => (
                    <div key={index} onClick={() => openPopup(product)}>
                        <ProductCard
                            id={product.id}
                            imageUrl={product.imageUrl}
                            altText={product.altText}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            rating={product.rating}
                            variant={product.variant}
                        />
                    </div>
                ))}

            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center space-x-4 mt-6">
                <button onClick={handlePreviousPage} disabled={currentPage === 1} className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} text-white`} >
                    Previous
                </button>
                <span className="text-lg font-medium text-gray-600 dark:text-gray-300">
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} text-white`} >
                    Next
                </button>
            </div>


        </section>
    )
}