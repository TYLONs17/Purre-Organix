"use client"

import React, { useState } from "react"


export default function ContactForm () {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted")
    }

    return (
        <div className="md:mt-8">
          <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
          <form onSubmit={handleFormSubmit} className="w-full max-w-lg mx-auto">
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label className="block uppercase tracking-wide dark:text-gray-300 text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  First Name
                </label>
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="appearance-none block w-full bg-gray-200 dark:text-gray-300 text-gray-700 border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide dark:text-gray-300 text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} className="appearance-none block w-full bg-gray-200 dark:text-gray-300 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="Doe"/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide dark:text-gray-300 text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                  Email
                </label>
                <input  value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none block w-full bg-gray-200 dark:text-gray-300 text-gray-700 border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="jane.doe@example.com"/>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide dark:text-gray-300 text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                  Message
                </label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="no-resize appearance-none block w-full bg-gray-200 dark:text-gray-300 text-gray-700 border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white h-32 resize-none" id="grid-message"></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center " >
              <div className="md:w-1/3">
                <button className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                  Submit
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
    )
}