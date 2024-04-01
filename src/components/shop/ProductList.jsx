// "use client"

import Image from "next/image"
import ProductCard from "./ProductCard"
import { productData } from "./productData"
import { FaSprayCanSparkles } from "react-icons/fa6"
import { GiHealing, GiMeal, GiPill } from "react-icons/gi"
import { MdOutlineFastfood } from "react-icons/md"


export default function ProductList ()   {


    return (
        <main className="bg-white">
            

            {/*  Product List  */}
            <section className="py-10 bg-gray-100">
                <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {/* <ProductCard imageUrl={"/products/apples.jpg"} altText={"This is the alt text of the product"} title="Product" description={"This is a product"} price={450} rating={3.9}/>
                    <ProductCard imageUrl={"/products/bananas.jpg"} altText={"This is the alt text of the product"} title="Product" description={"This is a product"} price={450} rating={3.9}/>
                    <ProductCard imageUrl={"/products/oranges.jpg"} altText={"This is the alt text of the product"} title="Product" description={"This is a product"} price={450} rating={3.9}/>
                    <ProductCard imageUrl={"/products/blueberries.jpg"} altText={"This is the alt text of the product"} title="Product" description={"This is a product"} price={450} rating={3.9}/>
                    <ProductCard imageUrl={"/products/broccoli.jpg"} altText={"This is the alt text of the product"} title="Product" description={"This is a product"} price={450} rating={3.9}/>
                    <ProductCard imageUrl={"/products/celery.jpg"} altText={"This is the alt text of the product"} title="Product" description={"This is a product"} price={450} rating={3.9}/>
                    <ProductCard imageUrl={"/products/coffee-beans.jpg"} altText={"This is the alt text of the product"} title="Product" description={"This is a product"} price={450} rating={3.9}/>
                    <ProductCard imageUrl={"/products/flax-seeds.jpg"} altText={"This is the alt text of the product"} title="Product" description={"This is a product"} price={450} rating={3.9}/>
                    <ProductCard imageUrl={"/products/garlic.jpg"} altText={"This is the alt text of the product"} title="Product" description={"This is a product"} price={450} rating={3.9}/>
                    <ProductCard imageUrl={"/products/ginger.jpg"} altText={"This is the alt text of the product"} title="Product" description={"This is a product"} price={450} rating={3.9}/> */}


                    {/* { productData.map((product, index) => ( 
                        <ProductCard imageUrl={product.imageUrl} altText={product.altText} title={product.title} description={product.description} price={product.price} rating={product.rating} key={index}/> 
                    ))} */}

                </div>
            </section>

            

        </main>
    )
}