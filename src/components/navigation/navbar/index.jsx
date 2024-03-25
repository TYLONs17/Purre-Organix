"use client"

import React, { useState } from "react"
import Link from "next/link"
import OrganixLogo from "../../../components/icons/OrganixLogo"
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"
import ToggleDarkMode from "../../../components/layout/ToggleDarkMode"

export default function Navbar() {
  const [search, setSearch] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(search)
  }

  const handleClick = () => {
    // Redirect to search results page
  }

  return (
    <section className="flex flex-col sm:flex-row justify-between items-center gap-4 mx-4 p-4 px-8 ">
      <div className="flex justify-between items-center w-full sm:w-auto">
        <Link href={"/"}>
          <OrganixLogo />        
        </Link>
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden active:opacity-85">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/shop" className="text-xl p-2 border-y-2 border-t-transparent dark:hover:border-t-green-400 hover:border-t-green-900  dark:border-green-400 border-green-900 rounded-xl hover:text-green-400 dark:text-green-300 text-green-600 ">Shop</Link>
            <Link href="/about" className="text-xl p-2 border-y-2 border-t-transparent dark:hover:border-t-green-400 hover:border-t-green-900  dark:border-green-400 border-green-900 rounded-xl hover:text-green-400 dark:text-green-300 text-green-600 ">About</Link>
            <Link href="/contact" className="text-xl p-2 border-y-2 border-t-transparent dark:hover:border-t-green-400 hover:border-t-green-900  dark:border-green-400 border-green-900 rounded-xl hover:text-green-400 dark:text-green-300 text-green-600 ">Contact</Link>
          </div>

          <div className="w-full sm:max-w-sm mt-4 sm:mt-0">
            <form onSubmit={handleSubmit} className="flex mx-auto">
              <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search for products..." className="rounded-l-2xl border-y-4 dark:border-green-400 border-green-900 text-green-950 p-2 flex-grow "  />
              <button onClick={handleClick} className="p-2 dark:bg-green-400 bg-green-900  hover:bg-green-600 text-white rounded-r-2xl border-y-4 border-green-400 hover:border-green-600 transition-colors duration-200 "><FaSearch /></button>
            </form>
          </div>

          <div className="flex gap-2 mt-4 sm:mt-0">
            <Link href="/login" className="p-2 flex justify-center items-center border-b-2 border-transparent hover:border-green-400 hover:text-green-400 rounded-xl ">
                <FaUser className="mr-1 text-2xl text-green-600 rounded-full" />
                Login
            </Link> 
            <Link href="/cart" className="p-2 flex justify-center items-center border-b-2 border-transparent hover:border-green-400 hover:text-green-400 rounded-xl ">
                <FaShoppingCart className="mr-1 text-2xl text-green-600" />
                Cart
            </Link>
          </div>
        </>
      )}

      <div className="hidden lg:block   ">
        <ToggleDarkMode />
      </div>

      <div className="hidden sm:flex justify-around items-center gap-4">
        <div className="flex gap-4">
            <Link href="/shop" className="text-xl p-2 border-y-2 border-t-transparent hover:border-t-green-400 border-green-400 rounded-xl dark:hover:text-green-400 hover:text-green-800 dark:text-green-200 text-green-600 dark:hover:bg-green-900 hover:bg-green-300 active:opacity-85">Shop</Link>
            <Link href="/about" className="text-xl p-2 border-y-2 border-t-transparent hover:border-t-green-400 border-green-400 rounded-xl dark:hover:text-green-400 hover:text-green-800 dark:text-green-200 text-green-600 dark:hover:bg-green-900 hover:bg-green-300 active:opacity-85">About</Link>
            <Link href="/contact" className="text-xl p-2 border-y-2 border-t-transparent hover:border-t-green-400 border-green-400 rounded-xl dark:hover:text-green-400 hover:text-green-800 dark:text-green-200 text-green-600 dark:hover:bg-green-900 hover:bg-green-300 active:opacity-85">Contact</Link>
        </div>

        <div className="">
            <form onSubmit={handleSubmit} className="flex max-w-sm md:max-w-xs mx-auto ">
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search for products..." className="w-1/2  rounded-l-2xl border-y-4 border-green-400 text-green-950 p-2 flex-grow "  />
                <button onClick={handleClick} className="p-2 bg-green-400 hover:bg-green-600 text-white rounded-r-2xl border-y-4 border-green-400 hover:border-green-600 transition-colors duration-200 "><FaSearch /></button>
            </form>
        </div>

        <div className="flex gap-2">
            <Link href="/login" className="cursor-pointer p-2 flex justify-center items-center border-b-2 border-transparent hover:border-green-400 dark:text-green-200 text-green-600 rounded-xl hover:scale-105 transition duration-500 ease-in-out ">
                <FaUser className="mr-1  p-1 text-4xl text-green-600  rounded-full border border-green-500" />
                Login
            </Link> 
            <Link href="/cart" className="cursor-pointer p-2 flex justify-center items-center border-b-2 border-transparent hover:border-green-400 dark:text-green-200 text-green-600 rounded-xl hover:scale-105 transition duration-500 ease-in-out ">
                <FaShoppingCart className="mr-1 text-2xl text-green-600 " />
                Cart
            </Link>
        </div>
      </div>
    </section>
  )
}


