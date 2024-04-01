import React from "react"
import Categories from "../../components/shop/Categories"

export default function Shop () {
    return (
        <section className="px-4 py-8 md:px-8 lg:px-16 xl:px-32 text-center">
            <div className="mx-auto bg-green-200 bg-opacity-10 p-8 rounded-2xl shadow-md">
                <h1 className="text-3xl lg:text-5xl font-bold mb-4">Shop</h1>
                <h2 className="text-xl lg:text-3xl italic font-semibold mb-2">Unveiling the Season&apos;s Best: Explore Our Organic Harvest</h2>
                <p className="dark:text-gray-300 text-gray-600">
                    Welcome to a vibrant tapestry of farm-fresh flavors, curated just for you.! 
                    We are proud to offer a wide variety of organic offerings. Our produce is hand picked with love and care, and we are excited to share the bounty of our harvest with you.
                </p>

                <hr className="my-8 border-4 border-green-500 rounded-full" />

                <Categories />
            </div>

            
        </section>
    )
}