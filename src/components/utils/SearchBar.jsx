"use client"

import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

export default function SearchBar() {
  const [search, setSearch] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (search.trim() !== "") {
      // Handle search logic here (e.g., make an API call or filter product list)
      console.log(`Searching for: ${search}`)
      // Optionally, redirect to a search results page
    } else {
      console.log('Please enter a search term.')
    }
  }

  const handleClick = () => {
    if (search.trim() !== "") {
      console.log(`Button clicked, searching for: ${search}`)
      // Trigger search or redirect logic here as needed
    }
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex max-w-sm md:max-w-xs mx-auto">
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search for products..." className="text-center w-1/2 rounded-l-2xl border-y-4 border-green-400 text-green-950 p-2 flex-grow" />
        <button onClick={handleClick} className="p-2 bg-green-400 hover:bg-green-600 text-white rounded-r-2xl border-y-4 border-green-400 hover:border-green-600 transition-colors duration-200" >
          <FaSearch />
        </button>
      </form>
    </div>
  )
}
