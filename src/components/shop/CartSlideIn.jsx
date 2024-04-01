"use client"

import { useContext } from "react"
import { ShoppingContext } from "../../context/ShoppingContext"
import Image from "next/image"


export default function CartSlideIn () {
    const { cartOpen, toggleCartOpen } = useContext(ShoppingContext)


    return (
        <div className={`${cartOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'} z-50 fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto dark:bg-green-950 bg-green-200 border-l-2 md:border-l-4 border-green-950 dark:border-green-400 rounded-l-xl shadow-md md:shadow-lg dark:shadow-green-300 shadow-green-800`}>
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium ">Your cart</h3>
                <button onClick={toggleCartOpen} className=" focus:outline-none">
                    <svg className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
            <hr className="my-3 border-2 border-green-600"/>
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
            <div className="mt-8">
                <form className="flex items-center justify-center">
                    <input className="form-input w-48 bg-opacity-10 border-2 rounded-lg p-2" type="text" placeholder="Add promocode"/>
                    <button className="ml-3 flex items-center px-3 py-2 bg-checkout-background text-white text-sm uppercase font-medium rounded hover:bg-checkout-accent focus:outline-none focus:bg-checkout-accent">
                        <span>Apply</span>
                    </button>
                </form>
            </div>
            <a className="flex items-center justify-center mt-4 px-3 py-2 bg-checkout-background text-white text-sm uppercase font-medium rounded hover:bg-checkout-accent focus:outline-none focus:bg-checkout-accent">
                <span>Chechout</span>
                <svg className="h-5 w-5 mx-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
        </div>
    )
}