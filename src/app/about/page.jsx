import React from 'react'
import Image from 'next/image'
import { MdLocalShipping } from 'react-icons/md'
import { IoMdTime } from 'react-icons/io'
import { FaRegHeart, FaHeartbeat, FaBook } from 'react-icons/fa'
import { FaCartFlatbed } from "react-icons/fa6"
import { GiCardPickup, GiFoodTruck, GiFarmer } from "react-icons/gi"

const AboutPage = () => {
  return (
    <div>
      <section className="px-4 py-8 md:px-8 lg:px-16">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-4">Welcome to Pure Organix, your trusted source for organic products. - <span className="font-bold">and a haven for health-conscious foodies!</span></p>

        <div className="md:flex md:space-x-4 lg:space-x-8 mb-8 justify-center align-center">
          <Image className="w-full md:w-1/2 rounded-2xl" src="/images/pexels-welcome-about.jpg" width="800" height="400" alt="welcome with smile" />

          <div className="mt-4 md:mt-0 md:w-1/2 self-center">
            <p>
              Our market is a passionate purveyor of the finest organic produce, cultivated with love and respect for the earth. 
              We are committed to providing our community with access to the freshest, most flavorful fruits, vegetables, and herbs, all grown using sustainable practices that nourish both body and soul.
            </p>

            <br />

            <div className="mt-4 md:mt-0 md:w-1/2 self-center">
              <p className="mb-2">Our commitment to quality extends beyond our produce to include a wide range of organic products, including:</p>
              <ul className="list-disc list-inside">
                <li>Organic skincare</li>
                <li>Supplements</li>
                <li>Food products</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-2">At Pure Organix, we believe in the power of nature to provide us with the best ingredients for a healthy and sustainable lifestyle.</p>
          <p className="mb-2">Our mission is to bring you the highest quality organic products, carefully sourced and produced to ensure their purity and effectiveness.</p>
          <p className="mb-2">Whether you&apos;re looking for organic skincare, supplements, or food products, we have a wide range of options to suit your needs.</p>
          <p>Join us in our commitment to living a pure and organic life.</p>
        </div>
      </section>

      <section className="bg-gray-900 bg-opacity-50">
        <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl">What makes us special</h2>

            <p className="mt-4 text-gray-300">
              At Pure Organix, we are dedicated to providing our customers with the highest quality organic products. 
              Our commitment to sustainability, health, and wellness is reflected in everything we do, from the way we source our ingredients to the way we package and deliver our products.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4 bg-opacity-50">
                <FaCartFlatbed className="h-5 w-5" />
              </span>
              
              <div>
                <h2 className="text-lg font-bold">Pick-up Options</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Choose your convenience:

                  Pick up your farm-fresh bounty at a nearby location, or have it delivered to your door.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4 bg-opacity-50">
                <IoMdTime className="h-5 w-5" />
              </span>

              <div>
                <h2 className="text-lg font-bold">Same Day Delivery.</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Need it now?

                  We offer same-day delivery for last-minute cravings and fresh starts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4 bg-opacity-50">
                {/* <FaRegHeart className="h-5 w-5" /> */}
                <FaHeartbeat className="h-5 w-5" />
              </span>

              <div>
                <h2 className="text-lg font-bold">Health & Safety Rules.</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Committed to freshness and safety:

                  From field to you, Fresh & Safe. 
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4 bg-opacity-50">
                <GiFoodTruck className="h-5 w-5" />
              </span>

              <div>
                <h2 className="text-lg font-bold">Grab &apos;N Go</h2>

                <p className="mt-1 text-sm text-gray-300">
                  Ready to eat:
                  Convenience meets nutrition with our perfectly balanced grand-and-go options.
                  Fresh salads, sandwiches, and more.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4 bg-opacity-50">
                <GiFarmer className="h-5 w-5" />
              </span>
            

              <div>
                <h2 className="text-lg font-bold">Organic Produce</h2>
                <p className="mt-1 text-sm text-gray-300">
                  Fresh from the farm:
                  Our organic produce is grown without the use of synthetic pesticides and fertilizers, 
                  ensuring you get the freshest, healthiest fruits and vegetables. 
                  From crisp apples to leafy greens, we have everything you need for a nutritious meal.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="shrink-0 rounded-lg bg-gray-800 p-4 bg-opacity-50">
                <FaBook className="h-5 w-5" />
              </span>

              <div>
                <h2 className="text-lg font-bold">Healthy Recipes</h2>
                <p className="mt-1 text-sm text-gray-300">
                  Eat well, live well:
                  Discover a variety of healthy recipes that are as delicious as they are nutritious. 
                  From hearty salads to wholesome main dishes, our recipes make it easy to enjoy healthy eating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default AboutPage
