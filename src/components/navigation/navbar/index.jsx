"use client"

import React, { useState } from "react"
import Link from "next/link"
import OrganixLogo from "@/components/icons/OrganixLogo"
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"

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
        <OrganixLogo />
        <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/Shop" className="text-xl p-2 border-y-2 border-t-transparent hover:border-t-green-400 border-green-400 rounded-xl hover:text-green-400 ">Shop</Link>
            <Link href="/about" className="text-xl p-2 border-y-2 border-t-transparent hover:border-t-green-400 border-green-400 rounded-xl hover:text-green-400 ">About</Link>
            <Link href="/contact" className="text-xl p-2 border-y-2 border-t-transparent hover:border-t-green-400 border-green-400 rounded-xl hover:text-green-400 ">Contact</Link>
          </div>

          <div className="w-full sm:max-w-sm mt-4 sm:mt-0">
            <form onSubmit={handleSubmit} className="flex mx-auto">
              <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search for products..." className="rounded-l-2xl border-y-4 border-green-400 text-green-950 p-2 flex-grow "  />
              <button onClick={handleClick} className="p-2 bg-green-400 hover:bg-green-600 text-white rounded-r-2xl border-y-4 border-green-400 hover:border-green-600 transition-colors duration-200 "><FaSearch /></button>
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

      <div className="hidden sm:flex justify-around items-center gap-4">
        <div className="flex gap-4">
            <Link href="/Shop" className="text-xl p-2 border-y-2 border-t-transparent hover:border-t-green-400 border-green-400 rounded-xl hover:text-green-400 ">Shop</Link>
            <Link href="/about" className="text-xl p-2 border-y-2 border-t-transparent hover:border-t-green-400 border-green-400 rounded-xl hover:text-green-400 ">About</Link>
            <Link href="/contact" className="text-xl p-2 border-y-2 border-t-transparent hover:border-t-green-400 border-green-400 rounded-xl hover:text-green-400 ">Contact</Link>
        </div>

        <div className="">
            <form onSubmit={handleSubmit} className="flex max-w-sm md:max-w-xs mx-auto ">
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search for products..." className="w-1/2  rounded-l-2xl border-y-4 border-green-400 text-green-950 p-2 flex-grow "  />
                <button onClick={handleClick} className="p-2 bg-green-400 hover:bg-green-600 text-white rounded-r-2xl border-y-4 border-green-400 hover:border-green-600 transition-colors duration-200 "><FaSearch /></button>
            </form>
        </div>

        <div className="flex gap-2">
            <Link href="/login" className="cursor-pointer p-2 flex justify-center items-center border-b-2 border-transparent hover:border-green-400 hover:text-green-400 rounded-xl ">
                <FaUser className="mr-1 text-2xl text-green-600 rounded-full" />
                Login
            </Link> 
            <Link href="/cart" className="cursor-pointer p-2 flex justify-center items-center border-b-2 border-transparent hover:border-green-400 hover:text-green-400 rounded-xl ">
                <FaShoppingCart className="mr-1 text-2xl text-green-600" />
                Cart
            </Link>
        </div>
      </div>
    </section>
  )
}


