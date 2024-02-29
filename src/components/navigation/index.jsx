import React from 'react'
import Navbar from './navbar'

export default function Navigation () {


    return (
        <section className={`sticky dark:bg-green-950 bg-green-200 border-b-2 md:border-b-4 border-green-950 dark:border-green-400 rounded-b-xl shadow-md md:shadow-lg dark:shadow-green-300 shadow-green-800 max-w-full`}>
            <Navbar />
        </section>
    )
}
