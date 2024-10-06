"use client"

import React, { useRef } from 'react'
import Link from 'next/link'
import Ico0 from '../../components/icons/Ico0'
import UnclickableButton from '../utils/UnclickableButton'

export default function LandingPage() {
    const memeClick = () => {
        // console.log('clicked')
    }
    
    // Create a ref for the welcome content container
    const welcomeContainerRef = useRef(null)

    return (
        <section className="relative bg-green-300 bg-opacity-20 rounded-2xl">
            <div className="container mx-auto px-4 sm:px-12 flex flex-col sm:flex-row items-center relative z-10">
                <div ref={welcomeContainerRef} className="relative flex flex-col items-start space-y-8 sm:py-0 lg:w-[180em]"> {/* welcome content container */}
                    <h1 className="text-center mb-8 ml-4 text-6xl xl:text-7xl font-bold leading-none">Welcome to Purre Organix</h1>
                    <h2 className="text-xl xl:text-3xl uppercase font-bold leading-none tracking-widest -mx-2 mb-6">
                        THE PLACE FOR ANYTHING ORGANIC YOU NEED. RIGHT AT YOUR FINGERTIPS
                    </h2>
                    <div className="xl:text-lg tracking-wider dark:text-green-100 text-gray-700">
                        <p>From farm to family,</p>
                        <p>we deliver the freshest, hand-picked organic produce, packed with seasonal goodness and</p>
                        <p>delivered to your home, office, or a convenient pick-up location.</p>
                    </div>

                    <div className='flex justify-center w-full'>
                        <UnclickableButton onClick={memeClick} containerRef={welcomeContainerRef}>
                            <Link href="/shop" className="self-center shadow-2xl text-white sm:font-xl uppercase py-3 px-6 sm:py-4 sm:px-8 rounded-full bg-green-900 hover:bg-green-800 mt-8 sm:mt-16">
                                ORDER NOW!
                            </Link>
                        </UnclickableButton>
                    </div>
                </div>

                <div className="hidden -right-14 sm:flex items-center justify-center xl:justify-end w-1/2 xl:w-4/6 py-32">
                    <Ico0 />
                </div>
            </div>
        </section>
    )
}
